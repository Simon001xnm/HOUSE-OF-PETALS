
/**
 * @fileOverview Centralized product data for House of Petals.
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
    description: "A breathtaking arrangement of premium pink blooms, symbolizing grace and admiration.",
    longDescription: "Our Deluxe Pink Bouquet is the epitome of Kenyan floral elegance. Sourced at dawn from the high-altitude farms of Naivasha, these blooms are chosen for their exceptional petal count and vibrant hue. Each arrangement is meticulously hand-tied and wrapped in our signature eco-luxury paper, ensuring a presentation that is as sustainable as it is stunning."
  },
  { 
    id: '2', 
    name: 'Forever yours', 
    price: 4000, 
    image: 'forever-yours', 
    category: 'Flowers',
    description: "Our signature red roses bouquet designed to express deep devotion.",
    longDescription: "The 'Forever Yours' collection features the iconic Explorer roses, known for their deep crimson velvet texture and long-lasting nature. Hand-selected for consistency and beauty, these roses represent the peak of Nairobi's luxury floral market."
  },
  { 
    id: '3', 
    name: 'Heart arrangement', 
    price: 5700, 
    image: 'heart-arrangement', 
    category: 'Flowers',
    description: "A meticulously crafted heart-shaped floral masterpiece.",
    longDescription: "Designed for moments where words fall short, this heart arrangement uses over 40 premium stems of spray roses and carnations. It is an architectural floral piece that serves as a centerpiece for romance."
  },
  { 
    id: '4', 
    name: 'Pinky white carnation', 
    price: 3000, 
    image: 'pinky-white-carnation', 
    category: 'Flowers',
    description: "Delicate pink and white carnations arranged to create a soft, ethereal look.",
    longDescription: "A whimsical dance of colors, this bouquet combines the ruffly textures of premium carnations with the subtle scent of baby's breath. It is a favorite for newborn celebrations and 'just because' moments."
  },
  { 
    id: '5', 
    name: 'Chrysanthemums mix', 
    price: 5000, 
    image: 'chrysanthemums-mix', 
    category: 'Flowers',
    description: "A vibrant medley of fresh chrysanthemums in various hues.",
    longDescription: "Featuring the unique 'Lollipop' and 'Purple' chrysanthemum varieties, this mix is a celebration of texture. These flowers are celebrated for their incredible vase life, often lasting up to two weeks with proper care."
  },
  { 
    id: '18', 
    name: 'Luxury fruit basket', 
    price: 4500, 
    image: 'luxury-fruit-basket', 
    category: 'Gifts', 
    description: "A curated selection of the finest seasonal fruits with floral accents.",
    longDescription: "Our luxury fruit baskets are more than a gift; they are a wellness experience. We source organic, export-quality fruits and pair them with fresh seasonal blooms in a hand-woven Kenyan basket."
  },
  {
    id: '63',
    name: 'Just for you package',
    price: 5500,
    image: 'just-for-you-package',
    category: 'Gifts',
    description: "An enchanting gift ensemble designed to deliver a personal touch of luxury.",
    longDescription: "This premium package combines our 'Sunkissed' bouquet with artisan-crafted Kenyan chocolates and a personalized gold-foil message card. It is the ultimate convenience in luxury gifting."
  }
];
