import Image from "next/image";

interface MerchantMenuProps {
  menuImages: string[];
}

export default function MerchantMenu({ menuImages }: MerchantMenuProps) {
  return (
    <div id="menu" className="px-10 py-6">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuImages.map((image, index) => (
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
  );
}
