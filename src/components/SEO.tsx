import Head from "next/head";

// Customer Landing Page Head
export function CustomerPageHead() {
  return (
    <Head>
      <title>Local Bestie - Discover Amazing Local Spots & Earn Cashback</title>
      <meta 
        name="description" 
        content="Your neighbourhood brain trust. Discover top local cafés, bars, and eateries with personalized AI recommendations. Earn cashback points on every meal. Join free!" 
      />
      <meta name="keywords" content="local restaurants, café recommendations, cashback dining, local food discovery, New Zealand restaurants, AI recommendations" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Local Bestie - Discover Amazing Local Spots & Earn Cashback" />
      <meta property="og:description" content="Your neighbourhood brain trust. Get personalized local dining recommendations and earn cashback points on every meal." />
      <meta property="og:image" content="/images/customer-hero-img.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://localbestie.com/customer" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Local Bestie - Discover Local Spots & Earn Cashback" />
      <meta name="twitter:description" content="Get AI-powered local dining recommendations and earn cashback points on every meal." />
      <meta name="twitter:image" content="/images/customer-hero-img.png" />
      
      {/* App-specific */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      <link rel="icon" href="/lb-icon.png" />
    </Head>
  );
}

// Business Landing Page Head  
export function BusinessPageHead() {
  return (
    <Head>
      <title>Local Bestie for Business - AI-Powered Marketing Platform</title>
      <meta 
        name="description" 
        content="More customers. Smarter promotions. Zero hassle. Join Local Bestie's AI-powered platform that fills your quiet hours and turns visitors into regulars. Free to join!" 
      />
      <meta name="keywords" content="local business marketing, restaurant marketing, AI promotions, customer acquisition, loyalty program, cashback system, small business growth" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Local Bestie for Business - AI-Powered Marketing Platform" />
      <meta property="og:description" content="Fill your quiet hours and build customer loyalty with AI-powered promotions and cashback rewards. Free to join." />
      <meta property="og:image" content="/images/business-hero-img.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://localbestie.com" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Local Bestie for Business - AI Marketing Platform" />
      <meta name="twitter:description" content="Fill quiet hours with AI-powered promotions and cashback loyalty programs." />
      <meta name="twitter:image" content="/images/business-hero-img.jpg" />
      
      {/* Business-specific */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Local Bestie" />
      
      <link rel="icon" href="/lb-icon.png" />
    </Head>
  );
}

// Coming Soon Page Head
export function ComingSoonPageHead() {
  return (
    <Head>
      <title>Local Bestie - We're Launching Soon!</title>
      <meta 
        name="description" 
        content="Local Bestie is launching soon! Be the first to know when our AI-powered local discovery and cashback app goes live. Sign up for early access." 
      />
      <meta name="keywords" content="local bestie app, coming soon, early access, local discovery app, cashback app" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Local Bestie - We're Launching Soon!" />
      <meta property="og:description" content="Be the first to know when Local Bestie launches. AI-powered local discovery with cashback rewards." />
      <meta property="og:image" content="/images/comingsoon.png" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Local Bestie - Launching Soon" />
      <meta name="twitter:description" content="Sign up for early access to Local Bestie - AI local discovery with cashback." />
      <meta name="twitter:image" content="/images/comingsoon.png" />
      
      <link rel="icon" href="/lb-icon.png" />
    </Head>
  );
}

