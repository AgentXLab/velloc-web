import { siteConfig, navigationConfig } from '../config';
import { useLang, LANGUAGES, LANG_LABELS } from '../i18n';

export default function Navigation() {
  const { lang, setLang } = useLang();
  const nav = navigationConfig[lang];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!siteConfig.brandName && nav.links.length === 0) {
    return null;
  }

  return (
    <div
      className="pointer-events-auto flex items-center justify-between"
      style={{
        width: '100%',
        padding: '16px 30px',
        borderRadius: 20,
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(14px) saturate(120%)',
        WebkitBackdropFilter: 'blur(14px) saturate(120%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      }}
    >
      <a
        href="#hero"
        onClick={(e) => handleClick(e, '#hero')}
        className="flex items-center no-underline"
        aria-label={siteConfig.brandName}
        style={{ gap: 12 }}
      >
        <img
          src="/logo.png"
          alt={siteConfig.brandName}
          style={{
            height: 28,
            width: 'auto',
            display: 'block',
          }}
        />
        <span
          style={{
            fontFamily: "'GeistMono', monospace",
            fontWeight: 300,
            fontSize: 13,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(218, 218, 218, 0.6)',
          }}
        >
          {siteConfig.brandName}
        </span>
      </a>

      <div className="flex items-center whitespace-nowrap" style={{ gap: 28 }}>
        {nav.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
        {/* Language switcher */}
        <label className="relative" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span className="sr-only">{nav.languageLabel}</span>
          <select
            aria-label={nav.languageLabel}
            value={lang}
            onChange={(e) => setLang(e.target.value as (typeof LANGUAGES)[number])}
            className="nav-link"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              appearance: 'none',
              WebkitAppearance: 'none',
              paddingRight: 16,
              fontFamily: 'inherit',
              fontSize: 'inherit',
              color: 'inherit',
              outline: 'none',
            }}
          >
            {LANGUAGES.map((code) => (
              <option
                key={code}
                value={code}
                style={{
                  backgroundColor: '#171717',
                  color: '#e8e8e8',
                }}
              >
                {LANG_LABELS[code]}
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              fontSize: 10,
              color: 'rgba(218, 218, 218, 0.6)',
            }}
          >
            ▾
          </span>
        </label>
      </div>
    </div>
  );
}
