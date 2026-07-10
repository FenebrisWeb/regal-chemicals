import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/sections/page-hero";
import Reveal from "@/app/components/ui/reveal";
import { PRODUCT_SYSTEMS } from "@/app/data/systems";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse every page on the Regal Chemicals website.",
};

const SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Our Brand", href: "/about/brand" },
      { label: "Our Purpose", href: "/about/purpose" },
      { label: "Values & Principles", href: "/about/values-principles" },
      { label: "Strategy", href: "/about/strategy" },
      { label: "Operational Efficiency", href: "/about/operational-efficiency" },
      { label: "Procurement", href: "/about/procurement" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      ...PRODUCT_SYSTEMS.map((system) => ({ label: system.name, href: system.productsHref })),
    ],
  },
  {
    title: "Systems",
    links: [
      { label: "All Systems", href: "/systems" },
      ...PRODUCT_SYSTEMS.map((system) => ({ label: `${system.name} Systems`, href: system.systemsHref })),
    ],
  },
  {
    title: "Documents",
    links: [
      { label: "All Documents", href: "/documents" },
      ...PRODUCT_SYSTEMS.map((system) => ({
        label: `${system.name} Documents`,
        href: `/documents/${system.slug}`,
      })),
    ],
  },
  {
    title: "Career",
    links: [
      { label: "Career", href: "/career" },
      { label: "Culture & Values", href: "/career/cultures-and-values" },
      { label: "Open Roles", href: "/career/opportunities" },
    ],
  },
  {
    title: "Journal & Contact",
    links: [
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Sitemap", href: "/sitemap" },
      { label: "Privacy & Cookie Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Every Page on Regal Chemicals"
        description="Use the links below to find your way to any section of the site."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((section, index) => (
            <Reveal key={section.title} delayMs={index * 60}>
              <div className="flex flex-col gap-3">
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#2596be]">{section.title}</h2>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm font-medium text-black hover:text-[#2596be]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
