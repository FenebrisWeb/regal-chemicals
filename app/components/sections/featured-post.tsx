import Link from "next/link";
import Button from "@/app/components/ui/button";
import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import Reveal from "@/app/components/ui/reveal";
import { formatPostDate } from "@/app/components/sections/post-card";
import type { JournalPost } from "@/types/sections";

interface FeaturedPostProps {
  post: JournalPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="bg-white pb-4 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <article className="grid grid-cols-1 overflow-hidden rounded-3xl bg-black/[0.03] md:grid-cols-2">
            <Link href={`/journal/${post.slug}`} className="block">
              <PlaceholderVisual
                label={post.tags[0] ?? "Journal"}
                tone="brand"
                className="h-64 rounded-none border-none md:h-full"
              />
            </Link>

            <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
              <span className="w-fit rounded-full bg-[#2596be]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#2596be]">
                Latest From the Journal
              </span>
              <Link href={`/journal/${post.slug}`} className="text-2xl font-bold text-black hover:text-[#2596be] sm:text-3xl">
                {post.title}
              </Link>
              <p className="text-base font-medium text-black">{post.excerpt}</p>
              <p className="text-xs font-medium text-black/60">
                By {post.author} &middot; {formatPostDate(post.date)} &middot; {post.readTime}
              </p>
              <Button href={`/journal/${post.slug}`} variant="dark" className="w-fit">
                Read Full Article
              </Button>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
