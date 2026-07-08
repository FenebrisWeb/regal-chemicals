import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import FeaturedPost from "@/app/components/sections/featured-post";
import JournalExplorer from "@/app/components/sections/journal-explorer";
import NewsletterSignup from "@/app/components/sections/newsletter-signup";
import CtaStrip from "@/app/components/sections/cta-strip";
import { RECENT_POSTS } from "@/app/data/posts";

export const metadata: Metadata = {
  title: "Journal",
  description: "Field notes, product comparisons, and practical guidance from the Regal technical team.",
};

export default function JournalPage() {
  const sortedPosts = [...RECENT_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Insights From the Field"
        description="Practical guidance on waterproofing, flooring, corrosion protection, and construction chemicals, written from real project experience."
      />

      {featured && <FeaturedPost post={featured} />}

      <JournalExplorer items={rest.length > 0 ? rest : sortedPosts} />

      <NewsletterSignup />

      <CtaStrip
        title="Have a Question About Your Project?"
        description="Our technical team is happy to walk through the right system for your site conditions."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="Explore Systems"
        secondaryHref="/systems"
      />
    </>
  );
}
