import Image from "next/image";
import Link from "next/link";

interface MerchantCard {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  cashback: string;
  image: string;
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
    image: "/images/feature-img.jpg",
    url: "/merchant/local-bestie-cafe",
  },
  {
    id: "2",
    name: "Totally Chicken",
    category: "Cafe • Spicy",
    location: "Auckland Top 10 Resta...",
    rating: 5.0,
    cashback: "30% Cashback",
    image: "/images/cashback-loyalty.jpg",
    url: "/merchant/totally-chicken",
  },
  {
    id: "3",
    name: "Shanghai Restaurant",
    category: "Cafe • Spicy",
    location: "Auckland Top 10 Resta...",
    rating: 5.0,
    cashback: "30% Cashback",
    image: "/images/dynamic-offers.jpg",
    url: "/merchant/shanghai-restaurant",
  },
  {
    id: "4",
    name: "Hot Duke Hotpot",
    category: "Cafe • Spicy",
    location: "Auckland Top 10 Resta...",
    rating: 5.0,
    cashback: "15% Cashback",
    image: "/images/smart-visibility.jpg",
    url: "/merchant/hot-duke-hotpot",
  },
  {
    id: "5",
    name: "Totally Chicken",
    category: "Cafe • Spicy",
    location: "Auckland Top 10 Resta...",
    rating: 5.0,
    cashback: "30% Cashback",
    image: "/images/business-hero-img.jpg",
    url: "/merchant/totally-chicken-2",
  },
  {
    id: "6",
    name: "Shanghai Restaurant",
    category: "Cafe • Spicy",
    location: "Auckland Top 10 Resta...",
    rating: 5.0,
    cashback: "30% Cashback",
    image: "/images/feature-img.jpg",
    url: "/merchant/shanghai-restaurant-2",
  },
];

export default function MerchantsSection() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 ">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-black mb-8">
            Who's on Local Bestie?
          </h2>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">
              See the local favourites already on board
            </p>
            <button className="bg-themecolor hover:bg-[#92253C] text-white font-semibold px-8 py-3 rounded-lg transition-colors clickeffect">
              Explore More
            </button>
          </div>
        </div>

        {/* Merchants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {merchantsData.map((merchant) => (
            <Link
              key={merchant.id}
              href={merchant.url}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow clickeffect overflow-hidden block"
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
                <h3 className="text-lg font-semibold text-black mb-1">
                  {merchant.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {merchant.category} • {merchant.location}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-black">
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
                  <span className="text-sm text-blue-600 ml-auto">📍 CBD</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
