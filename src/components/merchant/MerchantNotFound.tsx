import Image from "next/image";
import Link from "next/link";
import DownloadAppModal from "@/components/shared/DownloadAppModal";
import { merchantDetailsModalConfig } from "@/config/content";

interface MerchantNotFoundProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export default function MerchantNotFound({
  isModalOpen,
  setIsModalOpen,
}: MerchantNotFoundProps) {
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
