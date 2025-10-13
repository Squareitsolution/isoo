import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tech Solutions Pvt Ltd',
      rating: 5,
      feedback: 'Outstanding service! The team guided us through the entire ISO 9001 certification process with professionalism and expertise. They made what seemed like a daunting...',
      initials: 'RK',
      color: 'bg-blue-400'
    },
    {
      name: 'Priya Sharma',
      company: 'Green Earth Manufacturing',
      rating: 5,
      feedback: 'We achieved ISO 14001 certification smoothly thanks to their dedicated support. The auditors were thorough, knowledgeable, and always available to answer our...',
      initials: 'PS',
      color: 'bg-purple-400'
    },
    {
      name: 'Amit Patel',
      company: 'Food Express India',
      rating: 5,
      feedback: 'The ISO 22000 certification process was seamless with their guidance. They provided excellent documentation support and their team was always responsive. Our food...',
      initials: 'AP',
      color: 'bg-indigo-400'
    },
    {
      name: 'Neha Gupta',
      company: 'SecureData Technologies',
      rating: 5,
      feedback: 'Fantastic experience obtaining ISO 27001 certification. The consultants were extremely professional and made the complex process simple. Their attention to detail...',
      initials: 'NG',
      color: 'bg-pink-400'
    },
    {
      name: 'Vikram Singh',
      company: 'SafeWork Industries',
      rating: 5,
      feedback: 'Achieving ISO 45001 certification was a game-changer for our company. The team provided comprehensive training and support throughout. Their expertise in occupational...',
      initials: 'VS',
      color: 'bg-teal-400'
    },
    {
      name: 'Anita Desai',
      company: 'Quality First Corp',
      rating: 5,
      feedback: 'Exceptional service from start to finish! The ISO certification process was handled professionally and efficiently. They answered all our questions promptly and ensured...',
      initials: 'AD',
      color: 'bg-cyan-400'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped achieve ISO certification
          </p>
        </div>

        {/* Testimonials Grid - 2 rows × 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Feedback */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                "{testimonial.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Join Our Success Stories
          </button>
        </div> */}
      </div>
    </div>
  );
}