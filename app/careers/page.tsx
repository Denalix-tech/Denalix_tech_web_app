import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Learn about future career and collaboration opportunities with Denalix Tech."
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build useful technology for real business problems"
        description="Denalix Tech is growing thoughtfully. We are interested in people who can communicate clearly, understand business needs, and help build practical digital systems."
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Current Status"
            title="No formal openings yet, but we are building the bench"
            description="We are not posting specific roles at this moment. As the company grows, we expect to look for product-minded engineers, designers, automation builders, AI practitioners, and client-facing technical partners."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Clear communicators",
              "Business-minded builders",
              "People who can simplify complex ideas",
              "Reliable teammates who care about quality"
            ].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-lg font-semibold text-white">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="container-pad">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Interested in future opportunities?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Send a short note about your background and the kind of work you want to do.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Contact Denalix Tech
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
