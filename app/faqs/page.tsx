"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

// Note: Metadata cannot be exported from client components
// SEO is handled through Head in the parent layout or a separate metadata file


interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const allFaqs: FAQItem[] = [
  // General Questions
  {
    category: "General",
    question: "What is RAMA Educare?",
    answer:
      "RAMA Educare is a leading educational counseling service specializing in post-entrance exam admission guidance. We help students secure admissions to top universities across India based on their entrance exam results.",
  },
  {
    category: "General",
    question: "Where is RAMA Educare located?",
    answer:
      "We are based in Jamshedpur, Jharkhand, and serve students across India. We offer both in-person and online counseling sessions to accommodate students from all locations.",
  },
  {
    category: "General",
    question: "How long has RAMA Educare been in operation?",
    answer:
      "RAMA Educare has over 15 years of experience in educational counseling and admission assistance, helping thousands of students achieve their academic goals.",
  },

  // Counseling Services
  {
    category: "Counseling Services",
    question: "When should I start the counseling process after my entrance exam?",
    answer:
      "Ideally, start immediately after your results are declared. Early counseling helps you understand all available options and ensures you don't miss important deadlines for admissions and document submissions.",
  },
  {
    category: "Counseling Services",
    question: "Which entrance exams do you provide counseling for?",
    answer:
      "We provide counseling for JEE Main/Advanced, NEET, BITSAT, VITEEE, KIITEE, MET, WBJEE, and other major entrance exams for engineering, medical, and management courses across India.",
  },
  {
    category: "Counseling Services",
    question: "Can you help if I didn't get the rank I expected?",
    answer:
      "Absolutely! We specialize in finding the best-fit universities and courses based on your actual rank. Our extensive network and 15+ years of experience help you explore options you might not have considered.",
  },
  {
    category: "Counseling Services",
    question: "Do you provide online counseling sessions?",
    answer:
      "Yes, we offer both in-person and online counseling sessions via video call. This allows us to serve students across India, regardless of their location.",
  },

  // Admission Process
  {
    category: "Admission Process",
    question: "What documents do I need for the admission process?",
    answer:
      "Typically, you'll need entrance exam scorecards, 10th & 12th mark sheets, category certificates (if applicable), ID proof, photographs, and domicile certificate. We provide a complete checklist based on your selected universities.",
  },
  {
    category: "Admission Process",
    question: "How does the university selection process work?",
    answer:
      "Based on your entrance exam results, academic profile, course preferences, and budget, we shortlist the best-fit universities. We consider factors like placement records, infrastructure, faculty, and your career goals.",
  },
  {
    category: "Admission Process",
    question: "Do you assist with filling application forms?",
    answer:
      "Yes, we provide complete assistance with filling out application forms, uploading documents, and ensuring all information is accurate to avoid rejections.",
  },
  {
    category: "Admission Process",
    question: "What happens during counseling rounds?",
    answer:
      "During counseling rounds, we guide you through choice filling, seat allocation, and acceptance processes. We help you understand cutoffs, predict seat availability, and make informed decisions.",
  },

  // Fees & Costs
  {
    category: "Fees & Costs",
    question: "Do you charge for counseling services?",
    answer:
      "We offer a free initial consultation to understand your profile and goals. Our detailed counseling and admission assistance services have transparent pricing with no hidden costs. Contact us for specific package details.",
  },
  {
    category: "Fees & Costs",
    question: "Are there any hidden charges?",
    answer:
      "No, we believe in complete transparency. All our service fees are clearly communicated upfront with no hidden charges or surprise costs.",
  },
  {
    category: "Fees & Costs",
    question: "Do you assist with scholarship applications?",
    answer:
      "Yes, we guide you through available scholarship opportunities based on your merit, category, and financial background. We help with the complete application process and document preparation.",
  },

  // Universities & Courses
  {
    category: "Universities & Courses",
    question: "Which universities do you work with?",
    answer:
      "We work with 50+ top universities across India, including NITs, IITs, BITS Pilani, VIT, KIIT, Manipal, SRM, Amity, and many other premier institutions for engineering, medical, and management courses.",
  },
  {
    category: "Universities & Courses",
    question: "Can you help with both government and private university admissions?",
    answer:
      "Yes, we assist with admissions to both government institutions (NITs, IITs, GFTIs) and private universities across India. We help you evaluate all options based on your rank and preferences.",
  },
  {
    category: "Universities & Courses",
    question: "Do you provide counseling for medical college admissions?",
    answer:
      "Yes, we provide comprehensive counseling for NEET-based medical and dental college admissions, including MBBS, BDS, BAMS, BHMS, and other medical courses in government and private institutions.",
  },
  {
    category: "Universities & Courses",
    question: "Can you help with management course admissions?",
    answer:
      "Yes, we assist with MBA and BBA admissions through various entrance exams like CAT, MAT, XAT, CMAT, and others to top business schools across India.",
  },

  // Success & Support
  {
    category: "Success & Support",
    question: "How many students have you helped?",
    answer:
      "Over our 15+ years of operation, we have successfully helped 500+ students secure admissions to their dream universities and assisted them in obtaining over ₹2 Crore in scholarships.",
  },
  {
    category: "Success & Support",
    question: "What is your success rate?",
    answer:
      "We have a high success rate with 95%+ of our students securing admissions to universities that match their preferences and career goals. Our personalized approach ensures each student finds the right fit.",
  },
  {
    category: "Success & Support",
    question: "Do you provide support after admission?",
    answer:
      "Yes, we provide post-admission support including guidance on hostel allocation, fee payment, course registration, and settling into campus life.",
  },
  {
    category: "Success & Support",
    question: "Can I contact you after the admission process is complete?",
    answer:
      "Absolutely! We maintain long-term relationships with our students and are always available for guidance on academic matters, internships, placements, and further studies.",
  },

  // Process & Timeline
  {
    category: "Process & Timeline",
    question: "How long does the admission process take?",
    answer:
      "The timeline varies based on entrance exams and university counseling schedules. Typically, the process from result declaration to final admission takes 2-8 weeks. We ensure you don't miss any critical deadlines.",
  },
  {
    category: "Process & Timeline",
    question: "What if I miss a counseling round?",
    answer:
      "We closely monitor all counseling rounds and deadlines to ensure you don't miss opportunities. If you do miss a round, we help you explore spot admissions, management quota seats, and other available options.",
  },
  {
    category: "Process & Timeline",
    question: "Can I change my course or university after counseling?",
    answer:
      "Yes, during the counseling process, you can participate in multiple rounds and upgrade your choices. We guide you through the entire process to help you make the best decision.",
  },
];

