import type { AmbientBubblesProps, AmbientTone } from "@/types/ui";

const TONE_COLORS: Record<AmbientTone, string> = {
  brand: "radial-gradient(circle at 30% 30%, #2596be, #2596be55)",
  light: "radial-gradient(circle at 30% 30%, #07245a, #07245a33)",
  dark: "radial-gradient(circle at 30% 30%, #ffffff, #ffffff55)",
};

const SIZES = [8, 12, 6, 14, 9, 11];
const LEFT_POSITIONS = [8, 24, 42, 58, 74, 90];
const DURATIONS = [7, 9, 6.5, 8.5, 7.5, 10];
const DELAYS = [0, 1.4, 0.6, 2.2, 1, 2.8];

/**
 * Purely decorative rising-bubble ambience. Renders no JS, so it's safe in
 * server components. Place inside a `relative overflow-hidden` container.
 */
export default function AmbientBubbles({ tone = "brand", count = 6, className = "" }: AmbientBubblesProps) {
  const total = Math.min(count, SIZES.length);

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className="ambient-bubble"
          style={{
            left: `${LEFT_POSITIONS[index]}%`,
            width: `${SIZES[index]}px`,
            height: `${SIZES[index]}px`,
            background: TONE_COLORS[tone],
            animationDuration: `${DURATIONS[index]}s`,
            animationDelay: `${DELAYS[index]}s`,
          }}
        />
      ))}
    </div>
  );
}
