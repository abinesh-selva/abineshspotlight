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
    color: 'border-[#21759B]/30 text-[#21759B] bg-[#21759B]/10',
    useCase: '3+ years crafting bespoke themes, custom hooks/filters, multisite setups, and enterprise CMS platforms.',
    level: 'Expert',
  },
  {
    name: 'ACF Pro',
    category: 'Engineering Skills',
    icon: 'acf',
    color: 'border-[#00E5A3]/30 text-[#00E5A3] bg-[#00E5A3]/10',
    useCase: 'Built over 50+ modular flexible content components for marketing teams at Unbounce, ElasticPath, and OGP.',
    level: 'Expert',
  },
  {
    name: 'Gutenberg Blocks',
    category: 'Engineering Skills',
    icon: 'gb',
    color: 'border-[#3858E9]/30 text-[#3858E9] bg-[#3858E9]/10',
    useCase: 'Engineered native Gutenberg block suites using React & PHP to give content editors full layout control.',
    level: 'Advanced',
  },
  {
    name: 'Headless WP',
    category: 'Engineering Skills',
    icon: 'hwp',
    color: 'border-[#61DAFB]/30 text-[#61DAFB] bg-[#61DAFB]/10',
    useCase: 'Architected headless CMS backends connecting WordPress GraphQL APIs to fast Next.js frontends.',
    level: 'Advanced',
  },
  {
    name: 'HTML5',
    category: 'Engineering Skills',
    icon: 'html',
    color: 'border-[#E34F26]/30 text-[#E34F26] bg-[#E34F26]/10',
    useCase: 'Pixel-perfect HTML markup built with semantic tags, proper heading hierarchy, and screen-reader accessibility.',
    level: 'Expert',
  },
  {
    name: 'CSS3 / SCSS',
    category: 'Engineering Skills',
    icon: 'css',
    color: 'border-[#1572B6]/30 text-[#1572B6] bg-[#1572B6]/10',
    useCase: 'Structured style architecture supporting dark modes, fluid typography, and complex flex/grid systems.',
    level: 'Expert',
  },
  {
    name: 'JavaScript',
    category: 'Engineering Skills',
    icon: 'js',
    color: 'border-[#F7DF1E]/30 text-[#F7DF1E] bg-[#F7DF1E]/10',
    useCase: 'Clean vanilla JavaScript for dynamic UI components, state handling, and API integrations.',
    level: 'Advanced',
  },
  {
    name: 'Tailwind CSS',
    category: 'Engineering Skills',
    icon: 'tw',
    color: 'border-[#06B6D4]/30 text-[#06B6D4] bg-[#06B6D4]/10',
    useCase: 'Rapid, production-ready UI development using custom Tailwind configuration and theme tokens.',
    level: 'Advanced',
  },
  {
    name: 'TypeScript',
    category: 'Engineering Skills',
    icon: 'ts',
    color: 'border-[#3178C6]/30 text-[#3178C6] bg-[#3178C6]/10',
    useCase: 'Ensures type safety across component props, state variables, and backend REST response payloads.',
    level: 'Intermediate',
  },
  {
    name: 'PHP',
    category: 'Engineering Skills',
    icon: 'php',
    color: 'border-[#777BB4]/30 text-[#777BB4] bg-[#777BB4]/10',
    useCase: 'Server-side logic, custom database queries, REST API routing, and secure form processing.',
    level: 'Advanced',
  },
  {
    name: 'MySQL',
    category: 'Engineering Skills',
    icon: 'sql',
    color: 'border-[#4479A1]/30 text-[#4479A1] bg-[#4479A1]/10',
    useCase: 'Database indexing, custom table queries, and data migration scripts for high-traffic sites.',
    level: 'Advanced',
  },
  {
    name: 'Craft CMS',
    category: 'Engineering Skills',
    icon: 'craft',
    color: 'border-[#E5422B]/30 text-[#E5422B] bg-[#E5422B]/10',
    useCase: 'Delivered structured content models and custom Twig templates for multi-region marketing websites.',
    level: 'Intermediate',
  },
  {
    name: 'Drupal',
    category: 'Engineering Skills',
    icon: 'drupal',
    color: 'border-[#0678BE]/30 text-[#0678BE] bg-[#0678BE]/10',
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
    color: 'border-[#F05032]/30 text-[#F05032] bg-[#F05032]/10',
    useCase: 'Version control discipline across team repositories, feature branching, and release tagging.',
    level: 'Advanced',
  },
  {
    name: 'Figma',
    category: 'Tools & Workflows',
    icon: 'figma',
    color: 'border-[#F24E1E]/30 text-[#F24E1E] bg-[#F24E1E]/10',
    useCase: 'Converting complex Figma component libraries into responsive code with pixel-perfect precision.',
    level: 'Advanced',
  },
  {
    name: 'Vercel',
    category: 'Tools & Workflows',
    icon: 'vercel',
    color: 'border-canvas/40 text-canvas bg-canvas/10',
    useCase: 'Continuous deployments, serverless edge functions, and domain routing for Next.js applications.',
    level: 'Advanced',
  },
  {
    name: 'Pantheon',
    category: 'Tools & Workflows',
    icon: 'pantheon',
    color: 'border-[#EFD000]/30 text-[#EFD000] bg-[#EFD000]/10',
    useCase: 'Managed WordPress/Drupal hosting, automated Dev/Test/Live multidev pipelines.',
    level: 'Advanced',
  },
  {
    name: 'Core Web Vitals',
    category: 'Tools & Workflows',
    icon: 'cwv',
    color: 'border-accent/30 text-accent bg-accent/10',
    useCase: 'Deep performance engineering including font deferral, critical CSS, image optimization, and LCP reduction (~30%).',
    level: 'Specialty',
  },
  {
    name: 'Technical SEO',
    category: 'Tools & Workflows',
    icon: 'seo',
    color: 'border-accent/30 text-accent bg-accent/10',
    useCase: 'Implemented full structured data schema (Person, WebSite, Article) and verified canonical URL structures.',
    level: 'Specialty',
  },
  {
    name: 'Webpack',
    category: 'Tools & Workflows',
    icon: 'webpack',
    color: 'border-[#8ED6FB]/30 text-[#8ED6FB] bg-[#8ED6FB]/10',
    useCase: 'Asset bundling, SCSS compilation, JS minification, and build pipeline setup.',
    level: 'Intermediate',
  },
  {
    name: 'WPGraphQL',
    category: 'Tools & Workflows',
    icon: 'gql',
    color: 'border-[#E10098]/30 text-[#E10098] bg-[#E10098]/10',
    useCase: 'Configured custom GraphQL schema types, field mutations, and optimized cache layers.',
    level: 'Advanced',
  },
  {
    name: 'REST APIs',
    category: 'Tools & Workflows',
    icon: 'api',
    color: 'border-[#009688]/30 text-[#009688] bg-[#009688]/10',
    useCase: 'Wired third-party APIs, CRM webhooks, and custom endpoints into CMS and frontend platforms.',
    level: 'Advanced',
  },
]

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null)

  return (
    <section id="skills" className="py-20 bg-canvas overflow-hidden border-t border-rule">
      <div className="container mx-auto px-6">
        
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
                  className="w-auto shrink-0 mx-2.5 p-4 sm:p-5 rounded-2xl bg-paper border border-rule hover:border-forest/40 hover:bg-paper/80 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center text-center shadow-sm"
                >
                  {/* Accurate Logo Container */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${item.color}`}>
                    {renderSkillIcon(item.icon, item.name)}
                  </div>

                  {/* Skill Name Below Logo */}
                  <h3 className="font-mono font-normal text-xs sm:text-sm text-ink group-hover:text-forest transition-colors">
                    {item.name}
                  </h3>
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
                  className="w-auto shrink-0 mx-2.5 p-4 sm:p-5 rounded-2xl bg-paper border border-rule hover:border-forest/40 hover:bg-paper/80 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center text-center shadow-sm"
                >
                  {/* Accurate Logo Container */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${item.color}`}>
                    {renderSkillIcon(item.icon, item.name)}
                  </div>

                  {/* Tool Name Below Logo */}
                  <h3 className="font-mono font-normal text-xs sm:text-sm text-ink group-hover:text-forest transition-colors">
                    {item.name}
                  </h3>
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
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-canvas border border-rule text-mist hover:text-ink hover:border-forest flex items-center justify-center text-xs font-mono transition-all"
              >
                ✕
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

              <div className="space-y-4 mb-6 text-xs font-mono">
                <div className="bg-canvas p-4 rounded-xl border border-rule">
                  <p className="text-mist uppercase tracking-widest text-xs mb-1">Proficiency Level</p>
                  <p className="text-forest font-bold text-sm">{selectedSkill.level}</p>
                </div>

                <div className="bg-canvas p-4 rounded-xl border border-rule">
                  <p className="text-mist uppercase tracking-widest text-xs mb-1">Enterprise Application</p>
                  <p className="text-ink/80 leading-relaxed">{selectedSkill.useCase}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full py-3 rounded-xl bg-forest text-canvas font-mono text-xs font-bold uppercase tracking-widest hover:bg-forest/90 transition-all shadow-md"
              >
                Close Details
              </button>
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
