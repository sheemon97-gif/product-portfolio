import React from "react";
import SmoothScroll from "@/components/site/SmoothScroll";
import NoiseOverlay from "@/components/site/NoiseOverlay";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import EditorialMarquee from "@/components/site/EditorialMarquee";
import Manifesto from "@/components/site/Manifesto";
import Footer from "@/components/site/Footer";

export default function Portfolio() {
  return (
    <SmoothScroll>
      <main
        data-testid="portfolio-root"
        className="relative min-h-screen paper-bg text-[#121212]"
      >
        <NoiseOverlay />
        <Nav />
        <Hero />
        <EditorialMarquee />
        <Manifesto />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
