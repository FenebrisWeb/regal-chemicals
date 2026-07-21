import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PURPOSE_MISSION_VISION } from "@/app/data/about";

export const metadata: Metadata = {
  title: "Regal's Purpose",
  description: "Building a sustainable future with innovation, trust, and excellence.",
};

export default function PurposePage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Regal's Purpose"
        description="Building a sustainable future with innovation, trust, and excellence."
      />

      <TextFeature
        eyebrow="Why We Exist"
        title="Purpose-Driven, From Formula to Foundation"
        visualLabel="Our Purpose"
        visualSrc="/images/AboutPage/Regal's-Purpose.webp"
        paragraphs={[
          "At Regal, our purpose is to deliver high-quality, innovative, and sustainable solutions that cater to the ever-evolving needs of the construction, building, and manufacturing industries.",
          "Every formulation we develop is built around a simple idea: infrastructure deserves products that are safe, durable, and dependable, backed by a team that takes that responsibility seriously.",
        ]}
      />

      <PillarGrid
        eyebrow="Our Foundation"
        title="Purpose, Mission & Vision"
        items={PURPOSE_MISSION_VISION}
        columns={3}
      />

      <CtaStrip
        title="Ready to Start Your Next Project?"
        description="Talk to our technical team about the right Regal system for your application."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      />
    </>
  );
}
