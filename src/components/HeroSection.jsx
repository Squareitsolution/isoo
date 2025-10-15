// HeroSection.jsx
import { ArrowRight, User, Mail, Phone, Building } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase"; // ✅ Import Firebase DB
import { ref, push, set } from "firebase/database"; // ✅ Firebase DB methods

export default function HeroSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      title: "Apply Online ISO Certification",
      subtitle: "Globally at Lowest Cost",
      description:
        "ISO Certification (International Organization For Standardization Certification) is a globally recognized set of standards that an organization can achieve in various areas of its operations.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
      title: "Get Your Business ISO Certified",
      subtitle: "Fast & Reliable Process",
      description:
        "Transform your business with internationally recognized ISO certification. Our expert team guides you through every step of the process.",
    },
  ];

  // Change slides automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Create a new entry in "inquiries" node
      const inquiryRef = push(ref(database, "inquiries"));
      await set(inquiryRef, formData);

      console.log("Form submitted successfully!");
      navigate("/thanks"); // Redirect user to Thank You page
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed! Check console for details.");
    }

    setLoading(false);
    setFormData({ name: "", email: "", phone: "", company: "" });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background images */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(15,35,65,0.85), rgba(15,35,65,0.85)), url(${banner.image})`,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">
        {/* Left Text */}
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {banners[currentSlide].title}
          </h1>
          <h2 className="text-2xl text-yellow-400 mb-6">
            {banners[currentSlide].subtitle}
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            {banners[currentSlide].description}
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-lg shadow-2xl p-6 lg:w-[80%] sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
            Fill Form To Get Free Sample
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900"
              />
            </div>

            {/* Company */}
            <div className="relative">
              <Building
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name*"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition-all duration-300"
            >
              {loading ? "Submitting..." : "SUBMIT NOW"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
