import { processSteps } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad">
        <SectionHeader
          align="center"
          eyebrow="How It Works"
          title="A simple plan before we build"
          description="We start with the request, understand the business, create a practical roadmap, then build and improve the right solution in stages."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300 text-slate-950 text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
