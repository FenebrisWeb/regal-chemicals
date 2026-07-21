import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import ProductGrid from "@/app/components/sections/product-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCTS, TENDER_ADVANTAGES } from "@/app/data/products";
import { CATEGORY_FEATURE_IMAGE } from "@/app/data/product-images";

export const metadata: Metadata = {
  title: "Floors Products",
  description: "Epoxy, polyurethane, and self levelling flooring products manufactured to documented specifications for flooring tenders.",
};

export default function FloorsProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Floors Products"
        description="Epoxy, polyurethane, and self levelling systems specified for the exact traffic and load conditions of your facility."
      />

      <TextFeature
        eyebrow="Why This Range Wins Tenders"
        title="Performance Data Matched to Real Traffic Loads"
        visualLabel="Floors Products"
        visualSrc={CATEGORY_FEATURE_IMAGE["floors"]}
        paragraphs={[
          "Flooring tenders are usually scored against compressive strength, chemical resistance, and recommended film thickness for the intended traffic. Every product in this range is manufactured to a fixed specification, so the figures in your submission are exactly what gets installed.",
          "Our technical team supports specification selection so the system proposed genuinely matches the facility's traffic and chemical exposure, reducing the risk of underperformance flagged during evaluation or after installation.",
        ]}
      />

      <ProductGrid items={PRODUCTS["floors"]} category="floors" />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes This Range Tender Ready"
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Specifying Floors Products?"
        description="Get the full technical data sheet set or talk through your project requirements."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents/floors"
      />
    </>
  );
}
