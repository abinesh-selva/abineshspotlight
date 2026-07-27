'use client'

import { useState, useRef, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fileName, setFileName] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name ?? '')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const body = new FormData(form)

    try {
      const res = await fetch('/api/contact', { method: 'POST', body })
      const json = await res.json()
      if (json.success) {
        setState('success')
      } else {
        setErrorMsg(json.message ?? 'Something went wrong. Please try again.')
        setState('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setState('error')
    }
  }

  const reset = () => {
    setState('idle')
    setErrorMsg('')
    setFileName('')
    formRef.current?.reset()
  }

  return (
    <section id="contact" className="py-16 bg-canvas border-t border-rule">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-24">

          {/* Left */}
          <div className="reveal-text">
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-4">Get in touch</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-tight mb-8">
              Let&apos;s connect.
            </h2>
            <p className="text-mist leading-relaxed mb-10 max-w-sm text-base">
              Open to full-time engineering roles and interesting technical collaborations.
              I read every message and reply within 24 hours.
            </p>

            <div className="flex flex-col gap-5 mb-12">
              <div>
                <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Phone / WhatsApp</p>
                <a
                  href="tel:+919042972156"
                  className="group inline-flex items-end gap-2 text-base md:text-lg font-bold text-ink hover:text-accent transition-colors"
                >
                  +91 90429 72156
                  <span className="text-accent group-hover:text-forest transition-colors inline-flex items-center mb-0.5">
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
              <div>
                <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Email</p>
                <a
                  href="mailto:mailtoabineshselva@gmail.com"
                  className="group inline-flex items-end gap-2 text-base md:text-lg font-bold text-ink hover:text-accent transition-colors break-all"
                >
                  mailtoabineshselva@gmail.com
                  <span className="text-accent group-hover:text-forest transition-colors inline-flex items-center mb-0.5 shrink-0">
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <a
                href="https://linkedin.com/in/abineshselvarasu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex items-center gap-2 text-sm font-mono text-mist hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a
                href="https://github.com/abineshselvarasu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex items-center gap-2 text-sm font-mono text-mist hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-text">

            {state === 'success' ? (
              <div className="flex flex-col items-start justify-center h-full gap-5 py-12">
                <div className="w-12 h-12 border-2 border-accent flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-ink font-bold text-xl mb-2">Message sent.</h4>
                  <p className="text-mist text-base">I&apos;ll get back to you within 24 hours.</p>
                </div>
                <button onClick={reset} className="group text-base font-mono text-accent hover:text-forest transition-colors inline-flex items-center gap-1">
                  Send another
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                {state === 'error' && (
                  <div className="mb-6 p-4 border border-red-200 bg-red-50">
                    <p className="text-red-600 text-sm font-mono">{errorMsg}</p>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Name *</label>
                      <input type="text" id="name" name="name" required placeholder="Your name"
                        className="w-full bg-paper border border-rule px-4 py-3 text-ink placeholder-mist/30 focus:outline-none focus:border-accent transition-all text-sm font-mono" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Email *</label>
                      <input type="email" id="email" name="email" required placeholder="you@company.com"
                        className="w-full bg-paper border border-rule px-4 py-3 text-ink placeholder-mist/30 focus:outline-none focus:border-accent transition-all text-sm font-mono" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Company <span className="normal-case font-normal">(Optional)</span></label>
                      <input type="text" id="company" name="company" placeholder="Company or org"
                        className="w-full bg-paper border border-rule px-4 py-3 text-ink placeholder-mist/30 focus:outline-none focus:border-accent transition-all text-sm font-mono" />
                    </div>
                    <div>
                      <label htmlFor="inquiry_type" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Inquiry Type *</label>
                      <div className="relative">
                        <select id="inquiry_type" name="project_type" required
                          className="w-full appearance-none bg-paper border border-rule px-4 py-3 text-ink focus:outline-none focus:border-accent transition-all text-sm font-mono cursor-pointer">
                          <option value="" disabled>Select type...</option>
                          <option value="Full-time Employment">Full-time Employment</option>
                          <option value="Contract / Freelance Work">Contract / Freelance Work</option>
                          <option value="Technical Collaboration">Technical Collaboration</option>
                          <option value="WordPress Development">WordPress Development</option>
                          <option value="React / Next.js">React / Next.js</option>
                          <option value="Headless CMS">Headless CMS</option>
                          <option value="Technical SEO">Technical SEO</option>
                          <option value="Just saying hi!">Just saying hi!</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-mist pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Tell me about the role or project..."
                      className="w-full bg-paper border border-rule px-4 py-3 text-ink placeholder-mist/30 focus:outline-none focus:border-accent transition-all resize-none text-sm font-mono" />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">
                      Attachment <span className="text-mist normal-case font-normal">(PDF, DOC, PNG · max 5MB)</span>
                    </label>
                    <label htmlFor="file"
                      className="flex items-center justify-center gap-3 p-5 border border-dashed border-rule cursor-pointer hover:border-accent transition-all group">
                      <svg className="w-4 h-4 text-mist group-hover:text-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      {fileName ? (
                        <span className="text-sm text-accent font-mono">📎 {fileName}</span>
                      ) : (
                        <span className="text-mist text-sm font-mono">
                          Drop file or <span className="text-accent group-hover:text-forest transition-colors">browse</span>
                        </span>
                      )}
                      <input type="file" id="file" name="file" className="hidden" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip" onChange={handleFile} />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="group w-full py-4 bg-accent text-white font-bold text-sm tracking-wide hover:bg-forest transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {state === 'loading' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <span className="inline-flex items-center gap-1.5">
                        Send Message
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-rule flex flex-col sm:flex-row justify-between gap-4 text-sm font-mono text-mist">
          <span>© {new Date().getFullYear()} abineshspotlight.online. All rights reserved.</span>
          <a href="#hero" className="group hover:text-accent transition-colors inline-flex items-center gap-1">
            Back to top
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
