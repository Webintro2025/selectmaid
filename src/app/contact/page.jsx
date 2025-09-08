export const metadata = {
  title: "Contact Us | Best CA Services in Delhi | Select Maid",
  description: "Contact Select Maid for expert Chartered Accountant services in Delhi. Get in touch for Company Registration, GST, Bookkeeping, MSME, Startup India, Society & Trust Registration, and more. Fast, reliable, and affordable business solutions.",
  keywords: [
    "Contact CA Delhi",
    "Chartered Accountant Contact",
    "CA Services Delhi",
    "Company Registration Help",
    "GST Consultant Delhi",
    "Bookkeeping Support",
    "Business Compliance Delhi"
  ],
  openGraph: {
    title: "Contact Us | Best CA Services in Delhi | Select Maid",
    description: "Contact Select Maid for expert Chartered Accountant services in Delhi. Get in touch for Company Registration, GST, Bookkeeping, MSME, Startup India, Society & Trust Registration, and more.",
    url: "https://eazy-tax.in/contact",
    siteName: "Select Maid Delhi",
    images: [
      {
        url: "/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Select Maid CA Services Delhi"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Best CA Services in Delhi | Select Maid",
    description: "Contact Select Maid for expert Chartered Accountant services in Delhi. Get in touch for Company Registration, GST, Bookkeeping, MSME, Startup India, Society & Trust Registration, and more.",
    site: "@eazytaxdelhi",
    images: [
      "/banner1.jpg"
    ]
  },
  alternates: {
    canonical: "https://yourdomain.com/contact"
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
