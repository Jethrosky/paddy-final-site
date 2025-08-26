import React from 'react';
import StatCard from '../common/StatCard';

const HeroSection = ({ typedText }) => {
  const stats = [
    { icon: '✅', number: 247, label: 'Successful Registrations', color: 'purple' },
    { icon: '💰', number: 20, suffix: 'M+', label: 'Value of Tenders Won', color: 'emerald' },
    { icon: '🛡️', number: 100, suffix: '%', label: 'Success Rate', color: 'indigo' },
    { icon: '⚡', number: 24, suffix: 'hrs', label: 'Response Time', color: 'amber' }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden pt-36 sm:pt-24 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center flex-grow flex flex-col justify-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-100/50 backdrop-blur-lg border border-purple-300/30 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 animate-bounce-small text-xs sm:text-sm mx-auto">
          <span>🏆</span>
          <span className="font-medium whitespace-nowrap">UK's Leading Care Compliance Specialists</span>
          <span>🏆</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
          <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            {typedText}<span className="text-purple-600 animate-pulse">|</span>
          </div>
          <div className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 sm:mt-4">
             <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent italic">With Expert Compliance Specialists</span>
          </div>
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          100% CQC success rate • £35k+ average savings • Complete regulatory confidence
          <span className="block mt-2 sm:mt-4 font-semibold text-purple-600 italic text-base sm:text-lg md:text-xl">
            The complete operating system for care businesses that actually works
          </span>
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8 relative">
          <a
            href="#calculator"
            className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/30 overflow-hidden group flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10">⚡</span>
            <span className="relative z-10">Calculate Your Savings</span>
            <span className="relative z-10">→</span>
          </a>
          
          <a
            href="#testimonials"
            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <span className="text-purple-600 text-sm sm:text-base">▶</span>
            </div>
            <span className="text-sm sm:text-base">See How We Save £73k+</span>
          </a>
          
          {/* Arrow positioned just above the button */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-purple-600 text-xl sm:text-2xl animate-bounce-small">
            ↓
          </div>
        </div>
      </div>

      {/* Custom CSS for controlled bounce animation */}
      <style jsx>{`
        @keyframes bounce-small {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-8px); 
          }
        }
        
        .animate-bounce-small {
          animation: bounce-small 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;