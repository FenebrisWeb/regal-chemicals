import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { SYSTEM_DETAILS } from "@/app/data/systems-detail";

const DETAIL = SYSTEM_DETAILS["road-marking"];

export const metadata: Metadata = {
  title: "Road Marking Layer System",
  description: "Thermoplastic and paint based road marking systems built for durability and visibility under heavy traffic.",
};

export default function RoadMarkingLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Road Marking Layer System"
        description="Bright, durable markings for roads, highways, parking areas, and sports surfaces that stay visible under traffic."
      />

      <TextFeature
        eyebrow="System Overview"
        title={DETAIL.overviewTitle}
        visualLabel="Road Marking System"
        visualSrc="/images/SystemImages/Road-Marking-Layer-System.webp"
        paragraphs={DETAIL.overviewParagraphs}
      />

      <PillarGrid
        eyebrow="Key Benefits"
        title="Why Choose the Road Marking System"
        description="Engineered for fast curing, strong adhesion, and long-term colour retention."
        items={DETAIL.benefits}
        columns={3}
      />

      <PillarGrid
        eyebrow="Where It Is Used"
        title="Typical Applications"
        description="From highways to sports courts, matched to the surface and traffic level."
        items={DETAIL.applications}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Ready to Mark Your Site?"
        description="Talk to our technical team about the right road marking system for your project."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Road Marking Products"
        secondaryHref="/products/road-marking"
      />
    </>
  );
}
