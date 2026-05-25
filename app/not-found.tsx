import Link from 'next/link'
import { ArrowLeft, Grid3X3, Home } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/stone_collection_3.jpeg"
            alt="Natural stone texture"
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Page Not Found
            </p>
            <h1 className="mb-5 font-serif text-6xl font-bold leading-none text-foreground sm:text-7xl md:text-8xl">
              404
            </h1>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              The stone you are looking for is not here.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              The page may have moved, or the link may be incorrect. Explore our natural stone collection or return to the homepage.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift smooth-transition">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 bg-background/80 hover:bg-muted hover-lift smooth-transition">
                <Link href="/stones">
                  <Grid3X3 className="h-4 w-4" />
                  See All Stones
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-card shadow-xl">
              <img
                src="/images/stone_collection_4.jpeg"
                alt="Premium Indonesian natural stone collection"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/10" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-background/20 bg-foreground/80 p-5 text-background backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ArrowLeft className="h-4 w-4" />
                  Crafted paths lead back to NOA Natural Stone
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
