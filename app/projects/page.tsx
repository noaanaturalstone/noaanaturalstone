import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ProjectsGallery } from '@/components/projects-gallery'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Our Custom Stone Projects | NOA Natural Stone',
  description: 'Explore our custom stone projects and bespoke creations. We transform Indonesian natural stone into unique architectural and decorative pieces tailored to your vision.',
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
