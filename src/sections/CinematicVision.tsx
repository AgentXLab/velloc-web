import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { providersConfig as providersConfigs } from '../config';
import { useLang } from '../i18n';

export default function CinematicVision() {
  const { lang } = useLang();
  const providersConfig = providersConfigs[lang];
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    gsap.set(text, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(text, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  if (!providersConfig.sectionLabel && !providersConfig.title) {
    return null;
  }

  return (
    <section
      id="models"
      ref={sectionRef}
      style={{
        padding: '150px 5vw 80px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {providersConfig.sectionLabel && (
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
            {providersConfig.sectionLabel}
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

        <div ref={textRef} className="flex flex-col" style={{ gap: 24 }}>
          {providersConfig.title && (
            <h2
              style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(36px, 4.5vw, 72px)',
                lineHeight: 1.1,
                letterSpacing: '-1.2px',
                color: '#ffffff',
                margin: 0,
                textWrap: 'balance',
              }}
            >
              {providersConfig.title}
            </h2>
          )}
          {providersConfig.subtitle && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 200,
                fontSize: 17,
                lineHeight: 1.8,
                color: '#dadada',
                margin: 0,
                maxWidth: 600,
                textWrap: 'pretty',
              }}
            >
              {providersConfig.subtitle}
            </p>
          )}
          {providersConfig.highlight && (
            <p
              style={{
                fontFamily: "'EB Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                lineHeight: 1.5,
                color: 'rgba(200, 170, 130, 0.9)',
                margin: '8px 0 40px 0',
                maxWidth: 640,
              }}
            >
              {providersConfig.highlight}
            </p>
          )}

          {providersConfig.groups.length > 0 && (
            <div className="flex flex-col" style={{ gap: 32, maxWidth: 720 }}>
              {providersConfig.groups.map((group) => (
                <div key={group.label} className="flex flex-col" style={{ gap: 14 }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 300,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: 'rgba(200, 170, 130, 0.7)',
                    }}
                  >
                    {group.label}
                  </span>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: '12px 40px' }}
                  >
                    {group.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center"
                        style={{ gap: 14 }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: 'rgba(200, 170, 130, 0.8)',
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "'GeistMono', monospace",
                            fontWeight: 300,
                            fontSize: 14,
                            letterSpacing: '0.2px',
                            color: '#e8e8e8',
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
