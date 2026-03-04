"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart, MessageCircle } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: 'Birthday', image: 'cat-birthday' },
    { name: 'Flowers', image: 'cat-flowers' },
    { name: 'Combos', image: 'prod-roses' },
    { name: 'Anniversary', image: 'cat-anniversary' },
    { name: 'Cakes', image: 'cat-cakes' },
    { name: 'Hampers', image: 'prod-basket' },
    { name: 'Chocolates', image: 'cat-personalized' },
    { name: 'Drinks', image: 'prod-orchid' }
  ];

  const heroGridProducts = [
    { name: 'Happy Birthday Flower Combo', price: 'KSh 7,300', image: 'prod-roses' },
    { name: 'Mixed Roses & Lindt Chocolates', price: 'KSh 6,000', image: 'cat-personalized' },
    { name: 'Blooming Love Combo', price: 'KSh 5,200', image: 'prod-roses' },
    { name: 'Lovely Heart Box Bouquet', price: 'KSh 9,800', image: 'prod-roses' }
  ];

  const fallbackImage = 'https://picsum.photos/seed/fallback/400/400';

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Floating Sidebar Elements */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col">
          {['KES', 'USD', 'EUR', 'GBP'].map((curr) => (
            <div key={curr} className="currency-tag w-10 text-center py-2">
              {curr}
            </div>
          ))}
        </div>

        {/* Floating Chat Buttons */}
        <div className="fixed bottom-6 left-6 z-50">
          <Link href="#" className="w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8 text-white fill-current" />
          </Link>
        </div>
        <div className="fixed bottom-6 right-6 z-50">
          <div className="w-14 h-14 bg-[#be1e2d] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white py-10 md:py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Hero Left Content */}
              <div className="lg:w-1/3 text-center lg:text-left space-y-6">
                <span className="text-[#be1e2d] font-bold text-sm tracking-wide">Gifts & Flowers Delivery Nairobi</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#333] leading-tight">
                  Fresh Flower Delivery Shop in Kenya
                </h1>
                <p className="text-gray-600 text-lg">
                  We have gorgeous gifts and flower bouquets delivered to the doorstep.
                </p>
                <Button className="bg-[#be1e2d] hover:bg-[#a51a27] text-white font-bold h-12 px-8 rounded-full text-sm uppercase tracking-widest shadow-lg flex items-center gap-2 mx-auto lg:mx-0">
                  SHOP NOW <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>

              {/* Hero Center Image */}
              <div className="lg:w-1/3 relative aspect-square w-full max-w-md">
                <Image 
                  src="https://picsum.photos/seed/gfhero/600/600" 
                  alt="Main Bouquet" 
                  fill 
                  className="object-contain"
                  data-ai-hint="flower bouquet"
                />
              </div>

              {/* Hero Right Grid */}
              <div className="lg:w-1/3 grid grid-cols-2 gap-4 w-full">
                {heroGridProducts.map((prod, idx) => (
                  <div key={idx} className="bg-white p-2 text-center group">
                    <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3 border border-gray-100">
                      <Image 
                        src={`https://picsum.photos/seed/gfprod${idx}/300/300`} 
                        alt={prod.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-[11px] font-bold text-gray-800 line-clamp-1 mb-1">{prod.name}</h3>
                    <p className="text-[#be1e2d] font-black text-xs">{prod.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category Circles Row */}
        <section className="py-10 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center overflow-x-auto gap-8 pb-4 scrollbar-hide">
              {categories.map((cat, idx) => {
                const img = PlaceHolderImages.find(i => i.id === cat.image);
                return (
                  <Link href={`/catalog?category=${cat.name.toLowerCase()}`} key={idx} className="flex flex-col items-center shrink-0 group">
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#be1e2d] transition-all shadow-md">
                      <Image 
                        src={img?.imageUrl || fallbackImage} 
                        alt={cat.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform"
                        data-ai-hint={img?.imageHint || 'gift'}
                      />
                    </div>
                    <span className="mt-3 text-xs md:text-sm font-bold text-gray-700 group-hover:text-[#be1e2d]">{cat.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}