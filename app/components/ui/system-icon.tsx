import type { SVGProps } from "react";

export type SystemIconName =
  | "anti-corrosion"
  | "construction"
  | "floors"
  | "repair-and-protect"
  | "road-marking"
  | "sports"
  | "textures"
  | "waterproofing";

const PATHS: Record<SystemIconName, string> = {
  "anti-corrosion": "M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z",
  construction: "M4 20h16M6 20V10l6-5 6 5v10M10 20v-6h4v6",
  floors: "M3 9h18M3 15h18M9 3v18M15 3v18",
  "repair-and-protect": "M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z",
  "road-marking": "M12 2v4M12 10v4M12 18v4M4 4l4 16M20 4l-4 16",
  sports: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18",
  textures: "M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18",
  waterproofing: "M12 2c3 4.5 6 8.5 6 12a6 6 0 11-12 0c0-3.5 3-7.5 6-12z",
};

interface SystemIconProps extends SVGProps<SVGSVGElement> {
  name: SystemIconName;
}

export default function SystemIcon({ name, className = "", ...props }: SystemIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
