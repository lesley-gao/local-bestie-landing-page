import { Metadata } from "next";
import CustomerLanding from "@/pages/CustomerLanding";

export const metadata: Metadata = {
  title: "Local Bestie - Discover Amazing Local Spots & Earn Cashback",
  description:
    "Your neighbourhood brain trust. Discover top local cafés, bars, and eateries with personalized AI recommendations. Earn cashback points on every meal. Join free!",
  keywords:
    "local restaurants, café recommendations, cashback dining, local food discovery, New Zealand restaurants, AI recommendations",
  openGraph: {
    title: "Local Bestie - Discover Amazing Local Spots & Earn Cashback",
    description:
      "Your neighbourhood brain trust. Get personalized local dining recommendations and earn cashback points on every meal.",
    images: ["/images/customer-hero-img.png"],
    type: "website",
    url: "https://localbestie.com/customer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Bestie - Discover Local Spots & Earn Cashback",
    description:
      "Get AI-powered local dining recommendations and earn cashback points on every meal.",
    images: ["/images/customer-hero-img.png"],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
  },
  icons: {
    icon: "/lb-icon.png",
  },
};

export default function Customer() {
  return <CustomerLanding />;
}