const categories = Array.from(new Set(allFaqs.map((faq) => faq.category)));

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs =
    selectedCategory === "All"
      ? allFaqs
      : allFaqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar/>
      {/* Hero Section */}
      <section className="bg-white mt-25 py-16 md:py-24 px-4 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#FAFAFA] border border-[#E2E8F0] rounded-lg mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              Help Center
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B4F8C] mt-3 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto">
            Find answers to common questions about our counseling services, admission process, and more.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === "All"
                  ? "bg-[#1B4F8C] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#64748B] hover:border-[#1B4F8C]"
              }`}
            >
              All Questions
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#1B4F8C] text-white"
                    : "bg-white border border-[#E2E8F0] text-[#64748B] hover:border-[#1B4F8C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-[#64748B]">
              Showing {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-5 shadow-sm cursor-pointer transition hover:shadow-md"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F9A825] mb-2 block">
                      {faq.category}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-[#1B4F8C]">
                      {faq.question}
                    </h3>
                  </div>
                  {openIndex === index ? (
                    <FiMinus className="text-xl text-[#F9A825] shrink-0 mt-1" />
                  ) : (
                    <FiPlus className="text-xl text-[#1B4F8C] shrink-0 mt-1" />
                  )}
                </div>

                {openIndex === index && (
                  <p className="mt-4 text-[#64748B] text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4F8C] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-[#64748B] mb-6 text-base md:text-lg">
            Can't find what you're looking for? Get in touch with our counseling team for personalized assistance.
          </p>
          <button className="bg-[#F9A825] hover:bg-[#f5a000] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
