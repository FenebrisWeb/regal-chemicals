import type { Metadata } from "next";
import PageHero from "@/app/components/sections/page-hero";
import ContactForm from "@/app/components/sections/contact-form";
import ContactInfo from "@/app/components/sections/contact-info";
import Button from "@/app/components/ui/button";
import Reveal from "@/app/components/ui/reveal";
import AmbientBubbles from "@/app/components/ui/ambient-bubbles";
import { EMAILS } from "@/app/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Regal Chemicals team for products, systems, technical support, or tender documentation.",
};

const ROUTING_CARDS = [
  {
    title: "Sales & Orders",
    description: "Product availability, pricing, and order placement for distributors and contractors.",
    ctaLabel: "Explore Products",
    ctaHref: "/products",
  },
  {
    title: "Technical Support",
    description: "Application guidance, system recommendations, and on-site troubleshooting.",
    ctaLabel: "Explore Systems",
    ctaHref: "/systems",
  },
  {
    title: "Tenders & Documents",
    description: "TDS, MSDS, and compliance documentation for procurement and tender submissions.",
    ctaLabel: "View Documents",
    ctaHref: "/documents",
  },
  {
    title: "Careers",
    description: "Current openings and general resume submissions across all departments.",
    ctaLabel: "View Openings",
    ctaHref: "/career/opportunities",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        description="Whether it is a product question, a technical specification, or a tender document request, our team responds directly, not through a call centre."
      />

      <section className="relative overflow-hidden bg-white py-16">
        <AmbientBubbles tone="brand" className="opacity-60" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delayMs={120}>
            <div className="flex h-full flex-col gap-4 rounded-2xl bg-[#07245a] p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">Response Time</span>
              <h3 className="text-xl font-bold">We Reply Within One Business Day</h3>
              <p className="text-sm font-medium text-white/85">
                Technical and tender related queries are routed straight to the relevant team, so you are not
                waiting on a generic inbox.
              </p>

              <div className="mt-2 flex flex-col gap-1 border-t border-white/15 pt-4">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">Office Hours</span>
                <p className="text-sm font-medium text-white/90">Monday to Saturday, 9:30 AM to 6:30 PM</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">Prefer Email</span>
                {EMAILS.map((email) => (
                  <a key={email.value} href={email.href} className="text-sm font-medium text-white hover:text-[#2596be]">
                    {email.value}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactInfo />

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2596be]">Reach the Right Team</span>
            <h2 className="text-3xl font-bold text-black sm:text-4xl">Not Sure Who to Contact?</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ROUTING_CARDS.map((card, index) => (
              <Reveal key={card.title} delayMs={index * 80}>
                <div className="flex h-full flex-col gap-3 rounded-2xl bg-black/[0.03] p-6">
                  <h3 className="text-lg font-bold text-black">{card.title}</h3>
                  <p className="flex-1 text-sm font-medium text-black">{card.description}</p>
                  <Button href={card.ctaHref} variant="dark" className="w-fit">
                    {card.ctaLabel}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
