import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { ProductCatalog } from '@/components/product-catalog'
import { StoneCollection } from '@/components/stone-collection'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Andesite & Terra Stone Collection | NOA Natural Stone',
  description: 'Browse our premium Indonesian andesite flame stone, natural andesite, terra stone, and evergreen stone products. Premium quality natural stone for flooring, wall cladding, and countertops. Available from Malang, serving Surabaya and Indonesia.',
  keywords: ['andesite stone surabaya', 'terra stone supplier', 'natural stone malang', 'batu alam surabaya', 'stone cladding malang', 'flooring stone indonesia'],
  openGraph: {
    title: 'Premium Stone Collection | NOA Natural Stone',
    description: 'Browse our premium Indonesian andesite, terra stone, and evergreen stone products for flooring, wall cladding, and countertops.',
    url: 'https://noanaturalstone.com/stones',
    type: 'website',
    images: [
      {
        url: '/images/OG_Noa.png',
        width: 1200,
        height: 630,
        alt: 'Premium Stone Collection - NOA Natural Stone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Stone Collection | NOA Natural Stone',
    description: 'Browse our premium Indonesian andesite, terra stone, and evergreen stone products.',
    images: ['/images/OG_Noa.png'],
  },
}

export default function StonesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumb />
      
      {/* Page Header */}
      <section className="py-12 mt-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            All Stones & Products
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            Discover our premium Indonesian natural stone collection featuring authentic andesite flame stone, terra stone, and evergreen stone. Perfect for flooring, wall cladding, and luxury design applications.
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <ProductCatalog />

      <Footer />
    </main>
  )
}
