import type { Metadata } from 'next'
import { Syne, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  metadataBase: new URL('https://abineshspotlight.online'),
  title: 'Abinesh S — Full Stack Engineer & WordPress Developer',
  description:
    'Full Stack Engineer and Senior WordPress Developer with 3+ years delivering production-grade websites for global clients. React, Next.js, PHP, Flutter, AI/LLM integration.',
  keywords: [
    'Full Stack Engineer',
    'WordPress Developer',
    'Next.js Developer',
    'React Developer',
    'Flutter Developer',
    'AI Integration',
    'Abinesh',
    'Portfolio',
  ],
  authors: [{ name: 'Abinesh S', url: 'https://abineshspotlight.online' }],
  creator: 'Abinesh S',
  alternates: {
    canonical: 'https://abineshspotlight.online',
  },
  openGraph: {
    title: 'Abinesh S — Full Stack Engineer & WordPress Developer',
    description: 'Delivering production-grade websites for Unbounce, OGP, ElasticPath, PBC, and more.',
    url: 'https://abineshspotlight.online',
    siteName: 'Abinesh S',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abinesh S — Full Stack Engineer & WordPress Developer',
    description: 'Delivering production-grade websites for Unbounce, OGP, ElasticPath, PBC, and more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-canvas text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
