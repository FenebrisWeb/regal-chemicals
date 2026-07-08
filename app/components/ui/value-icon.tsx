import type { SVGProps } from "react";
import type { ValueIconName } from "@/types/ui";

const PATHS: Record<ValueIconName, string> = {
  trust: "M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z M9 12l2 2 4-4",
  innovation: "M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0012 3z",
  sustainability: "M12 22c5-2 8-6 8-11a8 8 0 00-16 0c0 5 3 9 8 11z M12 22V10",
  quality: "M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z",
  customer: "M16 14a4 4 0 10-8 0 M12 12a4 4 0 100-8 4 4 0 000 8z M4 21c0-3.5 3.5-6 8-6s8 2.5 8 6",
  operations: "M4 12h4l2-4 4 8 2-4h4",
  growth: "M4 20h16 M6 20V13l4-3 4 4 4-8",
  manufacturing: "M12 8a4 4 0 100 8 4 4 0 000-8z M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  analytics: "M4 20V10M10 20V4M16 20v-7M22 20H2",
};

interface ValueIconProps extends SVGProps<SVGSVGElement> {
  name: ValueIconName;
}

export default function ValueIcon({ name, className = "", ...props }: ValueIconProps) {
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
