"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  if (!service) {
    return (
      <div className="w-full max-w-full mx-0 p-8 flex items-center justify-center" style={{ minHeight: "80vh" }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-full mx-0 p-0 md:p-8 px-2 sm:px-4 md:px-8 bg-gradient-to-br from-red-50 via-white to-red-100 shadow-2xl border border-red-100 flex flex-col items-center justify-start opacity-0 animate-fade-in"
      style={{ minHeight: "80vh", animation: "fadeIn 0.7s ease-out forwards" }}
    >
      {/* Title, Image, Description - Responsive */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-full mt-8 mb-8 px-0">
        {service.image && (
          <img
            src={`/${service.image}`}
            alt={service.title}
            className="object-contain rounded-2xl shadow-2xl border border-red-200 transition-all duration-300 w-full max-w-[220px] max-h-[220px] md:max-w-[340px] md:max-h-[340px] md:ml-4 mb-4 md:mb-0 hover:scale-110 hover:rotate-2 hover:shadow-3xl"
            style={{ marginRight: "0.5rem" }}
          />
        )}
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="font-extrabold drop-shadow-lg text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4 text-black hover:scale-105 hover:text-red-700 transition-all duration-300"
            style={{ margin: 0, textAlign: "left", letterSpacing: "1px" }}
          >
            {service.title}
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-xl lg:text-2xl mb-2 md:mb-4 opacity-0 animate-slide-up">
            {service.description}
          </p>
        </div>
      </div>
      {/* Advantages */}
      {(service.advantages || service.mainCharacteristics) && (
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 mt-4 opacity-0 animate-slide-up">
          {service.advantages && (
            <div className="flex-1 bg-white rounded-xl shadow p-3 md:p-4 border border-red-100 mb-4 md:mb-0 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mb-2">Advantages</h3>
              <ul className="list-disc ml-4 md:ml-5 space-y-2 text-gray-700 text-xs sm:text-sm md:text-base">
                {service.advantages.map((adv, i) => (
                  <li key={i} className="rounded px-2 py-1 transition-all duration-300 hover:scale-105 hover:text-red-700 hover:bg-blue-50">
                    {adv}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {service.mainCharacteristics && (
            <div className="flex-1 bg-white rounded-xl shadow p-3 md:p-4 border border-red-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mb-2">Main Characteristics</h3>
              <ul className="list-disc ml-4 md:ml-5 space-y-2 text-gray-700 text-xs sm:text-sm md:text-base">
                {service.mainCharacteristics.map((char, i) => (
                  <li key={i} className="rounded px-2 py-1 transition-all duration-300 hover:scale-105 hover:text-red-700 hover:bg-blue-50">
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <GetInTouch />
    </div>
  );
}
