import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-500 text-white text-center py-16 shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Terms and Conditions
        </h1>
        <p className="text-lg opacity-90">Guardian Assessment Pvt. Ltd.</p>
      </header>

      {/* Container */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-10 space-y-8">
        {/* Intro */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-blue-500">
          <p className="text-gray-700 leading-relaxed">
            Welcome to Guardian Assessment Pvt. Ltd. By accessing or using our
            website, services, or certification systems, you agree to comply
            with and be bound by the following Terms and Conditions. Please read
            them carefully before using our services.
          </p>
        </div>

        {/* Section 1 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By using our website or services, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions. If you do not
            agree, please discontinue using our services immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4">
            2. Services and Certification
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              Guardian Assessment Pvt. Ltd. provides ISO certification and audit
              services under authorized accreditations.
            </li>
            <li>
              All certifications are subject to compliance with applicable ISO
              standards and our internal assessment policies.
            </li>
            <li>
              We reserve the right to modify or withdraw certification in case
              of non-compliance or false representation.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              Users must provide accurate and complete information during
              registration or application.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of any
              login credentials associated with your account.
            </li>
            <li>
              Misuse or unauthorized access to our systems may result in legal
              action.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4">
            4. Intellectual Property Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All website content, including logos, text, graphics, and images, is
            the property of Guardian Assessment Pvt. Ltd. Unauthorized copying,
            redistribution, or modification of any content is strictly
            prohibited.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Guardian Assessment Pvt. Ltd. shall not be held liable for any
            direct, indirect, or incidental damages arising from the use or
            inability to use our services or website.
          </p>
        </section>

        {/* Section 6 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4">
            6. Amendments and Updates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may revise or update these Terms and Conditions at any time.
            Changes will be posted on this page, and continued use of our
            services after updates constitutes acceptance of the revised terms.
          </p>
        </section>

        {/* Contact Section */}
        <div className="bg-blue-50 p-6 md:p-8 rounded-xl shadow-inner">
          <h2 className="text-2xl font-bold text-blue-900 border-b-4 border-blue-800 pb-2 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            For any inquiries or clarification regarding these Terms and
            Conditions, please contact us at:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong className="text-blue-800">Email:</strong>{" "}
              <a
                href="mailto:guardianassessment@gmail.com"
                className="text-blue-600 hover:underline"
              >
                guardianassessment@gmail.com
              </a>
            </p>
            <p>
              <strong className="text-blue-800">Phone:</strong>{" "}
              <a
                href="tel:+919820434389"
                className="text-blue-600 hover:underline"
              >
                +91 9820434389
              </a>
            </p>
            <p>
              <strong className="text-blue-800">Address:</strong> Guardian
              Assessment Private Limited, 812, B Wing, Samartha Aishwarya,
              Lokhandwala Rd, Andheri West, Mumbai, Maharashtra 400053, India
            </p>
          </div>
        </div>

        {/* Final Note */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <p className="text-gray-700 leading-relaxed">
            By engaging with Guardian Assessment Pvt. Ltd., you confirm that you
            have read and understood these Terms and Conditions and agree to be
            bound by them.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>&copy; 2024 Guardian Assessment Pvt. Ltd. All Rights Reserved.</p>
        <p className="opacity-80 mt-1">
          Dedicated to Quality, Integrity, and Excellence
        </p>
      </footer>
    </div>
  );
}
