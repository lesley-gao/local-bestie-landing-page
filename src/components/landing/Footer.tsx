import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-8 px-4 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">

          <Image
            src="/images/lb-logo.png"
            alt="Local Bestie Logo"
            width={156}
            height={40}
          />

          <p className="text-sm text-black font-semibold">© Local Bestie Limited 2025</p>
        </div>

        {/* Center: Nav Links */}
        <div className="flex gap-6 text-sm font-semibold text-black">
          <Link href="#">About</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Terms</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-themeColor text-lg">
          <a href="#" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
