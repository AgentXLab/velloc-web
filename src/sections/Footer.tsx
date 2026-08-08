import { Download } from 'lucide-react';
import { footerConfig as footerConfigs } from '../config';
import { useLang } from '../i18n';

export default function Footer() {
  const { lang } = useLang();
  const footerConfig = footerConfigs[lang];

  if (!footerConfig.heading && footerConfig.columns.length === 0) {
    return null;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="footer"
      style={{
        padding: '150px 5vw 60px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Final CTA */}
        {footerConfig.heading && (
          <div className="flex flex-col" style={{ marginBottom: 100 }}>
            <h2
              style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(36px, 4.5vw, 72px)',
                lineHeight: 1.12,
                letterSpacing: '-1.2px',
                color: '#ffffff',
                margin: '0 0 16px 0',
                textWrap: 'balance',
              }}
            >
              {footerConfig.heading}
            </h2>
            {footerConfig.subtitle && (
              <p
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontWeight: 200,
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  letterSpacing: '-0.2px',
                  color: '#dadada',
                  margin: '0 0 36px 0',
                }}
              >
                {footerConfig.subtitle}
              </p>
            )}
            <div className="flex flex-wrap items-center" style={{ gap: 16 }}>
              {footerConfig.primaryCta && (
                <a
                  href={footerConfig.primaryCta.href}
                  aria-label={footerConfig.primaryCta.text}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 30px',
                    borderRadius: 999,
                    background: '#f5f5f5',
                    color: '#0a0a0a',
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: '0.3px',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    width: 'fit-content',
                  }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f5f5f5';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Download size={16} strokeWidth={2} aria-hidden="true" />
                {footerConfig.primaryCta.text}
              </a>
            )}
            </div>
          </div>
        )}

        {/* Footer columns */}
        {footerConfig.columns.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 60, marginBottom: 100 }}
          >
            {footerConfig.columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col" style={{ gap: 16 }}>
                {column.title && (
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 300,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: '#dadada',
                      opacity: 0.4,
                      marginBottom: 8,
                    }}
                  >
                    {column.title}
                  </span>
                )}
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (!link.external) handleLinkClick(e, link.href);
                    }}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="nav-link"
                    style={{ width: 'fit-content' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        {footerConfig.disclaimer && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 200,
              fontSize: 12,
              lineHeight: 1.7,
              color: '#dadada',
              opacity: 0.4,
              maxWidth: 560,
              margin: '0 0 40px 0',
            }}
          >
            {footerConfig.disclaimer}
          </p>
        )}

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {footerConfig.copyright && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 200,
                fontSize: 12,
                color: '#dadada',
                opacity: 0.4,
              }}
            >
              {footerConfig.copyright}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
