import Image from "next/image";

export default function DownloadSection() {
  // All the links below are made up and should be replaced with actual links
  const downloadLinks = [
    {
      platform: "Google Play",
      url: "https://play.google.com/store/lb-partner-app-download",
      image: "/images/google-play-download.png",
      alt: "Get it on Google Play",
    },
    {
      platform: "App Store",
      url: "https://www.apple.com/nz/app-store/lb-partner-app-download",
      image: "/images/app-store-download.png",
      alt: "Download on the App Store",
    },
  ];

  return (
    <section className="bg-themecolor rounded-2xl py-12 px-6 text-white text-center max-w-6xl mx-4 sm:mx-auto my-20 sm:my-24">
      <h2 className="text-4xl md:text-3xl font-bold mb-4">Meet more locals</h2>
      <p className="text-white/90 text-lg mb-6">
        Download the App to connect with customers today!
      </p>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {downloadLinks.map((link, index) => (
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
    </section>
  );
}
