import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { DOCUMENT_TYPES, REQUEST_STEPS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Sports TDS & MSDS",
  description: "Technical Data Sheets and Material Safety Data Sheets for the full Regal Sports product range.",
};

export default function SportsDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Sports TDS & MSDS"
        description="Data sheets covering acrylic and polyurethane surfacing systems used across the Sports range."
      />

      <TextFeature
        eyebrow="Why It Matters Here"
        title="Specifications Sports Facility Projects Rely On"
        visualLabel="Sports Documents"
        paragraphs={[
          "Sports facility tenders, particularly those run through schools, municipalities, and sporting bodies, often specify surface hardness, slip resistance, and coating thickness. Our Technical Data Sheets state these figures directly, helping evaluators confirm a surfacing system meets the scope before it is approved.",
          "Material Safety Data Sheets for this range cover handling for acrylic and PU based coatings, which is documentation project safety officers usually require before surfacing work begins.",
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
        title="Need Sports Documentation?"
        description="Tell us which products you are specifying and we will send the current TDS and MSDS set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="View Sports Products"
        secondaryHref="/products/sports"
      />
    </>
  );
}
