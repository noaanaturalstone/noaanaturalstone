import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { PageTransition } from '@/components/page-transition'
import './globals.css'

export const metadata: Metadata = {
  title: 'NOA Natural Stone | Premium Indonesian Stone Manufacturer & Exporter',
  description: 'NOA Natural Stone: Premium natural stone manufacturer from Indonesia. Specializing in black lava stone, andesite, limestone, and custom stone products for global markets. Direct supplier from Malang, East Java. Serving Surabaya and nationwide.',
  keywords: ['natural stone manufacturer Indonesia', 'Indonesia natural stone supplier', 'lava stone Indonesia', 'andesite stone supplier', 'limestone manufacturer Indonesia', 'natural stone exporter Indonesia', 'black lava stone supplier', 'wall cladding stone Indonesia', 'custom natural stone production', 'natural stone tiles Indonesia', 'batu surabaya', 'batu malang', 'supplier batu surabaya', 'natural stone surabaya'],
  generator: 'v0.app',
  metadataBase: new URL('https://noanaturalstone.com'),
  alternates: {
    canonical: 'https://noanaturalstone.com',
  },
  openGraph: {
    title: 'NOA Natural Stone | Premium Indonesian Stone Manufacturer',
    description: 'Premium natural stone manufacturer exporting black lava stone, andesite, limestone, and custom products worldwide from Indonesia.',
    url: 'https://noanaturalstone.com',
    siteName: 'NOA Natural Stone',
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
  },
  robots: {
    index: true,
    follow: true,
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NOA Natural Stone',
    description: 'Premium natural stone manufacturer and exporter from Indonesia specializing in black lava stone, andesite, limestone, and custom stone products',
    image: 'https://noanaturalstone.com/images/OG_Noa.png',
    url: 'https://noanaturalstone.com',
    telephone: '+6283197188148',
    email: 'olivia@noanaturalstone.com',
    areaServed: 'Worldwide',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Natural Stone Supplier',
      addressLocality: 'Malang',
      addressRegion: 'East Java',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-7.9797',
      longitude: '112.7338',
    },
    foundingDate: '2004',
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
  }

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className="font-sans antialiased">
        <PageTransition>
          {children}
        </PageTransition>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
