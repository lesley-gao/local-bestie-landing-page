"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export type ContactSalesConfig = {
  title: string;
  subtitle?: string;
  description: string;
  email: string;
  buttonText: string;
  closeButtonText?: string;
  image?: {
    src: string;
    alt: string;
  };
};

type ContactSalesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  config: ContactSalesConfig;
};

export default function ContactSalesModal({
  isOpen,
  onClose,
  config,
}: ContactSalesModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  const {
    title,
    subtitle,
    description,
    email,
    buttonText,
    closeButtonText = "Close",
    image,
  } = config;

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      setIsVisible(true);
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
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
        className={`bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-gray-400 transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Content */}
          <div className="flex-1 p-10">
            {/* Header & description */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {title}
                </h2>
                {subtitle && <p className="text-gray-600">{subtitle}</p>}
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors ml-4 flex-shrink-0"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
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
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

            {/* Email Display */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Contact our sales team:
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-themecolor">{email}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(email)}
                  className="text-xs text-gray-500 hover:text-gray-700 underline"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleEmailClick}
                className="flex-1 bg-themecolor text-white px-6 py-3 rounded-md font-semibold hover:bg-[#92253C] clickeffect transition"
              >
                {buttonText}
              </button>
              <button
                onClick={handleClose}
                className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 clickeffect transition"
              >
                {closeButtonText}
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-80 bg-gray-50 flex items-center justify-center">
            {image ? (
              <div className="relative w-full h-64 md:h-full min-h-[300px] rounded-r-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-64 md:h-full min-h-[300px] text-gray-400">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
