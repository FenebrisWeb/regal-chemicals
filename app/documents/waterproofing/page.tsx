import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { DOCUMENT_TYPES, REQUEST_STEPS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Waterproofing TDS & MSDS",
  description: "Technical Data Sheets and Material Safety Data Sheets for the full Regal Waterproofing product range.",
};

export default function WaterproofingDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Waterproofing TDS & MSDS"
        description="Data sheets covering PU membranes, crystalline treatments, and elastomeric coatings used across the Waterproofing range."
      />

      <TextFeature
        eyebrow="Why It Matters Here"
        title="Proof of Performance Before Water Meets the Membrane"
        visualLabel="Waterproofing Documents"
        paragraphs={[
          "Waterproofing failures are expensive to fix after the fact, which is why specifications for this category are usually strict about elongation, water pressure resistance, and recoat times. Our Technical Data Sheets present those figures directly, so consultants can confirm a membrane suits the exposure before it goes on site.",
          "Material Safety Data Sheets for this range cover handling for PU, crystalline, and elastomeric products, documentation commonly requested as part of site safety files on both private and government projects.",
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
        title="Need Waterproofing Documentation?"
        description="Tell us which products you are specifying and we will send the current TDS and MSDS set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="View Waterproofing Products"
        secondaryHref="/products/waterproofing"
      />
    </>
  );
}
