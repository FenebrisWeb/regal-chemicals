import type { PlaceholderVisualProps } from "@/types/media";

const TONE_CLASSES: Record<NonNullable<PlaceholderVisualProps["tone"]>, string> = {
  light: "bg-black/5 text-black",
  dark: "bg-[#07245a] text-white",
  brand: "bg-gradient-to-br from-[#2596be] to-[#07245a] text-white",
};

/** Stand-in for real photography/artwork until final assets are supplied. */
export default function PlaceholderVisual({ label, className = "", tone = "light" }: PlaceholderVisualProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-black/10 p-6 text-center text-sm font-bold uppercase tracking-wide ${TONE_CLASSES[tone]} ${className}`}
    >
      {label}
    </div>
  );
}
