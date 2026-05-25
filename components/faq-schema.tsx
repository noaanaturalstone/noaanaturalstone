'use client'

export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of natural stone does NOA Natural Stone offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NOA Natural Stone specializes in premium Indonesian natural stones including black lava stone, andesite, terra stone, limestone, and evergreen stone. We offer both standard products and custom fabrication services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is NOA Natural Stone a reliable exporter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, NOA Natural Stone has been a trusted premium natural stone manufacturer and exporter since 2004. We are based in Malang, East Java, Indonesia, and serve customers worldwide with reliable shipping and quality assurance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can NOA Natural Stone handle custom stone projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We specialize in custom stone fabrication and design services. Our team can transform Indonesian natural stone into unique architectural and decorative pieces tailored to your specific vision and requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the pricing for bulk orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NOA Natural Stone offers competitive pricing for bulk orders. Contact us directly for quotations on large projects. We provide flexible payment options including bank transfers and credit arrangements for qualified buyers.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does shipping take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shipping times vary depending on destination and order size. Typically, orders ship within 2-4 weeks of order confirmation. International shipping is available to most countries worldwide. Contact our team for specific shipping timelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept multiple payment methods including bank transfers, credit cards, and cash payments. For international clients, we work with secure payment processors and can arrange flexible payment terms for large orders.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
