import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import FloatButtons from "@/components/FloatButtons";
import { Poppins } from 'next/font/google'
import Navbar from "@/components/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Analytics } from "@vercel/analytics/next"

const SmoothCursorWrapper = () => {
  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
    return <SmoothCursor />;
  }
  return null;
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RAMA Educare - Admission Counseling After 12th | BTech, MTech, CLAT, Law, Management in Jamshedpur",
    template: "%s | RAMA Educare - Direct Admission Counseling Jamshedpur"
  },
  description: "Expert admission counseling after 12th for BTech, MTech, CLAT, Law, MBA, and management quota admissions in Jamshedpur, Jharkhand. Direct admissions assistance for top universities across India. 15+ years experience, 500+ students placed.",
  keywords: [
    "admission counseling after 12th",
    "BTech admission counseling Jamshedpur",
    "MTech admission assistance",
    "CLAT counseling Jharkhand",
    "law admission counseling",
    "management quota admissions",
    "direct admission Jamshedpur",
    "engineering admission counseling",
    "MBA admission assistance",
    "university admission counseling India",
    "admission counselor Jamshedpur",
    "college admission help Jharkhand",
    "direct university admission",
    "entrance exam counseling"
  ],
  authors: [{ name: "RAMA Educare" }],
  creator: "RAMA Educare",
  publisher: "RAMA Educare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ramaeducare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RAMA Educare - Admission Counseling After 12th | BTech, MTech, CLAT, Law, Management",
    description: "Expert admission counseling after 12th for BTech, MTech, CLAT, Law, MBA, and management quota admissions in Jamshedpur, Jharkhand. Direct admissions assistance for top universities.",
    url: 'https://ramaeducare.com',
    siteName: 'RAMA Educare',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'RAMA Educare - Admission Counseling Jamshedpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "RAMA Educare - Admission Counseling After 12th | Jamshedpur",
    description: "Expert admission counseling for BTech, MTech, CLAT, Law, MBA & management quota admissions. Direct admissions assistance in Jamshedpur, Jharkhand.",
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:cursor-none`}
      >
        <div className="hidden lg:block">
          <SmoothCursor />
        </div>
        <Navbar/>
        <main className={poppins.className}>{children}</main>
        <Analytics />
          <FloatButtons />  
        <Footer />

      </body>
    </html>
  );
}
