"use client"
import React from 'react'
import Link from 'next/link';
import servicesData from '@/servicesData';
import slugify from "slugify";

const Teams = () => {
  return (
    <div className="bg-gradient-to-br from-red-100 via-red-200 to-white py-8 sm:py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Our Partners & Their Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-red-700">
            We collaborate with top domestic staffing agencies to bring you the best maids, nannies, cooks, and attendants.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-0 shadow-lg border border-red-200 h-full relative hover:scale-105 hover:shadow-2xl transition-all duration-300">
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                   <Link href={`/${slugify(service.title, { lower: true, strict: true })}`}>
                   
                  <img
                    src={`/${service.image}`}
                    alt={service.title}
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-xl mx-auto mb-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                    </Link>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-red-800 mb-1 text-center hover:scale-105 transition-transform duration-300">
                    <Link href={`/${slugify(service.title, { lower: true, strict: true })}`}>
                      {service.title}
                    </Link>
                  </h3>
                
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-red-200 to-red-400 rounded-2xl p-4 sm:p-6 md:p-8 text-white relative overflow-x-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                Ready to hire our Maids, Nannies, Cooks, or Attendants?
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 opacity-90">
                We collaborate with top domestic staffing agencies to bring you the best maids, nannies, cooks, and attendants.
              </p>
              <button 
                className="mt-2 w-full bg-gradient-to-r from-red-200 to-red-400 text-white py-1.5 px-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:from-red-300 hover:to-red-500 transition-all duration-300 border border-red-200 hover:scale-105 active:scale-95"
                onClick={() => window.open('https://wa.me/9172900074249', '_blank')}
              >
                Contact Us on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams