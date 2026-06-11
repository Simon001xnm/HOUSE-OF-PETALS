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
    id: '18', 
    name: 'Luxury fruit basket', 
    price: 4500, 
    image: 'luxury-fruit-basket', 
    category: 'Gifts', 
    description: "Export-quality organic fruits paired with fresh seasonal blooms.",
    longDescription: "Our luxury fruit baskets are more than a gift; they are a wellness experience. We source organic, export-quality fruits and pair them with fresh seasonal blooms in a hand-woven Kenyan basket, delivered with our same-day precision fleet."
  },
  {
    id: '63',
    name: 'Just for you package',
    price: 5500,
    image: 'just-for-you-package',
    category: 'Gifts',
    description: "Premium package combining Naivasha blooms and artisan Kenyan chocolates.",
    longDescription: "This premium package combines our 'Sunkissed' bouquet with artisan-crafted Kenyan chocolates and a personalized gold-foil message card. It is the ultimate convenience in luxury gifting, reflecting the highest standards of House of Petals artistry."
  }
];
