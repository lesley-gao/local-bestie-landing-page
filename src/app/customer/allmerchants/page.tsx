import { Metadata } from "next";
import AllMerchantsClient from "./AllMerchantsClient";

export const metadata: Metadata = {
  title: "All Merchants | Local Bestie",
  description:
    "Discover all local merchants on Local Bestie. Find restaurants, cafes, bars, and more with exclusive cashback deals.",
};

export default function AllMerchantsPage() {
  return <AllMerchantsClient />;
}
