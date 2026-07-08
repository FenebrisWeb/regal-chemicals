import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { DOCUMENT_TYPES, REQUEST_STEPS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Construction TDS & MSDS",
  description: "Technical Data Sheets and Material Safety Data Sheets for the full Regal Construction product range.",
};

export default function ConstructionDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Construction TDS & MSDS"
        description="Data sheets covering adhesives, grouts, and bonding agents used across the Construction range."
      />

      <TextFeature
        eyebrow="Why It Matters Here"
        title="Specification Detail That Structural Approvals Rely On"
        visualLabel="Construction Documents"
        paragraphs={[
          "Bonding strength, setting time, and load bearing capacity are exactly the figures a structural consultant or tender evaluator checks before approving a construction adhesive or grout. Our Technical Data Sheets list those specifications in full, drawn from the same formulation that leaves our facility.",
          "Material Safety Data Sheets for this range detail handling and storage for cement based and resin based products, information site safety officers commonly require before materials are approved for use.",
        ]}
      />

      <PillarGrid
        eyebrow="What You Receive"
        title="Full Document Set for This Range"
        items={DOCUMENT_TYPES}
        columns={4}
      />

      <PillarGrid
        eyebrow="How It Works"
        title="Requesting These Documents"
        items={REQUEST_STEPS}
        columns={3}
        tone="dark"
      />

      <CtaStrip
        title="Need Construction Documentation?"
        description="Tell us which products you are specifying and we will send the current TDS and MSDS set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="View Construction Products"
        secondaryHref="/products/construction"
      />
    </>
  );
}
