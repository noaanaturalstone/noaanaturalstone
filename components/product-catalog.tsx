'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PRODUCTS } from '@/lib/products'

const CATEGORIES = [
  'all',
  'countertops',
  'flooring',
  'wall-cladding',
  'production-stone',
]

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(product => product.category === selectedCategory)

  return (
    <section
      id="products"
      className="bg-card py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Premium Indonesian Natural Stone Products
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of authentic Indonesian natural stones
            including andesite, terra stone, evergreen stone, marble, and
            pumice stone for residential, commercial, and industrial
            applications.
          </p>
        </ScrollReveal>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : ''
              }
            >
              {category
                .replace('-', ' ')
                .replace(/\b\w/g, c => c.toUpperCase())}
            </Button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((product, index) => (

            <ScrollReveal
              key={product.id}
              animation="fade-up"
              delay={index * 100}
            >

              <Link
                href={`/stones/${product.slug}`}
                className="group block h-full"
              >

                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                  {/* Image */}
                  <div className="aspect-square overflow-hidden bg-muted">

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                  </div>

                  {/* Content */}
                  <CardContent className="p-6">

                    <p className="text-xs uppercase tracking-wider text-primary font-medium mb-2">

                      {product.category.replace('-', ' ')}

                    </p>

                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">

                      {product.name}

                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">

                      {product.shortDescription}

                    </p>

                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">

                      Learn More →

                    </span>

                  </CardContent>

                </Card>

              </Link>

            </ScrollReveal>

          ))}

        </div>

      </div>
    </section>
  )
}