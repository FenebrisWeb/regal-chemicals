import Reveal from "@/app/components/ui/reveal";
import type { PageHeroProps } from "@/types/ui";

const MARQUEE_ITEMS = [
  "Certified Quality",
  "20+ Years of Expertise",
  "Trusted Nationwide",
  "Technical Support on Every Order",
  "Manufactured for Real Site Conditions",
];

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07245a] py-24 sm:py-32">
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-orbit-wrap">
          <span className="hero-orbit-glow h-72 w-72 bg-[#2596be]/60" />
        </div>
        <div className="hero-orbit-wrap" style={{ animationDirection: "reverse", animationDuration: "22s" }}>
          <span className="hero-orbit-glow h-56 w-56 bg-[#67e8f9]/50" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center">
        {eyebrow && (
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <span className="hero-dot h-1.5 w-1.5 rounded-full bg-white" />
              {eyebrow}
            </span>
          </Reveal>
        )}

        <Reveal delayMs={90}>
          <h1 className="hero-shimmer-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </Reveal>

        <span className="hero-underline h-1 rounded-full bg-gradient-to-r from-white/80 to-white/20" />

        {description && (
          <Reveal delayMs={180}>
            <p className="max-w-2xl text-base font-medium text-white/85 sm:text-lg">{description}</p>
          </Reveal>
        )}
      </div>

      <div className="relative mt-14 overflow-hidden border-t border-white/10 py-4">
        <div className="hero-marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <span key={index} className="mx-4 flex items-center gap-4 whitespace-nowrap">
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-white/60">{item}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
