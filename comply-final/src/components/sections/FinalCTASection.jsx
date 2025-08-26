import React, { useState } from 'react';

const FinalCTASection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    registrationType: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.registrationType) {
      newErrors.registrationType = 'Please select a registration type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you! We\'ll call you within 24 hours with your custom quote.');
      setShowForm(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        registrationType: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setErrors({});
  };

  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-600 to-indigo-500 text-white py-32 text-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-lg">
          Ready to Save £73k+ This Year?
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
          Book a free consultation and discover exactly how much you'll save with ComplyWin
        </p>

        {!showForm && (
          <>
            <button 
              onClick={toggleForm}
              className="relative bg-amber-400 text-amber-900 px-12 py-6 rounded-3xl text-2xl font-bold hover:bg-amber-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/40 transition-all duration-400 shadow-2xl shadow-amber-400/30 border-none cursor-pointer overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
              <span className="relative z-10">Get Your Custom Savings Quote</span>
            </button>

            <p className="mt-8 text-lg opacity-90">
              ✅ Free consultation • ✅ Custom savings calculation • ✅ 100% success rate guarantee
            </p>
          </>
        )}

        {/* Lead Capture Form */}
        {showForm && (
          <div className="bg-white/95 text-gray-800 p-12 rounded-3xl max-w-2xl mx-auto backdrop-blur-md animate-slideDown">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-purple-800">Get Your Custom Quote</h3>
              <button 
                onClick={toggleForm}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <p className="text-center mb-8 text-gray-600 text-lg">Our specialists will call you within 24 hours with a detailed quote</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={`w-full p-4 border-2 rounded-xl text-lg focus:outline-none transition-colors duration-300 ${
                      errors.firstName 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-purple-500'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className={`w-full p-4 border-2 rounded-xl text-lg focus:outline-none transition-colors duration-300 ${
                      errors.lastName 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-purple-500'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className={`w-full p-4 border-2 rounded-xl text-lg focus:outline-none transition-colors duration-300 ${
                    errors.email 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-purple-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className={`w-full p-4 border-2 rounded-xl text-lg focus:outline-none transition-colors duration-300 ${
                    errors.phone 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-purple-500'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              
              <div>
                <select 
                  name="registrationType"
                  value={formData.registrationType}
                  onChange={handleInputChange}
                  className={`w-full p-4 border-2 rounded-xl text-lg bg-white focus:outline-none transition-colors duration-300 ${
                    errors.registrationType 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-purple-500'
                  }`}
                >
                  <option value="">Select Service Type</option>
                  <option value="cqc-domcare">CQC - Domiciliary Care</option>
                  <option value="cqc-supported">CQC - Supported Living</option>
                  <option value="cqc-carehome">CQC - Care Home</option>
                  <option value="ofsted-childrens">Ofsted - Children's Home</option>
                  <option value="ofsted-16plus">Ofsted - 16+ Accommodation</option>
                  <option value="sponsorship">Sponsorship License</option>
                  <option value="tender-writing">Tender Writing</option>
                  <option value="marketing-clinic">Marketing Clinic</option>
                 
                </select>
                {errors.registrationType && (
                  <p className="text-red-500 text-sm mt-1">{errors.registrationType}</p>
                )}
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-5 rounded-xl text-xl font-bold cursor-pointer transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:-translate-y-1 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Custom Quote - Call Within 24hrs'}
              </button>
            </form>
            
            <p className="text-center mt-4 text-sm text-gray-600">
              ✅ 100% Success Rate • ✅ Free Consultation • ✅ No Obligation Quote
            </p>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;