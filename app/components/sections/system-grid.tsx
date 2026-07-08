import SectionHeading from "@/app/components/ui/section-heading";
import SystemIcon from "@/app/components/ui/system-icon";
import Button from "@/app/components/ui/button";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import Reveal from "@/app/components/ui/reveal";
import type { SystemGridProps } from "@/types/ui";
import type { SystemIconName } from "@/app/components/ui/system-icon";

export default function SystemGrid({ eyebrow, title, description, items }: SystemGridProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <AmbientBubbles tone="brand" className="opacity-60" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.slug} delayMs={index * 80}>
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-black/[0.03] p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2596be]/10 text-[#2596be]">
                  <SystemIcon name={item.slug as SystemIconName} className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-black">{item.name}</h3>
                <p className="flex-1 text-sm font-medium text-black">{item.description}</p>
                <Button href={item.systemsHref} variant="dark" className="w-fit">
                  Explore System
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
