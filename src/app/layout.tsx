import type { Metadata } from "next";
import "./globals.css";

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
      <body className="pt-20">{children}</body>
    </html>
  );
}
