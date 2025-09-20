"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import slugify from 'slugify';

const maidServices = [
  "House Maid Live-in Services",
  "Home Nurse Services",
  "Baby care Services Live-in",
  "Patient Care Attendant Services Live-in",
  "Male Helper or Housekeeping Staff",
  "Newborn Baby Maid or Japa Maid",
  "English-Speaking Overseas Maid",
  "Passport Holder Maid, Cook, Nanny Overseas",
  "24 Hours Live-in House Maid, Cook, Nanny"
];

const Footer = () => {
  // Auto-scroll for services
  const [startIndex, setStartIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % (maidServices.length - 4));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-red-100 via-red-300 to-gray-100 text-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          
          {/* Company Information */}
          <div className="lg:col-span-1 hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-4">
              <Link href="/">
                <div className="flex items-center space-x-3 mb-3 cursor-pointer">
                  <img 
                    alt="Select Maid logo" 
                    className="object-contain hover:rotate-3 transition-transform duration-300" 
                    height={45} 
                    src="/logo.png" 
                    width={60}
                  />
                  <h2 
                    className="text-2xl font-bold text-black" 
                    style={{fontFamily: 'Montserrat, sans-serif'}}
                  >
                    Select Maid
                  </h2>
                </div>
              </Link>
              <p className="text-sm text-black font-medium mb-3">
                Domestic Care & Maid Services
              </p>
              <div className="text-black text-sm leading-relaxed space-y-2">
                <p><strong>Address:</strong> 258, First Floor, near Bhumiya Mata, Hari Nagar Ashram, New Delhi, Delhi 110014</p>
                <p>Your trusted partner for all domestic care and maid service needs.</p>
              </div>
            </div>
          </div>

          {/* Services and Quick Links - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            {/* Services Section */}
            <div className="hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-base lg:text-lg font-semibold text-black mb-1 hover:text-red-500 transition-colors duration-300">
                Our Services
              </h3>
              <div className="w-16 lg:w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600 mb-3.5"></div>
              <div className="overflow-y-auto overflow-x-hidden h-32 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full" style={{scrollbarColor: '#ef4444 #fee2e2', scrollbarWidth: 'thin'}} ref={scrollRef}>
                <ul className="text-black text-xs lg:text-sm space-y-1 lg:space-y-1.5">
                  {maidServices.map((service, index) => (
                    <li 
                      key={service}
                      className="cursor-pointer text-black hover:text-red-500 hover:translate-x-2 transition-all duration-300"
                    >
                      <Link href={`/${slugify(service, { lower: true })}`}>
                        <span>{service}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-base lg:text-lg font-semibold text-black mb-1 hover:text-blue-500 transition-colors duration-300">
                Quick Links
              </h3>
              <div className="w-16 lg:w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600 mb-3.5"></div>
              <ul className="text-black text-xs lg:text-sm space-y-1 lg:space-y-1.5">
                <li>
                  <Link href="/about">
                    <span className="cursor-pointer inline-block hover:text-blue-500 hover:translate-x-2 transition-all duration-300">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="cursor-pointer inline-block hover:text-blue-500 hover:translate-x-2 transition-all duration-300">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info Only - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:block">
            {/* Contact Information */}
            <div className="hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-base lg:text-lg font-semibold text-black mb-1 hover:text-red-500 transition-colors duration-300">
                Contact Info
              </h3>
              <div className="w-16 lg:w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600 mb-3.5"></div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-black text-sm">Address</p>
                    <p className="text-black font-semibold">
                      258, First Floor, near Bhumiya Mata, Hari Nagar Ashram, New Delhi, Delhi 110014
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-black text-sm">Email</p>
                    <a 
                      href="mailto:selectmaid@gmail.com" 
                      className="text-black font-semibold hover:text-blue-500 transition-colors duration-300"
                    >
                      selectmaid@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-200 bg-gradient-to-r from-gray-100 to-red-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
            <div className="text-black mb-2 md:mb-0 text-center md:text-left hover:text-blue-500 transition-colors duration-300">
              © 2025 Select Maid. All rights reserved. | Domestic Care & Maid Services
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end text-black text-xs md:text-sm">
              <span>Developed with</span>
              <svg 
                className="w-3 h-3 md:w-4 md:h-4 text-red-500 mx-1 animate-pulse" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span>by</span>
              <a 
                href="https://webintro.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-400 font-medium mx-1 hover:text-blue-500 hover:scale-105 transition-all duration-300"
              >
                Webintro.in
              </a>
              <span>and</span>
              <a 
                href="https://webintro.in/delhi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-400 font-medium mx-1 hover:text-blue-500 hover:scale-105 transition-all duration-300"
              >
                Google Promotion Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;