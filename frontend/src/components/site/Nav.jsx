import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { label: "Experience", to: "/experience", testId: "nav-experience-link", internal: true },
  { label: "Work", href: "#work", testId: "nav-work-link" },
  { label: "Podcast", href: "#podcast", testId: "nav-podcast-link" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhilash-mohanta-spjimr/",
    testId: "nav-linkedin-link",
    external: true,
  },
  { label: "Contact", href: "#contact", testId: "nav-contact-link" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // From non-root routes, hash links must navigate back to root first
  const hashHref = (h) => (location.pathname === "/" ? h : `/${h}`);

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.05 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border,padding] duration-500 ${
        scrolled
          ? "bg-[#f4f4f0]/85 backdrop-blur-md border-b border-[#12121224] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <span className="font-display text-2xl md:text-[26px] leading-none">
            Abhilash
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            if (l.internal) {
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  data-testid={l.testId}
                  className="ed-link font-sans-ed text-[13px] uppercase tracking-[0.22em] text-[#121212] hover:text-[#121212]"
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <a
                key={l.label}
                href={l.external ? l.href : hashHref(l.href)}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                data-testid={l.testId}
                className="ed-link font-sans-ed text-[13px] uppercase tracking-[0.22em] text-[#121212] hover:text-[#121212]"
              >
                {l.label}
                {l.external && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8L8 2M8 2H3.5M8 2V6.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="square"
                    />
                  </svg>
                )}
              </a>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            data-testid="nav-mobile-menu-toggle"
            className="inline-flex items-center gap-2 font-sans-ed text-[11px] uppercase tracking-[0.22em] border border-[#12121240] rounded-full px-4 py-2"
          >
            {menuOpen ? "Close" : "Menu"}
            <span aria-hidden="true" className="relative inline-block w-3 h-2.5">
              <span
                className={`absolute left-0 right-0 h-[1.4px] bg-current transition-all duration-300 ${
                  menuOpen ? "top-1 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[1.4px] bg-current transition-all duration-300 ${
                  menuOpen ? "top-1 -rotate-45" : "top-2"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        data-testid="nav-mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="mx-6 mt-3 mb-2 rounded-2xl bg-[#FBF7EA] border border-[#12121218] shadow-[0_20px_40px_-30px_rgba(18,18,18,0.35)] divide-y divide-[#12121214]">
          {links.map((l, i) => {
            const cls =
              "flex items-center justify-between px-5 py-4 font-display text-[1.5rem] leading-none text-[#121212]";
            const num = (
              <span className="font-sans-ed text-[10px] uppercase tracking-[0.28em] text-[#A06F26]">
                {String(i + 1).padStart(2, "0")}
                {l.external ? " ↗" : ""}
              </span>
            );
            if (l.internal) {
              return (
                <Link key={l.label} to={l.to} onClick={() => setMenuOpen(false)} className={cls}>
                  {l.label}
                  {num}
                </Link>
              );
            }
            return (
              <a
                key={l.label}
                href={l.external ? l.href : hashHref(l.href)}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cls}
              >
                {l.label}
                {num}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between px-5 py-4 font-sans-ed text-[11px] uppercase tracking-[0.24em] text-[#121212]"
          >
            View Resume (PDF)
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
