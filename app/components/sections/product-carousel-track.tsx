"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/button";
import { getProductImage } from "@/app/data/product-images";
import type { Product } from "@/types/sections";

interface ProductCarouselTrackProps {
  items: { category: string; product: Product }[];
}

export default function ProductCarouselTrack({ items }: ProductCarouselTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, startScrollLeft: 0, moved: false });

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      isDown: true,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
    };
    track.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    const state = dragState.current;
    if (!state.isDown || !track) return;

    const delta = event.clientX - state.startX;
    if (Math.abs(delta) > 4) state.moved = true;
    track.scrollLeft = state.startScrollLeft - delta;
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (track && track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    dragState.current.isDown = false;
  }

  function handleClickCapture(event: React.MouseEvent<HTMLDivElement>) {
    if (dragState.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragState.current.moved = false;
    }
  }

  return (
    <div
      ref={trackRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onClickCapture={handleClickCapture}
      className="-mx-6 flex cursor-grab select-none gap-5 overflow-x-auto px-6 pb-4 active:cursor-grabbing [scrollbar-width:thin]"
    >
      {items.map(({ category, product }) => (
        <article
          key={product.slug}
          className="relative flex w-[260px] shrink-0 flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:w-[300px]"
        >
          <Link href={`/products/${category}`} className="relative h-40 w-full overflow-hidden rounded-xl">
            <Image
              src={getProductImage(category, product.slug)}
              alt={product.name}
              fill
              sizes="300px"
              draggable={false}
              className="object-cover"
            />
            {product.featured && (
              <span className="absolute left-2 top-2 rounded-full bg-[#2596be] px-3 py-1 text-xs font-bold text-white">
                Featured
              </span>
            )}
          </Link>

          <div className="flex flex-1 flex-col gap-1.5">
            <Link href={`/products/${category}`} className="text-base font-bold text-black hover:text-[#2596be]">
              {product.name}
            </Link>
            <p className="text-sm font-medium text-black/70">{product.tagline}</p>
          </div>

          <Button href={`/contact?product=${encodeURIComponent(product.name)}`} variant="dark" className="w-fit">
            Send Enquiry
          </Button>
        </article>
      ))}
    </div>
  );
}
