export default function Hero() {
  return (
    <section id="hero" className="relative bg-canvas flex flex-col overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col justify-center py-6 md:py-10 pt-32 md:pt-36">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-rule pb-5 gap-4 md:gap-0">
          <span className="flex items-center gap-3 text-xs font-mono text-mist uppercase tracking-widest">
            <span className="relative flex items-center justify-center w-3 h-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-accent inline-block" />
            </span>
            Available for new projects
          </span>
          <span className="text-xs font-mono text-mist/50 uppercase tracking-widest">
            Tamil Nadu, India · {new Date().getFullYear()}
          </span>
        </div>

        <h1 className="font-display font-black leading-[0.82] tracking-tighter select-none pt-8">
          <span className="block text-5xl md:text-8xl lg:text-[180px] text-ink">Abinesh</span>
          <span className="block text-5xl md:text-8xl lg:text-[180px] text-accent">Selva</span>
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-rule">
          <div>
            <p className="text-[10px] font-mono text-mist/50 uppercase tracking-[0.22em] mb-2">Role</p>
            <p className="text-ink font-semibold text-sm">Full Stack Engineer</p>
            <p className="text-mist text-xs mt-1 font-mono">WordPress · React · Headless</p>
          </div>

          <div>
            <p className="text-[10px] font-mono text-mist/50 uppercase tracking-[0.22em] mb-2">Agency</p>
            <p className="text-ink font-semibold text-sm">Futentra</p>
            <p className="text-mist text-xs mt-1 font-mono">Freelance · Open to roles</p>
          </div>

          <div className="hidden md:block">
            <p className="text-[10px] font-mono text-mist/50 uppercase tracking-[0.22em] mb-2">Focuses on</p>
            <p className="text-ink/70 text-sm leading-relaxed">Fast, accessible websites that rank and convert.</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#projects"
              className="px-5 py-3 bg-accent text-white text-sm font-bold hover:bg-forest transition-colors text-center"
            >
              See my work →
            </a>
            <a
              href="/resume/Abinesh-Resume.pdf"
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
