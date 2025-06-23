import { NavbarConfig } from "../components/shared/Navbar";
import { HeroContent } from "../components/shared/HeroSection";
import { FeatureItem } from "../components/shared/FeaturesSection";
import { StepItem } from "../components/shared/HowItWorksSection";
import { DownloadConfig } from "../components/shared/DownloadSection";
import { FAQConfig } from "../components/shared/FAQSection";

//TODO: All the links below are made up and should be replaced with actual links

// Customer Navbar 
export const customerNavbarConfig: NavbarConfig = {
  logo: {
    src: "/images/lb-logo.png",
    alt: "Local Bestie logo",
    homeUrl: "/customer",
  },
  switchButton: {
    text: "Join as Partner",
    href: "/",
  },
  ctaButton: {
    text: "Start Discovering - It's free!",
    href: "#download",
  },
};

// Business Navbar 
export const businessNavbarConfig: NavbarConfig = {
  logo: {
    src: "/images/lb-logo.png",
    alt: "Local Bestie logo",
    homeUrl: "/",
  },
  switchButton: {
    text: "Enjoy as Customer",
    href: "/customer",
  },
  ctaButton: {
    text: "Start Growing - It's free!",
    href: "#download",
  },
};

// Customer Hero 
export const customerHeroContent: HeroContent = {
  title: "Local Bestie -<br />Your neighbourhood<br />brain trust",
  subtitle:
    "Discover top local spots with personalised suggestions based on your taste, schedule, and location—and earn cashback points every time you pay.",
  primaryButton: {
    text: "Join for Free",
    href: "#download",
  },
  secondaryButton: {
    text: "View Demo",
    href: "#",
  },
  image: {
    src: "/images/customer-hero-img.png",
    alt: "Friends enjoying local dining experience",
  },
};

// Business Hero 
export const businessHeroContent = {
  title: "More customers.<br />Smarter promotions.<br />Zero hassle.",
  subtitle:
    "Join Local Bestie – the AI-powered marketing platform that fills your quiet hours, builds loyalty, and turns one-time visitors into regulars.",
  primaryButton: {
    text: "Join for Free",
    href: "#download",
  },
  secondaryButton: {
    text: "View Demo",
    href: "#",
  },
  image: {
    src: "/images/business-hero-img.jpg",
    alt: "Customers dining happily",
  },
};

// Customer Features 
export const customerFeatures: FeatureItem[] = [
  {
    title: "Real local wisdom",
    description:
      "Discover hand‑picked café, bar, and eatery recommendations from people in your own community.",
    image: "/images/customer-wisdom.png",
  },
  {
    title: "Just for you...",
    description:
      "Get suggestions that match your taste, your schedule, and wherever you are right now.",
    image: "/images/customer-personal.png",
  },
  {
    title: "Rewards in a snap",
    description:
      "Earn cashback points on every meal-and use them instantly at checkout or however you choose.",
    image: "/images/customer-rewards.png",
  },
  {
    title: "Smooth & simple",
    description:
      "Link your card once, pay via the app, and watch your points pile up without lifting a finger.",
    image: "/images/customer-simple.png",
  },
  {
    title: "Support local love",
    description:
      "Give back to the cafés and bars you adore-and enjoy exclusive, time‑sensitive treats in return.",
    image: "/images/customer-love.png",
  },
  {
    title: "Share your discoveries",
    description:
      "Help fellow foodies by sharing honest reviews and photos of your experiences.",
    image: "/images/customer-share.png",
  },
];

// Customer Features 
export const businessFeatures: FeatureItem[] = [
  {
    title: "Smart visibility",
    description:
      "Get discovered by local customers actively looking for services like yours.",
    image: "/images/smart-visibility.jpg",
  },
  {
    title: "Dynamic offers",
    description:
      "Use Al-powered pricing to attract customers during slow hours.",
    image: "/images/dynamic-offers.jpg",
  },
  {
    title: "Cashback loyalty",
    description:
      "Keep them coming back with our points-based cashback rewards system.",
    image: "/images/cashback-loyalty.jpg",
  },
];

// Customer How It Works 
export const customerSteps: StepItem[] = [
  {
    title: "Chat or Browse",
    description: "Chat for quick, tailored picks or browse our hand‑picked lists to find the best cafés, bars, and eateries.",
    image: "/images/chat-browse.png",
  },
  {
    title: "Dine & Review",
    description: "Enjoy your meal? Leave feedback in chat or the review tab to help fellow Kiwis.",
    image: "/images/dine-review.png",
  },
  {
    title: "Earn & Redeem",
    description: "Get cashback points on every meal-redeem instantly at checkout or anytime in-app.",
    image: "/images/earn-redeem.png",
  },
];

// Business How It Works 
export const businessSteps: StepItem[] = [
  {
    step: "Step 1",
    title: "Customer pays in app",
    description: "User enters the amount in LB app. You both get a unique verification code.",
    image: "/images/step1.png",
  },
  {
    step: "Step 2",
    title: "Auto cashback issued",
    description: "Cash back points go to the customer account – no need to track or print anything.",
    image: "/images/step2.png",
  },
  {
    step: "Step 3",
    title: "You get paid fast",
    description: "Funds are securely transferred to your account. Easy accounting.",
    image: "/images/step3.png",
  },
];

