import React from 'react';

const ServiceCard = ({ icon, title, description, price, cta, comingSoon = false }) => {
  return (
    <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl overflow-hidden min-h-96 flex flex-col">
      {comingSoon && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold">
          COMING SOON
        </div>
      )}
      
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-indigo-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-purple-600/40 hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">{title}</h3>
      
      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>
      
      <div className="text-emerald-600 font-bold text-xl mb-6">{price}</div>
      
      <button className="w-full bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-200 py-4 rounded-2xl text-slate-600 font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:text-white hover:border-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/25 disabled:opacity-60 disabled:cursor-not-allowed">
        {cta}
      </button>
    </div>
  );
};

export default ServiceCard;