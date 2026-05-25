'use client'

import { Globe, Truck, CheckCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function ShippingSection() {
  const shippingFeatures = [
    {
      icon: Globe,
      title: 'Worldwide Delivery',
      description: 'We ship premium Indonesian natural stone to every country globally',
    },
    {
      icon: Truck,
      title: 'Reliable Shipping',
      description: 'Professional handling and secure packaging ensures your stone arrives in perfect condition',
    },
    {
      icon: CheckCircle,
      title: 'Tracked Orders',
      description: 'Full transparency with shipping tracking and real-time updates on your orders',
    },
  ]

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Worldwide Shipping & Global Reach
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            NOA Natural Stone delivers premium Indonesian stone products to clients across the globe. 
            Experience reliable international shipping with professional handling and complete tracking.
          </p>
        </ScrollReveal>

        {/* Shipping Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {shippingFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={feature.title} animation="fade-up" delay={index * 100}>
                <div
                  className="bg-card border border-border rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition hover-lift smooth-transition"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </div>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  {feature.description}
                </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Shipping Gallery */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8">
            <div className="hover-scale">
              <img
                src="/images/shipping/shipping_2.jpeg"
                alt="Professional stone packaging and shipping process"
                loading="lazy"
                className="w-full aspect-video object-cover rounded-lg transition duration-500"
              />
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 text-center">
                Professional packaging & handling
              </p>
            </div>
            <div className="hover-scale">
              <img
                src="/images/shipping/shipping_3.jpeg"
                alt="Global stone delivery network worldwide"
                loading="lazy"
                className="w-full aspect-video object-cover rounded-lg transition duration-500"
              />
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 text-center">
                International delivery network
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 border-t border-border px-4 sm:px-8 py-4 sm:py-6">
            <h3 className="font-bold text-foreground mb-2 sm:mb-3 text-base sm:text-lg">Shipping to Your Doorstep</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Whether you're in Southeast Asia, Europe, America, or anywhere else in the world, 
              NOA Natural Stone can deliver your premium stone products with professional logistics partners. 
              Contact us for shipping quotes, delivery timelines, and custom packaging options for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
