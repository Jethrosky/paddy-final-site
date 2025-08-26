import React, { useState } from 'react';

const CalculatorSection = () => {
  const [selectedStaffSize, setSelectedStaffSize] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState('standard');

  const calculatorData = {
    '1-15': { price: 1499, internal: 73000 },
    '16-25': { price: 2200, internal: 98000 },
    '26-40': { price: 2800, internal: 135000 },
    '40+': { price: 3500, internal: 185000 }
  };

  const staffOptions = [
    { key: '1-15', title: '1-15 Staff', subtitle: 'Professional Tier', price: '£1,499/mo' },
    { key: '16-25', title: '16-25 Staff', subtitle: 'Growth Tier', price: '£2,200/mo' },
    { key: '26-40', title: '26-40 Staff', subtitle: 'Enterprise Tier', price: '£2,800/mo' },
    { key: '40+', title: '40+ Staff', subtitle: 'Custom Tier', price: 'From £3,500/mo' }
  ];

  const calculateSavings = () => {
    if (!selectedStaffSize) return null;
    
    const data = calculatorData[selectedStaffSize];
    const multiplier = selectedComplexity === 'complex' ? 1.3 : 1;
    const monthly = Math.round(data.price * multiplier);
    const annual = monthly * 12;
    const internal = data.internal;
    const savings = internal - annual;
    
    return { internal, compliance: annual, monthly, savings };
  };

  const savings = calculateSavings();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden" id="calculator">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Calculate Your Compliance Savings
          </h2>
          <p className="text-xl text-gray-600">
            See exactly how much you'll save by replacing internal compliance teams with ComplyWin experts
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl shadow-purple-600/10 p-12 border border-purple-100">
          {/* Staff Size Selection */}
          <div className="mb-8">
            <label className="block text-gray-700 font-bold mb-4 text-lg">
              How many staff do you have?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {staffOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setSelectedStaffSize(option.key)}
                  className={`border-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10 ${
                    selectedStaffSize === option.key
                      ? 'border-purple-600 bg-gradient-to-br from-purple-50 to-purple-100'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="font-bold text-gray-800">{option.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{option.subtitle}</div>
                  <div className="text-sm text-purple-600 font-semibold mt-1">{option.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Complexity Selection */}
          <div className="mb-8">
            <label className="block text-gray-700 font-bold mb-4 text-lg">
              Service complexity
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedComplexity('standard')}
                className={`border-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10 ${
                  selectedComplexity === 'standard'
                    ? 'border-purple-600 bg-gradient-to-br from-purple-50 to-purple-100'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="font-bold text-gray-800">Standard Services</div>
                <div className="text-sm text-gray-500 mt-1">Regular compliance needs</div>
              </button>
              <button
                onClick={() => setSelectedComplexity('complex')}
                className={`border-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10 ${
                  selectedComplexity === 'complex'
                    ? 'border-purple-600 bg-gradient-to-br from-purple-50 to-purple-100'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="font-bold text-gray-800">Complex Services (+30%)</div>
                <div className="text-sm text-gray-500 mt-1">TDDI, Complex LD, Complex Autism</div>
              </button>
            </div>
          </div>

          {/* Results */}
          {savings && selectedStaffSize && (
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-10 text-white shadow-2xl shadow-purple-600/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest mb-2 opacity-80">Internal Team Cost</div>
                  <div className="text-3xl font-black">£{savings.internal.toLocaleString()}</div>
                  <div className="text-xs opacity-70 mt-1">per year</div>
                </div>
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest mb-2 opacity-80">ComplyWin Cost</div>
                  <div className="text-3xl font-black">£{savings.monthly.toLocaleString()}</div>
                  <div className="text-xs opacity-70 mt-1">per month (£{savings.compliance.toLocaleString()}/year)</div>
                </div>
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest mb-2 opacity-80">You Save</div>
                  <div className="text-4xl font-black text-emerald-400 drop-shadow-lg">£{savings.savings.toLocaleString()}</div>
                  <div className="text-xs opacity-70 mt-1">every year</div>
                </div>
              </div>
              <button className="w-full bg-white text-purple-600 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                Start Saving £{savings.savings.toLocaleString()} Annually →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;