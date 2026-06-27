/**
 * @fileOverview Centralized product data for House of Petals Version 2.0.
 * Enhanced descriptions to reflect Naivasha-to-Nairobi luxury standards.
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  longDescription?: string;
}

export const ALL_PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Deluxe pink boquet', 
    price: 4500, 
    image: 'deluxe-pink-bouquet', 
    category: 'Flowers',
    description: "High-altitude Naivasha pink roses architected for grace.",
    longDescription: "Our Deluxe Pink Bouquet is the epitome of Kenyan floral elegance. Sourced at dawn from the high-altitude farms of Naivasha, these blooms are chosen for their exceptional petal count and vibrant hue. Every arrangement is hand-tied at our City Market hub using our signature spiraling technique and wrapped in heavy-weight luxury paper with hydration gel-packs."
  },
  { 
    id: '2', 
    name: 'Forever yours', 
    price: 4000, 
    image: 'forever-yours', 
    category: 'Flowers',
    description: "Signature 'Explorer' red roses for a timeless Nairobi romance.",
    longDescription: "The 'Forever Yours' collection features the iconic Explorer roses, known for their deep crimson velvet texture and long-lasting nature. Hand-selected for consistency and beauty, these roses represent the peak of Nairobi's luxury floral market, delivered in our climate-controlled concierge fleet."
  },
  { 
    id: '3', 
    name: 'Heart arrangement', 
    price: 5700, 
    image: 'heart-arrangement', 
    category: 'Flowers',
    description: "A meticulously crafted heart masterpiece using over 40 premium stems.",
    longDescription: "Designed for moments where words fall short, this heart arrangement uses over 40 premium stems of spray roses and carnations. It is an architectural floral piece that serves as a centerpiece for romance, hydration-wrapped to stay fresh for days."
  },
  { 
    id: '4', 
    name: 'Pinky white carnation', 
    price: 3000, 
    image: 'pinky-white-carnation', 
    category: 'Flowers',
    description: "Soft ethereal carnations for a delicate touch of Naivasha beauty.",
    longDescription: "A whimsical dance of colors, this bouquet combines the ruffly textures of premium carnations with the subtle scent of baby's breath. It is a favorite for newborn celebrations and 'just because' moments, handled with our strict 4°C cold chain logistics."
  },
  { 
    id: '5', 
    name: 'Chrysanthemums mix', 
    price: 5000, 
    image: 'chrysanthemums-mix', 
    category: 'Flowers',
    description: "Vibrant 'Lollipop' and 'Purple' mums mix with incredible vase life.",
    longDescription: "Featuring the unique 'Lollipop' and 'Purple' chrysanthemum varieties, this mix is a celebration of texture. These flowers are celebrated for their incredible vase life, often lasting up to two weeks with proper care, thanks to our high-altitude sourcing standards."
  },
  { 
    id: '6', 
    name: 'Sunkissed combo boquet', 
    price: 6500, 
    image: 'sunkissed-combo-boquet', 
    category: 'Flowers',
    description: "A bright and energetic mix of Naivasha yellow roses and white lillies.",
    longDescription: "Bring the Kenyan sunshine indoors with this vibrant mix. Our Sunkissed Combo features high-altitude yellow roses that glow with intensity, paired with fragrant white lilies for a truly premium sensory experience."
  },
  { 
    id: '7', 
    name: 'Sweet pink', 
    price: 3800, 
    image: 'sweet-pink', 
    category: 'Flowers',
    description: "Dreamy pastel pink blooms for a soft, elegant impression.",
    longDescription: "A curated collection of our softest pink roses and spray mums. This bouquet is designed for those who appreciate understated luxury. Each stem is inspected for perfection before being wrapped in our signature House of Petals paper."
  },
  { 
    id: '8', 
    name: 'All white box boquet', 
    price: 7200, 
    image: 'all-white-box-boquet', 
    category: 'Flowers',
    description: "The ultimate symbol of purity and elite Nairobi style in a luxury box.",
    longDescription: "Our signature box arrangement is the pinnacle of sophistication. It features an architectural build of all-white lillies and roses, presented in a luxury velvet-touch box that doubles as a statement piece for any modern Nairobi home."
  },
  { 
    id: '9', 
    name: 'Floral basket arrangement', 
    price: 5500, 
    image: 'floral-basket-arrangement', 
    category: 'Flowers',
    description: "A rustic-meets-luxury basket overflowing with seasonal Naivasha blooms.",
    longDescription: "This arrangement celebrates the bountiful nature of Kenya. We use a hand-woven artisan basket and fill it with a vibrant mix of roses, carnations, and greenery, ensuring a long-lasting and impressive display."
  },
  { 
    id: '10', 
    name: 'Velvet touch', 
    price: 4800, 
    image: 'velvet-touch', 
    category: 'Flowers',
    description: "A deep red and purple mix that feels like true velvet.",
    longDescription: "For those who love drama and depth, the Velvet Touch is a masterpiece. It uses our darkest red roses and deep purple mums to create a texture that looks as rich as it feels. A perfect choice for evening events and anniversaries."
  },
  { 
    id: '11', 
    name: 'Standard mixed boquet', 
    price: 3500, 
    image: 'standard-mixed-boquet', 
    category: 'Flowers',
    description: "Our daily best-seller featuring a fresh mix of Naivasha's finest.",
    longDescription: "Even our 'standard' is elite. This daily mix changes with the best harvests from our Naivasha partners, ensuring you always get the freshest, most vibrant stems available in the city today."
  },
  { 
    id: '12', 
    name: 'Sunkissed vase roses', 
    price: 5200, 
    image: 'sunkissed-vase-roses', 
    category: 'Flowers',
    description: "Bright yellow roses presented in a premium clear glass vase.",
    longDescription: "Ready to display. This arrangement features our famous high-altitude yellow roses, pre-cut and styled in a premium glass vase. It includes our unique hydration solution to keep your blooms glowing for longer."
  },
  { 
    id: '13', 
    name: 'Prime hand boquet', 
    price: 4200, 
    image: 'call-center', 
    category: 'Flowers',
    description: "Masterfully hand-tied arrangement for that personal touch.",
    longDescription: "A classic display of florist artistry. Our florists use the spiraling technique to create a bouquet with incredible volume and structural integrity, ensuring it looks beautiful from every single angle."
  },
  { 
    id: '14', 
    name: 'Savage love boquet', 
    price: 5800, 
    image: 'savage-love-boquet', 
    category: 'Flowers',
    description: "Wild, passionate, and undeniably bold. For a love that breaks the rules.",
    longDescription: "A non-traditional mix of bold red roses and dark foliage. This bouquet is designed to make a statement. It is wild, untamed, and perfectly represents a passion that knows no bounds."
  },
  { 
    id: '15', 
    name: 'Red and white mix', 
    price: 4000, 
    image: 'red-and-white-mix', 
    category: 'Flowers',
    description: "The classic combination of passion and purity.",
    longDescription: "A balanced arrangement of our deep red Explorer roses and pristine white carnations. It is a timeless choice for any occasion, representing a harmonious blend of emotions and style."
  },
  { 
    id: '16', 
    name: 'Standard red boquet', 
    price: 3800, 
    image: 'standard-red-boquet', 
    category: 'Flowers',
    description: "Classic red roses, elevated by the House of Petals standard.",
    longDescription: "The quintessence of floral gifting. We use only premium-grade red roses with large heads and strong stems, ensuring your classic gift stands head and shoulders above the rest."
  },
  { 
    id: '17', 
    name: 'Cherry boquet', 
    price: 4400, 
    image: 'cherry-bouquet', 
    category: 'Flowers',
    description: "Vibrant and sweet cherry-colored blooms that brighten any room.",
    longDescription: "A playful and energetic arrangement featuring unique cherry-toned roses and mums. It is a refreshing choice for birthdays and celebrations, delivered with our signature touch of class."
  },
  { 
    id: '18', 
    name: 'Luxury fruit basket', 
    price: 4500, 
    image: 'luxury-fruit-basket', 
    category: 'Gifts', 
    description: "Export-quality organic fruits paired with fresh seasonal blooms.",
    longDescription: "Our luxury fruit baskets are more than a gift; they are a wellness experience. We source organic, export-quality fruits and pair them with fresh seasonal blooms in a hand-woven Kenyan basket, delivered with our same-day precision fleet."
  },
  { 
    id: '19', 
    name: 'Sunkissed', 
    price: 3200, 
    image: 'sunkissed', 
    category: 'Flowers',
    description: "Pure yellow joy from the Rift Valley floor.",
    longDescription: "A simple yet powerful display of yellow roses. These blooms are harvested specifically for their color intensity and represent the warmth and friendship of the Kenyan spirit."
  },
  { 
    id: '20', 
    name: 'Blooming lillies', 
    price: 5500, 
    image: 'blooming-lillies', 
    category: 'Flowers',
    description: "Fragrant and majestic lillies that fill your space with elegance.",
    longDescription: "Our lillies are sourced from premium Naivasha farms that specialize in aromatic varieties. These blooms will slowly open over several days, providing a changing landscape of beauty and scent in your home."
  },
  { 
    id: '21', 
    name: 'Mixed carnations and chocolate', 
    price: 5900, 
    image: 'mixed-carnations-chocolate', 
    category: 'Gifts',
    description: "A sweet duo of colorful carnations and premium artisan chocolates.",
    longDescription: "The perfect 'thinking of you' gift. We pair a vibrant bunch of mixed carnations with a box of premium artisan chocolates, creating a multi-sensory experience that is sure to delight."
  },
  { 
    id: '22', 
    name: 'Bloomy touch', 
    price: 4100, 
    image: 'bloomy-touch', 
    category: 'Flowers',
    description: "A soft and ruffly mix that celebrates the texture of nature.",
    longDescription: "Focusing on the unique textures of chrysanthemums and spray roses, the Bloomy Touch is for those who love a full, lush look. It is architected for volume and structural beauty."
  },
  { 
    id: '23', 
    name: 'Astrorose and chocolate combo', 
    price: 6800, 
    image: 'astrorose-chocolate-combo', 
    category: 'Gifts',
    description: "A premium pairing of 'Astra' roses and luxury Lindt chocolates.",
    longDescription: "The ultimate indulgence. We combine our rarest Astra roses—known for their unique star-like shape—with a large box of Lindt chocolates. It is the gold standard of Nairobi luxury gifting."
  },
  { 
    id: '24', 
    name: 'Premium basket arrangement', 
    price: 7500, 
    image: 'premium-basket-arrangement', 
    category: 'Flowers',
    description: "Our largest basket arrangement, designed for maximum impact.",
    longDescription: "A show-stopping display of over 60 stems. This premium basket is designed for corporate lobbies, grand entrances, or major life milestones. It represents the absolute capacity of House of Petals artistry."
  },
  { 
    id: '25', 
    name: 'Royal boquet', 
    price: 8500, 
    image: 'royal-bouquet', 
    category: 'Flowers',
    description: "The crown jewel of our collection. Simply majestic.",
    longDescription: "The Royal Bouquet is a bespoke masterpiece. It features a curated mix of our most expensive blooms, including rare lillies and oversized roses, all wrapped in our signature gold-accented packaging. It is, quite simply, the best flowers you can buy in Nairobi."
  }
];
