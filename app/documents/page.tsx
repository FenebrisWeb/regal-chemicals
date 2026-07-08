import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import SystemGrid from "@/app/components/sections/system-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCT_SYSTEMS } from "@/app/data/systems";
import { DOCUMENT_TYPES, REQUEST_STEPS, TENDER_PILLARS } from "@/app/data/documents";

export const metadata: Metadata = {
  title: "Documents",
  description: "Technical Data Sheets, Material Safety Data Sheets, and compliance documentation for every Regal product range.",
};

const DOCUMENT_CATEGORIES = PRODUCT_SYSTEMS.map((system) => ({
  slug: system.slug,
  name: system.name,
  description: system.description,
  systemsHref: `/documents/${system.slug}`,
  productsHref: system.productsHref,
}));

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Documentation Built for Due Diligence"
        description="Technical Data Sheets, Material Safety Data Sheets, and compliance records for every product range, prepared for procurement teams, consultants, and tender committees."
      />

      <TextFeature
        eyebrow="Why It Matters"
        title="Paperwork That Holds Up to Scrutiny"
        visualLabel="Regal Documentation"
        paragraphs={[
          "A tender or procurement file is only as strong as the documentation behind it. Government and institutional buyers need to confirm that a product performs as claimed, is handled safely on site, and meets the specifications written into the project scope. That confirmation comes from the data sheets, not the marketing copy.",
          "Regal maintains a current TDS and MSDS for every product we manufacture. Our technical team keeps that documentation aligned with what actually ships, so the paperwork your team submits matches the material delivered to site.",
        ]}
      />

      <PillarGrid
        eyebrow="What We Provide"
        title="Documentation Available for Every Product"
        description="A complete document set, not just a single data sheet."
        items={DOCUMENT_TYPES}
        columns={4}
      />

      <SystemGrid
        eyebrow="Browse by Category"
        title="Find Documents by Product Range"
        description="Select a category to see the documentation available for that range."
        items={DOCUMENT_CATEGORIES}
        ctaLabel="View Documents"
      />

      <PillarGrid
        eyebrow="Built for Tenders"
        title="Why Buyers Rely on Our Documentation"
        description="What procurement and tender committees consistently ask for, and what we deliver."
        items={TENDER_PILLARS}
        columns={3}
        tone="dark"
      />

      <PillarGrid
        eyebrow="How It Works"
        title="Requesting Documents Is Simple"
        description="No portals to navigate, no forms to chase. Just a direct request to our technical team."
        items={REQUEST_STEPS}
        columns={3}
      />

      <CtaStrip
        title="Need Documents for a Tender or Project File?"
        description="Reach out with the products you need and our technical team will send the full document set."
        primaryLabel="Request Documents"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      />
    </>
  );
}
