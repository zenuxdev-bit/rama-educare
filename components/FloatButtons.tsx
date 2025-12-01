"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatButtons() {
  const phoneNumber = "919031733144"; // your number

  // Pre-filled WhatsApp message
  const message = encodeURIComponent(
    "Hello! Welcome to Rama Educare. We provide expert guidance and full support to help you get the best possible college admission. How may we assist you today?"
  );

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed 
          bottom-24 
          right-6 
          bg-green-500 
          text-white 
          w-16 
          h-16 
          rounded-full 
          flex 
          items-center 
          justify-center 
          shadow-lg 
          hover:bg-green-600 
          transition 
          duration-200 
          z-50
          
        "
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="
          fixed 
          bottom-6 
          right-6 
          bg-blue-500 
          text-white 
          w-16 
          h-16 
          rounded-full 
          flex 
          items-center 
          justify-center 
          shadow-lg 
          hover:bg-blue-600 
          transition 
          duration-200 
          z-50
        
        "
      >
        <FaPhoneAlt size={28} />
      </a>
    </>
  );
}
