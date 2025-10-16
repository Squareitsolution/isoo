import React from 'react';
import { Building2, Factory, Briefcase, Store, Truck, Globe, ShoppingBag, Laptop } from 'lucide-react';
import ISO9001 from "/images/ISO_9001.jpg"
import ISO14001 from "/images/ISO-14001.png" 
import ISO45001 from "/images/45001.jpg" 
import ISO27001 from "/images/iso27001cert.jpg" 
import ISO22000 from "/images/iso-22000.png" 
import ISO50001 from "/images/50001.webp" 

export default function ClientLogos() {
  const clients = [
    { name: 'TechCorp Industries', icon: Building2, description: 'Leading technology solutions provider' },
    { name: 'Global Manufacturing', icon: Factory, description: 'International manufacturing excellence' },
    { name: 'Business Solutions Ltd', icon: Briefcase, description: 'Professional business consulting' },
    { name: 'Retail Enterprises', icon: Store, description: 'Multi-chain retail operations' },
    { name: 'Logistics Pro', icon: Truck, description: 'Worldwide logistics services' },
    { name: 'WorldWide Group', icon: Globe, description: 'Global business solutions' },
    { name: 'E-Commerce Plus', icon: ShoppingBag, description: 'Online marketplace leader' },
    { name: 'Digital Systems', icon: Laptop, description: 'IT infrastructure solutions' }
  ];

  const certifications = [
    { 
      name: 'ISO 9001', 
      img: ISO9001,
      standard: 'Quality Management',
      description: 'Enhance customer satisfaction and demonstrate your commitment to quality management. ',
      benefits: ['Improved efficiency', 'Better customer satisfaction', 'Market credibility']
    },
    { 
      name: 'ISO 14001', 
      img: ISO14001,

      standard: 'Environmental',
      description: 'Demonstrate environmental responsibility and reduce your ecological footprint. ',
      benefits: ['Reduced waste', 'Energy efficiency', 'Regulatory compliance']
    },
    { 
      name: 'ISO 45001', 
      img: ISO45001,

      standard: 'Health & Safety',
      description: 'Protect your workforce and create a safe working environment. ',
      benefits: ['Reduced incidents', 'Legal compliance', 'Improved morale']
    },
    { 
      name: 'ISO 27001', 
      img: ISO27001,

      standard: 'Information Security',
      description: 'Safeguard sensitive information and manage security risks effectively. ',
      benefits: ['Data protection', 'Risk management', 'Client trust']
    },
    { 
      name: 'ISO 22000', 
      img: ISO22000,

      standard: 'Food Safety',
      description: 'Ensure food safety throughout the supply chain. ISO 22000 combines HACCP principles.',
      benefits: ['Consumer safety', 'Brand protection', 'Market access']
    },
    { 
      name: 'ISO 50001', 
      img: ISO50001,

      standard: 'Energy Management',
      description: 'Optimize energy use and reduce costs. ISO 50001 helps organizations improve energy performance.',
      benefits: ['Cost savings', 'Carbon reduction', 'Sustainability goals']
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="certificates">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've helped hundreds of companies achieve ISO certification across various industries
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => {
              const Icon = client.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:shadow-xl group"
                >
                  <Icon className="w-16 h-16 text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mb-4" strokeWidth={1.5} />
                  <h3 className="text-base font-bold text-slate-800 text-center mb-2">
                    {client.name}
                  </h3>
                  <p id="badges" className="text-sm text-slate-600 text-center">
                    {client.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-slate-500 text-2xl font-medium">
              Certifications We Issue
            </span>
          </div>
        </div>

        {/* Certification Flip Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flip-card h-56">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 shadow-lg">
                  <div className="flex flex-col items-center justify-center h-full p-4">
                    <div className="w-22 h-22 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
                      <span className="text-2xl font-bold text-blue-600">
                        <img src={cert.img} alt="" />
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-md text-slate-800 text-center">
                      {cert.standard}
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl shadow-xl">
                  <div className="flex flex-col justify-between h-full p-4 text-white">
                    <div>
                      <h3 className="text-sm font-bold mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-xs mb-1 leading-relaxed opacity-90">
                        {cert.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-xs">Benefits:</h4>
                      <ul className="space-y-1">
                        {cert.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs flex items-center gap-1">
                            <span className="w-1 h-1 bg-yellow-400 rounded-full flex-shrink-0"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Companies Certified</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Flip Animation */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-front {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .flip-card {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}