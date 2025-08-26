import React, { useState, useEffect } from 'react';

const StatCard = ({ icon, number, suffix = '', label, color }) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = number / 100;
      const counter = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(counter);
        }
        setAnimatedNumber(Math.floor(current));
      }, 20);
    }, 500);

    return () => clearTimeout(timer);
  }, [number]);

  const colorClasses = {
    purple: 'border-purple-200 hover:border-purple-400 hover:shadow-purple-200',
    emerald: 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-200',
    indigo: 'border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-200',
    amber: 'border-amber-200 hover:border-amber-400 hover:shadow-amber-200'
  };

  const numberColorClasses = {
    purple: 'bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent',
    emerald: 'bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent',
    indigo: 'bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent',
    amber: 'bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent'
  };

  return (
    <div className={`bg-white/90 backdrop-blur-lg rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${colorClasses[color]}`}>
      <div className="text-3xl mb-4">{icon}</div>
      <div className={`text-3xl font-black mb-2 ${numberColorClasses[color]}`}>
        {animatedNumber}{suffix}
      </div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default StatCard;