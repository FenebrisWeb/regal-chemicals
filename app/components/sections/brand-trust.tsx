import Button from "@/app/components/ui/button";
import PlaceholderVisual from "@/app/components/ui/placeholder-visual";
import SectionHeading from "@/app/components/ui/section-heading";
import { PRODUCT_SYSTEMS } from "@/app/data/systems";

export default function BrandTrust() {
  return (
    <section className="bg-[#07245a] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionHeading
          eyebrow="Regal Chemicals"
          title="A Brand Built on Trust, Driven by Innovation"
          description="Regal stands as a symbol of reliability in the construction chemicals industry, delivering certified, high-performance solutions across diverse applications. Our purpose is to empower infrastructure with products that uphold safety, durability, and sustainability, backed by years of expertise, continuous innovation, and an unshakable commitment to customer trust."
          align="center"
          light
        />

        <ul className="flex flex-col divide-y divide-white/10">
          {PRODUCT_SYSTEMS.map((system) => (
            <li
              key={system.slug}
              className="flex flex-col items-center gap-6 py-6 sm:flex-row sm:items-center"
            >
              <PlaceholderVisual
                label={system.name}
                tone="dark"
                className="h-20 w-20 shrink-0 border-white/20 text-[11px]"
              />

              <p className="flex-1 text-sm font-medium text-white">{system.description}</p>

              <div className="flex shrink-0 gap-3">
                <Button href={system.productsHref} variant="primary">
                  View Products
                </Button>
                <Button href={system.systemsHref} variant="outline-light">
                  View Systems
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
