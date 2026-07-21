const DEFAULT_IMAGE = "/images/products/productimages.webp";

const CATEGORY_IMAGE: Record<string, string> = {
  "anti-corrosion": DEFAULT_IMAGE,
  construction: DEFAULT_IMAGE,
  floors: DEFAULT_IMAGE,
  "repair-and-protect": DEFAULT_IMAGE,
  "road-marking": DEFAULT_IMAGE,
  sports: DEFAULT_IMAGE,
  textures: DEFAULT_IMAGE,
  waterproofing: DEFAULT_IMAGE,
};

const PRODUCT_IMAGE_OVERRIDE: Record<string, string> = {
  // Category showcase products (homepage carousel)
  "regal-zinc-primer-30": "/images/HomePage/Regal-Zinc-Primer-30.webp",
  "regal-block-fix-70": "/images/HomePage/Regal-Block-Fix-70.webp",
  "regal-epoxy-floor-hd40": "/images/HomePage/Regal-Epoxy-Floor-HD40.webp",
  "regal-inject-seal-25": "/images/HomePage/Regal-InjectSeal-25.webp",
  "regal-thermo-mark-tp": "/images/HomePage/Regal-ThermoMark-TP.webp",
  "regal-acrylic-resurfacer-sf-101": "/images/HomePage/Regal-Acrylic-Resurfacer-SF-101.webp",
  "regal-court-base-acrylic": "/images/HomePage/Regal-CourtBase-Acrylic.webp",
  "regal-stucco-art": "/images/HomePage/Regal-Stucco-Art.webp",
  "regal-pu-gel-membrane": "/images/HomePage/Regal-PU-Gel-Membrane.webp",

  // Sports category products
  "regal-cushion-rc-106": "/images/products/cushion106.webp",
  "regal-court-color-t150": "/images/products/courtcolor.webp",
  "regal-epdm-granules": "/images/products/Regal EPDM Granules.webp",
  "regal-track-kote-40": "/images/products/Regal TrackKote 40.webp",
  "regal-pitch-mark-line": "/images/products/Regal Pitch Mark Line Paint.webp",
};

export function getProductImage(category: string, slug: string) {
  return PRODUCT_IMAGE_OVERRIDE[slug] ?? CATEGORY_IMAGE[category] ?? DEFAULT_IMAGE;
}

// Representative image for each category's product-page feature sections.
export const CATEGORY_FEATURE_IMAGE: Record<string, string> = {
  "anti-corrosion": "/images/HomePage/Regal-Zinc-Primer-30.webp",
  construction: "/images/HomePage/Regal-Block-Fix-70.webp",
  floors: "/images/HomePage/Regal-Epoxy-Floor-HD40.webp",
  "repair-and-protect": "/images/HomePage/Regal-InjectSeal-25.webp",
  "road-marking": "/images/HomePage/Regal-ThermoMark-TP.webp",
  sports: "/images/HomePage/Regal-Acrylic-Resurfacer-SF-101.webp",
  textures: "/images/HomePage/Regal-Stucco-Art.webp",
  waterproofing: "/images/HomePage/Regal-PU-Gel-Membrane.webp",
};
