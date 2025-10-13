import React from 'react';
import { Award, Leaf, Utensils, ShieldCheck } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Award,
      title: 'Quality Management',
      description:
        'Enhance customer satisfaction and reduce defects through ISO 9001–based quality management systems tailored to your business.',
      color: 'bg-blue-500',
    },
    {
      icon: Leaf,
      title: 'Environmental Management',
      description:
        'Minimize environmental impact and improve resource efficiency with our ISO 14001–aligned environmental management solutions.',
      color: 'bg-green-500',
    },
    {
      icon: Utensils,
      title: 'Food Safety',
      description:
        'Ensure product safety and compliance across your supply chain through robust ISO 22000 and HACCP-based food safety programs.',
      color: 'bg-orange-500',
    },
    {
      icon: ShieldCheck,
      title: 'Occupational Health & Safety',
      description:
        'Protect your workforce and ensure compliance with ISO 45001–driven health and safety systems that reduce workplace risks.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6  lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Comprehensive ISO certification solutions designed to meet your
            organization’s quality, safety, and sustainability goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                <div
                  className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md`}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-500 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Contact Us for Certification
          </a>
        </div>
      </div>
    </section>
  );
}
