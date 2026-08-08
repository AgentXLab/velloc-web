import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { KeyRound, Database, Puzzle } from 'lucide-react';
import { featuresConfig as featuresConfigs, interpolate } from '../config';
import { mockScreenshotConfig as mockScreenshotConfigs } from '../content/capabilities';
import { useLang } from '../i18n';

/**
 * Feature screenshots are scanned at build time from src/assets/features/<id>/.
 * Add any number of images (png/jpg/jpeg/webp/avif) per feature directory;
 * they are auto-detected and played as a carousel. Filenames sort alphabetically.
 */
const shotModules = import.meta.glob('../assets/features/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const shotsByFeature: Record<string, string[]> = {};
for (const [path, url] of Object.entries(shotModules)) {
  const m = path.match(/features\/([^/]+)\//);
  if (m && typeof url === 'string') {
    (shotsByFeature[m[1]] ??= []).push(url);
  }
}
for (const key of Object.keys(shotsByFeature)) {
  shotsByFeature[key].sort();
}

/** Auto-playing carousel with light background (screenshots are light UIs). */
function ShotCarousel({ images }: { images: string[] }) {
  const { lang } = useLang();
  const mock = mockScreenshotConfigs[lang];
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % images.length);
        setVisible(true);
      }, 250);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    setIdx(0);
    setVisible(true);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 12,
        background: 'linear-gradient(160deg, #f4f1ec 0%, #eae6df 100%)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        key={idx}
        src={images[idx]}
        alt={mock.productViewAlt}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.25s ease',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18)',
        }}
      />
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={interpolate(mock.showView, { index: i + 1 })}
              onClick={() => { setIdx(i); setVisible(true); }}
              style={{
                width: i === idx ? 18 : 6,
                height: 6,
                borderRadius: 3,
                border: 'none',
                cursor: 'pointer',
                background: i === idx ? 'rgba(120, 100, 70, 0.8)' : 'rgba(120, 100, 70, 0.25)',
                transition: 'width 0.25s ease, background 0.25s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/** Mock product UI rendered inside the showcase window.
 *  Placeholder until real product screenshots are available. */
function MockScreenshot({ id }: { id: string }) {
  const { lang } = useLang();
  const mock = mockScreenshotConfigs[lang];
  const common = { fontFamily: "'GeistMono', monospace" as const, letterSpacing: '0.2px' as const };

  switch (id) {
    case 'start-coding':
      return (
        <div className="flex flex-col" style={{ gap: 18 }}>
          <div style={{ fontSize: 15, color: '#ffffff', fontWeight: 300, ...common }}>{mock.welcomeTitle}</div>
          <div style={{ fontSize: 12, color: 'rgba(218,218,218,0.6)', ...common }}>{mock.connectPrompt}</div>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10,
              padding: '12px 14px', background: 'rgba(255,255,255,0.04)',
            }}
          >
            <KeyRound size={15} color="#b5a48a" aria-hidden="true" />
            <span style={{ fontSize: 12.5, color: 'rgba(230,230,230,0.85)', ...common }}>sk-ant-••••••••••••••••</span>
          </div>
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 999, background: '#f5f5f5', color: '#0a0a0a',
              padding: '10px 0', fontSize: 12.5, fontWeight: 400, ...common,
            }}
          >
            {mock.saveKeyCta}
          </div>
        </div>
      );
    case 'choose-model':
      return (
        <div className="flex flex-col" style={{ gap: 12 }}>
          <div style={{ fontSize: 15, color: '#ffffff', fontWeight: 300, ...common }}>{mock.modelLabel}</div>
          {[
            { name: 'Default · Claude Sonnet 4', active: true },
            { name: 'Claude Opus 4.5', active: false },
            { name: 'GPT-5.2', active: false },
            { name: 'DeepSeek V4', active: false },
          ].map((m) => (
            <div
              key={m.name}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                border: m.active ? '1px solid rgba(200,170,130,0.5)' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: '10px 12px',
                background: m.active ? 'rgba(200,170,130,0.08)' : 'rgba(255,255,255,0.03)',
              }}
            >
              <span style={{ fontSize: 12.5, color: m.active ? '#ffffff' : 'rgba(218,218,218,0.7)', ...common }}>{m.name}</span>
              {m.active && <span style={{ fontSize: 10, color: '#b5a48a', ...common }}>{mock.activeBadge}</span>}
            </div>
          ))}
        </div>
      );
    case 'remember-project':
      return (
        <div className="flex flex-col" style={{ gap: 12 }}>
          <div style={{ fontSize: 15, color: '#ffffff', fontWeight: 300, ...common }}>{mock.projectMemoryTitle}</div>
          {mock.memoryItems.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                padding: '10px 12px', background: 'rgba(255,255,255,0.03)',
              }}
            >
              <Database size={13} color="#b5a48a" aria-hidden="true" />
              <span style={{ fontSize: 12, color: 'rgba(218,218,218,0.85)', ...common }}>{item}</span>
            </div>
          ))}
        </div>
      );
    case 'right-model':
      return (
        <div className="flex flex-col" style={{ gap: 12 }}>
          <div style={{ fontSize: 15, color: '#ffffff', fontWeight: 300, ...common }}>{mock.modelsByTaskTitle}</div>
          {mock.taskRows.map((row) => (
            <div
              key={row.task}
              className="flex items-center justify-between"
              style={{
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                padding: '10px 12px', background: 'rgba(255,255,255,0.03)',
              }}
            >
              <span style={{ fontSize: 12, color: 'rgba(230,230,230,0.9)', ...common }}>{row.task}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 90, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.08)' }}>
                  <div style={{ height: '100%', width: row.pct + '%', borderRadius: 2, background: 'rgba(200,170,130,0.6)' }} />
                </div>
                <span style={{ fontSize: 11.5, color: 'rgba(200,170,130,0.85)', ...common, width: 52, textAlign: 'right' }}>{row.model}</span>
              </div>
            </div>
          ))}
        </div>
      );
    default: // extend-workflow
      return (
        <div className="flex flex-col" style={{ gap: 12 }}>
          <div style={{ fontSize: 15, color: '#ffffff', fontWeight: 300, ...common }}>{mock.extensionsTitle}</div>
          {mock.extensions.map((ext) => (
            <div
              key={ext.name}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                padding: '10px 12px', background: 'rgba(255,255,255,0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Puzzle size={13} color="#b5a48a" aria-hidden="true" />
                <span style={{ fontSize: 12, color: 'rgba(230,230,230,0.9)', ...common }}>{ext.name}</span>
              </div>
              <span style={{ fontSize: 10, color: 'rgba(218,218,218,0.5)', ...common }}>{ext.tag}</span>
            </div>
          ))}
        </div>
      );
  }
}

