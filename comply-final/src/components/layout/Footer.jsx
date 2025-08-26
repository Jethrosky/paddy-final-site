// components/Footer.jsx
import React from 'react';

const Footer = () => {
  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Registration', href: '#registration' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {footerLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.href)}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-sm">
            © 2024 ComplyWin. The UK's Leading Compliance Catalyst. CQC Registered Provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;