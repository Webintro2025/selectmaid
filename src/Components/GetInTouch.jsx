"use client"
import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const GetInTouch = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const leftToRightVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightToLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <motion.section 
      className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Contact Info Section - Left to Right Animation */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center"
          variants={leftToRightVariants}
        >
          <motion.h2 
            className="text-xs sm:text-sm md:text-lg lg:text-2xl font-extrabold text-red-700 mb-2 sm:mb-3 md:mb-5 lg:mb-7 text-left"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              color: "#b91c1c",
              transition: { duration: 0.3 }
            }}
          >
            Contact Information
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-br from-red-50 via-red-100 to-red-200 border-l-2 sm:border-l-4 md:border-l-8 border-red-500 shadow-xl rounded-2xl p-2 sm:p-3 md:p-5 max-w-xl mx-auto flex flex-col gap-2 sm:gap-3 md:gap-5"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Company Name */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-red-500 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl font-bold"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#b91c1c",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-building"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-sm sm:text-lg md:text-xl">Company Name</div>
                <motion.div 
                  className="text-slate-800 font-bold text-sm sm:text-lg md:text-xl"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  Select Maid
                </motion.div>
              </div>
            </motion.div>

            {/* Mail ID */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-red-600 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#991b1b",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-envelope"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-sm sm:text-lg md:text-xl">Mail ID</div>
                <motion.div 
                  className="text-slate-800 font-bold text-sm sm:text-lg md:text-xl"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  selectmaid@gmail.com
                </motion.div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-red-600 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#991b1b",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-sm sm:text-lg md:text-xl">Address</div>
                <motion.div 
                  className="text-slate-800 font-bold text-sm sm:text-lg md:text-xl"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  258, First Floor, near Bhumiya Mata, Hari Nagar Ashram, New Delhi, Delhi 110014
                </motion.div>
              </div>
            </motion.div>

            {/* Phone Number */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-red-700 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#7f1d1d",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-phone-alt"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-sm sm:text-lg md:text-xl">Phone Number</div>
                <motion.div 
                  className="text-slate-800 font-bold text-sm sm:text-lg md:text-xl"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  7290007484<br />7290007424
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Get In Touch Section - Right to Left Animation */}
        <motion.div 
          className="w-full lg:w-1/2"
          variants={rightToLeftVariants}
        >
          <motion.h2 
            className="text-xs sm:text-sm md:text-lg lg:text-2xl font-extrabold text-red-700 mb-2 sm:mb-3 md:mb-5 lg:mb-7"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              color: "#b91c1c",
              transition: { duration: 0.3 }
            }}
          >
            Get In Touch
          </motion.h2>
          <ContactForm itemVariants={itemVariants} />
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <motion.section 
  className="bg-gradient-to-r from-red-800 via-red-900 to-red-800 py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-4 mt-4 sm:mt-6 md:mt-8 rounded-2xl"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.01,
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 md:gap-3"
          variants={containerVariants}
        >
          <motion.p 
            className="text-white text-[10px] sm:text-xs md:text-sm font-light max-w-xl text-center sm:text-left"
            variants={leftToRightVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            If You Need Any <motion.span 
              className="text-red-400 font-semibold"
              whileHover={{ 
                color: "#ef4444",
                transition: { duration: 0.3 }
              }}
            >Domestic Care & Maid Services
            </motion.span>
            <motion.span 
              className="text-red-400 font-semibold"
              whileHover={{ 
                color: "#ef4444",
                transition: { duration: 0.3 }
              }}
            >
              ... We Are Available For You
            </motion.span>
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-red-500 to-slate-600 text-white font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg whitespace-nowrap hover:from-red-600 hover:to-slate-700 transition-all duration-300 text-[10px] sm:text-xs md:text-sm shadow-lg"
            variants={rightToLeftVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/917290007484', '_blank')}
          >
            <motion.span
              className="flex items-center gap-1 sm:gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.i 
                className="fab fa-whatsapp"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              CONTACT US
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.section>
    </motion.section>
  );
};

export default GetInTouch;
