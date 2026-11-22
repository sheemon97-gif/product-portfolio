import React from "react";
import { motion } from "framer-motion";

const YT_URL = "https://www.youtube.com/@yourfirst25";
const EASE = [0.65, 0, 0.35, 1];

export default function Podcast() {
  return (
    <section
      id="podcast"
      data-testid="podcast-section"
      className="relative overflow-hidden bg-[#F5B443] text-[#121212]"
    >
      {/* Grid + noise overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#121212 1px, transparent 1px), linear-gradient(90deg, #121212 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.14]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0.9 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 py-14 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex items-baseline justify-between gap-4 flex-wrap mb-6 md:mb-10"
        >
          <p
            data-testid="podcast-kicker"
            className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#3B2A05]"
          >
            <span className="text-[#D9381E]">◆</span>&nbsp;&nbsp;Section 04 · Podcast
          </p>
          <span className="hidden md:inline font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#5F4A0F]">
            Beyond the elite
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
          {/* LEFT: text block */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              {/* Mic mark */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#121212] text-[#F5B443]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="9" y="3" width="6" height="12" rx="3" fill="currentColor" />
                    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
                <span className="font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#3B2A05]">
                  A YouTube podcast
                </span>
              </div>

              <h2
                data-testid="podcast-heading"
                className="font-display text-[#121212] text-[3rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.2rem] xl:text-[6rem] leading-[0.95] tracking-[-0.025em]"
              >
                Your First{" "}
                <span className="font-display-it text-[#B24A0F]">25.</span>
              </h2>

              <p
                data-testid="podcast-tagline"
                className="mt-5 md:mt-6 font-display-it text-[1.3rem] md:text-[1.6rem] leading-[1.2] text-[#3B2A05] max-w-[26ch]"
              >
                A podcast about the journeys we don&rsquo;t talk about enough.
              </p>

              <div className="mt-8 md:mt-10 space-y-5 max-w-[52ch] font-sans-ed text-[15px] md:text-[16px] leading-[1.7] text-[#221808]">
                <p>
                  In a world where success is often defined by a few institutions
                  or labels, this podcast explores the stories of people who took
                  different paths, made mistakes, changed directions, and are
                  still figuring life out.
                </p>
                <p>
                  From career shifts and self-doubt to relationships and identity,
                  these are honest conversations about navigating your first 25
                  years.
                </p>
              </div>

              {/* Pull-quote */}
              <div className="mt-8 md:mt-10 relative pl-6 border-l-2 border-[#B24A0F] max-w-[42ch]">
                <p className="font-display text-[#121212] text-[1.4rem] md:text-[1.65rem] leading-[1.25]">
                  Success is not a single path.
                  <br />
                  And life is not just the result of{" "}
                  <span className="font-display-it text-[#B24A0F]">one exam</span>.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
                <a
                  data-testid="podcast-youtube-cta"
                  href={YT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#121212] text-[#F5B443] px-6 py-3.5 font-sans-ed text-[12px] md:text-[13px] uppercase tracking-[0.24em] transition-transform duration-500 hover:-translate-y-0.5"
                >
                  <svg width="18" height="14" viewBox="0 0 24 17" fill="none" aria-hidden="true">
                    <path
                      d="M23 3.2a3 3 0 0 0-2.1-2.1C19 .6 12 .6 12 .6s-7 0-8.9.5A3 3 0 0 0 1 3.2C.5 5 .5 8.5.5 8.5s0 3.5.5 5.3A3 3 0 0 0 3.1 15.9C5 16.4 12 16.4 12 16.4s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.3.5-5.3s0-3.5-.5-5.3Z"
                      fill="#F5B443"
                    />
                    <path d="M9.6 12.1V4.9L16 8.5l-6.4 3.6Z" fill="#121212" />
                  </svg>
                  Watch on YouTube
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                  </svg>
                </a>

                <a
                  data-testid="podcast-handle"
                  href={YT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link font-sans-ed text-[12px] uppercase tracking-[0.24em] text-[#3B2A05]"
                >
                  @yourfirst25
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: editorial diptych */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 relative">
            <div className="relative">
              {/* Episode 3 — large front card */}
              <motion.figure
                initial={{ opacity: 0, y: 40, rotate: -1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
                data-testid="podcast-episode-figure"
                className="relative w-full aspect-[2000/1089] bg-[#F5B443] p-3 md:p-4 shadow-[0_40px_80px_-30px_rgba(59,42,5,0.5)]"
                style={{ boxShadow: "0 40px 80px -30px rgba(59, 42, 5, 0.5), inset 0 0 0 1px rgba(18,18,18,0.06)" }}
              >
                <div className="relative w-full h-full bg-white ring-1 ring-[#12121210] overflow-hidden">
                  <img
                    src="/podcast/episode3.webp"
                    alt="Your First 25 — Episode 3 with Payal Mahant"
                    loading="lazy"
                    decoding="async"
                    data-testid="podcast-episode-image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <figcaption className="absolute -bottom-8 left-0 right-0 flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.28em] text-[#3B2A05]">
                  <span>Ep. 03 · Passion &amp; Fashion</span>
                  <span>Sometimes Dubai !!</span>
                </figcaption>
              </motion.figure>

              {/* Trailer — smaller card offset, clickable */}
              <motion.figure
                initial={{ opacity: 0, y: 50, rotate: 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
                data-testid="podcast-trailer-figure"
                className="absolute -bottom-12 md:-bottom-16 lg:-bottom-20 right-2 md:right-4 lg:right-8 w-[46%] md:w-[42%] lg:w-[38%] xl:w-[36%] aspect-[2000/1309] bg-[#F5B443] p-2 md:p-3 transition-transform duration-500 hover:scale-[1.03]"
                style={{ boxShadow: "0 30px 60px -20px rgba(59, 42, 5, 0.55), inset 0 0 0 1px rgba(18,18,18,0.08)" }}
              >
                <a
                  href="https://www.instagram.com/reel/DXVwKZ2Eeqk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="podcast-trailer-link"
                  aria-label="Watch the Your First 25 trailer on Instagram"
                  className="group block relative w-full h-full bg-white ring-1 ring-[#12121210] overflow-hidden"
                >
                  <img
                    src="/podcast/trailer.webp"
                    alt="Your First 25 — Trailer"
                    loading="lazy"
                    decoding="async"
                    data-testid="podcast-trailer-image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Play badge overlay */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 shadow-lg transition-transform duration-500 group-hover:scale-110">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M4 2 15 9 4 16 4 2Z" fill="#121212" />
                      </svg>
                    </span>
                  </span>
                </a>
                <figcaption className="absolute -bottom-7 left-0 right-0 flex items-center justify-between font-sans-ed text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-[#3B2A05]">
                  <span>Trailer</span>
                  <span>~ 00:45</span>
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </div>

        {/* Bottom marquee ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-28 md:mt-32 lg:mt-16 flex items-center justify-between gap-6 flex-wrap border-t border-[#12121228] pt-6"
        >
          <span className="font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#3B2A05]">
            Real stories · Real people · Real growth
          </span>
          <a
            href={YT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="podcast-footer-link"
            className="ed-link font-sans-ed text-[11px] uppercase tracking-[0.28em] text-[#121212]"
          >
            youtube.com/@yourfirst25 ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
