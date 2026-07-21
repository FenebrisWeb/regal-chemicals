import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import ProductGrid from "@/app/components/sections/product-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCTS, TENDER_ADVANTAGES } from "@/app/data/products";
import { CATEGORY_FEATURE_IMAGE } from "@/app/data/product-images";

export const metadata: Metadata = {
  title: "Waterproofing Products",
  description: "PU membranes, crystalline treatments, and elastomeric coatings manufactured to documented specifications for waterproofing tenders.",
};

export default function WaterproofingProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Waterproofing Products"
        description="PU membranes, crystalline treatments, and elastomeric coatings specified for roofs, basements, wet areas, and pools."
      />

      <TextFeature
        eyebrow="Why This Range Wins Tenders"
        title="Elongation and Pressure Resistance You Can Verify"
        visualLabel="Waterproofing Products"
        visualSrc={CATEGORY_FEATURE_IMAGE["waterproofing"]}
        paragraphs={[
          "Waterproofing tenders are usually strict about elongation, water pressure resistance, and recoat times, since failures here are expensive to fix after the fact. Every product in this range is manufactured to a fixed specification supporting that level of scrutiny.",
          "Our technical team helps match the right membrane to the exposure condition, whether that is a terrace, a basement, or a swimming pool, and supports the documentation your submission needs.",
        ]}
      />

      <ProductGrid items={PRODUCTS["waterproofing"]} category="waterproofing" />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes This Range Tender Ready"
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Specifying Waterproofing Products?"
        description="Get the full technical data sheet set or talk through your project requirements."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents/waterproofing"
      />
    </>
  );
}
