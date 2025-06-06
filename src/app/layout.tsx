import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";

export const metadata: Metadata = {
  title: "Local Bestie",
  description: "AI-powered marketing for local businesses",
  icons: {
    icon: "/images/lb-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
