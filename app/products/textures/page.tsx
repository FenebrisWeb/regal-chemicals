import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import ProductGrid from "@/app/components/sections/product-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCTS, TENDER_ADVANTAGES } from "@/app/data/products";

export const metadata: Metadata = {
  title: "Textures Products",
  description: "Decorative render and finish products manufactured to documented specifications for facade and finishing tenders.",
};

export default function TexturesProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Textures Products"
        description="Decorative render and finish systems specified for durability and weather resistance on exterior and interior walls."
      />

      <TextFeature
        eyebrow="Why This Range Wins Tenders"
        title="Coverage and Weather Resistance Set Out Clearly"
        visualLabel="Textures Products"
        paragraphs={[
          "Facade and finishing tenders typically call out coverage rate, drying time, and weather resistance for exterior render systems. Every product in this range is manufactured to a fixed specification, giving architects and consultants figures they can rely on.",
          "Our technical team supports colour matching, specification review, and application guidance for both new build and renovation facade projects.",
        ]}
      />

      <ProductGrid items={PRODUCTS["textures"]} category="textures" />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes This Range Tender Ready"
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Specifying Textures Products?"
        description="Get the full technical data sheet set or talk through your project requirements."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents/textures"
      />
    </>
  );
}
