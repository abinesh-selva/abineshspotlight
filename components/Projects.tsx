'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    name: 'Unbounce',
    role: 'WordPress Developer',
    category: 'WordPress',
    challenge: 'ACF architecture overhaul, CPT development, and performance optimisation for a leading SaaS landing page platform used by 120,000+ marketers.',
    stack: ['WordPress', 'ACF Pro', 'PHP', 'Performance'],
    url: 'https://unbounce.com',
    image: '/images/project-wordpress-dashboard.png',
  },
  {
    name: 'Open Government Partnership',
    role: 'WordPress Developer',
    category: 'WordPress',
    challenge: 'Large-scale CMS and Custom Post Type architecture for an international initiative spanning 75+ governments and millions of annual visitors.',
    stack: ['WordPress', 'ACF Pro', 'CPT', 'REST API'],
    url: 'https://www.opengovpartnership.org',
    image: '/images/project-corporate.png',
  },
  {
    name: 'ElasticPath',
    role: 'Craft CMS Developer',
    category: 'CMS',
    challenge: 'Full WCAG accessibility compliance and Core Web Vitals optimisation for an enterprise headless commerce platform with global reach.',
    stack: ['Craft CMS', 'WCAG', 'Performance', 'SEO'],
    url: 'https://www.elasticpath.com',
    image: '/images/project-react-nextjs-ui.png',
  },
  {
    name: 'Premier Boxing Champions',
    role: 'Drupal Developer',
    category: 'Drupal',
    challenge: 'Security hardening and performance work for a major US boxing promoter, including live fight-night features built to handle peak concurrency.',
    stack: ['Drupal', 'PHP', 'Security', 'Performance'],
    url: 'https://www.premierboxingchampions.com',
    image: '/images/project-ecommerce.png',
  },
  {
    name: 'Traction Complete',
    role: 'WordPress Developer',
    category: 'WordPress',
    challenge: 'ACF architecture, performance improvements, and custom plugin development for a Salesforce-native data management SaaS.',
    stack: ['WordPress', 'ACF Pro', 'PHP', 'Plugin Dev'],
    url: 'https://www.tractioncomplete.com',
    image: '/images/project-dashboard.png',
  },
]

const filters = ['All', 'WordPress', 'CMS', 'Drupal']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-16 bg-ink">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display font-bold text-4xl md:text-6xl text-canvas tracking-tight leading-tight mb-10 md:mb-20">
          Selected projects.
        </h2>

        {/* Filter */}
        <div className="mb-16 reveal-text">
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

        {/* Project cards */}
        <div className="space-y-5">
          {filtered.map((project) => (
            <article
              key={project.name}
              className="project-card reveal-text group overflow-hidden border border-canvas/10 hover:border-canvas/20 bg-canvas/5 transition-colors relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-center">
                  <span className="text-xs font-mono text-accent uppercase tracking-widest mb-5">
                    {project.role}
                  </span>
                  <h3 className="font-display font-bold text-3xl md:text-5xl text-canvas mb-6 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-canvas/60 leading-relaxed mb-10 text-sm md:text-base max-w-md">
                    {project.challenge}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono text-canvas/40 border border-canvas/15 px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-canvas/70 hover:text-accent transition-colors group/link w-fit"
                  >
                    Visit Project
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                <div className="lg:col-span-6 h-72 lg:h-auto min-h-[350px] relative overflow-hidden bg-canvas/5 p-4 lg:p-12">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain opacity-60 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-700 ease-out select-none"
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
