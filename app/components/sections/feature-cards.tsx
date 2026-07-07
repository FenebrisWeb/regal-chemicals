import Button from "@/app/components/ui/button";
import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import Reveal from "@/app/components/ui/reveal";

interface FeatureCard {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  visualLabel: string;
}

const CARDS: FeatureCard[] = [
  {
    title: "Explore Our Products",
    description:
      "Discover our full range of certified construction chemicals and flooring solutions, engineered for performance in every project. Find the right product for your application with just a click.",
    ctaLabel: "Explore Products",
    ctaHref: "/products",
    visualLabel: "Products",
  },
  {
    title: "Find Your Perfect System",
    description:
      "Browse advanced Regal systems tailored for waterproofing, protection, flooring, repair, and more. See solutions tested and trusted across every sector.",
    ctaLabel: "Explore Systems",
    ctaHref: "/systems",
    visualLabel: "Systems",
  },
  {
    title: "MSDS | Access Technical Documents",
    description:
      "Download TDS, MSDS, and application guides for all Regal products. Get the trusted specs, safety information, and installation details you need, all in one place.",
    ctaLabel: "Explore TDS & MSDS",
    ctaHref: "/documents",
    visualLabel: "Documents",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-[50px]">
      <AmbientBubbles tone="brand" className="opacity-60" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {CARDS.map((card, index) => (
          <Reveal key={card.title} delayMs={index * 120}>
            <article className="flex h-full flex-col gap-4 rounded-2xl bg-black/[0.03] p-6">
              <h3 className="text-xl font-bold text-black">{card.title}</h3>
              <p className="flex-1 text-sm font-medium text-black">{card.description}</p>
              <PlaceholderVisual label={card.visualLabel} tone="light" className="h-32" />
              <Button href={card.ctaHref} variant="dark" className="w-fit">
                {card.ctaLabel}
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
