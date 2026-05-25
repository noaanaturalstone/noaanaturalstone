import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">NOA Natural Stone</h3>
            <p className="text-background/80 text-xs sm:text-sm leading-relaxed">
              Indonesia&apos;s premier natural stone manufacturer and exporter. Premium black lava stone, andesite, limestone, and custom products for global markets.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-background text-sm">Stone Products</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="/stones" className="text-background/80 hover:text-background transition">Natural Stone Tiles</a></li>
              <li><a href="/stones" className="text-background/80 hover:text-background transition">Wall Cladding Stone</a></li>
              <li><a href="/projects" className="text-background/80 hover:text-background transition">Custom Stone Products</a></li>
              <li><a href="/contact" className="text-background/80 hover:text-background transition">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-background text-sm">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="/about" className="text-background/80 hover:text-background transition">About Us</a></li>
              <li><a href="/stones" className="text-background/80 hover:text-background transition">Our Products</a></li>
              <li><a href="/contact" className="text-background/80 hover:text-background transition">Contact</a></li>
              <li><a href="/" className="text-background/80 hover:text-background transition">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-background text-sm">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p className="text-background/80">Malang, East Java, Indonesia</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+6283197188148" className="text-background/80 hover:text-background transition">+62 831-9718-8148</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:olivia@noanaturalstone.com" className="text-background/80 hover:text-background transition">olivia@noanaturalstone.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-background/80">
            © 2004-2026 NOA Natural Stone. Premium Indonesian natural stone manufacturer and exporter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
