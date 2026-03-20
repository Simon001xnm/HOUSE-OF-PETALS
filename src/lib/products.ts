
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
}

export const ALL_PRODUCTS: Product[] = [
  { id: '1', name: 'Deluxe pink boquet', price: 4500, image: 'deluxe-pink-bouquet', category: 'Flowers' },
  { id: '2', name: 'Forever yours', price: 4000, image: 'forever-yours', category: 'Flowers' },
  { id: '3', name: 'Heart arrangement', price: 5700, image: 'heart-arrangement', category: 'Flowers' },
  { id: '4', name: 'Pinky white carnation', price: 3000, image: 'pinky-white-carnation', category: 'Flowers' },
  { id: '5', name: 'Chrysanthemums mix', price: 5000, image: 'chrysanthemums-mix', category: 'Flowers' },
  { id: '6', name: 'Sunkissed combo boquet', price: 7900, image: 'sunkissed-combo-boquet', category: 'Flowers' },
  { id: '7', name: 'Sweet pink', price: 3500, image: 'sweet-pink', category: 'Flowers' },
  { id: '8', name: 'All white box boquet', price: 4500, image: 'all-white-box-boquet', category: 'Flowers' },
  { id: '9', name: 'Floral basket arrangement', price: 4800, image: 'floral-basket-arrangement', category: 'Flowers' },
  { id: '10', name: 'Velvet touch', price: 9500, image: 'velvet-touch', category: 'Flowers' },
  { id: '11', name: 'Standard mixed boquet', price: 4600, image: 'standard-mixed-boquet', category: 'Flowers' },
  { id: '12', name: 'Sunkissed vase roses', price: 7500, image: 'sunkissed-vase-roses', category: 'Flowers' },
  { id: '13', name: 'Prime hand boquet', price: 4400, image: 'prime-hand-boquet', category: 'Flowers' },
  { id: '14', name: 'Savage love boquet', price: 2700, image: 'savage-love-boquet', category: 'Flowers' },
  { id: '15', name: 'Red and white mix', price: 3800, image: 'red-and-white-mix', category: 'Flowers' },
  { id: '16', name: 'Standard red boquet', price: 2500, image: 'standard-red-boquet', category: 'Flowers' },
  { id: '17', name: 'Cherry boquet', price: 5500, image: 'cherry-bouquet', category: 'Flowers' },
  { id: '18', name: 'Luxury fruit basket', price: 4500, image: 'luxury-fruit-basket', category: 'Gifts' },
  { id: '19', name: 'Sunkissed', price: 2500, image: 'sunkissed', category: 'Flowers' },
  { id: '20', name: 'Blooming lillies', price: 9500, image: 'blooming-lillies', category: 'Flowers' },
  { id: '21', name: 'Mixed carnations and chocolate', price: 4000, image: 'mixed-carnations-chocolate', category: 'Gifts' },
  { id: '22', name: 'Bloomy touch', price: 2100, image: 'bloomy-touch', category: 'Flowers' },
  { id: '23', name: 'Astrorose and chocolate combo', price: 5200, image: 'astrorose-chocolate-combo', category: 'Gifts' },
  { id: '24', name: 'Premium basket arrangement', price: 6700, image: 'premium-basket-arrangement', category: 'Flowers' },
  { id: '25', name: 'Royal boquet', price: 4200, image: 'royal-bouquet', category: 'Flowers' },
  { id: '26', name: 'Heart box arrangement', price: 4800, image: 'heart-box-arrangement', category: 'Flowers' },
  { id: '27', name: 'Standard boquet', price: 1800, image: 'standard-bouquet', category: 'Flowers' },
  { id: '28', name: 'Classy red', price: 3500, image: 'classy-red', category: 'Flowers' },
  { id: '29', name: 'Spray roses charm', price: 4700, image: 'spray-roses-charm', category: 'Flowers' },
  { id: '30', name: 'Red charm', price: 5200, image: 'red-charm', category: 'Flowers' },
  { id: '31', name: 'Sassy white', price: 27000, image: 'sassy-white', category: 'Flowers' },
  { id: '32', name: 'Rose and chrysanthemums mix', price: 3800, image: 'rose-chrysanthemums-mix', category: 'Flowers', description: "Stunning mixed boquet of yellow, white and purple roses that brighten any occasion with fresh and heartfelt touch" },
  { id: '33', name: 'Sweet charm', price: 1500, image: 'sweet-charm', category: 'Flowers' },
  { id: '34', name: 'Standard charm boquet', price: 1500, image: 'standard-charm-boquet', category: 'Flowers' },
  { id: '35', name: 'Delight bouquet', price: 2500, image: 'delight-bouquet', category: 'Flowers' },
  { id: '36', name: 'Premium round box package', price: 6000, image: 'premium-round-box-package', category: 'Flowers' },
  { id: '37', name: 'Premium box package and lindth chocolate combo', price: 8000, image: 'premium-box-lindt-combo', category: 'Gifts' },
  { id: '38', name: 'Heart box boquet and lindth chocolate combo', price: 6500, image: 'heart-box-lindt-combo', category: 'Gifts' },
  { id: '39', name: 'Lilies and chrysanthemums mix boquet', price: 6000, image: 'lilies-chrysanthemums-mix', category: 'Flowers', description: "The boquet comprises of Lilies, yellow, lollipop and purple chrysanthemums perfect for expressing warmth and affection" },
  { id: '40', name: 'Pinky white and walker chocolate', price: 4200, image: 'pinky-white-walker-chocolate', category: 'Gifts', description: "Surprise someone special with the enchanting boquet of soft pink and white roses with a touch of baby's breath to brighten their day" },
  { id: '41', name: 'Rozzy mix', price: 3700, image: 'rozzy-mix', category: 'Flowers', description: "Stunning mixed boquet of yellow, white and purple roses that brighten any occasion with fresh and heartfelt touch" },
  { id: '42', name: 'Pure sweetness', price: 6500, image: 'pure-sweetness', category: 'Gifts', description: "Red roses and baby's breath, accompanied with 8 piece Ferrero Rocher chocolate perfect for expressing deep love and affection." },
  { id: '43', name: 'Just for you', price: 4500, image: 'just-for-you', category: 'Flowers', description: "The boquet combines the delicate charm of astromeria, lilies and vibrant lollipop chrysanthemums, with gentle springs of baby's breath making it thoughtful gift to brighten any occasion." },
  { id: '44', name: 'Cherry wonder', price: 4200, image: 'cherry-wonder', category: 'Flowers', description: "Cherry wonder comprise of interplay of white orange and lavender hues that create an understandable elegance that conveys warmth and genuine affection." },
  { id: '45', name: 'Charmy lollipop', price: 4700, image: 'charmy-lollipop', category: 'Flowers', description: "vibrant lollipop chrysanthemums beautifully accented to brighten someone's day" },
  { id: '46', name: 'Tropical mix', price: 5000, image: 'tropical-mix', category: 'Flowers', description: "surprise someone with enchanting boquet of lilies, astromeria, yelling and white chrysanthemums. Make them feel special and valued." },
  { id: '47', name: 'Birthday wish', price: 4000, image: 'birthday-wish', category: 'Gifts', description: "make their Birthday memorable with this enchanting package of red roses bouquet with a touch of baby's breath, cadbury chocolate and a message card." },
  { id: '48', name: 'Love at home', price: 4500, image: 'love-at-home', category: 'Flowers', description: "50stems of radiant red roses, hand-selected for their beauty and freshness, the boquet speaks volume of affection." },
  { id: '49', name: 'Heart box', price: 4999, image: 'heart-box-red-pink', category: 'Flowers', description: "heart box filled with red and baby pink roses perfect for office buddies" },
  { id: '50', name: 'Sunkissed boquet', price: 3700, image: 'sunkissed-bouquet-new', category: 'Flowers', description: "white and yellow roses with touch of gypsum perfect for brightening up someone's day" },
  { id: '51', name: 'Lush boquet', price: 2500, image: 'lush-bouquet', category: 'Flowers', description: "lush is standard bouquet enchanted with pink, white and red roses perfect for any special occasion" },
  { id: '52', name: 'Lindor flat boquet', price: 6000, image: 'lindor-flat-bouquet', category: 'Gifts', description: "lindor flat boquet is a mix of roses and tropicals accompanied with lindt chocolate . The boquet conveys warmth and genuine affection" }
];
