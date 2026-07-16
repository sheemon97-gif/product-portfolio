import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/site/SmoothScroll";
import NoiseOverlay from "@/components/site/NoiseOverlay";

const EASE = [0.65, 0, 0.35, 1];

const RESUME = {
  name: "Abhilash Mohanta",
  contact: {
    linkedin: "https://www.linkedin.com/in/abhilash-mohanta-spjimr/",
    linkedinLabel: "linkedin.com/in/abhilash-mohanta-spjimr",
  },
  careerSummary: [
    "5.4+ years of technology consulting experience in digital product development and managing product lifecycle",
    "Adept in stakeholder management and driving digital transformation initiatives in global automobile companies",
    "Certified Scrum Master and Product Owner with expertise in POC development, agile and product management",
    "Drove product strategy, cross-functional collaboration and user adoption in PLM-integrated applications",
    "Possess deep understanding of LLMs, Gen AI and Agentic AI; familiar with designing and building AI agents",
  ],
  professionalExperience: [
    {
      company: "Accenture — Business Architect Associate Manager",
      client: null,
      dates: "May 2026 – Present",
      intro:
        "Currently driving business architecture and product strategy engagements at Accenture.",
    },
    {
      company: "Tata Technologies — Digital Product Development and Systems",
      client: "[Tata Motors, Tata Daewoo Commercial Vehicles]",
      dates: "July 2019 – Nov 2024",
      subroles: [
        {
          title: "International Experience — Gunsan, South Korea",
          bullets: [
            "Delivered on-site consultancy for Product Lifecycle Management (PLM) server migration to Tata Daewoo",
            "Improved visualization of vehicle mock-ups by 40% by decommissioning legacy server infrastructure",
            "Conducted infrastructure readiness assessments, ensuring business continuity and mitigating potential risks",
            "Enhanced design infrastructure efficiency by 20% by testing design software against prescribed parameters",
            "Formulated vehicle release strategy with senior stakeholders, ensuring seamless operations for research centre",
          ],
        },
        {
          title: "Product Management and Digital Transformation",
          bullets: [
            "Owned product management for DigiView, a Digital Mock-Up automation platform, adopted by 500+ vehicle designers",
            "Defined feature requirements, conducted backlog grooming and ensured delivery aligned with roadmap objectives",
            "Monitored adoption through monthly KPIs, optimizing engagement and improving product stickiness by 15%",
            "Gathered extensive feedback from vehicle designers to identify pain points, unmet needs and map user stories",
            "Cut vehicle release cycle by 60%, through consistent customer discovery and formalizing legacy processes",
            "Optimized design validation process by 80%, enabling faster cost analysis and saving ₹50–60 Lakhs annually",
            "Contributed to World Class Quality (WCQ) Level 4 compliance, supporting quality standardization for Tata Motors",
            "Increased structured BRD initiations by 50% on a quarterly basis for FY23–24, co-creating new automation proposals",
            "Realised 600+ man-hours efficiency; converting vehicle designer issues into BRDs, accelerating value realization",
            "Improved delivery efficiency and quality; equipping designers with best practices for error-free SOW completion",
            "Served as SME in DMU engineering practise; leveraging existing PLM infrastructure to drive financial performance",
          ],
        },
        {
          title: "Product Delivery and Release",
          bullets: [
            "Oversaw end-to-end product lifecycle of an automation platform, YouCalc, with a focus on R&D calculations",
            "Reduced computation time by 70% with an electrical power distribution tool, accelerating results delivery",
            "Developed 20+ applications boosting productivity across 8 departments, ensuring high adoption of the platform",
            "Incorporated cross-functional inputs for ideation, conceptualization, POC validation and post-launch optimization",
            "Ensured timely release closure, UAT and stakeholder buy-in, achieving consistent high-quality delivery standards",
          ],
        },
        {
          title: "Stakeholder Management",
          bullets: [
            "Boosted MAU by 30%, by driving adoption across 9 departments; advising stakeholders on process improvements",
            "Drove continuous product improvement through weekly dialogs with designers on new automation concepts",
            "Mentored a cohort of 30+ engineers on DMU engineering, achieving 80% skill competency growth over 6 months",
          ],
        },
      ],
    },
    {
      company: "AI-First Product Management Fellowship",
      client: null,
      dates: null,
      intro:
        "Enrolled in a competitive fellowship, leading 0-to-1 product sprints from user research to prototype delivery.",
      projects: [
        {
          title: "AI-Generated User Persona Builder",
          meta: "Automation + AI Workflow · n8n + OpenAI",
          bullets: [
            "Designed an AI-powered workflow that converts structured Google Form inputs into detailed user personas",
          ],
        },
        {
          title: "Flipkart — AI-Lite Guided Discovery System",
          meta: "E-commerce Product Discovery · UX Research · AI Prototype",
          bullets: [
            "Redesigned product discovery and defined system architecture to interpret Hinglish queries into structured filters",
          ],
        },
        {
          title: "Groww — Gamification of Investment Journey",
          meta: "Fintech Onboarding and Retention · Behavioural Design",
          bullets: [
            "Reimagined the investment journey for first-time investors through interactive learning flows and go-to-market",
          ],
        },
      ],
    },
  ],
  education: [
    {
      degree: "MBA",
      institution: "SP Jain Institute of Management & Research",
      dates: "2026",
      details: ["Information Management"],
    },
    {
      degree: "B.Tech",
      institution: "KIIT Deemed to be University",
      dates: "2019",
      details: ["Mechanical Engineering", "8.76 CGPA"],
    },
  ],
  achievements: [
    {
      title: "National Winners · Henkel SCPC Supply Chain Hackathon",
      year: "2025",
      note: "Designed innovative supply chain for retailers",
    },
    {
      title: "AI Educator · Abhyudaya, SPJIMR",
      year: "2025",
      note: "Mentored underprivileged students in Gen AI and effective communication",
    },
    {
      title: "Champion of the Month · Tata Technologies",
      year: "2023",
      note: "Awarded for driving impactful digital transformation initiatives",
    },
    {
      title: "Department Head — Hermes Racing",
      year: "2016–19",
      note: "Led design and operations for a national level Formula Student Team",
    },
  ],
};

