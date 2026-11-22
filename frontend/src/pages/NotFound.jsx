import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NoiseOverlay from "@/components/site/NoiseOverlay";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Abhilash Mohanta";
  }, []);

  return (
    <main
      data-testid="not-found-root"
      className="relative min-h-[100svh] paper-bg text-[#121212] bg-gradient-to-b from-[#F4F4F0] via-[#F7F1E1] to-[#F4F4F0] flex items-center px-6 md:px-10"
    >
      <NoiseOverlay />
      <div className="relative mx-auto w-full max-w-[1200px]">
        <p className="font-sans-ed text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#7A6740] mb-6">
          <span className="text-[#D9381E]">◆</span>&nbsp;&nbsp;Error 404
        </p>
        <h1 className="font-display text-[3.4rem] sm:text-[4.4rem] md:text-[5.6rem] leading-[0.95] tracking-[-0.025em] max-w-[16ch]">
          This page went <span className="font-display-it text-[#A06F26]">off-roadmap.</span>
        </h1>
        <p className="mt-6 font-sans-ed text-[15px] md:text-[17px] leading-[1.6] text-[#333] max-w-[46ch]">
          The link may be broken or the page may have moved. Everything worth seeing is one click away.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            to="/"
            data-testid="not-found-home"
            className="inline-flex items-center gap-3 rounded-full bg-[#121212] text-[#F4EEDA] px-6 py-3.5 font-sans-ed text-[12px] md:text-[13px] uppercase tracking-[0.24em] transition-transform duration-500 hover:-translate-y-0.5"
          >
            ← Back to portfolio
          </Link>
          <Link
            to="/experience"
            className="ed-link font-sans-ed text-[12px] uppercase tracking-[0.24em] py-2"
          >
            View experience
          </Link>
        </div>
      </div>
    </main>
  );
}
