import React from 'react';
import { TrendingUp, UserCheck, Clock, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      topLabel: ''
    },
    {
      icon: UserCheck,
      title: '',
      topLabel: 'Dedicated & Committed'
    },
    {
      icon: Clock,
      title: 'Support 24 Hours',
      topLabel: ''
    },
    {
      icon: Users,
      title: '',
      topLabel: 'Work Closely As A Team'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            WHY CHOOSE US
          </h2>
          
          <div className="flex items-center justify-center gap-2">
            <div className="w-20 h-1 bg-gray-300"></div>
            <div className="w-20 h-1 bg-yellow-500"></div>
            
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-2">
            Comprehensive ISO certification solutions designed to meet your
            organization’s quality, safety, and sustainability goals.
          </p>
        </div>
        

        {/* Timeline */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:block">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-900 transform -translate-y-1/2 z-0"></div>
            
            {/* Features */}
            <div className="relative z-10 grid grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const showTop = index % 2 === 1;
                
                return (
                  <div key={index} className="flex flex-col items-center">
                    {/* Top Label */}
                    {showTop && (
                      <div className="mb-8 text-center">
                        <p className="text-blue-900 font-semibold text-sm md:text-base leading-tight">
                          {feature.topLabel}
                        </p>
                      </div>
                    )}
                    {!showTop && <div className="mb-8 h-12"></div>}
                    
                    {/* Icon Circle */}
                    <div className="relative">
                      {/* Dot on line */}
                      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-900 rounded-full z-20"></div> */}
                      
                      {/* Main Circle */}
                      <div className="relative bg-white border-4 border-blue-900 rounded-full w-32 h-32 flex items-center justify-center shadow-lg z-10">
                        <Icon className="w-12 h-12 text-yellow-500" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Bottom Label */}
                    {!showTop && (
                      <div className="mt-8 text-center">
                        <p className="text-blue-900 font-semibold text-sm md:text-base leading-tight">
                          {feature.title}
                        </p>
                      </div>
                    )}
                    {showTop && <div className="mt-8 h-12"></div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden">
            <div className="space-y-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const label = feature.topLabel || feature.title;
                
                return (
                  <div key={index} className="flex items-center gap-6">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 bg-white border-4 border-blue-900 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-yellow-500" strokeWidth={1.5} />
                    </div>
                    
                    {/* Label */}
                    <div className="flex-1">
                      <p className="text-blue-900 font-semibold text-lg leading-tight">
                        {label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}