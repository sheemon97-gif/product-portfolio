import React from "react";
import { motion } from "framer-motion";

const PORTRAIT = {
  src: "/portraits/formal.webp",
  alt: "Abhilash Mohanta — Product Manager",
  position: "50% 22%",
};

export default function ClippedPortrait() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, clipPath: "inset(20% 0% 0% 0%)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
      data-testid="hero-portrait"
      className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[360px] aspect-[3/4]"
    >
      {/* Warm ochre fallback backing */}
      <div
        aria-hidden="true"
        className="absolute inset-0 portrait-clip bg-gradient-to-br from-[#EFE7D5] via-[#EBEBE6] to-[#E4DBC5]"
      />

      {/* Portrait image */}
      <div className="absolute inset-0 portrait-clip photo-spot bg-[#ebebe6] shadow-[0_30px_60px_-30px_rgba(18,18,18,0.35)] overflow-hidden">
        <img
          src={PORTRAIT.src}
          alt={PORTRAIT.alt}
          loading="eager"
          decoding="async"
          data-testid="portrait-slide-0"
          style={{ objectPosition: PORTRAIT.position }}
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.4] brightness-[0.98]"
        />
      </div>

      {/* Animated tracing border — SVG path matches the arched clip shape */}
      <svg
        data-testid="portrait-border"
        aria-hidden="true"
        viewBox="0 0 300 400"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      >
        <defs>
          <linearGradient id="portrait-trace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A06F26" stopOpacity="0" />
            <stop offset="45%" stopColor="#C48B3C" stopOpacity="1" />
            <stop offset="55%" stopColor="#D9381E" stopOpacity="1" />
            <stop offset="100%" stopColor="#A06F26" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Static hairline (matches the clip-path curve) */}
        <path
          d="M 12 150 A 138 138 0 0 1 288 150 L 288 388 A 12 12 0 0 1 276 400 L 24 400 A 12 12 0 0 1 12 388 Z"
          fill="none"
          stroke="#12121233"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* Traveling gradient segment */}
        <motion.path
          d="M 12 150 A 138 138 0 0 1 288 150 L 288 388 A 12 12 0 0 1 276 400 L 24 400 A 12 12 0 0 1 12 388 Z"
          fill="none"
          stroke="url(#portrait-trace)"
          strokeWidth="1.4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0.28, pathOffset: 0 }}
          animate={{ pathOffset: [0, 1] }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        />
      </svg>

      {/* Corner ticks */}
      <span className="pointer-events-none absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#121212] z-10" />
      <span className="pointer-events-none absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#C48B3C] z-10" />

      {/* Caption */}
      <figcaption className="absolute -bottom-8 left-0 right-0 flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.28em] text-[#7A6740]">
        <span data-testid="portrait-figure-label">Fig. 01</span>
        <span>Self · 2025</span>
      </figcaption>
    </motion.figure>
  );
}
