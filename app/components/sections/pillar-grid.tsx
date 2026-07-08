import SectionHeading from "@/app/components/ui/section-heading";
import ValueIcon from "@/app/components/ui/value-icon";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import Reveal from "@/app/components/ui/reveal";
import type { PillarGridProps } from "@/types/ui";

export default function PillarGrid({ eyebrow, title, description, items, columns = 3, tone = "light" }: PillarGridProps) {
  const isDark = tone === "dark";
  const gridCols = columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";

  return (
    <section className={`relative overflow-hidden py-16 ${isDark ? "bg-[#07245a]" : "bg-white"}`}>
      <AmbientBubbles tone={isDark ? "dark" : "brand"} className="opacity-60" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" light={isDark} />

        <div className={`grid grid-cols-1 gap-6 ${gridCols}`}>
          {items.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 100}>
              <div
                className={`flex h-full flex-col gap-4 rounded-2xl p-6 ${
                  isDark ? "bg-white/[0.06] border border-white/10" : "bg-black/[0.03]"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    isDark ? "bg-white/10 text-white" : "bg-[#2596be]/10 text-[#2596be]"
                  }`}
                >
                  <ValueIcon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>{item.title}</h3>
                <p className={`text-sm font-medium ${isDark ? "text-white/85" : "text-black"}`}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
