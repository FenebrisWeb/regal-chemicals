import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import ProductGrid from "@/app/components/sections/product-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCTS, TENDER_ADVANTAGES } from "@/app/data/products";

export const metadata: Metadata = {
  title: "Repair and Protect Products",
  description: "Injection grouts, repair mortars, and protective coatings manufactured to documented specifications for restoration tenders.",
};

export default function RepairAndProtectProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Repair and Protect Products"
        description="Injection grouts, repair mortars, and protective coatings specified for restoring and protecting damaged structures."
      />

      <TextFeature
        eyebrow="Why This Range Wins Tenders"
        title="Restoration Backed by Structural Test Data"
        visualLabel="Repair and Protect Products"
        paragraphs={[
          "Restoration tenders are frequently reviewed against compressive strength, bond strength to existing concrete, and shrinkage figures, since the repair needs to perform as well as the original structure. Every product in this range is tested against a fixed specification to support that review.",
          "Our technical team assists with method statements and on-site guidance, helping restoration contractors meet the standard evaluators expect from a structural repair scope.",
        ]}
      />

      <ProductGrid items={PRODUCTS["repair-and-protect"]} />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes This Range Tender Ready"
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Specifying Repair and Protect Products?"
        description="Get the full technical data sheet set or talk through your project requirements."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents/repair-and-protect"
      />
    </>
  );
}
