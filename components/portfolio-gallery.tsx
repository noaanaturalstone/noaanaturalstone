'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Natural Stone Installation Project',
    location: 'Recent Project',
    description: 'Premium Indonesian stone installation showcasing our craftsmanship and quality work',
    image: '/images/ourwork/ourwork_1.jpeg',
    category: 'residential',
  },
  {
    id: 2,
    title: 'Luxury Bathtub Installation',
    location: 'Premium Residential',
    description: 'Custom stone bathtub installation featuring our premium natural stone collection',
    image: '/images/ourwork/ourwork_bathtub_1.jpeg',
    category: 'residential',
  },
  {
    id: 3,
    title: 'Stone Bathtub & Spa Feature',
    location: 'Luxury Spa Project',
    description: 'High-end stone bathtub installation for luxury spa and wellness center applications',
    image: '/images/ourwork/ourwork_bathtub_2.jpeg',
    category: 'commercial',
  },
  {
    id: 4,
    title: 'Custom Stone Decorative Lobby Chair',
    location: 'Custom Production',
    description: 'Bespoke stone decorative seating piece for luxury lobby installations',
    image: '/images/custom/custom_stone_decorative_lobby_chair.png',
    category: 'commercial',
  },
  {
    id: 5,
    title: 'Custom Stone Garden Lamp',
    location: 'Landscape Feature',
    description: 'Artistic custom stone lamp for premium outdoor landscaping and garden design',
    image: '/images/custom/custom_stone_garden_lamp.jpeg',
    category: 'residential',
  },
  {
    id: 6,
    title: 'Custom Stone Decorative Stool',
    location: 'Interior Design',
    description: 'Handcrafted stone stool showcasing our custom production capabilities',
    image: '/images/custom/custom_stone_stool.png',
    category: 'residential',
  },
]

export function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null)

  return (
    <section id="portfolio" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Completed Projects & Installations
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Global showcase of NOA Natural Stone installations featuring premium Indonesian black lava stone, andesite, limestone, and custom stone products in residential and commercial projects.
          </p>
        </ScrollReveal>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div key={item.id}>
              <ScrollReveal animation="fade-up" delay={index * 80}>
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer overflow-hidden rounded-lg hover-lift smooth-transition"
                >
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <img
                      src={item.image}
                      alt={`${item.title} - NOA Natural Stone project in ${item.location}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500 smooth-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <div className="pt-3 sm:pt-4">
                <h3 className="text-base sm:text-lg font-serif font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full">
            <div className="bg-background rounded-lg overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={`${selectedImage.title} - ${selectedImage.description}`}
                  className="w-full h-auto max-h-96 sm:max-h-96 md:max-h-[500px] object-cover"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition z-10"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-card border-t border-border">
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  {selectedImage.location}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
