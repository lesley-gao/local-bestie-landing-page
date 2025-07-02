import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // TODO: All the links below are made up and should be replaced with actual links
  const socialLinks = [
    {
      platform: "Facebook",
      url: "#",
      icon: <FaFacebookF />,
    },
    {
      platform: "Instagram",
      url: "#",
      icon: <FaInstagram />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/local-bestie/",
      icon: <FaLinkedinIn />,
    },
  ];

  const navigationLinks = [
    { label: "About", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "/privacypolicy" },
    // { label: "Contact Us", href: "#" },
  ];

  // Reusable components
  const LogoSection = () => (
    <div className="flex flex-col items-start gap-2">
      <Image
        src="/images/lb-logo.png"
        alt="Local Bestie Logo"
        width={156}
        height={40}
      />
      <p className="text-sm text-black font-semibold">
        © Local Bestie Limited {currentYear}
      </p>
    </div>
  );

  const NavigationLinks = ({ className = "" }: { className?: string }) => (
    <div className={`flex gap-6 text-sm font-semibold text-black ${className}`}>
      {navigationLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="clickeffect transition hover:underline underline-offset-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  const SocialLinks = ({ className = "" }: { className?: string }) => (
    <div className={`flex gap-4 text-themecolor text-lg ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.platform}
          className="hover:text-black/80 clickeffect transition"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="flex flex-col sm:hidden items-start gap-6">
          <LogoSection />
          <div className="flex justify-between w-full">
            <NavigationLinks />
            <SocialLinks />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid sm:grid-cols-3 sm:items-center">
          <LogoSection />
          <NavigationLinks className="justify-center" />
          <SocialLinks className="justify-end" />
        </div>
      </div>
    </footer>
  );
}
