import React from 'react';
import { UploadCloud, Settings, Printer } from 'lucide-react';
import type { QRCodeData } from '../hooks/useSpreadsheetReader';

export interface ConfigPanelProps {
  data: QRCodeData[];
  error: string | null;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  titleText: string;
  setTitleText: (val: string) => void;
  customText: string;
  setCustomText: (val: string) => void;
  useIncrementalCode: boolean;
  setUseIncrementalCode: (val: boolean) => void;
  incrementalPrefix: string;
  setIncrementalPrefix: (val: string) => void;
  useInstagram: boolean;
  setUseInstagram: (val: boolean) => void;
  instagramHandle: string;
  setInstagramHandle: (val: string) => void;
  handlePrint: () => void;
}

export function ConfigPanel({
  data,
  error,
  handleFileUpload,
  titleText,
  setTitleText,
  customText,
  setCustomText,
  useIncrementalCode,
  setUseIncrementalCode,
  incrementalPrefix,
  setIncrementalPrefix,
  useInstagram,
  setUseInstagram,
  instagramHandle,
  setInstagramHandle,
  handlePrint,
}: ConfigPanelProps) {
  return (
    <div className="no-print" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      {/* Upload Section */}
      <div className="card-panel">
        <div className="input-group" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <UploadCloud size={20} className="upload-icon" style={{ width: 24, height: 24 }} />
            Importar Planilha
          </h2>
          <label className="upload-zone">
            <UploadCloud className="upload-icon" />
            <span>Clique ou arraste sua planilha (.xlsx, .csv)</span>
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </label>
          {error && <p style={{ color: 'var(--danger)', marginTop: '1rem', fontSize: '0.9rem' }}>{error}</p>}
          {data.length > 0 && (
            <p style={{ color: 'var(--primary)', marginTop: '1rem', fontWeight: 500 }}>
              ✅ {data.length} códigos carregados!
            </p>
          )}
        </div>
      </div>

      {/* Configuration Section */}
      <div className="card-panel">
        <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Settings size={20} /> Configuração do Cartão
        </h2>

        <div className="input-group">
          <label>Título do Cartão</label>
          <input
            type="text"
            className="input-field"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
            placeholder="Ex: Escaneie para resgatar"
          />
        </div>

        <div className="input-group">
          <label>Subtítulo / Descrição</label>
          <input
            type="text"
            className="input-field"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Ex: Prêmio de Resgate!"
          />
        </div>

        <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: useIncrementalCode ? '0.5rem' : '0' }}>
            <input
              type="checkbox"
              id="useIncremental"
              checked={useIncrementalCode}
              onChange={(e) => setUseIncrementalCode(e.target.checked)}
              style={{ width: '16px', height: '16px', cursor: 'pointer', margin: 0 }}
            />
            <label htmlFor="useIncremental" style={{ margin: 0, cursor: 'pointer', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Numeração incremental no cartão</label>
          </div>

          {useIncrementalCode && (
            <div className="input-group" style={{ marginBottom: 0 }}>
              <label style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>Prefixo Numeração</label>
              <input
                type="text"
                className="input-field"
                value={incrementalPrefix}
                onChange={(e) => setIncrementalPrefix(e.target.value)}
                placeholder="Ex: CARD-"
              />
            </div>
          )}
        </div>

        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: useInstagram ? '0.5rem' : '0' }}>
            <input
              type="checkbox"
              id="useInstagram"
              checked={useInstagram}
              onChange={(e) => setUseInstagram(e.target.checked)}
              style={{ width: '16px', height: '16px', cursor: 'pointer', margin: 0 }}
            />
            <label htmlFor="useInstagram" style={{ margin: 0, cursor: 'pointer', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Exibir @ do Instagram no cartão</label>
          </div>

          {useInstagram && (
            <div className="input-group" style={{ marginBottom: 0 }}>
              <label style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>Seu @ no Instagram</label>
              <input
                type="text"
                className="input-field"
                value={instagramHandle}
                onChange={(e) => setInstagramHandle(e.target.value)}
                placeholder="Ex: @meuinstagram"
              />
            </div>
          )}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button
            className="btn"
            onClick={handlePrint}
            disabled={data.length === 0}
            style={{ width: '100%', opacity: data.length === 0 ? 0.5 : 1, cursor: data.length === 0 ? 'not-allowed' : 'pointer' }}
          >
            <Printer size={20} />
            Imprimir / Salvar PDF
          </button>
        </div>
      </div>
    </div>
  );
}
