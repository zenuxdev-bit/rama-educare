# RAMA Educare 🎓

**Professional Admission Counseling Services in Jamshedpur, Jharkhand**

A modern, SEO-optimized website for RAMA Educare - your trusted partner for admission counseling after 12th. Specializing in BTech, MTech, CLAT, Law, MBA, and management quota admissions across top universities in India.

[![Built with Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 Features

### 🎨 Design & User Experience
- **Minimalist Design**: Clean, professional aesthetic with subtle animations
- **Custom Color Palette**: Navy (#1B4F8C) and Gold (#F9A825) brand colors
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Custom Cursor**: Smooth animated cursor (desktop only)
- **Auto-Hide Navbar**: Smart navigation that hides on scroll down, shows on scroll up
- **Smooth Scrolling**: Native smooth scroll with proper navbar offset

### 📄 Pages & Sections
- **Hero Section**: Eye-catching landing with trust indicators
- **About Us**: Company introduction with stats (500+ students, 15+ years)
- **Why Choose Us**: 6 compelling reasons with data-backed claims
- **Services**: 5 core offerings (University Counseling, Admission Assistance, Documentation, Profile Building, Career Counseling)
- **Entrance Exams Marquee**: Animated logo loop for all entrance exams
- **University Marquee**: Bidirectional scrolling partner universities
- **How We Work**: 4-step process with timeline animation
- **Testimonials**: Carousel with student success stories
- **FAQs**: Accordion-style with dedicated FAQ page (30+ questions)
- **Contact**: Form with validation, contact info, and Google Maps
- **Footer**: Comprehensive navigation and legal links
- **Legal Pages**: Privacy Policy and Terms & Conditions

### 🔍 SEO Optimization
- **Comprehensive Metadata**: Targeted keywords for admission counseling
- **Structured Data**: JSON-LD schemas (Educational Organization, Service, FAQPage)
- **Open Graph Tags**: Optimized social media sharing
- **Twitter Cards**: Rich previews for Twitter/X
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling configuration
- **Geographic Focus**: Jamshedpur, Jharkhand with pan-India coverage

### ⚡ Performance
- **Server Components**: Optimized rendering strategy
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Poppins font with subset loading
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components loaded on demand

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sharan986/rama-educare.git
cd rama-educare
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
rama-educare/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage with structured data
│   ├── globals.css              # Global styles
│   ├── faqs/                    # FAQ page
│   ├── privacy-policy/          # Privacy Policy page
│   └── terms-conditions/        # Terms & Conditions page
├── components/                   # React components
│   ├── AboutUs.tsx              # About section
│   ├── CardNav.tsx              # Animated navigation
│   ├── Contact.tsx              # Contact form & info
│   ├── EntranceMarquee.tsx      # Entrance exams logo loop
│   ├── Faqs.tsx                 # FAQ accordion
│   ├── Footer.tsx               # Site footer
│   ├── LogoLoop.tsx             # Logo animation component
│   ├── Navbar.tsx               # Auto-hide navigation
│   ├── Service.tsx              # Services section
│   ├── Testimonials.tsx         # Student testimonials
│   ├── UniversityMarquee.tsx    # University logos scroll
│   ├── Welcome.tsx              # Hero section
│   ├── WhyChooseUs.tsx          # Benefits section
│   ├── Work.tsx                 # Process timeline
│   └── ui/                      # UI components
│       ├── smooth-cursor.tsx    # Custom cursor
│       └── scroll-based-velocity.tsx  # Scroll animation
├── public/                       # Static assets
│   ├── logo.webp                # Company logo
│   ├── exam/                    # Entrance exam logos
│   └── university/              # University logos
├── lib/                         # Utilities
│   └── utils.ts                 # Helper functions
└── SEO-IMPLEMENTATION.md        # SEO documentation
```

## 🎨 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Forms**: HTML5 with client-side validation
- **Font**: [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)
