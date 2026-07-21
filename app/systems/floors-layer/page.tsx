import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { SYSTEM_DETAILS } from "@/app/data/systems-detail";

const DETAIL = SYSTEM_DETAILS["floors"];

export const metadata: Metadata = {
  title: "Floors Layer System",
  description: "Epoxy, polyurethane, and self levelling flooring systems specified for real traffic and load conditions.",
};

export default function FloorsLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Floors Layer System"
        description="Seamless, durable flooring systems built around how a floor is actually used, not just how it looks on day one."
      />

      <TextFeature
        eyebrow="System Overview"
        title={DETAIL.overviewTitle}
        visualLabel="Floors System"
        visualSrc="/images/SystemImages/Floors-Layer-System.webp"
        paragraphs={DETAIL.overviewParagraphs}
      />

      <PillarGrid
        eyebrow="Key Benefits"
        title="Why Choose the Floors System"
        description="Engineered for durability, easy maintenance, and consistent performance under load."
        items={DETAIL.benefits}
        columns={3}
      />

      <PillarGrid
        eyebrow="Where It Is Used"
        title="Typical Applications"
        description="From industrial warehouses to showroom floors, matched to the traffic and finish required."
        items={DETAIL.applications}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Ready to Upgrade Your Flooring?"
        description="Talk to our technical team about the right floor system for your facility."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Floors Products"
        secondaryHref="/products/floors"
      />
    </>
  );
}
