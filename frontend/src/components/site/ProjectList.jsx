import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "spotify-teardown",
    title: "Spotify — Product Teardown",
    kicker: "Product Teardown · 2025",
    image: "/projects/spotify-teardown.png",
    href: "#",
  },
  {
    id: "persona-builder",
    title: "AI-Generated User Persona Builder",
    kicker: "0 → 1 · AI Tooling",
    image: "/projects/persona-builder.png",
    href: "#",
  },
  {
    id: "whatsapp-delete",
    title: "WhatsApp — Message Delete Feature",
    kicker: "Product Feature Analysis",
    image: "/projects/whatsapp-delete.png",
    href: "#",
  },
  {
    id: "investing-mutual-funds",
    title: "Investing Made Fun — Gamifying Mutual Funds",
    kicker: "Product Sprint 1 · Team Bazinga",
    image: "/projects/investing-mutual-funds.png",
    href: "#",
  },
  {
    id: "flipkart-funnel",
    title: "Flipkart — Discovery to Engagement Funnel",
    kicker: "Goal · +5% order conversion in 3 months",
    image: "/projects/flipkart-funnel.png",
    href: "#",
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

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      data-testid={`project-card-${project.id}`}
      className="group block mx-4 md:mx-6 lg:mx-8 w-[320px] sm:w-[380px] md:w-[440px] lg:w-[500px] shrink-0"
    >
      <article className="rounded-2xl overflow-hidden bg-[#FBF7EA] border border-[#12121218] shadow-[0_20px_40px_-30px_rgba(18,18,18,0.35)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-30px_rgba(18,18,18,0.4)]">
        {/* Image — preserves aspect ratio via object-contain so nothing gets cropped */}
        <div className="relative w-full aspect-[820/461] bg-[#F4EEDA] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.02]"
          />
        </div>

        {/* Caption row */}
        <div className="flex items-end justify-between gap-4 px-5 md:px-6 py-5 md:py-6">
          <div className="min-w-0">
            <p className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#7A6740] mb-2">
              {project.kicker}
            </p>
            <h3
              className="font-display text-[#121212] text-[22px] md:text-[26px] lg:text-[28px] leading-[1.1] tracking-[-0.015em]"
              data-testid={`project-title-${project.id}`}
            >
              {project.title}
            </h3>
          </div>
          <ArrowCTA />
        </div>
      </article>
    </a>
  );
}

export default function ProjectList() {
  return (
    <section
      id="experience"
      data-testid="project-list-section"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#F4F4F0] via-[#F7F1E1] to-[#F4F4F0] overflow-hidden"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="flex items-end justify-between gap-6 mb-10 md:mb-16 flex-wrap"
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
            A rotating shelf of teardowns, product sprints and 0→1 experiments — hover to pause and open a case.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative">
        <Marquee
          gradient={true}
          gradientColor="#F7F1E1"
          gradientWidth={120}
          speed={26}
          pauseOnHover={true}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={`a-${p.id}`} project={p} />
          ))}
          {PROJECTS.map((p) => (
            <ProjectCard key={`b-${p.id}`} project={p} />
          ))}
        </Marquee>
      </div>

      {/* Small hint below */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mt-10 md:mt-14 flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#7A6740]">
        <span data-testid="project-list-hint">Hover to pause · Click to open</span>
        <span className="hidden md:inline">More cases dropping soon</span>
      </div>
    </section>
  );
}
