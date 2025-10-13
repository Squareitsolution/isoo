import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const certifications = [
    { left: 'ISO 9001:2015', right: 'ISO 14001:2015' },
    { left: 'ISO 22000:2018', right: 'ISO 27001:2022' },
    { left: 'ISO 45001:2018', right: 'ISO 37001:2016' },
    { left: 'ISO 13485:2016', right: '' }
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 35, 65, 0.85), rgba(15, 35, 65, 0.85)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070')`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Apply Online ISO Certification</span>
              <br />
              <span className="text-yellow-400">Globally at Lowest Cost</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
              ISO Certification (International Organization For Standardization Certification) Is A 
              Globally Recognized Set Of Standards That An Organization Can Achieve In Various 
              Areas Of Its Operations. There Are Numerous Benefits To Obtaining ISO Certification, 
              Depending On The Specific Standard You Pursue And The Nature Of Your Organization.
            </p>
          </div>

          {/* Right Content - Certification Card */}
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 lg:p-10">
              <div className="space-y-4 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    {/* Left Certification */}
                    <div className="flex items-center gap-3 group">
                      <ArrowRight className="text-blue-900 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={20} />
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">
                        {cert.left}
                      </span>
                    </div>
                    
                    {/* Right Certification */}
                    {cert.right && (
                      <div className="flex items-center gap-3 group">
                        <ArrowRight className="text-blue-900 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={20} />
                        <span className="text-gray-800 font-semibold text-sm sm:text-base">
                          {cert.right}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Show More Button */}
              <a href="#certificates" className="w-full bg-white border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition-all duration-300 group">
                <span>Show More</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave (Optional) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 sm:h-24 text-white" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}