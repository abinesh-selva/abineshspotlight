'use client'

import { useState } from 'react'

type Project = {
  name: string
  role: string
  category: string
  group: 'enterprise' | 'independent'
  subGroup?: 'global' | 'client' | 'utility' | 'domestic'
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
    name: 'Open Gov Week',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'enterprise',
    challenge: 'Custom CMS and taxonomy architecture for a major international open government event platform.',
    stack: ['WordPress', 'ACF Pro', 'CPT', 'REST API'],
    url: 'https://www.opengovweek.org',
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
    name: 'DialedIn',
    role: 'Drupal Developer',
    category: 'Drupal',
    group: 'enterprise',
    challenge: 'Developed and maintained a Drupal-based website for a cloud contact center platform, focusing on custom features, performance improvements, and ongoing site maintenance.',
    stack: ['Drupal', 'PHP', 'JavaScript', 'Performance'],
    url: 'https://dialedin.ca/',
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
  {
    name: 'PPIC',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'enterprise',
    challenge: 'Custom theme development, complex block architectures, and content migrations for a leading policy research and analysis center.',
    stack: ['WordPress', 'PHP', 'ACF Pro', 'CSS'],
    url: null,
  },
  {
    name: 'Intiveo',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'enterprise',
    challenge: 'Custom WordPress components, interactive element integrations, and conversion flow optimisation for a patient communication SaaS.',
    stack: ['WordPress', 'PHP', 'JavaScript', 'ACF Pro'],
    url: null,
  },
  {
    name: 'Loopio',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'enterprise',
    challenge: 'Marketing website architecture, ACF modular layouts, and performance tuning for a leading RFP response software platform.',
    stack: ['WordPress', 'PHP', 'ACF Pro', 'Webpack'],
    url: null,
  },
  {
    name: 'Insightly',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'enterprise',
    challenge: 'Marketing site optimisation, Gutenberg blocks, and CRM form integrations for a popular CRM platform website.',
    stack: ['WordPress', 'PHP', 'ACF Pro', 'CRM Integration'],
    url: null,
  },

  // ── Independent Projects ─────────────────────────────────────────
  {
    name: 'NaviCakes',
    role: 'Full Stack Developer',
    category: 'Next.js',
    group: 'independent',
    subGroup: 'client',
    challenge: 'Local bakery website with custom ordering, gallery, and brand identity — pixel-perfect from Figma to code.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    url: 'https://navibakesandcakes.vercel.app/',
  },
  {
    name: 'Sri Dhanamoorthy Traders',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'independent',
    subGroup: 'client',
    challenge: 'B2B wholesale cement and steel trader website with product catalogue and trade enquiry flows.',
    stack: ['WordPress', 'ACF', 'Pantheon'],
    url: 'https://dev-sri-dhanamoorthy-traders.pantheonsite.io',
    urlLabel: 'Visit Project',
  },
  {
    name: 'MySupportInfo',
    role: 'Full Stack Developer',
    category: 'Next.js',
    group: 'independent',
    subGroup: 'utility',
    challenge: 'A customer support portal designed to centralise ticketing, knowledge base, and user communication for growing businesses.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    url: 'https://mysupportinfo.vercel.app',
  },
  {
    name: 'FUEiNT Technologies',
    role: 'Next.js Developer',
    category: 'Next.js',
    group: 'enterprise',
    subGroup: 'domestic',
    challenge: 'Rebuilt the company website in Next.js, improving performance, modernising the UI, and creating a scalable codebase for future growth.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    url: null,
  },
  {
    name: 'Andaman Guru & Package',
    role: 'React Developer',
    category: 'Next.js',
    group: 'enterprise',
    subGroup: 'domestic',
    challenge: 'Migrated a legacy WordPress website to React/Next.js to modernise performance and user experience.',
    stack: ['Next.js', 'React', 'Tailwind'],
    url: null,
  },
  {
    name: 'Siswa',
    role: 'Mobile App Developer',
    category: 'Flutter',
    group: 'enterprise',
    subGroup: 'domestic',
    challenge: 'A cross-platform mobile application for student collaboration, academic tracking, and real-time notifications.',
    stack: ['Flutter', 'Firebase', 'Dart', 'State Management'],
    url: null,
  },
  {
    name: 'Naicee',
    role: 'Next.js Developer',
    category: 'Next.js',
    group: 'enterprise',
    subGroup: 'domestic',
    challenge: 'A platform dedicated to preserving native Tamil Nadu dog breeds — multilingual support, breed search filters, adopt workflows, and optimised image galleries.',
    stack: ['Next.js', 'React', 'Tailwind'],
    url: null,
  },
  {
    name: 'Parithadam',
    role: 'Web Platform',
    category: 'Next.js',
    group: 'enterprise',
    subGroup: 'domestic',
    challenge: 'E-commerce platform for 100% natural honey, traditional snacks, and chemical-free rice — with Nodemailer-based order notifications.',
    stack: ['Next.js 15', 'React', 'Tailwind', 'Nodemailer'],
    url: null,
  },
]

