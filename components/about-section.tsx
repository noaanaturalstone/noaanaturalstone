'use client'

import { CheckCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function AboutSection() {
  return (
    <section id="about" className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-card">
      <article className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <ScrollReveal animation="fade-right" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
              About NOA Natural Stone
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Founded in 2004, NOA Natural Stone is a premium Indonesian natural stone manufacturer based in Malang, East Java. We are Indonesia&apos;s trusted natural stone supplier and exporter, collaborating with local stone craftsmen to bring world-class products to global markets. Specializing in black lava stone, andesite, marble, pumice stone, and custom stone products for worldwide distribution.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality and sustainability drives every product. We combine traditional Indonesian stone craftsmanship with modern cutting technology to create premium natural stone tiles, wall cladding, custom mosaics, and bespoke stone solutions. Every piece reflects our dedication to supporting local artisans while delivering excellence to clients worldwide.
            </p>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              {[
                'Premium Indonesian natural stone from certified quarries',
                'Custom fabrication and design services',
                'Worldwide export and reliable shipping',
                'Traditional craftsmanship with modern technology',
                'Competitive pricing for bulk orders',
              ].map((feature, index) => (
                <div key={feature} className="flex items-start gap-2 sm:gap-3 smooth-transition">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right image */}
          <ScrollReveal animation="fade-left">
            <figure className="grid grid-cols-2 gap-2 sm:gap-4">
              <img
                src="/images/product/andesit_flame.jpeg"
                alt="Premium andesite flamed stone collection from Indonesia"
                loading="lazy"
                className="w-full aspect-square object-cover rounded-lg hover-scale smooth-transform"
              />
              <img
                src="/images/stone_collection_2.jpeg"
                alt="Showcasing our diverse range of natural stone products for flooring and cladding"
                loading="lazy"
                className="w-full aspect-square object-cover rounded-lg hover-scale smooth-transform"
              />
              <img
                src="/images/stone_collection_1.jpeg"
                alt="Our stone collection showcase"
                loading="lazy"
                className="w-full aspect-square object-cover rounded-lg hover-scale smooth-transform"
              />
              <img
                src="/images/product/evergreen_stone.jpeg"
                alt="Premium evergreen stone for luxury installations"
                loading="lazy"
                className="w-full aspect-square object-cover rounded-lg hover-scale smooth-transform"
              />
            </figure>
          </ScrollReveal>
        </div>

        {/* International Experience Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 pt-16 sm:pt-20 md:pt-24 border-t border-border/50">
          <ScrollReveal animation="fade-up" className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our International Experience
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              With over two decades of expertise, NOA Natural Stone has successfully served clients across Asia&apos;s most dynamic markets. We pride ourselves on our proven track record of delivering premium natural stone to discerning customers in China, Singapore, and Malaysia.
            </p>

            {/* Markets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
              {[
                {
                  country: 'China',
                  description: 'Supplying premium black lava stone, andesite, and custom marble solutions to leading architects, construction firms, and luxury developers across major cities.',
                },
                {
                  country: 'Singapore',
                  description: 'Trusted partner for high-end residential and commercial projects, providing expertly crafted stone cladding and bespoke stone installations.',
                },
                {
                  country: 'Malaysia',
                  description: 'Supporting Kuala Lumpur and beyond with quality stone products for landscaping, architecture, and premium interior design projects.',
                },
              ].map((market) => (
                <div
                  key={market.country}
                  className="p-5 sm:p-6 rounded-lg bg-muted/30 border border-border/50 hover:border-accent/50 smooth-transition"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{market.country}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{market.description}</p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mt-6 sm:mt-8">
              Our success in these markets is built on reliable partnerships, consistent quality, and a deep understanding of regional preferences. Whether you&apos;re in China, Singapore, Malaysia, or anywhere else in the world, NOA Natural Stone is ready to partner with you on your next project.
            </p>
          </ScrollReveal>
        </div>
      </article>
    </section>
  )
}
