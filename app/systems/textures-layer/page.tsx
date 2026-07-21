import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { SYSTEM_DETAILS } from "@/app/data/systems-detail";

const DETAIL = SYSTEM_DETAILS["textures"];

export const metadata: Metadata = {
  title: "Textures Layer System",
  description: "Decorative render and texture finishes built on proper primers and protective topcoats for lasting results.",
};

export default function TexturesLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Textures Layer System"
        description="Decorative wall finishes that protect as much as they decorate, built to last through years of weather exposure."
      />

      <TextFeature
        eyebrow="System Overview"
        title={DETAIL.overviewTitle}
        visualLabel="Textures System"
        visualSrc="/images/SystemImages/Textures-Layer-System.webp"
        paragraphs={DETAIL.overviewParagraphs}
      />

      <PillarGrid
        eyebrow="Key Benefits"
        title="Why Choose the Textures System"
        description="A wide range of finishes, all built on the right primer and topcoat for lasting performance."
        items={DETAIL.benefits}
        columns={3}
      />

      <PillarGrid
        eyebrow="Where It Is Used"
        title="Typical Applications"
        description="From exterior facades to interior feature walls, matched to the finish you want."
        items={DETAIL.applications}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Ready to Refresh Your Walls?"
        description="Talk to our technical team about the right texture system for your project."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Textures Products"
        secondaryHref="/products/textures"
      />
    </>
  );
}
