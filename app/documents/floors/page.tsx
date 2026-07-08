import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { DOCUMENT_TYPES, REQUEST_STEPS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Floors TDS & MSDS",
  description: "Technical Data Sheets and Material Safety Data Sheets for the full Regal Floors product range.",
};

export default function FloorsDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Floors TDS & MSDS"
        description="Data sheets covering epoxy, polyurethane, and self levelling systems used across the Floors range."
      />

      <TextFeature
        eyebrow="Why It Matters Here"
        title="Confirming Performance Before the Floor Is Poured"
        visualLabel="Floors Documents"
        paragraphs={[
          "Flooring specifications usually call out chemical resistance, compressive strength, and recommended film thickness for the traffic the floor will carry. Our Technical Data Sheets set those figures out clearly, so facility managers and consultants can confirm the system fits the intended use before installation begins.",
          "Material Safety Data Sheets for this range cover the handling and curing information required for epoxy and polyurethane resin systems, which project safety files typically request before work starts on site.",
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
        title="Need Floors Documentation?"
        description="Tell us which products you are specifying and we will send the current TDS and MSDS set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="View Floors Products"
        secondaryHref="/products/floors"
      />
    </>
  );
}
