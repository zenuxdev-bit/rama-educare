"use client";

import { useState } from "react";

// ------------------------------------
// Testimonial Data
// ------------------------------------
interface Testimonial {
  id: number;
  name: string;
  initials: string;
  testimonial: string;
  university: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul S.",
    initials: "RS",
    testimonial: "RAMA Educare made my admission to NIT Jamshedpur so smooth. Their counseling was spot-on and helped me choose the right course based on my JEE rank.",
    university: "NIT Jamshedpur",
  },
  {
    id: 2,
    name: "Priya M.",
    initials: "PM",
    testimonial: "I was confused after my NEET results, but the team guided me perfectly. Got into my dream medical college with their expert support!",
    university: "AIIMS Patna",
  },
  {
    id: 3,
    name: "Arjun K.",
    initials: "AK",
    testimonial: "The transparency and personalized attention I received was exceptional. They handled all my documentation and I secured admission without any hassle.",
    university: "BIT Mesra",
  },
  {
    id: 4,
    name: "Sneha R.",
    initials: "SR",
    testimonial: "RAMA Educare's university network is impressive. They helped me explore options I didn't even know existed and found the perfect fit for me.",
    university: "VIT Vellore",
  },
  {
    id: 5,
    name: "Amit P.",
    initials: "AP",
    testimonial: "From counseling to final enrollment, they were with me every step. Their 15+ years of experience really shows in their guidance.",
    university: "NIT Rourkela",
  },
  {
    id: 6,
    name: "Kavya T.",
    initials: "KT",
    testimonial: "Best decision was to consult RAMA Educare after my entrance exam. They simplified the entire admission process and I got into my top choice!",
    university: "KIIT Bhubaneswar",
  },
];

// ------------------------------------
// Main Component
// ------------------------------------
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = currentIndex * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white border border-[#E2E8F0] rounded-full mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F8C] mt-3">
            What Our Students Say
          </h2>
          <p className="text-[#64748B] mt-4 text-base md:text-lg">
            Real stories from students who trusted us with their future.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm"
            >
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1B4F8C] flex items-center justify-center text-white font-semibold">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#334155]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#64748B]">{testimonial.university}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[#64748B] text-sm leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border-2 border-[#1B4F8C] text-[#1B4F8C] hover:bg-[#1B4F8C] hover:text-white transition-colors duration-200 flex items-center justify-center font-semibold"
            aria-label="Previous testimonials"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-[#F9A825] w-8"
                    : "bg-[#E2E8F0]"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border-2 border-[#1B4F8C] text-[#1B4F8C] hover:bg-[#1B4F8C] hover:text-white transition-colors duration-200 flex items-center justify-center font-semibold"
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
