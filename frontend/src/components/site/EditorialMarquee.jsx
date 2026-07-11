import React from "react";
import Marquee from "react-fast-marquee";

/**
 * Toolkit strip — real brand SVGs (in original brand color) + wordmark text.
 * Each tool: SVG icon + styled brand-name text so every logo has a visible name.
 * Self-hosted SVGs from /public/logos.
 */
const TOOLS = [
  {
    name: "Claude",
    file: "claude.svg",
    hasWordmark: true, // svg contains the "Claude" wordmark already
    color: "#191817",
    testId: "tool-claude",
  },
  {
    name: "Canva",
    file: "canva.svg",
    hasWordmark: false,
    color: "#00C4CC",
    testId: "tool-canva",
  },
  {
    name: "n8n",
    file: "n8n.svg",
    hasWordmark: false,
    color: "#EA4B71",
    testId: "tool-n8n",
  },
  {
    name: "Mixpanel",
    file: "mixpanel.svg",
    hasWordmark: true, // svg has "mixpanel" wordmark
    color: "#7856FF",
    testId: "tool-mixpanel",
  },
  {
    name: "Lovable",
    file: "lovable.svg",
    hasWordmark: false,
    color: "#FF4F7B",
    testId: "tool-lovable",
  },
  {
    name: "Notion",
    file: "notion.svg",
    hasWordmark: true, // svg has "Notion" wordmark
    color: "#191817",
    testId: "tool-notion",
  },
];

function ToolItem({ tool }) {
  return (
    <span
      data-testid={tool.testId}
      className="group inline-flex items-center gap-3 px-8 md:px-12 lg:px-16 opacity-90 hover:opacity-100 transition-opacity duration-300"
      title={tool.name}
    >
      <img
        src={`/logos/${tool.file}`}
        alt={tool.name}
        loading="lazy"
        className="h-7 md:h-8 lg:h-9 w-auto select-none"
        draggable={false}
      />
      {!tool.hasWordmark && (
        <span
          className="font-sans-ed font-semibold tracking-tight text-[20px] md:text-[22px] lg:text-[26px] leading-none"
          style={{ color: tool.color }}
        >
          {tool.name}
        </span>
      )}
    </span>
  );
}

export default function EditorialMarquee() {
  const items = [...TOOLS, ...TOOLS, ...TOOLS];
  return (
    <section
      data-testid="editorial-marquee"
      aria-label="Tools I use to turn ideas into products"
      className="relative border-y border-[#12121218] bg-[#F4EEDA] py-10 md:py-14 overflow-hidden select-none"
    >
      {/* Caption row */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mb-8 md:mb-10 flex items-baseline justify-between">
        <p
          data-testid="toolkit-caption"
          className="font-sans-ed text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-[#5F4A22]"
        >
          <span className="text-[#D9381E]">◆</span>&nbsp;&nbsp;How I turn ideas into impactful products
        </p>
        <span className="hidden md:inline font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#8B7440]">
          Section 02
        </span>
      </div>

      {/* Marquee row */}
      <Marquee gradient={true} gradientColor="#F4EEDA" gradientWidth={100} speed={38} pauseOnHover={false}>
        {items.map((tool, i) => (
          <ToolItem key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </Marquee>
    </section>
  );
}
