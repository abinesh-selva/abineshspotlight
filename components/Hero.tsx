"use client";

import { useState } from "react";
import ScrambleText, { useScramble } from "./ScrambleText";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const firstPart = "Abinesh";
  const lastPart = ".S";

  return (
    <section id="hero" className="relative bg-canvas flex flex-col overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col justify-center py-6 md:py-10 pt-32 md:pt-36">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-rule pb-5 gap-4 md:gap-0">
          <span className="flex items-center gap-2 text-xs font-mono text-mist uppercase tracking-widest">
            Open To Work
          </span>
          <span className="text-xs font-mono text-mist uppercase tracking-widest">
            Tamil Nadu, India · {new Date().getFullYear()}
          </span>
        </div>

        <h1
          aria-label="Abinesh Selvarasu — Senior WordPress Developer & Full Stack Engineer"
          className="group font-display font-semibold leading-none tracking-tighter uppercase select-none pt-8 cursor-default max-w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative max-w-full overflow-hidden">
            {/* Revealed Text (Center) */}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10 pointer-events-none">
              <span className="text-xs sm:text-base md:text-2xl lg:text-4xl xl:text-5xl text-accent tracking-[0.15em] md:tracking-widest uppercase font-mono font-bold whitespace-nowrap drop-shadow-md">
                <ScrambleText text="Full Stack Engineer" isHovered={isHovered} speed={0.3} />
              </span>
            </span>

            {/* Top Half */}
            <span
              className="block text-5xl sm:text-7xl md:text-9xl lg:text-[170px] xl:text-[220px] text-ink transition-transform duration-500 ease-out group-hover:-translate-y-3 md:group-hover:-translate-y-6"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
            >
              {firstPart}<span className="text-accent">{lastPart}</span>
            </span>

            {/* Bottom Half */}
            <span
              className="top-0 left-0 text-5xl sm:text-7xl md:text-9xl lg:text-[170px] xl:text-[220px] text-ink transition-transform duration-500 ease-out group-hover:translate-y-3 md:group-hover:translate-y-6 absolute"
              style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
              aria-hidden="true"
            >
              {firstPart}<span className="text-accent">{lastPart}</span>
            </span>
          </div>
        </h1>
      </div>

      <div className="container mx-auto px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pt-8 border-t border-rule items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono text-mist font-bold uppercase tracking-widest mb-2">Role &amp; Experience</p>
            <p className="text-ink font-semibold text-base sm:whitespace-nowrap">Senior WordPress Developer &amp; Full Stack Engineer</p>
            <p className="text-mist text-sm mt-1 font-mono">3+ Years Experience</p>
          </div>

          <div className="hidden lg:block lg:col-span-4">
            <p className="text-xs font-mono text-mist font-bold uppercase tracking-widest mb-2">Specialises in</p>
            <p className="text-ink text-opacity-70 text-sm leading-relaxed">
              Custom WordPress Architecture, Headless CMS, Core Web Vitals &amp; Performance Engineering.
            </p>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-2">
            <a
              href="#projects"
              className="group px-4 py-2 bg-accent text-white text-xs font-bold uppercase tracking-wider hover:bg-forest transition-colors hover:text-accent flex items-center justify-center gap-1.5 shadow-sm"
            >
              See my work
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-rule text-white text-xs font-bold uppercase tracking-wider bg-forest hover:bg-accent hover:text-forest transition-all text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              Resume
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
