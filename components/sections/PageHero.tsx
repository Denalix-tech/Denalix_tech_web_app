import { BlurText } from "@/components/effects/BlurText";
import { LightPillar } from "@/components/effects/LightPillar";
import { TextType } from "@/components/effects/TextType";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  rotatingEyebrow?: string[];
};

export function PageHero({ eyebrow, title, description, rotatingEyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 -z-20"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)"
        }}
      >
        <LightPillar
          topColor="#22D3EE"
          bottomColor="#0EA5E9"
          rotationSpeed={0.12}
          intensity={0.9}
          pillarWidth={2.2}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:42px_42px] opacity-40" />
      <div className="container-pad py-16 sm:py-24">
        <div className="max-w-4xl">
          {rotatingEyebrow && rotatingEyebrow.length > 0 ? (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-300" aria-hidden="true" />
              <TextType
                as="span"
                text={rotatingEyebrow}
                className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-100"
                typingSpeed={55}
                pauseDuration={1400}
                deletingSpeed={25}
                cursorCharacter="_"
              />
            </div>
          ) : (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
          )}
          <BlurText
            text={title}
            delay={60}
            className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl"
          />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
        </div>
      </div>
    </section>
  );
}
