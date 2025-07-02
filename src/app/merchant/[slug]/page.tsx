"use client";

import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp, IoCall, IoHeart, IoStar } from "react-icons/io5";
import { FiHome } from "react-icons/fi";

interface MerchantDetailsProps {
  params: {
    slug: string;
  };
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
    heroImage: "/images/local-bestie-cafe.png",
    menuImages: ["/images/cashback-loyalty.jpg", "/images/dynamic-offers.jpg"],
    promotions: [
      { id: 1, cashback: "23%", terms: "*Terms & conditions apply." },
      { id: 2, cashback: "22%", terms: "*Terms & conditions apply." },
    ],
  },
};

export default function MerchantDetails({ params }: MerchantDetailsProps) {
  const merchant = merchantData[params.slug as keyof typeof merchantData];

  if (!merchant) {
    return (
      <div className="relative h-screen overflow-hidden">
        <div className="flex-1 bg-white flex flex-col items-left mt-10 mx-20">
          <Link href="/">
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
        />
        {/* Home Button */}
        <Link
          href="/customer"
          className="absolute top-4 left-4 bg-white/80 p-4 rounded-full hover:bg-white transition-colors"
        >
          <FiHome className="w-8 h-8 text-gray-500" />
        </Link>

        {/* Floating Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-6 py-3 font-medium border-b-2 border-themecolor text-themecolor"
              >
                Overview
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 font-medium border-b-2 border-transparent text-gray-600 hover:text-gray-800"
              >
                Menu
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("reviews")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 font-medium border-b-2 border-transparent text-gray-600 hover:text-gray-800"
              >
                Reviews
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Merchant Info */}
              <div className="p-6">
                <h1 className="text-3xl font-bold text-black mb-4">
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
                  <span className="flex items-center gap-1 text-blue-600">
                    <IoLocationSharp className="w-4 h-4" />
                    {merchant.distance}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <IoHeart className="w-4 h-4" />
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
              <div id="menu" className="p-6">
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
              <div id="reviews" className="p-6">
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

                {/* Sample Review Photo */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={merchant.heroImage}
                    alt="Review photo"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Promotions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Promotions</h3>

              {/* Cashback Offers */}
              <div className="space-y-4 mb-6">
                {merchant.promotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="border border-gray-200 rounded-lg p-4"
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
                          Discount
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{promo.terms}</p>
                  </div>
                ))}
              </div>

              {/* Unlock Deals Section */}
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <Image
                  src="/images/lock.jpg"
                  alt="unlock more deals"
                  width={90}
                  height={90}
                  className="object-contain mb-4 mx-auto"
                />
                <h4 className="font-bold text-lg mb-2">
                  Local eats. Instant cashback.
                </h4>
                <p className="font-bold mb-4">Unlock more deals!</p>
                <button className="bg-themecolor hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors clickeffect w-full">
                  Start Saving Money Now!
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Map placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
