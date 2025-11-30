"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "When should I start the counseling process after my entrance exam?",
    answer:
      "Ideally, start immediately after your results are declared. Early counseling helps you understand all available options and ensures you don't miss important deadlines for admissions and document submissions.",
  },
  {
    question: "Do you charge for counseling services?",
    answer:
      "We offer a free initial consultation to understand your profile and goals. Our detailed counseling and admission assistance services have transparent pricing with no hidden costs.",
  },
  {
    question: "Which entrance exams do you provide counseling for?",
    answer:
      "We provide counseling for JEE Main/Advanced, NEET, BITSAT, VITEEE, KIITEE, MET, and other major entrance exams for engineering, medical, and management courses across India.",
  },
  {
    question: "Can you help if I didn't get the rank I expected?",
    answer:
      "Absolutely! We specialize in finding the best-fit universities and courses based on your actual rank. Our extensive network helps you explore options you might not have considered.",
  },
  {
    question: "What documents do I need for the admission process?",
    answer:
      "Typically, you'll need entrance exam scorecards, 10th & 12th mark sheets, category certificates (if applicable), ID proof, and photographs. We'll provide a complete checklist based on your selected universities.",
  },
  {
    question: "Do you assist with scholarship applications?",
    answer:
      "Yes, we guide you through available scholarship opportunities based on your merit, category, and financial background, and help with the complete application process.",
  },
];

const FAQsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 w-full bg-white px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-[#FAFAFA] border border-[#E2E8F0] rounded-full mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm ">
            FAQs
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F8C] mt-3 mb-2">Frequently Asked Questions</h2>
        <p className="text-[#64748B] max-w-xl mx-auto text-base md:text-lg">
          Quick answers to your most common questions.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto px-4 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-5 shadow-sm cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base md:text-lg font-semibold text-[#1B4F8C] pr-4">{faq.question}</h3>
              {openIndex === index ? (
                <FiMinus className="text-xl text-[#F9A825] shrink-0" />
              ) : (
                <FiPlus className="text-xl text-[#1B4F8C] shrink-0" />
              )}
            </div>

            {/* ANSWER SECTION */}
            {openIndex === index && (
              <p className="mt-4 text-[#64748B] text-sm md:text-base leading-relaxed transition-all">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* View All FAQs Button */}
      <div className="text-center mt-12">
        <a
          href="/faqs"
          className="inline-flex items-center gap-2 bg-[#F9A825] hover:bg-[#f5a000] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
        >
          View All FAQs
          <FiArrowRight />
        </a>
      </div>

    </section>
  );
};

export default FAQsSection;
