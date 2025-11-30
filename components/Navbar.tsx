"use client";

import { useState, useEffect } from 'react';
import CardNav from '@/components/CardNav'
import logo from '@/public/logo.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Always show at the very top
          if (currentScrollY < 50) {
            setIsVisible(true);
          } 
          // Scrolling up - show navbar
          else if (currentScrollY < lastScrollY - 5) {
            setIsVisible(true);
          } 
          // Scrolling down - hide navbar
          else if (currentScrollY > lastScrollY + 5 && currentScrollY > 100) {
            setIsVisible(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const items = [
    {
      label: "Services",
      bgColor: "#1B4F8C",
      textColor: "#fff",
      links: [
        { label: "University Counseling", ariaLabel: "University Admission Counseling", href: "/#contact" },
        { label: "Admission Assistance", ariaLabel: "Admission Assistance", href: "/#contact" },
        { label: "Documentation Support", ariaLabel: "Documentation Support", href: "/#contact" }
      ]
    },
    {
      label: "About", 
      bgColor: "#2d5a8f",
      textColor: "#fff",
      links: [
        { label: "About Us", ariaLabel: "About RAMA Educare", href: "/#about" },
        { label: "Why Choose Us", ariaLabel: "Why Choose RAMA Educare", href: "/#why-choose-us" },
        { label: "Testimonials", ariaLabel: "Student Testimonials", href: "/#testimonials" }
      ]
    },
    {
      label: "Resources",
      bgColor: "#F9A825", 
      textColor: "#fff",
      links: [
        { label: "FAQs", ariaLabel: "Frequently Asked Questions", href: "/faqs" },
        { label: "Privacy Policy", ariaLabel: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", ariaLabel: "Terms and Conditions", href: "/terms-conditions" }
      ]
    }
  ];

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <CardNav
        logo={logo}
        logoAlt="RAMA Educare Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </div>
  );
};

export default Navbar;