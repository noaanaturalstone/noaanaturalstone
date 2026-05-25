import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About Us | NOA Natural Stone',
  description: 'Learn about NOA Natural Stone, a premium Indonesian natural stone manufacturer based in Malang. Founded in 2004, we specialize in black lava stone, andesite, and custom stone products for worldwide export. Serving Surabaya and all of Indonesia.',
  keywords: ['natural stone manufacturer malang', 'indonesian stone supplier malang', 'indonesian stone supplier surabaya', 'batu alam malang', 'batu surabaya', 'stone supplier east java'],
  openGraph: {
    title: 'About Us | NOA Natural Stone',
    description: 'Learn about NOA Natural Stone, a premium Indonesian natural stone manufacturer based in Malang. Founded in 2004, we specialize in black lava stone, andesite, and custom stone products.',
    url: 'https://noanaturalstone.com/about',
    type: 'website',
    images: [
      {
        url: '/images/OG_Noa.png',
        width: 1200,
        height: 630,
        alt: 'About NOA Natural Stone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | NOA Natural Stone',
    description: 'Learn about NOA Natural Stone - Premium Indonesian natural stone manufacturer since 2004.',
    images: ['/images/OG_Noa.png'],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumb />
      <AboutSection />

      <Footer />
    </main>
  )
}
