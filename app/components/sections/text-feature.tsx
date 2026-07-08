import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import Reveal from "@/app/components/ui/reveal";
import type { TextFeatureProps } from "@/types/ui";

export default function TextFeature({ eyebrow, title, paragraphs, visualLabel, reverse = false }: TextFeatureProps) {
  return (
    <section className="bg-white py-16">
      <div
        className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >
        <Reveal className={reverse ? "md:[direction:ltr]" : ""}>
          <PlaceholderVisual label={visualLabel} tone="brand" className="h-72 sm:h-96" />
        </Reveal>

        <Reveal delayMs={120} className={reverse ? "md:[direction:ltr]" : ""}>
          <div className="flex flex-col gap-4">
            {eyebrow && (
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">{eyebrow}</span>
            )}
            <h2 className="text-2xl font-bold text-black sm:text-3xl">{title}</h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base font-medium text-black">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
