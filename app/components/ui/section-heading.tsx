import type { SectionHeadingProps } from "@/types/ui";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const eyebrowColor = light ? "text-[#2596be]" : "text-[#2596be]";
  const titleColor = light ? "text-white" : "text-black";
  const descriptionColor = light ? "text-white" : "text-black";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className={`text-xs font-bold uppercase tracking-[0.2em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`max-w-2xl text-base font-medium ${descriptionColor}`}>{description}</p>
      )}
    </div>
  );
}