// Customer Download 
export const customerDownloadConfig: DownloadConfig = {
  title: "Find your locals",
  description: "Download the App to discover amazing places!",
  links: [
    {
      platform: "Google Play",
      url: "https://play.google.com/store/lb-customer-app-download",
      image: "/images/google-play-download.png",
      alt: "Get it on Google Play",
    },
    {
      platform: "App Store",
      url: "https://www.apple.com/nz/app-store/lb-customer-app-download",
      image: "/images/app-store-download.png",
      alt: "Download on the App Store",
    },
  ],
};

// Business Download 
export const businessDownloadConfig: DownloadConfig = {
  title: "Meet more locals",
  description: "Download the App to connect with customers today!",
  links: [
    {
      platform: "Google Play",
      url: "https://play.google.com/store/lb-partner-app-download",
      image: "/images/google-play-download.png",
      alt: "Get it on Google Play",
    },
    {
      platform: "App Store",
      url: "https://www.apple.com/nz/app-store/lb-partner-app-download",
      image: "/images/app-store-download.png",
      alt: "Download on the App Store",
    },
  ],
};


// Business FAQ 
export const businessFAQConfig: FAQConfig = {
  title: "Frequently Asked Questions",
  subtitle: "Have other questions? Get in touch with our team via",
  contactEmail: "support@localbestie.com",
  faqs: [
    {
      question: "What is LocalBestie Merchant?",
      answer: "LocalBestie Merchant is an AI-powered marketing platform designed specifically for local businesses. We help you attract new customers, increase loyalty, and boost revenue through smart promotions and cashback rewards."
    },
    {
      question: "How do I become a merchant?",
      answer: "Simply sign up, complete your business profile, and submit it for approval. Once verified, you'll be able to start listing your offerings."
    },
    {
      question: "Does it cost anything to join?",
      answer: "No, there's no setup fee or monthly cost to join LocalBestie. We only charge a small success fee per in-app payment when you make sales through our platform."
    },
    {
      question: "What types of businesses can apply?",
      answer: "We welcome restaurants, cafes, bars, retail stores, service providers, and many other local businesses. If you serve customers locally, we'd love to have you on our platform."
    },
    {
      question: "How do I list my products or services?",
      answer: "Once your business profile is approved, you can easily add your products or services through our merchant dashboard. You can set prices, add descriptions, upload photos, and create special offers."
    },
    {
      question: "How does the payment system work?",
      answer: "Customers pay through our app, and funds are securely transferred to your account. You'll receive detailed transaction reports and analytics to help track your performance."
    },
    {
      question: "Can I create custom promotions?",
      answer: "Yes! Our AI-powered promotion tools let you create dynamic offers, set automatic pricing adjustments for slow periods, and design loyalty campaigns that keep customers coming back."
    },
    {
      question: "What support do you provide?",
      answer: "We offer comprehensive support including setup assistance, training materials, and ongoing customer service. Our team is here to help you succeed on the platform."
    }
  ],
  maxDisplayCount: 5,
  showAllButtonText: "Show all FAQs"
};

// Customer FAQ 
export const customerFAQConfig: FAQConfig = {
  title: "Frequently Asked Questions",
  subtitle: "Have other questions? Get in touch with our team via",
  contactEmail: "support@localbestie.com",
  faqs: [
    {
      question: "What is LocalBestie?",
      answer: "LocalBestie is your neighborhood brain trust - an app that helps you discover amazing local spots with personalized recommendations based on your taste, schedule, and location, while earning cashback points every time you pay."
    },
    {
      question: "How do I earn cashback points?",
      answer: "Simply pay through the LocalBestie app at participating businesses and you'll automatically earn cashback points. No need to track receipts or remember to scan anything!"
    },
    {
      question: "How do I redeem my points?",
      answer: "You can redeem your cashback points instantly at checkout or anytime in the app. Points can be used at any participating LocalBestie business."
    },
    {
      question: "Is the app free to use?",
      answer: "Yes! LocalBestie is completely free to download and use. You'll even earn money back through our cashback program when you dine and shop at local businesses."
    },
    {
      question: "How do you make personalized recommendations?",
      answer: "Our AI analyzes your preferences, dining history, schedule, and location to suggest places you'll love. The more you use the app, the better our recommendations become."
    },
    {
      question: "Can I leave reviews and recommendations?",
      answer: "Absolutely! We encourage you to share honest reviews and recommendations to help other community members discover great local spots."
    },
    {
      question: "What types of businesses are on LocalBestie?",
      answer: "You'll find restaurants, cafes, bars, retail stores, and various service providers - all locally-owned businesses that make your neighborhood special."
    }
  ],
  maxDisplayCount: 4,
  showAllButtonText: "Show all FAQs"
};