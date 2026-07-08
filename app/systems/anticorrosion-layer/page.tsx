import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { SYSTEM_DETAILS } from "@/app/data/systems-detail";

const DETAIL = SYSTEM_DETAILS["anti-corrosion"];

export const metadata: Metadata = {
  title: "Anticorrosion Layer System",
  description: "A layered primer, cathodic protection, and topcoat system built to stop corrosion on steel and concrete structures.",
};

export default function AnticorrosionLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Anticorrosion Layer System"
        description="A primer, cathodic protection coat, and protective topcoat working together to stop corrosion before it starts."
      />

      <TextFeature
        eyebrow="System Overview"
        title={DETAIL.overviewTitle}
        visualLabel="Anticorrosion System"
        paragraphs={DETAIL.overviewParagraphs}
      />

      <PillarGrid
        eyebrow="Key Benefits"
        title="Why Choose the Anticorrosion System"
        description="Built to protect steel and concrete in the most demanding environments."
        items={DETAIL.benefits}
        columns={3}
      />

      <PillarGrid
        eyebrow="Where It Is Used"
        title="Typical Applications"
        description="From pipelines to marine structures, the system is specified to match real exposure conditions."
        items={DETAIL.applications}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Ready to Protect Your Structure?"
        description="Talk to our technical team about the right anticorrosion combination for your site."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Anticorrosion Products"
        secondaryHref="/products/anti-corrosion"
      />
    </>
  );
}