function SectionHeader({ number, title, id }) {
  return (
    <div id={id} className="grid grid-cols-12 gap-6 md:gap-10 items-baseline mb-8 md:mb-12">
      <div className="col-span-12 md:col-span-3">
        <span className="chapter-num text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] text-[#C48B3C] block">
          {number}
        </span>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2 className="font-display text-[#121212] text-[2rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.02] tracking-[-0.02em]">
          {title}
        </h2>
      </div>
    </div>
  );
}

function BulletRow({ children, testId }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-3 md:gap-4 items-start" data-testid={testId}>
      <span
        aria-hidden="true"
        className="mt-[0.65em] inline-block w-1.5 h-1.5 rounded-full bg-[#C48B3C] shrink-0"
      />
      <span className="font-sans-ed text-[14px] md:text-[15px] leading-[1.65] text-[#221808]">
        {children}
      </span>
    </li>
  );
}

export default function Experience() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = `${RESUME.name} — Experience`;
  }, []);

  return (
    <SmoothScroll>
      <main
        data-testid="experience-root"
        className="relative min-h-screen paper-bg text-[#121212] bg-gradient-to-b from-[#F4F4F0] via-[#F7F1E1] to-[#F4F4F0]"
      >
        <NoiseOverlay />

        {/* Slim page nav */}
        <header
          data-testid="experience-topbar"
          className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F0]/85 backdrop-blur-md border-b border-[#12121218]"
        >
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-4 flex items-center justify-between">
            <Link
              to="/"
              data-testid="experience-back-home"
              className="flex items-center gap-3 group"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-500 group-hover:-translate-x-0.5">
                <path d="M11 7H3M3 7l4-4M3 7l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
              <span className="font-display text-[22px] leading-none">Abhilash</span>
              <span className="hidden sm:inline font-sans-ed text-[10px] uppercase tracking-[0.28em] text-[#555] mt-1">/ PM</span>
            </Link>

            <div className="flex items-center gap-4 md:gap-6">
              <a
                data-testid="experience-download-resume"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ed-link font-sans-ed text-[11px] md:text-[12px] uppercase tracking-[0.22em]"
              >
                Download PDF
              </a>
              <a
                href={RESUME.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="experience-linkedin"
                className="ed-link font-sans-ed text-[11px] md:text-[12px] uppercase tracking-[0.22em]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </header>

        {/* Cover */}
        <section className="relative pt-32 md:pt-40 pb-14 md:pb-20 px-6 md:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              data-testid="experience-kicker"
              className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#7A6740] mb-6"
            >
              <span className="text-[#D9381E]">◆</span>&nbsp;&nbsp;The Experience Dossier · 2025
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              data-testid="experience-name"
              className="font-display text-[#121212] text-[3.4rem] sm:text-[4.4rem] md:text-[5.4rem] lg:text-[6.4rem] leading-[0.95] tracking-[-0.025em]"
            >
              {RESUME.name}
              <span className="font-display-it text-[#A06F26]">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-sans-ed text-[11px] md:text-[12px] uppercase tracking-[0.24em] text-[#3B2A05]"
            >
              <span>SPJIMR · MBA</span>
              <span className="text-[#12121228]">·</span>
              <span>Tata Technologies · 5.4 yrs</span>
              <span className="text-[#12121228]">·</span>
              <span>Accenture · Present</span>
            </motion.div>
          </div>
        </section>

        {/* Career Summary */}
        <section className="px-6 md:px-10 py-14 md:py-20 border-t border-[#12121218]">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeader number="01" title="Career Summary" id="summary" />
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, ease: EASE }}
              data-testid="experience-career-summary"
              className="grid grid-cols-12 gap-6 md:gap-10"
            >
              <div className="col-span-12 md:col-span-9 md:col-start-4 space-y-4">
                {RESUME.careerSummary.map((s, i) => (
                  <BulletRow key={i} testId={`career-summary-bullet-${i}`}>
                    {s}
                  </BulletRow>
                ))}
              </div>
            </motion.ul>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="px-6 md:px-10 py-14 md:py-20 border-t border-[#12121218]">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeader number="02" title="Professional Experience" id="professional-experience" />
            <div className="space-y-16 md:space-y-20">
              {RESUME.professionalExperience.map((role, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.9, ease: EASE }}
                  data-testid={`experience-role-${i}`}
                  className="grid grid-cols-12 gap-6 md:gap-10"
                >
                  {/* Meta column */}
                  <div className="col-span-12 md:col-span-3">
                    {role.dates && (
                      <p className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#7A6740] mb-2">
                        {role.dates}
                      </p>
                    )}
                    <h3 className="font-display text-[#121212] text-[1.4rem] md:text-[1.7rem] leading-[1.15] tracking-[-0.015em]">
                      {role.company}
                    </h3>
                    {role.client && (
                      <p className="mt-2 font-sans-ed text-[12px] md:text-[13px] leading-[1.5] text-[#555] italic">
                        {role.client}
                      </p>
                    )}
                  </div>

                  {/* Details column */}
                  <div className="col-span-12 md:col-span-9 space-y-10">
                    {role.intro && (
                      <p className="font-sans-ed text-[15px] md:text-[16px] leading-[1.65] text-[#221808]">
                        {role.intro}
                      </p>
                    )}

                    {role.subroles?.map((sub, j) => (
                      <div key={j} data-testid={`experience-subrole-${i}-${j}`}>
                        <h4 className="font-display-it text-[#A06F26] text-[1.25rem] md:text-[1.45rem] leading-[1.2] mb-4">
                          {sub.title}
                        </h4>
                        <ul className="space-y-2.5">
                          {sub.bullets.map((b, k) => (
                            <BulletRow key={k} testId={`experience-bullet-${i}-${j}-${k}`}>
                              {b}
                            </BulletRow>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {role.projects?.map((p, j) => (
                      <div key={j} data-testid={`experience-project-${i}-${j}`}>
                        <div className="flex items-baseline gap-3 flex-wrap mb-3">
                          <h4 className="font-display text-[#121212] text-[1.2rem] md:text-[1.4rem] leading-[1.15]">
                            {p.title}
                          </h4>
                          <span className="font-sans-ed text-[10px] uppercase tracking-[0.26em] text-[#7A6740]">
                            {p.meta}
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {p.bullets.map((b, k) => (
                            <BulletRow key={k} testId={`experience-project-bullet-${i}-${j}-${k}`}>
                              {b}
                            </BulletRow>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="px-6 md:px-10 py-14 md:py-20 border-t border-[#12121218]">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeader number="03" title="Education" id="education" />
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-9 md:col-start-4 space-y-10">
                {RESUME.education.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ duration: 0.8, ease: EASE }}
                    data-testid={`experience-education-${i}`}
                    className="flex items-baseline justify-between gap-6 flex-wrap border-b border-[#12121218] pb-8"
                  >
                    <div>
                      <h3 className="font-display text-[#121212] text-[1.6rem] md:text-[2rem] leading-[1.05]">
                        {e.degree}
                      </h3>
                      <p className="mt-1 font-sans-ed text-[14px] md:text-[15px] leading-[1.5] text-[#555]">
                        {e.institution}
                      </p>
                      {e.details.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {e.details.map((d, k) => (
                            <li
                              key={k}
                              className="font-sans-ed text-[11px] uppercase tracking-[0.22em] text-[#3B2A05] border border-[#12121230] rounded-full px-3 py-1"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <span className="font-sans-ed text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-[#7A6740]">
                      {e.dates}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="px-6 md:px-10 py-14 md:py-20 border-t border-[#12121218]">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeader number="04" title="Achievements & Extra-Curricular Activities" id="achievements" />
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-9 md:col-start-4">
                <ul className="divide-y divide-[#12121218]">
                  {RESUME.achievements.map((a, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-15% 0px" }}
                      transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
                      data-testid={`experience-achievement-${i}`}
                      className="py-6 md:py-8 grid grid-cols-12 gap-4 items-baseline"
                    >
                      <span className="col-span-3 md:col-span-2 font-sans-ed text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#A06F26]">
                        {a.year}
                      </span>
                      <div className="col-span-9 md:col-span-10">
                        <h4 className="font-display text-[#121212] text-[1.2rem] md:text-[1.5rem] leading-[1.15]">
                          {a.title}
                        </h4>
                        <p className="mt-1 font-sans-ed text-[13px] md:text-[15px] leading-[1.5] text-[#333]">
                          {a.note}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <section className="px-6 md:px-10 py-14 md:py-20 border-t border-[#12121218]">
          <div className="mx-auto max-w-[1200px] flex items-baseline justify-between flex-wrap gap-6">
            <p className="font-display text-[#121212] text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] max-w-[24ch]">
              End of the <span className="font-display-it text-[#A06F26]">dossier</span>. Let's talk about what's next.
            </p>
            <div className="flex flex-col md:items-end gap-3">
              <a
                href={RESUME.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="experience-footer-linkedin"
                className="ed-link font-sans-ed text-[12px] uppercase tracking-[0.24em]"
              >
                {RESUME.contact.linkedinLabel} ↗
              </a>
              <Link
                to="/"
                data-testid="experience-footer-home"
                className="ed-link font-sans-ed text-[11px] uppercase tracking-[0.22em] text-[#555]"
              >
                ← Back to portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
