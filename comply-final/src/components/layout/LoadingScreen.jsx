import React from 'react';

const LoadingScreen = ({ isVisible }) => {
  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-600 to-indigo-500 flex items-center justify-center z-50 transition-all duration-500 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="text-center text-white">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-purple-300/30 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-purple-300/40 rounded-full animate-spin animate-reverse"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
            <span className="text-white font-black text-2xl">CW</span>
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-lg"></div>
        </div>
        <p className="text-lg">Transforming Compliance Into Competitive Advantage...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;