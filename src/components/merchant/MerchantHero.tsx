import Image from "next/image";

interface MerchantHeroProps {
  heroImage: string;
  name: string;
}

export default function MerchantHero({ heroImage, name }: MerchantHeroProps) {
  return (
    <div className="relative h-100 w-full">
      <Image
        src={heroImage}
        alt={name}
        fill
        className="object-cover object-top"
        priority
      />
      {/* Dark overlay filter */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}
