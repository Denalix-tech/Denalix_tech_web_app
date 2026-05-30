import type { Metadata } from "next";
import { explainerPages } from "@/data/site";
import { ExplainerPage } from "@/components/sections/ExplainerPage";

export const metadata: Metadata = {
  title: "Workflow Automation Explained",
  description:
    "A simple guide to workflow automation for business owners, operators, and everyday teams."
};

export default function WorkflowAutomationExplainerPage() {
  return <ExplainerPage page={explainerPages.automation} />;
}
