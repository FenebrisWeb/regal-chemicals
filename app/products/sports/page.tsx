import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import ProductGrid from "@/app/components/sections/product-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCTS, TENDER_ADVANTAGES } from "@/app/data/products";

export const metadata: Metadata = {
  title: "Sports Products",
  description: "Acrylic and polyurethane sports surfacing products manufactured to documented specifications for sports facility tenders.",
};

export default function SportsProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Sports Products"
        description="Acrylic and polyurethane surfacing products specified for grip, cushioning, and long-term durability on outdoor courts."
      />

      <TextFeature
        eyebrow="Why This Range Wins Tenders"
        title="Surface Performance Figures for Facility Approvals"
        visualLabel="Sports Products"
        paragraphs={[
          "Sports facility tenders, especially those run through schools, municipalities, and sporting bodies, are typically scored against surface hardness, slip resistance, and coating thickness. Every product in this range is manufactured to a fixed specification supporting that scoring.",
          "Our technical team supports layer specification and application guidance, helping ensure the finished surface performs consistently for players, not just on the data sheet.",
        ]}
      />

      <ProductGrid items={PRODUCTS["sports"]} />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes This Range Tender Ready"
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Specifying Sports Products?"
        description="Get the full technical data sheet set or talk through your project requirements."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents/sports"
      />
    </>
  );
}
