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

const BASE_URL = 'https://abineshspotlight.online'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Senior WordPress Developer & Full Stack Engineer | Abinesh Selvarasu',
    template: '%s | Abinesh Selvarasu',
  },

  description:
    'Senior WordPress Developer & Full Stack Engineer with 3+ years architecting enterprise web platforms for global brands.',

  keywords: [
    'Abinesh Selvarasu',
    'Senior WordPress Engineer',
    'WordPress Developer',
    'Full Stack Developer',
    'Full Stack Engineer',
    'ACF Pro Developer',
    'Gutenberg Blocks Developer',
    'Headless WordPress',
    'WPGraphQL',
    'Craft CMS Developer',
    'Drupal Developer',
    'Technical SEO Expert',
    'Core Web Vitals Optimization',
    'PHP Developer',
    'JavaScript Developer',
    'Next.js Developer',
    'React Developer',
  ],

  authors: [{ name: 'Abinesh Selvarasu', url: BASE_URL }],
  creator: 'Abinesh Selvarasu',
  publisher: 'Abinesh Selvarasu',

  category: 'Technology',

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: 'profile',
    firstName: 'Abinesh',
    lastName: 'Selvarasu',
    username: 'abineshselvarasu',
    gender: 'male',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Abinesh Selvarasu — Senior WordPress Developer & Full Stack Engineer',
    title: 'Senior WordPress Developer & Full Stack Engineer | Abinesh Selvarasu',
    description:
      'Senior WordPress Developer & Full Stack Engineer with 3+ years architecting enterprise web platforms for global brands.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Abinesh Selvarasu — Senior WordPress Developer & Full Stack Engineer',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@abineshselvarasu',
    creator: '@abineshselvarasu',
    title: 'Senior WordPress Developer & Full Stack Engineer | Abinesh Selvarasu',
    description:
      'Senior WordPress Developer & Full Stack Engineer with 3+ years architecting enterprise web platforms for global brands.',
    images: [`${BASE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },

  manifest: '/site.webmanifest',
}

// ── JSON-LD Schemas ───────────────────────────────────────────────────────────

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Abinesh Selvarasu',
  url: BASE_URL,
  email: 'mailtoabineshselva@gmail.com',
  telephone: '+919042972156',
  jobTitle: 'Senior WordPress Developer & Full Stack Engineer',
  description:
    'Senior WordPress Developer and Full Stack Engineer with 3+ years building production-grade web platforms for global enterprise clients.',
  knowsAbout: [
    'WordPress Development',
    'ACF Pro',
    'Gutenberg Blocks',
    'Headless WordPress',
    'Craft CMS',
    'Drupal',
    'PHP',
    'JavaScript',
    'Technical SEO',
    'Core Web Vitals',
    'Next.js',
    'Tailwind CSS',
  ],
  sameAs: [
    'https://linkedin.com/in/abineshselvarasu',
    'https://github.com/abineshselvarasu',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Vidyaa Vikas College of Engineering',
    url: 'https://www.vvcengg.com',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Independent / Freelance',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Abinesh Selvarasu — Portfolio',
  description:
    'Portfolio of Abinesh Selvarasu — Senior WordPress Developer & Full Stack Engineer based in Tamil Nadu, India.',
  publisher: { '@id': `${BASE_URL}/#person` },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: 'Senior WordPress Developer & Full Stack Engineer | Abinesh Selvarasu',
  description:
    'Personal portfolio of Abinesh Selvarasu — Senior WordPress Developer & Full Stack Engineer. Showcases enterprise projects, technical skills, career journey, and contact information.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#person` },
  inLanguage: 'en-US',
  dateModified: new Date().toISOString(),
  breadcrumb: { '@id': `${BASE_URL}/#breadcrumb` },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/#breadcrumb`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${BASE_URL}/#hero`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About & Journey',
      item: `${BASE_URL}/#about`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Skills',
      item: `${BASE_URL}/#skills`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Projects',
      item: `${BASE_URL}/#projects`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Writing',
      item: `${BASE_URL}/#blog`,
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Contact',
      item: `${BASE_URL}/#contact`,
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${albertSans.variable} scroll-smooth`}>
      <body className="font-sans bg-canvas text-ink antialiased">
        {children}
        <Analytics />

        {/* JSON-LD Structured Data */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-webpage"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Google Analytics */}
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
