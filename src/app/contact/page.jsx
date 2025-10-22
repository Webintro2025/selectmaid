export const metadata = {
  title: "Contact Us | Domestic Help & Maid Services in Delhi | Select Maid",
  description: "Contact Select Maid for trusted domestic help and maid services in Delhi. We provide trained home helpers, part-time and full-time maids, babysitters, caretakers, and household assistance. Quick response, verified staff, and affordable rates.",
  keywords: [
    "Contact Maid Delhi",
    "Domestic Help Delhi",
    "Hire Maid in Delhi",
    "Household Help Services",
    "Part Time Maid Delhi",
    "Full Time Maid",
    "Verified Domestic Staff"
  ],
  openGraph: {
    title: "Contact Us | Domestic Help & Maid Services in Delhi | Select Maid",
    description: "Contact Select Maid for trusted domestic help and maid services in Delhi. We offer verified maids, flexible scheduling, and reliable household assistance across the city.",
    url: "https://selectmaid.in/contact",
    siteName: "Select Maid Delhi",
    images: [
      {
        url: "/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Select Maid - Domestic Help & Maid Services Delhi"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Domestic Help & Maid Services in Delhi | Select Maid",
    description: "Contact Select Maid for trusted domestic help and maid services in Delhi. We offer verified maids, flexible scheduling, and reliable household assistance across the city.",
    site: "@selectmaiddelhi",
    images: [
      "/banner1.jpg"
    ]
  },
  alternates: {
    canonical: "https://selectmaid.in/contact"
  },
  robots: {
    index: true,
    follow: true
  }
};


import ContactClient from './ContactClient';

export default function Page() {
  return <ContactClient />;
}
