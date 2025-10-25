import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopHeader from "@/Components/TopHeader";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsappIcon from "@/Components/whatsappIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Select Maid",
  description: "Select Maid provides trusted domestic helpers and maid services across Delhi — verified staff, flexible schedules, and reliable household assistance. Find part-time, full-time, and trained home helpers for your needs.",
  keywords: [
    "Domestic Help Delhi",
    "Maid Services",
    "Hire Maid in Delhi",
    "Household Help",
    "Verified Maids",
    "Babysitter",
    "Caretaker",
    "Home Assistance"
  ],
  verification: {
    google: "UdojKaeR9U9hlJWTBSeXV_oUWvt3paZny7u2wYnENI8", // ← Yeh line important hai (preserved)
  },
  openGraph: {
    title: "Trusted Maid & Domestic Help Services in Delhi | Select Maid",
    description: "Hire verified domestic helpers and maids in Delhi. Select Maid connects you with trained, background-checked staff for household cleaning, caregiving, babysitting, and more.",
    url: "https://selectmaid.in/",
    siteName: "Select Maid Delhi",
    images: [
      {
        url: "/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "Trusted Maid Services in Delhi"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Maid & Domestic Help Services in Delhi | Select Maid",
    description: "Hire verified domestic helpers and maids in Delhi. Select Maid connects you with trained, background-checked staff for household cleaning, caregiving, babysitting, and more.",
    site: "@selectmaiddelhi",
    images: [
      "/banner1.jpg"
    ]
  },
  alternates: {
    canonical: "https://selectmaid.in/"
  },
  metadataBase: new URL("https://selectmaid.in/"),
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader />
        <Navbar />
        {children}
        <Footer/>
        <WhatsappIcon />
      </body>
    </html>
  );
}
