"use client"
import React from 'react'
import { motion } from 'framer-motion'

const TopHeader = () => {
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
  className="w-full bg-gradient-to-r from-gray-800 via-red-900 to-gray-800 text-white py-1.5 sm:py-2 md:py-2.5 px-1 xs:px-2 sm:px-3 md:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-1 sm:gap-2 md:gap-0">
        {/* Left Corner - Contact Information */}
        <motion.div 
          className="flex flex-row flex-wrap xs:flex-row md:flex-nowrap md:items-center space-x-1 xs:space-x-2 md:space-x-4 lg:space-x-6 space-y-0"
          variants={slideInLeft}
        >
          <motion.div 
            className="flex items-center space-x-0.5 xs:space-x-1 md:space-x-2 text-[10px] xs:text-xs md:text-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-red-300">📱</span>
            <a 
              href="tel:+917290007484"
              className="hover:text-red-300 transition-colors duration-200"
            >
              (+91) 7290007484
            </a>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-0.5 xs:space-x-1 md:space-x-2 text-[10px] xs:text-xs md:text-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-red-300">📱</span>
            <a 
              href="tel:+917290007424"
              className="hover:text-red-300 transition-colors duration-200"
            >
              7290007424
            </a>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-0.5 xs:space-x-1 md:space-x-2 text-[10px] xs:text-xs md:text-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-yellow-300">📧</span>
            <a 
              href="mailto:selectmaid@gmail.com"
              className="hover:text-red-300 transition-colors duration-200"
            >
              selectmaid@gmail.com
            </a>
          </motion.div>
        </motion.div>

        {/* Right Corner - Company Branding */}
        <motion.div 
          className="hidden md:flex flex-col md:flex-row md:items-center md:space-x-4 lg:space-x-8 space-y-0.5 md:space-y-0 text-right"
          variants={slideInRight}
        >
          
          
          <motion.div 
            className="text-xs md:text-sm border-l border-gray-600 pl-2 md:pl-4 lg:pl-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-end space-x-1 md:space-x-2">
                <span className="text-orange-300">⭐</span>
                <span className="text-red-300 font-semibold">Providing professional home cleaning and maid services since 2025.</span>
              </div>
              <div className="text-gray-300 text-[10px] md:text-xs mt-0.5 md:mt-1">
                Bringing a tech-enabled approach to make your home spotless and your life easier.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

  
    </motion.div>
  )
}

export default TopHeader
