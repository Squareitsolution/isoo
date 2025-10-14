import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Award,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ];

  const services = [
    { name: "ISO 9001", href: "#iso9001" },
    { name: "ISO 14001", href: "#iso14001" },
    { name: "ISO 22000", href: "#iso22000" },
    { name: "ISO 45001", href: "#iso45001" },
    { name: "ISO 27001", href: "#iso27001" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/GuardianAssessmentPrivateLimited",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/guardianassesmentgapl/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: FaYoutube,
      href: "https://youtu.be/vqukEMC3Lpw?si=VWsmZQTzDGqFCGza",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white" id="home">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">ISO Certify</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for ISO certification services. We help
              businesses achieve excellence through international standards.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`bg-slate-800 p-2 rounded-lg ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href} // href me section ka id
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all duration-200"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+911234567890"
                    className="hover:text-white transition-colors"
                  >
                    +(91) 9219975790
                  </a>
                  <p className="text-sm text-slate-500">Mon-Sat: 9 AM - 6 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@isocertification.com"
                  className="hover:text-white transition-colors"
                >
                  guardianassessment@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />

                <span>
                  812, B Wing, Samartha Aishwarya, Lokhandwala Rd, Tarapore
                  Gardens,
                  <br />
                  Highland Park, Andheri West, Mumbai, Maharashtra 400053, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-white font-semibold">ISO Certify</span>. All
              rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="#terms"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="#cookies"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Badge */}
      <div className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm">
            Accredited ISO Certification Body | Member of International
            Accreditation Forum (IAF)
          </p>
        </div>
      </div>
    </footer>
  );
}
