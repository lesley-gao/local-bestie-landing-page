import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
import FeaturesSection from "@/components/shared/FeaturesSection";
import HowItWorksSection from "@/components/shared/HowItWorksSection";
import DownloadSection from "@/components/shared/DownloadSection";
import AISection from "../components/businessLanding/AISection";
import GetStarted from "../components/businessLanding/GetStarted";
import FAQSection from "@/components/shared/FAQSection";
import Footer from "../components/shared/Footer";

import {
  businessNavbarConfig,
  businessHeroContent,
  businessFeatures,
  businessSteps,
  businessDownloadConfig,
  businessFAQConfig,
} from "../config/content";
import { BusinessPageHead } from "@/components/SEO";

export default function BusinessLanding() {
  return (
    <>
      <BusinessPageHead />

      <Navbar config={businessNavbarConfig} />
      <HeroSection content={businessHeroContent} />
      <FeaturesSection
        title="Why Local Bestie works"
        subtitle="Built for local businesses like yours"
        features={businessFeatures}
        variant="business"
      />
      <HowItWorksSection
        title="How it works"
        subtitle="Simple. Powerful. No staff training required."
        steps={businessSteps}
        variant="business"
      />
      <AISection />
      <DownloadSection config={businessDownloadConfig} variant="business" />
      <GetStarted />
      <FAQSection config={businessFAQConfig} />
      <Footer />
    </>
  );
}
