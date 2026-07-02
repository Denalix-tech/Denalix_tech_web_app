import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { BorderGlow } from "@/components/effects/BorderGlow";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <BorderGlow
      className="group h-full transition duration-300 hover:-translate-y-1"
      backgroundColor="rgba(15, 23, 42, 0.55)"
      glowColor="192 100 60"
      colors={["#22D3EE", "#0EA5E9", "#38BDF8"]}
      borderRadius={8}
      glowRadius={36}
      glowIntensity={1.6}
      animated
    >
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-300/20">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 min-h-20 flex-1 text-sm leading-6 text-slate-400">{description}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-cyan-100"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </BorderGlow>
  );
}
