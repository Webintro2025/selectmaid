"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HomeBanner = () => {
  // Banner images for desktop and mobile
  const desktopBanners = [
    {
      id: 1,
      src: "/banner1.jpg",
      
    },
    {
      src: "/banner2.jpg",
      alt: "Banner 2"
    }
    ,{
      src: "/banner3.jpg",
      alt: "Banner 3"
    },
    
  ];
  const mobileBanners = [
    {
      id :1,
      src: "/banner1M.jpg",
      alt: "Mobile Banner 1"
    },
    {
      id: 2,
      src: "/banner2M.jpg",
      alt: "Mobile Banner 2"
    },
    {
      id: 3,
      src: "/banner3M.jpg",
      alt: "Mobile Banner 3"
    }
  ];

  const [banners, setBanners] = useState(desktopBanners);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 640) {
        setBanners(mobileBanners);
      } else {
        setBanners(desktopBanners);
      }
      setCurrentIndex(0); // Reset index when banners change
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [banners]);

  // Only show the first banner, no text, no navigation
  return (
  <div className="relative w-full h-[45vh] sm:h-[35vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={banners[currentIndex]?.src}
          src={banners[currentIndex]?.src}
          alt="Banner"
          className="w-full h-full object-cover absolute inset-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </AnimatePresence>
    </div>
  );
}

export default HomeBanner