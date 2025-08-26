import React from 'react';

const TrustedBySection = () => {
  const logos = ['NHS Trust', 'Local Authority', 'Care Provider', 'Healthcare Group', 'Education Trust'];
  
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-2xl font-semibold mb-10 text-gray-700">
          Trusted By Industry Leaders
        </h3>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-scroll gap-15 items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="bg-white px-8 py-5 rounded-2xl shadow-lg font-semibold text-purple-600 min-w-40 text-center flex-shrink-0 hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl hover:shadow-purple-600/15"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;