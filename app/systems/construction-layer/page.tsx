import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { SYSTEM_DETAILS } from "@/app/data/systems-detail";

const DETAIL = SYSTEM_DETAILS["construction"];

export const metadata: Metadata = {
  title: "Construction Layer System",
  description: "Adhesives, grouts, and bonding agents engineered to hold structures together under real site conditions.",
};

export default function ConstructionLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Construction Layer System"
        description="The adhesives, grouts, and bonding agents that give a structure its strength from the ground up."
      />

      <TextFeature
        eyebrow="System Overview"
        title={DETAIL.overviewTitle}
        visualLabel="Construction System"
        paragraphs={DETAIL.overviewParagraphs}
      />

      <PillarGrid
        eyebrow="Key Benefits"
        title="Why Choose the Construction System"
        description="Formulated for strong bonding, fast application, and dependable structural performance."
        items={DETAIL.benefits}
        columns={3}
      />

      <PillarGrid
        eyebrow="Where It Is Used"
        title="Typical Applications"
        description="From block laying to structural grouting, matched to the demands of the job."
        items={DETAIL.applications}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Ready to Start Building?"
        description="Talk to our technical team about the right construction system for your project."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Construction Products"
        secondaryHref="/products/construction"
      />
    </>
  );
}
