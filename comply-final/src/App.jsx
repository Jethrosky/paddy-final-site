import React, { useState, useEffect } from 'react';

// Layout Components
import LoadingScreen from './components/layout/LoadingScreen';
import ProgressBar from './components/layout/ProgressBar';
import Header from './components/layout/Header';

// Section Components
import HeroSection from './components/sections/HeroSection';
import TrustedBySection from './components/sections/TrustedBySection';
import RegistrationSection from './components/sections/RegistrationSection';
import CalculatorSection from './components/sections/CalculatorSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FinalCTASection from './components/sections/FinalCTASection';

// Hooks
import { useScrollEffects } from './hooks/useScrollEffects';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const { isScrolled, scrollProgress } = useScrollEffects();

  const fullText = "Cut £65k+ Compliance Costs";

  useEffect(() => {
    // Hide loading screen
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Typing effect
    const typingTimer = setTimeout(() => {
      let i = 0;
      const typing = setInterval(() => {
        if (i <= fullText.length) {
          setTypedText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(typingTimer);
    };
  }, []);

  return (
    <div className="font-inter overflow-x-hidden">
      <LoadingScreen isVisible={isLoading} />
      <ProgressBar progress={scrollProgress} />
      <Header isScrolled={isScrolled} />
      
      <main>
        <HeroSection typedText={typedText} />
        <TrustedBySection />
        <RegistrationSection />
        <CalculatorSection />
        <ServicesSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2024 ComplyWin. The UK's Leading Compliance Catalyst. CQC Registered Provider.</p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-reverse {
          animation-direction: reverse;
        }
        
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default App;