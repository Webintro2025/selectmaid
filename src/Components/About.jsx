"use client"
import React from 'react'

const About = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 via-gray-50 to-red-100 min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="w-full">
        
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-12 lg:gap-16 mx-auto">
          {/* Left Section - Image */}
          <div className="flex-shrink-0 w-full sm:w-3/4 md:w-[320px] lg:w-[400px] xl:w-[500px]">
            <img
              src="/About.png"
              alt="About Select Maid - Domestic Services"
              className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[500px] aspect-square rounded-3xl mt-8 sm:mt-20 md:mt-36 shadow-xl mx-auto hover:scale-105 hover:opacity-85 transition-all duration-300"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="max-w-2xl w-full text-gray-800">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight bg-gradient-to-r from-red-600 to-gray-700 bg-clip-text text-transparent text-center">
              About Us - Select Maid
            </h1>
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-800 text-base sm:text-lg md:text-xl">
              <p>
                Select Maid is a well-known brand in domestic home care services, providing a wide range of domestic services and job opportunities both in India and overseas. Our head office is located in Delhi, and we are proudly registered with the Ministry of Corporate Affairs in India.
              </p>
              <p>
                With a commitment to excellence and customer satisfaction, Select Maid has established itself as a trusted name in the industry. Our extensive network and experienced team ensure that we deliver top-notch services tailored to meet the unique needs of each client. Whether you need housekeeping, childcare, elderly care, or any other domestic service, Select Maid is here to help you maintain a comfortable and well-managed home.
              </p>
              <p>
                We offer a variety of services including maid placement, babysitting, elderly care, patient care, cook services, and more. Our team is dedicated to matching the right professional to your specific requirements, ensuring reliability and peace of mind for every household.
              </p>
              <p>
                Select Maid also provides job opportunities for domestic workers, helping them find suitable employment both in India and abroad. We believe in fair practices and strive to improve the lives of both our clients and our workforce.
              </p>
              <p>
                Choose Select Maid for a hassle-free experience and let us take care of your home with professionalism and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About