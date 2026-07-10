import ProductCarouselTrack from "@/app/components/sections/product-carousel-track";
import { PRODUCTS } from "@/app/data/products";

const CATEGORIES = [
  "sports",
  "waterproofing",
  "anti-corrosion",
  "floors",
  "construction",
  "repair-and-protect",
  "road-marking",
  "textures",
];

function getShowcaseProducts() {
  const featured = Object.entries(PRODUCTS).flatMap(([category, items]) =>
    items.filter((item) => item.featured).map((item) => ({ category, product: item }))
  );

  const oneEach = CATEGORIES.map((category) => {
    const items = PRODUCTS[category] ?? [];
    const product = items.find((item) => !item.featured) ?? items[0];
    return product ? { category, product } : null;
  }).filter((entry): entry is { category: string; product: (typeof featured)[number]["product"] } => entry !== null);

  return [...featured, ...oneEach].filter(
    (entry, index, all) => all.findIndex((other) => other.product.slug === entry.product.slug) === index
  );
}

export default function ProductCarousel() {
  const showcase = getShowcaseProducts();

  return (
    <section className="bg-black/[0.03] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">Our Range</span>
          <h2 className="text-3xl font-bold text-black sm:text-4xl">Explore Regal Products</h2>
          <p className="max-w-2xl text-sm font-medium text-black/70">
            A cross section of our range, from anticorrosion coatings to sports surfacing systems.
          </p>
        </div>

        <ProductCarouselTrack items={showcase} />
      </div>
    </section>
  );
}