const filters = ['All', 'Enterprise', 'Independent', 'WordPress', 'Next.js', 'Flutter', 'CMS', 'Drupal']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : active === 'Enterprise'
      ? projects.filter((p) => p.group === 'enterprise')
      : active === 'Independent'
      ? projects.filter((p) => p.group === 'independent')
      : projects.filter((p) => p.category === active)

  const showEnterprise = filtered.some((p) => p.group === 'enterprise')
  const showIndependent = filtered.some((p) => p.group === 'independent')
  const showBothGroups = showEnterprise && showIndependent

  return (
    <section id="projects" className="py-16 bg-ink">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-6">
          <div>
            <p className="text-xs font-mono text-canvas/40 uppercase tracking-widest mb-3">Selected Work</p>
            <h2 className="font-display font-normal text-4xl md:text-6xl text-canvas tracking-tight leading-tight">
              Selected projects.
            </h2>
          </div>
          <p className="text-canvas/40 text-sm font-mono max-w-sm leading-relaxed">
            Work spans two tracks — enterprise delivery under{' '}
            <span className="text-accent/70">FueInt Technologies</span>, and independent
            builds shipped solo.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-14 reveal-text">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 text-xs font-mono font-medium transition-all duration-300 ${
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
                <span className="text-xs font-mono uppercase tracking-widest text-canvas/30">Enterprise experience</span>
                <div className="flex-1 h-px bg-canvas/10" />
              </div>
            )}

            <p className="text-canvas/30 text-xs font-mono mb-8 border-l-2 border-accent/40 pl-4 leading-relaxed">
              Delivered under <span className="text-accent/70">FueInt Technologies</span> via{' '}
              <span className="text-accent/70">Dialed In Design (Canada)</span>. All trademarks belong to their respective owners.
            </p>

            {(() => {
              const globalProjects = filtered.filter((p) => p.group === 'enterprise' && p.subGroup !== 'domestic')
              const domesticProjects = filtered.filter((p) => p.group === 'enterprise' && p.subGroup === 'domestic')

              return (
                <>
                  {globalProjects.length > 0 && (
                    <div className="mb-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {globalProjects.map((p, i) => (
                          <ProjectCard key={p.name} project={p} index={i + 1} groupLabel="FueInt" />
                        ))}
                      </div>
                    </div>
                  )}

                  {domesticProjects.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-canvas/50 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Domestic Projects
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {domesticProjects.map((p, i) => (
                          <ProjectCard key={p.name} project={p} index={globalProjects.length + i + 1} groupLabel="FueInt" />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )
            })()}
          </div>
        )}

        {/* Independent group */}
        {showIndependent && (
          <div>
            {showBothGroups && (
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-canvas/30">Independent projects</span>
                <div className="flex-1 h-px bg-canvas/10" />
              </div>
            )}

            <p className="text-canvas/40 text-xs font-mono mb-8 border-l-2 border-accent/40 pl-4 leading-relaxed">
              Independent client work delivered under{' '}
              <a
                href="https://gradiolex.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                Gradiolex
              </a>{' '}
              — highlighting custom web development, Next.js architecture, and end-to-end client execution.
            </p>

            {(() => {
              const clients  = filtered.filter((p) => p.group === 'independent' && p.subGroup === 'client')
              const utilities = filtered.filter((p) => p.group === 'independent' && p.subGroup === 'utility')

              return (
                <>
                  {clients.length > 0 && (
                    <div className="mb-10">
                      <h4 className="text-xs font-mono text-canvas/50 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Freelance Client Work
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {clients.map((p, i) => (
                          <ProjectCard key={p.name} project={p} index={i + 1} groupLabel="Independent" />
                        ))}
                      </div>
                    </div>
                  )}

                  {utilities.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-canvas/50 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Utility Tools & Personal Builds
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {utilities.map((p, i) => (
                          <ProjectCard key={p.name} project={p} index={clients.length + i + 1} groupLabel="Independent" />
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

const SUBGROUP_BADGE: Record<string, string> = {
  client:   'Freelance Client',
  utility:  'Utility Tool',
  domestic: 'Internal',
  global:   'Enterprise',
}

function ProjectCard({ project, index, groupLabel }: { project: Project; index: number; groupLabel: string }) {
  const badge = project.subGroup ? (SUBGROUP_BADGE[project.subGroup] ?? groupLabel) : groupLabel

  return (
    <article className="group flex flex-col border border-canvas/10 hover:border-accent/40 bg-canvas/5 transition-all duration-300 p-6 h-full">
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-sm font-mono text-canvas/25 group-hover:text-canvas/60 transition-colors">
          {String(index).padStart(2, '0')}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-canvas/30 border border-canvas/10 group-hover:border-canvas/30 group-hover:text-canvas/50 px-2 py-0.5 transition-colors">
          {badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-display font-normal text-xl md:text-2xl text-canvas leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
        {project.name}
      </h3>

      {/* Description - Hidden by default, revealed on hover */}
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out overflow-hidden mb-2 group-hover:mb-6">
        <p className="text-canvas/70 text-sm leading-relaxed overflow-hidden transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {project.challenge}
        </p>
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs font-mono text-canvas/40 border border-canvas/10 px-2 py-1 group-hover:border-canvas/25 group-hover:text-canvas/60 transition-colors"
          >
            {s}
          </span>
        ))}
      </div>


    </article>
  )
}
