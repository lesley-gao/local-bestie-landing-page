"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "changes", title: "Changes to This Policy" },
    {
      id: "why-collect",
      title: "Who Do We Collect Your Personal Information From",
    },
    { id: "how-use", title: "How We Use Your Personal Information" },
    { id: "disclosing", title: "Disclosing Your Personal Information" },
    { id: "protecting", title: "Protecting Your Personal Information" },
    {
      id: "accessing",
      title: "Accessing And Correcting Your Personal Information",
    },
    { id: "internet-use", title: "Internet Use" },
    { id: "cookies", title: "Cookies" },
    { id: "contacting", title: "Contact Us" },
  ];

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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: July 2, 2025</p>
        </div>

        <div className="border-t-1 border-gray-700 mb-8"></div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 p-4">
              <h3 className="text-xl font-semibold  mb-4">
                Table of Contents
              </h3>
              <ul className="space-y-3">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleTocClick(item.id)}
                      className=" text-gray-700 hover:text-themecolor hover:font-semibold transition-colors block text-left w-full"
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
            <section id="introduction" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "introduction"
                )}`}
              >
                Introduction
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                Local Bestie Limited (we, us, our) complies with the New Zealand
                Privacy Act 2020 (the Act) when dealing with personal
                information. Personal information is information about an
                identifiable individual (a natural person).
              </p>
              <p className="leading-relaxed text-gray-700 px-4">
                This policy sets out how we will collect, use, disclose and
                protect your personal information.
              </p>
              <p className="leading-relaxed text-gray-700 px-4">
                This policy does not limit or exclude any of your rights under
                the Act. If you wish to seek further information on the Act, see
                www.privacy.org.nz.
              </p>
            </section>

            <section id="changes" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "changes"
                )}`}
              >
                Changes to This Policy
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                We may change this policy by uploading a revised policy onto the
                website. The change will apply from the date that we upload the
                revised policy.
              </p>
              <p className="leading-relaxed text-gray-700 px-4">
                This policy was last updated on{" "}
                <Link
                  href="/privacypolicy"
                  className="text-themecolor hover:underline"
                >
                  https://localbestie.com/privacypolicy
                </Link>
                .
              </p>
            </section>

            <section id="why-collect" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "why-collect"
                )}`}
              >
                Who Do We Collect Your Personal Information From
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                We collect personal information about you from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
                <li>
                  You, when you provide that personal information to us,
                  including via the website and any related service, through any
                  registration or subscription process, through any contact with
                  us (e.g. telephone call or email), or when you buy or use our
                  services and products
                </li>
                <li>
                  Third parties where you have authorised this or the
                  information is publicly available.
                </li>
              </ul>
              <p className="leading-relaxed text-gray-700 px-4">
                If possible, we will collect personal information from you
                directly.
              </p>
            </section>

            <section id="how-use" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "how-use"
                )}`}
              >
                How We Use Your Personal Information
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                We will use your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 px-4">
                <li>To verify your identity</li>
                <li>To provide services and products to you</li>
                <li>
                  To market our services and products to you, including
                  contacting you electronically (e.g. by text or email for this
                  purpose)
                </li>
                <li>
                  To improve the services and products that we provide to you
                </li>
                <li>To undertake credit checks of you (if necessary)</li>
                <li>
                  To bill you and to collect money that you owe us, including
                  authorising and processing credit card transactions
                </li>
                <li>
                  To respond to communications from you, including a complaint
                </li>
                <li>
                  To conduct research and statistical analysis (on an anonymised
                  basis)
                </li>
                <li>
                  To protect and/or enforce our legal rights and interests,
                  including defending any claim
                </li>
                <li>For any other purpose authorised by you or the Act.</li>
              </ul>
            </section>

            <section id="disclosing" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "disclosing"
                )}`}
              >
                Disclosing Your Personal Information
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                We may disclose your personal information to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 px-4">
                <li>Another company within our group</li>
                <li>
                  Any business that supports our services and products,
                  including any person that hosts or maintains any underlying IT
                  system or data centre that we use to provide the website or
                  other services and products
                </li>
                <li>
                  A credit reference agency for the purpose of credit checking
                  you
                </li>
                <li>
                  Other third parties (for anonymised statistical information)
                </li>
                <li>
                  A person who can require us to supply your personal
                  information (e.g. a regulatory authority)
                </li>
                <li>
                  Any other person authorised by the Act or another law (e.g. a
                  law enforcement agency)
                </li>
                <li>Any other person authorised by you.</li>
              </ul>
              <p className="leading-relaxed text-gray-700 px-4">
                A business that supports our services and products may be
                located outside New Zealand. This may mean your personal
                information is held and processed outside New Zealand.
              </p>
            </section>

            <section id="protecting" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "protecting"
                )}`}
              >
                Protecting Your Personal Information
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                We will take reasonable steps to keep your personal information
                safe from loss, unauthorised activity, or other misuse.
              </p>
            </section>

            <section id="accessing" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "accessing"
                )}`}
              >
                Accessing and Correcting Your Personal Information
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                Subject to certain grounds for refusal set out in the Act, you
                have the right to access your readily retrievable personal
                information that we hold and to request a correction to your
                personal information. Before you exercise this right, we will
                need evidence to confirm that you are the individual to whom the
                personal information relates.
              </p>
              <p className="leading-relaxed text-gray-700 px-4">
                In respect of a request for correction, if we think the
                correction is reasonable and we are reasonably able to change
                the personal information, we will make the correction. If we do
                not make the correction, we will take reasonable steps to note
                on the personal information that you requested the correction.
              </p>
              <p className="leading-relaxed text-gray-700 px-4">
                If you want to exercise either of the above rights, email us at{" "}
                <a
                  href="mailto:info@localbestie.com"
                  className="text-themecolor hover:underline"
                >
                  info@localbestie.com
                </a>
                . Your email should provide evidence of who you are and set out
                the details of your request (e.g. the personal information, or
                the correction, that you are requesting).
              </p>
              <p className="leading-relaxed text-gray-700 px-4">
                We may charge you our reasonable costs of providing to you
                copies of your personal information or correcting that
                information.
              </p>
            </section>

            <section id="internet-use" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "internet-use"
                )}`}
              >
                Internet Use
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                While we take reasonable steps to maintain secure internet
                connections, if you provide us with personal information over
                the internet, the provision of that information is at your own
                risk.
              </p>
              <p className="leading-relaxed text-gray-700 px-4">
                If you post your personal information on the website's message
                board, you acknowledge and agree that the information you post
                is publicly available.
              </p>
              <p className="leading-relaxed text-gray-700 px-4">
                If you follow a link on our website to another site, the owner
                of that site will have its own privacy policy relating to your
                personal information. We suggest you review that site's privacy
                policy before you provide personal information.
              </p>
            </section>

            <section id="cookies" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "cookies"
                )}`}
              >
                Cookies
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                We use cookies (an alphanumeric identifier that we transfer to
                your computer's hard drive so that we can recognise your
                browser) to monitor your use of the website. You may disable
                cookies by changing the settings on your browser, although this
                may mean that you cannot use all of the features of the website.
              </p>
            </section>

            <section id="contacting" className="space-y-4">
              <h2
                className={`text-xl font-semibold p-4 rounded ${getH2BgClass(
                  "contacting"
                )}`}
              >
                Contact Us
              </h2>
              <p className="leading-relaxed text-gray-700 px-4">
                If you have any questions about this privacy policy, our privacy
                practices, or if you would like to request access to, or
                correction of, your personal information, you can contact us at{" "}
                <a
                  href="mailto:info@localbestie.com"
                  className="text-themecolor hover:underline"
                >
                  info@localbestie.com
                </a>
                .
              </p>
            </section>

            {/* Back to Homepage Button */}
            <div className="text-center pt-8">
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
