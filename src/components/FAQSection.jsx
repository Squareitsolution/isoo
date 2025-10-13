import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to get certified?',
      answer: 'The certification timeline typically ranges from 3 to 6 months, depending on your organization\'s size, current systems, and the specific ISO standard. The process includes consultation, documentation preparation, internal audits, and final certification audit. We work efficiently to minimize disruption to your operations while ensuring thorough compliance.'
    },
    {
      question: 'What documents are required for ISO certification?',
      answer: 'Required documents vary by ISO standard but generally include: quality manual, documented procedures, work instructions, company policies, organizational charts, process flowcharts, risk assessments, and records of training and audits. Our team provides comprehensive documentation support and templates to make this process straightforward and manageable.'
    },
    {
      question: 'Is the certification valid internationally?',
      answer: 'Yes, ISO certifications are internationally recognized and accepted worldwide. Once certified, your organization can demonstrate compliance with international standards to clients, partners, and regulatory bodies across all countries. This global recognition helps facilitate international trade and enhances your company\'s reputation in the global marketplace.'
    },
    {
      question: 'How much does ISO certification cost?',
      answer: 'The cost varies based on several factors including your organization\'s size, number of employees, complexity of operations, and the specific ISO standard. We offer competitive and transparent pricing with no hidden fees. Contact us for a customized quote tailored to your specific needs and budget. We also offer flexible payment plans to make certification accessible.'
    },
    {
      question: 'Do I need to renew my ISO certification?',
      answer: 'Yes, ISO certifications are typically valid for 3 years. During this period, surveillance audits are conducted annually to ensure ongoing compliance. After 3 years, a recertification audit is required to renew your certification. We provide continuous support throughout the certification lifecycle, including preparation for surveillance and recertification audits.'
    },
    {
      question: 'What are the benefits of ISO certification?',
      answer: 'ISO certification offers numerous benefits including: improved operational efficiency, enhanced customer satisfaction, better risk management, competitive advantage, increased credibility, access to new markets, reduced costs through process optimization, improved employee morale, and compliance with legal and regulatory requirements. It demonstrates your commitment to quality and continuous improvement.'
    },
   
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <HelpCircle className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about ISO certification process, requirements, and benefits
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Our team is here to help. Get in touch with us for personalized answers to your queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-slate-600">Support Available</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-slate-600">Satisfaction Guarantee</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">Fast</div>
            <p className="text-slate-600">Response Time</p>
          </div>
        </div>
      </div>
    </div>
  );
}