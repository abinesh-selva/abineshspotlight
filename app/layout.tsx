import type { Metadata } from 'next'
import { Syne, Outfit } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abinesh S — Full Stack Engineer & WordPress Developer',
  description:
    'Full Stack Engineer and Senior WordPress Developer with 3+ years delivering production-grade websites for global clients. React, Next.js, PHP, Flutter, AI/LLM integration.',
  openGraph: {
    title: 'Abinesh S — Full Stack Engineer & WordPress Developer',
    description: 'Delivering production-grade websites for Unbounce, OGP, ElasticPath, PBC, and more.',
    url: 'https://abineshspotlight.online',
    siteName: 'Abinesh S',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
