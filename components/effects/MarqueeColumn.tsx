import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface MarqueeItem {
  label: string;
  icon: LucideIcon;
}

interface MarqueeColumnProps {
  items: MarqueeItem[];
  direction?: "up" | "down";
  href: string;
  className?: string;
}

export function MarqueeColumn({ items, direction = "up", href, className = "" }: MarqueeColumnProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`group relative h-[30rem] overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)"
      }}
    >
      <div
        className={`flex flex-col gap-5 group-hover:[animation-play-state:paused] ${
          direction === "up" ? "animate-marquee-up" : "animate-marquee-down"
        }`}
      >
        {doubled.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={`${item.label}-${index}`}
              href={href}
              className="flex items-center gap-4 rounded-lg border border-white/10 bg-slate-900 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-slate-800"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyan-300/15 text-cyan-200 ring-1 ring-cyan-300/20">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-semibold text-white">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
