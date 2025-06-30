"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export type DownloadAppConfig = {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
  downloadLinks: {
    appStore: string;
    googlePlay: string;
  };
  qrCodes: {
    appStore: string;
    googlePlay: string;
  };
};

type DownloadAppModalProps = {
  isOpen: boolean;
  onClose: () => void;
  config: DownloadAppConfig;
};

export default function DownloadAppModal({
  isOpen,
  onClose,
  config,
}: DownloadAppModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative bg-gradient-to-br from-[#E7E3E2] to-white rounded-3xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:cursor-pointer hover:bg-gray-50 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-10 lg:p-16">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            {config.title}
          </h1>

          <div className="flex">
            <div className="flex flex-col">
              <div className="max-w-md text-left">
                <p className="text-lg text-gray-700 mb-12 font-medium">
                  {config.subtitle}
                </p>
              </div>

              {/* Download Buttons and QR Codes Groups*/}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* App Store Group */}
                <div className="flex flex-col items-center">
                  <a
                    href={config.downloadLinks.appStore}
                    className="block hover:opacity-90 transition-opacity mb-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/app-store-download.png"
                      alt="Download on the App Store"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </a>
                  <div className="text-center hidden md:block">
                    <div className="bg-white p-3 rounded-lg shadow-sm mb-2 border">
                      <Image
                        src={config.qrCodes.appStore}
                        alt="App Store QR Code"
                        width={140}
                        height={140}
                        className="w-[140px] h-[140px]"
                      />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      App Store
                    </p>
                  </div>
                </div>

                {/* Google Play Group */}
                <div className="flex flex-col items-center">
                  <a
                    href={config.downloadLinks.googlePlay}
                    className="block hover:opacity-90 transition-opacity mb-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/google-play-download.png"
                      alt="Get it on Google Play"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </a>

                  <div className="text-center hidden md:block">
                    <div className="bg-white p-3 rounded-lg shadow-sm mb-2 border">
                      <Image
                        src={config.qrCodes.googlePlay}
                        alt="Google Play QR Code"
                        width={140}
                        height={140}
                        className="w-[140px] h-[140px]"
                      />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      Google Play
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex items-end justify-center lg:justify-end -mb-12 lg:-mb-20">
              <div className="relative max-w-sm w-full ">
                <Image
                  src={config.image.src}
                  alt={config.image.alt}
                  width={360}
                  height={480}
                  className="w-auto h-auto max-h-[500px] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
