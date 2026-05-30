import type { Metadata } from "next";
import { explainerPages } from "@/data/site";
import { ExplainerPage } from "@/components/sections/ExplainerPage";

export const metadata: Metadata = {
  title: "Map and Location Systems Explained",
  description:
    "A simple guide to map and location systems for business owners, operators, and everyday teams."
};

export default function MapLocationSystemsExplainerPage() {
  return <ExplainerPage page={explainerPages.maps} />;
}
