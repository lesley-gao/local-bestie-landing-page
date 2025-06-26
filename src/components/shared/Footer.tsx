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

  return (
    <footer className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:hidden items-start gap-6">
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

          <div className="flex justify-between w-full">
            <div className="flex gap-6 text-sm font-semibold text-black">
              <Link href="#" className="clickeffect transition hover:underline">
                About
              </Link>
              <Link href="#" className="clickeffect transition hover:underline">
                Terms
              </Link>
              <Link href="#" className="clickeffect transition hover:underline">
                Contact Us
              </Link>
            </div>

            <div className="flex gap-4 text-themecolor text-lg">
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
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-3 sm:items-center">
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

          <div className="flex gap-6 text-sm font-semibold text-black justify-center">
            <Link
              href="#"
              className="clickeffect transition hover:underline underline-offset-2"
            >
              About
            </Link>
            <Link
              href="#"
              className="clickeffect transition hover:underline  underline-offset-2"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="clickeffect transition hover:underline  underline-offset-2"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex gap-4 text-themecolor text-lg justify-end">
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
        </div>
      </div>
    </footer>
  );
}
