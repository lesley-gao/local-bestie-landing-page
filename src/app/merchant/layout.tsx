import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merchant Details | Local Bestie",
  description:
    "Discover local merchants, view menus, read reviews, and unlock exclusive cashback deals with Local Bestie.",
};

export default function MerchantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
