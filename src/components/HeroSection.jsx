// HeroSection.jsx
import { ArrowRight, User, Mail, Phone, Building } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";
import { ref, push, set } from "firebase/database";

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

  // ✅ Auto-slide reference
  const intervalRef = useRef(null);

  const banners = [
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      title: "Apply Online ISO Certification",
      subtitle: "Guardian Assessment at Lowest Cost",
      description:
        "ISO Certification (International Organization For Standardization Certification) is a globally recognized set of standards that an organization can achieve in various areas of its operations.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
      title: "ISO Certification Services for Businesses",
      subtitle: "Fast & Reliable Process",
      description:
        "Transform your business with internationally recognized ISO certification. Our expert team guides you through every step of the process.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2069",
      title: "Grow With International Standards",
      subtitle: "Get Certified Easily",
      description:
        "Our ISO certification process ensures your business meets global quality standards with minimal hassle.",
    },
  ];

  // ✅ Manual Next/Prev
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    restartAutoSlide();
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    restartAutoSlide();
  };

  // ✅ Auto Slide Without useEffect
  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000); // change every 5s
    }
  };

  const restartAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    startAutoSlide();
  };

  // ✅ Start auto-slide once (without useEffect)
  if (!intervalRef.current) startAutoSlide();

  // ✅ Form
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const inquiryRef = push(ref(database, "inquiries"));
      await set(inquiryRef, formData);
      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed! Check console for details.");
    }

    setLoading(false);
    setFormData({ name: "", email: "", phone: "", company: "" });
  };

  const currentBanner = banners[currentSlide];

  return (
    <section className="relative h-auto lg:h-[90vh] flex flex-col lg:flex-row items-center overflow-hidden">
      {/* Background image */}
      <img
        src={currentBanner.image}
        alt={currentBanner.title}
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-[rgba(15,35,65,0.85)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
        {/* Left Text */}
        <div className="text-white lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {currentBanner.title}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-400 mb-4">
            {currentBanner.subtitle}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
            {currentBanner.description}
          </p>

          {/* Controls */}
          {/* <div className="flex gap-3 mt-6">
            <button
              onClick={handlePrevSlide}
              className="px-4 py-2 bg-yellow-500 text-blue-900 font-semibold rounded-md hover:bg-yellow-400 transition-all duration-300"
            >
              Previous
            </button>
            <button
              onClick={handleNextSlide}
              className="px-4 py-2 bg-yellow-500 text-blue-900 font-semibold rounded-md hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2"
            >
              <ArrowRight size={18} />
            </button>
          </div> */}
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 lg:w-[40%] w-full">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">
            Request A Free Quote For ISO Certification
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
