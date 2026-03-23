
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
  { 
    id: '1', 
    name: 'Deluxe pink boquet', 
    price: 4500, 
    image: 'deluxe-pink-bouquet', 
    category: 'Flowers',
    description: "A breathtaking arrangement of premium pink blooms, symbolizing grace and admiration. Perfectly hand-tied and wrapped in our signature luxury paper."
  },
  { 
    id: '2', 
    name: 'Forever yours', 
    price: 4000, 
    image: 'forever-yours', 
    category: 'Flowers',
    description: "Our signature red roses bouquet designed to express deep devotion. Each stem is selected for its vibrant color and velvet texture."
  },
  { 
    id: '3', 
    name: 'Heart arrangement', 
    price: 5700, 
    image: 'heart-arrangement', 
    category: 'Flowers',
    description: "A meticulously crafted heart-shaped floral masterpiece. A romantic gesture that speaks volumes without a single word."
  },
  { 
    id: '4', 
    name: 'Pinky white carnation', 
    price: 3000, 
    image: 'pinky-white-carnation', 
    category: 'Flowers',
    description: "Delicate pink and white carnations arranged to create a soft, ethereal look. Ideal for birthdays and heartfelt 'thank you' messages."
  },
  { 
    id: '5', 
    name: 'Chrysanthemums mix', 
    price: 5000, 
    image: 'chrysanthemums-mix', 
    category: 'Flowers',
    description: "A vibrant medley of fresh chrysanthemums in various hues, bringing a cheerful and energetic vibe to any space."
  },
  { 
    id: '6', 
    name: 'Sunkissed combo boquet', 
    price: 7900, 
    image: 'sunkissed-combo-boquet', 
    category: 'Flowers',
    description: "A radiant combination of our brightest blooms, designed to mimic the warmth of a Nairobi sunset."
  },
  { id: '7', name: 'Sweet pink', price: 3500, image: 'sweet-pink', category: 'Flowers', description: "Sweet and charming pink roses paired with delicate fillers for a classic, elegant look." },
  { id: '8', name: 'All white box boquet', price: 4500, image: 'all-white-box-boquet', category: 'Flowers', description: "Pure elegance in a box. A pristine arrangement of all-white flowers, perfect for condolences or minimalist celebrations." },
  { id: '9', name: 'Floral basket arrangement', price: 4800, image: 'floral-basket-arrangement', category: 'Flowers', description: "A rustic yet refined basket brimming with a variety of garden-fresh seasonal flowers." },
  { id: '10', name: 'Velvet touch', price: 9500, image: 'velvet-touch', category: 'Flowers', description: "Our premium ultra-luxury collection. Features rare, large-headed roses that feel like velvet to the touch." },
  { id: '11', name: 'Standard mixed boquet', price: 4600, image: 'standard-mixed-boquet', category: 'Flowers', description: "A versatile and beautiful mix of seasonal blooms, perfect for any occasion from House of Petals." },
  { id: '12', name: 'Sunkissed vase roses', price: 7500, image: 'sunkissed-vase-roses', category: 'Flowers', description: "Bright yellow roses presented in a sleek glass vase, ready to adorn any table with sunshine." },
  { id: '13', name: 'Prime hand boquet', price: 4400, image: 'prime-hand-boquet', category: 'Flowers', description: "Expertly hand-crafted and spiraled to perfection, this bouquet showcases our florists' technical skill." },
  { id: '14', name: 'Savage love boquet', price: 2700, image: 'savage-love-boquet', category: 'Flowers', description: "A bold and passionate arrangement for those who love with intensity and fire." },
  { id: '15', name: 'Red and white mix', price: 3800, image: 'red-and-white-mix', category: 'Flowers', description: "The classic contrast of red and white roses, representing unity and passion combined." },
  { id: '16', name: 'Standard red boquet', price: 2500, image: 'standard-red-boquet', category: 'Flowers', description: "Simple, timeless, and powerful. A collection of premium Kenyan red roses." },
  { id: '17', name: 'Cherry boquet', price: 5500, image: 'cherry-bouquet', category: 'Flowers', description: "Deep cherry-red tones that evoke luxury and sophistication. A House of Petals favorite." },
  { id: '18', name: 'Luxury fruit basket', price: 4500, image: 'luxury-fruit-basket', category: 'Gifts', description: "A curated selection of the finest seasonal fruits, presented with floral accents in a luxury basket." },
  { id: '19', name: 'Sunkissed', price: 2500, image: 'sunkissed', category: 'Flowers', description: "Bright and cheerful yellow blooms designed to uplift the spirit and brighten the day." },
  { id: '20', name: 'Blooming lillies', price: 9500, image: 'blooming-lillies', category: 'Flowers', description: "Stunning Oriental lilies with a heavenly fragrance that fills any room with elegance." },
  { id: '21', name: 'Mixed carnations and chocolate', price: 4000, image: 'mixed-carnations-chocolate', category: 'Gifts', description: "A sweet duo of colorful carnations and premium imported chocolates." },
  { id: '22', name: 'Bloomy touch', price: 2100, image: 'bloomy-touch', category: 'Flowers', description: "A delicate touch of fresh blooms, perfect as a small token of appreciation or surprise." },
  { id: '23', name: 'Astrorose and chocolate combo', price: 5200, image: 'astrorose-chocolate-combo', category: 'Gifts', description: "Premium roses paired with luxury chocolates for the ultimate gifting experience." },
  { id: '24', name: 'Premium basket arrangement', price: 6700, image: 'premium-basket-arrangement', category: 'Flowers', description: "An abundant and artistic arrangement featuring our most premium stems in a signature basket." },
  { id: '25', name: 'Royal boquet', price: 4200, image: 'royal-bouquet', category: 'Flowers', description: "Regal purple and deep red tones fit for royalty. Elegant, bold, and unforgettable." },
  { id: '26', name: 'Heart box arrangement', price: 4800, image: 'heart-box-arrangement', category: 'Flowers', description: "Beautifully arranged roses in a heart-shaped gift box, combining the beauty of flowers with the thrill of a gift." },
  { id: '27', name: 'Standard boquet', price: 1800, image: 'standard-bouquet', category: 'Flowers', description: "The House of Petals everyday classic. Fresh, beautiful, and locally sourced." },
  { id: '28', name: 'Classy red', price: 3500, image: 'classy-red', category: 'Flowers', description: "A sophisticated take on the traditional red rose bouquet, featuring premium wrapping and styling." },
  { id: '29', name: 'Spray roses charm', price: 4700, image: 'spray-roses-charm', category: 'Flowers', description: "Dainty spray roses that bring a touch of vintage charm and delicate beauty." },
  { id: '30', name: 'Red charm', price: 5200, image: 'red-charm', category: 'Flowers', description: "Captivating red blooms that charm the heart. Arranged for maximum visual impact." },
  { id: '31', name: 'Sassy white', price: 27000, image: 'sassy-white', category: 'Flowers', description: "The ultimate luxury statement. An massive, opulent arrangement of the finest white flowers available in Kenya." },
  { id: '32', name: 'Rose and chrysanthemums mix', price: 3800, image: 'rose-chrysanthemums-mix', category: 'Flowers', description: "A beautiful fusion of roses and chrysanthemums, creating a textured and vibrant look." },
  { id: '33', name: 'Sweet charm', price: 1500, image: 'sweet-charm', category: 'Flowers', description: "A sweet and affordable bouquet that doesn't compromise on beauty or quality." },
  { id: '34', name: 'Standard charm boquet', price: 1500, image: 'standard-charm-boquet', category: 'Flowers', description: "A charming mix of seasonal favorites, perfect for everyday gifting." },
  { id: '35', name: 'Delight bouquet', price: 2500, image: 'delight-bouquet', category: 'Flowers', description: "True to its name, this bouquet is a pure delight to receive and display." },
  { id: '36', name: 'Premium round box package', price: 6000, image: 'premium-round-box-package', category: 'Flowers', description: "Modern and chic. Premium flowers presented in our signature House of Petals round hat box." },
  { id: '37', name: 'Premium box package and lindt chocolate combo', price: 8000, image: 'premium-box-lindt-combo', category: 'Gifts', description: "A high-end gift set featuring our signature box arrangement and world-famous Lindt chocolates." },
  { id: '38', name: 'Heart box boquet and lindt chocolate combo', price: 6500, image: 'heart-box-lindt-combo', category: 'Gifts', description: "The ultimate romantic gesture. A heart-shaped box of blooms paired with decadent chocolates." },
  { 
    id: '39', 
    name: 'Lilies and chrysanthemums mix boquet', 
    price: 6000, 
    image: 'lilies-chrysanthemums-mix', 
    category: 'Flowers', 
    description: "the boquet comprises of Lilies, yellow, lollipop and purple chrysanthemums perfect for expressing warmth and affection" 
  },
  { 
    id: '40', 
    name: 'Pinky white and walker chocolate', 
    price: 4200, 
    image: 'pinky-white-walker-chocolate', 
    category: 'Gifts', 
    description: "surprise someone special with the enchanting boquet of soft pink and white roses with a touch of baby's breath  to brighten their day" 
  },
  { 
    id: '41', 
    name: 'Rozzy mix', 
    price: 3700, 
    image: 'rozzy-mix', 
    category: 'Flowers', 
    description: "stunning mixed boquet of yellow, white and purple roses that brighten any occasion with fresh and heartfelt touch" 
  },
  { 
    id: '42', 
    name: 'Pure sweetness', 
    price: 6500, 
    image: 'pure-sweetness', 
    category: 'Gifts', 
    description: "red roses and baby's breath , accompanied with 8 piece Ferrero rotcher chocolate  perfect for expressing deep love and affection." 
  },
  { 
    id: '43', 
    name: 'Just for you', 
    price: 4500, 
    image: 'just-for-you', 
    category: 'Flowers', 
    description: "the boquet combines the delicate charm charm of astromeria, lilies and vibrant lollipop chrysanthemums, with gentle springs of baby's breath making it thoughtful gift to brighten any occasion." 
  },
  { 
    id: '44', 
    name: 'Cherry wonder', 
    price: 4200, 
    image: 'cherry-wonder', 
    category: 'Flowers', 
    description: "cherry wonder comprise of interplay of white orange and lavender hues that create an understandable elegance that conveys warmth and genuine affection." 
  },
  { 
    id: '45', 
    name: 'Charmy lollipop', 
    price: 4700, 
    image: 'charmy-lollipop', 
    category: 'Flowers', 
    description: "vibrant lollipop chrysanthemums beautifully accented to brighten someone's day" 
  },
  { 
    id: '46', 
    name: 'Tropical mix', 
    price: 5000, 
    image: 'tropical-mix', 
    category: 'Flowers', 
    description: "surprise someone with enchanting boquet of lilies, astromeria, yelling and white chrysanthemums. Make them feel special and valued." 
  },
  { 
    id: '47', 
    name: 'Birthday wish', 
    price: 4000, 
    image: 'birthday-wish', 
    category: 'Gifts', 
    description: "make their Birthday memorable with this enchanting package of red roses bouquet with  a touch of baby's breath,  cadbury chocolate and  a message card." 
  },
  { 
    id: '48', 
    name: 'Love at home', 
    price: 4500, 
    image: 'love-at-home', 
    category: 'Flowers', 
    description: "50stems of radiant red roses , hand-selected for their beauty and freshness, the boquet speaks volume of affection." 
  },
  { 
    id: '49', 
    name: 'Heart box', 
    price: 4999, 
    image: 'heart-box-red-pink', 
    category: 'Flowers', 
    description: "heart box filled with red and baby pink roses perfect for office buddies" 
  },
  { 
    id: '50', 
    name: 'Sunkissed boquet', 
    price: 3700, 
    image: 'sunkissed-bouquet-new', 
    category: 'Flowers', 
    description: "white and yellow roses with touch of gypsum  perfect for brightening up someone's day" 
  },
  { 
    id: '51', 
    name: 'Lush boquet', 
    price: 2500, 
    image: 'lush-bouquet', 
    category: 'Flowers', 
    description: "lush is standard bouquet enchanted with  pink, white and red roses perfect for any special occasion" 
  },
  { 
    id: '52', 
    name: 'Lindor flat boquet', 
    price: 6000, 
    image: 'lindor-flat-bouquet', 
    category: 'Gifts', 
    description: "lindor flat boquet is a mix of roses and tropicals accompanied with lindt chocolate . The boquet conveys warmth and genuine affection" 
  },
  { 
    id: '53', 
    name: 'Tropical boquet', 
    price: 2500, 
    image: 'tropical-bouquet-new', 
    category: 'Flowers', 
    description: "s mixture of chrysanthemums and astromeria perfect for any occasion" 
  }
];
