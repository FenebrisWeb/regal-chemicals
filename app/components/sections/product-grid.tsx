import Reveal from "@/app/components/ui/reveal";
import Button from "@/app/components/ui/button";
import { getEnquiryMailto } from "@/app/data/contact";
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
            <article className="flex flex-col gap-5 overflow-hidden rounded-2xl bg-black/[0.03] p-6 sm:p-8">
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-black">{product.name}</h3>
                      {product.featured && (
                        <span className="badge-loop-pulse rounded-full bg-[#2596be] px-3 py-1 text-xs font-bold text-white">
                          Featured
                        </span>
                      )}
                    </div>
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

                <Button href={getEnquiryMailto(product.name)} variant="dark" className="w-fit">
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
