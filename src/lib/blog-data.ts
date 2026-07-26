/**
 * @fileOverview Centralized blog and service data for House of Petals.
 * Updated for English Rebranding & Girlfriend's Day Aug 1st.
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
    title: 'Dream Weddings: The Pinnacle of Floral Luxury',
    slogan: 'We Put Love in Every Petal.',
    category: 'Weddings',
    image: 'forever-yours',
    excerpt: 'From architectural floral arches to bespoke bridal bouquets, we transform venues into a floral paradise in Nairobi.',
    capacity: 'We handle weddings of up to 1,000 guests, providing everything from altar decor to table centerpieces.',
    process: 'Our process begins 3 months prior with farm-selection in Naivasha. We ensure every petal is at its peak bloom for the big day.',
    content: 'At House of Petals, we believe a wedding is not just an event; it is a symphony of elegance. Our specialized wedding team works closely with planners to design floral landscapes that tell a story. We manage large-scale capacity, ensuring that every corner of your venue, from the entrance to the cake table, is dripping in premium Naivasha roses.'
  },
  {
    id: 'b2',
    slug: 'birthday-surprises-delivered',
    title: 'Unforgettable Birthday Surprises',
    slogan: 'New Ideas for Every Celebration.',
    category: 'Surprises',
    image: 'deluxe-pink-bouquet',
    excerpt: 'Learn why our "Secret Delivery" service is the most talked-about gesture in the city. Make it unforgettable.',
    capacity: 'We manage over 50 personalized surprise deliveries across Nairobi daily.',
    process: 'From the moment you order, our concierge maps the most efficient route to ensure the perfect delivery window.',
    content: 'Nothing says "You are special" like a surprise from House of Petals. Our birthday service goes beyond flowers; we deliver emotions. Each package includes our signature luxury wrapping and a handwritten note.'
  },
  {
    id: 'b3',
    slug: 'anniversary-romance-red-roses',
    title: 'Eternal Love: The Anniversary Collection',
    slogan: 'Our Flowers, Your Love. Pure Luxury.',
    category: 'Anniversaries',
    image: 'heart-arrangement',
    excerpt: 'Redefining the classic red rose for your most precious milestones. Celebrate your love with excellence.',
    capacity: 'Unlimited bespoke arrangements, including our famous "1000 Rose" luxury installations.',
    process: 'We select "Explorer" roses with the largest head size, ensuring they open into a velvet masterpiece.',
    content: 'Anniversaries deserve a level of sophistication that only House of Petals can provide. Our anniversary collection explores the symbolism of different blooms and why our Naivasha-sourced roses are the gold standard for romance.'
  },
  {
    id: 'b4',
    slug: 'corporate-events-excellence',
    title: 'Corporate Excellence: Luxury Event Design',
    slogan: 'Professionalism Sourced from Naivasha.',
    category: 'Events',
    image: 'all-white-box-boquet',
    excerpt: 'Elevate your brand with floral decor that matches your prestige. Let your corporate identity bloom.',
    capacity: 'Full-service floral management for corporate events of up to 2,000 attendees.',
    process: 'We match floral hues to your brand colors using unique breeding selections from our Naivasha partners.',
    content: 'In the corporate world, first impressions are everything. House of Petals provides sophisticated floral solutions for product launches, annual galas, and office lobbies.'
  },
  {
    id: 'b5',
    slug: 'spiritual-elegance-church-decor',
    title: 'Sacred Elegance: Church & Altar Decor',
    slogan: 'Spiritual Serenity through Timeless Artistry.',
    category: 'Church',
    image: 'blooming-lillies',
    excerpt: 'Bringing spiritual serenity to your place of worship through timeless floral arrangements.',
    capacity: 'Regular weekly altar maintenance or large-scale decor for special services and holidays.',
    process: 'We focus on long-lasting lilies and chrysanthemums that maintain their beauty throughout the week.',
    content: 'Decorating a sacred space requires a balance of humility and grandeur. House of Petals specializes in altar arrangements that draw the eye upward.'
  },
  {
    id: 'b6',
    slug: 'funeral-sympathy-tributes',
    title: 'Graceful Tributes: Sympathy & Honor',
    slogan: 'Expressing What Words Cannot.',
    category: 'Sympathy',
    image: 'sassy-white',
    excerpt: 'Dignified tributes during times of loss. Expressing condolences with grace and honor.',
    capacity: 'Same-day production of custom wreaths, coffin sprays, and sympathy stands.',
    process: 'We prioritize white and pastel tones, using only the most pristine stems to symbolize peace and honor.',
    content: 'During moments of grief, flowers provide a silent language of support. Our funeral service is handled with the utmost sensitivity.'
  },
  {
    id: 'b7',
    slug: 'event-mastery-celebrations',
    title: 'Celebration Mastery: The Art of the Party',
    slogan: 'Your Social Gathering, Reimagined.',
    category: 'Parties',
    image: 'standard-mixed-boquet',
    excerpt: 'From baby showers to graduation parties, we make every social gathering Instagram-worthy.',
    capacity: 'Small intimate home gatherings to large garden parties.',
    process: 'We design themed floral props and photo-wall backdrops using seasonal mixed blooms.',
    content: 'Every party has a heartbeat, and at House of Petals, we make that heartbeat visible. Our social event team specializes in "Themed Floral Art."'
  },
  {
    id: 'b8',
    slug: 'naivasha-to-nairobi-journey',
    title: 'The Journey of Excellence: Farm to Vase',
    slogan: 'Excellence Sourced from Naivasha.',
    category: 'Sourcing',
    image: 'sunkissed-vase-roses',
    excerpt: 'Go behind the scenes and see why our high-altitude flowers are the best in Kenya. Absolute freshness.',
    capacity: 'We process over 5,000 stems daily through our Nairobi City Market hub.',
    process: 'A 24-hour cycle from harvest in Naivasha to the client’s doorstep in Nairobi.',
    content: 'Why House of Petals? It starts in the soil. The volcanic earth of Naivasha provides minerals that allow our roses to grow larger and stronger.'
  }
];
