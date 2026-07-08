import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { STRATEGY_PILLARS } from "@/app/data/about";

export const metadata: Metadata = {
  title: "Our Strategy",
  description: "Precision, sustainability, and trust at every step.",
};

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Strategy"
        description="Precision, sustainability, and trust at every step."
      />

      <PillarGrid
        eyebrow="How We Operate"
        title="A Four-Pillar Approach"
        description="Trust is not just a promise, it is a process that flows through everything we do."
        items={STRATEGY_PILLARS}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Ready to Start Your Next Project?"
        description="Talk to our technical team about the right Regal system for your application."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      />
    </>
  );
}
