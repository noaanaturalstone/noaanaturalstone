import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ProjectsGallery } from '@/components/projects-gallery'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Our Custom Stone Projects | NOA Natural Stone',
  description: 'Explore our custom stone projects and bespoke creations from Malang. We transform Indonesian natural stone into unique architectural and decorative pieces tailored to your vision. Serving clients in Surabaya and beyond.',
  keywords: ['custom stone projects malang', 'stone projects surabaya', 'bespoke stone creation indonesia', 'architectural stone malang', 'decorative stone surabaya'],
  openGraph: {
    title: 'Our Custom Stone Projects | NOA Natural Stone',
    description: 'Explore our custom stone projects and bespoke creations. We create unique architectural and decorative pieces tailored to your vision.',
    url: 'https://noanaturalstone.com/projects',
    type: 'website',
    images: [
      {
        url: '/images/OG_Noa.png',
        width: 1200,
        height: 630,
        alt: 'Custom Stone Projects - NOA Natural Stone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Custom Stone Projects | NOA Natural Stone',
    description: 'Explore our custom stone projects and bespoke creations from Indonesia.',
    images: ['/images/OG_Noa.png'],
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProjectsGallery />
      <Footer />
    </main>
  )
}
