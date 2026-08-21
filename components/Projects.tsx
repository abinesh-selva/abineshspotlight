'use client'

import { useState } from 'react'

type Project = {
  name: string
  role: string
  category: string
  group: 'FueInt' | 'independent'
  subGroup?: 'global' | 'client' | 'utility' | 'domestic'
  featured?: boolean
  challenge: string
  stack: string[]
  url: string | null
}

const projects: Project[] = [
  // ── Enterprise via FueInt Technologies ──────────────────────────────
  // Row 1 (Featured Left)
  {
    name: 'Unbounce',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'FueInt',
    subGroup: 'global',
    featured: true,
    challenge: 'ACF architecture overhaul, CPT development, and performance optimisation for a leading SaaS landing page platform used by 120,000+ marketers.',
    stack: ['WordPress', 'ACF Pro', 'PHP', 'Performance'],
    url: 'https://unbounce.com',
  },
  {
    name: 'Open Government Partnership',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'FueInt',
    subGroup: 'global',
    challenge: 'Large-scale CMS and Custom Post Type architecture for an international initiative spanning 75+ governments and millions of annual visitors.',
    stack: ['WordPress', 'ACF Pro', 'CPT', 'REST API'],
    url: 'https://www.opengovpartnership.org',
  },
  {
    name: 'Open Gov Week',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'FueInt',
    subGroup: 'global',
    challenge: 'Custom CMS and taxonomy architecture for a major international open government event platform.',
    stack: ['WordPress', 'ACF Pro', 'CPT', 'REST API'],
    url: 'https://www.opengovweek.org',
  },

  // Row 2 (Vice Versa — Featured Right!)
  {
    name: 'Premier Boxing Champions',
    role: 'Drupal Developer',
    category: 'Drupal',
    group: 'FueInt',
    subGroup: 'global',
    challenge: 'Security hardening and performance work for a major US boxing promoter, including live fight-night features built to handle peak concurrency.',
    stack: ['Drupal', 'PHP', 'Security', 'Performance'],
    url: 'https://www.premierboxingchampions.com',
  },
  {
    name: 'DialedIn',
    role: 'Drupal Developer',
    category: 'Drupal',
    group: 'FueInt',
    subGroup: 'global',
    challenge: 'Developed and maintained a Drupal-based website for a cloud contact center platform, focusing on custom features, performance improvements, and ongoing site maintenance.',
    stack: ['Drupal', 'PHP', 'JavaScript', 'Performance'],
    url: 'https://dialedin.ca/',
  },
  {
    name: 'ElasticPath',
    role: 'Craft CMS Developer',
    category: 'CMS',
    group: 'FueInt',
    subGroup: 'global',
    featured: true,
    challenge: 'Full WCAG accessibility compliance and Core Web Vitals optimisation for an enterprise headless commerce platform with global reach.',
    stack: ['Craft CMS', 'WCAG', 'Performance', 'SEO'],
    url: 'https://www.elasticpath.com',
  },

  // Row 3 (Featured Left)
  {
    name: 'Traction Complete',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'FueInt',
    subGroup: 'global',
    featured: true,
    challenge: 'ACF architecture, performance improvements, and custom plugin development for a Salesforce-native data management SaaS.',
    stack: ['WordPress', 'ACF Pro', 'PHP', 'Plugin Dev'],
    url: 'https://www.tractioncomplete.com',
  },
  {
    name: 'PPIC',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'FueInt',
    subGroup: 'global',
    challenge: 'Custom theme development, complex block architectures, and content migrations for a leading policy research and analysis center.',
    stack: ['WordPress', 'PHP', 'ACF Pro', 'CSS'],
    url: null,
  },
  {
    name: 'Intiveo',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'FueInt',
    subGroup: 'global',
    challenge: 'Custom WordPress components, interactive element integrations, and conversion flow optimisation for a patient communication SaaS.',
    stack: ['WordPress', 'PHP', 'JavaScript', 'ACF Pro'],
    url: null,
  },

  // Row 4 (Vice Versa — Featured Right!)
  {
    name: 'Loopio',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'FueInt',
    subGroup: 'global',
    challenge: 'Marketing website architecture, ACF modular layouts, and performance tuning for a leading RFP response software platform.',
    stack: ['WordPress', 'PHP', 'ACF Pro', 'Webpack'],
    url: null,
  },
  {
    name: 'Insightly',
    role: 'WordPress Developer',
    category: 'WordPress',
    group: 'FueInt',
    subGroup: 'global',
    challenge: 'Marketing site optimisation, Gutenberg blocks, and CRM form integrations for a popular CRM platform website.',
    stack: ['WordPress', 'PHP', 'ACF Pro', 'CRM Integration'],
    url: null,
  },
  {
    name: 'FUEiNT Technologies',
    role: 'Next.js Developer',
    category: 'Next.js',
    group: 'FueInt',
    subGroup: 'domestic',
    featured: true,
    challenge: 'Rebuilt the company website in Next.js, improving performance, modernising the UI, and creating a scalable codebase for future growth.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    url: null,
  },

  {
    name: 'Andaman Guru & Package',
    role: 'React Developer',
    category: 'Next.js',
    group: 'FueInt',
    subGroup: 'domestic',
    challenge: 'Migrated a legacy WordPress website to React/Next.js to modernise performance and user experience.',
    stack: ['Next.js', 'React', 'Tailwind'],
    url: null,
  },
  {
    name: 'Siswa',
    role: 'Mobile App Developer',
    category: 'Flutter',
    group: 'FueInt',
    subGroup: 'domestic',
    challenge: 'A cross-platform mobile application for student collaboration, academic tracking, and real-time notifications.',
    stack: ['Flutter', 'Firebase', 'Dart', 'State Management'],
    url: null,
  },
  {
    name: 'Naicee',
    role: 'Next.js Developer',
    category: 'Next.js',
    group: 'FueInt',
    subGroup: 'domestic',
    challenge: 'A platform dedicated to preserving native Tamil Nadu dog breeds — multilingual support, breed search filters, adopt workflows, and optimised image galleries.',
    stack: ['Next.js', 'React', 'Tailwind'],
    url: null,
  },
  {
    name: 'Parithadam',
    role: 'Web Platform',
    category: 'Next.js',
    group: 'FueInt',
    subGroup: 'domestic',
    challenge: 'E-commerce platform for 100% natural honey, traditional snacks, and chemical-free rice — with Nodemailer-based order notifications.',
    stack: ['Next.js 15', 'React', 'Tailwind', 'Nodemailer'],
    url: null,
  },

  // ── Independent Projects ─────────────────────────────────────────
  // Row 1 (Featured Left)
  {
    name: 'NaviCakes',
    role: 'Full Stack Developer',
    category: 'Next.js',
    group: 'independent',
    subGroup: 'client',
    featured: true,
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
]

const filters = ['All', 'Enterprise', 'Independent', 'WordPress', 'Next.js', 'Flutter', 'CMS', 'Drupal']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : active === 'Enterprise'
      ? projects.filter((p) => p.group === 'FueInt')
      : active === 'Independent'
      ? projects.filter((p) => p.group === 'independent')
      : projects.filter((p) => p.category === active)

  const showEnterprise = filtered.some((p) => p.group === 'FueInt')
  const showIndependent = filtered.some((p) => p.group === 'independent')
  const showBothGroups = showEnterprise && showIndependent

  return (
    <section id="projects" className="py-20 lg:py-24 bg-ink">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-6">
          <div>
            <p className="reveal-text text-xs font-mono text-accent uppercase tracking-widest mb-3 font-semibold">Selected Work</p>
            <h2 className="reveal-text font-display font-normal text-4xl md:text-6xl text-canvas tracking-tight leading-tight delay-100">
              Featured projects.
            </h2>
          </div>
          <p className="reveal-text text-canvas/50 max-w-xs text-sm font-mono leading-relaxed delay-200">
            Enterprise platforms, headless CMS builds, and independent full-stack applications.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 reveal-text">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-300 ${
                  active === f
                    ? 'bg-accent text-ink font-bold shadow-md scale-105'
                    : 'bg-canvas/5 text-canvas/50 border border-canvas/10 hover:bg-accent/20 hover:text-canvas'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Enterprise Track Bento Grid ── */}
        {showEnterprise && (
          <div className="mb-16">
            {showBothGroups && (
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">Enterprise experience</span>
                <div className="flex-1 h-px bg-canvas/10" />
              </div>
            )}

            <p className="text-canvas/40 text-xs font-mono mb-8 border-l-2 border-accent/40 pl-4 leading-relaxed">
              Delivered under <span className="text-accent/90">FueInt Technologies</span> via{' '}
              <span className="text-accent/90">Dialed In Design (Canada)</span>. All trademarks belong to their respective owners.
            </p>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {filtered
                .filter((p) => p.group === 'FueInt')
                .map((p, i) => (
                  <BentoCard key={p.name} project={p} index={i + 1} groupLabel="FueInt" />
                ))}
            </div>
          </div>
        )}

        {/* ── Independent Track Bento Grid ── */}
        {showIndependent && (
          <div>
            {showBothGroups && (
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">Independent Builds</span>
                <div className="flex-1 h-px bg-canvas/10" />
              </div>
            )}

            <p className="text-canvas/40 text-xs font-mono mb-8 border-l-2 border-accent/40 pl-4 leading-relaxed">
              Client & utility builds shipped under{' '}
              <a
                href="https://gradiolex.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                Gradiolex
              </a>{' '}
              — highlighting custom web development and Next.js architecture.
            </p>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {filtered
                .filter((p) => p.group === 'independent')
                .map((p, i) => (
                  <BentoCard key={p.name} project={p} index={i + 1} groupLabel="Independent" />
                ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

const SUBGROUP_BADGE: Record<string, string> = {
  client:   'Freelance Client',
  utility:  'Utility Tool',
  domestic: 'Internal Project',
  global:   'Enterprise',
}

function BentoCard({ project, index, groupLabel }: { project: Project; index: number; groupLabel: string }) {
  const badge = project.subGroup ? (SUBGROUP_BADGE[project.subGroup] ?? groupLabel) : groupLabel
  const isFeatured = !!project.featured

  return (
    <article
      className={`group relative flex flex-col justify-between border border-canvas/10 hover:border-accent/50 bg-canvas/5 hover:bg-canvas/[0.08] transition-all duration-300 p-5 sm:p-6 rounded-2xl shadow-md ${
        isFeatured ? 'col-span-1 md:col-span-2 lg:col-span-2 border-accent/20 bg-canvas/[0.07]' : 'col-span-1'
      }`}
    >
      {/* Top Accent Hover Highlight Line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-accent/0 group-hover:bg-accent transition-all duration-300 rounded-full" />

      <div>
        {/* Header Badges */}
        <div className="reveal-text flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-accent font-bold">
            {String(index).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5">
            {isFeatured && (
              <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded-md font-semibold">
                ★ Featured
              </span>
            )}
            <span className="text-xs font-mono uppercase tracking-widest text-canvas/40 border border-canvas/10 group-hover:border-canvas/30 group-hover:text-canvas/70 px-2 py-0.5 rounded-md transition-colors">
              {badge}
            </span>
          </div>
        </div>

        {/* Role Subtitle */}
        <p className="reveal-text text-xs font-mono text-accent/80 uppercase tracking-widest mb-1.5 font-semibold delay-100">
          {project.role}
        </p>

        {/* Project Title */}
        <h3 className="reveal-text font-display font-normal text-xl sm:text-2xl text-canvas leading-tight mb-3 group-hover:text-accent transition-colors duration-300 delay-200">
          {project.name}
        </h3>

        {/* Description — Always Visible */}
        <p className="reveal-text text-canvas/60 text-xs sm:text-sm leading-relaxed mb-5 delay-300">
          {project.challenge}
        </p>
      </div>

      {/* Stack Tags */}
      <div className="reveal-text flex flex-wrap gap-1.5 pt-4 border-t border-canvas/5 group-hover:border-canvas/10 transition-colors delay-400">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs font-mono text-canvas/50 bg-canvas/5 border border-canvas/10 px-2 py-0.5 rounded-md group-hover:border-canvas/20 group-hover:text-canvas/80 transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  )
}
