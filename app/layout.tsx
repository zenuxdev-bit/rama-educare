import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

import { Poppins } from 'next/font/google'
import Navbar from "@/components/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

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
  title: "RAMA EDUCARE",
  description: "PATH TO YOUR DREAM UNIVERSITY",
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
        <Footer />

      </body>
    </html>
  );
}
