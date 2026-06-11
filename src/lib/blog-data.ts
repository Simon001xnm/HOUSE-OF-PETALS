
/**
 * @fileOverview Centralized blog and service data for House of Petals.
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
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
    title: 'The Best in Luxury Weddings',
    category: 'Weddings',
    image: 'forever-yours',
    excerpt: 'From architectural floral arches to bespoke bridal bouquets, see how we transform venues into floral wonderlands.',
    capacity: 'We handle weddings of up to 1,000 guests, providing everything from altar decor to table centerpieces.',
    process: 'Our process begins 3 months prior with farm-selection in Naivasha. We ensure every petal is at its peak bloom for the big day.',
    content: 'At House of Petals, we believe a wedding is not just an event; it is a symphony of elegance. Our specialized wedding team works closely with planners to design floral landscapes that tell a story. We manage large-scale capacity, ensuring that every corner of your venue, from the entrance to the cake table, is dripping in premium Naivasha roses. Our commitment to excellence means we use climate-controlled transport to bring the freshness of the Rift Valley directly to your Nairobi venue.'
  },
  {
    id: 'b2',
    slug: 'birthday-surprises-delivered',
    title: 'Nairobi’s Ultimate Birthday Surprises',
    category: 'Surprises',
    image: 'deluxe-pink-bouquet',
    excerpt: 'Learn why our "Secret Delivery" service is the most talked-about birthday gesture in the city.',
    capacity: 'We manage over 50 personalized surprise deliveries across Nairobi daily.',
    process: 'From the moment you order, our concierge maps the most efficient route to ensure the "Golden Hour" delivery window is hit.',
    content: 'Nothing says "You are special" like a surprise from House of Petals. Our birthday service goes beyond flowers; we deliver emotions. Each package includes our signature luxury wrapping and a handwritten note. We specialize in coordinating with offices and residences to ensure the recipient is genuinely caught off guard by the beauty of our arrangements. Whether it is a single grand bouquet or a room full of blooms, our capacity for joy is limitless.'
  },
  {
    id: 'b3',
    slug: 'anniversary-romance-red-roses',
    title: 'Defining Romance: Anniversary Collections',
    category: 'Anniversaries',
    image: 'heart-arrangement',
    excerpt: 'Redefining the classic red rose for your most precious milestones.',
    capacity: 'Unlimited bespoke arrangements, including our famous "1000 Rose" luxury installations.',
    process: 'We select "Explorer" roses with the largest head size, ensuring they open into a velvet masterpiece within 24 hours of arrival.',
    content: 'Anniversaries deserve a level of sophistication that only House of Petals can provide. Our anniversary blog explores the symbolism of different blooms and why our Naivasha-sourced Explorer roses are the gold standard for romance. We don’t just deliver a bouquet; we deliver a legacy of love. Our team prepares each stem by hand, removing thorns and leaves to ensure the focus remains entirely on the velvet petals.'
  },
  {
    id: 'b4',
    slug: 'corporate-events-excellence',
    title: 'Corporate Galas & Brand Floral Design',
    category: 'Events',
    image: 'all-white-box-boquet',
    excerpt: 'Elevate your brand with floral decor that matches your corporate identity and prestige.',
    capacity: 'Full-service floral management for corporate events of up to 2,000 attendees.',
    process: 'We match floral hues to your brand’s Pantone colors using unique breeding selections from our Naivasha partners.',
    content: 'In the corporate world, first impressions are everything. House of Petals provides sophisticated floral solutions for product launches, annual galas, and office lobbies. We understand the need for professional, non-intrusive, yet striking decor. Our event team handles everything from setup to strike, ensuring your brand is associated with the luxury and freshness that House of Petals represents.'
  },
  {
    id: 'b5',
    slug: 'spiritual-elegance-church-decor',
    title: 'Sacred Spaces: Church & Altar Decor',
    category: 'Church',
    image: 'blooming-lillies',
    excerpt: 'Bringing spiritual serenity to your place of worship through timeless floral arrangements.',
    capacity: 'Regular weekly altar maintenance or large-scale decor for special services and holidays.',
    process: 'We focus on long-lasting lilies and chrysanthemums that maintain their beauty throughout the week.',
    content: 'Decorating a sacred space requires a balance of humility and grandeur. House of Petals specialized in altar arrangements that draw the eye upward. We work with various parishes in Nairobi to provide consistent, fresh, and seasonally appropriate decor. Our lilies are chosen for their purity and scent, creating an atmosphere of peace and reflection.'
  },
  {
    id: 'b6',
    slug: 'funeral-sympathy-tributes',
    title: 'Respectful Tributes: Sympathy & Funerals',
    category: 'Sympathy',
    image: 'sassy-white',
    excerpt: 'Expressing what words cannot during times of loss with graceful, dignified tributes.',
    capacity: 'Same-day production of custom wreaths, coffin sprays, and sympathy stands.',
    process: 'We prioritize white and pastel tones, using only the most pristine stems to symbolize peace and honor.',
    content: 'During moments of grief, flowers provide a silent language of support. Our funeral service is handled with the utmost sensitivity. We create architectural wreaths and sprays that honor the life of the departed. With House of Petals, you can trust that the final tribute will be delivered with precision and respect, ensuring the family feels the warmth of your condolences through our artistry.'
  },
  {
    id: 'b7',
    slug: 'event-mastery-celebrations',
    title: 'The Art of the Party: Social Events',
    category: 'Parties',
    image: 'standard-mixed-boquet',
    excerpt: 'From baby showers to graduation parties, we make every social gathering Instagram-worthy.',
    capacity: 'Small intimate home gatherings to large garden parties.',
    process: 'We design themed floral props and photo-wall backdrops using seasonal mixed blooms.',
    content: 'Every party has a heartbeat, and at House of Petals, we make that heartbeat visible. Our social event team specializes in "Themed Floral Art." Whether it is a pastel-themed baby shower or a vibrant graduation celebration, we source specific colors from Naivasha to match your vision. Our installations are designed to be the focal point of your event, creating perfect photo opportunities for your guests.'
  },
  {
    id: 'b8',
    slug: 'naivasha-to-nairobi-journey',
    title: 'The Journey of Excellence: Farm to Vase',
    category: 'Sourcing',
    image: 'sunkissed-vase-roses',
    excerpt: 'Go behind the scenes and see why our Naivasha-sourced flowers are the best in Kenya.',
    capacity: 'We process over 5,000 stems daily through our Nairobi City Market hub.',
    process: 'A 24-hour cycle from harvest in Naivasha to the client’s doorstep in Nairobi.',
    content: 'Why House of Petals? It starts in the soil. The volcanic earth of Naivasha provides minerals that allow our roses to grow larger and stronger. We bypass the traditional market auctions, sourcing directly from the growers to ensure a longer vase life for our customers. This blog takes you through our sorting, hydration, and wrapping process—the secrets behind the House of Petals standard.'
  }
];
