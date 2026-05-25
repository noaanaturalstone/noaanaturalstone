'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const CUSTOM_PROJECTS = [
  {
    id: 1,
    title: 'Custom Stone Decorative Lobby Chair',
    category: 'Furniture',
    description: 'Bespoke stone seating piece crafted for luxury lobby installations. This custom design showcases how natural Indonesian stone can be sculpted into functional art.',
    image: '/images/custom/custom_stone_decorative_lobby_chair.png',
    details: 'Custom cut and polished Indonesian stone. Hand-finished surface. Unique design tailored to client specifications.',
  },
  {
    id: 2,
    title: 'Custom Stone Garden Lamp',
    category: 'Outdoor Features',
    description: 'Artistic custom stone lamp designed for premium outdoor landscaping. Our artisans carved this piece to create an ambient lighting feature from solid stone.',
    image: '/images/custom/custom_stone_garden_lamp.jpeg',
    details: 'Intricately carved from premium Indonesian natural stone. Weather-resistant finish. Custom light integration.',
  },
  {
    id: 3,
    title: 'Custom Stone Decorative Stool',
    category: 'Furniture',
    description: 'Handcrafted stone stool showcasing our ability to shape and form natural stone into unique interior design pieces. Each piece is individually customized.',
    image: '/images/custom/custom_stone_stool.png',
    details: 'Hand-shaped Indonesian stone. Polished finish. Custom dimensions available. Perfect for interior design applications.',
  },
  {
    id: 4,
    title: 'Premium Luxury Bathtub',
    category: 'Residential',
    description: 'Custom carved stone bathtub installation. This bespoke piece demonstrates our mastery in transforming raw stone into luxurious functional art for high-end residences.',
    image: '/images/ourwork/ourwork_bathtub_1.jpeg',
    details: 'Custom carved from premium Indonesian stone. Waterproofed finish. Tailored to client specifications and space requirements.',
  },
]

export function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof CUSTOM_PROJECTS[0] | null>(null)

  return (
    <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6">
            Our Custom Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 mb-6">
            Premium Indonesian natural stone transformed into bespoke architectural and decorative pieces. 
            We specialize in custom stone solutions tailored to your unique vision.
          </p>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </ScrollReveal>

        {/* What We Offer */}
        <ScrollReveal animation="fade-up" className="mb-16 sm:mb-20">
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4 sm:mb-6">
              Custom Stone Craftsmanship
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              At NOA Natural Stone, we go beyond standard products. Our skilled artisans can transform premium Indonesian natural stone into custom shapes, sizes, and designs. Whether you need decorative furniture, architectural features, or one-of-a-kind installations, we have the expertise to bring your vision to life.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Each custom project is individually designed and hand-finished to meet your exact specifications and design requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {CUSTOM_PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={index * 100}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg mb-4 bg-muted relative aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 smooth-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-white/90 transition">
                      View Project
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-accent font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal animation="fade-up" delay={400} className="mt-16 sm:mt-20">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Have a Custom Stone Vision?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tell us about your project. Our team can design and create custom stone pieces tailored to your specifications and design aesthetic.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition smooth-transition"
            >
              Request Custom Quote
            </a>
          </div>
        </ScrollReveal>
      </article>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full">
            <div className="bg-background rounded-lg overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-96 sm:max-h-96 md:max-h-[500px] object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition z-10"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-card border-t border-border">
                <p className="text-xs sm:text-sm text-accent font-bold uppercase tracking-wider mb-2">
                  {selectedProject.category}
                </p>
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-foreground mb-3 sm:mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {selectedProject.description}
                </p>
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Project Details
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
