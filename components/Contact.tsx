'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

type CurrencyInfo = { currency: string; locale: string; rate: number }

const CURRENCY_MAP: Record<string, CurrencyInfo> = {
  US: { currency: 'USD', locale: 'en-US', rate: 1 },
  CA: { currency: 'CAD', locale: 'en-CA', rate: 1.36 },
  IN: { currency: 'INR', locale: 'en-IN', rate: 83 },
  AU: { currency: 'AUD', locale: 'en-AU', rate: 1.53 },
  AE: { currency: 'AED', locale: 'en-AE', rate: 3.67 },
  GB: { currency: 'GBP', locale: 'en-GB', rate: 0.79 },
  DE: { currency: 'EUR', locale: 'de-DE', rate: 0.92 },
  FR: { currency: 'EUR', locale: 'fr-FR', rate: 0.92 },
  SG: { currency: 'SGD', locale: 'en-SG', rate: 1.34 },
  JP: { currency: 'JPY', locale: 'ja-JP', rate: 149 },
  BR: { currency: 'BRL', locale: 'pt-BR', rate: 4.97 },
  MX: { currency: 'MXN', locale: 'es-MX', rate: 17.15 },
  ZA: { currency: 'ZAR', locale: 'en-ZA', rate: 18.6 },
  NZ: { currency: 'NZD', locale: 'en-NZ', rate: 1.63 },
  PH: { currency: 'PHP', locale: 'en-PH', rate: 56 },
}

function fmt(usd: number, info: CurrencyInfo) {
  return new Intl.NumberFormat(info.locale, {
    style: 'currency',
    currency: info.currency,
    maximumFractionDigits: 0,
  }).format(Math.round(usd * info.rate))
}

function budgetOptions(info: CurrencyInfo) {
  const f = (n: number) => fmt(n, info)
  return [
    { label: `Upto ${f(1000)}`,            value: `Upto ${f(1000)} (${info.currency})` },
    { label: `${f(1000)} – ${f(5000)}`,   value: `${f(1000)} – ${f(5000)} (${info.currency})` },
    { label: `${f(5000)} – ${f(10000)}`,  value: `${f(5000)} – ${f(10000)} (${info.currency})` },
    { label: `${f(10000)} – ${f(25000)}`, value: `${f(10000)} – ${f(25000)} (${info.currency})` },
    { label: `${f(25000)}+`,              value: `${f(25000)}+ (${info.currency})` },
    { label: "Let's discuss",             value: "Let's discuss" },
  ]
}

