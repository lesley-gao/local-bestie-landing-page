"use client";
import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQConfig = {
  title: string;
  subtitle?: string;
  contactEmail?: string;
  faqs: FAQItem[];
  showAllButtonText?: string;
  maxDisplayCount?: number; 
};

type FAQSectionProps = {
  config: FAQConfig;
};

export default function FAQSection({ config }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const {
    title,
    subtitle,
    contactEmail,
    faqs,
    showAllButtonText = "Show all FAQs",
    maxDisplayCount = 5
  } = config;

  const displayedFAQs = showAll ? faqs : faqs.slice(0, maxDisplayCount);
  const hasMoreFAQs = faqs.length > maxDisplayCount;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 px-6 md:px-8 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-lg">
              {subtitle}
              {contactEmail && (
                <>
                  {" "}
                  <a 
                    href={`mailto:${contactEmail}`}
                    className="text-themecolor hover:underline font-medium"
                  >
                    {contactEmail}
                  </a>
                </>
              )}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-8">
          {displayedFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-themecolor focus:ring-inset transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-400 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <div className="pt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {hasMoreFAQs && !showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white clickeffect hover:ring-1 hover:ring-themecolor"
            >
              {showAllButtonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}