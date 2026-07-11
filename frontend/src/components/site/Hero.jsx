import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ClippedPortrait from "@/components/site/ClippedPortrait";

const EASE = [0.65, 0, 0.35, 1];

const LINES = [
  { parts: [{ text: "Turning user" }] },
  { parts: [{ text: "problems into" }] },
  {
    parts: [
      { text: "प्रोडक्ट", deva: true },
      { text: " that" },
    ],
  },
  { parts: [{ text: "matter.", italic: true }] },
];

function MaskedLine({ line, delay }) {
  return (
    <span className="mask-row">
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, ease: EASE, delay }}
      >
        {line.parts.map((p, i) => (
          <span
            key={i}
            className={
              p.deva
                ? "font-deva text-[#121212] mx-[0.05em] inline-block"
                : p.italic
                  ? "font-display-it"
                  : ""
            }
          >
            {p.text}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Meta strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        className="mx-auto max-w-[1440px] flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.28em] text-[#555]"
      >
        <span data-testid="hero-issue-tag">
          Volume 01 &nbsp;·&nbsp; The Product Issue
        </span>
        <span className="hidden md:inline">
          Based in India &nbsp;·&nbsp; Available for select roles
        </span>
        <span className="md:hidden">India</span>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
        style={{ transformOrigin: "left" }}
        className="mx-auto max-w-[1440px] h-px bg-[#12121230] mt-4 mb-10 md:mb-16"
      />

      {/* Headline + portrait grid */}
      <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-6 md:gap-10 items-end">
        {/* Headline */}
        <motion.h1
          style={{ y: titleY }}
          data-testid="hero-headline"
          className="col-span-12 lg:col-span-8 font-display text-[#121212] leading-[0.92] tracking-[-0.025em] text-[3.4rem] sm:text-[4.8rem] md:text-[6.6rem] lg:text-[8.4rem] xl:text-[10rem]"
        >
          <MaskedLine line={LINES[0]} delay={0.35} />
          <MaskedLine line={LINES[1]} delay={0.48} />
          <MaskedLine line={LINES[2]} delay={0.61} />
          <MaskedLine line={LINES[3]} delay={0.74} />
        </motion.h1>

        {/* Portrait */}
        <div className="col-span-12 lg:col-span-4 flex justify-end">
          <ClippedPortrait y={imgY} scale={imgScale} />
        </div>
      </div>

      {/* Sub-block */}
      <div className="mx-auto max-w-[1440px] mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.0 }}
          className="col-span-12 md:col-span-4 flex items-start gap-4"
        >
          <span
            aria-hidden="true"
            className="inline-block w-2 h-2 mt-2 rounded-full bg-[#D9381E]"
          />
          <p
            data-testid="hero-role"
            className="font-sans-ed text-[11px] uppercase tracking-[0.28em] text-[#121212]"
          >
            Abhilash Mohanta
            <br />
            <span className="text-[#555]">
              Product Manager · SPJIMR
            </span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
          data-testid="hero-tagline"
          className="col-span-12 md:col-span-7 md:col-start-6 font-sans-ed text-[17px] md:text-[19px] leading-[1.55] text-[#222] max-w-[52ch]"
        >
          I uncover customer needs, validate ideas, and collaborate across
          design, engineering, and business teams to build products that create
          measurable impact.
          <span className="ink-caret align-baseline" aria-hidden="true" />
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mx-auto max-w-[1440px] mt-16 md:mt-24 flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#555]"
      >
        <div className="flex items-center gap-3" data-testid="hero-scroll-cue">
          <span className="relative flex h-6 w-[1px] overflow-hidden">
            <motion.span
              className="absolute inset-x-0 bg-[#121212]"
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{ height: "100%" }}
            />
          </span>
          Scroll
        </div>
        <div className="hidden md:block">
          © {new Date().getFullYear()} — All rights reserved
        </div>
      </motion.div>
    </section>
  );
}
