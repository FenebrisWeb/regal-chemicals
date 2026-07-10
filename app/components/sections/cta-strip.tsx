import Image from "next/image";
import Button from "@/app/components/ui/button";
import { slugify } from "@/app/lib/slug";
import type { CtaStripProps } from "@/types/cta";

export default function CtaStrip({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaStripProps) {
  return (
    <section className="bg-white py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <Image
          src={`/images/placeholders/${slugify(title)}.jpg`}
          alt=""
          fill
          sizes="(min-width: 1024px) 1152px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#07245a]/95 via-[#07245a]/90 to-[#2596be]/85" />

        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="cta-bubble cta-bubble-1" />
          <span className="cta-bubble cta-bubble-2" />
          <span className="cta-bubble cta-bubble-3" />
          <span className="cta-bubble cta-bubble-4" />
        </div>

        <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center sm:px-12 sm:py-20">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 3h6M10 3v6.5L4.5 18a2 2 0 001.7 3h11.6a2 2 0 001.7-3L14 9.5V3" />
              <path d="M7.5 14h9" />
            </svg>
          </span>

          <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          {description && <p className="max-w-xl text-base font-medium text-white/85">{description}</p>}

          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Button href={primaryHref} variant="light">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="outline-light">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .cta-bubble {
          position: absolute;
          bottom: -30px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, #ffffff, #ffffff55);
          opacity: 0.35;
          animation: cta-rise linear infinite;
        }
        .cta-bubble-1 { left: 12%; width: 10px; height: 10px; animation-duration: 6s; animation-delay: 0s; }
        .cta-bubble-2 { left: 38%; width: 6px; height: 6px; animation-duration: 5s; animation-delay: 1s; }
        .cta-bubble-3 { left: 64%; width: 12px; height: 12px; animation-duration: 7s; animation-delay: 0.5s; }
        .cta-bubble-4 { left: 86%; width: 7px; height: 7px; animation-duration: 5.5s; animation-delay: 1.6s; }

        @keyframes cta-rise {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: 0.35; }
          100% { transform: translateY(-200px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
