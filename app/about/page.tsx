import { Navigation } from '@/components/navigation'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'About Us | NOA Natural Stone',
  description: 'Learn about NOA Natural Stone, a premium Indonesian natural stone manufacturer. Founded in 2004, we specialize in black lava stone, andesite, and custom stone products for worldwide export.',
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
