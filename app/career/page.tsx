import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import TextFeature from "@/app/components/sections/text-feature";
import PillarGrid from "@/app/components/sections/pillar-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import Button from "@/app/components/ui/button";
import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import Reveal from "@/app/components/ui/reveal";
import { CULTURE_VALUES } from "@/app/data/career";

export const metadata: Metadata = {
  title: "Career",
  description: "Build your career at Regal Chemicals, working on the products and systems trusted across construction and infrastructure.",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Build Something That Lasts"
        description="Join a team that formulates, tests, and supports the systems behind real infrastructure, not just products on a shelf."
      />

      <TextFeature
        eyebrow="Why Regal"
        title="A Team Close to the Product and the Project"
        visualLabel="Life at Regal"
        paragraphs={[
          "Whether you are on the production floor, in the lab, or out visiting a site with a contractor, the work at Regal is grounded in something concrete, literally. We build careers around real technical exposure, not just a title.",
          "We keep teams lean enough that individual contribution is visible, and structured enough that new hires get proper training before being expected to perform independently.",
        ]}
      />

      <section className="relative overflow-hidden bg-white py-16">
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <Reveal>
            <article className="overflow-hidden rounded-2xl bg-black/[0.03]">
              <PlaceholderVisual label="Our Culture" tone="brand" className="h-64 rounded-none border-none sm:h-72" />
              <div className="flex flex-col gap-4 p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">Culture</span>
                <h3 className="text-2xl font-bold text-black">Our Culture & Values</h3>
                <p className="text-sm font-medium text-black">
                  What we expect from each other, and what you can expect from working here.
                </p>
                <Button href="/career/cultures-and-values" variant="dark" className="w-fit">
                  Learn More
                </Button>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={120}>
            <article className="overflow-hidden rounded-2xl bg-black/[0.03]">
              <PlaceholderVisual label="Open Roles" tone="brand" className="h-64 rounded-none border-none sm:h-72" />
              <div className="flex flex-col gap-4 p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">Openings</span>
                <h3 className="text-2xl font-bold text-black">Available Opportunities</h3>
                <p className="text-sm font-medium text-black">
                  Current openings across sales, technical services, manufacturing, and marketing.
                </p>
                <Button href="/career/opportunities" variant="dark" className="w-fit">
                  View Openings
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <PillarGrid
        eyebrow="What We Value"
        title="How We Work"
        description="The principles that shape how teams operate day to day at Regal."
        items={CULTURE_VALUES}
        columns={4}
        tone="dark"
      />

      <CtaStrip
        title="Don't See the Right Role Yet?"
        description="We are always open to hearing from people who want to work close to the product and the project."
        primaryLabel="Send Your Resume"
        primaryHref="mailto:careers@regalchemicals.co.uk"
        secondaryLabel="View Openings"
        secondaryHref="/career/opportunities"
      />
    </>
  );
}
