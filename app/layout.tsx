import type { Metadata } from 'next'
import { Albert_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://abineshspotlight.online'),
  title: 'Abinesh S — Full Stack Engineer & Senior WordPress Developer',
  description:
    'Full Stack Engineer with 3+ years delivering production-grade platforms for global clients — React, Next.js, WordPress, Headless CMS, PHP, Flutter, and AI/LLM integration.',
  keywords: [
    'Full Stack Engineer',
    'Senior WordPress Developer',
    'Next.js Developer',
    'React Developer',
    'Flutter Developer',
    'Headless CMS',
    'Technical SEO',
    'AI Integration',
    'Abinesh Selvarasu',
    'Portfolio',
  ],
  authors: [{ name: 'Abinesh S', url: 'https://abineshspotlight.online' }],
  creator: 'Abinesh S',
  alternates: {
    canonical: 'https://abineshspotlight.online',
  },
  openGraph: {
    title: 'Abinesh S — Full Stack Engineer & Senior WordPress Developer',
    description:
      'Delivering production-grade platforms for Unbounce, OpenGovernmentPartnership, ElasticPath, Premier Boxing Champions and more.',
    url: 'https://abineshspotlight.online',
    siteName: 'Abinesh S — Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abinesh S — Full Stack Engineer & Senior WordPress Developer',
    description:
      'Delivering production-grade platforms for Unbounce, OpenGovernmentPartnership, ElasticPath, Premier Boxing Champions and more.',
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
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${albertSans.variable} scroll-smooth`}>
      <body className="font-sans bg-canvas text-ink antialiased">
        {children}
        <Analytics />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P18SXZK5DY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P18SXZK5DY');
          `}
        </Script>
      </body>
    </html>
  )
}
