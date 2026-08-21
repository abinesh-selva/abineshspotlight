'use client'

import { useState } from 'react'

interface SkillItem {
  name: string
  category: string
  icon: string
  color: string
  useCase: string
  level: string
}

// Row 1: Core Engineering Skills (Languages, CMS, Frameworks)
const row1Skills: SkillItem[] = [
  {
    name: 'WordPress',
    category: 'Engineering Skills',
    icon: 'wp',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: '3+ years crafting bespoke themes, custom hooks/filters, multisite setups, and enterprise CMS platforms.',
    level: 'Expert',
  },
  {
    name: 'ACF Pro',
    category: 'Engineering Skills',
    icon: 'acf',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Built over 50+ modular flexible content components for marketing teams at Unbounce, ElasticPath, and OGP.',
    level: 'Expert',
  },
  {
    name: 'Gutenberg Blocks',
    category: 'Engineering Skills',
    icon: 'gb',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Engineered native Gutenberg block suites using React & PHP to give content editors full layout control.',
    level: 'Advanced',
  },
  {
    name: 'Headless WP',
    category: 'Engineering Skills',
    icon: 'hwp',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Architected headless CMS backends connecting WordPress GraphQL APIs to fast Next.js frontends.',
    level: 'Advanced',
  },
  {
    name: 'HTML5',
    category: 'Engineering Skills',
    icon: 'html',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Pixel-perfect HTML markup built with semantic tags, proper heading hierarchy, and screen-reader accessibility.',
    level: 'Expert',
  },
  {
    name: 'CSS3 / SCSS',
    category: 'Engineering Skills',
    icon: 'css',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Structured style architecture supporting dark modes, fluid typography, and complex flex/grid systems.',
    level: 'Expert',
  },
  {
    name: 'JavaScript',
    category: 'Engineering Skills',
    icon: 'js',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Clean vanilla JavaScript for dynamic UI components, state handling, and API integrations.',
    level: 'Advanced',
  },
  {
    name: 'Tailwind CSS',
    category: 'Engineering Skills',
    icon: 'tw',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Rapid, production-ready UI development using custom Tailwind configuration and theme tokens.',
    level: 'Advanced',
  },
  {
    name: 'TypeScript',
    category: 'Engineering Skills',
    icon: 'ts',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Ensures type safety across component props, state variables, and backend REST response payloads.',
    level: 'Intermediate',
  },
  {
    name: 'PHP',
    category: 'Engineering Skills',
    icon: 'php',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Server-side logic, custom database queries, REST API routing, and secure form processing.',
    level: 'Advanced',
  },
  {
    name: 'MySQL',
    category: 'Engineering Skills',
    icon: 'sql',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Database indexing, custom table queries, and data migration scripts for high-traffic sites.',
    level: 'Advanced',
  },
  {
    name: 'Craft CMS',
    category: 'Engineering Skills',
    icon: 'craft',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Delivered structured content models and custom Twig templates for multi-region marketing websites.',
    level: 'Intermediate',
  },
  {
    name: 'Drupal',
    category: 'Engineering Skills',
    icon: 'drupal',
    color: 'border-forest/20 text-forest bg-forest/5',
    useCase: 'Maintained and customized Drupal platforms for global non-profit and public sector organizations.',
    level: 'Intermediate',
  },
]

// Row 2: Developer Tools, DevOps & Performance
const row2Tools: SkillItem[] = [
  {
    name: 'Git & GitHub',
    category: 'Tools & Workflows',
    icon: 'git',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Version control discipline across team repositories, feature branching, and release tagging.',
    level: 'Advanced',
  },
  {
    name: 'Figma',
    category: 'Tools & Workflows',
    icon: 'figma',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Converting complex Figma component libraries into responsive code with pixel-perfect precision.',
    level: 'Advanced',
  },
  {
    name: 'Vercel',
    category: 'Tools & Workflows',
    icon: 'vercel',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Continuous deployments, serverless edge functions, and domain routing for Next.js applications.',
    level: 'Advanced',
  },
  {
    name: 'Pantheon',
    category: 'Tools & Workflows',
    icon: 'pantheon',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Managed WordPress/Drupal hosting, automated Dev/Test/Live multidev pipelines.',
    level: 'Advanced',
  },
  {
    name: 'Core Web Vitals',
    category: 'Tools & Workflows',
    icon: 'cwv',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Deep performance engineering including font deferral, critical CSS, image optimization, and LCP reduction (~30%).',
    level: 'Specialty',
  },
  {
    name: 'Technical SEO',
    category: 'Tools & Workflows',
    icon: 'seo',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Implemented full structured data schema (Person, WebSite, Article) and verified canonical URL structures.',
    level: 'Specialty',
  },
  {
    name: 'Webpack',
    category: 'Tools & Workflows',
    icon: 'webpack',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Asset bundling, SCSS compilation, JS minification, and build pipeline setup.',
    level: 'Intermediate',
  },
  {
    name: 'WPGraphQL',
    category: 'Tools & Workflows',
    icon: 'gql',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Configured custom GraphQL schema types, field mutations, and optimized cache layers.',
    level: 'Advanced',
  },
  {
    name: 'REST APIs',
    category: 'Tools & Workflows',
    icon: 'api',
    color: 'border-accent/40 text-forest bg-accent/10',
    useCase: 'Wired third-party APIs, CRM webhooks, and custom endpoints into CMS and frontend platforms.',
    level: 'Advanced',
  },
]

