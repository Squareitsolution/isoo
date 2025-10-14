import { ArrowRight, User, Mail, Phone, Building } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
      title: 'Apply Online ISO Certification',
      subtitle: 'Globally at Lowest Cost',
      description: 'ISO Certification (International Organization For Standardization Certification) Is A Globally Recognized Set Of Standards That An Organization Can Achieve In Various Areas Of Its Operations. There Are Numerous Benefits To Obtaining ISO Certification, Depending On The Specific Standard You Pursue And The Nature Of Your Organization.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071',
      title: 'Get Your Business ISO Certified',
      subtitle: 'Fast & Reliable Process',
      description: 'Transform your business with internationally recognized ISO certification. Our expert team guides you through every step of the certification process, ensuring compliance with global standards. Enhance your credibility, improve operational efficiency, and gain competitive advantage in the market.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, );

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Images with Overlay - Sliding */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(15, 35, 65, 0.85), rgba(15, 35, 65, 0.85)), url('${banner.image}')`,
          }}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Sliding with banner */}
          <div className="text-white">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-full absolute'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-yellow-400">{banner.title}</span>
                  <br />
                  <span className="text-yellow-400">{banner.subtitle}</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                  {banner.description}
                </p>
              </div>
            ))}

            {/* Slide Indicators */}
            <div className="flex gap-3 mt-8">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-12 bg-yellow-400' : 'w-8 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Enquiry Form - Slide in from right */}
          <div className="w-[80%] animate-slideInRight">
            <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
                Fill Form To Get Free Sample
              </h3>

              <div className="space-y-4">
                {/* Name Input */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-700"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-700"
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone*"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-700"
                  />
                </div>

                {/* Company Name Input */}
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name*"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-700"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-all duration-300 text-base sm:text-lg"
                >
                  SUBMIT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 sm:h-24 text-white" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"/>
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }
      `}</style>
    </section>
  );
}