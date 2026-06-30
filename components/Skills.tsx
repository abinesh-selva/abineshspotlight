import React from 'react'

const row1 = ['WordPress', 'React', 'Tailwind CSS', 'PHP', 'Next.js', 'Flutter', 'Docker', 'Supabase', 'WordPress', 'React', 'Tailwind CSS', 'PHP', 'Next.js', 'Flutter', 'Docker', 'Supabase']
const row2 = ['GSAP', 'Figma', 'Git', 'REST API', 'GraphQL', 'SCSS', 'ACF Pro', 'Pantheon', 'AI / LLM', 'GSAP', 'Figma', 'Git', 'REST API', 'GraphQL', 'SCSS', 'ACF Pro']

export default function Skills() {
  return (
    <section id="skills" className="py-16 overflow-hidden bg-ink">
      <div className="overflow-hidden mb-5">
        <div className="flex items-center gap-10 animate-marquee whitespace-nowrap w-max">
          {row1.map((tech, i) => (
            <React.Fragment key={`r1-${i}`}>
              <span className="font-display font-normal text-2xl sm:text-3xl md:text-5xl text-canvas/10 hover:text-canvas transition-colors duration-300 cursor-default select-none uppercase tracking-tight">
                {tech}
              </span>
              <span className="text-accent text-xl select-none">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-10 animate-marquee-reverse whitespace-nowrap w-max">
          {row2.map((tech, i) => (
            <React.Fragment key={`r2-${i}`}>
              <span className="font-display font-normal text-2xl sm:text-3xl md:text-5xl text-canvas/10 hover:text-accent transition-colors duration-300 cursor-default select-none uppercase tracking-tight">
                {tech}
              </span>
              <span className="text-canvas/15 text-xl select-none">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
