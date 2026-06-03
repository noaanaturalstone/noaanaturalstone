'use client'

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

export function ContactSection() {
  return (
    <section className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team. We're ready to help with your natural stone inquiries and custom projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {/* Location */}
          <ScrollReveal delay={0}>
            <div className="bg-background rounded-lg border border-border p-8 hover:border-primary/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Malang<br />
                    East Java, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Phone */}
          <ScrollReveal delay={100}>
            <div className="bg-background rounded-lg border border-border p-8 hover:border-primary/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <a
                    href="tel:+6283197188148"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    +62 878-6671-4970
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* WhatsApp */}
          <ScrollReveal delay={150}>
            <div className="bg-background rounded-lg border border-border p-8 hover:border-primary/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/6287866714970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    +62 878-6671-4970
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Email */}
          <ScrollReveal delay={250}>
            <div className="bg-background rounded-lg border border-border p-8 hover:border-primary/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:olivia@noanaturalstone.com"
                    className="text-muted-foreground hover:text-primary transition break-all"
                  >
                    olivia@noanaturalstone.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Map or Additional Info */}
        <ScrollReveal>
          <div className="bg-background rounded-lg border border-border p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Whether you're looking for bulk stone orders, custom stone products, or have questions about our premium natural stone offerings, our team is here to assist. Contact us today to discuss your project requirements.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Hours of Operation:</strong><br />
                Monday - Friday: 00:00 AM - 00:00 PM WIB<br />
                Saturday & Sunday: By appointment
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
