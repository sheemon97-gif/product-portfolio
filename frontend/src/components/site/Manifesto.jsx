import React from "react";
import { motion } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1];

const CHAPTERS = [
  {
    id: "about",
    num: "01",
    kicker: "About",
    title: "I sit between the user, the code, and the P&L.",
    body: "Trained at SPJIMR, I've spent my years building instincts for what customers actually need — not what they say. I write specs the way editors write copy: with a bias for the reader.",
    testId: "chapter-about",
  },
  {
    id: "experience",
    num: "02",
    kicker: "Experience",
    title: "Discover. Validate. Ship. Measure. Repeat.",
    body: "From early user interviews to A/B tests that moved the needle — I've owned the loop end-to-end alongside design, engineering, and business teams. More writing here in Volume 02.",
    testId: "chapter-experience",
  },
  {
    id: "contact",
    num: "03",
    kicker: "Contact",
    title: "Building something meaningful? Let's talk.",
    body: "Open to product roles that treat product management as a craft, not a ticket queue. Reach out on LinkedIn — or the old-fashioned way, via email.",
    testId: "chapter-contact",
  },
];

function Chapter({ chapter, idx }) {
  return (
    <motion.article
      id={chapter.id}
      data-testid={chapter.testId}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.0, ease: EASE }}
      className="grid grid-cols-12 gap-6 md:gap-10 py-16 md:py-24 border-b border-[#12121218] last:border-b-0"
    >
      <div className="col-span-12 md:col-span-3 flex md:block items-baseline gap-4">
        <span
          className="chapter-num text-[7rem] md:text-[9rem] lg:text-[11rem] text-[#121212]"
          aria-hidden="true"
        >
          {chapter.num}
        </span>
        <span className="font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#555] md:mt-4 md:block">
          Chapter · {chapter.kicker}
        </span>
      </div>

      <div className="col-span-12 md:col-span-8 md:col-start-5">
        <h3 className="font-display text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.6rem] leading-[1.02] tracking-[-0.02em] text-[#121212] max-w-[22ch]">
          {chapter.title}
        </h3>
        <p className="font-sans-ed mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.6] text-[#333] max-w-[54ch]">
          {chapter.body}
        </p>

        {idx === 2 && (
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              data-testid="manifesto-linkedin-btn"
              href="https://www.linkedin.com/in/abhilash-mohanta-spjimr/"
              target="_blank"
              rel="noopener noreferrer"
              className="ed-link font-sans-ed text-[12px] uppercase tracking-[0.24em]"
            >
              LinkedIn
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 8L8 2M8 2H3.5M8 2V6.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
            </a>
            <a
              data-testid="manifesto-email-btn"
              href="mailto:hello@abhilashmohanta.com"
              className="ed-link font-sans-ed text-[12px] uppercase tracking-[0.24em]"
            >
              Write an email
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Manifesto() {
  return (
    <section
      data-testid="manifesto-section"
      className="relative px-6 md:px-10 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-baseline justify-between mb-10 md:mb-16">
          <span
            data-testid="manifesto-index-label"
            className="font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#555]"
          >
            The Index · Three chapters
          </span>
          <span className="font-display-it text-[#D9381E] text-lg md:text-xl">
            ~ notes
          </span>
        </div>

        {CHAPTERS.map((c, i) => (
          <Chapter key={c.id} chapter={c} idx={i} />
        ))}
      </div>
    </section>
  );
}
