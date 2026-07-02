import { whyDenalix } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { FloatInCard } from "@/components/effects/FloatInCard";

export function WhySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeader
          eyebrow="Why Denalix Tech"
          title="From operational leaks to scalable systems"
          description="If the business is stuck, we find the bottleneck. If the idea is new, we shape the roadmap. If the team is growing, we build the digital foundation that keeps work moving."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {whyDenalix.map((item, index) => {
            const Icon = item.icon;
            return (
              <FloatInCard key={item.title} index={index} total={whyDenalix.length}>
                <div className="flex h-full items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/15 text-cyan-200 ring-1 ring-cyan-300/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="pt-2 text-sm font-medium leading-6 text-slate-100">{item.title}</span>
                </div>
              </FloatInCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
