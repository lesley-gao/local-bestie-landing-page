import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Local Bestie",
  description:
    "Local Bestie's terms and conditions outlining the rules and guidelines for using our platform and services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
