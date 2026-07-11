import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative px-6 md:px-10 pt-16 md:pt-24 pb-10 border-t border-[#12121224]"
    >
      <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-6 md:gap-10">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="col-span-12 md:col-span-8 font-display text-[#121212] text-[2.2rem] md:text-[3.4rem] lg:text-[4.4rem] leading-[1] tracking-[-0.02em]"
        >
          Currently reading briefs, <span className="font-display-it text-[#A06F26]">writing specs,</span> and shipping <span className="font-deva text-[#D9381E]">प्रोडक्ट</span>.
        </motion.h4>

        <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-4 md:items-end">
          <a
            data-testid="footer-linkedin"
            href="https://www.linkedin.com/in/abhilash-mohanta-spjimr/"
            target="_blank"
            rel="noopener noreferrer"
            className="ed-link font-sans-ed text-[12px] uppercase tracking-[0.24em]"
          >
            LinkedIn — @abhilash-mohanta
          </a>
          <span className="font-sans-ed text-[11px] uppercase tracking-[0.24em] text-[#555]">
            Designed &amp; built with intent, 2025
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] mt-14 flex items-center justify-between font-sans-ed text-[10px] uppercase tracking-[0.32em] text-[#555]">
        <span>Vol. 01 · The Product Issue</span>
        <span data-testid="footer-copyright">
          © {new Date().getFullYear()} Abhilash Mohanta
        </span>
      </div>
    </footer>
  );
}
