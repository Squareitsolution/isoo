import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.pageYOffset;
    const progress = (currentScroll / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="fixed bottom-28 right-2 z-50">
          <button
            onClick={scrollToTop}
            className="relative cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            {/* Progress Circle */}
            <svg className="absolute inset-0 -rotate-90 w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="22"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="22"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 22}`}
                strokeDashoffset={`${2 * Math.PI * 22 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-200"
                strokeLinecap="round"
              />
            </svg>

            {/* Icon */}
            <ChevronUp className="w-6 h-6 relative z-10 group-hover:animate-bounce" strokeWidth={3} />
            
            {/* Animated Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-400/40 blur-xl scale-150 animate-pulse -z-10"></div>
          </button>
        </div>
      )}

      
      
    </>
  );
}