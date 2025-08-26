import { useState, useEffect } from 'react';

export const useScrollEffects = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      const progress = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
      
      setIsScrolled(scrolled);
      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolled, scrollProgress };
};