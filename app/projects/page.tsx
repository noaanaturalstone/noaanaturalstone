import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ProjectsGallery } from '@/components/projects-gallery'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Our Custom Stone Projects | NOA Natural Stone',
  description: 'Explore our custom stone projects and bespoke creations from Malang. We transform Indonesian natural stone into unique architectural and decorative pieces tailored to your vision. Serving clients in Surabaya and beyond.',
  keywords: ['custom stone projects malang', 'stone projects surabaya', 'bespoke stone creation indonesia', 'architectural stone malang', 'decorative stone surabaya'],
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
