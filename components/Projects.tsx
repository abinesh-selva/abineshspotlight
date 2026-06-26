'use client'

import { useState } from 'react'

type Project = {
  name: string
  role: string
  category: string
  group: 'enterprise' | 'freelance'
  subGroup?: 'client' | 'utility'
  challenge: string
  stack: string[]
  url: string | null
  urlLabel?: string
}

const projects: Project[] = [
  // ── Enterprise via FueInt Technologies ──────────────────────────────
  {
    name: 'Unbounce',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'enterprise',
    challenge: 'ACF architecture overhaul, CPT development, and performance optimisation for a leading SaaS landing page platform used by 120,000+ marketers.',
    stack: ['WordPress', 'ACF Pro', 'PHP', 'Performance'],
    url: 'https://unbounce.com',
  },
  {
    name: 'Open Government Partnership',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'enterprise',
    challenge: 'Large-scale CMS and Custom Post Type architecture for an international initiative spanning 75+ governments and millions of annual visitors.',
    stack: ['WordPress', 'ACF Pro', 'CPT', 'REST API'],
    url: 'https://www.opengovpartnership.org',
  },
  {
    name: 'ElasticPath',
    role: 'Craft CMS Developer',
    category: 'CMS',
    group: 'enterprise',
    challenge: 'Full WCAG accessibility compliance and Core Web Vitals optimisation for an enterprise headless commerce platform with global reach.',
    stack: ['Craft CMS', 'WCAG', 'Performance', 'SEO'],
    url: 'https://www.elasticpath.com',
  },
  {
    name: 'Premier Boxing Champions',
    role: 'Drupal Developer',
    category: 'Drupal',
    group: 'enterprise',
    challenge: 'Security hardening and performance work for a major US boxing promoter, including live fight-night features built to handle peak concurrency.',
    stack: ['Drupal', 'PHP', 'Security', 'Performance'],
    url: 'https://www.premierboxingchampions.com',
  },
  {
    name: 'Traction Complete',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'enterprise',
    challenge: 'ACF architecture, performance improvements, and custom plugin development for a Salesforce-native data management SaaS.',
    stack: ['WordPress', 'ACF Pro', 'PHP', 'Plugin Dev'],
    url: 'https://www.tractioncomplete.com',
  },

  // ── Freelance via Gradiolex ─────────────────────────────────────────
  {
    name: 'NaviCakes',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'freelance',
    subGroup: 'client',
    challenge: 'Local bakery website with custom ordering, gallery, and brand identity.',
    stack: ['WordPress', 'Custom Theme', 'SCSS'],
    url: 'https://navibakesandcakes.vercel.app/',
  },
  {
    name: 'Sri Dhanamoorthy Traders',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'freelance',
    subGroup: 'client',
    challenge: 'B2B wholesale cement and steel trader website with product catalogue and trade enquiry flows.',
    stack: ['WordPress', 'ACF', 'Pantheon'],
    url: 'https://dev-sri-dhanamoorthy-traders.pantheonsite.io',
    urlLabel: 'View Dev Site',
  },
  {
    name: 'MySupportInfo',
    role: 'Full Stack Developer',
    category: 'Next.js',
    group: 'freelance',
    subGroup: 'utility',
    challenge: 'A customer support portal designed to centralise ticketing, knowledge base, and user communication for growing businesses.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    url: 'https://mysupportinfo.vercel.app',
  },
  {
    name: 'One Tap Secure',
    role: 'Full Stack Developer',
    category: 'Next.js',
    group: 'freelance',
    subGroup: 'utility',
    challenge: 'A security-focused platform with clean, trust-driven UI and streamlined onboarding for end-user credential management.',
    stack: ['Next.js', 'React', 'Tailwind'],
    url: 'https://onetapsecure.vercel.app',
  },
  {
    name: 'MoneyArk',
    role: 'Full Stack Developer',
    category: 'Flutter',
    group: 'freelance',
    subGroup: 'utility',
    challenge: 'A full-scale personal finance app with AI-powered financial assistant, OCR receipt scanning, and voice expense tracking.',
    stack: ['Flutter', 'React', 'Supabase', 'LLM', 'OCR'],
    url: 'https://moneyark.vercel.app',
  },
  {
    name: 'Instatrove',
    role: 'Full Stack Developer',
    category: 'Next.js',
    group: 'freelance',
    subGroup: 'utility',
    challenge: 'An e-commerce and product discovery platform with curated browsing, wishlist, and seamless checkout flow.',
    stack: ['Next.js', 'Tailwind', 'Razorpay', 'Vercel'],
    url: 'https://instatrove.vercel.app',
  },
  {
    name: 'How Long To Go',
    role: 'Full Stack Developer',
    category: 'Next.js',
    group: 'freelance',
    subGroup: 'utility',
    challenge: 'A sleek utility app for calculating and tracking the time remaining until specific dates, events, and milestones.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    url: 'https://howlongtogo.vercel.app/',
  },
  {
    name: 'Tamil Calendar',
    role: 'Full Stack Developer',
    category: 'Next.js',
    group: 'freelance',
    subGroup: 'utility',
    challenge: 'A digital Tamil calendar providing daily panchangam details, auspicious dates, and festival information.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    url: 'https://tamilcalendar.vercel.app/',
  },
]

