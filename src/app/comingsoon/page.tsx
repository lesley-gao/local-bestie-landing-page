import { Metadata } from "next";
import ComingSoon from "@/pages/ComingSoon";

export const metadata: Metadata = {
  title: "Local Bestie - We're Launching Soon!",
  description:
    "Local Bestie is launching soon! Be the first to know when our AI-powered local discovery and cashback app goes live. Sign up for early access.",
  keywords:
    "local bestie app, coming soon, early access, local discovery app, cashback app",
  openGraph: {
    title: "Local Bestie - We're Launching Soon!",
    description:
      "Be the first to know when Local Bestie launches. AI-powered local discovery with cashback rewards.",
    images: ["/images/comingsoon.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Bestie - Launching Soon",
    description:
      "Sign up for early access to Local Bestie - AI local discovery with cashback.",
    images: ["/images/comingsoon.png"],
  },
  icons: {
    icon: "/images/lb-icon.png",
  },
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
