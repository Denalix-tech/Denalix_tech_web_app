import type { Metadata } from "next";
import { explainerPages } from "@/data/site";
import { ExplainerPage } from "@/components/sections/ExplainerPage";

export const metadata: Metadata = {
  title: "Dashboards and Reports Explained",
  description:
    "A simple guide to dashboards and reports for business owners, operators, and everyday teams."
};

export default function DashboardsReportsExplainerPage() {
  return <ExplainerPage page={explainerPages.dashboards} />;
}
