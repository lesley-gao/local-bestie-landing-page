import Image from "next/image";

export type DownloadLink = {
  platform: string;
  url: string;
  image: string;
  alt: string;
};

export type DownloadConfig = {
  title: string;
  description: string;
  links: DownloadLink[];
};

type DownloadSectionProps = {
  config: DownloadConfig;
  variant?: "business" | "customer";
};

export default function DownloadSection({
  config,
  variant = "customer",
}: DownloadSectionProps) {
  const isCustomer = variant === "customer";

  return (
    <section
      id="download"
      className={`py-20 sm:py-24 ${isCustomer ? "bg-themecolor" : "bg-white"}`}
    >
      <div
        className={`rounded-2xl py-12 px-6 text-center max-w-6xl mx-4 sm:mx-auto ${
          isCustomer ? "bg-white " : "bg-themecolor "
        }`}
      >
        <h2
          className={`text-4xl md:text-3xl font-bold mb-4 ${
            isCustomer ? " text-black" : "  text-white"
          }`}
        >
          {config.title}
        </h2>
        <p
          className={`text-lg mb-6 ${
            isCustomer ? "text-themecolor" : "text-white"
          }`}
        >
          {config.description}
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {config.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="clickeffect"
            >
              <Image
                src={link.image}
                alt={link.alt}
                width={160}
                height={48}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
