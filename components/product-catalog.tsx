'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/scroll-reveal'

const PRODUCTS = [
  {
    id: 1,
    name: 'Black Lava 10x10',
    category: 'flooring',
    description: 'Premium black lava stone tiles in 10x10 format. Authentic volcanic stone from Indonesia perfect for residential and commercial flooring applications',
    image: '/images/product/black_lava_10x10.jpeg',
  },
  {
    id: 2,
    name: 'Black Lava 10x20',
    category: 'flooring',
    description: 'Professional grade black lava stone pavers in 10x20 size. Ideal for large-scale projects, walkways, and contemporary design installations',
    image: '/images/product/black_lava_10x20.jpeg',
  },
  {
    id: 3,
    name: 'Evergreen Stone',
    category: 'flooring',
    description: 'Natural evergreen stone collection from Indonesia. Premium quality stone tiles for interior and exterior applications with unique coloring',
    image: '/images/product/evergreen_stone.jpeg',
  },
  {
    id: 4,
    name: 'Terra Stone',
    category: 'wall-cladding',
    description: 'Premium terra stone from Indonesia. Perfect for wall cladding, feature walls and architectural accent applications',
    image: '/images/product/terra_stone.jpeg',
  },
  {
    id: 5,
    name: 'Textured Black Lava',
    category: 'countertops',
    description: 'Textured black lava stone with natural surface finish. Custom production for luxury countertops, accent walls, and bespoke stone solutions',
    image: '/images/product/textured_black_lava.jpeg',
  },
  {
    id: 6,
    name: 'Textured Terra',
    category: 'wall-cladding',
    description: 'Premium textured terra stone for luxury interior design. Indonesian natural stone cladding with distinctive surface texture for modern homes',
    image: '/images/product/textured_terra.jpeg',
  },
]

const CATEGORIES = ['all', 'countertops', 'flooring', 'wall-cladding']

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory)

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Premium Indonesian Natural Stone Products
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Explore our collection of black lava stone, andesite, limestone, and custom stone products from Indonesia. Premium quality natural stone tiles, wall cladding, and custom solutions for worldwide export.
          </p>
        </ScrollReveal>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              className={`text-xs sm:text-sm ${selectedCategory === category ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'hover-lift'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </Button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id}>
              <ScrollReveal animation="fade-up" delay={index * 100}>
                <div className="group overflow-hidden rounded-lg hover:shadow-lg transition hover-lift smooth-transition">
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <img
                      src={product.image}
                      alt={`${product.name} - Premium Indonesian natural stone from NOA`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500 smooth-transform"
                    />
                  </div>
                </div>
              </ScrollReveal>
              <Card className="border-t-0 rounded-t-none hover:shadow-lg transition smooth-transition">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-primary font-medium mb-2 uppercase tracking-wide">
                    {product.category.replace('-', ' ')}
                  </p>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
