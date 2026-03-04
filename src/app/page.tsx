import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Star, ShoppingCart } from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  
  const categories = [
    { id: 'anniversary', name: 'Anniversary Gifts', image: 'cat-bouquets', href: '/catalog?category=anniversary' },
    { id: 'birthday', name: 'Birthday Flowers', image: 'cat-indoor', href: '/catalog?category=birthday' },
    { id: 'love', name: 'Love & Romance', image: 'cat-gifts', href: '/catalog?category=love' }
  ];

  const featured = [
    { id: '1', name: 'Classic Red Roses Bouquet', price: 2500, image: 'prod-crimson-velvet', category: 'Flowers' },
    { id: '2', name: 'Mixed Flower Box', price: 4500, image: 'prod-emerald-fern', category: 'Arrangements' },
    { id: '3', name: 'Elegant Orchid Plant', price: 3800, image: 'prod-midnight-orchid', category: 'Plants' },
    { id: '4', name: 'Chocolate & Teddy Combo', price: 5200, image: 'prod-golden-scent', category: 'Gifts' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <section className="relative w-full h-[400px] md:h-[500px]">
          <Image 
            src={heroImg?.imageUrl || ''}
            alt="Main Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-xl text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Send Flowers & Gifts Across Kenya</h1>
                <p className="text-lg opacity-90">Experience the joy of gifting with Kenya's most reliable flower delivery service.</p>
                <div className="flex gap-4">
                  <Link href="/catalog">
                    <Button className="bg-[#6db33f] hover:bg-[#5a9b34] text-white font-bold h-12 px-8 uppercase tracking-wide">
                      Shop Now
                    </Button>
                  </Link>
                  <Link href="/catalog?category=new">
                    <Button variant="outline" className="bg-white text-black hover:bg-gray-100 font-bold h-12 px-8 border-none">
                      New Arrivals
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories Grid */}
        <section className="py-16 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-[#1e1e24]">Popular Categories</h2>
            <div className="w-16 h-1 bg-[#6db33f] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.concat(categories).map((cat, idx) => (
              <Link href={cat.href} key={idx} className="group flex flex-col items-center text-center">
                <div className="w-full aspect-square relative rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#6db33f] transition-all mb-4">
                  <Image src={PlaceHolderImages[idx]?.imageUrl} alt={cat.name} fill className="object-cover" />
                </div>
                <span className="text-sm font-bold uppercase tracking-tight text-[#1e1e24] group-hover:text-[#6db33f]">{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-bold uppercase tracking-wider text-[#1e1e24]">Featured Gifts</h2>
              <Link href="/catalog" className="text-sm font-bold text-[#6db33f] hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featured.map((product) => (
                <div key={product.id} className="bg-white group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden">
                    <Image 
                      src={PlaceHolderImages.find(i => i.id === product.image)?.imageUrl || ''}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="p-4 space-y-2">
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <h3 className="text-sm font-bold text-[#1e1e24] line-clamp-1 group-hover:text-[#6db33f] transition-colors">
                      <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#6db33f]">KES {product.price}</span>
                      <Button size="icon" variant="ghost" className="rounded-full hover:bg-[#6db33f] hover:text-white transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                <Image src="https://picsum.photos/seed/truck/40/40" width={40} height={40} alt="Delivery" className="opacity-60" />
              </div>
              <h4 className="font-bold uppercase text-sm">Same Day Delivery</h4>
              <p className="text-xs text-gray-500">Order by 4 PM for guaranteed same-day delivery within Nairobi.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                <Image src="https://picsum.photos/seed/shield/40/40" width={40} height={40} alt="Secure" className="opacity-60" />
              </div>
              <h4 className="font-bold uppercase text-sm">Secure Payment</h4>
              <p className="text-xs text-gray-500">Secure checkout with M-PESA, Visa, and Mastercard.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                <Image src="https://picsum.photos/seed/leaf/40/40" width={40} height={40} alt="Fresh" className="opacity-60" />
              </div>
              <h4 className="font-bold uppercase text-sm">Freshness Guaranteed</h4>
              <p className="text-xs text-gray-500">We source directly from growers to ensure your blooms last longer.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}