'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 hover:opacity-80 transition">
            <Image
              src="/logos/5.png"
              alt="NOA Stone - Luxury Natural Stone"
              width={120}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li><Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition hover-text-accent">About</Link></li>
            <li><Link href="/stones" className="text-sm font-medium text-foreground hover:text-primary transition hover-text-accent">See All Stones</Link></li>
            <li><Link href="/projects" className="text-sm font-medium text-foreground hover:text-primary transition hover-text-accent">Our Projects</Link></li>
            <li><Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition hover-text-accent">Contact Us</Link></li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden pb-4 space-y-2 animate-slide-in-up">
            <li>
              <Link
                href="/stones"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                See All Stones
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
