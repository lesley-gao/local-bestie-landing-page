import Navbar from "@/components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import WhyLB from "../components/landing/WhyLB";
import DownloadSection from "../components/landing/DownloadSection";
import HowItWorksSection from "../components/landing/HowItWorks";
import AISection from "../components/landing/AISection";
import GetStarted from "../components/landing/GetStarted";
import Footer from "../components/landing/Footer";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <WhyLB />
      <HowItWorksSection />
      <AISection />
      <DownloadSection />
      <GetStarted />
      <Footer />
    </>
  )
}

export default LandingPage