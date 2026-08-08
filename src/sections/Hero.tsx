import { Download, ArrowRight } from 'lucide-react';
import AmberCascades from './AmberCascades';
import Navigation from './Navigation';
import { heroConfig as heroConfigs } from '../config';
import { useLang } from '../i18n';

export default function Hero() {
  const { lang } = useLang();
  const heroConfig = heroConfigs[lang];

  if (!heroConfig.titleLines.length) {
    return null;
  }

  const handleSecondaryClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <AmberCascades />
      <div
        className="relative z-10 flex flex-col pointer-events-none"
        style={{
          height: '100%',
          padding: '6vh 0',
          gap: 24,
        }}
      >
        {/* Shared width container: nav bar and cards share the same
            horizontal bounds (maxWidth 1280 + 3vw side padding). */}
        <div
          className="flex flex-col"
          style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 3vw', gap: 24 }}
        >
          {/* Menu bar */}
          <Navigation />

          {/* Two-card layout: brand card (left) + action card (right), centered */}
          <div
            className="flex-1 flex items-center justify-center"
            style={{ minWidth: 0 }}
          >
            <div
              className="flex flex-col lg:flex-row items-start lg:items-center justify-center"
              style={{
                width: '100%',
                gap: 'clamp(96px, 9vw, 144px)',
              }}
            >
            {/* Left: brand card */}
            <div
              className="pointer-events-auto flex flex-col"
              style={{
                width: '100%',
                flex: '0 1 58%',
                minWidth: 0,
                minHeight: 'clamp(430px, 42vh, 470px)',
                padding: 'clamp(40px, 4vw, 56px)',
                borderRadius: 20,
                background: 'rgba(255, 255, 255, 0.045)',
                backdropFilter: 'blur(14px) saturate(120%)',
                WebkitBackdropFilter: 'blur(14px) saturate(120%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
              }}
            >
              {/* Eyebrow */}
              {heroConfig.eyebrow && (
                <div
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontWeight: 300,
                    fontSize: 12,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: 'rgba(218, 218, 218, 0.6)',
                    marginBottom: 'clamp(18px, 2vw, 28px)',
                  }}
                >
                  {heroConfig.eyebrow}
                </div>
              )}

              {/* Main title */}
              <h1
                className="text-white"
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontWeight: 400,
                  fontSize: 'clamp(30px, 3.4vw, 56px)',
                  lineHeight: 1.15,
                  letterSpacing: '-2px',
                  textShadow: '0 4px 24px rgba(0,0,0,0.8)',
                  margin: 0,
                  width: 'fit-content',
                }}
              >
                {heroConfig.titleLines.map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </h1>

              {/* Product definition + differentiation */}
              <div
                style={{
                  marginTop: 'clamp(24px, 2.5vw, 36px)',
                  maxWidth: 'min(560px, 100%)',
                }}
              >
                {heroConfig.descriptionLines.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontWeight: 200,
                      fontSize: 'clamp(15px, 1.5vw, 21px)',
                      lineHeight: 1.7,
                      letterSpacing: '-0.3px',
                      color: '#ffffff',
                      margin: i < heroConfig.descriptionLines.length - 1 ? '0 0 14px 0' : 0,
                      textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Brand tagline — EB Garamond italic, amber accent */}
              {heroConfig.taglineLines.length > 0 && (
                <div
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontStyle: 'italic',
                    fontWeight: 600,
                    fontSize: 'clamp(20px, 2vw, 28px)',
                    lineHeight: 1.5,
                    color: 'rgba(200, 170, 130, 0.9)',
                    marginTop: 'clamp(28px, 3vw, 36px)',
                  }}
                >
                  {heroConfig.taglineLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: action card */}
            <div
              className="pointer-events-auto flex flex-col"
              style={{
                width: '100%',
                flex: '0 1 32%',
                minWidth: 0,
                minHeight: 'clamp(360px, 36vh, 400px)',
                padding: 'clamp(28px, 3vw, 40px)',
                borderRadius: 20,
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(14px) saturate(120%)',
                WebkitBackdropFilter: 'blur(14px) saturate(120%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
              }}
            >
              {/* Title */}
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(24px, 2.2vw, 34px)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.5px',
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {heroConfig.rightCard.title}
              </h2>

              {/* Steps */}
              {heroConfig.rightCard.steps.length > 0 && (
                <div className="flex flex-col" style={{ gap: 16, margin: '28px 0 32px 0' }}>
                  {heroConfig.rightCard.steps.map((step) => (
                    <div
                      key={step.index}
                      className="flex items-center"
                      style={{ gap: 14 }}
                    >
                      <span
                        style={{
                          fontFamily: "'Fira Code', monospace",
                          fontWeight: 400,
                          fontSize: 12,
                          color: 'rgba(200, 170, 130, 0.8)',
                          letterSpacing: '1px',
                          flexShrink: 0,
                        }}
                      >
                        {step.index}
                      </span>
                      <span
                        style={{
                          fontFamily: "'GeistMono', monospace",
                          fontWeight: 300,
                          fontSize: 14,
                          letterSpacing: '0.2px',
                          color: 'rgba(230, 230, 230, 0.92)',
                          lineHeight: 1.5,
                        }}
                      >
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Primary: solid light background, full width */}
              <a
                href={heroConfig.primaryCta.href}
                aria-label={heroConfig.primaryCta.text}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  width: '100%',
                  height: 54,
                  borderRadius: 999,
                  background: '#f5f5f5',
                  color: '#0a0a0a',
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.3px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.background = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#f5f5f5';
                }}
              >
                <Download size={16} strokeWidth={2} aria-hidden="true" />
                {heroConfig.primaryCta.text}
              </a>

              {/* Secondary: transparent with border, full width */}
              <a
                href={heroConfig.secondaryCta.href}
                onClick={(e) => handleSecondaryClick(e, heroConfig.secondaryCta.href)}
                aria-label={heroConfig.secondaryCta.text}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  width: '100%',
                  height: 54,
                  borderRadius: 999,
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 14,
                  fontWeight: 300,
                  letterSpacing: '0.3px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  marginTop: 14,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {heroConfig.secondaryCta.text}
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>

              {/* Divider */}
              <div
                style={{
                  width: '100%',
                  height: 1,
                  background: 'rgba(255, 255, 255, 0.12)',
                  margin: '24px 0 20px 0',
                }}
              />

              {/* Footer text */}
              {heroConfig.rightCard.footerText && (
                <p
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontWeight: 200,
                    fontSize: 12,
                    letterSpacing: '0.3px',
                    color: 'rgba(218, 218, 218, 0.55)',
                    margin: '20px 0 0 0',
                  }}
                >
                  {heroConfig.rightCard.footerText}
                </p>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
