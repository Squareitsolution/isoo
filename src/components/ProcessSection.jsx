import React from 'react';
import { MessageCircle, FileText, ClipboardCheck, Award } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Consultation',
      description: 'We begin with a detailed consultation to understand your business needs, goals, and current compliance status.',
      color: 'bg-blue-600'
    },
    {
      number: '02',
      icon: FileText,
      title: 'Documentation',
      description: 'Our experts assist you in preparing and organizing all necessary documentation required for certification.',
      color: 'bg-green-600'
    },
    {
      number: '03',
      icon: ClipboardCheck,
      title: 'Audit & Compliance',
      description: 'Comprehensive audit is conducted to ensure your systems meet all ISO standards and compliance requirements.',
      color: 'bg-orange-600'
    },
    {
      number: '04',
      icon: Award,
      title: 'Certification Approval',
      description: 'Upon successful completion, you receive your official ISO certification and ongoing support.',
      color: 'bg-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our streamlined certification process makes achieving ISO compliance simple and efficient
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-600  to-purple-600"></div>
          
          {/* Steps */}
          <div className="relative grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-white border-4 border-slate-200 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-slate-700">{step.number}</span>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="flex justify-center mb-6">
                    <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center shadow-xl relative z-10`}>
                      <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-32 -right-4 transform -translate-y-1/2 z-20 hidden xl:block">
                      <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600  via-orange-600 to-purple-600"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex gap-6">
                    {/* Left Side - Number and Icon */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      {/* Number Badge */}
                      <div className="bg-white border-4 border-slate-200 rounded-full w-16 h-16 flex items-center justify-center shadow-lg mb-4 relative z-10">
                        <span className="text-xl font-bold text-slate-700">{step.number}</span>
                      </div>

                      {/* Icon Circle */}
                      <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center shadow-xl relative z-10`}>
                        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 pt-4">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 mb-6 text-lg">
            Ready to start your certification journey?
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}