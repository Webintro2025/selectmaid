"use client"
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -200,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  const floatingButtonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const iconBounce = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className="bg-gradient-to-r from-red-50 via-gray-50 to-red-100 min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="w-full">
        
        <motion.div 
          className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-12 lg:gap-16 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Section - Image */}
          <motion.div 
            className="flex-shrink-0 w-full sm:w-3/4 md:w-[320px] lg:w-[400px] xl:w-[500px]"
            variants={slideInLeft}
          >
            <motion.img
              src="/About.png"
              alt="About Select Maid - Domestic Services"
              className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[500px] aspect-square rounded-3xl mt-36 shadow-xl mx-auto"
              initial={{ scale: 1.1, x: -100, opacity: 0 }}
              whileInView={{ scale: 1, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }}
              whileHover={{ 
                scale: 1.05,
                opacity: 0.85,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          {/* Right Section - Text Content */}
          <motion.div 
            className="max-w-2xl w-full text-gray-800"
            variants={slideInRight}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight bg-gradient-to-r from-red-600 to-gray-700 bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Us - Select Maid
            </motion.h1>
            <motion.div
              className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-800 text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.p>
                Select Maid is a well-known brand in domestic home care services, providing a wide range of domestic services and job opportunities both in India and overseas. Our head office is located in Delhi, and we are proudly registered with the Ministry of Corporate Affairs in India.
              </motion.p>
              <motion.p>
                With a commitment to excellence and customer satisfaction, Select Maid has established itself as a trusted name in the industry. Our extensive network and experienced team ensure that we deliver top-notch services tailored to meet the unique needs of each client. Whether you need housekeeping, childcare, elderly care, or any other domestic service, Select Maid is here to help you maintain a comfortable and well-managed home.
              </motion.p>
              <motion.p>
                We offer a variety of services including maid placement, babysitting, elderly care, patient care, cook services, and more. Our team is dedicated to matching the right professional to your specific requirements, ensuring reliability and peace of mind for every household.
              </motion.p>
              <motion.p>
                Select Maid also provides job opportunities for domestic workers, helping them find suitable employment both in India and abroad. We believe in fair practices and strive to improve the lives of both our clients and our workforce.
              </motion.p>
              <motion.p>
                Choose Select Maid for a hassle-free experience and let us take care of your home with professionalism and care.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About