import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/PageHero";

type ExplainerPageProps = {
  page: {
    title: string;
    intro: string;
    goodFor: string[];
    examples: string[];
    outcomes: string[];
    serviceHref: string;
  };
};

export function ExplainerPage({ page }: ExplainerPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Simple Guide"
        title={page.title}
        description={page.intro}
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold text-white">When this helps</h2>
            <div className="mt-5 grid gap-3">
              {page.goodFor.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold text-white">What it can look like</h2>
            <div className="mt-5 grid gap-3">
              {page.examples.map((item) => (
                <p key={item} className="text-sm leading-6 text-slate-300">{item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold text-white">Business outcomes</h2>
            <div className="mt-5 grid gap-3">
              {page.outcomes.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="container-pad">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Want the technical details too?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The service page explains how Denalix Tech designs and builds this kind of solution.
                </p>
              </div>
              <Button asChild>
                <Link href={page.serviceHref}>
                  View service page
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
