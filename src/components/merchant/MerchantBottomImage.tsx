import Image from "next/image";

interface MerchantBottomImageProps {
  heroImage: string;
  altText?: string;
}

export default function MerchantBottomImage({
  heroImage,
  altText = "Merchant featured image",
}: MerchantBottomImageProps) {
  return (
    <div className="w-full h-20 md:h-30 relative overflow-hidden mt-10">
      <Image
        src={heroImage}
        alt={altText}
        fill
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}
