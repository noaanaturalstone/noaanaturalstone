import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Navigation } from '@/components/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { Footer } from '@/components/footer'

import { ProductHero } from '@/components/product/product-hero'
import { ProductDetails } from '@/components/product/product-details'
import { RelatedProducts } from '@/components/product/related-products'

import { PRODUCTS } from '@/lib/products'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getProduct(slug: string) {
  return PRODUCTS.find(product => product.slug === slug)
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params

  const product = await getProduct(slug)

  if (!product) {
    return {
      title: 'Product Not Found | NOA Natural Stone',
    }
  }

  const url = `https://noanaturalstone.com/stones/${product.slug}`

  return {
    title: product.seo.title,
    description: product.seo.description,

    keywords: product.seo.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url,
      siteName: 'NOA Natural Stone',
      type: 'website',

      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: product.seo.title,
      description: product.seo.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params

  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',

    name: product.name,

    description: product.seo.description,

    image: [product.image],

    category: product.category,

    brand: {
      '@type': 'Brand',
      name: 'NOA Natural Stone',
    },

    manufacturer: {
      '@type': 'Organization',
      name: 'NOA Natural Stone',
      url: 'https://noanaturalstone.com',
    },

    url: `https://noanaturalstone.com/stones/${product.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="min-h-screen bg-background">

        <Navigation />

        <Breadcrumb />

        <article>

          <ProductHero product={product} />

          <ProductDetails product={product} />

          <RelatedProducts currentProduct={product} />

        </article>

        <Footer />

      </main>
    </>
  )
}