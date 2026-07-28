'use client'

export default function Contact() {
  const navLinks = [
    { label: 'About',       href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects',    href: '#projects' },
    { label: 'Blog',        href: '#blog' },
    { label: 'Contact',     href: '#contact' },
  ]

  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/abineshselvarasu/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/abineshselvarasu',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:mailtoabineshselva@gmail.com',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919042972156',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ]

  return (
    <footer id="contact" className="bg-ink border-t border-canvas/10">

      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

          {/* ── Column 1: Identity ── */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">Open to Work</span>
              <h3 className="font-display text-2xl text-canvas font-normal mb-1">Abinesh Selvarasu</h3>
              <p className="text-xs font-mono text-canvas/40 uppercase tracking-widest">
                Senior WordPress & Full Stack Engineer
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:mailtoabineshselva@gmail.com"
                className="group flex items-center gap-3 text-base text-canvas/60 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4 shrink-0 text-accent/60 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                <span className="font-mono text-base break-all">mailtoabineshselva@gmail.com</span>
              </a>
              <a
                href="tel:+919042972156"
                className="group flex items-center gap-3 text-base text-canvas/60 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4 shrink-0 text-accent/60 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="font-mono text-base">+91 90429 72156</span>
              </a>
              <div className="flex items-center gap-3 text-base text-canvas/40 font-mono">
                <svg className="w-4 h-4 shrink-0 text-accent/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Coimbatore, Tamil Nadu · India
              </div>
              {/* Resume CTA */}
              <a
                href="/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 mt-10 p-3 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest hover:bg-accent/10 transition-all rounded-lg"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* ── Column 2: Quick Nav ── */}
          <div>
            <p className="text-xs font-mono text-canvas/50 uppercase tracking-widest mb-6">Quick Links</p>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-base text-canvas/50 hover:text-accent transition-colors font-mono"
                >
                  <svg className="w-3 h-3 text-accent/30 group-hover:text-accent transition-all group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Column 3: Socials + CTA ── */}
          <div>
            <p className="text-xs font-mono text-canvas/50 uppercase tracking-widest mb-6">Connect</p>

            <div className="space-y-3 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-canvas/50 hover:text-accent transition-colors"
                >
                  <span className="w-9 h-9 rounded-xl border border-canvas/10 group-hover:border-accent/40 bg-canvas/5 group-hover:bg-accent/5 flex items-center justify-center transition-all">
                    {s.icon}
                  </span>
                  <span className="text-base font-mono group-hover:text-accent transition-colors">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-canvas/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-base font-mono text-canvas">
            © {new Date().getFullYear()} abineshspotlight.online · All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="group flex items-center gap-1.5 text-base font-mono text-canvas hover:text-accent transition-colors"
            >
              Back to top
              <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
