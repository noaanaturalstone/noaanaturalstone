'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

const STONE_COLLECTION = [
  {
    id: 1,
    title: 'Premium Stone Collection 1',
    image: '/images/stone_collection_1.jpeg',
    description: 'Part of our premium natural stone collection',
  },
  {
    id: 2,
    title: 'Premium Stone Collection 2',
    image: '/images/stone_collection_2.jpeg',
    description: 'Premium quality Indonesian stone',
  },
  {
    id: 3,
    title: 'Premium Stone Collection 3',
    image: '/images/stone_collection_3.jpeg',
    description: 'Featured stone collection piece',
  },
  {
    id: 4,
    title: 'Premium Stone Collection 4',
    image: '/images/stone_collection_4.jpeg',
    description: 'Exclusive natural stone variant',
  },
]

export function StoneCollection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedStone, setSelectedStone] = useState<typeof STONE_COLLECTION[0] | null>(null)

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Our Stone Collection
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Explore our diverse range of premium Indonesian natural stone varieties. 
            Each piece represents our commitment to quality and authentic craftsmanship.
          </p>
        </ScrollReveal>

        {/* Stone Collection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {STONE_COLLECTION.map((stone, index) => (
            <div key={stone.id}>
              <ScrollReveal animation="fade-up" delay={index * 60}>
                <div
                  onClick={() => setSelectedStone(stone)}
                  onMouseEnter={() => setHoveredId(stone.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group cursor-pointer overflow-hidden rounded-lg hover-lift smooth-transition"
                >
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <img
                      src={stone.image}
                      alt={stone.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500 smooth-transform"
                    />
                    {/* Overlay on hover */}
                    {hoveredId === stone.id && (
                      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center animate-fade-in-up">
                        <h3 className="text-white font-serif font-bold text-xs sm:text-sm md:text-base text-center px-3 mb-1 sm:mb-2">
                          {stone.title}
                        </h3>
                        <p className="text-white/80 text-xs text-center px-3">
                          {stone.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Static title below image */}
              <div className="pt-2 sm:pt-3">
                <p className="text-xs sm:text-sm font-medium text-foreground text-center line-clamp-2">
                  {stone.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={240} className="mt-8 sm:mt-10 flex justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift smooth-transition">
            <Link href="/stones">
              See Our Collection
            </Link>
          </Button>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      {selectedStone && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full">
            <div className="bg-background rounded-lg overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedStone.image}
                  alt={selectedStone.title}
                  className="w-full h-auto max-h-96 sm:max-h-96 md:max-h-[500px] object-cover"
                />
                <button
                  onClick={() => setSelectedStone(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition z-10"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-card border-t border-border">
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-foreground mb-2">
                  {selectedStone.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {selectedStone.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
