const milestones = [
  {
    year: '2016',
    type: 'education',
    title: 'B.E. Computer Science & Engineering',
    company: 'Vidyaa Vikas College of Engineering — Anna University',
    location: 'Tamil Nadu, India',
    desc: 'Began formal study in algorithms, data structures, databases, and web fundamentals — the foundation for a full-stack development career.',
    tags: [],
    end: '2020',
  },
  {
    year: 'Jul 2022',
    type: 'work',
    title: 'Intern — Web Developer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'First industry exposure — WordPress website development, bug fixing, content updates, responsive UI, and version control workflows.',
    tags: ['WordPress', 'HTML', 'CSS', 'Git'],
    end: 'Dec 2022',
  },
  {
    year: 'Jan 2023',
    type: 'work',
    title: 'Frontend Developer & WordPress Developer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'Converted Figma designs into responsive WordPress sites. Built Gutenberg blocks and ACF components. Delivered websites for enterprise clients across North America.',
    tags: ['WordPress', 'ACF Pro', 'PHP', 'Gutenberg', 'SCSS', 'Figma'],
    end: 'Dec 2024',
  },
  {
    year: 'Jan 2025',
    type: 'work',
    title: 'Web Developer & WordPress Developer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'Architected CMS solutions across WordPress, Drupal, and Craft CMS for global enterprise clients — Unbounce, ElasticPath, OpenGovernmentPartnership, Premier Boxing Champions and more. Reduced LCP by ~30% via deep performance optimisation.',
    tags: ['WordPress', 'Drupal', 'Craft CMS', 'ACF Pro', 'Core Web Vitals', 'Technical SEO'],
    end: 'May 2026',
  },
  {
    year: '2025',
    type: 'freelance',
    title: 'Freelance Full Stack Engineer',
    company: 'Independent',
    location: 'Remote',
    desc: 'End-to-end delivery of web products for clients — Next.js frontends, custom WordPress builds, REST API integrations, and deployments on Vercel and Pantheon.',
    tags: ['Next.js', 'WordPress', 'Vercel', 'Pantheon', 'REST API'],
    end: 'Present',
  },
]

const TYPE_STYLES = {
  education: { dot: 'bg-mist', label: 'Education', labelClass: 'text-mist border-mist/30 rounded-full' },
  work:      { dot: 'bg-accent', label: 'Employment', labelClass: 'text-accent border-accent/30 rounded-full' },
  freelance: { dot: 'bg-forest', label: 'Freelance', labelClass: 'text-forest border-forest/30 rounded-full' },
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-canvas border-t border-rule">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4">
          <div>
            <p className="reveal-text text-xs font-mono text-mist uppercase tracking-widest mb-3">Career Roadmap</p>
            <h2 className="reveal-text font-display font-normal text-4xl md:text-5xl text-ink leading-tight delay-100">
              My journey.
            </h2>
          </div>
          <p className="reveal-text text-mist max-w-xs text-sm font-mono leading-relaxed delay-200">
            From first principles to production-grade enterprise platforms — July 2022 to present.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-6 w-px bg-rule md:-translate-x-px" />

          <div className="space-y-0">
            {milestones.map((item, idx) => {
              const style = TYPE_STYLES[item.type as keyof typeof TYPE_STYLES]
              const isRight = idx % 2 === 0

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row md:items-start gap-0 ${
                    isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card — left or right */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isRight ? 'md:pr-10' : 'md:pl-10'} pl-10 sm:pl-12 md:pl-0 pb-8 sm:pb-12`}>
                    <div className="border border-rule hover:border-accent/40 bg-canvas p-4 sm:p-6 transition-all duration-300 group">
                      {/* Type badge + period */}
                      <div className="reveal-text flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                        <span className={`text-xs font-mono uppercase tracking-widest border px-2 py-0.5 ${style.labelClass}`}>
                          {style.label}
                        </span>
                        <span className="text-xs font-mono text-mist">
                          {item.year} — {item.end}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="reveal-text text-ink font-semibold text-base group-hover:text-accent transition-colors mb-1 delay-100">
                        {item.title}
                      </h3>

                      {/* Company & location */}
                      <p className="reveal-text text-xs font-mono text-mist mb-3 delay-200">
                        {item.company}
                        <span className="mx-1.5">·</span>
                        {item.location}
                      </p>

                      {/* Description */}
                      <p className="reveal-text text-mist text-xs sm:text-sm leading-relaxed mb-4 delay-300">
                        {item.desc}
                      </p>

                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && item.tags[0] !== '' && (
                        <div className="reveal-text flex flex-wrap gap-1.5 delay-400">
                          {item.tags.filter(tag => tag.trim() !== '').map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono text-mist border border-rule px-2 py-0.5 hover:border-accent hover:text-accent transition-all cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Centre dot + year label */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full border-2 border-canvas ${style.dot} flex items-center justify-center shadow-sm`}>
                      <span className={`w-2.5 h-2.5 rounded-full bg-canvas/60`} />
                    </div>
                  </div>

                  {/* Empty spacer on opposite side (desktop) */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              )
            })}

            {/* End cap — Present */}
            <div className="relative flex items-center pl-10 sm:pl-12 md:pl-0 md:justify-center">
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-canvas" />
                </div>
              </div>
              <p className="text-xs font-mono text-accent uppercase tracking-widest md:text-center">
                Open to work · Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
