import React from "react";
import { motion } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1];

const SKILLS = [
  {
    id: "hard-skill",
    number: "01",
    tag: "Hard Skill",
    title: "Data-driven decision-making",
    body: "Every roadmap call backed by DAU/MAU, conversion, retention, and A/B tests — not opinion. Fluent in Mixpanel, SQL, and hypothesis-led validation before code is written.",
  },
  {
    id: "soft-skill",
    number: "02",
    tag: "Soft Skill",
    title: "Influence without authority",
    body: "Rallying engineering, design, and business teams toward one shared vision — without any of them reporting to me. The connective tissue in every product team I have joined.",
  },
  {
    id: "judgment",
    number: "03",
    tag: "Judgment",
    title: "Prioritization & strategic focus",
    body: "Knowing what not to build. Weighing trade-offs with RICE and opportunity cost, then defending the call in the room with leadership when it matters most.",
  },
];

function SkillCard({ skill, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.08 }}
      data-testid={`competency-card-${skill.id}`}
      className="group relative bg-[#FBF7EA] border border-[#12121218] rounded-xl p-8 md:p-10 shadow-[0_20px_40px_-30px_rgba(18,18,18,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(18,18,18,0.35)]"
    >
      {/* Top row: skill number + tag */}
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <span
          data-testid={`competency-number-${skill.id}`}
          className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#7A6740]"
        >
          Skill&nbsp;&nbsp;/&nbsp;&nbsp;{skill.number}
        </span>
        <span
          data-testid={`competency-tag-${skill.id}`}
          className="font-sans-ed text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-[#5F4A22] bg-[#EFE1C1] rounded-md px-2.5 py-1"
        >
          {skill.tag}
        </span>
      </div>

      {/* Title */}
      <h3
        data-testid={`competency-title-${skill.id}`}
        className="font-display text-[#121212] text-[1.6rem] md:text-[1.9rem] lg:text-[2rem] leading-[1.1] tracking-[-0.015em] mb-5 md:mb-6"
      >
        {skill.title}
      </h3>

      {/* Description */}
      <p className="font-sans-ed text-[14px] md:text-[15px] leading-[1.65] text-[#221808]">
        {skill.body}
      </p>
    </motion.article>
  );
}

export default function CoreCompetencies() {
  return (
    <section
      id="competencies"
      data-testid="competencies-section"
      className="relative px-6 md:px-10 py-20 md:py-28 bg-[#F4F4F0]"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-4 mb-6 md:mb-8"
        >
          <span
            aria-hidden="true"
            className="inline-block w-10 h-[1.5px] bg-[#A06F26]"
          />
          <p
            data-testid="competencies-kicker"
            className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#A06F26]"
          >
            Core Competencies
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          data-testid="competencies-heading"
          className="font-display text-[#121212] text-[2.4rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.4rem] leading-[1.02] tracking-[-0.02em] max-w-[24ch] mb-14 md:mb-20"
        >
          Three skills, <span className="font-display-it text-[#A06F26]">one thread.</span>
        </motion.h2>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.id} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
