import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeAnimatedBackdrop } from "@/components/sections/HomeAnimatedBackdrop";
import { HomeServicesShowcase } from "@/components/sections/HomeServicesShowcase";
import { HomeTechShowcase } from "@/components/sections/HomeTechShowcase";
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
      <WhySection />
      <HomeAnimatedBackdrop>
        <HomeServicesShowcase />
        <HomeTechShowcase />
        <ProcessSection withBackground={false} />
      </HomeAnimatedBackdrop>
      <CTASection />
    </>
  );
}
