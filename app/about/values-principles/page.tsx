import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { CORE_VALUES } from "@/app/data/about";

export const metadata: Metadata = {
  title: "Our Values & Principles",
  description: "Built on trust, driven by excellence, guided by principles.",
};

export default function ValuesPrinciplesPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Values & Principles"
        description="Built on trust, driven by excellence, guided by principles."
      />

      <PillarGrid
        eyebrow="What Guides Us"
        title="The Values Behind Every Batch"
        description="Regal's success comes from the right approach, combined with an entrepreneurial mindset and a genuine dedication to excellence."
        items={CORE_VALUES}
        columns={4}
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
