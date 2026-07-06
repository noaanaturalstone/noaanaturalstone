import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { PageTransition } from '@/components/page-transition'
import { FAQSchema } from '@/components/faq-schema'
import './globals.css'

export const metadata: Metadata = {
  title: 'NOA Natural Stone | Premium Indonesian Stone Manufacturer & Exporter',
  description: 'NOA Natural Stone: Premium natural stone manufacturer from Indonesia. Specializing in black lava stone, andesite, limestone, and custom stone products for global markets. Direct supplier from Malang, East Java. Serving Surabaya and worldwide.',
  keywords: ['natural stone manufacturer Indonesia', 'Indonesia natural stone supplier', 'lava stone Indonesia', 'andesite stone supplier', 'limestone manufacturer Indonesia', 'natural stone exporter Indonesia', 'black lava stone supplier', 'wall cladding stone Indonesia', 'custom natural stone production', 'natural stone tiles Indonesia', 'batu surabaya', 'batu malang', 'supplier batu surabaya', 'natural stone surabaya', 'stone manufacturer malang', 'natural stone from malang'],
  generator: 'Next.js',
  metadataBase: new URL('https://noanaturalstone.com'),
  alternates: {
    canonical: 'https://noanaturalstone.com',
    languages: {
      'en': 'https://noanaturalstone.com',
      'id': 'https://noanaturalstone.com',
    },
  },
  openGraph: {
    title: 'NOA Natural Stone | Premium Indonesian Stone Manufacturer',
    description: 'Premium natural stone manufacturer exporting black lava stone, andesite, limestone, and custom products worldwide from Indonesia.',
    url: 'https://noanaturalstone.com',
    siteName: 'NOA Natural Stone',
    locale: 'en_US',
    alternateLocale: ['id_ID'],
    images: [
      {
        url: '/images/OG_Noa.png',
        width: 1200,
        height: 630,
        alt: 'NOA Natural Stone - Premium Indonesian Natural Stone Products',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOA Natural Stone | Premium Indonesian Stone Exporter',
    description: 'Premium natural stone products from Indonesia. Black lava stone, andesite, limestone, and custom solutions.',
    images: ['/images/OG_Noa.png'],
    creator: '@noanaturalstone',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.ico', sizes: '32x32' },
      { url: '/favicon-16x16.ico', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.svg',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://noanaturalstone.com',
    name: 'NOA Natural Stone',
    description: 'Premium natural stone manufacturer and exporter from Indonesia specializing in black lava stone, andesite, limestone, and custom stone products',
    image: [
      'https://noanaturalstone.com/images/OG_Noa.png',
      'https://noanaturalstone.com/logos/6.png',
    ],
    url: 'https://noanaturalstone.com',
    telephone: '+6283197188148',
    email: 'noaanaturalstone@gmail.com',
    areaServed: ['ID', 'SG', 'MY', 'TH', 'VN', 'PH', 'JP', 'KR', 'AU', 'US', 'EU'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Natural Stone Supplier',
      addressLocality: 'Malang',
      addressRegion: 'East Java',
      postalCode: '65147',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-7.9797',
      longitude: '112.7338',
    },
    foundingDate: '2004',
    founder: 'NOA Team',
    sameAs: [
      'https://www.facebook.com/noanaturalstone',
      'https://www.instagram.com/noanaturalstone',
    ],
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
    paymentAccepted: ['Cash', 'CreditCard', 'BankTransfer'],
    currenciesAccepted: ['USD', 'IDR'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NOA Natural Stone',
    url: 'https://noanaturalstone.com',
    logo: 'https://noanaturalstone.com/logos/6.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+6283197188148',
      email: 'noaanaturalstone@gmail.com',
    },
    sameAs: [
      'https://www.facebook.com/noanaturalstone',
      'https://www.instagram.com/noanaturalstone',
    ],
  }

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <FAQSchema />
        <main className="pt-20">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
