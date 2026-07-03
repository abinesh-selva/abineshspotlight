const tags = ['Headless WP', 'Technical SEO', 'ACF Pro', 'GraphQL', 'Core Web Vitals', 'Flutter', 'AI / LLM', 'Custom Plugins']

const experience = [
  {
    title: 'Founder & principal',
    company: 'Gradiolex',
    companyClass: 'text-forest',
    period: '2025 — Present',
    desc: 'End-to-end web product delivery for local businesses and startups — scoping, design, development, and deployment. Managing client relationships independently and scaling architecture for repeat use.',
  },
  {
    title: 'Senior Web Developer | WordPress Engineer',
    company: 'Enterprise experience — via FueInt Technologies',
    companyClass: 'text-mist',
    period: 'Jan 2025 — May 2026',
    desc: 'Engineered and delivered production-grade web platforms for global enterprise clients including Unbounce, TractionComplete, Intiveo, PPIC, OpenGovernmentPartnership, Premier Boxing Champions, and ElasticPath. Operating in a high-stakes agency environment, I specialized in architecting custom CMS solutions across WordPress, Drupal, and Craft CMS. My work focused heavily on custom theme development, building scalable integration UIs, and executing deep performance optimizations—such as reducing Largest Contentful Paint (LCP) by ~30%—to ensure these enterprise platforms loaded lightning fast and met strict scalability standards.',
  },
  {
    title: 'Frontend Developer | WordPress Developer',
    company: 'Enterprise experience — via FueInt Technologies',
    companyClass: 'text-mist',
    period: 'Jan 2023 — Dec 2024',
    desc: 'Converted Figma designs into responsive WordPress websites. Built reusable Gutenberg blocks and ACF components, maintained client websites, optimized performance, and resolved production issues.',
  },
  {
    title: 'Intern',
    company: 'Enterprise experience — via FueInt Technologies',
    companyClass: 'text-mist',
    period: 'Jul 2022 — Dec 2022',
    desc: 'Assisted in WordPress website development, bug fixing, content updates, responsive UI implementation, and testing while learning modern web development workflows and version control.',
  },
  {
    title: 'B.E. Computer Science & Engineering',
    company: 'Vidyaa Vikas College of Engineering (Anna University)',
    companyClass: 'text-mist',
    period: '2016 — 2020',
    desc: 'Foundational programming in HTML, CSS, JavaScript, PHP, and web technologies — the basis for a full-stack development career. Active in Kabbadi.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-canvas">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:col-span-5 reveal-text">
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-none mb-8">
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
                      <p className={`text-xs font-mono mt-1 font-medium ${exp.companyClass}`}>
                        {exp.company === 'Gradiolex' ? (
                          <a href="https://gradiolex.vercel.app/" target="_blank" rel="noopener noreferrer" className="group/link hover:text-accent transition-colors inline-flex items-center gap-1">
                            Gradiolex
                            <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
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
