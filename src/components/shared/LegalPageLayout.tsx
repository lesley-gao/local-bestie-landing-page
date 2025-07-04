"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, ReactNode } from "react";

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalPageLayoutProps {
  pageTitle: string;
  lastUpdated: string;
  tableOfContents: TableOfContentsItem[];
  sections: LegalSection[];
}

export default function LegalPageLayout({
  pageTitle,
  lastUpdated,
  tableOfContents,
  sections,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleTocClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getH2BgClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "bg-[#CC1543] text-white"
      : "bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          <div className="lg:col-span-1">
            <Link href="/" className="clickeffect">
              <Image
                src="/images/lb-logo.png"
                alt="Local Bestie Logo"
                width={155}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Title Section */}
        <div className="text-left mb-8 space-y-2">
          <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-gray-600">
            <b>Last Updated:</b> {lastUpdated}
          </p>
          <p className="text-gray-600">
            <b>Platform Operator:</b> Local Bestie Limited
          </p>
          <p className="text-gray-600">
            <b>Platform:</b> Local Bestie mobile app and website
          </p>
        </div>

        <div className="border-t-1 border-gray-700 mb-8"></div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 max-sm:gap-10">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 p-4">
              <h3 className="text-xl font-semibold mb-4">Table of Contents</h3>
              <ul className="space-y-3">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleTocClick(item.id)}
                      className="text-gray-700 hover:text-themecolor hover:font-semibold transition-colors block text-left w-full"
                    >
                      {index + 1}. {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-4">
                <h2
                  className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                    section.id
                  )}`}
                >
                  {section.title}
                </h2>
                <div className="space-y-4">{section.content}</div>
              </section>
            ))}

            {/* Back to Homepage Button */}
            <div className=" justify-center items-center flex flex-col gap-4 my-10">
              <Link
                href="/"
                className="bg-themecolor hover:bg-[#92253C] text-white font-semibold px-8 py-3 rounded transition-colors inline-block clickeffect"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
