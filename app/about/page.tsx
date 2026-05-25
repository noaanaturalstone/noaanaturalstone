import { Navigation } from '@/components/navigation'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'About Us | NOA Natural Stone',
  description: 'Learn about NOA Natural Stone, a premium Indonesian natural stone manufacturer based in Malang. Founded in 2004, we specialize in black lava stone, andesite, and custom stone products for worldwide export. Serving Surabaya and all of Indonesia.',
  keywords: ['natural stone manufacturer malang', 'indonesian stone supplier malang', 'indonesian stone supplier surabaya', 'batu alam malang', 'batu surabaya', 'stone supplier east java'],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutSection />

      <Footer />
    </main>
  )
}
