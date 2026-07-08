import SectionHeading from "@/app/components/ui/section-heading";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import Reveal from "@/app/components/ui/reveal";
import PostCard from "@/app/components/sections/post-card";
import type { JournalPost } from "@/types/sections";

interface JournalGridProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: JournalPost[];
}

export default function JournalGrid({ eyebrow, title, description, items }: JournalGridProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <AmbientBubbles tone="brand" className="opacity-60" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        {title && <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" />}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((post, index) => (
            <Reveal key={post.slug} delayMs={index * 100}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
