import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-10">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 text-center max-w-lg w-full border border-gray-100">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png" // 🔹 change to your actual logo path
            alt="Guardian Assessment Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        {/* Text Content */}
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Your submission has been received successfully.  
          Our team will get back to you shortly.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Guardian Assessment Pvt. Ltd.  
        <br className="md:hidden" /> All Rights Reserved.
      </footer>
    </div>
  );
}
