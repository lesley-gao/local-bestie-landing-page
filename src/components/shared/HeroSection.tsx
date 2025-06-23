"use client";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Image from "next/image";

export type HeroContent = {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

type HeroSectionProps = {
  content: HeroContent;
};

const handleJoinClick = (e: React.MouseEvent) => {
  e.preventDefault();
  const downloadSection = document.getElementById("download");
  if (downloadSection) {
    downloadSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="bg-themecolor text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-3/5 text-left space-y-6">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: content.title }}
          />
          <p className="sm:text-lg text-white/90">{content.subtitle}</p>
          <div className="flex flex-row justify-between sm:justify-start gap-3 sm:gap-6 pt-2">
            <a
              onClick={handleJoinClick}
              href={content.primaryButton.href}
              className="inline-block font-semibold bg-white text-themecolor px-6 sm:px-8 py-3 rounded-md hover:opacity-90 clickeffect transition cursor-pointer"
            >
              {content.primaryButton.text}
            </a>
            <a
              href={content.secondaryButton.href}
              className="inline-flex items-center justify-center gap-3 text-white/90 px-6 sm:px-8 py-3 rounded-md hover:text-white hover:border clickeffect transition"
            >
              <AiOutlinePlayCircle className="text-2xl" />
              {content.secondaryButton.text}
            </a>
          </div>
        </div>

        <div className="w-full sm:w-2/5 flex justify-center sm:justify-end mt-8 sm:mt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[3/2] sm:aspect-3/4 rounded-2xl overflow-hidden">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 360px, 400px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}