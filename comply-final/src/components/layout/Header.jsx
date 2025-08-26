import React from 'react';

const Header = ({ isScrolled }) => {
  return (
    <header className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-2xl shadow-purple-600/10' : 'backdrop-blur-xl'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-xl rotate-6 transition-transform duration-300 hover:rotate-12"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-purple-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-xl">
              CW
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              ComplyWin
            </div>
            <div className="text-xs text-gray-500 font-medium">Compliance Catalyst</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8">
          {['Services', 'Calculator', 'Success', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-emerald-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#calculator"
          className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/30 overflow-hidden group text-sm md:text-base h-12 flex items-center"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative z-10 whitespace-nowrap">
            <span className="hidden sm:inline">Start Saving £65k+</span>
            <span className="sm:hidden">Save £65k+</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;