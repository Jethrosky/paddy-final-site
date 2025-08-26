import React, { useState } from 'react';

const ServicesSection = () => {
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => {
      // If clicking the same module that's already open, close it
      if (prev[moduleId]) {
        return {};
      }
      // Otherwise, close all others and open only this one
      return { [moduleId]: true };
    });
  };

  const services = [
    {
      id: 'compliance',
      icon: '📋',
      title: 'Monthly Compliance Packages',
      description: 'Replace £65k–£120k compliance teams with dedicated specialists who ensure 100% regulatory confidence.',
      price: 'From £1,499/month',
      quote: "We've supported over 200 CQC registrations and countless inspections. We know what actually causes providers to fail — and how to stop it before it happens.",
      details: [
        'File audits that matter – staff records checked against what inspectors really ask for',
        'Predictive training matrix – closing the gaps behind 80% of compliance failures',
        'Proactive policy updates – changes tracked before they impact inspections',
        'System setup & integration – Drive, CMS, QCS, Citation configured for evidence',
        'Monthly compliance reports – clear RAG status and next steps'
      ],
      priceBreakdown: [
        { title: 'Professional (1–15 staff)', price: '£1,499/month', desc: 'Complete compliance management' },
        { title: 'Growth (16–25 staff)', price: '£2,200/month', desc: 'Enhanced capacity & monitoring' },
        { title: 'Enterprise (26–40 staff)', price: '£2,800/month', desc: 'Dedicated account management' },
        { title: 'Custom (40+ staff)', price: 'From £3,500/month', desc: 'Bespoke enterprise solutions' }
      ],
      additionalContent: {
        text: 'Complexity Uplifts: +30% for TDDI, Complex LD, or Complex Autism services\n95% of clients on this package passed inspection with no major actions',
        ctaText: 'Get a Compliance Package Quotation →'
      }
    },
    {
      id: 'tenders',
      icon: '📈',
      title: 'Tender Writing & Growth',
      description: 'Strategic evaluation and professional writing for opportunities that actually fit your business.',
      price: 'From £900 per tender',
      quote: "We track every major care tender in the UK. We know which commissioners award contracts — and which opportunities waste your time.",
      details: [
        'Opportunity intelligence – unsuitable tenders filtered before you invest',
        'Commissioner mapping – insight into decision-makers and their priorities',
        'Competitive positioning – pricing and strategy shaped by real award data',
        'Professional submissions – responses written to match winning bids',
        'Post-award support – help with mobilisation and delivery evidence'
      ],
      additionalContent: {
        text: 'Our clients have secured six-figure contracts through this process',
        ctaText: 'Get a Tender Support Quotation →'
      }
    },
    {
      id: 'marketing',
      icon: '🎯',
      title: 'Marketing Clinic & Business Development',
      description: 'Custom programmes (8–12 weeks) for providers who want to grow, scale, and stand out strategically.',
      price: 'Get Custom Quote',
      quote: "Most care companies fail because they don't have a strategy. The Marketing Clinic fixes that with a step-by-step growth plan tailored to your service.",
      details: [
        'Brand & positioning strategy – built to win families and commissioners',
        'Data-led website design – based on your services and market intelligence',
        'Market opportunity briefing – where contracts and clients actually exist',
        'Lead generation systems – funnels that drive direct enquiries',
        'Weekly strategy calls – hands-on accountability across 8–12 weeks'
      ],
      additionalContent: {
        text: '8/10 clients saw measurable growth in direct enquiries within 3 months',
        ctaText: 'Get a Marketing Clinic Quotation →'
      }
    },
    {
      id: 'sponsorship',
      icon: '💼',
      title: 'Sponsorship & SMS Management',
      description: 'Complete sponsorship licence support for international workforce solutions.',
      price: 'Licence Applications from £2,700 • SMS Management from £250/month',
      quote: "We've guided providers through every sponsorship scenario in the care sector. We know exactly what the Home Office expects — and how to keep you audit-ready.",
      details: [
        'Licence application strategy – from submission to approval using proven pathways',
        'HR compliance advisory – how staff files should be structured to pass checks',
        'Ongoing SMS management – monthly administration and compliance tracking',
        'CoS allocation & issuing – Certificates handled safely and correctly',
        'Right-to-work monitoring – advisory on verification and alerts',
        'Custom option: HR File Audits – full review with tracker & action plan'
      ],
      additionalContent: {
        text: '100% of licence applications submitted with our process have been approved',
        ctaText: 'Get a Sponsorship Licence Quotation →'
      }
    },
    {
      id: 'policies',
      icon: '📚',
      title: 'Bespoke Policy Libraries',
      description: 'Custom-drafted policies written around your regulated activities.',
      price: 'From £45 per policy / From £120 for complex services',
      quote: "These policies aren't templates. They're written by people who've sat in inspection meetings and know exactly what inspectors respect.",
      details: [
        'Inspector-tested documentation – aligned to CQC/Ofsted expectations',
        'Service-specific frameworks – Domiciliary, Supported Living, TDDI, LD, Autism, Childrens',
        'Tailored regulatory mapping – each policy linked to your activities',
        'Version control & updates – stored in Drive, QCS, or Citation',
        'Implementation guidance – practical steps so staff actually use them'
      ],
      priceBreakdown: [
        { title: 'Standard policies', price: 'From £45 each', desc: 'Individual policy creation' },
        { title: 'Specialist TDDI & Complex LD/Autism', price: 'From £120 each', desc: 'Complex service policies' }
      ],
      additionalContent: {
        text: 'Every policy is inspection-ready — 0% of clients using our libraries failed on documentation',
        ctaText: 'Get a Policy Quotation →'
      }
    },
    {
      id: 'winiq',
      icon: '🧠',
      title: 'WinIQ',
      description: 'AI-powered compliance intelligence platform that predicts regulatory changes and automates compliance monitoring for complete visibility.',
      price: 'Launching 2025',
      comingSoon: true,
      details: [
        'AI-powered compliance automation and intelligent monitoring',
        'Intelligent tender matching with predictive scoring',
        'Real-time business health scoring and alerts',
        'Automated regulatory change notifications',
        'Predictive compliance risk assessment',
        'Integration with existing compliance management systems'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
            Complete Care Business Infrastructure
          </h2>
          <p className="text-xl text-gray-600 italic">
            Click any service to see exactly what's included - <em>we've never failed a registration</em>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-xl shadow-purple-500/10 transition-all duration-400 cursor-pointer border border-purple-500/10 hover:-translate-y-3 hover:shadow-purple-500/20 relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              
              <div className={`w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-8 text-3xl text-white shadow-lg shadow-purple-500/30 ${service.comingSoon ? 'opacity-60' : ''}`}>
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-purple-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className={`font-bold text-xl mb-6 ${service.comingSoon ? 'text-purple-600' : 'text-green-600'}`}>
                {service.price}
              </div>
              
              <div className="flex-grow"></div>
              
              {!service.comingSoon && (
                <button
                  onClick={() => toggleModule(service.id)}
                  className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 p-4 rounded-xl text-purple-600 font-semibold hover:bg-purple-50 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {expandedModules[service.id] ? 'Hide Details' : (service.id === 'compliance' ? 'See Package Details →' : 'See What\'s Included →')}
                </button>
              )}

              {service.comingSoon && (
                <button className="w-full bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 p-4 rounded-xl text-purple-600 font-semibold cursor-not-allowed opacity-60">
                  Get Early Access →
                </button>
              )}
              
              {expandedModules[service.id] && (
                <div className="mt-6 space-y-6 animate-fadeIn">
                  {service.quote && (
                    <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
                      <p className="text-purple-900 italic text-lg">{service.quote}</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-xl font-bold text-purple-800 mb-4">What you get:</h4>
                    <div className="space-y-3">
                      {service.details.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {service.priceBreakdown && (
                    <div>
                      <h4 className="text-xl font-bold text-purple-800 mb-4">{service.id === 'compliance' ? 'Package Tiers:' : 'Pricing:'}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.priceBreakdown.map((breakdown, index) => (
                          <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h5 className="text-purple-800 font-semibold mb-2">{breakdown.title}</h5>
                            <div className="text-xl font-bold text-green-600 mb-2">{breakdown.price}</div>
                            <p className="text-sm text-gray-600">{breakdown.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.additionalContent && (
                    <div className="bg-purple-50 p-6 rounded-xl text-center">
                      <p className="text-purple-800 font-semibold mb-4 whitespace-pre-line">{service.additionalContent.text}</p>
                      <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-300">
                        {service.additionalContent.ctaText}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;