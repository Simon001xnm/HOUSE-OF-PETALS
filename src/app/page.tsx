
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart, MessageCircle, ChevronRight, ArrowRight, Search } from 'lucide-react';

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

  const recentProducts = [
    { name: 'Joyful Flower Bouquet', price: 'KSh 3,300', image: 'prod-roses', badge: null },
    { name: 'Brilliant Flower Combo', price: 'KSh 7,000', image: 'cat-flowers', badge: 'SOLD OUT' },
    { name: 'Roses Heart Box & Ferrero', price: 'KSh 7,400', oldPrice: 'KSh 8,100', image: 'cat-personalized', badge: '-9%' },
    { name: 'Beautiful Flower Combo', price: 'KSh 6,400', oldPrice: 'KSh 7,000', image: 'cat-flowers', badge: '-9%' },
    { name: 'Sunshine Rose Combo', price: 'KSh 5,900', oldPrice: 'KSh 6,200', image: 'prod-roses', badge: '-5%' },
    { name: 'Roses & 1kg Red Velvet Cake', price: 'KSh 6,500', image: 'cat-cakes', badge: null },
  ];

  const featuredProducts = [
    { name: 'Beauty Box Bouquet', price: 'KSh 6,500', image: 'prod-roses', badge: 'SOLD OUT' },
    { name: 'Birthday Roses Hat Box Bouquet', price: 'KSh 6,000', image: 'cat-birthday', badge: null },
    { name: 'Forever Mine Gift Combo', price: 'KSh 14,500', image: 'prod-basket', badge: null },
    { name: 'Sunshine Vase Bouquet', price: 'KSh 5,600', image: 'prod-orchid', badge: 'SOLD OUT' },
    { name: '100cm Teddy & Red Roses Combo', price: 'KSh 9,300', image: 'cat-anniversary', badge: null },
    { name: 'Blissful Box Bouquet', price: 'KSh 6,000', image: 'cat-flowers', badge: null },
    { name: 'Red Roses Gift Hamper', price: 'KSh 8,000', image: 'cat-love', badge: null },
    { name: 'Delightful Gift Hamper for Her', price: 'KSh 11,300', image: 'cat-personalized', badge: null },
    { name: 'Adorable Gift Package', price: 'KSh 8,500', image: 'prod-cake', badge: null },
    { name: 'From the Heart Bouquet', price: 'KSh 6,500', oldPrice: 'KSh 7,500', image: 'prod-roses', badge: '-13%' },
    { name: 'Epic Gift Combo', price: 'KSh 7,900', image: 'cat-flowers', badge: null },
    { name: 'Ladys Heart', price: 'KSh 3,600', oldPrice: 'KSh 4,000', image: 'cat-love', badge: '-10%' },
  ];

  const bannerCards = [
    { 
      title: 'All Flowers', 
      desc: 'Shop fresh flowers for your loved one! Order & send beautiful flowers such as roses, lilies, carnations & more.', 
      image: 'cat-flowers' 
    },
    { 
      title: 'Birthday flowers', 
      desc: 'Order beautiful birthday flowers from flower delivery Nairobi, crafted by our expert florists & delivered.', 
      image: 'cat-birthday' 
    },
    { 
      title: 'Romantic flowers', 
      desc: 'Flower delivery Kenya offers stunning flower bouquets for love & romance to gift your special someone.', 
      image: 'cat-love' 
    }
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
        <section className="bg-white py-10 md:py-16 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
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

              <div className="lg:w-1/3 relative aspect-square w-full max-w-md">
                <Image 
                  src="https://picsum.photos/seed/gfhero/600/600" 
                  alt="Main Bouquet" 
                  fill 
                  className="object-contain"
                  data-ai-hint="flower bouquet"
                />
              </div>

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
        <section className="py-10">
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

        {/* Recent Flowers & Gifts Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-8 border-b-2 border-gray-100 pb-4">
              <div className="relative">
                <h2 className="text-2xl font-bold text-[#333]">Recent Flowers & Gifts</h2>
                <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-[#be1e2d]"></div>
              </div>
              <Link href="/catalog" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#be1e2d] flex items-center gap-1">
                VIEW MORE <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {recentProducts.map((prod, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center">
                  <div className="relative w-full aspect-square bg-gray-50 mb-4 overflow-hidden border border-gray-100 rounded-lg">
                    <Image 
                      src={`https://picsum.photos/seed/recent${idx}/400/400`} 
                      alt={prod.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {prod.badge && (
                      <div className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold text-white uppercase rounded-sm ${prod.badge === 'SOLD OUT' ? 'bg-[#333]' : 'bg-[#be1e2d]'}`}>
                        {prod.badge}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xs font-bold text-gray-800 line-clamp-1 mb-2 hover:text-[#be1e2d] transition-colors">
                    <Link href={`/products/${idx}`}>{prod.name}</Link>
                  </h3>
                  <div className="flex items-center gap-2">
                    {prod.oldPrice && <span className="text-[10px] text-gray-400 line-through">{prod.oldPrice}</span>}
                    <span className="text-[#be1e2d] font-bold text-sm">{prod.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </section>

        {/* Large Banners Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bannerCards.map((card, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image 
                    src={`https://picsum.photos/seed/banner${idx}/800/600`} 
                    alt={card.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                    <p className="text-sm leading-relaxed mb-6 opacity-90 max-w-[240px] line-clamp-3">
                      {card.desc}
                    </p>
                    <Button className="w-fit bg-[#be1e2d] hover:bg-[#a51a27] text-white rounded-full font-bold px-6 h-10 text-xs uppercase tracking-widest">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Gifts & Flowers Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-10 border-b-2 border-gray-100 pb-4">
              <div className="relative">
                <h2 className="text-2xl font-bold text-[#333]">Featured Gifts & Flowers</h2>
                <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-[#be1e2d]"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
              {featuredProducts.map((prod, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center relative">
                  <div className="relative w-full aspect-square bg-gray-50 mb-4 overflow-hidden border border-gray-100 rounded-sm">
                    <Image 
                      src={`https://picsum.photos/seed/feat${idx}/400/400`} 
                      alt={prod.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {prod.badge && (
                      <div className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold text-white uppercase rounded-sm ${prod.badge === 'SOLD OUT' ? 'bg-[#333]' : 'bg-[#be1e2d]'}`}>
                        {prod.badge}
                      </div>
                    )}
                    
                    {/* Hover State Icons */}
                    <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-[#be1e2d] text-white text-[10px] font-bold uppercase py-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#a51a27]">
                        <ShoppingCart className="w-3 h-3" /> Add To Cart
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 p-1.5 rounded-sm shadow-sm cursor-pointer hover:bg-white text-gray-700">
                        <Search className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-[13px] font-medium text-gray-800 line-clamp-2 mb-2 hover:text-[#be1e2d] transition-colors h-10 flex items-center justify-center px-2">
                    <Link href={`/products/${idx}`}>{prod.name}</Link>
                  </h3>
                  
                  <div className="flex flex-col items-center gap-0.5">
                    {prod.oldPrice && <span className="text-[11px] text-gray-400 line-through leading-none">{prod.oldPrice}</span>}
                    <span className="text-[#be1e2d] font-bold text-sm leading-none">{prod.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/catalog" className="text-[11px] font-bold uppercase tracking-widest text-gray-600 hover:text-[#be1e2d] flex items-center gap-1 border-b border-gray-300 pb-1">
                VIEW MORE <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
