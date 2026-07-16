import React from "react";
import SmoothScroll from "@/components/site/SmoothScroll";
import NoiseOverlay from "@/components/site/NoiseOverlay";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import EditorialMarquee from "@/components/site/EditorialMarquee";
import ProjectList from "@/components/site/ProjectList";
import Podcast from "@/components/site/Podcast";
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
        <ProjectList />
        <Podcast />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
