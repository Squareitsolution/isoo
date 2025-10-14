// import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


export default function FloatingButtons() {
  const whatsappNumber = '+919219975790';
  const phoneNumber = '+919219975790';

  const handleWhatsAppClick = () => {
    const msg = 'Hello! I would like to inquire about ISO certification services.';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-2 z-50 ">
        <button
          onClick={handleWhatsAppClick}
          className="relative cursor-pointer bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7 font-bold " strokeWidth={2.5} />
          
          {/* Animated Glow Rings */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-pulse"></div>
          
          {/* Outer Glow Circle */}
          <div className="absolute inset-0 -z-10 rounded-full bg-green-400/60 blur-xl scale-150 animate-pulse"></div>
          <div className="absolute inset-0 -z-20 rounded-full bg-green-300/40 blur-2xl scale-[2.5]"></div>
        </button>
      </div>

      {/* Call Button */}
      <div className="fixed bottom-6 left-2 z-50">
        <button
          onClick={handleCallClick}
          className="relative bg-blue-600 cursor-pointer text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
          aria-label="Call Now"
        >
          <Phone className="w-7 h-7 font-bold" strokeWidth={2.5} />
          
          {/* Animated Glow Rings */}
          <div className="absolute inset-0 rounded-full bg-blue-600 opacity-40 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-pulse"></div>
          
          {/* Outer Glow Circle */}
          <div className="absolute inset-0 -z-10 rounded-full bg-blue-400/60 blur-xl scale-150 animate-pulse"></div>
          <div className="absolute inset-0 -z-20 rounded-full bg-blue-300/40 blur-2xl scale-[2.5]"></div>
        </button>
      </div>

      {/* Additional Styling for Better Animation */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.5);
          }
        }
      `}</style>
    </>
  );
}