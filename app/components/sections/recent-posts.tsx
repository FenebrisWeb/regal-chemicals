import Link from "next/link";
import SectionHeading from "@/app/components/ui/section-heading";
import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import { RECENT_POSTS } from "@/app/data/posts";

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function RecentPosts() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <SectionHeading title="Recent Posts" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {RECENT_POSTS.map((post) => (
            <article key={post.slug} className="flex flex-col gap-4">
              <PlaceholderVisual label="Author" tone="light" className="h-12 w-12 rounded-full text-[10px]" />
              <p className="text-xs font-bold text-black">
                Posted by <span className="text-[#2596be]">{post.author}</span>
              </p>
              <p className="text-xs font-medium text-black">
                {formatDate(post.date)} &middot; {post.readTime}
              </p>
              <Link href={`/journal/${post.slug}`} className="text-lg font-bold text-black hover:text-[#2596be]">
                {post.title}
              </Link>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/[0.05] px-3 py-1 text-xs font-bold text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
