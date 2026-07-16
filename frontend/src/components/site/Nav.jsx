import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#top", testId: "nav-about-link" },
  { label: "Experience", href: "#experience", testId: "nav-experience-link" },
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <span className="hidden sm:inline-block font-sans-ed uppercase tracking-[0.24em] text-[10px] text-[#555] mt-1">
            / PM
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
          <a
            href="#contact"
            data-testid="nav-mobile-contact"
            className="font-sans-ed text-[11px] uppercase tracking-[0.22em] border border-[#12121240] rounded-full px-3 py-1.5"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
