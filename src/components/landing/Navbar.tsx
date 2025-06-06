"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white h-20 shadow-sm">
      <nav className="flex mx-auto max-w-7xl items-center justify-between px-4 py-4 md:px-8 h-full">
        <div className="flex items-center">
          <Image
            src="/images/lb-logo.png"
            alt="Local Bestie logo"
            width={155}
            height={40}
            className="object-contain"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-themecolor font-semibold hover:underline clickeffect"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="bg-themecolor hover:bg-[#92253C] text-white font-semibold py-2 px-6 rounded clickeffect transition"
          >
            Join Now
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
              href="#"
              className="block text-themecolor font-semibold py-2 text-center clickeffect transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="#"
              className="block bg-themecolor text-white font-semibold py-3 px-4 rounded text-center clickeffect hover:bg-[#92253C] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}