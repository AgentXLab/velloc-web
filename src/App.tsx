import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from './sections/Hero';
import Curriculum from './sections/Curriculum';
import CinematicVision from './sections/CinematicVision';
import AlumniArchives from './sections/AlumniArchives';
import OpenSource from './sections/OpenSource';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';
import { siteStrings } from './config';
import { useLang } from './i18n';

function HomePage() {
  const { lang } = useLang();
  useEffect(() => {
    document.title = siteStrings[lang].title;
  }, [lang]);

  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <main>
        <Hero />
        <Curriculum />
        <CinematicVision />
        <AlumniArchives />
        <OpenSource />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
    </Routes>
  );
}
