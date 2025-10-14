import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 px-4 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-lg opacity-90">Guardian Assessment Pvt. Ltd.</p>
      </header>

      {/* Container */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Intro */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-blue-500">
          <p className="text-gray-600 text-lg">
            Welcome to Guardian Assessment Pvt. Ltd. Privacy Policy page. Your
            privacy is of utmost importance to us, and we are committed to
            protecting your personal information. This privacy policy outlines
            how we collect, use, store, and safeguard the information provided
            by our clients, employees, and other stakeholders.
          </p>
        </div>

        {/* Sections */}
        {[
          {
            title: "Data Collection and Purpose",
            items: [
              {
                bold: "Collection:",
                text: "We collect personal data to provide ISO certification services and manage our operations. This data may include names, contact details, organizational affiliations, and certification-related information.",
              },
              {
                bold: "Purpose:",
                text: "The data collected is used to facilitate certification processes, maintain records, and communicate with clients.",
              },
            ],
          },
          {
            title: "Lawful Basis and Consent",
            items: [
              {
                bold: "Legal Grounds:",
                text: "We process personal data based on legal grounds such as contractual necessity, compliance with legal obligations, and legitimate interests.",
              },
              {
                bold: "Consent:",
                text: "By engaging with us, you implicitly consent to the processing of your data for certification purposes.",
              },
            ],
          },
          {
            title: "ISO Certification Licensing",
            items: [
              {
                bold: "Licensing:",
                text: "Guardian Assessment Pvt Ltd holds valid accreditations to operate as an ISO Certification body.",
              },
              {
                bold: "Evaluation:",
                text: "Our certification processes comply with ISO standards.",
              },
            ],
          },
          {
            title: "Data Security and Confidentiality",
            items: [
              {
                bold: "Protection Measures:",
                text: "We implement robust technical and organizational measures to protect personal data against unauthorized access, loss, or misuse.",
              },
              {
                bold: "Access Restriction:",
                text: "Access to personal data is restricted to authorized personnel only.",
              },
              {
                bold: "Confidentiality:",
                text: "Confidentiality agreements are in place with our employees, associates, and external vendors, if any.",
              },
            ],
          },
          {
            title: "Data Retention",
            items: [
              {
                bold: "Retention Period:",
                text: "We retain personal data only for the duration necessary to fulfill certification requirements and legal obligations.",
              },
              {
                bold: "Data Disposal:",
                text: "Once the purpose is fulfilled, data is securely deleted or anonymized.",
              },
            ],
          },
          {
            title: "Third-Party Sharing",
            items: [
              {
                bold: "Sharing:",
                text: "We may share data with accreditation bodies, regulatory authorities, and other relevant entities as required for certification processes.",
              },
              {
                bold: "Confidentiality:",
                text: "Third parties are bound by confidentiality agreements and data protection regulations.",
              },
            ],
          },
          {
            title: "Individual Rights",
            items: [
              {
                bold: "Rights:",
                text: "You have the right to access, rectify, and erase your personal data.",
              },
              {
                bold: "Requests:",
                text: "Requests related to data rights can be directed to our Data Protection Officer (DPO).",
              },
            ],
          },
        ].map((section, idx) => (
          <section
            key={idx}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md space-y-3"
          >
            <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 text-gray-900">
              {section.title}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {section.items.map((item, i) => (
                <li key={i}>
                  <strong className="text-gray-900">{item.bold}</strong>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Highlight Box */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 text-gray-900">
            ISO Certification Distributor
          </h2>
          <div className="bg-amber-100 border-l-4 border-amber-500 p-5 rounded-lg mt-4">
            <p className="text-gray-700">
              <strong>Clarification:</strong> While we facilitate ISO
              certification, we issue ISO certificates for Management System
              Standards and certifications are issued for ISO standards.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:p-8 rounded-xl">
          <h2 className="text-2xl font-bold border-b-4 border-blue-900 pb-2 mb-4 text-gray-900">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-5">
            For inquiries or concerns related to data privacy, please contact us
            at:
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
              Lokhandwala Rd, Tarapore Gardens, Highland Park, Andheri West,
              Mumbai, Maharashtra 400053, India
            </p>
          </div>
        </div>

        {/* Final Note */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <p className="text-gray-600 leading-relaxed text-lg">
            By engaging with Guardian Assessment Private Limited, you acknowledge
            and accept the terms outlined in this privacy policy. We remain
            committed to maintaining the highest standards of data protection
            and privacy.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 bg-blue-900 text-white mt-10">
        <p>&copy; 2024 Guardian Assessment Pvt. Ltd. All rights reserved.</p>
        <p className="text-white/80 mt-2">
          Committed to your privacy and data protection
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
