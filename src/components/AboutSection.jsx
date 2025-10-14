import { ThumbsUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const benefits = [
    '5 years of Experience In ISO Certification',
    'Best Service & Lowest Price Guaranteed',
    '100% Money Back Guarantee',
    'Our Certificate valid in Govt. Tender, Nationally & Internationally',
    '100% Secure Customer Privacy & Data Protection System',
    'No Hidden Costs'
  ];

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(currentSection);
    return () => currentSection && observer.unobserve(currentSection);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-12 sm:py-16 lg:py-20"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            About
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-24 bg-gray-300"></div>
            <div className="h-1 w-16 bg-yellow-500"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src="/images/About2.jpg"
                alt="About Global Legit Solutions"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
              {/* Optional overlay for effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500 mb-4">
              Global Legit Solutions
            </h3>

            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
              Globally leading ISO Certification provider, helping businesses
              achieve excellence and compliance through hassle-free ISO
              certification processes.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 group transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <ThumbsUp
                    className="text-blue-900 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    size={22}
                  />
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div
              className={`mt-8 transition-all duration-1000 delay-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <a
                href="#contact"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
