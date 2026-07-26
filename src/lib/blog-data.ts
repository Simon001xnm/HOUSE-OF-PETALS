/**
 * @fileOverview Simplified Blog Data for House of Petals.
 * Direct slogans and simple descriptions.
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  slogan: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  capacity: string;
  process: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'luxury-weddings-nairobi',
    title: 'Dream Weddings',
    slogan: 'Pure Elegance Online.',
    category: 'Weddings',
    image: 'forever-yours',
    excerpt: 'Luxury floral arches and bridal bouquets. We transform venues into floral paradise.',
    capacity: 'We handle weddings for 100 to 1,000+ guests with ease.',
    process: '3-month prep: Sourcing from Naivasha to ensure peak bloom.',
    content: 'House of Petals is Nairobi’s premier wedding florist. We manage everything from altar decor to table centerpieces using premium high-altitude roses.'
  },
  {
    id: 'b2',
    slug: 'birthday-surprises-delivered',
    title: 'Birthday Surprises',
    slogan: 'Sweet Surprises Online.',
    category: 'Surprises',
    image: 'deluxe-pink-bouquet',
    excerpt: 'Make it unforgettable with our secret delivery service. Fresh roses and gifts.',
    capacity: 'We deliver over 50 personalized birthday surprises daily.',
    process: 'Real-time logistics ensuring the perfect surprise window.',
    content: 'Surprise your loved ones with signature luxury wrapping and a handwritten note. Same-day delivery guaranteed.'
  },
  {
    id: 'b3',
    slug: 'anniversary-romance-red-roses',
    title: 'Anniversary Roses',
    slogan: 'Timeless Romance Online.',
    category: 'Anniversaries',
    image: 'heart-arrangement',
    excerpt: 'Deep red Explorer roses for your most precious milestones.',
    capacity: 'From 12 roses to 1,000-rose luxury installations.',
    process: 'Selecting velvet Explorer roses for maximum head size.',
    content: 'Celebrate your love with the gold standard of Nairobi romance. Our anniversary collection is built for excellence.'
  },
  {
    id: 'b4',
    slug: 'corporate-events-excellence',
    title: 'Corporate Events',
    slogan: 'Corporate Excellence Online.',
    category: 'Events',
    image: 'all-white-box-boquet',
    excerpt: 'Elevate your brand with floral decor that matches your prestige.',
    capacity: 'Full floral management for galas of up to 2,000 attendees.',
    process: 'Brand-color matching using unique Rift Valley breeding.',
    content: 'Professional floral solutions for product launches, annual galas, and office lobby prestige.'
  },
  {
    id: 'b5',
    slug: 'spiritual-elegance-church-decor',
    title: 'Church Decor',
    slogan: 'Spiritual Serenity Online.',
    category: 'Church',
    image: 'blooming-lillies',
    excerpt: 'Timeless altar arrangements for sacred spaces and services.',
    capacity: 'Weekly maintenance and large-scale holiday decor.',
    process: 'Using long-lasting lilies and mums for weekly freshness.',
    content: 'We provide elegant altar arrangements that bring serenity and beauty to your place of worship.'
  },
  {
    id: 'b6',
    slug: 'funeral-sympathy-tributes',
    title: 'Funeral Tributes',
    slogan: 'Graceful Tributes Online.',
    category: 'Sympathy',
    image: 'sassy-white',
    excerpt: 'Dignified wreaths and coffin sprays to honor your loved ones.',
    capacity: 'Same-day custom wreaths and sympathy stands.',
    process: 'Strict selection of pristine white stems for peace.',
    content: 'Expressing condolences with grace. We handle funeral tributes with the utmost sensitivity and speed.'
  },
  {
    id: 'b7',
    slug: 'event-mastery-celebrations',
    title: 'Party Celebrations',
    slogan: 'Fresh Celebrations Online.',
    category: 'Parties',
    image: 'standard-mixed-boquet',
    excerpt: 'From baby showers to graduation parties. Instagram-worthy decor.',
    capacity: 'Intimate home gatherings to large outdoor parties.',
    process: 'Themed floral props and photo-wall backdrop designs.',
    content: 'We make every social gathering special with themed floral art that captures the heartbeat of the party.'
  },
  {
    id: 'b8',
    slug: 'naivasha-to-nairobi-journey',
    title: 'Our Journey',
    slogan: 'Fresh Blooms Online.',
    category: 'Sourcing',
    image: 'sunkissed-vase-roses',
    excerpt: 'From Naivasha farms to your Nairobi vase in 24 hours.',
    capacity: 'Processing 5,000+ stems daily at our City Market hub.',
    process: '24-hour cycle: Harvest, Cold-Chain, Delivery.',
    content: 'Experience the House of Petals difference. High-altitude sourcing means larger heads and stronger stems.'
  }
];
