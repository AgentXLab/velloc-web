import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { openSourceConfig as openSourceConfigs } from '../config';
import { useLang } from '../i18n';

export default function OpenSource() {
  const { lang } = useLang();
  const openSourceConfig = openSourceConfigs[lang];
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    gsap.set(text, { opacity: 0, y: 30 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(text, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (!openSourceConfig.title) {
    return null;
  }

  return (
    <section
      id="open-source"
      ref={sectionRef}
      style={{
        padding: '100px 5vw 80px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {openSourceConfig.sectionLabel && (
          <div
            className="mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
            }}
          >
            {openSourceConfig.sectionLabel}
          </div>
        )}
        <div
          className="mb-16"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <div
          ref={textRef}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          style={{ gap: 40 }}
        >
          <div className="flex flex-col" style={{ gap: 20, flex: '1 1 auto', minWidth: 0 }}>
            <h2
              style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(32px, 4vw, 60px)',
                lineHeight: 1.1,
                letterSpacing: '-1.2px',
                color: '#ffffff',
                margin: 0,
                textWrap: 'balance',
              }}
            >
              {openSourceConfig.title}
            </h2>

            {openSourceConfig.heading && (
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 18,
                  color: 'rgba(200, 170, 130, 0.9)',
                  margin: 0,
                }}
              >
                {openSourceConfig.heading}
              </p>
            )}

            {openSourceConfig.description && (
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: '#dadada',
                  margin: 0,
                  maxWidth: 560,
                  textWrap: 'pretty',
                }}
              >
                {openSourceConfig.description}
              </p>
            )}

            {openSourceConfig.tags.length > 0 && (
              <div className="flex flex-wrap" style={{ gap: 8, marginTop: 4 }}>
                {openSourceConfig.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      letterSpacing: '0.3px',
                      color: 'rgba(218, 218, 218, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 999,
                      padding: '6px 14px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {openSourceConfig.runtimeNote && (
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: '#dadada',
                  opacity: 0.55,
                  margin: '16px 0 0 0',
                  maxWidth: 560,
                  textWrap: 'pretty',
                }}
              >
                {openSourceConfig.runtimeNote}
              </p>
            )}
          </div>

          {openSourceConfig.cta.text && (
            <a
              href={openSourceConfig.cta.href}
              aria-label={openSourceConfig.cta.text}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              style={{
                gap: 10,
                padding: '14px 28px',
                borderRadius: 999,
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontFamily: "'GeistMono', monospace",
                fontSize: 14,
                fontWeight: 300,
                letterSpacing: '0.3px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
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
              {openSourceConfig.cta.text}
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
