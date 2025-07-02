import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ComingSoon() {
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
    <>
      <div className="h-screen flex flex-col">
        <div
          className="absolute top-1/2 left-1/2 z-50"
          style={{ transform: "translate(-50%, calc(-100% + 20px))" }}
        >
          <div className="w-[90vw] max-w-[500px] h-auto">
            <Image
              src="/images/comingsoon.png"
              alt="Launching soon"
              layout="responsive"
              width={500}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* top half */}
        <div className="flex-1 bg-white flex flex-col items-left pt-10 px-20">
          <Link href="/">
            <Image
              src="/images/lb-logo.png"
              alt="Local Bestie Logo"
              width={150}
              height={40}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* bottom half */}
        <div className="flex-1 bg-themecolor flex flex-col items-center justify-between text-white pt-10">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl  font-bold mb-8">
                We're Launching Soon!
              </h1>

              <div className="flex items-center justify-center gap-8 max-md:flex-col">
                <p className="text-xl md:text-xl opacity-90">Stay in contact</p>

                <div className="flex justify-center items-center gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      className="w-12 h-12 border-2 rounded-full flex items-center justify-center text-white hover:text-black/80 clickeffect transition cursor-pointer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="mb-20 mt-5 font-bold bg-white text-themecolor px-5 py-4 rounded-lg hover:bg-gray-100 clickeffect transition cursor-pointer"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
