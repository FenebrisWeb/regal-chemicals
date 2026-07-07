import Button from "@/app/components/ui/button";
import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import Reveal from "@/app/components/ui/reveal";

interface HighlightCard {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  visualLabel: string;
}

const CARDS: HighlightCard[] = [
  {
    eyebrow: "About Regal",
    title: "A Brand Built on Trust, Powered by Innovation",
    description:
      "Regal delivers certified, high-performance construction chemicals and flooring solutions trusted by professionals across every sector.",
    ctaLabel: "Learn More",
    ctaHref: "/about",
    visualLabel: "About Regal",
  },
  {
    eyebrow: "Journal",
    title: "Dive into expert insights, how-tos, case studies, and sustainability notes from the field.",
    description: "",
    ctaLabel: "Learn More",
    ctaHref: "/journal",
    visualLabel: "Journal",
  },
];

export default function HighlightCards() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <AmbientBubbles tone="brand" className="opacity-60" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        {CARDS.map((card, index) => (
          <Reveal key={card.title} delayMs={index * 120}>
            <article className="overflow-hidden rounded-2xl bg-black/[0.03]">
              <PlaceholderVisual label={card.visualLabel} tone="brand" className="h-64 rounded-none border-none sm:h-80" />

              <div className="flex flex-col gap-4 p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">
                  {card.eyebrow}
                </span>
                <h3 className="text-2xl font-bold text-black">{card.title}</h3>
                {card.description && <p className="text-sm font-medium text-black">{card.description}</p>}
                <Button href={card.ctaHref} variant="dark" className="w-fit">
                  {card.ctaLabel}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
