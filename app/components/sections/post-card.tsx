import Link from "next/link";
import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import type { JournalPost } from "@/types/sections";

interface PostCardProps {
  post: JournalPost;
}

export function formatPostDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 overflow-hidden rounded-2xl bg-black/[0.03]">
      <Link href={`/journal/${post.slug}`} className="block">
        <PlaceholderVisual label={post.tags[0] ?? "Journal"} tone="brand" className="h-48 rounded-none border-none" />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-black/[0.05] px-3 py-1 text-xs font-bold text-black">
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/journal/${post.slug}`} className="text-lg font-bold text-black hover:text-[#2596be]">
          {post.title}
        </Link>

        <p className="flex-1 text-sm font-medium text-black">{post.excerpt}</p>

        <p className="text-xs font-medium text-black/60">
          {formatPostDate(post.date)} &middot; {post.readTime}
        </p>
      </div>
    </article>
  );
}
