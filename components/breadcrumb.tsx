'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()

  // Define breadcrumb paths
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    '/about': [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
    ],
    '/stones': [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/stones' },
    ],
    '/projects': [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
    ],
    '/contact': [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  }

  const items = breadcrumbMap[pathname] || []

  if (!items.length) return null

  // Schema.org BreadcrumbList
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://noanaturalstone.com${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav
        className="bg-muted/30 py-3 px-4 sm:px-6 lg:px-8"
        aria-label="Breadcrumb"
      >
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="text-primary hover:text-primary/80 transition font-medium"
                >
                  {item.label}
                </Link>
                {index < items.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
