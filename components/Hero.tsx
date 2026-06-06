"use client";

import { useState } from "react";
import ScrambleText, { useScramble } from "./ScrambleText";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const scrambledFull = useScramble("Abinesh S", 0, 0.15); // Scrambles only on load (0), very slow (0.15)
  const parts = scrambledFull.split(" ");
  const firstPart = parts[0];
  const lastPart = parts.slice(1).join(" ");

  return (
    <section id="hero" className="relative bg-canvas flex flex-col overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col justify-center py-6 md:py-10 pt-32 md:pt-36">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-rule pb-5 gap-4 md:gap-0">
          <span className="flex items-center gap-3 text-xs font-mono text-mist uppercase tracking-widest">
            Available for new projects
          </span>
          <span className="text-xs font-mono text-mist uppercase tracking-widest">
            Tamil Nadu, India · {new Date().getFullYear()}
          </span>
        </div>

        <h1 
          className="group font-display font-black leading-none tracking-tighter select-none pt-8 cursor-default w-max"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {/* Revealed Text (Center) */}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10 pointer-events-none">
              <span className="text-sm md:text-2xl lg:text-4xl xl:text-5xl text-accent tracking-[0.2em] md:tracking-widest uppercase font-mono font-bold whitespace-nowrap drop-shadow-md">
                <ScrambleText text="Full Stack Engineer" isHovered={isHovered} speed={0.3} />
              </span>
            </span>

            {/* Top Half */}
            <span 
              className="block text-4xl md:text-8xl lg:text-[150px] text-ink transition-transform duration-500 ease-out group-hover:-translate-y-3 md:group-hover:-translate-y-6"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
            >
              {firstPart} <span className="text-accent">{lastPart}</span>
            </span>

            {/* Bottom Half */}
            <span 
              className="absolute top-0 left-0 text-4xl md:text-8xl lg:text-[150px] text-ink transition-transform duration-500 ease-out group-hover:translate-y-3 md:group-hover:translate-y-6"
              style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
              aria-hidden="true"
            >
              {firstPart} <span className="text-accent">{lastPart}</span>
            </span>
          </div>
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-rule">
          <div>
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Role</p>
            <p className="text-ink font-semibold text-sm">Full Stack Engineer</p>
            <p className="text-mist text-xs mt-1 font-mono">WordPress · React · Headless</p>
          </div>

          <div>
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Agency</p>
            <p className="text-ink font-semibold text-sm">Gradiolex</p>
            <p className="text-mist text-xs mt-1 font-mono">Freelance · Open to roles</p>
          </div>

          <div className="hidden md:block">
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Focuses on</p>
            <p className="text-ink text-opacity-70 text-sm leading-relaxed">Fast, accessible websites that rank and convert.</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#projects"
              className="px-5 py-3 bg-accent text-white text-sm font-bold hover:bg-forest transition-colors text-center"
            >
              See my work →
            </a>
            <a
              href="/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-rule text-mist text-sm font-medium hover:border-accent hover:text-accent transition-all text-center"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
