import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { SYSTEM_DETAILS } from "@/app/data/systems-detail";

const DETAIL = SYSTEM_DETAILS["waterproofing"];

export const metadata: Metadata = {
  title: "Waterproofing Layer System",
  description: "PU membranes, crystalline treatments, and elastomeric coatings matched to roofs, basements, and wet areas.",
};

export default function WaterproofingLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Waterproofing Layer System"
        description="Membranes and coatings matched to the exposure, from terraces and roofs to basements and swimming pools."
      />

      <TextFeature
        eyebrow="System Overview"
        title={DETAIL.overviewTitle}
        visualLabel="Waterproofing System"
        visualSrc="/images/SystemImages/Waterproofing-Layer-System.webp"
        paragraphs={DETAIL.overviewParagraphs}
      />

      <PillarGrid
        eyebrow="Key Benefits"
        title="Why Choose the Waterproofing System"
        description="Built for complete moisture protection that stays flexible and durable over time."
        items={DETAIL.benefits}
        columns={3}
      />

      <PillarGrid
        eyebrow="Where It Is Used"
        title="Typical Applications"
        description="From rooftops to swimming pools, matched to the pressure and exposure of each surface."
        items={DETAIL.applications}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Dealing With a Water Leakage Issue?"
        description="Talk to our technical team about the right waterproofing system for your structure."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Waterproofing Products"
        secondaryHref="/products/waterproofing"
      />
    </>
  );
}
