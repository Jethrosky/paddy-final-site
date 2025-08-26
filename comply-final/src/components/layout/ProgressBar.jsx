import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-40">
      <div 
        className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-emerald-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;