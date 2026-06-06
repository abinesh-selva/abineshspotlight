const tags = ['Headless WP', 'Technical SEO', 'ACF Pro', 'GraphQL', 'Core Web Vitals', 'Flutter', 'AI / LLM', 'Custom Plugins']

const experience = [
  {
    title: 'WordPress Developer',
    company: 'FUEiNT Technologies',
    companyClass: 'text-forest',
    period: '2022 – 2026',
    desc: 'Custom WordPress themes and plugins for 20+ global client sites in Agile/Scrum teams. ACF architectures, Gutenberg blocks, performance work that cut LCP by ~30%, and a sitemap fix that restored crawlability on 1,700+ indexed URLs.',
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Gradiolex',
    companyClass: 'text-mist',
    period: '2025 – Now',
    desc: 'End-to-end products for startups — React/Next.js, Flutter mobile apps, AI/LLM integration, and Razorpay payment systems. Scoping, design, development, and deployment.',
  },
  {
    title: 'Full Stack Developer',
    company: 'FUEiNT Technologies',
    companyClass: 'text-mist',
    period: '2021 – 2022',
    desc: '20+ enterprise WordPress sites. Legacy PHP to modern MVC migrations. Pixel-perfect Figma-to-code delivery.',
  },
  {
    title: 'Junior Developer',
    company: 'Entry-level · FUEiNT Technologies',
    companyClass: 'text-mist',
    period: '2020 – 2021',
    desc: null,
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-canvas">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:col-span-5 reveal-text">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-none mb-8">
              Building the web, one commit at a time.
            </h2>
            <div className="space-y-5 text-mist text-sm leading-relaxed">
              <p>
                I&apos;m Abinesh — a full stack engineer and senior WordPress developer with 3+ years
                delivering production-grade websites for global clients. Shipping since 2022, focused
                on WordPress, React, headless CMS, and technical SEO.
              </p>
              <p>
                Day-to-day: architecting projects with ACF and Gutenberg, wiring React into CMS
                environments, and digging into the technical SEO problems others avoid.
              </p>
              <blockquote className="border-l-4 border-accent pl-5 text-ink text-opacity-75 italic">
                &ldquo;Fast websites shouldn&apos;t be a premium feature — they should be the baseline.&rdquo;
              </blockquote>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono text-mist border border-rule hover:border-accent hover:text-accent transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Experience */}
          <div className="lg:col-span-7">
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-8">Experience</p>

            <div className="divide-y divide-rule">
              {experience.map((exp) => (
                <div key={exp.title} className="py-7 reveal-text group">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-ink font-semibold text-base group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <p className={`text-xs font-mono mt-1 font-medium ${exp.companyClass}`}>{exp.company}</p>
                      {exp.desc && (
                        <p className="text-mist text-sm leading-relaxed mt-3 max-w-lg">{exp.desc}</p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-mist whitespace-nowrap pt-0.5 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
