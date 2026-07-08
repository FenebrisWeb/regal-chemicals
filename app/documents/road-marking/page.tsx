import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { DOCUMENT_TYPES, REQUEST_STEPS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Road Marking TDS & MSDS",
  description: "Technical Data Sheets and Material Safety Data Sheets for the full Regal Road Marking product range.",
};

export default function RoadMarkingDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Road Marking TDS & MSDS"
        description="Data sheets covering thermoplastic and cold applied paints used across the Road Marking range."
      />

      <TextFeature
        eyebrow="Why It Matters Here"
        title="Standards That Public Infrastructure Projects Check"
        visualLabel="Road Marking Documents"
        paragraphs={[
          "Road marking contracts, especially government and municipal ones, are typically evaluated against retroreflectivity, drying time, and skid resistance figures. Our Technical Data Sheets present these specifications directly, giving evaluators a clear basis for comparison during tender review.",
          "Material Safety Data Sheets for this range cover handling and application safety for thermoplastic and solvent based paints, documentation road authorities commonly require before a contractor is cleared to begin work.",
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
        title="Need Road Marking Documentation?"
        description="Tell us which products you are specifying and we will send the current TDS and MSDS set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="View Road Marking Products"
        secondaryHref="/products/road-marking"
      />
    </>
  );
}
