import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import { CULTURE_VALUES, CAREER_BENEFITS } from "@/app/data/career";

export const metadata: Metadata = {
  title: "Our Cultures & Values",
  description: "What it actually means to work at Regal Chemicals, day to day.",
};

export default function CultureAndValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Our Culture & Values"
        description="What we expect from each other, and what you can expect from working here."
      />

      <TextFeature
        eyebrow="How We Work"
        title="A Culture Built Around Ownership and Craft"
        visualLabel="Regal Culture"
        paragraphs={[
          "Construction chemicals are unforgiving, a flooring system either performs on site or it doesn't, a waterproofing membrane either holds or it fails. That reality shapes how we work internally. We hire people who take ownership of outcomes, not just their assigned task, because that is what the products themselves demand.",
          "We also believe good work should be visible. Teams are kept small enough that individual contribution matters and is noticed, whether that is a chemist refining a formulation or a sales engineer solving a tricky application problem on site.",
        ]}
      />

      <PillarGrid
        eyebrow="Our Values"
        title="What We Look For and Build On"
        description="The principles that guide how we hire, train, and work together."
        items={CULTURE_VALUES}
        columns={3}
      />

      <PillarGrid
        eyebrow="Why It's Worth Joining"
        title="What You Actually Get Working Here"
        description="Beyond the job description, this is what shapes day to day work at Regal."
        items={CAREER_BENEFITS}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Sound Like a Place You'd Fit In?"
        description="Explore our current openings or send your resume directly to our team."
        primaryLabel="View Openings"
        primaryHref="/career/opportunities"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
