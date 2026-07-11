import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ClippedPortrait from "@/components/site/ClippedPortrait";

const EASE = [0.65, 0, 0.35, 1];

const LINES = [
  { parts: [{ text: "Turning user problems" }] },
  {
    parts: [
      { text: "into " },
      { text: "प्रोडक्ट", deva: true },
      { text: " that " },
      { text: "matter.", italic: true },
    ],
  },
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
                ? "font-deva text-[#121212] mx-[0.02em] inline-block"
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
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] pt-24 md:pt-28 pb-10 md:pb-14 px-6 md:px-10 overflow-hidden flex flex-col"
    >
      {/* Headline + portrait grid */}
      <div className="mx-auto w-full max-w-[1440px] grid grid-cols-12 gap-6 md:gap-10 items-center flex-1">
        {/* Left: headline + tagline + role */}
        <motion.div
          style={{ y: titleY }}
          className="col-span-12 lg:col-span-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#D9381E]"
            />
            <span
              data-testid="hero-role"
              className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#555]"
            >
              Abhilash Mohanta &nbsp;·&nbsp; Product Manager
            </span>
          </motion.div>

          <h1
            data-testid="hero-headline"
            aria-label="Turning user problems into products that matter"
            className="font-display text-[#121212] leading-[0.95] tracking-[-0.025em] text-[2.6rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5.4rem] xl:text-[6.2rem]"
          >
            <MaskedLine line={LINES[0]} delay={0.35} />
            <MaskedLine line={LINES[1]} delay={0.5} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
            data-testid="hero-tagline"
            className="mt-6 md:mt-8 font-sans-ed text-[15px] md:text-[17px] lg:text-[18px] leading-[1.55] text-[#333] max-w-[58ch]"
          >
            I uncover customer needs, validate ideas, and collaborate across
            design, engineering, and business teams to build products that
            create measurable impact.
            <span className="ink-caret align-baseline" aria-hidden="true" />
          </motion.p>
        </motion.div>

        {/* Right: rotating portrait carousel */}
        <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
          <ClippedPortrait y={imgY} scale={imgScale} />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mx-auto w-full max-w-[1440px] mt-10 md:mt-12 flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#555]"
      >
        <div className="flex items-center gap-3" data-testid="hero-scroll-cue">
          <span className="relative flex h-5 w-[1px] overflow-hidden">
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
        <div className="hidden md:block">Based in India · Available for select roles</div>
      </motion.div>
    </section>
  );
}