const filters = ['All', 'Enterprise', 'Freelance', 'WordPress', 'Next.js', 'Flutter', 'CMS', 'Drupal']
const GRADIOLEX_LINKEDIN = 'https://www.linkedin.com/company/gradiolex'
const GRADIOLEX_SITE = 'https://gradiolex.vercel.app/'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : active === 'Enterprise'
      ? projects.filter((p) => p.group === 'enterprise')
      : active === 'Freelance'
      ? projects.filter((p) => p.group === 'freelance')
      : projects.filter((p) => p.category === active)

  const showEnterprise = filtered.some((p) => p.group === 'enterprise')
  const showFreelance = filtered.some((p) => p.group === 'freelance')
  const showBothGroups = showEnterprise && showFreelance

  return (
    <section id="projects" className="py-16 bg-ink">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display font-bold text-4xl md:text-6xl text-canvas tracking-tight leading-tight mb-4 md:mb-6">
          Selected projects.
        </h2>
        <p className="text-canvas/40 text-sm font-mono mb-10 md:mb-16 max-w-2xl leading-relaxed">
          Work spans two tracks — enterprise delivery under{' '}
          <span className="text-accent hover:underline">
            FueInt Technologies
          </span>
          , and independent builds under my freelance studio{' '}
          <a href={GRADIOLEX_SITE} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Gradiolex
          </a>
          .
        </p>

        {/* Filters */}
        <div className="mb-14 reveal-text">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-sm font-mono font-medium transition-all duration-300 ${
                  active === f
                    ? 'bg-accent text-ink scale-105'
                    : 'bg-canvas/10 text-canvas/50 border border-canvas/15 hover:bg-accent/20 hover:text-canvas'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Enterprise group */}
        {showEnterprise && (
          <div className="mb-14">
            {showBothGroups && (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-canvas text-opacity-30">Enterprise experience</span>
                <div className="flex-1 h-px bg-canvas/10" />
              </div>
            )}

            <p className="text-canvas text-opacity-30 text-xs font-mono mb-8 border-l-2 border-accent/40 pl-4 leading-relaxed">
              Delivered under{' '}
              <span className="text-accent/70 hover:text-accent">
                FueInt Technologies
              </span>
              . All work completed under their client contracts. Logos and brand names belong to their respective owners.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.filter((p) => p.group === 'enterprise').map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i + 1} />
              ))}
            </div>
          </div>
        )}

        {/* Freelance group */}
        {showFreelance && (
          <div>
            {showBothGroups && (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-canvas text-opacity-30">Freelance — Gradiolex</span>
                <div className="flex-1 h-px bg-canvas/10" />
                <a
                  href={GRADIOLEX_SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-canvas/40 hover:text-accent transition-colors border border-canvas/15 px-3 py-1 hover:border-accent"
                >
                  Link ↗
                </a>
              </div>
            )}

            {(() => {
              const clients = filtered.filter((p) => p.group === 'freelance' && p.subGroup === 'client')
              const utilities = filtered.filter((p) => p.group === 'freelance' && p.subGroup === 'utility')
              
              return (
                <>
                  {clients.length > 0 && (
                    <div className="mb-10">
                      <h4 className="text-sm font-mono text-canvas/50 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Clients
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {clients.map((p, i) => (
                          <ProjectCard key={p.name} project={p} index={i + 1} />
                        ))}
                      </div>
                    </div>
                  )}

                  {utilities.length > 0 && (
                    <div>
                      <h4 className="text-sm font-mono text-canvas/50 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Utility Tools
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {utilities.map((p, i) => (
                          <ProjectCard key={p.name} project={p} index={clients.length + i + 1} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )
            })()}
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex flex-col border border-canvas border-opacity-10 hover:border-accent/40 bg-canvas/5 transition-all duration-300 p-6 h-full">
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-xs font-mono text-canvas/25">
          {String(index).padStart(2, '0')}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-canvas text-opacity-30 border border-canvas border-opacity-10 px-2 py-0.5">
          {project.group === 'enterprise' ? 'FueInt' : 'Gradiolex'}
        </span>
      </div>

      {/* Role */}
      <span className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
        {project.role}
      </span>

      {/* Name */}
      <h3 className="font-display font-bold text-xl md:text-2xl text-canvas leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-canvas/50 text-sm leading-relaxed mb-6 flex-1">
        {project.challenge}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs font-mono text-canvas text-opacity-40 border border-canvas border-opacity-10 px-2 py-1 group-hover:border-canvas border-opacity-20 transition-colors"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Link */}
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-canvas/50 hover:text-accent transition-colors group/link w-fit mt-auto"
        >
          {project.urlLabel ?? 'Visit Project'}
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </a>
      ) : (
        <span className="text-xs font-mono text-canvas/25 italic mt-auto">Case study coming soon</span>
      )}
    </article>
  )
}
