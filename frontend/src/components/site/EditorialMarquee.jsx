import React from "react";
import Marquee from "react-fast-marquee";

// Inline monotone SVGs for tools not available on simpleicons CDN.
// All icons render in currentColor at 1em × 1em.

const CanvaIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm0 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm1.75 4.35c-2.28 0-4.13 1.85-4.13 4.13 0 2.24 1.65 3.87 3.79 3.87 1.56 0 2.63-.83 3.07-1.65a.5.5 0 0 0-.07-.6l-.53-.53a.36.36 0 0 0-.52.02c-.33.4-.9.83-1.72.83-1.11 0-1.9-.88-1.9-2.06 0-1.23.86-2.2 1.98-2.2.79 0 1.31.38 1.62.72.16.18.4.2.57.05l.55-.5a.42.42 0 0 0 .05-.58c-.5-.65-1.4-1.5-2.76-1.5Z"/>
  </svg>
);

const LovableIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"/>
  </svg>
);

const ClaudeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2 13.3 8.2 19 5 15.8 10.7 22 12 15.8 13.3 19 19 13.3 15.8 12 22 10.7 15.8 5 19 8.2 13.3 2 12 8.2 10.7 5 5 10.7 8.2 12 2Z"/>
  </svg>
);

const N8nIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="4" cy="12" r="2" fill="currentColor" />
    <circle cx="12" cy="6" r="2" fill="currentColor" />
    <circle cx="12" cy="18" r="2" fill="currentColor" />
    <circle cx="20" cy="12" r="2" fill="currentColor" />
    <path d="M6 12 12 6M6 12 12 18M14 6l4 6M14 18l4-6" />
  </svg>
);

const MixpanelIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="14" width="4" height="7" rx="0.5" />
    <rect x="10" y="9" width="4" height="12" rx="0.5" />
    <rect x="17" y="4" width="4" height="17" rx="0.5" />
  </svg>
);

const NotionIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.5 4.5A2.5 2.5 0 0 1 6 2h12a2.5 2.5 0 0 1 2.5 2.5v15A2.5 2.5 0 0 1 18 22H6a2.5 2.5 0 0 1-2.5-2.5v-15Zm4 3.2V17h1.8V11.4L14.7 17h1.8V7h-1.8v5.6L9.3 7H7.5Z" />
  </svg>
);

const TOOLS = [
  { name: "Claude Code", Icon: ClaudeIcon, testId: "tool-claude" },
  { name: "Canva", Icon: CanvaIcon, testId: "tool-canva" },
  { name: "n8n", Icon: N8nIcon, testId: "tool-n8n" },
  { name: "Mixpanel", Icon: MixpanelIcon, testId: "tool-mixpanel" },
  { name: "Lovable", Icon: LovableIcon, testId: "tool-lovable" },
  { name: "Notion", Icon: NotionIcon, testId: "tool-notion" },
];

function ToolItem({ tool }) {
  const { Icon } = tool;
  return (
    <span
      data-testid={tool.testId}
      className="inline-flex items-center gap-[0.35em] px-[0.5em] text-[#121212] leading-none whitespace-nowrap"
    >
      <Icon
        className="w-[0.72em] h-[0.72em] shrink-0"
        aria-hidden="true"
      />
      <span className="marquee-track">{tool.name}</span>
      <span
        aria-hidden="true"
        className="inline-block w-[0.14em] h-[0.14em] rounded-full bg-[#121212] shrink-0 ml-[0.3em]"
      />
    </span>
  );
}

export default function EditorialMarquee() {
  const items = [...TOOLS, ...TOOLS];
  return (
    <section
      data-testid="editorial-marquee"
      aria-label="Tools I know"
      className="relative border-y border-[#12121224] bg-[#ebebe6] py-6 md:py-10 overflow-hidden select-none"
    >
      <span className="sr-only">Tools I know</span>
      <div className="text-[10vw] md:text-[6.4vw] lg:text-[5.4vw]">
        <Marquee gradient={false} speed={42} pauseOnHover={false}>
          {items.map((tool, i) => (
            <ToolItem key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
