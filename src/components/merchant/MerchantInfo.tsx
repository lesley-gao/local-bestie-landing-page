import Link from "next/link";
import {
  IoLocationSharp,
  IoCall,
  IoHeart,
  IoStar,
  IoChevronForward,
} from "react-icons/io5";
import { FiHome } from "react-icons/fi";

interface MerchantData {
  name: string;
  rating: number;
  distance: string;
  likes: number;
  status: string;
  hours: string;
  address: string;
  phone: string;
}

interface MerchantInfoProps {
  merchant: MerchantData;
}

export default function MerchantInfo({ merchant }: MerchantInfoProps) {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 ml-10 text-gray-600">
        <Link href="/customer">
          <FiHome className="w-5 h-5 hover:text-themecolor transition-colors" />
        </Link>
        <IoChevronForward className="w-4 h-4" />
        <Link href="/customer/allmerchants">
          <p className="hover:text-themecolor transition-colors hover:underline underline-offset-3">
            All Merchants
          </p>
        </Link>
      </div>

      {/* Merchant Details */}
      <div className="p-10 pt-0">
        <h1 className="text-4xl font-bold mb-4">{merchant.name}</h1>

        {/* Rating and Stats */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">{merchant.rating.toFixed(1)}</span>
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
    </>
  );
}
