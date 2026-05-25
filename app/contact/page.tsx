import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contact Us | NOA Natural Stone',
  description: 'Get in touch with NOA Natural Stone in Malang. Contact us for inquiries about our premium Indonesian natural stone products and custom stone projects. Serving Surabaya, East Java, and worldwide.',
  keywords: ['contact natural stone supplier', 'batu supplier surabaya', 'stone company malang', 'contact stone manufacturer indonesia'],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  )
}
