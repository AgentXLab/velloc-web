import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AmberCascades from './AmberCascades';
import Footer from './Footer';
import { siteConfig } from '../config';
import { privacyPolicy } from '../content/privacy';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${privacyPolicy.title} — ${siteConfig.brandName}`;
  }, []);

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, opacity: 0.25 }}>
        <AmberCascades />
      </div>

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 80,
          padding: '0 5vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(10, 10, 10, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <a
          href="/"
          onClick={goHome}
          className="text-white no-underline"
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '-0.5px',
          }}
        >
          {siteConfig.brandName}
        </a>
        <a href="/" onClick={goHome} className="nav-link">
          {privacyPolicy.backLinkText}
        </a>
      </nav>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <section style={{ padding: '180px 5vw 60px', maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.5,
              marginBottom: 24,
            }}
          >
            {privacyPolicy.label}
          </div>
          <h1
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              margin: '0 0 20px 0',
            }}
          >
            {privacyPolicy.title}
          </h1>
          <p
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 300,
              fontSize: 13,
              letterSpacing: '0.5px',
              color: '#dadada',
              opacity: 0.6,
              margin: '0 0 32px 0',
            }}
          >
            Effective date: {privacyPolicy.effectiveDate}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(218, 218, 218, 0.8)',
              margin: 0,
              maxWidth: 640,
            }}
          >
            {privacyPolicy.intro}
          </p>
        </section>

        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw' }}>
          <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.08)' }} />
        </div>

        <article style={{ padding: '64px 5vw 120px', maxWidth: 860, margin: '0 auto' }}>
          {privacyPolicy.sections.map((section) => (
            <section key={section.heading} style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(24px, 2.6vw, 32px)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.5px',
                  color: '#ffffff',
                  margin: '0 0 16px 0',
                }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 16,
                    lineHeight: 1.9,
                    color: '#dadada',
                    margin: i < section.paragraphs.length - 1 || section.bullets ? '0 0 20px 0' : 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul style={{ margin: 0, paddingLeft: 22, listStyleType: 'disc' }}>
                  {section.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 200,
                        fontSize: 16,
                        lineHeight: 1.9,
                        color: '#dadada',
                        marginBottom: i < section.bullets!.length - 1 ? 12 : 0,
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <Footer />
      </div>
    </div>
  );
}
