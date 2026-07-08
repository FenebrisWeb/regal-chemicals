import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import type { PageHeroProps } from "@/types/ui";

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2596be] to-[#07245a] py-20 sm:py-24">
      <AmbientBubbles tone="dark" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">{eyebrow}</span>
        )}
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="max-w-2xl text-base font-medium text-white/90 sm:text-lg">{description}</p>}
      </div>
    </section>
  );
}
