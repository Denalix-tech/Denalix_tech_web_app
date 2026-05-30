import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-cyan-300/30 bg-white">
        <Image
          src="/denalix_logo_cropped.jpeg"
          alt="Denalix Tech logo"
          width={96}
          height={96}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      {!compact ? (
        <span className="text-lg font-bold tracking-tight text-white">
          Denalix Tech
        </span>
      ) : null}
    </Link>
  );
}
