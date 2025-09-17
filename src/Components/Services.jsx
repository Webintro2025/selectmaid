"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
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
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const serviceCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
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
      icon: "/24 Hours live-in House Maid, Cook, Nanny in Delhi.png"
    }
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#111827] py-6 sm:py-10 md:py-16">
      <motion.main 
        className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-red-500 to-gray-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Domestic Care & Maid Services
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-gray-600"
            variants={itemVariants}
          >
            We provide comprehensive business registration and compliance services to help your business grow with complete legal protection and professional expertise.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 mb-8 sm:mb-12 md:mb-16">
          <motion.section 
            className="lg:col-span-6"
            variants={itemVariants}
          >
            <motion.p 
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-4 sm:mb-6 md:mb-10"
              variants={itemVariants}
            >
              Select Maid is dedicated to providing professional, reliable, and caring domestic staff for homes across India and overseas. Our motive is to make your life easier by connecting you with trusted maids, nannies, nurses, and helpers who are trained to deliver the highest standards of service.
              We understand the importance of a safe, clean, and well-managed home. Whether you need a live-in maid, a baby care specialist, a patient attendant, or a cook, our team ensures you get the right person for your needs. We also help domestic workers find rewarding job opportunities, improving lives for both families and staff.
            </motion.p>
            <motion.img 
              alt="Professional Maid and Domestic Care Services" 
              className="w-full max-w-xs sm:max-w-md md:max-w-xl rounded-lg shadow-lg mx-auto" 
              height="400" 
              loading="lazy" 
              src="/services.png" 
              width="600"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.4 }}
              variants={itemVariants}
            />
          </motion.section>

          {/* Services Section - Right Side */}
          <motion.section 
            className="lg:col-span-6"
            variants={containerVariants}
          >
            <motion.div className="flex items-center justify-between mb-4 sm:mb-6">
              <motion.h2 
                className=" sm:text-lg md:text-2xl font-extrabold "
                variants={itemVariants}
                whileHover={{ color: "#E11D48" }}
              >Domestic Care & Maid Services
              </motion.h2>
            
              {/* Scroll Controls */}
              <motion.div 
                className="flex gap-1 sm:gap-2"
                variants={itemVariants}
              >
                <motion.button
                  onClick={scrollToTop}
                  className="p-1.5 sm:p-2 bg-white hover:bg-red-50 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Scroll to top"
                >
                  <motion.i 
                    className="fas fa-chevron-up text-red-600 text-xs sm:text-sm"
                    whileHover={{ y: -2 }}
                  />
                </motion.button>
                <motion.button
                  onClick={scrollToBottom}
                  className="p-1.5 sm:p-2 bg-white hover:bg-red-50 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Scroll to bottom"
                >
                  <motion.i 
                    className="fas fa-chevron-down text-red-600 text-xs sm:text-sm"
                    whileHover={{ y: 2 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className={`p-1.5 sm:p-2 rounded-full transition-colors duration-200 ${
                    isAutoScrolling 
                      ? 'bg-white hover:bg-red-50' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={isAutoScrolling ? 'Pause auto-scroll' : 'Resume auto-scroll'}
                >
                  <motion.i 
                    className={`fas ${
                      isAutoScrolling ? 'fa-pause' : 'fa-play'
                    } text-xs sm:text-sm ${
                      isAutoScrolling ? 'text-red-600' : 'text-gray-600'
                    }`}
                    animate={{ 
                      scale: isAutoScrolling ? [1, 1.2, 1] : 1 
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: isAutoScrolling ? Infinity : 0,
                      repeatDelay: 1 
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              ref={scrollContainerRef}
              className="max-h-[400px] sm:max-h-[500px] md:max-h-[600px] overflow-x-hidden pr-2 sm:pr-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200 relative"
              variants={containerVariants}
              onScroll={handleScroll}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setTimeout(() => setIsAutoScrolling(true), 1000)}
            >
              {/* Auto-scroll indicator */}
              <motion.div 
                className={`absolute top-2 right-2 z-10 ${
                  isAutoScrolling ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
                animate={{ 
                  rotate: isAutoScrolling ? 360 : 0 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: isAutoScrolling ? Infinity : 0,
                  ease: "linear"
                }}
              >
                <motion.div className="w-3 h-3 bg-red-500 rounded-full shadow-lg">
                  <motion.div 
                    className="w-full h-full bg-red-400 rounded-full"
                    animate={{ 
                      scale: isAutoScrolling ? [1, 1.5, 1] : 1 
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: isAutoScrolling ? Infinity : 0 
                    }}
                  />
                </motion.div>
              </motion.div>
              {services.map((service, index) => (
                <Link key={service.title} href={`/${slugify(service.title, { lower: true, strict: true })}`} passHref>
                  <motion.div
                    className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm"
                    variants={serviceCardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      borderColor: "0EA5E9",
                      x: 5
                    }}
                    transition={{ duration: 0.3 }}
                    custom={index}
                  >
                    <motion.div 
                      className="flex items-start gap-2 sm:gap-3"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img 
                        alt="Service icon" 
                        className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10" 
                        src={service.icon}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="flex-1">
                        <motion.h3 
                          className="text-xs sm:text-sm md:text-base font-bold leading-snug mb-1 sm:mb-2 text-gray-800"
                          whileHover={{ color: "#0EA5E9" }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p 
                          className="text-xs sm:text-xs md:text-sm leading-relaxed text-gray-600 line-clamp-3"
                          whileHover={{ color: "#374151" }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.section>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-red-400 to-gray-600 rounded-lg p-4 sm:p-6 md:p-8 text-white"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(225, 29, 72, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4"
              variants={itemVariants}
            >
              Need Help Finding the Right Domestic Staff?
            </motion.h3>
            <motion.p 
              className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 opacity-90"
              variants={itemVariants}
            >
              Contact Select Maid today for personalized assistance. Our experts will help you find the perfect maid, nanny, nurse, or helper to meet your household needs. 
            </motion.p>
            <motion.button 
              className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/917290007424', '_blank')}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.main>
    {/* Floating WhatsApp Button - Old Icon */}
   
  </div>
  )
}

export default Services