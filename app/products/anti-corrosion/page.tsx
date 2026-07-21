import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import ProductGrid from "@/app/components/sections/product-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCTS, TENDER_ADVANTAGES } from "@/app/data/products";
import { CATEGORY_FEATURE_IMAGE } from "@/app/data/product-images";

export const metadata: Metadata = {
  title: "Anti Corrosion Products",
  description: "Primers, cathodic protection coats, and topcoats built to documented specifications for anticorrosion tenders.",
};

export default function AntiCorrosionProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Anti Corrosion Products"
        description="Primers, cathodic protection coats, and topcoats specified for steel and concrete protection in demanding environments."
      />

      <TextFeature
        eyebrow="Why This Range Wins Tenders"
        title="Specification Figures That Hold Up to Review"
        visualLabel="Anti Corrosion Products"
        visualSrc={CATEGORY_FEATURE_IMAGE["anti-corrosion"]}
        paragraphs={[
          "Anticorrosion tenders are usually scored against dry film thickness, zinc content, and salt spray resistance figures. Every product in this range is manufactured to a fixed specification, so the numbers in your submission match what actually gets applied on site.",
          "Beyond the data sheet, our technical team supports specification review and site application guidance, reducing the risk of a coating system being flagged during inspection.",
        ]}
      />

      <ProductGrid items={PRODUCTS["anti-corrosion"]} category="anti-corrosion" />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes This Range Tender Ready"
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Specifying Anti Corrosion Products?"
        description="Get the full technical data sheet set or talk through your project requirements."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents/anti-corrosion"
      />
    </>
  );
}
