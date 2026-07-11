import React from "react";
import Marquee from "react-fast-marquee";

const ITEMS = [
  "Discovery",
  "Validation",
  "Roadmapping",
  "0 → 1",
  "Growth",
  "प्रोडक्ट",
  "Craft",
  "Measurable Impact",
  "Cross-functional",
  "Storytelling",
];

export default function EditorialMarquee() {
  return (
    <section
      data-testid="editorial-marquee"
      className="relative border-y border-[#12121224] bg-[#ebebe6] py-6 md:py-10 overflow-hidden select-none"
    >
      <Marquee gradient={false} speed={38} pauseOnHover={false}>
        {ITEMS.concat(ITEMS).map((item, i) => (
          <span
            key={i}
            className="marquee-track text-[#121212] text-[13vw] md:text-[9vw] lg:text-[8vw] leading-none px-[0.35em] flex items-center"
          >
            <span
              className={
                item === "प्रोडक्ट"
                  ? "font-deva text-[#D9381E]"
                  : ""
              }
            >
              {item}
            </span>
            <span
              aria-hidden="true"
              className="mx-[0.35em] inline-block w-[0.18em] h-[0.18em] rounded-full bg-[#121212]"
            />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
