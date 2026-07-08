import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { BRAND_PILLARS } from "@/app/data/about";

export const metadata: Metadata = {
  title: "Regal's Brand",
  description: "A brand built on trust, innovation, and excellence.",
};

export default function BrandPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Regal's Brand"
        description="A brand built on trust, innovation, and excellence."
      />

      <TextFeature
        eyebrow="Our Identity"
        title="More Than a Name on the Label"
        visualLabel="Regal Chemicals"
        paragraphs={[
          "A strong brand is more than just a logo or a product name, it is the identity and reputation that define a company in the marketplace. Regal has earned trust in the construction and manufacturing sectors through high-quality, sustainable, and affordable solutions.",
          "Our name reflects our philosophy: continuity and forward-thinking, a promise of reliability and performance. That founding vision, centered on cutting-edge construction chemical solutions, has guided everything we've built since.",
        ]}
      />

      <PillarGrid eyebrow="What We Stand On" title="Our Brand Pillars" items={BRAND_PILLARS} columns={3} />

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
