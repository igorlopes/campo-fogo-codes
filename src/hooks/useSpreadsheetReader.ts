import { useState, useCallback } from 'react';
import * as XLSX from 'xlsx';

export interface QRCodeData {
  code: string;
}

export function useSpreadsheetReader() {
  const [data, setData] = useState<QRCodeData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        
        const jsonData = XLSX.utils.sheet_to_json<any[]>(ws, { header: 1 });
        
        if (jsonData.length === 0) {
          setError('A planilha está vazia.');
          return;
        }

        let targetColumnIndex = -1;
        let hasHeaderRow = false;

        // Passo 1: Heurística de cabeçalho
        const firstRow = jsonData[0];
        if (firstRow && firstRow.length > 0) {
          const headerKeywords = ['code', 'código', 'codigo', 'chave', 'cupom'];
          for (let i = 0; i < firstRow.length; i++) {
            const cellValue = String(firstRow[i] || '').trim().toLowerCase();
            if (headerKeywords.some(kw => cellValue.includes(kw))) {
              targetColumnIndex = i;
              hasHeaderRow = true;
              break;
            }
          }
        }

        // Passo 2: Heurística de conteúdo estrita (10 a 15 caracteres)
        if (targetColumnIndex === -1) {
          const rowsToCheck = Math.min(jsonData.length, 5);
          let potentialColumns: number[] = [];
          
          for (let r = 0; r < rowsToCheck; r++) {
            const row = jsonData[r];
            if (!row) continue;
            for (let c = 0; c < row.length; c++) {
              const cellValue = String(row[c] || ''); // Avaliação estrita sem trim
              if (cellValue.length >= 10 && cellValue.length <= 15) {
                if (!potentialColumns.includes(c)) {
                  potentialColumns.push(c);
                }
              }
            }
          }
          
          if (potentialColumns.length > 0) {
            // Conforme solicitação: se mais de uma coluna bater o critério, usa-se a primeira.
            targetColumnIndex = potentialColumns[0];
          }
        }

        if (targetColumnIndex === -1) {
          setError('Não foi possível identificar a coluna de códigos na planilha.');
          return;
        }

        const extractedData: QRCodeData[] = [];
        
        const startRow = hasHeaderRow ? 1 : 0;
        for (let i = startRow; i < jsonData.length; i++) {
          const row = jsonData[i];
          if (row && row.length > targetColumnIndex) {
            // Para extração do código em si, damos trim por segurança (a validação estrita era pra identificar a coluna)
            const cellValue = String(row[targetColumnIndex] || '').trim();
            if (cellValue.length > 0) {
              extractedData.push({ code: cellValue });
            }
          }
        }

        if (extractedData.length === 0) {
          setError('Nenhum dado válido encontrado na coluna identificada.');
        } else {
          setData(extractedData);
        }
      } catch (err) {
        setError('Erro ao ler a planilha. Certifique-se de que é um arquivo Excel (.xlsx) ou CSV válido.');
        console.error(err);
      }
    };
    reader.readAsBinaryString(file);
  }, []);

  return { data, error, handleFileUpload };
}
