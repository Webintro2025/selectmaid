"use client"
import React from 'react'
import { motion } from 'framer-motion'

const OurServices = () => {
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

  const topToBottomVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Services data with descriptions and icons
  const services = [
    {
      title: "House Maid Live-in Services",
      image: "/House Maid Live-in Services.png",
      description: "Our house maid live-in services provide reliable, full-time domestic help for all your household needs. Trained maids handle cleaning, cooking, laundry, and daily chores, keeping your home organized and comfortable. With background-verified staff and flexible options, you enjoy peace of mind and a hassle-free lifestyle. Hygiene, punctuality, and professionalism are our priorities."
    },
    {
      title: "Home Nurse Services",
      image: "/Home Nurse Services.png",
      description: "Our home nurse services offer compassionate medical care and support for elderly, sick, or recovering family members. Certified nurses assist with medication, wound care, mobility, and daily health monitoring. We provide personalized care plans, prioritizing comfort, safety, and dignity for your loved ones at home."
    },
    {
      title: "Baby Care Services Live-in",
      image: "/Baby care Services Live-in.png",
      description: "Our baby care live-in services provide experienced nannies for newborns, infants, and toddlers. Caregivers are trained in feeding, bathing, sleep routines, and early childhood development. We ensure gentle care, hygiene, and safety, supporting parents with flexible schedules and loving attention."
    },
    {
      title: "Patient Care Attendant Services Live-in",
      image: "/Patient Care Attendant Services Live-in.png",
      description: "Our patient care attendant live-in services provide dedicated support for individuals with health challenges, disabilities, or post-hospital recovery. Attendants assist with daily activities, hygiene, mobility, and medication reminders, focusing on empathy and comfort."
    },
    {
      title: "Male Helper or Cleaner or House Keeping Staff for home",
      image: "/Male Helper or Cleaner or House Keeping Staff for hom.png",
      description: "Our male helpers and housekeeping staff provide professional cleaning, maintenance, and support for homes and apartments. Services include deep cleaning, furniture moving, gardening, and general upkeep. Reliable, background-checked, and efficient staff."
    },
    {
      title: "New born baby maid or japa maid",
      image: "/New born baby maid or japa maid.png",
      description: "Our japa maids specialize in postnatal care for mothers and newborns, offering traditional massage, bathing, and nutrition support. Experienced maids help new mothers recover and adapt, ensuring proper care for both mother and baby."
    },
    {
      title: "English Speaking Overseas Maid",
      image: "/English Speaking Overseas Maid.png",
      description: "We offer English-speaking maids for overseas families and expatriates, ensuring clear communication and high standards of service. Staff is trained in international etiquette, cooking, cleaning, and childcare for travel or long-term residence."
    },
    {
      title: "Paasport Holder Maid Cook Nanny for Overseas",
      image: "/Paasport Holder Maid Cook Nanny for Overseas.png",
      description: "Our passport holder maids, cooks, and nannies are available for overseas assignments, offering skilled domestic help for families abroad. With verified documents and experience, staff provides cooking, cleaning, childcare, and elder care."
    },

  ];

  return (
    <motion.section 
      className="bg-gradient-to-br from-red-50 via-red-100 to-white py-6 sm:py-8 md:py-12 px-2 sm:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-7 sm:mb-10 md:mb-12"
          variants={topToBottomVariants}
        >
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-red-800 mb-2 sm:mb-3 md:mb-4"
            whileHover={{ 
              scale: 1.02,
              color: "#b91c1c",
              transition: { duration: 0.3 }
            }}
          >
            Our Professional Services
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-3 sm:mb-4 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-red-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive business registration and compliance services tailored for your success
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-red-200 rounded-xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
              variants={topToBottomVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.15)",
                borderColor: "#ef4444",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Service Image */}
               <motion.div 
                className="flex items-center justify-center w-full max-w-full h-[180px] sm:w-56 sm:h-56 md:w-64 md:h-64 bg-transparent mb-2 sm:mb-3 md:mb-4 mx-auto p-0 border-0 overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="object-contain w-full max-w-full h-full max-h-[180px] sm:w-56 sm:h-56 md:w-64 md:h-64 m-0 p-0 border-0"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
               </motion.div>

              {/* Service Title */}
              <motion.h3 
                className="text-base sm:text-lg md:text-xl font-bold text-red-800 mb-1.5 sm:mb-2 md:mb-3 text-center"
                whileHover={{ 
                  color: "#b91c1c",
                  transition: { duration: 0.3 }
                }}
              >
                {service.title}
              </motion.h3>

              {/* Service Description */}
              <motion.p 
                className="text-xs sm:text-sm md:text-base text-red-700 leading-relaxed mb-2 sm:mb-3 md:mb-4 text-center"
                variants={itemVariants}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-7 sm:mt-10 md:mt-12"
          variants={topToBottomVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-red-600 to-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3 
              className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4"
              variants={itemVariants}
            >
              Need Help Choosing the Right Service?
            </motion.h3>
            <motion.p 
              className="text-xs sm:text-sm md:text-base text-blue-100 mb-3 sm:mb-4 md:mb-6"
              variants={itemVariants}
            >
              Our experts are ready to guide you through the best options for your business needs
            </motion.p>
            <motion.button
              className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-red-50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/919971669475', '_blank')}
            >
              <motion.span
                className="flex items-center gap-1.5 sm:gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.i 
                  className="fab fa-whatsapp text-green-500"
                  animate={{ 
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Consult Our Experts
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default OurServices