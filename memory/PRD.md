# PRD — Abhilash Mohanta · Product Portfolio (Step 1: Landing Hero)

## Original Problem Statement
> Build me a product portfolio where I will say about myself as a product manager. The Hero landing page should have the following headline: "Turning user problems into products that matter" (write the word "product" in pure Hindi). Upper part of the landing page should have 4 options: About, Experience, LinkedIn, Contact. Sharing a picture of mine that would be put up in the hero page. The landing page shouldnt be dark and should be light. Keep the photo black and white with high contrast. This is step 1 of creating the page.

**Additional direction:** Award-worthy Awwwards-level design. Kinetic hero with masked line-by-line reveal, real photo treated deliberately (spotlight, clipped frames), numbered manifesto chapters, one slow editorial marquee, framer-motion + lenis, subtle parallax.

## User Personas
- Recruiters / hiring managers looking at a PM portfolio
- Founders scouting product talent
- Peers / mentors / colleagues (LinkedIn referrals)

## Core Requirements (Static)
- Light theme (paper off-white `#F4F4F0`), never dark
- Nav: About, Experience, LinkedIn (external), Contact
- Hero headline exactly: `Turning user problems into प्रोडक्ट that matter` (Devanagari for "product")
- B&W high-contrast portrait in hero
- Editorial magazine-style aesthetic (Instrument Serif + Noto Serif Devanagari + Manrope)
- Framer-motion masked reveal + parallax; Lenis smooth scroll; react-fast-marquee ticker
- Vermilion `#D9381E` accent for micro highlights only

## What's Been Implemented (2025-12 / Step 1)
- `src/pages/Portfolio.jsx` — page composition
- `src/components/site/SmoothScroll.jsx` — Lenis wrapper (respects prefers-reduced-motion)
- `src/components/site/NoiseOverlay.jsx` — SVG grain overlay
- `src/components/site/Nav.jsx` — sticky editorial nav with hover-underline micro-interaction (About / Experience / LinkedIn / Contact)
- `src/components/site/Hero.jsx` — kinetic hero with line-by-line masked reveal, meta strip (Volume 01), animated hairline divider, tagline block with blinking ink caret, scroll cue
- `src/components/site/ClippedPortrait.jsx` — B&W high-contrast portrait with parallax + spotlight + corner ticks + fig caption
- `src/components/site/EditorialMarquee.jsx` — slow editorial keyword ticker (Discovery · Validation · प्रोडक्ट · …)
- `src/components/site/Manifesto.jsx` — three numbered chapters (01 About, 02 Experience, 03 Contact) with scroll-reveals
- `src/components/site/Footer.jsx` — closing manifesto line + LinkedIn + copyright

## Prioritized Backlog
- **P0** (Step 2): Full About section with career story, values, principles
- **P0** (Step 3): Experience section — real case studies with problem → validation → outcome → metrics
- **P1**: Contact form (Resend / SendGrid integration) with rate-limit
- **P1**: Individual case-study routes with rich media, framer-motion page transitions
- **P2**: Blog / notes section (MDX)
- **P2**: Dark editorial mode toggle
- **P2**: OG image generation, SEO metadata, sitemap
- **P2**: CMS backing (MongoDB) so cases can be edited without redeploy

## Next Tasks
1. Ask user for About / bio content and career timeline for chapters 01 + 02
2. Ask for contact email; wire up contact section
3. Build individual experience case-study pages
