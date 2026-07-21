"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/button";
import SectionHeading from "@/app/components/ui/section-heading";
import SystemIcon, { type SystemIconName } from "@/app/components/ui/system-icon";
import { PRODUCT_SYSTEMS } from "@/app/data/systems";

export default function BrandTrust() {
  const [active, setActive] = useState(0);
  const system = PRODUCT_SYSTEMS[active];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="lg:flex-1">
            <SectionHeading
              eyebrow="Regal Chemicals"
              title="A Brand Built on Trust, Driven by Innovation"
              description="Regal stands as a symbol of reliability in the construction chemicals industry, delivering certified, high-performance solutions across diverse applications, backed by years of expertise and continuous innovation."
              align="center"
            />
          </div>
          <div className="relative hidden h-48 w-72 shrink-0 overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/HomePage/A-Brand-Built-on-Trust,-Powered-by-Innovation.webp"
              alt="A Brand Built on Trust, Powered by Innovation"
              fill
              sizes="288px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:w-64 lg:shrink-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0">
            {PRODUCT_SYSTEMS.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-bold transition-colors ${
                    isActive ? "bg-[#07245a] text-white" : "bg-black/[0.04] text-black hover:bg-black/[0.08]"
                  }`}
                >
                  <SystemIcon
                    name={item.slug as SystemIconName}
                    className={`h-5 w-5 shrink-0 ${isActive ? "text-[#2596be]" : "text-[#2596be]"}`}
                  />
                  <span className="whitespace-nowrap">{item.name}</span>
                </button>
              );
            })}
          </div>

          <div
            key={system.slug}
            className="brand-panel-in flex flex-1 flex-col gap-5 rounded-2xl bg-gradient-to-br from-[#2596be] to-[#07245a] p-8 sm:p-10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-white">
              <SystemIcon name={system.slug as SystemIconName} className="h-7 w-7" />
            </span>
            <h3 className="text-2xl font-bold text-white">{system.name}</h3>
            <p className="max-w-2xl text-base font-medium text-white/90">{system.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={system.productsHref} variant="light">
                View Products
              </Button>
              <Button href={system.systemsHref} variant="outline-light">
                View Systems
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .brand-panel-in {
          animation: brand-panel-in 0.35s ease-out;
        }
        @keyframes brand-panel-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
