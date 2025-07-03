import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

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

const merchantsData: MerchantCard[] = [
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
];

export default function MerchantsSection() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 ">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-8">
            Who's on Local Bestie?
          </h2>
          <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
            <p className="font-bold text-lg max-sm:text-base max-sm:mb-4 max-sm:text-left">
              See the local favourites already on board
            </p>
            <Link
              href="/customer/allmerchants"
              className="bg-themecolor hover:bg-[#92253C] text-white font-semibold px-8 py-3 rounded-lg transition-colors clickeffect max-sm:w-full inline-block text-center"
            >
              Explore More
            </Link>
          </div>
        </div>

        {/* Merchants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {merchantsData.map((merchant) => (
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
      </div>
    </section>
  );
}
