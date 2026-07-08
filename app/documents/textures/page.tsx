import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { DOCUMENT_TYPES, REQUEST_STEPS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Textures TDS & MSDS",
  description: "Technical Data Sheets and Material Safety Data Sheets for the full Regal Textures product range.",
};

export default function TexturesDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Textures TDS & MSDS"
        description="Data sheets covering decorative render and finish systems used across the Textures range."
      />

      <TextFeature
        eyebrow="Why It Matters Here"
        title="Confirming Finish and Durability Before Application"
        visualLabel="Textures Documents"
        paragraphs={[
          "Facade and finishing specifications usually call out coverage rate, drying time, and weather resistance for exterior render systems. Our Technical Data Sheets set these figures out clearly, helping architects and consultants confirm a finish will perform as specified.",
          "Material Safety Data Sheets for this range cover handling for primer, render, and topcoat products, supporting the site safety documentation contractors typically prepare before finishing work starts.",
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
        title="Need Textures Documentation?"
        description="Tell us which products you are specifying and we will send the current TDS and MSDS set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="View Textures Products"
        secondaryHref="/products/textures"
      />
    </>
  );
}
