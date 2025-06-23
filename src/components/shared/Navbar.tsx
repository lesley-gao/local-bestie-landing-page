"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type NavbarConfig = {
  logo: {
    src: string;
    alt: string;
    homeUrl: string;
  };
  switchButton: {
    text: string;
    href: string;
  };
  ctaButton: {
    text: string;
    href: string;
  };
};

type NavbarProps = {
  config: NavbarConfig;
};

export default function Navbar({ config }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white h-20 shadow-sm">
      <nav className="flex mx-auto max-w-7xl items-center justify-between px-4 py-4 md:px-8 h-full">
        <div className="flex items-center">
          <Link href={config.logo.homeUrl}>
            <Image
              src={config.logo.src}
              alt={config.logo.alt}
              width={155}
              height={40}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href={config.switchButton.href}
            className="text-themecolor font-semibold hover:underline underline-offset-2 clickeffect"
          >
            {config.switchButton.text}
          </Link>
          <Link
            href={config.ctaButton.href}
            className="bg-themecolor hover:bg-[#92253C] text-white font-semibold py-2 px-6 rounded clickeffect transition"
          >
            {config.ctaButton.text}
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-themecolor focus:outline-none flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-100 animate-in slide-in-from-top duration-200">
          <div className="space-y-3 pt-3">
            <Link
              href={config.switchButton.href}
              className="block text-themecolor font-semibold py-2 text-center clickeffect transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {config.switchButton.text}
            </Link>
            <Link
              href={config.ctaButton.href}
              className="block bg-themecolor text-white font-semibold py-3 px-4 rounded text-center clickeffect hover:bg-[#92253C] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {config.ctaButton.text}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}