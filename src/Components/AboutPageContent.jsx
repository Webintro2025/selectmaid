"use client";
import React from 'react';
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";
import Teams from "./Teams";

// All animation variants and About page content moved here for modularity
const AboutPageContent = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Header Section */}
      <section className="relative min-h-[40vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
          {/* Static Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-400 rounded-full opacity-20 animate-pulse" />
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-slate-300 rounded-full opacity-15 animate-bounce" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-red-300 rounded-full opacity-10 animate-pulse" />

          {/* Floating Geometric Shapes */}
          <div
            className="absolute top-1/4 left-1/3 w-6 h-6 bg-white opacity-20 animate-bounce"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
          <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-red-200 opacity-25 rotate-45 animate-spin" />

          {/* Business Icons Floating */}
          <div className="absolute top-1/2 left-20 w-12 h-12 bg-slate-600 rounded-lg opacity-20 flex items-center justify-center animate-bounce">
            <i className="fas fa-calculator text-white text-lg"></i>
          </div>

          <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-red-600 rounded-full opacity-25 flex items-center justify-center animate-pulse">
            <i className="fas fa-chart-pie text-white text-sm"></i>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 text-center px-2 sm:px-4 max-w-2xl md:max-w-4xl mx-auto">
          <div className="mb-8 hover:scale-105 transition-transform duration-300">
            <h1 className="text-base sm:text-lg md:text-4xl lg:text-5xl font-extrabold text-red-700 mb-4 md:mb-6 leading-tight">
              About Us
            </h1>
            <div className="text-lg font-semibold text-red-500 mb-2">Your Trusted Home Help Partner</div>
          </div>

          <p className="text-xs sm:text-sm md:text-lg text-red-100 mb-6 md:mb-8 leading-relaxed">
            Welcome to Select Maid – Your trusted partner for professional maid and domestic help services.<br className="hidden md:block" />
            Over 10 years of reliability, care, and dedication to making your home life easier and happier.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <button
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-lg hover:from-red-600 hover:to-red-700 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-lg"
              onClick={() => {
                document.getElementById('about-story').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <i className="fas fa-book-open animate-pulse" />
              Our Story
            </button>

            <button
              className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-lg hover:bg-white hover:text-slate-900 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 md:gap-3"
              onClick={() => {
                document.getElementById('our-team').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <i className="fas fa-users animate-bounce" />
              Meet Our Team
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i className="fas fa-chevron-down text-lg sm:text-xl text-white opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-10 sm:py-14 md:py-16 px-2 sm:px-4 bg-gradient-to-b from-slate-50 to-red-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-base sm:text-lg md:text-3xl font-bold text-slate-800 mb-6 md:mb-8 hover:scale-105 hover:text-blue-700 transition-all duration-300">
            Your Trusted Home Help Partner
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mb-8 md:mb-12">
            {[
              {
                icon: "fas fa-award",
                number: "10+",
                label: "Years Serving Homes",
                description: "A decade of trusted maid and domestic help services across Delhi NCR"
              },
              {
                icon: "fas fa-users",
                number: "1000+",
                label: "Happy Families",
                description: "Thousands of satisfied clients enjoying a cleaner, safer home"
              },
              {
                icon: "fas fa-thumbs-up",
                number: "99%",
                label: "Service Satisfaction",
                description: "Consistently high ratings for reliability, care, and professionalism"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 hover:rotate-12 hover:scale-110 transition-all duration-300">
                  <i className={`${stat.icon} text-lg sm:text-xl md:text-2xl text-white animate-pulse`} />
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 mb-1 md:mb-2 hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>

                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3">
                  {stat.label}
                </h4>

                <p className="text-xs sm:text-sm md:text-base text-slate-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Component */}
      <section id="about-story">
        <About />
      </section>

      {/* Why Choose Us Component */}
      <section>
        <WhyChooseUs />
      </section>

      {/* Teams Component */}
      <section id="our-team">
        <Teams />
      </section>

      {/* Call to Action Section */}
      <section className="py-10 sm:py-14 md:py-16 px-2 sm:px-4 bg-gradient-to-br from-red-900 via-slate-800 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 hover:scale-105 hover:text-blue-300 transition-all duration-300">
            Ready to Start Your Journey with Us?
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-red-100 mb-6 md:mb-8">
            Join hundreds of satisfied clients who trust us with their financial success. 
            Let's build a prosperous future together.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <button
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 sm:px-7 sm:py-3 rounded-xl font-semibold text-base sm:text-lg hover:from-red-600 hover:to-red-700 hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 flex items-center gap-2 md:gap-3"
              onClick={() => window.open('/contact', '_self')}
            >
              <i className="fas fa-envelope animate-bounce" />
              Get In Touch
            </button>

            <button
              className="border-2 border-white text-white px-5 py-2 sm:px-7 sm:py-3 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-red-900 hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 flex items-center gap-2 md:gap-3"
              onClick={() => window.open('https://wa.me/919821575784', '_blank')}
            >
              <i className="fab fa-whatsapp animate-pulse" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* ...existing code... */}
    </div>
  );
};

export default AboutPageContent;
