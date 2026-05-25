import { Navigation } from '@/components/navigation'
import { ProductCatalog } from '@/components/product-catalog'
import { StoneCollection } from '@/components/stone-collection'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'All Stones & Products | NOA Natural Stone',
  description: 'Browse our complete collection of premium Indonesian natural stones including black lava, andesite, limestone, and custom stone products.',
}

export default function StonesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            All Stones & Products
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            Discover our complete range of premium Indonesian natural stone products. From classic black lava to versatile andesite, find the perfect stone for your project.
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <ProductCatalog />

      <Footer />
    </main>
  )
}
