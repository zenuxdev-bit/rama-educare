import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className={`${poppins.className} w-full border-t border-[#E2E8F0] bg-white py-12 md:py-16`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* LEFT SECTION - Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="RAMA Educare Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              <h2 className="text-xl font-bold text-[#1B4F8C]">RAMA Educare</h2>
            </Link>

            <p className="text-[#64748B] text-sm md:text-base max-w-sm mb-6">
              Your trusted partner for post-entrance admission counseling. Helping students secure seats in top universities across India for over 15 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-[#64748B]">
              <p>
                <span className="font-semibold text-[#334155]">Phone:</span>{" "}
                <a href="tel:+919288684938" className="hover:text-[#1B4F8C]">
                  +91 90317 33144
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#334155]">Email:</span>{" "}
                <a href="mailto:ramaeducare2010@gmail.com" className="hover:text-[#1B4F8C]">
                 ramaeducare2010@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#334155]">Address:</span> Rama Educare
Jagannath Tower, 1st Floor
Near Bhalubasa Chowk
Jamshedpur – 831009
Jamshedpur, Jharkhand, India
              </p>
            </div>

            {/* SOCIAL ICONS - Commented out for now */}
            {/* <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAFAFA] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#1B4F8C] hover:text-white hover:border-[#1B4F8C] transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAFAFA] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#1B4F8C] hover:text-white hover:border-[#1B4F8C] transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAFAFA] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#1B4F8C] hover:text-white hover:border-[#1B4F8C] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAFAFA] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#1B4F8C] hover:text-white hover:border-[#1B4F8C] transition-all duration-200"
                aria-label="Twitter"
              >
                <FaXTwitter size={18} />
              </a>
            </div> */}
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-base font-semibold text-[#1B4F8C] mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#services" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  University Admission Counseling
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  Admission Assistance
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  Documentation Support
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  Profile Building
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  Career Counseling
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-base font-semibold text-[#1B4F8C] mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#about" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-base font-semibold text-[#1B4F8C] mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy-policy" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-sm text-[#64748B] hover:text-[#1B4F8C] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#64748B]">
              © {new Date().getFullYear()} RAMA Educare. All rights reserved.
            </p>
            <p className="text-sm text-[#64748B]">
              Made with passion by Devs @Zenux, Jharkhand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
