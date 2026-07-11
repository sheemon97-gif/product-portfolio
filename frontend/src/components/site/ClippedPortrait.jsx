import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Self-hosted from /public/portraits to eliminate any external asset fetch failure.
const PORTRAITS = [
  {
    src: "/portraits/formal.webp",
    alt: "Abhilash Mohanta — formal portrait",
    position: "50% 22%",
  },
  {
    src: "/portraits/candid.jpeg",
    alt: "Abhilash Mohanta — candid portrait",
    position: "50% 28%",
  },
];

const ROTATE_MS = 3000;

export default function ClippedPortrait() {
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState([false, false]);

  useEffect(() => {
    // Preload both images
    PORTRAITS.forEach((p, idx) => {
      const img = new Image();
      img.onload = () =>
        setLoaded((prev) => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
      img.src = p.src;
    });

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setI((prev) => (prev + 1) % PORTRAITS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, clipPath: "inset(20% 0% 0% 0%)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
      data-testid="hero-portrait"
      className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[360px] aspect-[3/4] photo-spot portrait-clip bg-[#ebebe6] shadow-[0_30px_60px_-30px_rgba(18,18,18,0.35)] overflow-hidden"
    >
      {/* Warm ochre backing so a broken image never shows an ugly gray box */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#EFE7D5] via-[#EBEBE6] to-[#E4DBC5]"
      />

      {/* Stacked images crossfade */}
      {PORTRAITS.map((p, idx) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          loading="eager"
          decoding="async"
          data-testid={`portrait-slide-${idx}`}
          style={{ objectPosition: p.position }}
          onLoad={() =>
            setLoaded((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            })
          }
          className={`absolute inset-0 w-full h-full object-cover grayscale contrast-[1.4] brightness-[0.98] transition-opacity duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
            idx === i && loaded[idx] ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Corner ticks */}
      <span className="pointer-events-none absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#121212] z-10" />
      <span className="pointer-events-none absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#C48B3C] z-10" />

      {/* Progress dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {PORTRAITS.map((_, idx) => (
          <span
            key={idx}
            data-testid={`portrait-indicator-${idx}`}
            className={`h-[3px] transition-all duration-500 ${
              idx === i ? "w-6 bg-[#F4F4F0]" : "w-2 bg-[#F4F4F0]/50"
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <figcaption className="absolute -bottom-8 left-0 right-0 flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.28em] text-[#7A6740]">
        <span data-testid="portrait-figure-label">
          Fig. 0{i + 1} / 0{PORTRAITS.length}
        </span>
        <span>Self · 2025</span>
      </figcaption>
    </motion.figure>
  );
}
