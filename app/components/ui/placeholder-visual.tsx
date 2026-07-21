import Image from "next/image";
import { slugify } from "@/app/lib/slug";
import type { PlaceholderVisualProps } from "@/types/media";

const TONE_OVERLAY: Record<NonNullable<PlaceholderVisualProps["tone"]>, string> = {
  light: "from-black/40",
  dark: "from-[#07245a]/70",
  brand: "from-[#07245a]/70",
};

export default function PlaceholderVisual({
  label,
  className = "",
  tone = "light",
  seed,
  showLabel = true,
  src,
}: PlaceholderVisualProps) {
  const imageSeed = seed ?? slugify(label);

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-black/10 ${className}`}>
      <Image
        src={src ?? `/images/placeholders/${imageSeed}.jpg`}
        alt={label}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
      {showLabel && (
        <div className={`absolute inset-0 flex items-end bg-gradient-to-t ${TONE_OVERLAY[tone]} to-transparent p-4`}>
          <span className="text-xs font-bold uppercase tracking-wide text-white">{label}</span>
        </div>
      )}
    </div>
  );
}
