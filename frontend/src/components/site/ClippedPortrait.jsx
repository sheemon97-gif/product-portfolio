import React from "react";
import { motion } from "framer-motion";

const PORTRAIT_URL =
  "https://customer-assets.emergentagent.com/job_1ea653e5-06a2-4a53-b2de-a4c9aaa64499/artifacts/4y92kq3l_WhatsApp%20Image%202026-05-03%20at%2016.40.17.webp";

export default function ClippedPortrait({ y, scale }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, clipPath: "inset(20% 0% 0% 0%)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.55 }}
      data-testid="hero-portrait"
      className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[400px] aspect-[3/4] photo-spot portrait-clip bg-[#ebebe6] shadow-[0_30px_60px_-30px_rgba(18,18,18,0.35)]"
    >
      <motion.img
        src={PORTRAIT_URL}
        alt="Abhilash Mohanta, Product Manager"
        loading="eager"
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full object-cover object-[50%_22%] grayscale contrast-[1.4] brightness-[0.97]"
      />

      {/* Corner ticks */}
      <span className="pointer-events-none absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#121212] z-10" />
      <span className="pointer-events-none absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#121212] z-10" />

      {/* Caption */}
      <figcaption className="absolute -bottom-8 left-0 right-0 flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.28em] text-[#555]">
        <span>Fig. 01</span>
        <span>Self · 2025</span>
      </figcaption>
    </motion.figure>
  );
}
