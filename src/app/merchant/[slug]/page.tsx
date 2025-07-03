"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoLocationSharp,
  IoCall,
  IoHeart,
  IoStar,
  IoChevronForward,
} from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import DownloadAppModal from "@/components/shared/DownloadAppModal";
import { merchantDetailsModalConfig } from "@/config/content";

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
      <div className="relative h-screen overflow-hidden">
        <div className="flex-1 flex flex-col items-left mt-10 mx-20">
          <Link href="/customer">
            <Image
              src="/images/lb-logo.png"
              alt="Local Bestie Logo"
              width={150}
              height={40}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/details-not-available.jpg"
            alt="Details not available"
            width={400}
            height={300}
            className="object-contain"
          />

          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Merchant Details Coming Soon!
            </h2>
            <p className="text-gray-600 max-w-md">
              We're working hard to bring you detailed information about this
              merchant. Check back soon for updates!
            </p>
          </div>
        </div>

        {/* Download App Modal */}
        <DownloadAppModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          config={merchantDetailsModalConfig}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-100 w-full">
        <Image
          src={merchant.heroImage}
          alt={merchant.name}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay filter */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <div className="-mt-16 mb-8 relative z-20"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 ">
            <div className="space-y-8 bg-white border border-black/60 shadow-md -mt-16 relative z-30">
              {/* Floating Tabs - positioned to appear over hero image */}
              <div className="flex bg-white border-b-1">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="px-10 py-5 text-lg font-bold hover:text-themecolor border-b-2 border-transparent hover:border-themecolor transition-colors"
                >
                  Overview
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("menu")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-10 py-5 text-lg font-bold hover:text-themecolor border-b-2 border-transparent hover:border-themecolor transition-colors"
                >
                  Menu
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("reviews")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-10 py-5 text-lg font-bold hover:text-themecolor border-b-2 border-transparent hover:border-themecolor transition-colors"
                >
                  Reviews
                </button>
              </div>

              {/* Home Button */}
              <div className="flex items-center gap-2 ml-10 text-gray-600 ">
                <Link href="/customer">
                  <FiHome className="w-5 h-5 hover:text-themecolor transition-colors" />
                </Link>
                <IoChevronForward className="w-4 h-4" />
                <Link href="/customer/allmerchants">
                  {" "}
                  <p className="hover:text-themecolor transition-colors hover:underline underline-offset-3 ">
                    All Merchants
                  </p>
                </Link>
              </div>

              {/* Merchant Info */}
              <div className="p-10 pt-0">
                <h1 className="text-4xl font-bold mb-4">
                  {merchant.name}
                </h1>

                {/* Rating and Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      {merchant.rating.toFixed(1)}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <IoStar key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="flex items-center gap-1">
                    <IoLocationSharp className="w-4 h-4 text-blue-600" />
                    {merchant.distance}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <IoHeart className="w-4 h-4 text-themecolor" />
                    {merchant.likes.toLocaleString()} Likes
                  </span>
                </div>

                {/* Status and Hours */}
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded mr-3">
                    {merchant.status}
                  </span>
                  <span className="text-gray-600">{merchant.hours}</span>
                </div>

                {/* Address and Phone */}
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start gap-2">
                    <IoLocationSharp className="w-4 h-4 mt-1 text-themecolor" />
                    <span>{merchant.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoCall className="w-4 h-4 text-themecolor" />
                    <span>{merchant.phone}</span>
                  </div>
                </div>
              </div>

              {/* Menu Section */}
              <div id="menu" className="px-10 py-6">
                <h2 className="text-2xl font-bold mb-6">Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {merchant.menuImages.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Menu ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div id="reviews" className="px-10 py-6">
                <h2 className="text-2xl font-bold mb-6">Reviews</h2>

                {/* Rating Breakdown */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-themecolor">
                      4.7
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <IoStar key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600">(190)</span>
                  </div>

                  {/* Rating bars */}
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-4">{rating}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-themecolor h-2 rounded-full"
                            style={{
                              width:
                                rating === 5
                                  ? "80%"
                                  : rating === 4
                                  ? "15%"
                                  : "5%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Photo */}
                <div className="relative overflow-hidden mb-6">
                  <Image
                    src={merchant.heroImage}
                    alt="Merchant photo"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {/* Floating Search Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="flex items-center bg-white rounded-xl shadow-lg p-2 max-w-sm clickeffect cursor-pointer hover:shadow-xl transition-all"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <span className="text-gray-800 font-medium mx-4">
                        How can I see more details?
                      </span>
                      <div className="bg-black rounded-xl p-4">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Promotions */}
          <div className="lg:col-span-1 ">
            <div className="bg-white p-6 mb-6 border border-black/60 shadow-md -mt-16 relative z-30">
              <div className=" border-b-1">
                <h3 className="text-lg font-bold mb-4 text-center">
                  Promotions
                </h3>
              </div>

              {/* Cashback Offers */}
              <div className="space-y-4 my-6">
                {merchant.promotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="border border-gray-200 rounded-lg p-2 cursor-pointer clickeffect"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/images/white-logo.png"
                        alt="Local Bestie Logo"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-themecolor">
                          {promo.cashback}
                        </span>
                        <span className="text-sm">Cash Back</span>
                        <span className="bg-themecolor text-white text-xs px-2 py-1 rounded">
                          Claim
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{promo.terms}</p>
                  </div>
                ))}
              </div>

              {/* Unlock Deals Section */}
              <div className="text-center py-6 px-0">
                <Image
                  src="/images/lock.jpg"
                  alt="unlock more deals"
                  width={90}
                  height={90}
                  className="object-contain mb-4 mx-auto"
                />
                <h4 className="font-semibold text-md text-[#1A1A1A] mb-2">
                  Dine local. Earn cashback.
                </h4>
                <p className="font-bold text-lg text-[#1A1A1A] mb-4">Unlock more deals!</p>
                <button
                  className="bg-themecolor hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors clickeffect w-full"
                  onClick={() => setIsModalOpen(true)}
                >
         Get My Cashback
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              {/* <span className="text-gray-500">Map placeholder</span> */}

              <iframe
                className="w-full h-full rounded-lg"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${merchant.lat},${merchant.lng}&hl=en&z=15&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Interior Image Section */}
      <div className="w-full h-20 md:h-30 relative overflow-hidden mt-10">
        <Image
          src="/images/local-bestie-cafe.png"
          alt="Interior ambiance"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Download App Modal */}
      <DownloadAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        config={merchantDetailsModalConfig}
      />
    </div>
  );
}
