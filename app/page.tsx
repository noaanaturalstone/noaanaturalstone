import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { StoneCollection } from '@/components/stone-collection'
import { ShippingSection } from '@/components/shipping-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PortfolioGallery />
      <StoneCollection />
      <ShippingSection />
      <Footer />
    </main>
  )
}
