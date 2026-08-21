'use client'

import { useState, useEffect, useRef } from 'react'
import ShootingStarsGrid from './ShootingStarsGrid'

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
    tags: [],
  },
  {
    year: 'Jul 2022',
    end: 'Dec 2022',
    type: 'work',
    title: 'Intern — Web Developer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'Gained hands-on agency experience — WordPress theme customization, responsive UI implementation, bug fixing, and version control workflows.',
    tags: ['WordPress', 'HTML', 'CSS', 'PHP', 'Git'],
  },
  {
    year: 'Jan 2023',
    end: 'Dec 2024',
    type: 'work',
    title: 'Frontend Developer & WordPress Developer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'Converted Figma designs into pixel-perfect WordPress websites. Built custom Gutenberg blocks and ACF Pro components for North American enterprise clients.',
    tags: ['WordPress', 'Drupal', 'ACF Pro', 'PHP', 'Gutenberg', 'SCSS', 'Figma'],
  },
  {
    year: 'Jan 2025',
    end: 'May 2026',
    type: 'work',
    title: 'Web Developer & WordPress Developer',
    company: 'FueInt Technologies',
    location: 'Tamil Nadu, India',
    desc: 'Architected enterprise CMS solutions across WordPress, Drupal, and Craft CMS for global brands — Unbounce, ElasticPath, OpenGovernmentPartnership, and Premier Boxing Champions. Reduced LCP by ~30% via deep asset and rendering optimizations.',
    tags: ['WordPress', 'Craft CMS', 'ACF Pro', 'Tailwind CSS', 'TypeScript','Next.js', 'React', 'Core Web Vitals', 'Technical SEO'],
  },
]

const TYPE_STYLES = {
  education: { dot: 'bg-accent border-accent',    label: 'Education',  labelClass: 'text-accent border-accent/40 rounded-full' },
  work:      { dot: 'bg-accent border-accent', label: 'Full-Time',  labelClass: 'text-accent border-accent/40 rounded-full' },
}

