const CATEGORY_IMAGE: Record<string, string> = {
  "anti-corrosion": "/images/products/anti-corrosion.jpg",
  construction: "/images/products/construction.jpg",
  floors: "/images/products/floors.jpg",
  "repair-and-protect": "/images/products/repair-and-protect.jpg",
  "road-marking": "/images/products/road-marking.jpg",
  sports: "/images/products/sports.jpg",
  textures: "/images/products/textures.jpg",
  waterproofing: "/images/products/waterproofing.jpg",
};

const PRODUCT_IMAGE_OVERRIDE: Record<string, string> = {
  "regal-acrylic-resurfacer-sf-101": "/images/products/regal-acrylic-resurfacer-sf-101.jpg",
};

export function getProductImage(category: string, slug: string) {
  return PRODUCT_IMAGE_OVERRIDE[slug] ?? CATEGORY_IMAGE[category] ?? "/images/products/construction.jpg";
}
