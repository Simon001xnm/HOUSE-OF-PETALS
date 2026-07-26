/**
 * @fileOverview Simplified product data for House of Petals.
 * Focuses on high-impact keywords: Naivasha Fresh, Same-Day Delivery, Luxury.
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const ALL_PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Deluxe Pink Bouquet', 
    price: 4500, 
    image: 'deluxe-pink-bouquet', 
    category: 'Flowers',
    description: "Fresh Naivasha pink roses. Premium hand-tied arrangement."
  },
  { 
    id: '2', 
    name: 'Forever Yours', 
    price: 4000, 
    image: 'forever-yours', 
    category: 'Flowers',
    description: "Classic deep red roses. The ultimate Nairobi romance gift."
  },
  { 
    id: '3', 
    name: 'Heart Arrangement', 
    price: 5700, 
    image: 'heart-arrangement', 
    category: 'Flowers',
    description: "Signature heart-shaped roses. Perfect for anniversaries."
  },
  { 
    id: '4', 
    name: 'Pinky White Carnation', 
    price: 3000, 
    image: 'pinky-white-carnation', 
    category: 'Flowers',
    description: "Soft pastel blooms. Freshly picked from Naivasha farms."
  },
  { 
    id: '5', 
    name: 'Chrysanthemums Mix', 
    price: 5000, 
    image: 'chrysanthemums-mix', 
    category: 'Flowers',
    description: "Long-lasting mixed mums. Vibrant colors, 2-week vase life."
  },
  { 
    id: '6', 
    name: 'Sunkissed Combo', 
    price: 6500, 
    image: 'sunkissed-combo-boquet', 
    category: 'Flowers',
    description: "Bright yellow roses and white lilies. Instant room brightener."
  },
  { 
    id: '7', 
    name: 'Sweet Pink', 
    price: 3800, 
    image: 'sweet-pink', 
    category: 'Flowers',
    description: "Elegant pastel roses. Same-day delivery across Nairobi."
  },
  { 
    id: '8', 
    name: 'Luxury White Box', 
    price: 7200, 
    image: 'all-white-box-boquet', 
    category: 'Flowers',
    description: "Elite white roses in a luxury velvet box. Pure class."
  },
  { 
    id: '9', 
    name: 'Floral Basket', 
    price: 5500, 
    image: 'floral-basket-arrangement', 
    category: 'Flowers',
    description: "Rustic luxury basket arrangement. Seasonal Naivasha mix."
  },
  { 
    id: '10', 
    name: 'Velvet Touch', 
    price: 4800, 
    image: 'velvet-touch', 
    category: 'Flowers',
    description: "Deep red and purple mix. Exotic and bold."
  },
  { 
    id: '11', 
    name: 'Daily Mixed Bouquet', 
    price: 3500, 
    image: 'standard-mixed-boquet', 
    category: 'Flowers',
    description: "Our daily best-seller. The freshest seasonal pick."
  },
  { 
    id: '12', 
    name: 'Sunkissed Vase', 
    price: 5200, 
    image: 'sunkissed-vase-roses', 
    category: 'Flowers',
    description: "Premium yellow roses in a clear glass vase."
  },
  { 
    id: '13', 
    name: 'Prime Hand Bouquet', 
    price: 4200, 
    image: 'call-center', 
    category: 'Flowers',
    description: "Artisan hand-tied bouquet. Naivasha's finest roses."
  },
  { 
    id: '14', 
    name: 'Savage Love', 
    price: 5800, 
    image: 'savage-love-boquet', 
    category: 'Flowers',
    description: "Bold red roses with wild greens. Passionate & loud."
  },
  { 
    id: '15', 
    name: 'Red & White Mix', 
    price: 4000, 
    image: 'red-and-white-mix', 
    category: 'Flowers',
    description: "Classic combo of red roses and white carnations."
  },
  { 
    id: '16', 
    name: 'Standard Red', 
    price: 3800, 
    image: 'standard-red-boquet', 
    category: 'Flowers',
    description: "Premium red roses. The Nairobi standard for love."
  },
  { 
    id: '17', 
    name: 'Cherry Bouquet', 
    price: 4400, 
    image: 'cherry-bouquet', 
    category: 'Flowers',
    description: "Sweet cherry-colored roses. Fresh and energetic."
  },
  { 
    id: '18', 
    name: 'Luxury Fruit Basket', 
    price: 4500, 
    image: 'luxury-fruit-basket', 
    category: 'Gifts', 
    description: "Export-quality fruits paired with fresh roses."
  },
  { 
    id: '19', 
    name: 'Sunkissed Roses', 
    price: 3200, 
    image: 'sunkissed', 
    category: 'Flowers',
    description: "Pure yellow roses from Naivasha. 100% fresh."
  },
  { 
    id: '20', 
    name: 'Majestic Lilies', 
    price: 5500, 
    image: 'blooming-lillies', 
    category: 'Flowers',
    description: "Fragrant white lilies. Architectural and elegant."
  },
  { 
    id: '21', 
    name: 'Roses & Chocolate', 
    price: 5900, 
    image: 'mixed-carnations-chocolate', 
    category: 'Gifts',
    description: "Premium roses paired with artisan chocolates."
  },
  { 
    id: '22', 
    name: 'Bloomy Touch', 
    price: 4100, 
    image: 'bloomy-touch', 
    category: 'Flowers',
    description: "Lush mix of spray roses and seasonal mums."
  },
  { 
    id: '23', 
    name: 'Lindt & Rose Combo', 
    price: 6800, 
    image: 'astrorose-chocolate-combo', 
    category: 'Gifts',
    description: "The ultimate luxury gift. Lindt chocolates and red roses."
  },
  { 
    id: '24', 
    name: 'Grand Basket', 
    price: 7500, 
    image: 'premium-basket-arrangement', 
    category: 'Flowers',
    description: "Extra-large basket for grand celebrations."
  },
  { 
    id: '25', 
    name: 'Royal Red Box', 
    price: 8500, 
    image: 'royal-bouquet', 
    category: 'Flowers',
    description: "Our most luxurious 100-rose box. Pure majesty."
  }
];
