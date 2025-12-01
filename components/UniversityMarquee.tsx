import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"

const UniversityMarquee = () => {
  // Placeholder university logos - replace src with actual university logo paths
  const universities = [
    { name: "University 1", logo: "/university/u1.webp"},
     { name: "University 4", logo: "/university/u4.webp"},
    { name: "University 5", logo: "/university/u5.webp"},
    { name: "University 6", logo: "/university/u6.webp"},
    { name: "University 2", logo: "/university/u2.webp"},
    { name: "University 3", logo: "/university/u3.webp"},
    { name: "University 7", logo: "/university/u7.webp"},
    { name: "University 8", logo: "/university/u8.webp"},
    { name: "University 9", logo: "/university/u9.webp"},
    { name: "University 10", logo: "/university/u10.webp" },
    { name: "University 4", logo: "/university/u4.webp"},
    { name: "University 5", logo: "/university/u5.webp"},
    { name: "University 6", logo: "/university/u6.webp"},
    
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              Partner Universities
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#1B4F8C] sm:text-4xl lg:text-5xl">
            Get Seats in Top Universities Across India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            All courses, all streams—your gateway to premier institutions nationwide and abroad.
          </p>
        </div>

        {/* Scrolling University Logos */}
        <div className="relative">
          <ScrollVelocityContainer className="py-8">
            {/* First Row - Scrolling Right */}
            <ScrollVelocityRow baseVelocity={2} direction={1}>
              <div className="flex items-center gap-12 px-6">
                {universities.map((uni, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="flex h-20 w-32 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-sm sm:h-24 sm:w-40"
                  >
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="max-h-full max-w-full object-contain "
                    />
                  </div>
                ))}
              </div>
            </ScrollVelocityRow>

            {/* Second Row - Scrolling Left */}
            <ScrollVelocityRow baseVelocity={2} direction={-1}>
              <div className="flex items-center gap-12 px-6">
                {universities.map((uni, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="flex h-20 w-32 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white p-4 sm:h-24 sm:w-40"
                  >
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="max-h-full max-w-full object-contain "
                    />
                  </div>
                ))}
              </div>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-sm text-[#64748B] sm:text-base">
            Recognized partnerships with leading private universities across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniversityMarquee;