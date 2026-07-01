import { QRCodeSVG } from 'qrcode.react';

export interface RescueCardProps {
  code: string;
  titleText: string;
  customText: string;
  formattedIncremental: string;
  useInstagram: boolean;
  instagramHandle: string;
}

export function RescueCard({
  code,
  titleText,
  customText,
  formattedIncremental,
  useInstagram,
  instagramHandle,
}: RescueCardProps) {
  const bottomText = `${formattedIncremental}${code}`;

  return (
    <div className="qr-card">
      <div className="qr-card-top">
        <div className="qr-card-info">
          <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>{titleText}</h3>

          {useInstagram && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.3rem', marginTop: '0.2rem', color: '#db2777', fontWeight: 600, fontSize: '0.75rem' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span>{instagramHandle}</span>
            </div>
          )}

          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, marginTop: '0.2rem' }}>{customText}</p>
        </div>

        <div className="qr-wrapper">
          <QRCodeSVG
            value={`https://store.pokemongo.com/pt-BR/offer-redemption?passcode=${code}`}
            size={80}
            level="M"
            includeMargin={false}
          />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '0.3rem', borderTop: '1px dashed #e2e8f0', paddingTop: '0.5rem' }}>
        <p style={{ fontSize: '0.65rem', color: '#64748b', margin: 0, fontWeight: 600 }}>
          {bottomText}
        </p>
      </div>
    </div>
  );
}
