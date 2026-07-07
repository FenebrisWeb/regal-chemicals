export type ButtonVariant = "primary" | "dark" | "light" | "outline" | "outline-light";

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export type AmbientTone = "brand" | "light" | "dark";

export interface AmbientBubblesProps {
  tone?: AmbientTone;
  count?: number;
  className?: string;
}

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in milliseconds, useful for sequencing sibling reveals. */
  delayMs?: number;
}
