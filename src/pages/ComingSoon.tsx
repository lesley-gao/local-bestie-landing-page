/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ComingSoon() {
  // TODO: All the links below are made up and should be replaced with actual links

  const socialLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/local-bestie/",
      icon: <FaFacebookF />,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/local-bestie/",
      icon: <FaInstagram />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/local-bestie/",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <>
      <Head>
        <title>Local Bestie - We're Launching Soon!</title>
        <meta name="description" content="Local Bestie - Coming soon!" />
      </Head>

      <div className="h-screen flex flex-col">
        <div className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="w-[90vw] max-w-[600px] h-auto">
            <Image
              src="/images/comingsoon.png"
              alt="Launching soon"
              layout="responsive"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* top half */}
        <div className="flex-1 bg-white flex flex-col items-center pt-10 ">
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
        <div className="flex-1 bg-themecolor flex flex-col items-center justify-between text-white py-8">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8">
                We're Launching Soon!
              </h1>

              <div className="flex items-center justify-center gap-8 max-md:flex-col">
                <p className="text-xl md:text-2xl opacity-90">
                  Stay in contact
                </p>

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
            className="mb-20 text-sm font-bold bg-white text-themecolor px-5 py-4 rounded-lg hover:bg-gray-100 clickeffect transition cursor-pointer"
          >
            Back to Homepage
          </Link>

          <div className="text-center">
            <p className="text-white text-sm">© Local Bestie Limited 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}
