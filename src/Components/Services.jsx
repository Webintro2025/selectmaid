"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import slugify from "slugify";

const Services = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;

      if (scrollTop >= maxScroll - 5) {
        // Reset to top when reached bottom (with small buffer)
        setTimeout(() => {
          if (container && isAutoScrolling) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 1000);
      } else {
        // Scroll down by 2 pixels for smoother effect
        container.scrollTop += 2;
      }
    };

    const interval = setInterval(autoScroll, 100); // Scroll every 100ms

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Handle manual scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollTop);
      // Pause auto-scroll temporarily when user manually scrolls
      setIsAutoScrolling(false);
      
      // Resume auto-scroll after 3 seconds of inactivity
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 3000);
    }
  };

  // Manual scroll controls
  const scrollToTop = () => {
    setIsAutoScrolling(false);
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  const scrollToBottom = () => {
    setIsAutoScrolling(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  const services = [
    {
      title: "House Maid Live-in Services",
      description: "Professional live-in house maids for daily cleaning, cooking, and home management. Reliable and experienced staff for your peace of mind.",
      icon: "/House Maid Live-in Services.png"
    },
    {
      title: "Home Nurse Services",
      description: "Qualified home nurses for patient care, elderly care, and post-surgery recovery. Compassionate and skilled nursing staff available 24/7.",
      icon: "/Home Nurse Services.png"
    },
    {
      title: "Baby care Services Live-in",
      description: "Experienced nannies and baby care professionals for newborns and infants. Specialized japa maids for post-delivery care.",
      icon: "/Baby care Services Live-in.png"
    },
    {
      title: "Patient Care Attendant Services Live-in",
      description: "Attendants for patient care, elderly support, and daily assistance. Trained staff for medication, hygiene, and mobility help.",
      icon: "/Patient Care Attendant Services Live-in.png"
    },
    {
      title: "Male Helper or Housekeeping Staff",
      description: "Male helpers for cleaning, housekeeping, and home maintenance. Suitable for large homes and families needing extra support.",
      icon: "/Male Helper or Cleaner or House Keeping Staff for hom.png"
    },
    {
      title: "Newborn Baby Maid or Japa Maid",
      description: "Specialized japa maids for newborn care, mother support, and postnatal services. Gentle and caring staff for your family.",
      icon: "/New born baby maid or japa maid.png"
    },
    {
      title: "English-Speaking Overseas Maid",
      description: "English-speaking maids for overseas assignments. Trained for international standards and multicultural homes.",
      icon: "/English Speaking Overseas Maid.png"
    },
    {
      title: "Passport Holder Maid, Cook, Nanny Overseas",
      description: "Passport holder maids, cooks, and nannies for overseas jobs. Verified staff ready for international placements.",
      icon: "/Paasport Holder Maid Cook Nanny for Overseas.png"
    },
    {
      title: "24 Hours Live-in House Maid, Cook, Nanny",
      description: "Round-the-clock live-in maids, cooks, and nannies available in Delhi. Trusted staff for complete home care and support.",
      icon: "/Home.png"
    }
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#111827] py-6 sm:py-10 md:py-16">
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-red-500 to-gray-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Domestic Care & Maid Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-gray-600">
            We provide comprehensive business registration and compliance services to help your business grow with complete legal protection and professional expertise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 mb-8 sm:mb-12 md:mb-16">
          <section className="lg:col-span-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-4 sm:mb-6 md:mb-10">
              Select Maid is dedicated to providing professional, reliable, and caring domestic staff for homes across India and overseas. Our motive is to make your life easier by connecting you with trusted maids, nannies, nurses, and helpers who are trained to deliver the highest standards of service.
              We understand the importance of a safe, clean, and well-managed home. Whether you need a live-in maid, a baby care specialist, a patient attendant, or a cook, our team ensures you get the right person for your needs. We also help domestic workers find rewarding job opportunities, improving lives for both families and staff.
            </p>
            <img 
              alt="Professional Maid and Domestic Care Services" 
              className="w-full max-w-xs sm:max-w-md md:max-w-xl rounded-lg shadow-lg mx-auto hover:scale-105 hover:shadow-xl transition-all duration-300" 
              height="400" 
              loading="lazy" 
              src="/services.png" 
              width="600"
            />
          </section>

          {/* Services Section - Right Side */}
          <section className="lg:col-span-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="sm:text-lg md:text-2xl font-extrabold hover:text-red-600 transition-colors duration-300">
                Domestic Care & Maid Services
              </h2>
            
              {/* Scroll Controls */}
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={scrollToTop}
                  className="p-1.5 sm:p-2 bg-white hover:bg-red-50 rounded-full hover:scale-110 active:scale-90 transition-all duration-200"
                  title="Scroll to top"
                >
                  <i className="fas fa-chevron-up text-red-600 text-xs sm:text-sm hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
                <button
                  onClick={scrollToBottom}
                  className="p-1.5 sm:p-2 bg-white hover:bg-red-50 rounded-full hover:scale-110 active:scale-90 transition-all duration-200"
                  title="Scroll to bottom"
                >
                  <i className="fas fa-chevron-down text-red-600 text-xs sm:text-sm hover:translate-y-0.5 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className={`p-1.5 sm:p-2 rounded-full hover:scale-110 active:scale-90 transition-all duration-200 ${
                    isAutoScrolling 
                      ? 'bg-white hover:bg-red-50' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  title={isAutoScrolling ? 'Pause auto-scroll' : 'Resume auto-scroll'}
                >
                  <i className={`fas ${
                      isAutoScrolling ? 'fa-pause' : 'fa-play'
                    } text-xs sm:text-sm ${
                      isAutoScrolling ? 'text-red-600 animate-pulse' : 'text-gray-600'
                    }`} />
                </button>
              </div>
            </div>
            <div 
              ref={scrollContainerRef}
              className="max-h-[400px] sm:max-h-[500px] md:max-h-[600px] overflow-x-hidden pr-2 sm:pr-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200 relative"
              onScroll={handleScroll}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setTimeout(() => setIsAutoScrolling(true), 1000)}
            >
              {/* Auto-scroll indicator */}
              <div className={`absolute top-2 right-2 z-10 ${
                  isAutoScrolling ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}>
                <div className={`w-3 h-3 bg-red-500 rounded-full shadow-lg ${isAutoScrolling ? 'animate-spin' : ''}`}>
                  <div className={`w-full h-full bg-red-400 rounded-full ${isAutoScrolling ? 'animate-pulse' : ''}`} />
                </div>
              </div>
              
              {services.map((service, index) => (
                <Link key={service.title} href={`/${slugify(service.title, { lower: true, strict: true })}`} passHref>
                  <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm hover:scale-105 hover:shadow-lg hover:border-blue-400 hover:translate-x-1 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-2 sm:gap-3 hover:translate-x-0.5 transition-transform duration-200">
                      <img 
                        alt="Service icon" 
                        className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 hover:rotate-12 hover:scale-110 transition-all duration-300" 
                        src={service.icon}
                      />
                      <div className="flex-1">
                        <h3 className="text-xs sm:text-sm md:text-base font-bold leading-snug mb-1 sm:mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-xs md:text-sm leading-relaxed text-gray-600 line-clamp-3 hover:text-gray-800 transition-colors duration-200">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-red-400 to-gray-600 rounded-lg p-4 sm:p-6 md:p-8 text-white hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
              Need Help Finding the Right Domestic Staff?
            </h3>
            <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 opacity-90">
              Contact Select Maid today for personalized assistance. Our experts will help you find the perfect maid, nanny, nurse, or helper to meet your household needs. 
            </p>
            <button 
              className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-100 hover:scale-105 active:scale-95 hover:shadow-lg transition-all duration-200"
              onClick={() => window.open('https://wa.me/917290007424', '_blank')}
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </main>
    {/* Floating WhatsApp Button - Old Icon */}
   
  </div>
  )
}

export default Services