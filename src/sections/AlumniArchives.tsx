import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { marketplaceConfig as marketplaceConfigs } from '../config';
import { useLang } from '../i18n';

export default function AlumniArchives() {
  const { lang } = useLang();
  const marketplaceConfig = marketplaceConfigs[lang];
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section) return;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (text) {
      gsap.set(text, { opacity: 0, y: 40 });
    }
    cards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 30 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === section) {
              if (text) {
                gsap.to(text, { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' });
              }
              cards.forEach((card) => {
                gsap.to(card, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  delay: 0.2 + cards.indexOf(card) * 0.12,
                  ease: 'power2.out',
                });
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  if (!marketplaceConfig.sectionLabel && !marketplaceConfig.title) {
    return null;
  }

  return (
    <section
      id="marketplace"
      ref={sectionRef}
      style={{
        padding: '150px 5vw 80px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {marketplaceConfig.sectionLabel && (
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
            {marketplaceConfig.sectionLabel}
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
          {marketplaceConfig.title && (
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
              {marketplaceConfig.title}
            </h2>
          )}
          {marketplaceConfig.description && (
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
              {marketplaceConfig.description}
            </p>
          )}

          {marketplaceConfig.entries.length > 0 && (
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: 28, marginTop: 32, maxWidth: 900 }}
            >
              {marketplaceConfig.entries.map((entry, i) => (
                <div
                  key={entry.title}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="flex flex-col"
                  style={{
                    padding: 'clamp(24px, 2.5vw, 36px)',
                    borderRadius: 16,
                    background: 'rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(10px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(10px) saturate(120%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    minHeight: 180,
                    transition: 'border-color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(200, 170, 130, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontWeight: 400,
                      fontSize: 'clamp(24px, 1.8vw, 30px)',
                      lineHeight: 1.2,
                      color: '#ffffff',
                      margin: '0 0 14px 0',
                    }}
                  >
                    {entry.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 200,
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: '#dadada',
                      margin: 0,
                      textWrap: 'pretty',
                    }}
                  >
                    {entry.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
