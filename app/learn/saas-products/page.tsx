import type { Metadata } from "next";
import { explainerPages } from "@/data/site";
import { ExplainerPage } from "@/components/sections/ExplainerPage";

export const metadata: Metadata = {
  title: "SaaS Products Explained",
  description:
    "A simple guide to SaaS products for founders, business owners, and everyday teams."
};

export default function SaaSProductsExplainerPage() {
  return <ExplainerPage page={explainerPages.saas} />;
}
