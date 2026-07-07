import Link from "next/link";
import type { ButtonProps, ButtonVariant } from "@/types/ui";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-[#2596be] text-white hover:bg-[#07245a]",
  dark: "bg-[#07245a] text-white hover:bg-[#2596be]",
  light: "bg-white text-[#07245a] hover:bg-black hover:text-white",
  outline: "border-2 border-black text-black hover:bg-black hover:text-white",
  "outline-light": "border-2 border-white text-white hover:bg-white hover:text-[#07245a]",
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
