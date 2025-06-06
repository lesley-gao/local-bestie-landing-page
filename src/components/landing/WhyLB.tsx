import Image from "next/image";

const features = [
  {
    title: "Smart visibility",
    description:
      "Get discovered by local customers actively looking for services like yours.",
    image: "/images/smart-visibility.jpg",
  },
  {
    title: "Dynamic offers",
    description:
      "Use AI-powered pricing to attract customers during slow hours.",
    image: "/images/dynamic-offers.jpg",
  },
  {
    title: "Cashback loyalty",
    description:
      "Keep them coming back with our points-based cashback rewards system.",
    image: "/images/cashback-loyalty.jpg",
  },
];

export default function WhyLB() {
  return (
    <section className="py-20 sm:py-24 px-6 text-center md:px-8 lg:px-24">
      <h2 className="text-4xl sm:text-3xl font-bold mb-4">
        Why Local Bestie works
      </h2>
      <p className="text-themecolor text-xl sm:text-lg font-semibold mb-10">
        Built for local businesses like yours
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-full max-w-[340px] aspect-3/2 rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full max-w-[340px] space-y-2">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm sm:text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
