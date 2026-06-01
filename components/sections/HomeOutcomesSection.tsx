import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { homeOutcomes } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function HomeOutcomesSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad">
        <SectionHeader
          align="center"
          eyebrow="Digitalize First"
          title="We do not just advise. We build the systems growth depends on."
          description="Many business problems are really system problems: work is scattered, tools do not talk, customers wait too long, and leaders cannot see what is happening. Denalix Tech turns that friction into a clearer digital operating model."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeOutcomes.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <CheckCircle2 className="h-6 w-6 text-cyan-300" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
          >
            See the services behind this work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
