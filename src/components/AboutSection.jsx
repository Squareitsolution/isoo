import { ThumbsUp } from 'lucide-react';

export default function AboutSection() {
  const benefits = [
    '5 years of Experience In ISO Certification',
    'Best Service & Lowest Price Guaranteed',
    '100% Money Back Guarantee',
    'Our Certificate valid in Govt. Tender, Nationally & Internationally',
    '100% Secure Customer Privacy & Data Protection System.',
    'No Hidden Costs'
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20" id="about" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
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
          {/* Left Side - Illustration */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Using SVG illustration placeholder - Replace with actual illustration */}
              <svg viewBox="0 0 600 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Desk */}
                <rect x="50" y="350" width="500" height="120" fill="#E8D5C4" rx="8"/>
                <rect x="50" y="350" width="500" height="15" fill="#D4C4B0" rx="8"/>
                
                {/* Desk Drawers */}
                <rect x="320" y="380" width="120" height="40" fill="#C4B5A0" rx="4"/>
                <rect x="320" y="430" width="120" height="35" fill="#C4B5A0" rx="4"/>
                <line x1="375" y1="395" x2="385" y2="395" stroke="#8B7B6A" strokeWidth="3"/>
                <line x1="375" y1="445" x2="385" y2="445" stroke="#8B7B6A" strokeWidth="3"/>
                
                {/* Plant */}
                <ellipse cx="120" cy="340" rx="15" ry="20" fill="#A8C5A0"/>
                <ellipse cx="105" cy="335" rx="12" ry="18" fill="#A8C5A0"/>
                <ellipse cx="135" cy="335" rx="12" ry="18" fill="#A8C5A0"/>
                <rect x="115" y="340" width="10" height="25" fill="#8B7B6A"/>
                
                {/* Computer Monitor */}
                <rect x="200" y="250" width="140" height="100" fill="#3B5998" rx="4"/>
                <rect x="210" y="260" width="120" height="80" fill="#5A7FB8"/>
                <rect x="260" y="350" width="40" height="10" fill="#7A8B99"/>
                <polygon points="250,360 280,360 275,370 255,370" fill="#7A8B99"/>
                
                {/* Person 1 (Sitting) */}
                <ellipse cx="150" cy="280" rx="25" ry="30" fill="#4A5568"/>
                <circle cx="150" cy="250" r="30" fill="#F4C2A1"/>
                <ellipse cx="145" cy="245" rx="4" ry="5" fill="#2D3748"/>
                <ellipse cx="155" cy="245" rx="4" ry="5" fill="#2D3748"/>
                <path d="M 145 255 Q 150 258 155 255" stroke="#2D3748" strokeWidth="2" fill="none"/>
                <rect x="125" y="280" width="50" height="70" fill="#5A9FD4" rx="8"/>
                <rect x="115" y="330" width="30" height="50" fill="#2C5282" rx="4"/>
                <rect x="155" y="330" width="30" height="50" fill="#2C5282" rx="4"/>
                
                {/* Person 2 (Standing) */}
                <circle cx="420" cy="230" r="28" fill="#D4A88C"/>
                <ellipse cx="415" cy="225" rx="4" ry="5" fill="#2D3748"/>
                <ellipse cx="425" cy="225" rx="4" ry="5" fill="#2D3748"/>
                <path d="M 415 235 Q 420 238 425 235" stroke="#2D3748" strokeWidth="2" fill="none"/>
                <rect x="400" y="255" width="40" height="60" fill="#E8B96E" rx="6"/>
                <rect x="390" y="260" width="20" height="70" fill="#E8B96E" rx="4"/>
                <rect x="405" y="310" width="18" height="65" fill="#4A5568" rx="4"/>
                <rect x="427" y="310" width="18" height="65" fill="#4A5568" rx="4"/>
                
                {/* Document in hand */}
                <rect x="440" y="200" width="40" height="55" fill="white" stroke="#2D3748" strokeWidth="2" rx="2"/>
                <line x1="445" y1="210" x2="475" y2="210" stroke="#5A7FB8" strokeWidth="2"/>
                <line x1="445" y1="220" x2="475" y2="220" stroke="#5A7FB8" strokeWidth="2"/>
                <line x1="445" y1="230" x2="470" y2="230" stroke="#5A7FB8" strokeWidth="2"/>
                <line x1="445" y1="240" x2="475" y2="240" stroke="#5A7FB8" strokeWidth="2"/>
                
                {/* Floating leaves decoration */}
                <ellipse cx="500" cy="450" rx="12" ry="8" fill="#A8C5A0" opacity="0.6"/>
                <ellipse cx="520" cy="460" rx="10" ry="7" fill="#A8C5A0" opacity="0.6"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500 mb-4">
              Global Legit Solutions
            </h3>
            
            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
              Globally leading ISO Certification provider, We can help you to get your business ISO Certified..
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
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

            {/* Optional CTA Button */}
            <div className="mt-8">
              <a href="#contact" className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors font-semibold shadow-lg hover:shadow-xl">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}