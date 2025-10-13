import React from 'react';
import { Building2, Factory, Briefcase, Store, Truck, Globe, ShoppingBag, Laptop } from 'lucide-react';

export default function TrustedBySection() {
  const clients = [
    { name: 'TechCorp Industries', icon: Building2 },
    { name: 'Global Manufacturing', icon: Factory },
    { name: 'Business Solutions Ltd', icon: Briefcase },
    { name: 'Retail Enterprises', icon: Store },
    { name: 'Logistics Pro', icon: Truck },
    { name: 'WorldWide Group', icon: Globe },
    { name: 'E-Commerce Plus', icon: ShoppingBag },
    { name: 'Digital Systems', icon: Laptop }
  ];

  const certifications = [
    { name: 'ISO 9001', standard: 'Quality Management' },
    { name: 'ISO 14001', standard: 'Environmental' },
    { name: 'ISO 45001', standard: 'Health & Safety' },
    { name: 'ISO 27001', standard: 'Information Security' },
    { name: 'ISO 22000', standard: 'Food Safety' },
    { name: 'ISO 50001', standard: 'Energy Management' }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
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
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all duration-300 hover:shadow-lg group"
                >
                  <Icon className="w-12 h-12 text-slate-400 group-hover:text-blue-600 transition-colors duration-300 mb-3" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-slate-600 text-center">
                    {client.name}
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
            <span className="bg-white px-6 text-slate-500 font-medium">
              Certifications We Issue
            </span>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
                <span className="text-2xl font-bold text-blue-600">ISO</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {cert.name}
              </h3>
              <p className="text-xs text-slate-600 text-center">
                {cert.standard}
              </p>
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

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 mb-6 text-lg">
            Join the companies that trust us for their ISO certification
          </p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Become Our Next Success Story
          </button>
        </div>
      </div>
    </div>
  );
}