export default function Curriculum() {
  const { lang } = useLang();
  const featuresConfig = featuresConfigs[lang];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(featuresConfig.items[0]?.id ?? '');
  const active = featuresConfig.items.find((i) => i.id === activeId) ?? featuresConfig.items[0];
  const shotRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // Fade in the screenshot + detail on switch (200-300ms)
  useEffect(() => {
    const shot = shotRef.current;
    const title = titleRef.current;
    if (!shot || !title) return;
    gsap.fromTo(
      [shot, title],
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out', stagger: 0.06 }
    );
  }, [activeId]);

  if (!featuresConfig.sectionLabel && featuresConfig.items.length === 0) {
    return null;
  }

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative"
      style={{
        padding: '150px 5vw',
        minHeight: '100vh',
        background: 'transparent',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        {featuresConfig.sectionLabel && (
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
            {featuresConfig.sectionLabel}
          </div>
        )}
        <div
          className="mb-20"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        {featuresConfig.title && (
          <h2
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(36px, 4.5vw, 72px)',
              lineHeight: 1.1,
              letterSpacing: '-1.2px',
              color: '#ffffff',
              margin: '0 0 20px 0',
              textWrap: 'balance',
            }}
          >
            {featuresConfig.title}
          </h2>
        )}
        {featuresConfig.subtitle && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 200,
              fontSize: 17,
              lineHeight: 1.8,
              color: '#dadada',
              margin: '0 0 80px 0',
              maxWidth: 640,
              textWrap: 'pretty',
            }}
          >
            {featuresConfig.subtitle}
          </p>
        )}

        {/* Left nav + right showcase */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: 'clamp(40px, 5vw, 72px)' }}
        >
          {/* Left: feature navigation */}
          <div
            className="flex flex-col"
            style={{ flex: '0 1 30%', minWidth: 0, gap: 6 }}
          >
            {featuresConfig.items.map((item) => {
              const selected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={selected}
                  className="text-left cursor-pointer"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    padding: '16px 20px 16px 24px',
                    borderRadius: 12,
                    border: 'none',
                    background: selected ? 'rgba(255,255,255,0.05)' : 'transparent',
                    transition: 'background 0.25s ease',
                    width: '100%',
                  }}
                  onMouseEnter={(e) => {
                    if (!selected) e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                  }}
                  onMouseLeave={(e) => {
                    if (!selected) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {/* Highlight line */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 2,
                      height: selected ? 34 : 0,
                      borderRadius: 1,
                      background: 'rgba(200, 170, 130, 0.9)',
                      transition: 'height 0.25s ease',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontWeight: 400,
                      fontSize: 22,
                      letterSpacing: '-0.3px',
                      color: selected ? '#ffffff' : 'rgba(218,218,218,0.65)',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 200,
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: selected ? 'rgba(218,218,218,0.85)' : 'rgba(218,218,218,0.4)',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {item.description}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: product showcase */}
          <div
            className="flex flex-col"
            style={{ flex: '1 1 70%', minWidth: 0 }}
          >
            {/* Window frame */}
            <div
              className="overflow-hidden"
              style={{
                borderRadius: 20,
                background: 'rgba(10, 10, 10, 0.55)',
                backdropFilter: 'blur(14px) saturate(120%)',
                WebkitBackdropFilter: 'blur(14px) saturate(120%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Title bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 18px',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }} />
                <span
                  style={{
                    marginLeft: 12,
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 12,
                    letterSpacing: '1px',
                    color: 'rgba(218,218,218,0.6)',
                  }}
                >
                  Velloc Code
                </span>
              </div>
              {/* Screenshot area — fixed height so switching features never shifts layout */}
              <div
                ref={shotRef}
                style={{
                  padding: 'clamp(28px, 3vw, 44px)',
                  height: 460,
                  overflow: 'hidden',
                }}
              >
                {shotsByFeature[activeId]?.length ? (
                  <ShotCarousel images={shotsByFeature[activeId]} />
                ) : (
                  <MockScreenshot id={activeId} />
                )}
              </div>
            </div>

            {/* Detail below screenshot */}
            <div ref={titleRef} style={{ marginTop: 32, maxWidth: 560 }}>
              {active && (
                <>
                  <h3
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontWeight: 400,
                      fontSize: 'clamp(22px, 2vw, 30px)',
                      letterSpacing: '-0.4px',
                      color: '#ffffff',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {active.detailTitle}
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
                    {active.detail}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
