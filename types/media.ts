export interface PlaceholderVisualProps {
  label: string;
  className?: string;
  tone?: "light" | "dark" | "brand";
  /** Seed used to pick a consistent demo photo (defaults to a slug of `label`). */
  seed?: string;
  /** Show the label as a caption chip over the image. */
  showLabel?: boolean;
  /** Explicit image path, overriding the seeded placeholder photo. */
  src?: string;
}
