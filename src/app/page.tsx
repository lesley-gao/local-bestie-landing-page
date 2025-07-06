import { Metadata } from "next";
import BusinessLanding from "@/pages/BusinessLanding";

export const metadata: Metadata = {
  title: "Local Bestie for Business - AI-Powered Marketing Platform",
  description:
    "More customers. Smarter promotions. Zero hassle. Join Local Bestie's AI-powered platform that fills your quiet hours and turns visitors into regulars. Free to join!",
  keywords:
    "local business marketing, restaurant marketing, AI promotions, customer acquisition, loyalty program, cashback system, small business growth",
  authors: [{ name: "Local Bestie" }],
  openGraph: {
    title: "Local Bestie for Business - AI-Powered Marketing Platform",
    description:
      "Fill your quiet hours and build customer loyalty with AI-powered promotions and cashback rewards. Free to join.",
    images: ["/images/business-hero-img.jpg"],
    type: "website",
    url: "https://localbestie.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Bestie for Business - AI Marketing Platform",
    description:
      "Fill quiet hours with AI-powered promotions and cashback loyalty programs.",
    images: ["/images/business-hero-img.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/lb-icon.png",
  },
};

export default function Home() {
  return <BusinessLanding />;
}
