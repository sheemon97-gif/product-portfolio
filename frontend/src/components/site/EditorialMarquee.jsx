import React from "react";
import Marquee from "react-fast-marquee";

/**
 * Toolkit strip — real brand logos, small, grayscale-at-rest, color on hover.
 * SVGs are self-hosted from /public/logos to avoid CORS + intermittent CDN issues.
 */
const TOOLS = [
  { name: "Claude", file: "claude.svg", testId: "tool-claude" },
  { name: "Canva", file: "canva.svg", testId: "tool-canva" },
  { name: "n8n", file: "n8n.svg", testId: "tool-n8n" },
  { name: "Mixpanel", file: "mixpanel.svg", testId: "tool-mixpanel" },
  { name: "Lovable", file: "lovable.svg", testId: "tool-lovable" },
  { name: "Notion", file: "notion.svg", testId: "tool-notion" },
];

function ToolLogo({ tool }) {
  return (
    <span
      data-testid={tool.testId}
      className="group inline-flex items-center justify-center px-10 md:px-14 lg:px-20 opacity-70 hover:opacity-100 transition-opacity duration-500"
      title={tool.name}
    >
      <img
        src={`/logos/${tool.file}`}
        alt={tool.name}
        loading="lazy"
        className="h-7 md:h-8 lg:h-9 w-auto grayscale group-hover:grayscale-0 transition-[filter] duration-500 select-none"
        draggable={false}
      />
    </span>
  );
}

export default function EditorialMarquee() {
  const items = [...TOOLS, ...TOOLS, ...TOOLS];
  return (
    <section
      data-testid="editorial-marquee"
      aria-label="Tools I know"
      className="relative border-y border-[#12121218] bg-[#F4F4F0] py-10 md:py-14 overflow-hidden select-none"
    >
      {/* Caption row */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mb-8 md:mb-10 flex items-baseline justify-between">
        <p
          data-testid="toolkit-caption"
          className="font-sans-ed text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-[#555]"
        >
          <span className="text-[#D9381E]">◆</span>&nbsp;&nbsp;My toolkit for building experiences people love
        </p>
        <span className="hidden md:inline font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#888]">
          Section 02
        </span>
      </div>

      {/* Marquee row */}
      <Marquee gradient={true} gradientColor="#F4F4F0" gradientWidth={80} speed={38} pauseOnHover={false}>
        {items.map((tool, i) => (
          <ToolLogo key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </Marquee>
    </section>
  );
}
