"use client"
import React from 'react'
import Link from "next/link";

const Slides = () => {
  // Updated images from public folder
  const images = [
    { src: '/House Maid Live-in Services.png', alt: 'House Maid Live-in Services' },
    { src: '/Home Nurse Services.png', alt: 'Home Nurse Services' },
    { src: '/Baby care Services Live-in.png', alt: 'Baby care Services Live-in' },
    { src: '/Patient Care Attendant Services Live-in.png', alt: 'Patient Care Attendant Services Live-in' },
    { src: '/Male Helper or Cleaner or House Keeping Staff for hom.png', alt: 'Male Helper or Cleaner or House Keeping Staff for home' },
    { src: '/New born baby maid or japa maid.png', alt: 'New born baby maid or japa maid' },
    { src: '/English Speaking Overseas Maid.png', alt: 'English Speaking Overseas Maid' },
    { src: '/Paasport Holder Maid Cook Nanny for Overseas.png', alt: 'Passport Holder Maid Cook Nanny for Overseas' }
  ];

  return (
    <section className="w-full py-8 bg-gradient-to-b from-slate-50 to-white">
      {/* Full width container - removed header text */}
      <div className="w-full px-0">
        {/* Full Width Sliding Container - Increased height */}
        <div className="relative bg-gradient-to-r from-blue-50 via-white to-slate-50 py-20 w-full">
          {/* Infinite Sliding Track */}
          <div className="flex gap-8 animate-slide">
            {/* First set of images - Increased size */}
            {images.map((image, index) => (
              <Link href={`/services?name=${encodeURIComponent(image.alt)}`} passHref key={`first-${index}`}>
                <div className="flex-shrink-0 relative group">
                  <div className="w-[200px] h-[100px] rounded-xl shadow-xl border-2 border-white hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Enhanced Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/85 via-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl flex items-end justify-center p-4 transition-opacity duration-300">
                    <p className="text-white text-lg font-bold text-center leading-tight">
                      {image.alt}
                    </p>
                  </div>

                  {/* Enhanced Floating icons */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <i className="fas fa-star text-white text-sm" />
                  </div>

                  {/* Service indicator */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold text-blue-600">Service {index + 1}</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Second set for seamless loop - Increased size */}
            {images.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 relative group"
              >
                <div className="w-[200px] h-[180px] rounded-xl shadow-xl border-2 border-white hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[180px] object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                    loading="lazy"
                  />
                </div>
                
                {/* Enhanced Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/85 via-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl flex items-end justify-center p-4 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold text-center leading-tight">
                    {image.alt}
                  </p>
                </div>

                {/* Enhanced Floating icons */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <i className="fas fa-star text-white text-sm" />
                </div>

                {/* Service indicator */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold text-blue-600">Service {index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Gradient overlays for seamless fade */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Enhanced Bottom decorative elements */}
        <div className="flex justify-center mt-8 gap-6 px-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg animate-pulse"
              style={{ animationDelay: `${index * 0.3}s` }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Floating background elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-bounce" />
      <div className="absolute bottom-16 right-16 w-16 h-16 bg-slate-300 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-1/2 left-8 w-12 h-12 bg-blue-300 rounded-full opacity-10 animate-ping" />
    </section>
  )
}

export default Slides