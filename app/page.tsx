import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeOutcomesSection } from "@/components/sections/HomeOutcomesSection";
import { HomePathSection } from "@/components/sections/HomePathSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhySection } from "@/components/sections/WhySection";

export const metadata: Metadata = {
  title: "Modernize, Automate, and Scale Your Business",
  description:
    "Denalix Tech helps businesses turn manual chaos into digital clarity with practical systems, automation, dashboards, and custom tools."
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeOutcomesSection />
      <HomePathSection />
      <WhySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
