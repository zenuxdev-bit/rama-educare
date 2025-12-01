import { Metadata } from 'next'
import ServicesSection from '../components/Service'
import FAQsSection from '../components/Faqs'
import Work from '../components/Work'
import Navbar from '@/components/Navbar'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import { CrowdCanvas } from '@/components/ui/skiper-ui/skiper39'
import EntranceMarquee from '@/components/EntranceMarquee'
import UniversityMarquee from '@/components/UniversityMarquee'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: "RAMA Educare - Expert Admission Counseling After 12th in Jamshedpur | BTech, MTech, CLAT, Law, MBA",
  description: "Leading admission counseling service in Jamshedpur, Jharkhand for BTech, MTech, CLAT, Law, MBA & management quota admissions. Direct university admissions with 15+ years experience. Get expert guidance for top universities across India.",
  openGraph: {
    title: "RAMA Educare - Expert Admission Counseling After 12th in Jamshedpur",
    description: "Leading admission counseling service in Jamshedpur for BTech, MTech, CLAT, Law, MBA & management quota admissions. 15+ years experience, 500+ students placed.",
    url: 'https://ramaeducare.com',
    type: 'website',
  },
};


const Page = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "RAMA Educare",
    "description": "Expert admission counseling after 12th for BTech, MTech, CLAT, Law, MBA and management quota admissions in Jamshedpur, Jharkhand",
    "url": "https://ramaeducare.com",
    "logo": "https://ramaeducare.com/logo.webp",
    "image": "https://ramaeducare.com/logo.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bistupur",
      "addressLocality": "Jamshedpur",
      "addressRegion": "Jharkhand",
      "postalCode": "831001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-90317-33144",
      "email": "ramaeducare2010@gmail.com",
      "contactType": "Admissions Counseling",
      "areaServed": ["IN", "Jharkhand", "Jamshedpur"],
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.instagram.com/ramaeducare",
      "https://www.facebook.com/ramaeducare",
      "https://www.linkedin.com/company/ramaeducare",
      "https://twitter.com/ramaeducare"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    },
    "priceRange": "₹₹"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Admission Counseling",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "RAMA Educare"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Admission Counseling Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BTech Admission Counseling",
            "description": "Expert guidance for BTech admissions in top engineering colleges"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MTech Admission Counseling",
            "description": "Specialized counseling for MTech admissions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CLAT & Law Admission Counseling",
            "description": "Complete guidance for law college admissions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MBA & Management Quota Admissions",
            "description": "Direct admission assistance for management programs"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is admission counseling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Admission counseling is a professional service that helps students navigate the complex process of college and university admissions. Our experts guide you through entrance exam preparation, university selection, application procedures, and documentation to ensure you secure admission in your dream institution."
        }
      },
      {
        "@type": "Question",
        "name": "Which entrance exams do you provide counseling for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive counseling for all major entrance exams including JEE Main, JEE Advanced, NEET, CLAT, CAT, MAT, CMAT, GATE, and many others. Our services cover engineering, medical, law, management, and various other professional courses."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with management quota admissions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in management quota admissions for various courses including BTech, MTech, MBA, and medical programs. We work with reputed universities across India to facilitate direct admissions for eligible students."
        }
      },
      {
        "@type": "Question",
        "name": "How much do your counseling services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our fee structure varies based on the service package you choose. We offer different packages for consultation, documentation support, and comprehensive admission assistance. Contact us for detailed pricing information tailored to your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "Where is RAMA Educare located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RAMA Educare is located in Bistupur, Jamshedpur, Jharkhand. We serve students from across India and provide both in-person and online counseling services."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are needed for admission counseling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic documents include your academic transcripts (10th and 12th marksheets), entrance exam scorecards, identity proof (Aadhar card), photographs, and category certificates if applicable. Specific requirements may vary based on the course and university you're applying to."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="relative min-h-screen w-full overflow-hidden bg-white">
        <nav> <Navbar /> </nav>
        {/* Animated Crowd Background - Very Subtle */}
        <div className="absolute bottom-0 left-0 right-0 h-[20vh] md:h-[30vh] opacity-15 md:opacity-20">
          <CrowdCanvas src="/image.png" rows={15} cols={7} />
        </div>

        {/* Clean White Background with subtle gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-white to-gray-50/30" />

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
                  <span className="whitespace-nowrap">5000+ Students Placed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#1B4F8C]" />
                  <span className="whitespace-nowrap">100+ Universities</span>
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