"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Teams = () => {
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

  const cardVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const partners = 
    [
  {
    "service": "Maid Services Live-in 24H",
    "description": "We provide all types of Maids, Helpers, and Cleaners for homes, kothis, offices, etc.",
    "image": "/House Maid Live-in Services.png"
  },
  {
    "service": "New Born Baby Maid / Japa",
    "description": "Available 24h live-in new born baby maid in Delhi NCR. Salary ₹30,000. Well experienced (10+ years).",
    "image": "/New born baby maid or japa maid.png"
  },
  {
    "service": "Patient Care Attendant Services Live-in",
    "description": "We provide all types of home care services like patient care, attendant, elder care, and home nurse. Live-in available.",
    "image": "/Patient Care Attendant Services Live-in.png"
  },
  {
    "service": "Cook Services Live-in",
    "description": "Home cook services, live-in available.",
    "image": "/Paasport Holder Maid Cook Nanny for Overseas.png"
  },
  {
    "service": "Baby Or Nanny Live-in 24h",
    "description": "Professional nannies and baby care staff available for 24h live-in service.",
    "image": "/Baby care Services Live-in.png"
  },
  {
    "service": "How We Can Get Best Maid Services",
    "description": "Contact to get best maid services.",
    "image": "/House Maid Live-in Services.png"
  },
  {
    "service": "House Maid Services Delhi",
    "description": "Contact us for house maid services in Delhi.",
    "image": "/24 Hours live-in House Maid, Cook, Nanny in Delhi.png"
  },
  {
    "service": "Hire Maid Cook Services in Delhi Noida",
    "description": "We have Bengali, Jharkhand, and Odisha maids available for live-in service.",
    "image": "/Male Helper or Cleaner or House Keeping Staff for hom.png"
  }
]

  ;

  return (
    <div className="bg-gradient-to-br from-red-100 via-red-200 to-white py-8 sm:py-12 md:py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={cardVariants}
        >
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Our Partners & Their Expertise
          </motion.h2>
          <motion.p 
            className="text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-3xl mx-auto text-red-700"
            variants={cardVariants}
          >
            We collaborate with top domestic staffing agencies to bring you the best maids, nannies, cooks, and attendants.
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.service}
              className="relative group"
              variants={cardVariants}
              custom={index}
            >
              <motion.div
                className="bg-white rounded-2xl p-0 shadow-lg border border-red-200 h-full relative"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.img
                    src={partner.image}
                    alt={partner.service}
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-xl mx-auto mb-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.h3
                    className="text-xs sm:text-sm md:text-base font-bold text-red-800 mb-1 text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    {partner.service}
                  </motion.h3>
                  <motion.p
                    className="text-[10px] sm:text-xs md:text-sm text-red-700 text-center mb-2"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {partner.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16"
          variants={cardVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-red-200 to-red-400 rounded-2xl p-4 sm:p-6 md:p-8 text-white relative overflow-x-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(14, 165, 233, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              whileHover={{ opacity: 1 }}
            />
            <div className="relative z-10">
              <motion.h3 
                className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4"
                variants={cardVariants}
              >
                Ready to Work with Our Maid?
              </motion.h3>
              <motion.p 
                className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 opacity-90"
                variants={cardVariants}
              >
                We collaborate with top domestic staffing agencies to bring you the best maids, nannies, cooks, and attendants.
              </motion.p>
              <motion.button 
                className="mt-2 w-full bg-gradient-to-r from-red-200 to-red-400 text-white py-1.5 px-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:from-red-300 hover:to-red-500 transition-all duration-300 border border-red-200"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(255,255,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/919971669475', '_blank')}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Teams