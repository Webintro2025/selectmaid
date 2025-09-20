"use client"
import React from "react";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Contact Info Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-extrabold text-red-700 mb-2 sm:mb-3 md:mb-5 lg:mb-7 text-left hover:scale-105 hover:text-red-800 transition-all duration-300">
            Contact Information
          </h2>
          <div className="bg-gradient-to-br from-red-50 via-red-100 to-red-200 border-l-2 sm:border-l-4 md:border-l-8 border-red-500 shadow-xl rounded-2xl p-2 sm:p-3 md:p-5 max-w-xl mx-auto flex flex-col gap-2 sm:gap-3 md:gap-5 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            {/* Company Name */}
            <div className="flex items-center gap-3 sm:gap-4 hover:translate-x-2 transition-all duration-300">
              <span className="bg-red-500 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl font-bold hover:scale-110 hover:rotate-12 hover:bg-red-700 transition-all duration-500">
                <i className="fas fa-building"></i>
              </span>
              <div>
                <div className="text-slate-600 font-semibold text-sm sm:text-lg md:text-xl">Company Name</div>
                <div className="text-slate-800 font-bold text-sm sm:text-lg md:text-xl hover:text-blue-700 transition-all duration-300">
                  Select Maid
                </div>
              </div>
            </div>

            {/* Mail ID */}
            <div className="flex items-center gap-3 sm:gap-4 hover:translate-x-2 transition-all duration-300">
              <span className="bg-red-600 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl hover:scale-110 hover:rotate-12 hover:bg-red-800 transition-all duration-500">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <div className="text-slate-600 font-semibold text-sm sm:text-lg md:text-xl">Mail ID</div>
                <div className="text-slate-800 font-bold text-sm sm:text-lg md:text-xl hover:text-blue-700 transition-all duration-300">
                  selectmaid@gmail.com
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 sm:gap-4 hover:translate-x-2 transition-all duration-300">
              <span className="bg-red-600 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl hover:scale-110 hover:rotate-12 hover:bg-red-800 transition-all duration-500">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <div className="text-slate-600 font-semibold text-sm sm:text-lg md:text-xl">Address</div>
                <div className="text-slate-800 font-bold text-sm sm:text-lg md:text-xl hover:text-blue-700 transition-all duration-300">
                  258, First Floor, near Bhumiya Mata, Hari Nagar Ashram, New Delhi, Delhi 110014
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-3 sm:gap-4 hover:translate-x-2 transition-all duration-300">
              <span className="bg-red-700 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl hover:scale-110 hover:rotate-12 hover:bg-red-900 transition-all duration-500">
                <i className="fas fa-phone-alt"></i>
              </span>
              <div>
                <div className="text-slate-600 font-semibold text-sm sm:text-lg md:text-xl">Phone Number</div>
                <div className="text-slate-800 font-bold text-sm sm:text-lg md:text-xl hover:text-blue-700 transition-all duration-300">
                  7290007484<br />7290007424
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-extrabold text-red-700 mb-2 sm:mb-3 md:mb-5 lg:mb-7 hover:scale-105 hover:text-red-800 transition-all duration-300">
            Get In Touch
          </h2>
          <ContactForm />
        </div>
      </div>

      {/* Bottom Banner */}
      <section className="bg-gradient-to-r from-red-800 via-red-900 to-red-800 py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-4 mt-4 sm:mt-6 md:mt-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 md:gap-3">
          <p className="text-white text-[10px] sm:text-xs md:text-sm font-light max-w-xl text-center sm:text-left hover:scale-105 transition-all duration-300">
            If You Need Any <span className="text-red-400 font-semibold hover:text-red-300 transition-all duration-300">Domestic Care & Maid Services</span>
            <span className="text-red-400 font-semibold hover:text-red-300 transition-all duration-300">
              ... We Are Available For You
            </span>
          </p>
          <button 
            className="bg-gradient-to-r from-red-500 to-slate-600 text-white font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg whitespace-nowrap hover:from-red-600 hover:to-slate-700 hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs md:text-sm shadow-lg"
            onClick={() => window.open('https://wa.me/917290007484', '_blank')}
          >
            <span className="flex items-center gap-1 sm:gap-2">
              <i className="fab fa-whatsapp animate-pulse" />
              CONTACT US
            </span>
          </button>
        </div>
      </section>
    </section>
  );
};

export default GetInTouch;
