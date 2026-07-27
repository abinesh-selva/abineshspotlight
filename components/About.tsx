const tags = [
  'WordPress Customization', 'Custom Themes', 'Custom Hooks',
  'Technical SEO', 'MySQL', 'ACF Pro', 'PHP', 'Core Web Vitals',
  'Headless WP', 'Flutter', 'AI / LLM', 'Supabase', 'React', 'Next.js',
]

const experience = [
  {
    title: 'Freelance Full Stack Engineer',
    company: 'Independent — Remote',
    companyClass: 'text-forest',
    period: '2025 — Present',
    desc: 'End-to-end delivery of production web products for local businesses and startups — React/Next.js frontends, custom WordPress solutions, REST API integrations, and deployment on Vercel and Pantheon. Scoped projects, managed client communication, and architected reusable component systems.',
  },
  {
    title: 'Senior Web Developer | WordPress Engineer',
    company: 'FueInt Technologies',
    companyClass: 'text-mist',
    period: 'Jan 2025 — May 2026',
    desc: 'Engineered and delivered production-grade web platforms for global enterprise clients including Unbounce, TractionComplete, Intiveo, PPIC, OpenGovernmentPartnership, Premier Boxing Champions, and ElasticPath. Specialised in custom CMS architecture across WordPress, Drupal, and Craft CMS. Reduced Largest Contentful Paint (LCP) by ~30% via deep asset and rendering optimisations.',
  },
  {
    title: 'Frontend Developer | WordPress Developer',
    company: 'FueInt Technologies',
    companyClass: 'text-mist',
    period: 'Jan 2023 — Dec 2024',
    desc: 'Converted Figma designs into responsive WordPress websites. Built reusable Gutenberg blocks and ACF components, maintained client websites, optimised performance, and resolved production issues on enterprise-scale platforms.',
  },
  {
    title: 'Junior Developer (Intern → Full-time)',
    company: 'FueInt Technologies',
    companyClass: 'text-mist',
    period: 'Jul 2022 — Dec 2022',
    desc: 'WordPress website development, bug fixing, content updates, responsive UI implementation, and testing — gaining hands-on exposure to agency-grade workflows, version control, and client delivery pipelines.',
  },
  {
    title: 'B.E. Computer Science & Engineering',
    company: 'Vidyaa Vikas College of Engineering — Anna University',
    companyClass: 'text-mist',
    period: '2016 — 2020',
    desc: 'Foundational study in algorithms, data structures, databases, and web technologies. Built the programming base that underpins a full-stack development career.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-canvas">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-24">

          {/* Left */}
          <div className="lg:col-span-5 reveal-text">
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-4">About me</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-none mb-8">
              Building the web,<br />one commit at a time.
            </h2>
            <div className="space-y-5 text-mist text-base leading-relaxed">
              <p>
                I&apos;m Abinesh — a full stack engineer and senior WordPress developer with 3+ years
                delivering production-grade platforms for global clients. Shipping since July 2022, focused
                on React, Next.js, WordPress, headless CMS, and technical SEO.
              </p>
              <p>
                Day-to-day: architecting scalable CMS systems with ACF and Gutenberg, wiring React
                into headless environments, and solving the performance and SEO problems that most
                engineers avoid.
              </p>
              <blockquote className="border-l-4 border-accent pl-5 text-ink text-opacity-75 italic">
                &ldquo;Fast websites shouldn&apos;t be a premium feature — they should be the baseline.&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://linkedin.com/in/abineshselvarasu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex items-center gap-2 px-4 py-2 border border-rule text-sm font-mono text-mist hover:border-accent hover:text-accent transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/abineshselvarasu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex items-center gap-2 px-4 py-2 border border-rule text-sm font-mono text-mist hover:border-accent hover:text-accent transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
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
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-8">Experience & Education</p>

            <div className="divide-y divide-rule">
              {experience.map((exp) => (
                <div key={exp.title} className="py-6 reveal-text group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-6">
                    <div className="flex-grow min-w-0">
                      <h3 className="text-ink font-semibold text-base group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                        <span className={`text-xs font-mono font-medium ${exp.companyClass}`}>
                          {exp.company}
                        </span>
                        <span className="text-xs font-mono text-mist md:hidden">
                          • {exp.period}
                        </span>
                      </div>
                      {exp.desc && (
                        <p className="text-mist text-sm leading-relaxed mt-3 max-w-lg">{exp.desc}</p>
                      )}
                    </div>
                    <span className="hidden md:block text-xs font-mono text-mist whitespace-nowrap pt-0.5 shrink-0">
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
