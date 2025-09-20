"use client"
import React from 'react'
import Link from "next/link";
import slugify from "slugify";

const OurServices = () => {

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
      title: "Male Helper or Housekeeping Staff",
      image: "/Male Helper or Cleaner or House Keeping Staff for hom.png",
      description: "Our male helpers and housekeeping staff provide professional cleaning, maintenance, and support for homes and apartments. Services include deep cleaning, furniture moving, gardening, and general upkeep. Reliable, background-checked, and efficient staff."
    },
    {
      title: "Newborn Baby Maid or Japa Maid",
      image: "/New born baby maid or japa maid.png",
      description: "Our japa maids specialize in postnatal care for mothers and newborns, offering traditional massage, bathing, and nutrition support. Experienced maids help new mothers recover and adapt, ensuring proper care for both mother and baby."
    },
    {
      title: "English-Speaking Overseas Maid",
      image: "/English Speaking Overseas Maid.png",
      description: "We offer English-speaking maids for overseas families and expatriates, ensuring clear communication and high standards of service. Staff is trained in international etiquette, cooking, cleaning, and childcare for travel or long-term residence."
    },
    {
      title: "Passport Holder Maid, Cook, Nanny Overseas",
      image: "/Paasport Holder Maid Cook Nanny for Overseas.png",
      description: "Our passport holder maids, cooks, and nannies are available for overseas assignments, offering skilled domestic help for families abroad. With verified documents and experience, staff provides cooking, cleaning, childcare, and elder care."
    },
   

  ];

  return (
    <section className="bg-gradient-to-br from-red-50 via-red-100 to-white py-6 sm:py-8 md:py-12 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-7 sm:mb-10 md:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-red-800 mb-2 sm:mb-3 md:mb-4 hover:text-red-900 hover:scale-105 transition-all duration-300">
            Our Professional Services
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-3 sm:mb-4 md:mb-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <Link key={index} href={`/${slugify(service.title, { lower: true, strict: true })}`} passHref>
              <div className="bg-white border border-red-200 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2 hover:border-red-400 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer">
                {/* Service Image */}
                <div className="flex items-center justify-center w-full h-64 bg-transparent mb-6 hover:scale-110 transition-transform duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-800 mb-4 text-center hover:text-red-900 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-base sm:text-lg md:text-xl text-red-700 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-7 sm:mt-10 md:mt-12">
          <div className="bg-gradient-to-r from-red-600 to-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100 mb-3 sm:mb-4 md:mb-6">
              Our experts are ready to guide you through the best options for your business needs
            </p>
            <button
              className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-red-50 hover:scale-105 active:scale-95 transition-all duration-300"
              onClick={() => window.open('https://wa.me/917290007484', '_blank')}
            >
              <span className="flex items-center gap-1.5 sm:gap-2 hover:translate-x-1 transition-transform duration-300">
                <i className="fab fa-whatsapp text-green-500 animate-pulse" />
                Consult Our Experts
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices