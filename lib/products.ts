export interface Product {
  id: number
  slug: string
  name: string
  category: string

  image: string
  gallery?: string[]

  shortDescription: string

  seo: {
    title: string
    description: string
    keywords: string[]
  }

  subtitle: string
  introduction: string

  sizes: string[]
  applications: string[]
  advantages: string[]
  markets: string[]

  keywords?: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'andesite-flamed',
    name: 'Andesite Flamed',
    category: 'flooring',

    image: '/images/product/andesit_flame.jpeg',

    gallery: [
      '/images/product/andesit_flame.jpeg',
    ],

    shortDescription:
      'Premium andesite flamed stone with dynamic color variations. Authentic volcanic stone from Indonesia perfect for residential and commercial flooring applications.',

    seo: {
      title: 'Andesite Flamed Stone Supplier | Premium Indonesian Natural Stone',
      description:
        'Premium Indonesian andesite flamed stone for flooring, outdoor paving, landscape, and commercial construction projects.',
      keywords: [
        'andesite flamed stone',
        'andesite stone supplier indonesia',
        'indonesian natural stone',
        'outdoor flooring stone',
        'volcanic stone tiles',
      ],
    },

    subtitle: 'Premium Volcanic Stone for Flooring & Outdoor Applications',

    introduction:
      'Andesite Flamed is a premium Indonesian volcanic stone processed with a flamed finish to create a naturally textured, slip-resistant surface. It is widely used for outdoor paving, walkways, terraces, pool decks, and architectural landscaping.',

    sizes: [
      '300 × 300 mm',
      '400 × 400 mm',
      '600 × 300 mm',
      'Custom sizes available',
    ],

    applications: [
      'Outdoor flooring',
      'Walkways',
      'Garden paths',
      'Pool decks',
      'Commercial projects',
    ],

    advantages: [
      'Natural volcanic stone',
      'Slip resistant surface',
      'Durable',
      'Weather resistant',
      'Consistent quality',
      'Export quality',
    ],

    markets: [
      'Contractors',
      'Architects',
      'Landscape companies',
      'Stone distributors',
    ],

    keywords: [
      'andesite flamed stone',
      'andesite flamed supplier',
      'indonesian natural stone',
      'outdoor flooring stone',
      'volcanic stone tiles',
    ],
  },

  {
    id: 2,
    slug: 'andesite-flamed-variant',
    name: 'Andesite Flamed Variant',
    category: 'flooring',

    image: '/images/product/andesit_flame_2.jpeg',

    gallery: [
      '/images/product/andesit_flame_2.jpeg',
    ],

    shortDescription:
      'Professional grade andesite flamed stone in alternate pattern. Ideal for large-scale projects, walkways, and contemporary design installations.',

    seo: {
      title: 'Andesite Flamed Variant Supplier | Indonesian Natural Stone',
      description:
        'Premium flamed andesite stone variant for outdoor flooring and architectural projects.',
      keywords: [
        'andesite flamed variant',
        'flamed andesite stone',
        'indonesian volcanic stone',
        'paving stone supplier',
        'outdoor stone tiles',
      ],
    },

    subtitle: 'Alternative Flamed Surface Pattern',

    introduction:
      'Alternative flamed andesite surface offering a unique texture while maintaining excellent durability for outdoor applications.',

    sizes: [
      '300 × 300 mm',
      '400 × 400 mm',
      '600 × 300 mm',
      'Custom sizes available',
    ],

    applications: [
      'Outdoor flooring',
      'Landscape',
      'Walkways',
      'Public spaces',
    ],

    advantages: [
      'Natural stone',
      'Durable',
      'Slip resistant',
      'Modern appearance',
    ],

    markets: [
      'Landscape companies',
      'Construction',
      'Architects',
    ],

    keywords: [
      'andesite flamed variant',
      'flamed andesite stone',
      'indonesian volcanic stone',
      'paving stone supplier',
      'outdoor stone tiles',
    ],
  },

  {
    id: 3,
    slug: 'andesite-natural',
    name: 'Andesite Natural',
    category: 'flooring',

    image: '/images/product/andesit_natural.jpeg',

    gallery: [
      '/images/product/andesit_natural.jpeg',
    ],

    shortDescription:
      'Natural andesite stone collection from Indonesia. Premium quality stone tiles for interior and exterior applications with authentic texture.',

    seo: {
      title: 'Natural Andesite Stone Supplier Indonesia',
      description:
        'Natural Indonesian andesite stone for flooring, walls, landscaping, and architectural projects.',
      keywords: [
        'natural andesite stone',
        'andesite stone supplier indonesia',
        'volcanic stone tiles',
        'outdoor and interior stone',
        'indonesian stone supplier',
      ],
    },

    subtitle: 'Natural Andesite Stone Collection',

    introduction:
      'Natural andesite stone featuring authentic volcanic textures suitable for indoor and outdoor architectural applications.',

    sizes: [
      '300 × 300 mm',
      '400 × 400 mm',
      '600 × 300 mm',
    ],

    applications: [
      'Flooring',
      'Landscape',
      'Exterior walls',
      'Interior decoration',
    ],

    advantages: [
      'Natural finish',
      'Strong',
      'Weather resistant',
      'Long lasting',
    ],

    markets: [
      'Construction',
      'Architecture',
      'Stone suppliers',
    ],

    keywords: [
      'natural andesite stone',
      'andesite stone supplier indonesia',
      'volcanic stone tiles',
      'outdoor and interior stone',
      'indonesian stone supplier',
    ],
  },

  {
    id: 4,
    slug: 'evergreen-stone',
    name: 'Evergreen Stone',
    category: 'wall-cladding',

    image: '/images/product/evergreen_stone.jpeg',

    gallery: [
      '/images/product/evergreen_stone.jpeg',
    ],

    shortDescription:
      'Natural evergreen stone from Indonesia. Perfect for wall cladding, feature walls, and architectural accent applications.',

    seo: {
      title: 'Evergreen Stone Wall Cladding Supplier',
      description:
        'Premium Indonesian evergreen stone for wall cladding and architectural decoration.',
      keywords: [
        'evergreen stone',
        'wall cladding stone',
        'natural stone facade',
        'architectural wall stone',
        'indonesian wall cladding',
      ],
    },

    subtitle: 'Natural Stone for Elegant Wall Cladding',

    introduction:
      'Evergreen Stone provides natural textures and colors suitable for luxurious wall cladding projects.',

    sizes: [
      'Random sizes',
      'Custom sizes available',
    ],

    applications: [
      'Wall cladding',
      'Feature walls',
      'Facades',
      'Interior decoration',
    ],

    advantages: [
      'Natural appearance',
      'Elegant finish',
      'Durable',
      'Premium quality',
    ],

    markets: [
      'Architects',
      'Interior designers',
      'Contractors',
    ],

    keywords: [
      'evergreen stone',
      'wall cladding stone',
      'natural stone facade',
      'architectural wall stone',
      'indonesian wall cladding',
    ],
  },

  {
    id: 5,
    slug: 'terra-stone-texture',
    name: 'Terra Stone Texture',
    category: 'countertops',

    image: '/images/product/tera_stone_texture.jpeg',

    gallery: [
      '/images/product/tera_stone_texture.jpeg',
    ],

    shortDescription:
      'Textured terra stone with natural surface finish. Custom production for luxury countertops and bespoke stone solutions.',

    seo: {
      title: 'Terra Stone Texture Supplier',
      description:
        'Premium textured terra stone for luxury architectural projects.',
      keywords: [
        'terra stone texture',
        'textured stone supplier',
        'luxury countertop stone',
        'natural textured stone',
        'bespoke stone solutions',
      ],
    },

    subtitle: 'Natural Textured Stone',

    introduction:
      'Textured terra stone provides luxurious natural patterns for premium architectural designs.',

    sizes: [
      'Custom production',
    ],

    applications: [
      'Countertops',
      'Accent walls',
      'Interior decoration',
    ],

    advantages: [
      'Luxury appearance',
      'Unique texture',
      'Premium quality',
    ],

    markets: [
      'Interior designers',
      'Luxury builders',
    ],

    keywords: [
      'terra stone texture',
      'textured stone supplier',
      'luxury countertop stone',
      'natural textured stone',
      'bespoke stone solutions',
    ],
  },

  {
    id: 6,
    slug: 'terra-stone',
    name: 'Terra Stone',
    category: 'wall-cladding',

    image: '/images/product/terra_stone.jpeg',

    gallery: [
      '/images/product/terra_stone.jpeg',
    ],

    shortDescription:
      'Premium terra stone for luxury interior design. Indonesian natural stone cladding with authentic finish.',

    seo: {
      title: 'Terra Stone Supplier Indonesia',
      description:
        'Premium terra stone for wall cladding and luxury architectural projects.',
      keywords: [
        'terra stone',
        'terra stone supplier indonesia',
        'wall cladding stone',
        'natural stone cladding',
        'indonesian architectural stone',
      ],
    },

    subtitle: 'Premium Wall Cladding Stone',

    introduction:
      'Terra Stone offers warm natural colors for elegant wall cladding and architectural finishes.',

    sizes: [
      'Custom sizes available',
    ],

    applications: [
      'Wall cladding',
      'Interior walls',
      'Exterior walls',
    ],

    advantages: [
      'Elegant finish',
      'Premium quality',
      'Natural texture',
    ],

    markets: [
      'Contractors',
      'Architects',
    ],

    keywords: [
      'terra stone',
      'terra stone supplier indonesia',
      'wall cladding stone',
      'natural stone cladding',
      'indonesian architectural stone',
    ],
  },

  {
    id: 7,
    slug: 'pumice-stone',
    name: 'Pumice Stone',
    category: 'production-stone',

    image: '/images/product/pumice_stonee_2.jpeg',

    gallery: [
      '/images/product/pumice_stonee_2.jpeg',
    ],

    shortDescription:
      'Natural volcanic pumice stone from Indonesia for aquascaping, horticulture, filtration, industrial applications, and landscaping.',

    seo: {
      title:
        'Pumice Stone Supplier | Natural Volcanic Media for Aquascaping, Filtration, Horticulture & Industrial Applications',

      description:
        'Premium Indonesian pumice stone supplier. Available in various sizes for aquascaping, aquarium filtration, bonsai, horticulture, denim washing, and industrial applications.',
      keywords: [
        'pumice stone supplier',
        'pumice stone indonesia',
        'volcanic pumice',
        'aquascaping media',
        'aquarium filter media',
        'horticulture pumice',
        'bonsai pumice',
        'pumice export indonesia',
      ],
    },

    subtitle:
      'Natural Volcanic Material for Various Applications',

    introduction:
      'Pumice stone is a lightweight, porous volcanic material widely used in industrial, horticultural, aquatic, and decorative applications. Its unique structure provides excellent drainage, aeration, and filtration properties, making it a versatile material for a wide range of uses.',

    sizes: [
      '1 – 3 mm',
      '3 – 5 mm',
      '5 – 10 mm',
      '10 – 20 mm',
      '20 – 30 mm',
      '30 – 50 mm',
      '50 – 70 mm',
      '70 – 100 mm',
      'Custom sizes available upon request',
    ],

    applications: [
      'Succulent and cactus growing media',
      'Bonsai and akadama alternative',
      'Aquascaping',
      'Moss walls and vertical gardens',
      'Aquarium filtration media',
      'Fish pond filtration systems',
      'Denim stone washing',
      'Industrial polishing applications',
      'Horticultural use',
      'Various industrial applications',
    ],

    advantages: [
      'Natural volcanic material',
      'Lightweight and highly porous',
      'Excellent drainage and aeration properties',
      'Available in various sizes',
      'Consistent quality',
      'Stable supply',
      'Environmentally friendly',
    ],

    markets: [
      'Industrial users',
      'Distributors',
      'Aquascaping suppliers',
      'Horticultural businesses',
      'Landscaping projects',
      'Commercial applications',
    ],

    keywords: [
      'pumice stone supplier',
      'pumice stone indonesia',
      'volcanic pumice',
      'aquascaping media',
      'horticulture pumice',
    ],
  },

  {
    id: 8,
    slug: 'red-marble',
    name: 'Red Marble',
    category: 'countertops',

    image: '/images/product/red_marble.jpg',

    gallery: [
      '/images/product/red_marble.jpg',
    ],

    shortDescription:
      'Premium Indonesian red marble suitable for luxury countertops, feature walls, and interior architecture.',

    seo: {
      title: 'Red Marble Supplier Indonesia',
      description:
        'Premium Indonesian red marble for luxury interior projects.',
      keywords: [
        'red marble',
        'red marble supplier indonesia',
        'luxury marble countertops',
        'natural marble stone',
        'indonesian marble',
      ],
    },

    subtitle: 'Luxury Natural Marble',

    introduction:
      'Premium red marble with luxurious natural colors suitable for prestigious architectural projects.',

    sizes: [
      'Custom sizes available',
    ],

    applications: [
      'Countertops',
      'Interior walls',
      'Luxury interiors',
    ],

    advantages: [
      'Premium marble',
      'Luxury appearance',
      'Natural pattern',
    ],

    markets: [
      'Luxury residences',
      'Hotels',
      'Interior designers',
    ],

    keywords: [
      'red marble',
      'red marble supplier indonesia',
      'luxury marble countertops',
      'natural marble stone',
      'indonesian marble',
    ],
  },
]