import ServicesSection from '../components/Service'
import FAQsSection from '../components/Faqs'
import Work from '../components/Work'
import Navbar from '@/components/Navbar'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import { CrowdCanvas } from '@/components/ui/skiper-ui/skiper39'
import Link from 'next/link'
import EntranceMarquee from '@/components/EntranceMarquee'
import UniversityMarquee from '@/components/UniversityMarquee'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'


const Page = () => {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-white">
        <nav> <Navbar /> </nav>
        {/* Animated Crowd Background - Very Subtle */}
        <div className="absolute bottom-0 left-0 right-0 h-[20vh] md:h-[30vh] opacity-15 md:opacity-20">
          <CrowdCanvas src="/image.png" rows={15} cols={7} />
        </div>

        {/* Clean White Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/30" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
          <div className="max-w-6xl space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
                15+ Years of Excellence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-linear-to-br from-[#F9A825] via-[#1B4F8C] to-[#0f3a6e] bg-clip-text text-transparent">
              Your Dream University
              <br />
              Is Just One Call Away
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#64748B] px-4">
              <span className="font-semibold text-[#1B4F8C]">RAMA Educare</span> — Expert counseling for all major entrance exams. We guide you through every step to secure your seat in India's top universities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 pt-6 md:pt-8 sm:flex-row">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-[#F9A825] hover:bg-[#f5a000] text-white font-semibold px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-200 hover:shadow-lg text-base md:text-lg"
              >
                Get in Touch
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto border-2 border-[#1B4F8C] bg-white hover:bg-[#1B4F8C] text-[#1B4F8C] hover:text-white font-semibold px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-200 text-base md:text-lg"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 md:pt-16">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-16 text-sm md:text-base font-medium text-[#64748B]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#F9A825]" />
                  <span className="whitespace-nowrap">500+ Students Placed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#1B4F8C]" />
                  <span className="whitespace-nowrap">50+ Universities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#F9A825]" />
                  <span className="whitespace-nowrap">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#1B4F8C]" />
                  <span className="whitespace-nowrap">₹2Cr+ Scholarships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about">
        <AboutUs />
      </div>

      {/* Why Choose Us Section */}
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>

      {/* ENTRANCE EXAMS LOGO MARQUEE */}
      <EntranceMarquee />

      {/* SERVICES */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* UNIVERSITY MARQUEE */}
      <UniversityMarquee />

      {/* HOW WE WORK */}
      <Work />

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* FAQs */}
      <FAQsSection />

      {/* Contact */}
      <div id="contact">
        <Contact/>
      </div>

    </>

  )
}

export default Page