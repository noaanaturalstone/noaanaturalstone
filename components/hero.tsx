import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden animate-page-in">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/stone_collection_1.jpeg"
          // alt="Premium Indonesian natural stone background"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
      </div>

      {/* Background accent overlays */}
      <div className="absolute inset-0 opacity-50 z-0">
        <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-4 sm:mb-6 text-balance animate-fade-in-down">
            Premium Indonesian Natural Stone Manufacturer
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            NOA Natural Stone is Indonesia&apos;s leading exporter of black lava stone, andesite, limestone, and custom natural stone products from Malang. We combine traditional craftsmanship with modern technology to deliver premium stone solutions for residential, commercial, and hospitality projects worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in animate-delay-200">
            <Link href="/stones">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift smooth-transition">
                Explore All Stones
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
