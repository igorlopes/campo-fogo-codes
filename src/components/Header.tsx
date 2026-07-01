import { ShieldCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="header no-print" style={{ textAlign: 'center' }}>
      <h1>CampoFogo Codes</h1>
      <p>Crie cartões de resgate a partir de uma planilha e imprima em PDF.</p>
      <div style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'left', maxWidth: '600px', border: '1px solid var(--border-color)' }}>
        <ShieldCheck size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
        <p style={{ margin: 0, lineHeight: 1.5 }}>
          <strong>100% Seguro e Privado:</strong> Todo o processamento acontece diretamente no seu navegador! A Planilha utilizada não é salva ou processada externamente.
        </p>
      </div>
    </header>
  );
}
