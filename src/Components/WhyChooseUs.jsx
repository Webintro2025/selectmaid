"use client"
import React from 'react'

const whyChooseUsPoints = [
  {
    icon: "⭐",
    title: "Trusted & Registered Company",
    description:
      "We are a registered brand under MSME, recognized by the Ministry of Corporate Affairs (India), ensuring legal compliance and credibility.",
  },
  {
    icon: "👩‍💼",
    title: "Experienced & Verified Staff",
    description:
      "All our maids, nannies, cooks, and attendants are background-verified, professionally trained, and experienced, offering safe and reliable care.",
  },
  {
    icon: "🌐",
    title: "India & Overseas Services",
    description:
      "Whether you need help in Delhi NCR or a passport-ready maid abroad, our network covers both domestic and international placements.",
  },
  {
    icon: "🕒",
    title: "24/7 Live-in Availability",
    description:
      "We specialize in live-in staffing to ensure 24/7 support for your home, baby, elderly, or patient care needs.",
  },
  {
    icon: "🗣️",
    title: "English-Speaking Professionals",
    description:
      "Need a maid, nanny, or cook who speaks English? We offer well-trained professionals fluent in English—ideal for high-end homes and overseas clients.",
  },
  {
    icon: "👶",
    title: "Newborn & Mother Care Experts",
    description:
      "Our Japa and baby care staff are specially trained in newborn handling, baby massage, and postnatal mother care.",
  },
  {
    icon: "🧹",
    title: "All-in-One Domestic Staffing",
    description:
      "From housekeeping and cooking to elderly care, child care, and cleaning, we’re your one-stop solution for all home staffing needs.",
  },
  {
    icon: "📞",
    title: "Easy Support & Quick Placement",
    description:
      "We value your time. Reach out via Call or WhatsApp for quick consultation and fast staff deployment.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 mb-8 text-center">
          ✅ Why Choose Us
        </h2>
        <ul className="grid gap-6 sm:gap-8">
          {whyChooseUsPoints.map((point, idx) => (
            <li
              key={point.title}
              className="flex items-start gap-4 bg-red-50 rounded-xl p-4 sm:p-6 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl select-none">{point.icon}</span>
              <div>
                <h3 className="font-bold text-red-600 text-lg sm:text-xl mb-1">{point.title}</h3>
                <p className="text-gray-800 text-sm sm:text-base">{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhyChooseUs
