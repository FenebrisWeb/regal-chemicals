import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/sections/page-hero";
import JournalGrid from "@/app/components/sections/journal-grid";
import CtaStrip from "@/app/components/sections/cta-strip";
import Reveal from "@/app/components/ui/reveal";
import ReadingProgress from "@/app/components/ui/reading-progress";
import ShareLinks from "@/app/components/ui/share-links";
import { formatPostDate } from "@/app/components/sections/post-card";
import { slugify } from "@/app/lib/slug";
import { RECENT_POSTS } from "@/app/data/posts";
import { JOURNAL_CONTENT } from "@/app/data/journal-content";

interface JournalPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return RECENT_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: JournalPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = RECENT_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Journal" };
  }

  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({ params }: JournalPostPageProps) {
  const { slug } = await params;
  const post = RECENT_POSTS.find((item) => item.slug === slug);
  const body = JOURNAL_CONTENT[slug];

  if (!post || !body) {
    notFound();
  }

  const relatedByTag = RECENT_POSTS.filter(
    (item) => item.slug !== slug && item.tags.some((tag) => post.tags.includes(tag) && tag !== "Regal")
  );
  const fallbackRelated = RECENT_POSTS.filter((item) => item.slug !== slug);
  const morePosts = (relatedByTag.length > 0 ? relatedByTag : fallbackRelated).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={post.tags[0] ?? "Journal"} title={post.title} description={post.excerpt} />

      <ReadingProgress />

      <section className="bg-white pt-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-black/60">
            <span>By {post.author}</span>
            <span>&middot;</span>
            <span>{formatPostDate(post.date)}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <ShareLinks title={post.title} />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/60">On This Page</span>
              <nav className="flex flex-col gap-2">
                {body.sections.map((section) => (
                  <a
                    key={section.heading}
                    href={`#${slugify(section.heading)}`}
                    className="text-sm font-medium text-black/70 hover:text-[#2596be]"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex flex-col gap-10">
            {body.sections.map((section, index) => (
              <Reveal key={section.heading} delayMs={index * 80}>
                <div id={slugify(section.heading)} className="flex scroll-mt-24 flex-col gap-3">
                  <h2 className="text-xl font-bold text-black sm:text-2xl">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base font-medium text-black">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {morePosts.length > 0 && (
        <JournalGrid eyebrow="Keep Reading" title="More From the Journal" items={morePosts} />
      )}

      <CtaStrip
        title="Ready to Start Your Next Project?"
        description="Talk to our technical team about the right Regal system for your application."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="Explore Systems"
        secondaryHref="/systems"
      />
    </>
  );
}
