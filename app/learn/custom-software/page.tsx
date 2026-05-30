import type { Metadata } from "next";
import { explainerPages } from "@/data/site";
import { ExplainerPage } from "@/components/sections/ExplainerPage";

export const metadata: Metadata = {
  title: "Custom Software Explained",
  description:
    "A simple guide to custom software for business owners, operators, and everyday teams."
};

export default function CustomSoftwareExplainerPage() {
  return <ExplainerPage page={explainerPages.software} />;
}
