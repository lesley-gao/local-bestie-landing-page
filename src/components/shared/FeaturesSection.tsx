import Image from "next/image";

export type FeatureItem = {
  title: string;
  description: string;
  image: string;
};

type FeaturesSectionProps = {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  variant?: "business" | "customer";
};

export default function FeaturesSection({
  title,
  subtitle,
  features,
  variant = "business"
}: FeaturesSectionProps) {
  return (
    <section className="py-20 sm:py-24 px-6 text-center md:px-8 lg:px-24">
<h2 className={`text-4xl sm:text-3xl font-bold ${subtitle ? "mb-4" : "mb-10"}`}>{title}</h2>
      {subtitle && (
        <p className="text-themecolor text-xl sm:text-lg font-semibold mb-10">
          {subtitle}
        </p>
      )}

      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 ${
          variant === "customer"
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-3"
        } gap-10 md:gap-6 lg:gap-8`}
      >
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="w-full max-w-[340px] space-y-2">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm sm:text-md text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}