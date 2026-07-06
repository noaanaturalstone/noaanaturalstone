import { Product } from '@/lib/products'
import { Button } from '@/components/ui/button'

interface ProductHeroProps {
  product: Product
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="py-10 sm:py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Image */}
          <div className="overflow-hidden rounded-xl border bg-muted aspect-4/3 lg:aspect-square">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
            </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary uppercase tracking-[0.25em] text-sm font-semibold mb-3">
              {product.category.replace('-', ' ')}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              {product.name}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground font-medium">
              {product.subtitle}
            </p>
            <p className="mt-6 max-w-prose text-sm sm:text-base leading-8 text-muted-foreground">
              {product.introduction}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button 
                size="lg"
                className="w-full justify-center sm:w-auto">
                Request Quote
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full justify-center sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}