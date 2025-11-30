  "use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// ----------------------
// STEP DATA
// ----------------------
interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Consulting & Assessment",
    description:
      "We understand your entrance exam results, academic profile, and career goals to create a personalized counseling roadmap.",
  },
  {
    id: 2,
    title: "University Selection",
    description:
      "Based on your results and preferences, we shortlist the best-fit universities and courses across India.",
  },
  {
    id: 3,
    title: "Application & Documentation",
    description: "Our team assists with application forms, document compilation, and timely submission to selected universities.",
  },
  {
    id: 4,
    title: "Admission & Enrollment",
    description:
      "We guide you through counseling rounds, seat allocation, and final enrollment to secure your admission.",
  },
];

// ----------------------
// MAIN COMPONENT
// ----------------------
export default function Work() {
  return (
    <section className="py-12 md:py-20 w-full flex flex-col items-center bg-white px-4">

      {/* ---------- HEADER ---------- */}
      <div className="inline-block px-4 py-2 bg-#FAFAFA border border-[#E2E8F0] rounded-full mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
          Our Process
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B4F8C] mt-3">How We Work</h2>
      <p className="mt-4 text-[#64748B] text-center text-base md:text-lg max-w-2xl px-4">
        Our streamlined 4-step process to guide you from counseling to admission.
      </p>

      {/* ---------- TIMELINE CONTAINER ---------- */}
      <div className="relative mt-12 lg:mt-16 flex flex-col items-start lg:items-center w-full max-w-6xl px-4">

        {/* Vertical Line */}
        <div className="absolute top-0 left-6 lg:left-1/2 w-1 bg-gray-200 h-full lg:-translate-x-1/2" />

        {/* All Steps */}
        {steps.map((step, index) => (
          <WorkStep key={step.id} step={step} index={index} />
        ))}
      </div>

      {/* ---------- CTA BUTTON ---------- */}
      <div className="mt-12 md:mt-16 text-center">
        <button className="bg-[#F9A825] hover:bg-[#f5a000] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors duration-200 text-sm md:text-base">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}

// ----------------------
// INDIVIDUAL STEP
// ----------------------
function WorkStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef(null);

  // Tracks visibility inside viewport
  const isInView = useInView(ref, {
    amount: 0.4, // 40% must be visible
    once: false, // allow re-animation on scroll
  });

  // Animation controller
  const controls = useAnimation();

  // Determine left or right side
  const isLeft = index % 2 === 1;

  // Different circle colors - alternating navy and gold
  const circleColors = ["#1B4F8C", "#F9A825", "#1B4F8C", "#F9A825"];

  // ----------------------
  // SHOW/HIDE ON SCROLL
  // ----------------------
  useEffect(() => {
    if (isInView) {
      controls.start("visible");   // Fade IN when in view
    } else {
      controls.start("hidden");    // Fade OUT when out of view
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="relative w-full py-8 lg:py-28"
    >

      {/* ------------------------------------
         STEP CIRCLE (center)
      -------------------------------------- */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { scale: 0.4, opacity: 0 },
          visible: { scale: 1.2, opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full 
                   flex items-center justify-center text-white font-bold shadow-lg z-20 text-sm lg:text-base"
        style={{ backgroundColor: circleColors[index] }}
      >
        {step.id}
      </motion.div>

      {/* ------------------------------------
         STEP CARD (left or right)
      -------------------------------------- */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.9 }}
        className={`
          w-[calc(100%-5rem)] lg:w-[420px] p-5 lg:p-8 bg-white border border-[#E2E8F0] shadow-lg rounded-xl 
          relative lg:absolute top-0 lg:top-8 z-10 ml-16 lg:ml-0
          ${isLeft ? "lg:left-[10%]" : "lg:right-[10%]"}
        `}
      >
        <h3 className="text-base lg:text-xl font-semibold text-[#1B4F8C]">{step.title}</h3>
        <p className="mt-2 text-sm lg:text-base text-[#64748B]">{step.description}</p>
      </motion.div>

    </div>
  );
}
