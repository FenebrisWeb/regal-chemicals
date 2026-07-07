"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/button";
import { HERO_SLIDES } from "@/app/data/hero-slides";
import { slugify } from "@/app/lib/slug";

const AUTOPLAY_INTERVAL_MS = 6000;
const SLIDE_COUNT = HERO_SLIDES.length;

function wrapIndex(index: number) {
  return ((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const isPausedRef = useRef(false);

  // Single interval for the component's lifetime. Using a functional state
  // update means this effect never needs to reset the timer when the slide
  // changes, which previously caused overlapping intervals and a visible
  // back-and-forth flicker.
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPausedRef.current) {
        setActive((prev) => wrapIndex(prev + 1));
      }
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = (index: number) => setActive(wrapIndex(index));
  const goNext = () => setActive((prev) => wrapIndex(prev + 1));
  const goPrev = () => setActive((prev) => wrapIndex(prev - 1));

  return (
    <section
      className="relative overflow-hidden bg-white"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      <div className="relative w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${SLIDE_COUNT * 100}%`,
            transform: `translateX(-${(active * 100) / SLIDE_COUNT}%)`,
          }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.title}
              style={{ width: `${100 / SLIDE_COUNT}%` }}
              className="flex min-h-[100svh] shrink-0 flex-col md:min-h-[calc(100svh-73px)] md:flex-row"
            >
              <div className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[320px] md:min-h-0 md:basis-1/2">
                <Image
                  src={`https://picsum.photos/seed/${slugify(slide.visualLabel)}/1200/900`}
                  alt={slide.visualLabel}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2596be]/70 to-[#07245a]/80" />

                {/* chemistry-themed decorative animation */}
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  <span className="hero-bubble hero-bubble-1" />
                  <span className="hero-bubble hero-bubble-2" />
                  <span className="hero-bubble hero-bubble-3" />
                  <span className="hero-bubble hero-bubble-4" />
                  <span className="hero-bubble hero-bubble-5" />
                  <span className="hero-bubble hero-bubble-6" />

                  <svg
                    viewBox="0 0 200 200"
                    className="hero-atom absolute right-10 top-10 h-28 w-28 opacity-70 sm:h-36 sm:w-36"
                  >
                    <g stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6">
                      <ellipse cx="100" cy="100" rx="80" ry="32" className="hero-orbit hero-orbit-1" />
                      <ellipse cx="100" cy="100" rx="80" ry="32" className="hero-orbit hero-orbit-2" />
                      <ellipse cx="100" cy="100" rx="80" ry="32" className="hero-orbit hero-orbit-3" />
                    </g>
                    <circle cx="100" cy="100" r="8" fill="#ffffff" />
                    <circle className="hero-electron hero-electron-1" cx="180" cy="100" r="5" fill="#ffffff" />
                    <circle className="hero-electron hero-electron-2" cx="20" cy="100" r="5" fill="#ffffff" />
                    <circle className="hero-electron hero-electron-3" cx="100" cy="20" r="5" fill="#ffffff" />
                  </svg>

                  <p className="absolute bottom-8 left-8 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                    {slide.visualLabel}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-4 bg-black/[0.03] px-6 py-10 pb-24 sm:gap-5 sm:px-10 sm:py-14 md:basis-1/2 md:px-14 md:pb-14">
                {index === active && (
                  <div key={active} className="hero-text-in flex flex-col gap-4">
                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="text-base font-bold text-black sm:text-lg">{slide.subtitle}</p>
                    <p className="max-w-md text-sm font-medium text-black sm:text-base">{slide.description}</p>
                    <Button href={slide.ctaHref} variant="dark" className="mt-2 w-fit">
                      {slide.ctaLabel}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform hover:scale-105 md:flex"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#07245a] text-white shadow-md transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-8 z-10 flex gap-2 sm:left-14">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === active ? "w-8 bg-[#07245a]" : "w-3 bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hero-bubble {
          position: absolute;
          bottom: -40px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, #ffffff, #ffffff55);
          opacity: 0.5;
          animation: hero-rise linear infinite;
        }
        .hero-bubble-1 { left: 12%; width: 10px; height: 10px; animation-duration: 7s; animation-delay: 0s; }
        .hero-bubble-2 { left: 28%; width: 6px; height: 6px; animation-duration: 6s; animation-delay: 1.4s; }
        .hero-bubble-3 { left: 46%; width: 14px; height: 14px; animation-duration: 9s; animation-delay: 0.6s; }
        .hero-bubble-4 { left: 63%; width: 8px; height: 8px; animation-duration: 6.5s; animation-delay: 2.2s; }
        .hero-bubble-5 { left: 80%; width: 12px; height: 12px; animation-duration: 8s; animation-delay: 1s; }
        .hero-bubble-6 { left: 92%; width: 6px; height: 6px; animation-duration: 5.5s; animation-delay: 2.8s; }

        @keyframes hero-rise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          15% { opacity: 0.5; }
          100% { transform: translateY(-260px) scale(0.6); opacity: 0; }
        }

        .hero-orbit-1 { transform: rotate(0deg); transform-origin: 100px 100px; }
        .hero-orbit-2 { transform: rotate(60deg); transform-origin: 100px 100px; }
        .hero-orbit-3 { transform: rotate(120deg); transform-origin: 100px 100px; }

        .hero-electron-1, .hero-electron-2, .hero-electron-3 {
          transform-origin: 100px 100px;
          animation: hero-orbit-spin 6s linear infinite;
        }
        .hero-electron-2 { animation-duration: 8s; animation-direction: reverse; }
        .hero-electron-3 { animation-duration: 10s; }

        @keyframes hero-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-text-in {
          animation: hero-text-in 0.6s ease-out;
        }

        @keyframes hero-text-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
