import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { DOCUMENT_TYPES, REQUEST_STEPS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Anti Corrosion TDS & MSDS",
  description: "Technical Data Sheets and Material Safety Data Sheets for the full Regal Anticorrosion product range.",
};

export default function AntiCorrosionDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Anti Corrosion TDS & MSDS"
        description="Data sheets covering primers, cathodic protection coats, and topcoats used across the Anticorrosion range."
      />

      <TextFeature
        eyebrow="Why It Matters Here"
        title="Verified Specifications for Steel and Concrete Protection"
        visualLabel="Anti Corrosion Documents"
        paragraphs={[
          "Anticorrosion work is usually specified with exact performance requirements, adhesion strength, salt spray resistance, and coating thickness. Our Technical Data Sheets state those figures clearly, so specifiers and inspectors can confirm the product meets the project scope before it is applied.",
          "Material Safety Data Sheets for this range cover handling and storage requirements for zinc rich primers, epoxy coatings, and MIO based topcoats, which is often a required attachment for site safety files and government project submissions.",
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
        title="Need Anti Corrosion Documentation?"
        description="Tell us which products you are specifying and we will send the current TDS and MSDS set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="View Anti Corrosion Products"
        secondaryHref="/products/anti-corrosion"
      />
    </>
  );
}
