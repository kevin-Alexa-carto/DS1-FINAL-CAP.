import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { StepsSection } from './components/StepsSection';
import { Statistics } from './components/Statistics';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BusinessSection } from './components/BusinessSection';
import { HomeAboutSection } from './components/HomeAboutSection';
import { NewsSection } from './components/NewsSection';
import { AuthSection } from './components/AuthSection';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-brand-green selection:text-slate-900 transition-colors duration-500 ${darkMode ? 'bg-brand-dark-bg' : 'bg-brand-cream'}`}>
      <header>
        <Navbar 
            darkMode={darkMode} 
            toggleTheme={toggleTheme} 
            onNavigate={handleNavigate}
            currentPage={currentPage}
        />
      </header>
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Statistics />
            <HowItWorks />
            <StepsSection />
            <HomeAboutSection />
            <FAQSection />
          </>
        ) : currentPage === 'empresas' ? (
          <BusinessSection />
        ) : currentPage === 'nosotros' ? (
          <AboutSection />
        ) : currentPage === 'noticias' ? (
          <NewsSection />
        ) : currentPage === 'auth' ? (
          <AuthSection />
        ) : (
          // Default fallback
          <>
            <Hero />
            <Statistics />
            <HowItWorks />
            <StepsSection />
            <HomeAboutSection />
            <FAQSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;