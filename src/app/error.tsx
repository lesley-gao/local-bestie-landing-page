"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

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

      {/* Main Error Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-themecolor mb-4">Oops!</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We encountered an unexpected error. Don't worry, our team has been
              notified and we're working to fix it!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="bg-themecolor hover:bg-[#92253C] text-white font-semibold px-8 py-3 rounded-lg transition-colors clickeffect"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="border border-themecolor text-themecolor hover:bg-themecolor hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors clickeffect"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            <p>
              Still having trouble? Contact us at{" "}
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
