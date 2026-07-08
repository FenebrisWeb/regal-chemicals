import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { OPERATIONAL_PILLARS } from "@/app/data/about";

export const metadata: Metadata = {
  title: "Operational Efficiency",
  description: "Delivering trust through precision and excellence.",
};

export default function OperationalEfficiencyPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Operational Efficiency"
        description="Delivering trust through precision and excellence."
      />

      <PillarGrid
        eyebrow="How We Deliver"
        title="Efficient Processes Built on Trust"
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
