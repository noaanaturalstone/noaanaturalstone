import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { PRODUCTS, Product } from '@/lib/products'

interface RelatedProductsProps {
  currentProduct: Product
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const relatedProducts = PRODUCTS
    .filter(
      product =>
        product.slug !== currentProduct.slug &&
        product.category === currentProduct.category
    )
    .slice(0, 3)

  const products =
    relatedProducts.length > 0
      ? relatedProducts
      : PRODUCTS.filter(product => product.slug !== currentProduct.slug).slice(0, 3)

  return (
    <section className="bg-muted/30 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground sm:text-3xl lg:text-4xl">
            Related Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Explore more premium Indonesian natural stone products suitable for
            architectural, landscaping, industrial, and commercial applications.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map(product => (
            <Link
              key={product.id}
              href={`/stones/${product.slug}`}
              className="group"
            >
              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-5">

                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                    {product.category.replace('-', ' ')}
                  </p>

                  <h3 className="text-xl font-serif font-bold transition-colors group-hover:text-primary">
                    {product.name}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {product.shortDescription}
                  </p>

                  <span className="mt-5 inline-flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                    Learn More →
                  </span>

                </CardContent>

              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}