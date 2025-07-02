import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Local Bestie",
  description:
    "Local Bestie's privacy policy outlining how we collect, use, and protect your personal information.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
