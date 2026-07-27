const tags = [
  'WordPress Customization', 'Custom Themes', 'Custom Hooks',
  'Technical SEO', 'MySQL', 'ACF Pro', 'PHP', 'Core Web Vitals',
  'Headless WP', 'Gutenberg Blocks', 'WPGraphQL', 'Craft CMS', 'Drupal',
  'JavaScript', 'Tailwind CSS', 'Figma to Code',
]

const milestones = [
  {
    year: '2016',
    end: '2020',
    type: 'education',
    title: 'B.E. Computer Science & Engineering',
    company: 'Vidyaa Vikas College of Engineering — Anna University',
    location: 'Tamil Nadu, India',
    desc: 'Foundational study in algorithms, data structures, databases, and web technologies — building the engineering base for production software development.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'C++'],
  },
  {
    year: 'Jul 2022',
    end: 'Dec 2022',
    type: 'work',
    title: 'Intern — Web Developer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'Gained hands-on agency experience — WordPress theme customization, responsive UI implementation, bug fixing, and version control workflows.',
    tags: ['WordPress', 'HTML', 'CSS', 'Git'],
  },
  {
    year: 'Jan 2023',
    end: 'Dec 2024',
    type: 'work',
    title: 'Frontend Developer & WordPress Developer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'Converted Figma designs into pixel-perfect WordPress websites. Built custom Gutenberg blocks and ACF Pro components for North American enterprise clients.',
    tags: ['WordPress', 'ACF Pro', 'PHP', 'Gutenberg', 'SCSS', 'Figma'],
  },
  {
    year: 'Jan 2025',
    end: 'May 2026',
    type: 'work',
    title: 'Senior Web Developer & WordPress Engineer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'Architected enterprise CMS solutions across WordPress, Drupal, and Craft CMS for global brands — Unbounce, ElasticPath, OpenGovernmentPartnership, and Premier Boxing Champions. Reduced LCP by ~30% via deep asset and rendering optimizations.',
    tags: ['WordPress', 'Drupal', 'Craft CMS', 'ACF Pro', 'Core Web Vitals', 'Technical SEO'],
  },
]

const TYPE_STYLES = {
  education: { dot: 'bg-mist border-mist',    label: 'Education',  labelClass: 'text-mist border-mist/40' },
  work:      { dot: 'bg-accent border-accent', label: 'Full-Time',  labelClass: 'text-accent border-accent/40' },
}

export default function About() {
  return (
    <section id="about" className="bg-canvas">

      {/* ── Part 1: About Me (Balanced 2-Column Layout) ───────────────── */}
      <div className="container mx-auto px-6 py-16 lg:py-20 border-b border-rule">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio & Narrative (7 cols) */}
          <div className="lg:col-span-7 reveal-text">
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-4">About me</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-tight mb-8">
              Building the web,<br />one commit at a time.
            </h2>
            
            <div className="space-y-5 text-mist text-base leading-relaxed">
              <p>
                I&apos;m Abinesh Selvarasu — a Senior WordPress Developer and Full Stack Engineer based in Tamil Nadu,
                India. With 3+ years delivering production-grade web platforms for global enterprise clients,
                I specialise in custom CMS architecture, headless WordPress solutions, and performance engineering.
              </p>
              <p>
                Day-to-day: architecting scalable CMS components with ACF Pro and Gutenberg, integrating REST & GraphQL APIs,
                and solving the complex Core Web Vitals and technical SEO challenges that keep platforms fast, secure, and accessible.
              </p>
            </div>
          </div>

          {/* Right Column: Core Technical Stack, Quote & Socials (5 cols) */}
          <div className="lg:col-span-5 reveal-text space-y-6">
            <div>
              <p className="text-xs font-mono text-mist uppercase tracking-widest mb-4">Core Technical Stack</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 text-xs font-mono text-ink bg-paper/50 border border-rule hover:bg-accent hover:border-accent hover:text-forest transition-all cursor-default shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="border-l-4 border-accent pl-5 text-ink/80 italic font-serif py-1">
              &ldquo;Fast websites shouldn&apos;t be a premium feature — they should be the baseline.&rdquo;
            </blockquote>

            {/* Social Action Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://linkedin.com/in/abineshselvarasu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex items-center gap-2.5 px-4 py-2 border border-rule bg-paper/50 text-xs font-mono text-ink hover:border-accent hover:text-accent hover:bg-canvas transition-all shadow-sm"
              >
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/abineshselvarasu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex items-center gap-2.5 px-4 py-2 border border-rule bg-paper/50 text-xs font-mono text-ink hover:border-accent hover:text-accent hover:bg-canvas transition-all shadow-sm"
              >
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Part 2: Career Roadmap (Clean Vertical Timeline) ──────────── */}
      <div id="timeline" className="container mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4 reveal-text">
          <div>
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-3">Career Roadmap</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-tight">
              My journey.
            </h2>
          </div>
          <p className="text-mist max-w-xs text-sm font-mono leading-relaxed">
            Continuous engineering growth — from intern to Senior WordPress Developer.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-rule md:-translate-x-px" />

          <div className="space-y-0">
            {milestones.map((item, idx) => {
              const style = TYPE_STYLES[item.type as keyof typeof TYPE_STYLES]
              const isRight = idx % 2 === 0

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:items-start reveal-text ${
                    isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isRight ? 'md:pr-10' : 'md:pl-10'} pl-12 md:pl-0 pb-12`}>
                    <div className="border border-rule hover:border-accent/40 bg-canvas p-6 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <span className={`text-xs font-mono uppercase tracking-widest border px-2 py-0.5 ${style.labelClass}`}>
                          {style.label}
                        </span>
                        <span className="text-xs font-mono text-mist">
                          {item.year} — {item.end}
                        </span>
                      </div>
                      <h3 className="text-ink font-semibold text-base group-hover:text-accent transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-mist mb-3">
                        {item.company}<span className="mx-1.5">·</span>{item.location}
                      </p>
                      <p className="text-mist text-sm leading-relaxed mb-4">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs font-mono text-mist border border-rule px-2 py-0.5 hover:bg-accent hover:border-accent hover:text-forest transition-all cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full border-2 border-canvas ${style.dot} flex items-center justify-center shadow-sm`}>
                      <span className="w-2.5 h-2.5 rounded-full bg-canvas/60" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              )
            })}

            {/* End cap — Seeking Full-Time Roles */}
            <div className="relative flex flex-col items-center justify-center text-center mt-8">
              {/* Dot - centered in normal flex flow */}
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center animate-pulse z-10 border-2 border-canvas shadow-md mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-canvas" />
              </div>

              {/* Text Badge - stacked cleanly below dot */}
              <div className="bg-canvas border border-accent/40 px-6 py-3.5 shadow-sm max-w-full z-10">
                <p className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
                  Open to Full-Time Roles · Present
                </p>
                <p className="text-xs font-mono text-mist mt-0.5">
                  Senior WordPress Developer / Full Stack Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
