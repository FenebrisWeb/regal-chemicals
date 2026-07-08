import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { SYSTEM_DETAILS } from "@/app/data/systems-detail";

const DETAIL = SYSTEM_DETAILS["repair-and-protect"];

export const metadata: Metadata = {
  title: "Repair and Protect Layer System",
  description: "Injection grouts, repair mortars, and protective coatings that restore damaged structures and keep them protected.",
};

export default function RepairAndProtectLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Repair and Protect Layer System"
        description="Restoring damaged concrete and steel, then protecting the repair so the same failure does not happen again."
      />

      <TextFeature
        eyebrow="System Overview"
        title={DETAIL.overviewTitle}
        visualLabel="Repair and Protect System"
        paragraphs={DETAIL.overviewParagraphs}
      />

      <PillarGrid
        eyebrow="Key Benefits"
        title="Why Choose the Repair and Protect System"
        description="Built to restore structural integrity and guard against repeat damage."
        items={DETAIL.benefits}
        columns={3}
      />

      <PillarGrid
        eyebrow="Where It Is Used"
        title="Typical Applications"
        description="From crack injection to full concrete restoration, matched to the extent of the damage."
        items={DETAIL.applications}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Have a Structure That Needs Repair?"
        description="Talk to our technical team about the right repair and protection approach for your structure."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Repair and Protect Products"
        secondaryHref="/products/repair-and-protect"
      />
    </>
  );
}
