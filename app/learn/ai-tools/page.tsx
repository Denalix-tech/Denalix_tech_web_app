import type { Metadata } from "next";
import { explainerPages } from "@/data/site";
import { ExplainerPage } from "@/components/sections/ExplainerPage";

export const metadata: Metadata = {
  title: "AI Tools Explained",
  description:
    "A simple guide to AI tools for business owners, operators, and everyday teams."
};

export default function AIToolsExplainerPage() {
  return <ExplainerPage page={explainerPages.ai} />;
}
