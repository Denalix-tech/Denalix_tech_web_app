import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SideRays } from "@/components/effects/SideRays";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to digitalize the parts of your business that are slowing growth?",
  description = "Bring Denalix Tech into the conversation early. We will help find the operational bottlenecks, shape the roadmap, and build the right system in practical stages."
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad">
        <div className="glass-panel relative overflow-hidden rounded-lg p-8 md:p-12">
          <div className="absolute inset-0">
            <SideRays
              rayColor1="#22D3EE"
              rayColor2="#38BDF8"
              origin="top-right"
              intensity={3.2}
              spread={2.6}
              opacity={1}
              saturation={2}
            />
          </div>
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
