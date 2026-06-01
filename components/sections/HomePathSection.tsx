import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePageLinks } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function HomePathSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad">
        <SectionHeader
          align="center"
          eyebrow="Explore Denalix Tech"
          title="Scroll through the business story, then go deeper where it matters"
          description="The homepage gives you the plain business version. Each section points to a deeper page when you are ready for details."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {homePageLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-72 flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                {item.eyebrow}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-white">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                {item.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
