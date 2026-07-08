import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import PillarGrid from "@/app/components/sections/pillar-grid";
import TextFeature from "@/app/components/sections/text-feature";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PURPOSE_MISSION_VISION, CORE_VALUES, STRATEGY_PILLARS, OPERATIONAL_PILLARS } from "@/app/data/about";

export const metadata: Metadata = {
  title: "About Regal Chemicals",
  description: "Regal Chemicals: a brand built on trust, driven by innovation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Brand Built on Trust, Driven by Innovation"
        description="Regal stands as a symbol of reliability in the construction chemicals industry, delivering certified, high-performance solutions across diverse applications."
      />

      <PillarGrid
        eyebrow="Who We Are"
        title="Purpose, Mission & Vision"
        description="What drives Regal forward, every single day."
        items={PURPOSE_MISSION_VISION}
        columns={3}
      />

      <TextFeature
        eyebrow="Our Brand"
        title="A Name Built on Reliability and Performance"
        visualLabel="Regal Chemicals"
        paragraphs={[
          "A strong brand is more than a logo or a product name, it is the identity and reputation that define a company in the marketplace. Regal has earned trust across the construction and manufacturing sectors through high-quality, sustainable, and affordable solutions.",
          "Our name reflects our philosophy: continuity and forward-thinking, a promise of reliability and performance. That vision, centered on cutting-edge construction chemical solutions, has guided every product we've brought to market.",
        ]}
      />

      <PillarGrid
        eyebrow="What We Stand For"
        title="Our Core Values"
        description="Built on trust, driven by excellence, guided by principles."
        items={CORE_VALUES}
        columns={4}
      />

      <PillarGrid
        eyebrow="Our Strategy"
        title="Precision, Sustainability, and Trust at Every Step"
        description="Trust is not just a promise, it's a process that flows through everything we do."
        items={STRATEGY_PILLARS}
        columns={4}
        tone="dark"
      />

      <PillarGrid
        eyebrow="Operational Efficiency"
        title="Delivering Trust Through Precision and Excellence"
        description="Streamlined processes spanning raw material sourcing through product delivery."
        items={OPERATIONAL_PILLARS}
        columns={3}
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
