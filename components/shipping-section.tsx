'use client'

import { Globe, Truck, CheckCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function ShippingSection() {
  const internationalMarkets = [
    {
      country: 'China',
      description:
        'Supplying premium andesite, lava stone, pumice stone, and custom natural stone solutions to architects, developers, contractors, distributors, and commercial projects across major cities in China.',
    },
    {
      country: 'Singapore',
      description:
        'Trusted supplier for residential, hospitality, and commercial developments with premium Indonesian natural stone products, custom fabrication, and export-ready solutions.',
    },
    {
      country: 'Malaysia',
      description:
        'Supporting landscaping, architectural, and interior design projects with consistent product quality, stable supply, and reliable international delivery.',
    },
  ]

  const shippingFeatures = [
    {
      icon: Globe,
      title: 'Worldwide Delivery',
      description:
        'Exporting premium Indonesian natural stone products to clients worldwide with professional logistics partners.',
    },
    {
      icon: Truck,
      title: 'Reliable Shipping',
      description:
        'Secure packaging, careful handling, and export-standard logistics ensure every shipment arrives safely.',
    },
    {
      icon: CheckCircle,
      title: 'Tracked Orders',
      description:
        'Complete shipment tracking and transparent updates from production until arrival.',
    },
  ]

  return (
    <section className="bg-background py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Worldwide Shipping & Global Reach
          </h2>

          <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Trusted Indonesian natural stone exporter with worldwide shipping, secure packaging, and reliable international delivery.
          </p>
        </ScrollReveal>

        {/* International Experience */}
        <ScrollReveal animation="fade-up" className="mb-8 sm:mb-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Our International Experience
            </h3>

            <p className="mx-auto max-w-4xl text-muted-foreground leading-8">
              For over 20 years, NOA Natural Stone has supplied premium Indonesian natural stone to projects in China, Singapore, and Malaysia with consistent quality and dependable export services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {internationalMarkets.map((market, index) => (
              <ScrollReveal
                key={market.country}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="rounded-xl border bg-card p-7 h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                  <h4 className="text-2xl font-semibold mb-4">
                    {market.country}
                  </h4>

                  <p className="text-muted-foreground leading-8">
                    {market.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Shipping Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14 sm:mb-16">
          {shippingFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <ScrollReveal
                key={feature.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="rounded-xl border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="flex justify-center mb-5">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-7">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Shipping Gallery */}
        <div className="overflow-hidden rounded-xl border bg-card">

          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">

            <div>
              <img
                src="/images/shipping/shipping_2.jpeg"
                alt="Professional export packaging for Indonesian natural stone products"
                loading="lazy"
                className="aspect-video w-full rounded-lg object-cover"
              />

              <p className="mt-3 text-center text-sm text-muted-foreground">
                Professional export packaging
              </p>
            </div>

            <div>
              <img
                src="/images/shipping/shipping_3.jpeg"
                alt="International natural stone shipping and export logistics"
                loading="lazy"
                className="aspect-video w-full rounded-lg object-cover"
              />

              <p className="mt-3 text-center text-sm text-muted-foreground">
                Worldwide export logistics
              </p>
            </div>

          </div>

          <div className="border-t bg-primary/5 px-6 py-6 md:px-8">
            <h3 className="text-xl font-bold mb-3">
              Shipping to Your Doorstep
            </h3>

            <p className="leading-8 text-muted-foreground">
              Whether your project is located in Asia, Europe, Australia, the
              Middle East, North America, or anywhere around the world, NOA
              Natural Stone provides dependable international shipping with
              professional logistics partners, secure export packaging, and
              complete shipment tracking. Contact us for shipping quotations,
              delivery schedules, container loading details, and custom export
              solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}