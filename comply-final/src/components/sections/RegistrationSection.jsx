import React, { useState, useEffect } from 'react';

const RegistrationSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    registrationType: '',
    additionalInfo: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [submittedData, setSubmittedData] = useState(null);

  // Countdown timer for auto-close
  useEffect(() => {
    let timer;
    if (showThankYou && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (showThankYou && countdown === 0) {
      handleThankYouClose();
    }
    return () => clearTimeout(timer);
  }, [showThankYou, countdown]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle word limit for additional info
    if (name === 'additionalInfo') {
      const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length;
      if (wordCount > 500 && value.trim() !== '') {
        return; // Don't update if over 500 words
      }
    }
    
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

  const getWordCount = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', { ...formData, selectedService });
      setSubmittedData({ ...formData, selectedService });
      setIsSubmitting(false);
      setShowThankYou(true);
      setCountdown(10);
    }, 1000);
  };

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowForm(true);
    setErrors({});
    
    // Pre-select the registration type based on which button was clicked
    const registrationType = serviceTitle.includes('CQC') ? 'CQC Registration' : 'Ofsted Registration';
    setFormData(prev => ({
      ...prev,
      registrationType: registrationType
    }));
  };

  const closeForm = () => {
    setShowForm(false);
    setErrors({});
    setSelectedService('');
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    setShowForm(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      registrationType: '',
      additionalInfo: ''
    });
    setSelectedService('');
    setSubmittedData(null);
  };

  const handleUndoSend = () => {
    setShowThankYou(false);
    setSubmittedData(null);
    // Keep the form data and form open for user to modify
  };

  const registrationServices = [
    {
      title: 'CQC Registration Services',
      description: 'Complete CQC registration support including TDDI, LD, Care Homes, and all healthcare services. Expert guidance through the entire process.',
      cta: 'Enquire About CQC Registration →'
    },
    {
      title: 'Ofsted Registration Services', 
      description: 'Comprehensive Ofsted registration support for education providers. Professional guidance to ensure compliance with all the requirements.',
      cta: 'Enquire About Ofsted Registration →'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-600 to-indigo-500 text-white py-20 relative overflow-hidden" id="registration">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-purple-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-48 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-300 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-indigo-400 to-blue-300 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Registration Services</h2>
          <p className="text-xl opacity-90">Specialized registration support for healthcare and education providers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {registrationServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-5 text-amber-300">{service.title}</h3>
              <p className="mb-6 leading-relaxed opacity-90">{service.description}</p>
              <button 
                onClick={() => handleServiceClick(service.title)}
                className="w-full bg-white/20 border-2 border-white/30 backdrop-blur-lg py-4 rounded-2xl font-semibold hover:bg-white/30 hover:border-white/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Lead Capture Form */}
        {showForm && (
          <div className="bg-white/95 text-gray-800 p-12 rounded-3xl max-w-2xl mx-auto backdrop-blur-md mb-16 animate-slideDown">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-purple-800">Get Your Registration Quote</h3>
              <button 
                onClick={closeForm}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <p className="text-center mb-8 text-gray-600 text-lg">
              Our registration specialists will call you within 24 hours with a detailed quote for {selectedService}
            </p>
            
            <div className="space-y-4">
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
                  <option value="">Select Registration Type</option>
                  <option value="CQC Registration">CQC Registration</option>
                  <option value="CQC - Domiciliary Care">CQC - Domiciliary Care</option>
                  <option value="CQC - Supported Living">CQC - Supported Living</option>
                  <option value="CQC - Care Home">CQC - Care Home</option>
                  <option value="CQC - TDDI Services">CQC - TDDI Services</option>
                  <option value="CQC - Learning Disabilities">CQC - Learning Disabilities</option>
                  <option value="Ofsted Registration">Ofsted Registration</option>
                  <option value="Ofsted - Children's Home">Ofsted - Children's Home</option>
                  <option value="Ofsted - 16+ Accommodation">Ofsted - 16+ Accommodation</option>
                  <option value="Ofsted - Fostering Agency">Ofsted - Fostering Agency</option>
                  <option value="Multiple Services">Multiple Services</option>
                </select>
                {errors.registrationType && (
                  <p className="text-red-500 text-sm mt-1">{errors.registrationType}</p>
                )}
              </div>

              {/* Additional Information Field */}
              <div>
                <div className="relative">
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Additional Information (Optional)"
                    rows="4"
                    className="w-full p-4 border-2 rounded-xl text-lg focus:outline-none transition-colors duration-300 border-gray-200 focus:border-purple-500 resize-none"
                  />
                  <div className="absolute bottom-2 right-2 text-sm text-gray-500 bg-white px-2 py-1 rounded">
                    {getWordCount(formData.additionalInfo)}/500 words
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Share any specific requirements or questions about your registration (optional, max 500 words)
                </p>
              </div>
              
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full p-5 rounded-xl text-xl font-bold cursor-pointer transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:-translate-y-1 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Get In Touch'}
              </button>
            </div>
            
            <p className="text-center mt-4 text-sm text-gray-600">
              ✅ 100% Success Rate • ✅ Free Consultation • ✅ No Obligation Quote
            </p>
          </div>
        )}

        {/* Thank You Message Box */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white rounded-3xl p-10 max-w-md mx-4 text-center shadow-2xl animate-slideDown">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We'll be in touch within 24 hours to discuss your registration needs for <strong>{selectedService}</strong>.
              </p>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleThankYouClose}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  OK
                </button>
                
                <button 
                  onClick={handleUndoSend}
                  className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Undo Send ({countdown}s)</span>
                  <div 
                    className="absolute inset-0 bg-red-600 transition-all duration-1000 ease-linear"
                    style={{ 
                      width: `${((10 - countdown) / 10) * 100}%`
                    }}
                  ></div>
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Auto-closing in {countdown} seconds
              </p>
            </div>
          </div>
        )}

        <div className="bg-amber-500/10 backdrop-blur-lg rounded-2xl p-10 border border-amber-500/30">
          <h4 className="text-2xl font-bold mb-4 text-amber-300 text-center">Important Notice</h4>
          <p className="leading-relaxed opacity-90">
            We maintain high standards by limiting our services to 10 businesses per month. We carefully select our clients to ensure we can provide the highest quality service and do not work with every business that approaches us.
          </p>
        </div>
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
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
          }
          to { 
            opacity: 1; 
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default RegistrationSection;