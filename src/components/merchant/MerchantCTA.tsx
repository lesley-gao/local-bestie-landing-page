import Image from "next/image";

interface MerchantCTAProps {
  heroImage: string;
  setIsModalOpen: (open: boolean) => void;
}

export default function MerchantCTA({
  heroImage,
  setIsModalOpen,
}: MerchantCTAProps) {
  return (
    <div className="relative overflow-hidden mb-6">
      <Image
        src={heroImage}
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
  );
}
