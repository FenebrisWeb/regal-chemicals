import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import ProductGrid from "@/app/components/sections/product-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCTS, TENDER_ADVANTAGES } from "@/app/data/products";

export const metadata: Metadata = {
  title: "Road Marking Products",
  description: "Thermoplastic and cold applied road marking products manufactured to documented specifications for public infrastructure tenders.",
};

export default function RoadMarkingProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Road Marking Products"
        description="Thermoplastic and cold applied paints specified for durability and visibility across roads, highways, and sports surfaces."
      />

      <TextFeature
        eyebrow="Why This Range Wins Tenders"
        title="Retroreflectivity and Durability Evaluators Can Check"
        visualLabel="Road Marking Products"
        paragraphs={[
          "Road marking contracts, particularly government and municipal tenders, are commonly evaluated against retroreflectivity, drying time, and expected service life under traffic. Every product in this range is manufactured to a fixed specification supporting that evaluation.",
          "Our technical team supports application planning and specification queries, helping contractors meet the standard road authorities expect before work is approved to begin.",
        ]}
      />

      <ProductGrid items={PRODUCTS["road-marking"]} />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes This Range Tender Ready"
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Specifying Road Marking Products?"
        description="Get the full technical data sheet set or talk through your project requirements."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents/road-marking"
      />
    </>
  );
}
