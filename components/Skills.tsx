const skillGroups = [
  {
    category: 'CMS & Platforms',
    icon: '◈',
    skills: ['WordPress (Advanced)', 'ACF Pro', 'Gutenberg Blocks', 'Custom Themes & Plugins', 'Craft CMS', 'Drupal', 'Headless WP', 'WPGraphQL'],
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'Tailwind CSS', 'TypeScript', 'GSAP'],
  },
  {
    category: 'Backend & Databases',
    icon: '◈',
    skills: ['PHP', 'MySQL', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & Workflow',
    icon: '◈',
    skills: ['Git & GitHub', 'Figma', 'Vercel', 'Pantheon', 'Webpack', 'Technical SEO', 'Core Web Vitals'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-ink overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-4">
          <div>
            <p className="text-xs font-mono text-canvas/40 uppercase tracking-widest mb-3">Technical Stack</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-canvas leading-tight">
              Skills & tools.
            </h2>
          </div>
          <p className="text-canvas/40 max-w-xs text-sm font-mono leading-relaxed">
            Technologies I use to architect, build, and ship production-grade web products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-canvas/10">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="group bg-ink p-7 hover:bg-forest/20 transition-colors duration-300 cursor-default"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-accent text-base font-mono">{group.icon}</span>
                <h3 className="text-xs font-mono text-canvas/50 uppercase tracking-widest group-hover:text-accent transition-colors duration-300">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm font-mono text-canvas/60 group-hover:text-canvas/80 transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stats cell — fills the 6th grid slot on xl */}
          <div className="bg-ink p-7 flex flex-col justify-between gap-8 md:col-span-2 xl:col-span-1">
            <div>
              <p className="text-4xl font-display text-canvas font-normal leading-none">3+</p>
              <p className="text-xs font-mono text-canvas/40 uppercase tracking-widest mt-2">Years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-display text-canvas font-normal leading-none">25+</p>
              <p className="text-xs font-mono text-canvas/40 uppercase tracking-widest mt-2">Production projects shipped</p>
            </div>
            <div>
              <p className="text-4xl font-display text-canvas font-normal leading-none">~30%</p>
              <p className="text-xs font-mono text-canvas/40 uppercase tracking-widest mt-2">LCP improvement achieved</p>
            </div>
            <div>
              <p className="text-4xl font-display text-accent font-normal leading-none">Global</p>
              <p className="text-xs font-mono text-canvas/40 uppercase tracking-widest mt-2">Enterprise clients served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