export default function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fileName, setFileName] = useState('')
  const [currencyInfo, setCurrencyInfo] = useState<CurrencyInfo>(CURRENCY_MAP.US)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => {
        const info = CURRENCY_MAP[data.country_code as string]
        if (info) setCurrencyInfo(info)
      })
      .catch(() => {})
  }, [])

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
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div className="reveal-text">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-8">
              Got a project?<br />Let&apos;s talk.
            </h2>
            <p className="text-mist leading-relaxed mb-10 max-w-sm text-sm">
              Available for freelance work and open to interesting full-time roles.
              I read everything and reply within 24 hours.
            </p>

            <div className="flex flex-col gap-5 mb-12">
              <div>
                <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Phone / WhatsApp</p>
                <a
                  href="tel:+919042972156"
                  className="group inline-flex items-end gap-2 text-base md:text-lg font-bold text-ink hover:text-accent transition-colors"
                >
                  +91 90429 72156
                  <span className="text-accent group-hover:text-forest transition-colors text-xl leading-none mb-0.5">→</span>
                </a>
              </div>
              <div>
                <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Personal</p>
                <a
                  href="mailto:mailtoabineshselva@gmail.com"
                  className="group inline-flex items-end gap-2 text-base md:text-lg font-bold text-ink hover:text-accent transition-colors break-all"
                >
                  mailtoabineshselva@gmail.com
                  <span className="text-accent group-hover:text-forest transition-colors text-xl leading-none mb-0.5">→</span>
                </a>
              </div>
              <div>
                <p className="text-xs font-mono text-mist uppercase tracking-widest mb-2">Gradiolex · Project enquiries</p>
                <a
                  href="mailto:gradiolex@gmail.com"
                  className="group inline-flex items-end gap-2 text-base md:text-lg font-bold text-ink hover:text-accent transition-colors break-all"
                >
                  gradiolex@gmail.com
                  <span className="text-accent group-hover:text-forest transition-colors text-xl leading-none mb-0.5">→</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-8">
              <a href="https://linkedin.com/in/abineshselvarasu/" target="_blank" rel="noopener noreferrer"
                className="text-sm font-mono text-mist hover:text-accent transition-colors">LinkedIn →</a>
              <a href="https://github.com/abineshselvarasu" target="_blank" rel="noopener noreferrer"
                className="text-sm font-mono text-mist hover:text-accent transition-colors">GitHub →</a>
              <a href="https://www.linkedin.com/company/gradiolex" target="_blank" rel="noopener noreferrer"
                className="text-sm font-mono text-mist hover:text-accent transition-colors">Gradiolex →</a>
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
                  <p className="text-mist text-sm">I&apos;ll get back to you within 24 hours.</p>
                </div>
                <button onClick={reset} className="text-sm font-mono text-accent hover:text-forest transition-colors">
                  Send another →
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
                        className="w-full bg-paper border border-rule px-4 py-3 text-ink placeholder-mist/30 focus:outline-none focus:border-accent focus:bg-accent bg-opacity-5 transition-all text-sm font-mono" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Email *</label>
                      <input type="email" id="email" name="email" required placeholder="you@example.com"
                        className="w-full bg-paper border border-rule px-4 py-3 text-ink placeholder-mist/30 focus:outline-none focus:border-accent focus:bg-accent bg-opacity-5 transition-all text-sm font-mono" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Company <span className="normal-case font-normal">(Optional)</span></label>
                      <input type="text" id="company" name="company" placeholder="Company name"
                        className="w-full bg-paper border border-rule px-4 py-3 text-ink placeholder-mist/30 focus:outline-none focus:border-accent focus:bg-accent bg-opacity-5 transition-all text-sm font-mono" />
                    </div>
                    <div>
                      <label htmlFor="project_type" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Project Type *</label>
                      <div className="relative">
                        <select id="project_type" name="project_type" required
                          className="w-full appearance-none bg-paper border border-rule px-4 py-3 text-ink focus:outline-none focus:border-accent focus:bg-accent bg-opacity-5 transition-all text-sm font-mono cursor-pointer">
                          <option value="" disabled>Select type...</option>
                          <option value="WordPress Development">WordPress Development</option>
                          <option value="React / Next.js">React / Next.js</option>
                          <option value="Headless CMS">Headless CMS</option>
                          <option value="Technical SEO">Technical SEO</option>
                          <option value="Full Stack Development">Full Stack Development</option>
                          <option value="UI / UX Design">UI / UX Design</option>
                          <option value="Consulting / Advice">Consulting / Advice</option>
                          <option value="Just saying hi">Just saying hi!</option>
                          <option value="Other">Other</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-mist pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">
                        Budget * <span className="text-mist normal-case font-normal">({currencyInfo.currency})</span>
                      </label>
                      <div className="relative">
                        <select id="budget" name="budget" required
                          className="w-full appearance-none bg-paper border border-rule px-4 py-3 text-ink focus:outline-none focus:border-accent transition-all text-sm font-mono cursor-pointer">
                          <option value="" disabled>Select budget...</option>
                          {budgetOptions(currencyInfo).map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-mist pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Timeline *</label>
                      <div className="relative">
                        <select id="timeline" name="timeline" required
                          className="w-full appearance-none bg-paper border border-rule px-4 py-3 text-ink focus:outline-none focus:border-accent transition-all text-sm font-mono cursor-pointer">
                          <option value="" disabled>Select timeline...</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1 – 3 Months">1 – 3 Months</option>
                          <option value="3 – 6 Months">3 – 6 Months</option>
                          <option value="6+ Months">6+ Months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-mist pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={4} placeholder="Tell me about your project..."
                      className="w-full bg-paper border border-rule px-4 py-3 text-ink placeholder-mist/30 focus:outline-none focus:border-accent transition-all resize-none text-sm font-mono" />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist uppercase tracking-wider mb-2">
                      Attachment <span className="text-mist normal-case font-normal">(PDF, DOC, PNG, ZIP · max 5MB)</span>
                    </label>
                    <label htmlFor="file"
                      className="flex items-center justify-center gap-3 p-5 border border-dashed border-rule cursor-pointer hover:border-accent transition-all group">
                      <svg className="w-4 h-4 text-mist group-hover:text-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      {fileName ? (
                        <span className="text-xs text-accent font-mono">📎 {fileName}</span>
                      ) : (
                        <span className="text-mist text-xs font-mono">
                          Drop file or <span className="text-accent group-hover:text-forest transition-colors">browse</span>
                        </span>
                      )}
                      <input type="file" id="file" name="file" className="hidden" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip" onChange={handleFile} />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="w-full py-4 bg-accent text-white font-bold text-sm tracking-wide hover:bg-forest transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      'Send Message →'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-rule flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono text-mist">
          <p>
            © {new Date().getFullYear()} abineshspotlight.online. All rights reserved.
          </p>
          <a href="#hero" className="hover:text-accent transition-colors">Back to top ↑</a>
        </div>
      </div>
    </section>
  )
}
