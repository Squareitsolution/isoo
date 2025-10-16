import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, UserCheck, Clock, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    { icon: TrendingUp, title: 'Cost Effective', topLabel: '' },
    { icon: UserCheck, title: '', topLabel: 'Dedicated & Committed' },
    { icon: Clock, title: 'Support 24 Hours', topLabel: '' },
    { icon: Users, title: '', topLabel: 'Work Closely As A Team' }
  ];

  useEffect(() => {
    // ✅ Store ref.current in a stable variable
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(currentSection);

    return () => {
      // ✅ Use same stored reference
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-[80vh] bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            WHY CHOOSE US
          </h2>

          <div className="flex items-center justify-center gap-2">
            <div className="w-20 h-1 bg-gray-300"></div>
            <div className="w-20 h-1 bg-yellow-500"></div>
          </div>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-2">
            Comprehensive ISO certification solutions designed to meet your
            organization's quality, safety, and sustainability goals.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:block">
            {/* Horizontal Line */}
            <div
              className={`absolute top-1/2 left-0 right-0 h-0.5 bg-blue-900 transform -translate-y-1/2 z-0 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            ></div>

            {/* Features */}
            <div className="relative z-10 grid grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const showTop = index % 2 === 1;

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center transition-all duration-1000 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
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
                      <div className="relative bg-white border-4 border-blue-900 rounded-full w-32 h-32 flex items-center justify-center shadow-lg z-10 hover:scale-110 transition-transform duration-300">
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
                  <div
                    key={index}
                    className={`flex items-center gap-6 transition-all duration-1000 ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 bg-white border-4 border-blue-900 rounded-full w-24 h-24 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
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