import GameOfLife from './GameOfLife'

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null)

  return (
    <section id="skills" className="relative py-20 lg:py-24 bg-transparent overflow-hidden border-t border-rule">
      <GameOfLife />
      <div className="relative z-10 container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6 reveal-text">
          <div>
            <p className="text-xs font-mono text-forest uppercase tracking-widest mb-3 font-semibold">Technical Stack</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-tight">
              Skills & tools.
            </h2>
          </div>
          <p className="text-mist max-w-xs text-sm font-mono leading-relaxed">
            Technologies I use to architect, build, and ship production-grade web products.
          </p>
        </div>

        {/* Carousel Tracks Container */}
        <div className="relative overflow-hidden py-4 -mx-6 px-6 space-y-8 reveal-text">
          
          {/* Soft Left & Right Fade Gradient Masks */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-canvas to-transparent z-20" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-canvas to-transparent z-20" />

          {/* Row 1: Core Skills Track (Moving Left) */}
          <div>
            <div className="flex items-center gap-2 mb-3 px-3">
              <span className="text-xs font-mono text-forest uppercase tracking-widest font-bold">
                Core Skills
              </span>
            </div>

            <div className="animate-marquee-left">
              {[...row1Skills, ...row1Skills].map((item, idx) => (
                <div
                  key={`r1-${item.name}-${idx}`}
                  onClick={() => setSelectedSkill(item)}
                  className="w-auto shrink-0 mx-2.5 p-4 sm:p-5 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center text-center"
                >
                  {/* Accurate Logo Container */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${item.color}`}>
                    {renderSkillIcon(item.icon, item.name)}
                  </div>

                  {/* Skill Name Below Logo */}
                  <span className="font-mono font-normal text-xs sm:text-sm text-ink group-hover:text-forest transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Tools & DevOps Track (Moving Right) */}
          <div>
            <div className="flex items-center gap-2 mb-3 px-3">
              <span className="text-xs font-mono text-mist uppercase tracking-widest font-bold">
                Tools & Performance
              </span>
            </div>

            <div className="animate-marquee-right">
              {[...row2Tools, ...row2Tools, ...row2Tools].map((item, idx) => (
                <div
                  key={`r2-${item.name}-${idx}`}
                  onClick={() => setSelectedSkill(item)}
                  className="w-auto shrink-0 mx-2.5 p-4 sm:p-5 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center text-center"
                >
                  {/* Accurate Logo Container */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${item.color}`}>
                    {renderSkillIcon(item.icon, item.name)}
                  </div>

                  {/* Tool Name Below Logo */}
                  <span className="font-mono font-normal text-xs sm:text-sm text-ink group-hover:text-forest transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Selected Item Detail Interactive Modal / Drawer */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-paper border-2 border-forest p-6 md:p-8 max-w-lg w-full rounded-2xl shadow-2xl relative animate-fadeIn">
              
              {/* Close button */}
              <button
                onClick={() => setSelectedSkill(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-canvas border border-rule text-mist hover:text-ink hover:border-forest flex items-center justify-center transition-all group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${selectedSkill.color}`}>
                  {renderSkillIcon(selectedSkill.icon, selectedSkill.name)}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-forest font-bold px-2 py-0.5 rounded bg-forest/10 border border-forest/20">
                    {selectedSkill.category}
                  </span>
                  <h3 className="text-2xl font-display text-ink font-normal mt-1">
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="bg-canvas p-4 rounded-xl border border-rule">
                  <p className="text-mist uppercase tracking-widest text-xs mb-1">Proficiency Level</p>
                  <p className="text-forest font-bold text-sm">{selectedSkill.level}</p>
                </div>

                <div className="bg-canvas p-4 rounded-xl border border-rule">
                  <p className="text-mist uppercase tracking-widest text-xs mb-1">Enterprise Application</p>
                  <p className="text-ink/80 leading-relaxed">{selectedSkill.useCase}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

// ── Official Downloaded Brand Logos ───────────────────────────────────────────

const iconMap: Record<string, string> = {
  wp:      '/icons/wp.svg',
  acf:     '/icons/acf.svg',
  gb:      '/icons/gb.svg',
  hwp:     '/icons/hwp.svg',
  html:    '/icons/html.svg',
  css:     '/icons/css.svg',
  js:      '/icons/js.svg',
  tw:      '/icons/tw.svg',
  ts:      '/icons/ts.svg',
  php:     '/icons/php.svg',
  sql:     '/icons/sql.svg',
  craft:   '/icons/craft.svg',
  drupal:  '/icons/drupal.svg',
  git:     '/icons/git.svg',
  figma:   '/icons/figma.svg',
  vercel:  '/icons/vercel.svg',
  pantheon:'/icons/pantheon.svg',
  cwv:     '/icons/cwv.svg',
  seo:     '/icons/seo.svg',
  webpack: '/icons/webpack.svg',
  gql:     '/icons/gql.svg',
  api:     '/icons/api.svg',
}

function renderSkillIcon(icon: string, name?: string) {
  const src = iconMap[icon]
  if (src) {
    return (
      <img
        src={src}
        alt={`${name || icon} logo`}
        className="w-8 h-8 object-contain"
      />
    )
  }
  // fallback
  return <span className="text-accent text-base font-mono">◈</span>
}
