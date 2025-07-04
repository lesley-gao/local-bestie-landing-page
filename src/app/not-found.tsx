import Image from "next/image";
import Link from "next/link";

//TODO：add the option to explore the merchants, just uncomment the code

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Logo */}
      <div className="max-w-7xl mx-auto px-6 py-8 w-full">
        <Link href="/" className="clickeffect inline-block">
          <Image
            src="/images/lb-logo.png"
            alt="Local Bestie Logo"
            width={155}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Main 404 Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="mb-8">
            {/* 404 Image */}
            <div className="mb-8">
              <Image
                src="/images/404.jpg"
                alt="Page not found"
                width={350}
                height={280}
                className="mx-auto rounded-lg"
              />
            </div>

            <p className="text-gray-600 text-lg mb-8">
              Oops! The page you're looking for seems to have wandered off.
              {/* Let's get you back to discovering amazing local spots! */}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-themecolor hover:bg-[#92253C] text-white font-semibold px-8 py-3 rounded-lg transition-colors clickeffect"
            >
              Back to Homepage
            </Link>
            {/* <Link
              href="/customer/allmerchants"
              className="border border-themecolor text-themecolor hover:bg-themecolor hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors clickeffect"
            >
              Explore Merchants
            </Link> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            <p>
              Need help? Contact us at{" "}
              <a
                href="mailto:support@localbestie.com"
                className="text-themecolor hover:underline"
              >
                support@localbestie.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
