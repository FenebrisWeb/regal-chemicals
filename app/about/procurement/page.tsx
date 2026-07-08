import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PROCUREMENT_PILLARS } from "@/app/data/about";

export const metadata: Metadata = {
  title: "Our Procurement",
  description: "Procurement with purpose, at every stage of the supply chain.",
};

export default function ProcurementPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Procurement"
        description="Procurement with purpose, at every stage of the supply chain."
      />

      <TextFeature
        eyebrow="Beyond Sourcing"
        title="Procurement as a Strategic Function"
        visualLabel="Our Procurement"
        paragraphs={[
          "Procurement at Regal is more than just acquiring raw materials, it is a strategic function that ensures quality, sustainability, and efficiency across our entire supply chain.",
          "From reliable material supply and cost optimization to supplier evaluation and risk management, every procurement decision is held to a supplier code of conduct built around integrity, safety, and continuous improvement.",
        ]}
      />

      <PillarGrid
        eyebrow="Supplier Code of Conduct"
        title="What We Expect From Every Supplier"
        items={PROCUREMENT_PILLARS}
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
