'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'About',       url: '#about' },
  { label: 'Skills',      url: '#skills' },
  { label: 'Projects',    url: '#projects' },
  { label: 'Blog',        url: '#blog' },
  { label: 'Contact',     url: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        id="main-header"
        className={scrolled ? 'is-scrolled fixed w-full top-0 z-50' : 'fixed w-full top-0 z-50'}
        role="banner"
      >
        <div className="container mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
          <a href="#hero" aria-label="Abinesh Selvarasu — Home" className="flex items-center gap-2 z-50">
            <Image src="/logo.svg" alt="Abinesh Selvarasu — Portfolio Logo" width={48} height={48} className="h-10 lg:h-12 w-auto object-contain select-none transition-transform hover:translate-x-1" />
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="nav-link text-base font-medium text-forest hover:text-ink hover:font-bold transition-colors tracking-wide pb-0.5">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 border border-rule text-base font-bold text-white bg-forest hover:bg-accent hover:text-forest transition-all z-50 rounded-full"
          >
            Resume
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>

          <button
            id="mobile-nav-toggle"
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative${menuOpen ? ' is-open' : ''}`}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span id="ham-line-1" className="block w-6 h-0.5 bg-ink transition-all duration-300 origin-center" />
            <span id="ham-line-2" className="block w-6 h-0.5 bg-ink transition-all duration-300" />
            <span id="ham-line-3" className="block w-4 h-0.5 bg-ink transition-all duration-300 origin-center ml-auto" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center px-6 bg-ink${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col items-center gap-7 mb-14">
          {navLinks.map((link) => (
            <a key={link.label} href={link.url} onClick={close} className="mobile-nav-link font-display font-normal text-5xl text-canvas hover:text-accent transition-colors tracking-tight">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/resume/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="group mobile-nav-link inline-flex items-center gap-3 px-8 py-4 border border-canvas border-opacity-20 text-base font-bold text-canvas hover:text-accent hover:border-accent transition-all rounded-full"
        >
          Download Resume
          <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </a>
      </div>
    </>
  )
}
