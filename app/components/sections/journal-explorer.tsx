"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/app/components/ui/section-heading";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import Reveal from "@/app/components/ui/reveal";
import PostCard from "@/app/components/sections/post-card";
import type { JournalPost } from "@/types/sections";

interface JournalExplorerProps {
  items: JournalPost[];
}

export default function JournalExplorer({ items }: JournalExplorerProps) {
  const categories = useMemo(() => {
    const unique = new Set<string>();
    items.forEach((post) => post.tags.forEach((tag) => {
      if (tag !== "Regal") unique.add(tag);
    }));
    return Array.from(unique).sort();
  }, [items]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? items.filter((post) => post.tags.includes(activeCategory))
    : items;

  return (
    <section className="relative overflow-hidden bg-white py-16">
      <AmbientBubbles tone="brand" className="opacity-60" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionHeading
          eyebrow="Browse by Topic"
          title="All Articles"
          description="Filter by category to find articles relevant to your project."
          align="center"
        />

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              activeCategory === null ? "bg-[#07245a] text-white" : "bg-black/[0.05] text-black hover:bg-black/[0.1]"
            }`}
          >
            All Topics
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                activeCategory === category ? "bg-[#07245a] text-white" : "bg-black/[0.05] text-black hover:bg-black/[0.1]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {filtered.map((post, index) => (
              <Reveal key={post.slug} delayMs={index * 80}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm font-medium text-black/60">
            No articles under this topic yet. Check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
