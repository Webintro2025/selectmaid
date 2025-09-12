"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import servicesData from "@/servicesData";
import GetInTouch from "@/Components/GetInTouch";
import slugify from "slugify";

export default function ServicePage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (slug) {
      const found = servicesData.find(
        (s) => slugify(s.title, { lower: true }) === slug
      );
      setService(found || null);
    }
  }, [slug]);

  if (!slug)
    return (
      <div className="p-8 text-center text-xl text-gray-500">
        Please select a service from the menu.
      </div>
    );

  if (!service)
    return (
      <div className="p-8 text-center text-xl text-red-500">
        Service not found.
      </div>
    );

  return (
    <motion.div
      className="w-full max-w-full mx-0 p-0 md:p-8 px-2 sm:px-4 md:px-8 bg-gradient-to-br from-red-50 via-white to-red-100 shadow-2xl border border-red-100 flex flex-col items-center justify-start"
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ minHeight: "80vh" }}
    >
      {/* Title, Image, Description - Responsive */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-full mt-8 mb-8 px-0">
        {service.image && (
          <motion.img
            src={`/${service.image}`}
            alt={service.title}
            className="object-contain rounded-2xl shadow-2xl border border-red-200 transition-all duration-300 w-full max-w-[220px] max-h-[220px] md:max-w-[340px] md:max-h-[340px] md:ml-4 mb-4 md:mb-0"
            initial={{ opacity: 0, x: 80, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.09, rotate: 2, boxShadow: "0 8px 32px #c81e1e33" }}
            style={{ marginRight: "0.5rem" }}
          />
        )}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          <motion.h1
            className="font-extrabold drop-shadow-lg text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4 text-black"
            whileHover={{ scale: 1.05, color: "#b91c1c" }}
            style={{ margin: 0, textAlign: "left", letterSpacing: "1px" }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="text-gray-700 text-sm sm:text-base md:text-xl lg:text-2xl mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {service.description}
          </motion.p>
        </motion.div>
      </div>
      {/* Advantages */}
      {(service.advantages || service.mainCharacteristics) && (
        <motion.div
          className="w-full flex flex-col md:flex-row gap-4 md:gap-8 mt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {service.advantages && (
            <div className="flex-1 bg-white rounded-xl shadow p-3 md:p-4 border border-red-100 mb-4 md:mb-0">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mb-2">Advantages</h3>
              <motion.ul className="list-disc ml-4 md:ml-5 space-y-2 text-gray-700 text-xs sm:text-sm md:text-base"
                initial="hidden" animate="visible"
                variants={{hidden: {}, visible: {transition: {staggerChildren: 0.07}}}}
              >
                {service.advantages.map((adv, i) => (
                  <motion.li key={i} whileHover={{ scale: 1.04, color: "#b91c1c", backgroundColor: "#f0f6ff" }} className="rounded px-2 py-1 transition-colors">
                    {adv}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
          {service.mainCharacteristics && (
            <div className="flex-1 bg-white rounded-xl shadow p-3 md:p-4 border border-red-100">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mb-2">Main Characteristics</h3>
              <motion.ul className="list-disc ml-4 md:ml-5 space-y-2 text-gray-700 text-xs sm:text-sm md:text-base"
                initial="hidden" animate="visible"
                variants={{hidden: {}, visible: {transition: {staggerChildren: 0.07}}}}
              >
                {service.mainCharacteristics.map((char, i) => (
                  <motion.li key={i} whileHover={{ scale: 1.04, color: "#b91c1c", backgroundColor: "#f0f6ff" }} className="rounded px-2 py-1 transition-colors">
                    {char}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
        </motion.div>
      )}
      <GetInTouch />
    </motion.div>
  );
}
