import { Product } from '@/lib/products'
import { Separator } from '@/components/ui/separator'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="space-y-10 sm:space-y-14 lg:space-y-16">

          {/* Available Sizes */}
          <section>
            <h2 className="mb-6 text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Available Sizes
            </h2>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {product.sizes.map(size => (
                <div
                  key={size}
                  className="rounded-lg border bg-card p-3 sm:p-5 transition-colors hover:border-primary"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-primary text-sm sm:text-lg">✓</span>

                    <span className="text-sm sm:text-base font-medium">
                      {size}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Applications */}
          <section>
            <h2 className="mb-6 text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Applications
            </h2>

            <div className="grid gap-3 sm:gap-5 md:grid-cols-2">
              {product.applications.map(application => (
                <div
                  key={application}
                  className="flex items-start gap-3 rounded-lg border bg-card p-4 sm:p-5 transition-colors hover:border-primary"
                >
                  <span className="mt-0.5 text-primary text-sm sm:text-base">
                    ✓
                  </span>

                  <p className="text-sm sm:text-base leading-6 sm:leading-7">
                    {application}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Product Advantages */}
          <section>
            <h2 className="mb-6 text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Product Advantages
            </h2>

            <div className="grid gap-3 sm:gap-5 md:grid-cols-2">
              {product.advantages.map(advantage => (
                <div
                  key={advantage}
                  className="flex items-start gap-3 rounded-lg border bg-card p-4 sm:p-5 transition-colors hover:border-primary"
                >
                  <span className="mt-0.5 text-primary text-sm sm:text-base">
                    ✓
                  </span>

                  <p className="text-sm sm:text-base leading-6 sm:leading-7">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Markets */}
            <section>
                <h2 className="mb-6 text-2xl sm:text-3xl font-serif font-bold text-foreground">
                    Markets Served
                </h2>
                <div className="flex flex-wrap gap-3">
                    {product.markets.map(market => (
                    <div
                        key={market}
                        className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 transition-colors hover:border-primary">
                        <span className="text-primary text-sm">
                        ✓
                        </span>
                        <span className="text-sm font-medium">
                        {market}
                        </span>
                    </div>
                    ))}
                </div>
            </section>
        </div>
      </div>
    </section>
  )
}