export default function About() {
  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const [svgPath, setSvgPath] = useState('')

  useEffect(() => {
    const updatePath = () => {
      if (!timelineContainerRef.current) return
      const containerRect = timelineContainerRef.current.getBoundingClientRect()
      
      const points: { x: number; y: number }[] = []
      dotRefs.current.forEach((dot) => {
        if (dot) {
          const rect = dot.getBoundingClientRect()
          const x = rect.left + rect.width / 2 - containerRect.left
          const y = rect.top + rect.height / 2 - containerRect.top
          points.push({ x, y })
        }
      })

      if (points.length < 2) return

      let d = `M ${points[0].x} ${points[0].y}`
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x} ${points[i].y}`
      }
      setSvgPath(d)
    }

    const timeout = setTimeout(updatePath, 150)
    updatePath()

    window.addEventListener('resize', updatePath)
    const ro = new ResizeObserver(updatePath)
    if (timelineContainerRef.current) {
      ro.observe(timelineContainerRef.current)
    }

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', updatePath)
      ro.disconnect()
    }
  }, [])
  return (
    <section id="about" className="relative bg-ink text-canvas border-t border-canvas/10">
      <ShootingStarsGrid />
      
      {/* ── Part 1: About Me (Balanced 2-Column Layout) ───────────────── */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-20 border-b border-canvas/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio & Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <p className="reveal-text text-sm font-mono text-accent uppercase tracking-widest mb-4 font-semibold">About me</p>
            <h2 className="reveal-text font-display font-normal text-4xl md:text-5xl text-canvas leading-tight mb-8 delay-100">
              Building the web,<br />one commit at a time.
            </h2>
            
            <div className="space-y-5 text-canvas/80 text-lg leading-relaxed">
              <p className="reveal-text delay-200">
                I&apos;m Abinesh Selvarasu — a Senior WordPress Developer and Full Stack Engineer based in Tamil Nadu,
                India. With 3+ years delivering production-grade web platforms for global enterprise clients,
                I specialise in custom CMS architecture, headless WordPress solutions, and performance engineering.
              </p>
              <p className="reveal-text delay-300">
                Day-to-day: architecting scalable CMS components with ACF Pro and Gutenberg, integrating REST & GraphQL APIs,
                and solving the complex Core Web Vitals and technical SEO challenges that keep platforms fast, secure, and accessible.
              </p>
            </div>
          </div>

          {/* Right Column: Core Technical Stack, Quote & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="reveal-text delay-400">
              <p className="text-sm font-mono text-canvas/50 uppercase tracking-widest mb-4 font-semibold">Core Technical Stack</p>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-2 text-sm font-mono text-canvas/90 bg-canvas/5 border border-canvas/10 hover:bg-accent hover:border-accent hover:text-ink transition-all cursor-default shadow-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="reveal-text border-l-4 border-accent pl-5 text-canvas text-lg md:text-xl italic font-serif py-1 delay-500 leading-relaxed">
              &ldquo;Fast websites shouldn&apos;t be a premium feature — they should be the baseline.&rdquo;
            </blockquote>

            {/* Social Action Links */}
            <div className="reveal-text flex flex-wrap gap-3 pt-2 delay-600">
              <a
                href="https://linkedin.com/in/abineshselvarasu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex items-center gap-2.5 px-4 py-2.5 border border-canvas/10 bg-canvas/5 text-sm font-mono text-canvas hover:border-accent hover:text-accent hover:bg-canvas/10 transition-all shadow-sm rounded-full"
              >
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/abineshselvarasu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex items-center gap-2.5 px-4 py-2.5 border border-canvas/10 bg-canvas/5 text-sm font-mono text-canvas hover:border-accent hover:text-accent hover:bg-canvas/10 transition-all shadow-sm rounded-full"
              >
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Part 2: Career Roadmap (Clean Vertical Timeline) ──────────── */}
      <div id="timeline" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16 gap-4 reveal-text">
          <div>
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3 font-semibold">Career Roadmap</p>
            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-canvas leading-tight">
              My journey.
            </h2>
          </div>
          <p className="text-canvas/60 max-w-xs text-sm sm:text-base font-mono leading-relaxed">
            Continuous engineering growth — from intern to Senior WordPress Developer.
          </p>
        </div>

        <div ref={timelineContainerRef} className="relative">
          {/* Animated SVG Running Zig-Zag Line */}
          {svgPath && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              {/* Base faint dashed track */}
              <path
                d={svgPath}
                fill="none"
                stroke="rgba(245, 241, 236, 0.15)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Glowing animated running laser line */}
              <path
                d={svgPath}
                fill="none"
                stroke="#DCBC7D"
                strokeWidth="2.5"
                strokeDasharray="16 12"
                className="animate-timeline-flow"
                strokeLinecap="round"
              />
              {/* Glowing ambient pulse underneath */}
              <path
                d={svgPath}
                fill="none"
                stroke="#DCBC7D"
                strokeWidth="6"
                strokeDasharray="16 12"
                className="animate-timeline-flow opacity-30 blur-[3px]"
                strokeLinecap="round"
              />
            </svg>
          )}

          <div className="space-y-0 relative z-10">
            {milestones.map((item, idx) => {
              const style = TYPE_STYLES[item.type as keyof typeof TYPE_STYLES]
              const isRight = idx % 2 === 0

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:items-start ${
                    isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isRight ? 'md:pr-10' : 'md:pl-10'} pl-8 sm:pl-10 md:pl-0 pb-8 sm:pb-12 relative`}>
                    <div className="border border-canvas/10 hover:border-accent/40 bg-canvas/5 p-4 sm:p-6 md:p-7 transition-all duration-300 group rounded-xl relative">
                      
                      {/* Node Dot on Card Top */}
                      <div
                        ref={(el) => { dotRefs.current[idx] = el }}
                        className={`absolute -top-3.5 left-0 md:left-auto ${
                          isRight ? 'md:right-8' : 'md:left-8'
                        } flex items-center justify-center z-20`}
                      >
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-ink ${style.dot} flex items-center justify-center shadow-lg`}>
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-canvas" />
                        </div>
                      </div>

                      <div className="reveal-text flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2 pt-1">
                        <span className={`text-xs sm:text-sm font-mono uppercase tracking-widest border px-2.5 py-0.5 ${style.labelClass}`}>
                          {style.label}
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-canvas/50">
                          {item.year} — {item.end}
                        </span>
                      </div>
                      <h3 className="reveal-text text-canvas font-semibold text-base sm:text-lg md:text-xl group-hover:text-accent transition-colors mb-1.5 delay-100">
                        {item.title}
                      </h3>
                      <p className="reveal-text text-xs sm:text-sm font-mono text-canvas/50 mb-3 delay-200">
                        {item.company}<span className="mx-1.5">·</span>{item.location}
                      </p>
                      <p className="reveal-text text-canvas/80 text-sm sm:text-base leading-relaxed mb-4 delay-300">{item.desc}</p>
                      {item.tags && item.tags.length > 0 && item.tags[0] !== '' && (
                        <div className="reveal-text flex flex-wrap gap-1.5 sm:gap-2 delay-400">
                          {item.tags.filter(tag => tag.trim() !== '').map((tag) => (
                            <span key={tag} className="text-xs sm:text-sm font-mono text-canvas/70 border border-canvas/15 px-2 sm:px-2.5 py-0.5 sm:py-1 hover:bg-accent hover:border-accent hover:text-ink transition-all cursor-default rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              )
            })}

            {/* End cap — Seeking Full-Time Roles */}
            <div className="relative flex flex-col md:items-center pl-8 sm:pl-10 md:pl-0 mt-4 sm:mt-8">
              {/* Dot */}
              <div
                ref={(el) => { dotRefs.current[milestones.length] = el }}
                className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -top-3.5 flex flex-col items-center z-20"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center animate-pulse border-2 border-ink shadow-lg">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-ink" />
                </div>
              </div>

              {/* Text Badge */}
              <div className="bg-canvas/5 border border-accent/40 px-4 sm:px-6 py-3 sm:py-4 shadow-sm w-full md:w-auto z-10 rounded-xl text-left md:text-center mt-2 md:mt-6">
                <p className="text-xs sm:text-sm md:text-base font-mono text-accent uppercase tracking-widest font-bold">
                  Open to Full-Time Roles · Present
                </p>
                <p className="text-xs sm:text-sm font-mono text-canvas/70 mt-1">
                  Senior WordPress Developer &amp; Full Stack Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
