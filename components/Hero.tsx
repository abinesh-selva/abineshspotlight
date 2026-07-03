"use client";

import { useState } from "react";
import ScrambleText, { useScramble } from "./ScrambleText";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const scrambledFull = useScramble("Abinesh.S", 0, 0.15); // Scrambles only on load (0), very slow (0.15)
  const parts = scrambledFull.split(".");
  const firstPart = parts[0];
  const lastPart = parts.length > 1 ? "." + parts.slice(1).join(".") : "";

  return (
    <section id="hero" className="relative bg-canvas flex flex-col overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col justify-center py-6 md:py-10 pt-32 md:pt-36">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-rule pb-5 gap-4 md:gap-0">
          <span className="flex items-center gap-3 text-base font-mono text-mist uppercase tracking-widest">
            Open To Work
          </span>
          <span className="text-base font-mono text-mist uppercase tracking-widest">
            Tamil Nadu, India · {new Date().getFullYear()}
          </span>
        </div>

        <h1 
          className="group font-display font-semibold leading-none tracking-tighter uppercase select-none pt-8 cursor-default w-max"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {/* Revealed Text (Center) */}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10 pointer-events-none">
              <span className="text-base md:text-2xl lg:text-4xl xl:text-5xl text-accent tracking-[0.2em] md:tracking-widest uppercase font-mono font-bold whitespace-nowrap drop-shadow-md">
                <ScrambleText text="Full Stack Engineer" isHovered={isHovered} speed={0.3} />
              </span>
            </span>

            {/* Top Half */}
            <span className="block text-7xl md:text-9xl lg:text-[250px] text-ink transition-transform duration-500 ease-out group-hover:-translate-y-3 md:group-hover:-translate-y-6" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}>
              {firstPart}<span className="text-accent">{lastPart}</span>
            </span>

            {/* Bottom Half */}
            <span className="absolute top-0 left-0 text-7xl md:text-9xl lg:text-[250px] text-ink transition-transform duration-500 ease-out group-hover:translate-y-3 md:group-hover:translate-y-6" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} aria-hidden="true">
              {firstPart}<span className="text-accent">{lastPart}</span>
            </span>
          </div>
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-rule">
          <div>
            <p className="text-base font-mono text-mist uppercase tracking-widest mb-2">Role</p>
            <p className="text-ink font-semibold text-base">Full Stack Engineer</p>
            <p className="text-mist text-base mt-1 font-mono">WordPress · React · Headless</p>
          </div>

          <div>
            <p className="text-base font-mono text-mist uppercase tracking-widest mb-2">Studio</p>
            <a href="https://gradiolex.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-ink font-semibold text-base hover:text-accent transition-colors">
              Gradiolex
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <p className="text-mist text-base mt-1 font-mono">Freelance · Open to roles</p>
          </div>

          <div className="hidden md:block">
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Focuses on</p>
            <p className="text-ink text-opacity-70 text-base leading-relaxed">Fast, accessible websites that rank and convert.</p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#projects" className="group px-5 py-3 bg-accent text-white text-base font-bold hover:bg-forest transition-colors hover:text-accent flex items-center justify-center gap-2">
              See my work
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/resume/Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-3 border border-rule text-white text-base font-bold bg-forest hover:bg-accent hover:text-forest transition-all text-center flex items-center justify-center gap-2">
              Resume
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
