"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseSpotlight({ className = "" }: { className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const sectionEl = wrapperRef.current?.closest("section");
    if (!sectionEl) return;
    const section = sectionEl;

    function handleMove(event: MouseEvent) {
      const rect = section.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
      opacity.set(1);
    }

    function handleLeave() {
      opacity.set(0);
    }

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y, opacity]);

  return (
    <div ref={wrapperRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="absolute h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: springX,
          top: springY,
          opacity,
          background: "radial-gradient(circle, rgba(255,255,255,0.35), rgba(103,232,249,0.18) 45%, transparent 75%)",
          transition: "opacity 0.25s ease-out",
        }}
      />
    </div>
  );
}
