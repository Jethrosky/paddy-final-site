import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "ComplyWin saved us £78,000 in our first year. Their registration process was flawless - we got 'Good' ratings across all domains!",
      name: "Sarah Mitchell",
      role: "CEO, Sunshine Care Homes",
      company: "25 Staff Domiciliary Care",
      result: "£78,000 saved"
    },
    {
      text: "The monthly compliance support is incredible. We haven't had a single compliance issue since partnering with ComplyWin 2 years ago.",
      name: "James Robertson",
      role: "Director, Heritage Care Group",
      company: "40+ Staff Supported Living",
      result: "100% compliance"
    },
    {
      text: "From registration to ongoing compliance, ComplyWin handles everything. We can finally focus on delivering excellent care.",
      name: "Emma Thompson",
      role: "Operations Manager, Elite Care",
      company: "16-25 Staff Care Home",
      result: "40 hours/month"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-32 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
            Real Results From Real Care Companies
          </h2>
          <p className="text-xl text-gray-600">Join 500+ successful care businesses powered by ComplyWin</p>
        </div>

        <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-16 shadow-2xl shadow-purple-600/10 text-center">
          <div className="flex justify-center mb-8 gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-3xl">⭐</span>
            ))}
          </div>

          <blockquote className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed mb-10 italic">
            "{currentTest.text}"
          </blockquote>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="font-bold text-gray-800 text-lg">{currentTest.name}</div>
              <div className="text-gray-600 mb-1">{currentTest.role}</div>
              <div className="text-sm text-purple-600">{currentTest.company}</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                {currentTest.result}
              </div>
              <div className="text-sm text-gray-600">Verified Result</div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-400 ${
                  index === currentTestimonial
                    ? 'w-12 bg-gradient-to-r from-purple-600 to-indigo-500'
                    : 'w-3 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;