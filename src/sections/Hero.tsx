import { useEffect, useState } from 'react';
import { Download, Check, ChevronDown, Copy } from 'lucide-react';
import AmberCascades from './AmberCascades';
import Navigation from './Navigation';
import { BETA_DOWNLOAD_URL, heroConfig as heroConfigs, interpolate } from '../config';
import { useLang } from '../i18n';

// SHA-256 of one installer, read from the GitHub API (the only CORS-enabled
// source). Returns null while loading / on failure so the caller hides it.
function useShaDigest(releaseUrl: string, assetName: string): { version: string; hash: string } | null {
  const [digest, setDigest] = useState<{ version: string; hash: string } | null>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const rel = await (await fetch(releaseUrl)).json();
        const raw = rel.assets?.find((a: { name?: string }) => a.name === assetName)?.digest;
        if (typeof raw !== 'string' || !raw.startsWith('sha256:')) return;
        if (!cancelled) {
          setDigest({ version: rel.tag_name.replace(/^velloc-v?|^v/, ''), hash: raw.slice(7) });
        }
      } catch {
        /* keep it hidden */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [releaseUrl, assetName]);
  return digest;
}

export default function Hero() {
  const { lang } = useLang();
  const heroConfig = heroConfigs[lang];

  const digest = useShaDigest(
    'https://api.github.com/repos/VellocLabs/velloc-bootstrap/releases/latest',
    'VellocSetup.exe'
  );
  const [showSha, setShowSha] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!heroConfig.titleLines.length) {
    return null;
  }

  const isSecondaryExternal = heroConfig.secondaryCta.href.startsWith('http');

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
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: 'clamp(15px, 1.4vw, 19px)',
                      lineHeight: 1.7,
                      letterSpacing: '-0.1px',
                      color: 'rgba(255, 255, 255, 0.92)',
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
                minHeight: 'clamp(300px, 30vh, 340px)',
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
                <div className="flex flex-col" style={{ gap: 12, margin: '20px 0 22px 0' }}>
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
                          fontFamily: "'Inter', sans-serif",
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
                target="_blank"
                rel="noopener noreferrer"
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
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '0.2px',
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

              {/* One line: 'v1.155.2.2 · SHA-256 >' — the label toggles the checksum */}
              {digest && (
                <div style={{ width: '100%', marginTop: 12 }}>
                  <p
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      fontFamily: "'Fira Code', monospace",
                      fontWeight: 400,
                      fontSize: 11,
                      letterSpacing: '0.2px',
                      color: 'rgba(230, 230, 230, 0.6)',
                      margin: 0,
                    }}
                  >
                    {interpolate(heroConfig.versionTemplate, { version: digest.version })}
                    <button
                      type="button"
                      onClick={() => setShowSha((v) => !v)}
                      aria-expanded={showSha}
                      aria-label={heroConfig.copiedText}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginLeft: 6,
                        padding: 0,
                        background: 'none',
                        border: 'none',
                        color: 'rgba(218, 218, 218, 0.55)',
                        cursor: 'pointer',
                      }}
                    >
                      <ChevronDown
                        size={12}
                        strokeWidth={2}
                        aria-hidden="true"
                        style={{
                          transform: showSha ? 'rotate(180deg)' : 'rotate(-90deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                  </p>
                  {showSha && (
                    <div
                      className="flex items-center"
                      style={{ gap: 8, marginTop: 8, justifyContent: 'center' }}
                    >
                      <code
                        style={{
                          fontFamily: "'Fira Code', monospace",
                          fontSize: 11,
                          letterSpacing: '0.2px',
                          color: 'rgba(230, 230, 230, 0.8)',
                          overflowWrap: 'anywhere',
                          textAlign: 'center',
                        }}
                      >
                        {digest.hash}
                      </code>
                      <button
                        type="button"
                        aria-label="Copy SHA-256"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(digest.hash);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                          } catch {
                            /* clipboard unavailable */
                          }
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          padding: '2px 6px',
                          flexShrink: 0,
                          background: 'none',
                          border: 'none',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          color: copied ? 'rgba(134, 239, 172, 0.9)' : 'rgba(218, 218, 218, 0.55)',
                          cursor: 'pointer',
                        }}
                      >
                        {copied ? (
                          <Check size={12} strokeWidth={2} aria-hidden="true" />
                        ) : (
                          <Copy size={12} strokeWidth={2} aria-hidden="true" />
                        )}
                        {copied ? heroConfig.copiedText : ''}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Beta + GitHub share one row, weakest tier */}
              <div
                className="flex items-center"
                style={{ width: '100%', marginTop: 12, gap: 12 }}
              >
                <a
                  href={BETA_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    letterSpacing: '0.2px',
                    color: 'rgba(230, 230, 230, 0.75)',
                    textAlign: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(230, 230, 230, 0.75)';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  {heroConfig.betaCtaText}
                </a>
                <span
                  aria-hidden="true"
                  style={{ color: 'rgba(218, 218, 218, 0.3)', fontSize: 12 }}
                >
                  ·
                </span>
                <a
                  href={heroConfig.secondaryCta.href}
                  target={isSecondaryExternal ? '_blank' : undefined}
                  rel={isSecondaryExternal ? 'noopener noreferrer' : undefined}
                  aria-label={heroConfig.secondaryCta.text}
                  style={{
                    flex: 1,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 12,
                    letterSpacing: '0.2px',
                    color: 'rgba(218, 218, 218, 0.5)',
                    textAlign: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgba(230, 230, 230, 0.85)';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(218, 218, 218, 0.5)';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  {heroConfig.secondaryCta.text} ↗
                </a>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: '100%',
                  height: 1,
                  background: 'rgba(255, 255, 255, 0.12)',
                  margin: '20px 0 14px 0',
                }}
              />

              {/* Footer text: one line, slightly higher contrast */}
              {heroConfig.rightCard.footerText && (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 12,
                    letterSpacing: '0.2px',
                    color: 'rgba(230, 230, 230, 0.65)',
                    margin: 0,
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
