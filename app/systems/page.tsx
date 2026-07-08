import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import SystemGrid from "@/app/components/sections/system-grid";
import TextFeature from "@/app/components/sections/text-feature";
import CtaStrip from "@/app/components/sections/cta-strip";
import { PRODUCT_SYSTEMS } from "@/app/data/systems";

export const metadata: Metadata = {
  title: "Systems",
  description: "Layered Regal systems engineered for anticorrosion, construction, flooring, repair, road marking, sports, textures, and waterproofing.",
};

export default function SystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="Complete Systems, Not Just Products"
        description="Every Regal system pairs the right primer, base coat, and topcoat so your project performs the way it was designed to, from day one through years of use."
      />

      <TextFeature
        eyebrow="Why Systems Matter"
        title="A Single Product Rarely Solves the Whole Problem"
        visualLabel="Regal Systems"
        paragraphs={[
          "Most coating and construction failures come down to the same issue, one layer was skipped, or the wrong product was used for the surface and exposure it had to handle. Regal builds each system as a complete sequence, so every layer does its job and the finished result holds up under real conditions.",
          "Our technical team works with contractors, architects, and facility managers to specify the right system for the application, not just a single product off a shelf. Explore each system below to see what it covers and where it is used.",
        ]}
      />

      <SystemGrid
        eyebrow="Explore by Application"
        title="Eight Systems, Built for Every Surface"
        description="From anticorrosion protection to waterproofing, each system is engineered as a matched set of products."
        items={PRODUCT_SYSTEMS}
      />

      <CtaStrip
        title="Not Sure Which System Fits Your Project?"
        description="Talk to our technical team and get a system recommendation built around your site conditions."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      />
    </>
  );
}
