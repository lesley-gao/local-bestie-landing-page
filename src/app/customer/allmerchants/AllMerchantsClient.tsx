"use client";

import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { useState } from "react";
import DownloadAppModal from "@/components/shared/DownloadAppModal";
import { merchantDetailsModalConfig } from "@/config/content";

interface MerchantCard {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  cashback: string;
  image: string;
  area: string;
  url: string;
}

const allMerchantsData: MerchantCard[] = [
  {
    id: "1",
    name: "Local Bestie Cafe",
    category: "Cafe",
    location: "Auckland Top 10 Resta...",
    rating: 5.0,
    cashback: "23% Cashback",
    image: "/images/local-bestie-cafe.png",
    area: "CBD",
    url: "/merchant/local-bestie-cafe",
  },
  {
    id: "2",
    name: "Sunrise Espresso",
    category: "Cafe",
    location: "Ponsonby, Auckland",
    rating: 4.7,
    cashback: "15% Cashback",
    image: "/images/sunrise-espresso.png",
    area: "CBD",
    url: "/merchant/sunrise-espresso",
  },
  {
    id: "3",
    name: "The Green Fork",
    category: "Vegan Restaurant",
    location: "Mt Eden, Auckland",
    rating: 4.8,
    cashback: "20% Cashback",
    image: "/images/green-fork.png",
    area: "CBD",
    url: "/merchant/the-green-fork",
  },
  {
    id: "4",
    name: "Bamboo House",
    category: "Asian Fusion",
    location: "Newmarket, Auckland",
    rating: 4.9,
    cashback: "18% Cashback",
    image: "/images/bamboo-house.png",
    area: "CBD",
    url: "/merchant/bamboo-house",
  },
  {
    id: "5",
    name: "Ocean Grill",
    category: "Seafood Restaurant",
    location: "Mission Bay, Auckland",
    rating: 4.6,
    cashback: "25% Cashback",
    image: "/images/ocean-grill.png",
    area: "CBD",
    url: "/merchant/ocean-grill",
  },
  {
    id: "6",
    name: "Daily Grind",
    category: "Cafe",
    location: "Britomart, Auckland",
    rating: 4.5,
    cashback: "10% Cashback",
    image: "/images/daily-grind.png",
    area: "CBD",
    url: "/merchant/daily-grind",
  },
  {
    id: "7",
    name: "Harbour View Restaurant",
    category: "Fine Dining",
    location: "Viaduct Harbour, Auckland",
    rating: 4.8,
    cashback: "20% Cashback",
    image: "/images/local-bestie-cafe.png",
    area: "CBD",
    url: "/merchant/harbour-view-restaurant",
  },
  {
    id: "8",
    name: "Corner Bakery",
    category: "Bakery",
    location: "Parnell, Auckland",
    rating: 4.6,
    cashback: "12% Cashback",
    image: "/images/sunrise-espresso.png",
    area: "East",
    url: "/merchant/corner-bakery",
  },
  {
    id: "9",
    name: "Local Bestie Cafe",
    category: "Cafe",
    location: "Auckland Top 10 Resta...",
    rating: 5.0,
    cashback: "23% Cashback",
    image: "/images/local-bestie-cafe.png",
    area: "CBD",
    url: "/merchant/local-bestie-cafe",
  },
  {
    id: "10",
    name: "Sunrise Espresso",
    category: "Cafe",
    location: "Ponsonby, Auckland",
    rating: 4.7,
    cashback: "15% Cashback",
    image: "/images/sunrise-espresso.png",
    area: "CBD",
    url: "/merchant/sunrise-espresso",
  },
  {
    id: "11",
    name: "The Green Fork",
    category: "Vegan Restaurant",
    location: "Mt Eden, Auckland",
    rating: 4.8,
    cashback: "20% Cashback",
    image: "/images/green-fork.png",
    area: "CBD",
    url: "/merchant/the-green-fork",
  },
  {
    id: "12",
    name: "Bamboo House",
    category: "Asian Fusion",
    location: "Newmarket, Auckland",
    rating: 4.9,
    cashback: "18% Cashback",
    image: "/images/bamboo-house.png",
    area: "CBD",
    url: "/merchant/bamboo-house",
  },
];

export default function AllMerchantsClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/customer" className="flex items-center">
              <Image
                src="/images/lb-logo.png"
                alt="Local Bestie logo"
                width={155}
                height={40}
                className="object-contain"
              />
            </Link>
            <button
              className="bg-themecolor hover:bg-[#92253C] text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              Download APP
            </button>
          </div>

          {/* Filter and Search Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-4 mb-6">
            {/* Filter Buttons */}
            <div className="flex gap-3">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Open Now
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span className="text-yellow-400">★</span>4 Stars and Up
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md relative">
              <input
                type="text"
                placeholder="Search for your favourite place"
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-themecolor focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-themecolor text-white p-2 rounded-full hover:bg-[#92253C] transition-colors">
                <IoSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Merchants Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allMerchantsData.map((merchant) => (
              <Link
                key={merchant.id}
                href={merchant.url}
                className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden block"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={merchant.image}
                    alt={merchant.name}
                    fill
                    className="object-cover"
                  />
                  {/* Cashback Badge */}
                  <div className="absolute top-3 right-3 bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {merchant.cashback}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">
                    {merchant.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {merchant.category} • {merchant.location}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {merchant.rating.toFixed(1)}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm ml-auto flex items-center gap-1">
                      <IoLocationSharp className="text-themecolor" />
                      {merchant.area}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm">
              Show 20 more places
            </button>
          </div>
        </div>
      </section>

      {/* Download App Modal */}
      <DownloadAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        config={merchantDetailsModalConfig}
      />
    </div>
  );
}
