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

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export type ValueIconName =
  | "trust"
  | "innovation"
  | "sustainability"
  | "quality"
  | "customer"
  | "operations"
  | "growth"
  | "manufacturing"
  | "analytics";

export interface PillarItem {
  icon: ValueIconName;
  title: string;
  description: string;
}

export interface PillarGridProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: PillarItem[];
  columns?: 3 | 4;
  tone?: "light" | "dark";
}

export interface TextFeatureProps {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  visualLabel: string;
  reverse?: boolean;
}

export interface SystemGridItem {
  slug: string;
  name: string;
  description: string;
  systemsHref: string;
  productsHref: string;
}

export interface SystemGridProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: SystemGridItem[];
  ctaLabel?: string;
}
