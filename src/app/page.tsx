import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Star, ShoppingCart, Truck, ShieldCheck, Heart } from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-banner');
  
  const categories = [
    { id: 'anniversary', name: 'Anniversary', image: 'cat-anniversary' },
    { id: 'birthday', name: 'Birthday', image: 'cat-birthday' },
    { id: 'love', name: 'Love & Romance', image: 'cat-love' },
    { id: 'flowers', name: 'Flowers', image: 'cat-flowers' },
    { id: 'cakes', name: 'Cakes', image: 'cat-cakes' },
    { id: 'personalized', name: 'Personalized', image: 'cat-personalized' }
  ];

  const featured = [
    { id: '1', name: 'Sweet Passion Flower & Cake Combo', price: 6500, image: 'prod-roses', category: 'Combos' },
    { id: '2', name: 'Signature Black Forest Cake', price: 3500, image: 'prod-cake', category: 'Cakes' },
    { id: '3', name: 'Elegant Phalaenopsis Orchid', price: 4800, image: 'prod-orchid', category: 'Plants' },
    { id: '4', name: 'Luxury Fruit & Wine Basket', price: 7200, image: 'prod-basket', category: 'Gift Baskets' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px]">
          <Image 
            src={heroImg?.imageUrl || ''}
            alt="Gifts & Flowers Kenya Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-xl text-white space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">Send Flowers & Gifts Across Kenya</h1>
                <p className="text-lg md:text-xl font-medium drop-shadow-sm">Reliable same day delivery in Nairobi and surrounding areas.</p>
                <Link href="/catalog">
                  <Button className="bg-[#6db33f] hover:bg-[#5a9b34] text-white font-bold h-12 px-10 rounded-full text-lg shadow-lg transform transition hover:scale-105 mt-4">
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section (Circles) */}
        <section className="py-12 md:py-20 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e24] uppercase tracking-wide">Shop by Category</h2>
            <div className="w-20 h-1 bg-[#6db33f] mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {categories.map((cat) => {
              const img = PlaceHolderImages.find(i => i.id === cat.image);
              return (
                <Link href={`/catalog?category=${cat.id}`} key={cat.id} className="group flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#6db33f] transition-all duration-300 shadow-md">
                    <Image 
                      src={img?.imageUrl || ''} 
                      alt={cat.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={img?.imageHint}
                    />
                  </div>
                  <span className="mt-4 text-sm font-bold text-[#1e1e24] group-hover:text-[#6db33f] uppercase tracking-tight text-center">{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e24] uppercase tracking-wide">Featured Gifts</h2>
                <p className="text-gray-500 text-sm mt-1">Hand-picked by our expert florists for you.</p>
              </div>
              <Link href="/catalog" className="inline-flex items-center gap-2 text-[#6db33f] font-bold hover:underline transition-all">
                VIEW ALL COLLECTION <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featured.map((product) => {
                const img = PlaceHolderImages.find(i => i.id === product.image);
                return (
                  <div key={product.id} className="bg-white group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
                      <Image 
                        src={img?.imageUrl || ''}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={img?.imageHint}
                      />
                      <div className="absolute top-3 right-3">
                        <Button size="icon" variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-[#6db33f] hover:text-white transition-colors h-8 w-8">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </Link>
                    <div className="p-5 space-y-3">
                      <div className="flex gap-1 text-yellow-400">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                        <span className="text-[10px] text-gray-400 ml-1 font-medium">(24)</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#1e1e24] line-clamp-2 h-10 group-hover:text-[#6db33f] transition-colors leading-tight">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h3>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                        <span className="text-lg font-extrabold text-[#6db33f]">KES {product.price.toLocaleString()}</span>
                        <Button size="icon" className="rounded-full bg-[#6db33f] hover:bg-[#5a9b34] text-white h-9 w-9 shadow-md">
                          <ShoppingCart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust & Service Bar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-[#6db33f]/10 rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-[#6db33f]" />
                </div>
                <h4 className="font-bold text-lg uppercase tracking-tight">Same Day Delivery</h4>
                <p className="text-sm text-gray-500 max-w-xs">Order before 4 PM for guaranteed same-day delivery within Nairobi CBD and environs.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-[#6db33f]/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-[#6db33f]" />
                </div>
                <h4 className="font-bold text-lg uppercase tracking-tight">100% Secure Payment</h4>
                <p className="text-sm text-gray-500 max-w-xs">Secure checkout process with M-PESA, Visa, Mastercard, and Airtel Money support.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-[#6db33f]/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#6db33f]" />
                </div>
                <h4 className="font-bold text-lg uppercase tracking-tight">Freshness Guaranteed</h4>
                <p className="text-sm text-gray-500 max-w-xs">We source our blooms daily from the best growers in Kenya to ensure maximum vase life.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}