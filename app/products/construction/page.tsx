import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import ProductGrid from "@/app/components/sections/product-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCTS, TENDER_ADVANTAGES } from "@/app/data/products";
import { CATEGORY_FEATURE_IMAGE } from "@/app/data/product-images";

export const metadata: Metadata = {
  title: "Construction Products",
  description: "Adhesives, grouts, and bonding agents manufactured to documented specifications for construction tenders.",
};

export default function ConstructionProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Construction Products"
        description="Adhesives, grouts, and bonding agents specified for strong, reliable performance across construction projects."
      />

      <TextFeature
        eyebrow="Why This Range Wins Tenders"
        title="Bond Strength Figures Backed by Testing"
        visualLabel="Construction Products"
        visualSrc={CATEGORY_FEATURE_IMAGE["construction"]}
        paragraphs={[
          "Construction material tenders are typically evaluated against bond strength, setting time, and compressive strength figures. Every product in this range is batch tested against a fixed specification, so evaluators can trust the numbers submitted match the material delivered.",
          "Our technical team is available to support structural consultants and procurement teams through specification review and site trials where required.",
        ]}
      />

      <ProductGrid items={PRODUCTS["construction"]} category="construction" />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes This Range Tender Ready"
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Specifying Construction Products?"
        description="Get the full technical data sheet set or talk through your project requirements."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents/construction"
      />
    </>
  );
}
