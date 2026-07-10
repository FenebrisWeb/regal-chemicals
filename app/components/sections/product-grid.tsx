import Image from "next/image";
import Reveal from "@/app/components/ui/reveal";
import Button from "@/app/components/ui/button";
import { getProductImage } from "@/app/data/product-images";
import type { Product } from "@/types/sections";

interface ProductGridProps {
  items: Product[];
  category: string;
}

export default function ProductGrid({ items, category }: ProductGridProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
        {items.map((product, index) => (
          <Reveal key={product.slug} delayMs={index * 60}>
            <article className="flex flex-col gap-5 overflow-hidden rounded-2xl bg-black/[0.03] p-6 sm:p-8 md:flex-row md:items-start md:gap-8">
              <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl md:h-40 md:w-56">
                <Image
                  src={getProductImage(category, product.slug)}
                  alt={product.name}
                  fill
                  sizes="(min-width: 768px) 224px, 100vw"
                  className="object-cover"
                />
                {product.featured && (
                  <span className="absolute left-2 top-2 rounded-full bg-[#2596be] px-3 py-1 text-xs font-bold text-white">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-black">{product.name}</h3>
                    <p className="text-sm font-bold text-[#2596be]">{product.tagline}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#07245a]">
                    {product.packaging}
                  </span>
                </div>

                <p className="text-sm font-medium text-black">{product.description}</p>

                <div className="grid grid-cols-1 gap-x-6 gap-y-2 rounded-xl bg-white p-4 sm:grid-cols-2">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex flex-col gap-0.5 border-b border-black/5 py-1.5 last:border-none sm:border-none">
                      <span className="text-xs font-bold uppercase tracking-[0.1em] text-black/50">{spec.label}</span>
                      <span className="text-sm font-medium text-black">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <Button href={`/contact?product=${encodeURIComponent(product.name)}`} variant="dark" className="w-fit">
                  Send Enquiry
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
