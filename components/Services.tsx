const services = [
  {
    num: '01',
    title: 'Design to Code',
    desc: 'From Figma to pixel-perfect, accessible code. No detail gets lost in the handoff between design and engineering.',
    tags: ['WordPress', 'React', 'Tailwind CSS'],
  },
  {
    num: '02',
    title: 'Business & Brand Websites',
    desc: 'Local businesses, B2B traders, and service brands — fast, well-structured websites with clear conversion paths and strong brand identity.',
    tags: ['WordPress', 'ACF', 'Custom Theme'],
  },
  {
    num: '03',
    title: 'Headless WordPress',
    desc: 'WordPress as CMS, React or Next.js at the front. Content via REST or GraphQL — fast, secure, scalable.',
    tags: ['WPGraphQL', 'Next.js', 'Vercel'],
  },
  {
    num: '04',
    title: 'E-commerce & Payments',
    desc: 'Product discovery platforms, curated storefronts, and end-to-end checkout flows with Razorpay integration — built to convert.',
    tags: ['Next.js', 'Razorpay', 'Tailwind CSS'],
  },
  {
    num: '05',
    title: 'SaaS Product Development',
    desc: 'Full-scale SaaS apps from zero to launch — dashboards, onboarding flows, role-based access, and subscription-ready architecture.',
    tags: ['Next.js', 'Supabase', 'Vercel'],
  },
  {
    num: '06',
    title: 'Support & Customer Portals',
    desc: 'Centralised support platforms with ticketing, knowledge base, and user communication tools tailored for growing businesses.',
    tags: ['Next.js', 'React', 'REST API'],
  },
  {
    num: '07',
    title: 'Performance & SEO',
    desc: 'Core Web Vitals audits, E-E-A-T implementation, structured data, and technical fixes that move the needle.',
    tags: ['Core Web Vitals', 'Schema', 'E-E-A-T'],
  },
  {
    num: '08',
    title: 'Mobile & AI',
    desc: 'Cross-platform Flutter apps and AI/LLM feature integration — voice tracking, OCR, and intelligent interfaces.',
    tags: ['Flutter', 'AI / LLM', 'Supabase'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-canvas">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-10 md:mb-20">
            What I offer
          </h2>
          <p className="text-mist max-w-xs text-sm leading-relaxed mb-8">
            Working with startups and established brands to build things that perform in the real world.
          </p>
        </div>

        <div className="divide-y divide-rule border-t border-rule">
          {services.map((service) => (
            <div
              key={service.num}
              className="service-row reveal-text group px-10 py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start cursor-default"
            >
              <span className="service-num font-mono text-xs text-mist md:col-span-1 md:pt-1.5 transition-colors">
                {service.num}
              </span>
              <div className="md:col-span-4">
                <h3 className="service-title font-display font-bold text-2xl md:text-3xl text-ink transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="service-desc text-mist leading-relaxed text-sm transition-colors">
                  {service.desc}
                </p>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="service-tag text-xs font-mono text-mist border border-rule px-2.5 py-1 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
