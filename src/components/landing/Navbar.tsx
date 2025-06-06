"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 z-50 bg-white h-20">
            <nav className="flex mx-auto max-w-7xl items-center justify-between px-4 py-4 md:px-6">
                {/* Logo */}
                <Image src="/images/lb-logo.png" alt="Local Bestie logo" width={155} height={40} />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#" className="text-themecolor font-semibold hover:underline">Log In</Link>
                    <Link
                        href="#"
                        className="bg-themecolor hover:bg-[#92253C] text-white font-semibold py-2 px-5 rounded"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Hamburger Icon */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-themeColor focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <Link href="#" className="block text-[#AF2F4B] mb-2">Log In</Link>
                    <Link
                        href="#"
                        className="block bg-[#AF2F4B] text-white font-medium py-2 px-4 rounded w-fit"
                    >
                        Join Now
                    </Link>
                </div>
            )}
        </header>
    );
}
