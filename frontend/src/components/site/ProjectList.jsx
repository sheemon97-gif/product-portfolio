import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "spotify-teardown",
    title: "Spotify — Product Teardown",
    kicker: "Product Teardown · 2025",
    image: "/projects/spotify-teardown.png",
    href: "https://theproductspace.in/projects/1757486010553",
  },
  {
    id: "persona-builder",
    title: "AI-Generated User Persona Builder",
    kicker: "0 → 1 · AI Tooling",
    image: "/projects/persona-builder.png",
    href: "https://theproductspace.in/projects/1757485277202",
  },
  {
    id: "whatsapp-delete",
    title: "WhatsApp — Message Delete Feature",
    kicker: "Product Feature Analysis",
    image: "/projects/whatsapp-delete.png",
    href: "https://theproductspace.in/projects/1757401650708",
  },
  {
    id: "investing-mutual-funds",
    title: "Investing Made Fun — Gamifying Mutual Funds",
    kicker: "Product Sprint 1 · Team Bazinga",
    image: "/projects/investing-made-fun.jpg",
    href: "/projects/investing-made-fun.html",
  },
  {
    id: "flipkart-funnel",
    title: "Flipkart — Discovery to Engagement Funnel",
    kicker: "Goal · +5% order conversion in 3 months",
    image: "/projects/flipkart-funnel.png",
    href: "https://theproductspace.in/projects/1751220007723",
  },
];

function ArrowCTA() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#12121230] bg-[#F4EEDA] overflow-hidden transition-colors duration-500 group-hover:bg-[#121212] group-hover:border-[#121212]"
    >
      {/* arrow that slides out to the right on hover */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute w-4 h-4 text-[#121212] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0"
      >
        <path d="M4 12h14M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      </svg>
      {/* arrow that slides in from the bottom-left on hover */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute w-4 h-4 text-[#F4EEDA] -translate-x-8 translate-y-8 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <path d="M4 12h14M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      </svg>
    </span>
  );
}

const EASE = [0.65, 0, 0.35, 1];

function ProjectCard({ project, index, total }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.08 }}
      className="group block h-full"
    >
      <article className="h-full flex flex-col rounded-2xl overflow-hidden bg-[#FBF7EA] border border-[#12121218] shadow-[0_20px_40px_-30px_rgba(18,18,18,0.35)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-30px_rgba(18,18,18,0.4)]">
        {/* Image — preserves aspect ratio via object-contain so nothing gets cropped */}
        <div className="relative w-full aspect-[820/461] bg-[#F4EEDA] overflow-hidden border-b border-[#12121212]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.03]"
          />
        </div>

        {/* Caption row */}
        <div className="flex-1 flex items-end justify-between gap-4 px-5 py-4 md:py-5">
          <div className="min-w-0 flex-1">
            <p className="font-sans-ed text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-[#7A6740] mb-2 truncate">
              <span className="text-[#D9381E]">
                {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
              &nbsp;&nbsp;·&nbsp;&nbsp;{project.kicker}
            </p>
            <h3
              className="font-display text-[#121212] text-[20px] md:text-[21px] lg:text-[23px] leading-[1.12] tracking-[-0.015em] line-clamp-2 min-h-[2.24em]"
              data-testid={`project-title-${project.id}`}
            >
              {project.title}
            </h3>
          </div>
          <ArrowCTA />
        </div>
      </article>
    </motion.a>
  );
}

function ComingSoonCard({ index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.08 }}
      data-testid="project-card-coming-soon"
      className="h-full min-h-[220px] rounded-2xl border border-dashed border-[#A06F2666] bg-[#F4EEDA]/50 flex flex-col justify-between p-6 md:p-7"
    >
      <span className="font-sans-ed text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-[#7A6740]">
        <span className="text-[#D9381E]">◆</span>&nbsp;&nbsp;In the works
      </span>
      <div>
        <p className="font-display text-[#121212] text-[1.8rem] md:text-[2.1rem] leading-[1.05] tracking-[-0.02em]">
          More cases <span className="font-display-it text-[#A06F26]">dropping soon.</span>
        </p>
        <p className="mt-3 font-sans-ed text-[13px] leading-[1.6] text-[#555] max-w-[32ch]">
          New teardowns and AI prototypes are on the bench.
        </p>
      </div>
    </motion.div>
  );
}

export default function ProjectList() {
  return (
    <section
      id="work"
      data-testid="project-list-section"
      className="relative py-14 md:py-20 bg-gradient-to-b from-[#F4F4F0] via-[#F7F1E1] to-[#F4F4F0] overflow-hidden"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex items-end justify-between gap-6 mb-8 md:mb-12 flex-wrap"
        >
          <div>
            <p
              data-testid="project-list-kicker"
              className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#7A6740] mb-4"
            >
              <span className="text-[#D9381E]">◆</span>&nbsp;&nbsp;Section 03 · Selected Work
            </p>
            <h2
              data-testid="project-list-heading"
              className="font-display text-[#121212] text-[3rem] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5.4rem] leading-[0.98] tracking-[-0.025em]"
            >
              Project <span className="font-display-it text-[#A06F26]">List.</span>
            </h2>
          </div>
          <p className="font-sans-ed text-[13px] md:text-[14px] leading-[1.6] text-[#333] max-w-[38ch]">
            A shelf of teardowns, product sprints and 0→1 experiments — pick any card to open the case.
          </p>
        </motion.div>

        {/* All projects at a glance */}
        <div
          data-testid="project-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7"
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} total={PROJECTS.length} />
          ))}
          <ComingSoonCard index={PROJECTS.length} />
        </div>
      </div>
    </section>
  );
}
