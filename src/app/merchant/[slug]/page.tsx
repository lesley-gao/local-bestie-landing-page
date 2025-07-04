"use client";

import { use, useState } from "react";
import DownloadAppModal from "@/components/shared/DownloadAppModal";
import { merchantDetailsModalConfig } from "@/config/content";
import MerchantNotFound from "@/components/merchant/MerchantNotFound";
import MerchantHero from "@/components/merchant/MerchantHero";
import MerchantTabs from "@/components/merchant/MerchantTabs";
import MerchantInfo from "@/components/merchant/MerchantInfo";
import MerchantMenu from "@/components/merchant/MerchantMenu";
import MerchantReviews from "@/components/merchant/MerchantReviews";
import MerchantCTA from "@/components/merchant/MerchantCTA";
import MerchantPromotions from "@/components/merchant/MerchantPromotions";
import MerchantMap from "@/components/merchant/MerchantMap";
import MerchantBottomImage from "@/components/merchant/MerchantBottomImage";

interface MerchantDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

// TODO: Mock data - need to integrate with the backend
const merchantData = {
  "local-bestie-cafe": {
    name: "Local Bestie Cafe",
    rating: 5.0,
    distance: "100m",
    likes: 9321,
    status: "OPEN",
    hours: "6:30am - 4:00pm Monday",
    address: "1 Local Bestie St, Auckland CBD, Auckland 1010",
    phone: "+64 9 377 1030",
    lat: -36.8485,
    lng: 174.7633,
    heroImage: "/images/local-bestie-cafe.png",
    menuImages: ["/images/sample-menu1.png", "/images/sample-menu2.png"],
    promotions: [
      { id: 1, cashback: "23%", terms: "*Terms & conditions apply." },
      { id: 2, cashback: "22%", terms: "*Terms & conditions apply." },
    ],
  },
};

export default function MerchantDetails({ params }: MerchantDetailsProps) {
  const { slug } = use(params);
  const merchant = merchantData[slug as keyof typeof merchantData];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!merchant) {
    return (
      <MerchantNotFound
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <MerchantHero heroImage={merchant.heroImage} name={merchant.name} />

      <div className="max-w-7xl mx-auto p-8">
        <div className="-mt-16 mb-8 relative z-20"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-3">
            <div className="space-y-8 bg-white border border-black/60 shadow-md -mt-16 relative z-30">
              <MerchantTabs />
              <MerchantInfo merchant={merchant} />
              <MerchantMenu menuImages={merchant.menuImages} />
              <MerchantReviews />
              <MerchantCTA
                heroImage={merchant.heroImage}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-1">
            <MerchantPromotions
              promotions={merchant.promotions}
              setIsModalOpen={setIsModalOpen}
            />
            <MerchantMap lat={merchant.lat} lng={merchant.lng} />
          </div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <MerchantBottomImage heroImage={merchant.heroImage} />

      {/* Download App Modal */}
      <DownloadAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        config={merchantDetailsModalConfig}
      />
    </div>
  );
}
