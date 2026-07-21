import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import SystemGrid from "@/app/components/sections/system-grid";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCT_SYSTEMS } from "@/app/data/systems";
import { TENDER_ADVANTAGES } from "@/app/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Certified construction chemicals and flooring products from Regal, built to specification and ready for tender submission.",
};

const PRODUCT_CATEGORIES = PRODUCT_SYSTEMS.map((system) => ({
  slug: system.slug,
  name: system.name,
  description: system.description,
  systemsHref: system.productsHref,
  productsHref: system.productsHref,
}));

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products Built to Win on Specification"
        description="Every Regal product is manufactured to a fixed specification and backed by documentation, so what gets evaluated in a tender is exactly what gets delivered to site."
      />

      <TextFeature
        eyebrow="Why It Matters"
        title="Tenders Are Won on Proof, Not Just Price"
        visualLabel="Regal Products"
        visualSrc="/images/products/productimages.webp"
        paragraphs={[
          "Government and institutional tenders are increasingly evaluated on documented performance, not just the lowest bid. Evaluators want to see consistent specifications, verifiable test data, and a supplier who can deliver the same quality across the full order, not just the sample submitted for approval.",
          "Regal builds every product range around that expectation. Specifications are fixed, batch tested, and backed by a Technical Data Sheet and Material Safety Data Sheet available on request, so your submission holds up through every stage of evaluation.",
        ]}
      />

      <SystemGrid
        eyebrow="Browse by Category"
        title="Eight Ranges, Built for Every Application"
        description="Select a category to see the full product range with specifications."
        items={PRODUCT_CATEGORIES}
        ctaLabel="View Products"
      />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="What Makes Our Products Tender Ready"
        description="The specification and support advantages evaluators consistently look for."
        items={TENDER_ADVANTAGES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Preparing a Tender Submission?"
        description="Talk to our technical team for product specifications, sample quantities, or a full documentation set."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="View Documents"
        secondaryHref="/documents"
      />
    </>
  );
}
