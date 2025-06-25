import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeaturesSection from "@/components/shared/FeaturesSection";
import HowItWorksSection from "@/components/shared/HowItWorksSection";
import DownloadSection from "@/components/shared/DownloadSection";
import FAQSection from "@/components/shared/FAQSection";
import Footer from "@/components/shared/Footer";

import {
  customerNavbarConfig,
  customerHeroContent,
  customerFeatures,
  customerSteps,
  customerDownloadConfig,
  customerFAQConfig,
} from "@/config/content";

export default function CustomerLanding() {
  return (
    <>
      <Navbar config={customerNavbarConfig} />
      <HeroSection content={customerHeroContent} />
      <FeaturesSection
        title="Why you'll love it"
        features={customerFeatures}
        variant="customer"
      />
      <HowItWorksSection
        title="How it works"
        steps={customerSteps}
        variant="customer"
      />
      <DownloadSection config={customerDownloadConfig} variant="customer" />
      <FAQSection config={customerFAQConfig} />
      <Footer />
    </>
  );
}