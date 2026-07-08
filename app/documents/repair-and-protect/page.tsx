import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { DOCUMENT_TYPES, REQUEST_STEPS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Repair & Protect TDS & MSDS",
  description: "Technical Data Sheets and Material Safety Data Sheets for the full Regal Repair and Protect product range.",
};

export default function RepairAndProtectDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Repair & Protect TDS & MSDS"
        description="Data sheets covering injection grouts, repair mortars, and protective coatings used across the Repair and Protect range."
      />

      <TextFeature
        eyebrow="Why It Matters Here"
        title="Documentation That Supports Restoration Sign Off"
        visualLabel="Repair and Protect Documents"
        paragraphs={[
          "Repair works are often reviewed closely, since they involve restoring structural elements that were already compromised. Our Technical Data Sheets state compressive strength, expansion characteristics, and cure profiles clearly, giving inspectors the figures needed to sign off on a repair method.",
          "Material Safety Data Sheets for this range cover handling requirements for repair mortars and injection resins, supporting the safety documentation contractors need to submit before restoration work is approved.",
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
        title="Need Repair & Protect Documentation?"
        description="Tell us which products you are specifying and we will send the current TDS and MSDS set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="View Repair and Protect Products"
        secondaryHref="/products/repair-and-protect"
      />
    </>
  );
}
