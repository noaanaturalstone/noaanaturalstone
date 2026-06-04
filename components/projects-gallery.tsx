'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

type Project = {
  id: number
  title: string
  category: string
  description: string
  image: string
  details: string
  video?: string
}

type ProjectMedia = {
  type: 'image' | 'video'
  src: string
  alt?: string
}

const CUSTOM_PROJECTS: Project[] = [
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
  {
    id: 5,
    title: 'Premium Stone Pool Floor',
    category: 'Outdoor Features',
    description: 'Elegant custom stone pool floor installation. Showcasing our expertise in creating sophisticated outdoor water features with premium Indonesian natural stone, offering both luxury and durability.',
    image: '/images/ourwork/ourwork_stone_pool_floor.jpeg',
    details: 'Premium Indonesian stone with slip-resistant finish. Custom cut and polished. Water-resistant coating applied. Durable and elegant for luxury pool installations.',
  },
  {
    id: 6,
    title: 'Marmer',
    category: 'Interior',
    description: 'Custom marmer project with premium natural stone finish for elegant interior applications.',
    image: '/images/ourwork/ourwork_marmer.jpeg',
    video: '/images/ourwork/ourwork_marmer_video.mp4',
    details: 'Includes project photo and video preview. Swipe in the modal to switch from photo to video.',
  },
]

export function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const mediaScrollRef = useRef<HTMLDivElement | null>(null)

  const selectedProjectMedia = useMemo<ProjectMedia[]>(() => {
    if (!selectedProject) {
      return []
    }

    const media: ProjectMedia[] = [
      {
        type: 'image',
        src: selectedProject.image,
        alt: selectedProject.title,
      },
    ]

    if (selectedProject.video) {
      media.push({
        type: 'video',
        src: selectedProject.video,
      })
    }

    return media
  }, [selectedProject])

  useEffect(() => {
    setCurrentMediaIndex(0)
    if (mediaScrollRef.current) {
      mediaScrollRef.current.scrollTo({ left: 0, behavior: 'auto' })
    }
  }, [selectedProject])

  const goToMedia = (index: number) => {
    if (!mediaScrollRef.current || selectedProjectMedia.length === 0) {
      return
    }

    const safeIndex = Math.max(0, Math.min(index, selectedProjectMedia.length - 1))
    const containerWidth = mediaScrollRef.current.clientWidth

    mediaScrollRef.current.scrollTo({
      left: containerWidth * safeIndex,
      behavior: 'smooth',
    })

    setCurrentMediaIndex(safeIndex)
  }

  const handleMediaScroll = () => {
    if (!mediaScrollRef.current) {
      return
    }

    const containerWidth = mediaScrollRef.current.clientWidth
    if (containerWidth === 0) {
      return
    }

    const index = Math.round(mediaScrollRef.current.scrollLeft / containerWidth)
    if (index !== currentMediaIndex) {
      setCurrentMediaIndex(index)
    }
  }

  return (
    <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CUSTOM_PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={index * 100}>
              <div
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentMediaIndex(0)
                }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg mb-3 bg-muted relative aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 smooth-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <button className="bg-white text-black px-4 py-1.5 rounded-lg font-medium text-sm hover:bg-white/90 transition">
                      View Project
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-accent font-bold uppercase tracking-wider mb-1.5">
                    {project.category}
                  </p>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-foreground mb-1.5 group-hover:text-accent transition line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
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
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-3 md:p-4">
          <div className="relative w-full max-w-4xl">
            <div className="bg-background rounded-lg overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-2.5 transition z-20"
                aria-label="Close modal"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Grid Layout: Image Left, Content Right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {/* Image Container */}
                <div className="bg-muted p-2 sm:p-3 md:p-4">
                  <div
                    ref={mediaScrollRef}
                    onScroll={handleMediaScroll}
                    className="flex overflow-hidden scroll-smooth rounded-md"
                  >
                    {selectedProjectMedia.map((media) => (
                      <div key={`${media.type}-${media.src}`} className="w-full shrink-0 snap-center">
                        {media.type === 'image' ? (
                          <img
                            src={media.src}
                            alt={media.alt || selectedProject.title}
                            className="w-full h-auto object-contain max-h-80 sm:max-h-96"
                          />
                        ) : (
                          <video
                            src={media.src}
                            controls
                            preload="metadata"
                            className="w-full h-auto object-contain max-h-80 sm:max-h-96 bg-black"
                          >
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    ))}
                  </div>

                  {selectedProjectMedia.length > 1 && (
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <button
                        onClick={() => goToMedia(currentMediaIndex - 1)}
                        disabled={currentMediaIndex === 0}
                        className="px-3 py-1.5 text-xs sm:text-sm rounded-md border border-border bg-background disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Prev
                      </button>

                      {selectedProjectMedia.map((media, mediaIndex) => (
                        <button
                          key={`dot-${media.type}-${mediaIndex}`}
                          onClick={() => goToMedia(mediaIndex)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            currentMediaIndex === mediaIndex ? 'bg-primary' : 'bg-border'
                          }`}
                          aria-label={`Open ${media.type} ${mediaIndex + 1}`}
                        />
                      ))}

                      <button
                        onClick={() => goToMedia(currentMediaIndex + 1)}
                        disabled={currentMediaIndex === selectedProjectMedia.length - 1}
                        className="px-3 py-1.5 text-xs sm:text-sm rounded-md border border-border bg-background disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-3 sm:p-4 md:p-6 bg-card flex flex-col justify-start border-l border-border">
                  <p className="text-xs sm:text-sm text-accent font-bold uppercase tracking-wider mb-1.5">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-foreground mb-2 sm:mb-3 line-clamp-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 leading-snug line-clamp-3">
                    {selectedProject.description}
                  </p>
                  <div className="bg-muted/50 rounded-lg p-2.5 sm:p-3 md:p-4 border border-border">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                      Project Details
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-snug line-clamp-4">
                      {selectedProject.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
