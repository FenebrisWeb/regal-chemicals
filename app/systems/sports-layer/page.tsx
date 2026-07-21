import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { SYSTEM_DETAILS } from "@/app/data/systems-detail";

const DETAIL = SYSTEM_DETAILS["sports"];

export const metadata: Metadata = {
  title: "Sports Layer System",
  description: "Acrylic and polyurethane sports surfacing systems built for grip, cushioning, and long-term durability.",
};

export default function SportsLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Sports Layer System"
        description="Layered surfacing built for grip, comfort, and weather resistance across courts and recreational areas."
      />

      <TextFeature
        eyebrow="System Overview"
        title={DETAIL.overviewTitle}
        visualLabel="Sports System"
        visualSrc="/images/SystemImages/Sports-Layer-System.webp"
        paragraphs={DETAIL.overviewParagraphs}
      />

      <PillarGrid
        eyebrow="Key Benefits"
        title="Why Choose the Sports System"
        description="Built for consistent play, comfort underfoot, and years of outdoor exposure."
        items={DETAIL.benefits}
        columns={3}
      />

      <PillarGrid
        eyebrow="Where It Is Used"
        title="Typical Applications"
        description="From basketball courts to running tracks, matched to the sport and surface."
        items={DETAIL.applications}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Planning a Sports Surface?"
        description="Talk to our technical team about the right sports flooring system for your court."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Sports Products"
        secondaryHref="/products/sports"
      />
    </>
  );
}
