import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import SectionHeading from "@/app/components/ui/section-heading";
import JobList from "@/app/components/sections/job-list";
import CtaStrip from "@/app/components/sections/cta-strip";
import { JOB_OPENINGS } from "@/app/data/career";

export const metadata: Metadata = {
  title: "Available Opportunities",
  description: "Current openings at Regal Chemicals across sales, technical services, manufacturing, and marketing.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Available Opportunities"
        description="Current openings across sales, technical services, manufacturing, and marketing."
      />

      <section className="bg-white pt-12">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Open Roles"
            title={`${JOB_OPENINGS.length} Positions Open Right Now`}
            description="Review the role details below and apply directly by email. We aim to respond to every application within a week."
          />
        </div>
      </section>

      <JobList items={JOB_OPENINGS} />

      <CtaStrip
        title="Don't See a Role That Fits?"
        description="We are always open to hearing from people who want to work close to the product and the project. Send your resume and tell us where you'd add value."
        primaryLabel="Send Your Resume"
        primaryHref="mailto:careers@regalchemicals.co.uk"
        secondaryLabel="Our Culture & Values"
        secondaryHref="/career/cultures-and-values"
      />
    </>
  );
}
