import Image from "next/image";

interface Promotion {
  id: number;
  cashback: string;
  terms: string;
}

interface MerchantPromotionsProps {
  promotions: Promotion[];
  setIsModalOpen: (open: boolean) => void;
}

export default function MerchantPromotions({
  promotions,
  setIsModalOpen,
}: MerchantPromotionsProps) {
  return (
    <div className="bg-white p-6 mb-6 border border-black/60 shadow-md -mt-16 relative z-30">
      <div className="border-b-1">
        <h3 className="text-lg font-bold mb-4 text-center">Promotions</h3>
      </div>

      {/* Cashback Offers */}
      <div className="space-y-4 my-6">
        {promotions.map((promo) => (
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
        <p className="font-bold text-lg text-[#1A1A1A] mb-4">
          Unlock more deals!
        </p>
        <button
          className="bg-themecolor hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors clickeffect w-full"
          onClick={() => setIsModalOpen(true)}
        >
          Get My Cashback
        </button>
      </div>
    </div>
  );
}
