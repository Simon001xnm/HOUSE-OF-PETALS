
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart, ArrowRight, Search } from 'lucide-react';

export default function Home() {
  const getImg = (id: string) => PlaceHolderImages.find(i => i.id === id);
  const fallbackImage = '/ed.jpeg';

  const categories = [
    { name: 'Birthday', image: 'cat-birthday' },
    { name: 'Flowers', image: 'cat-flowers' },
    { name: 'Combos', image: 'cat-combos' },
    { name: 'Anniversary', image: 'cat-anniversary' },
    { name: 'Cakes', image: 'cat-cakes' },
    { name: 'Hampers', image: 'cat-hampers' },
    { name: 'Chocolates', image: 'cat-chocolates' },
    { name: 'Drinks', image: 'cat-drinks' }
  ];

  const heroGridProducts = [
    { name: 'Birthday Flower Combo', price: 'KSh 7,300', image: 'hp-hero-1' },
    { name: 'Mixed Roses & Lindt', price: 'KSh 6,000', image: 'hp-hero-2' },
    { name: 'Blooming Love Combo', price: 'KSh 5,200', image: 'hp-hero-3' },
    { name: 'Lovely Heart Box', price: 'KSh 9,800', image: 'hp-hero-4' }
  ];

  const recentProducts = [
    { name: 'Joyful Flower Bouquet', price: 'KSh 3,300', image: 'hp-hero-1', badge: null },
    { name: 'Brilliant Flower Combo', price: 'KSh 7,000', image: 'cat-flowers', badge: 'SOLD OUT' },
    { name: 'Roses Heart Box & Ferrero', price: 'KSh 7,400', oldPrice: 'KSh 8,100', image: 'cat-chocolates', badge: '-9%' },
    { name: 'Beautiful Flower Combo', price: 'KSh 6,400', oldPrice: 'KSh 7,000', image: 'cat-flowers', badge: '-9%' },
    { name: 'Sunshine Rose Combo', price: 'KSh 5,900', oldPrice: 'KSh 6,200', image: 'hp-hero-3', badge: '-5%' },
    { name: 'Roses & 1kg Red Velvet', price: 'KSh 6,500', image: 'cat-cakes', badge: null },
  ];

  const bannerCards = [
    { 
      title: 'All Flowers', 
      desc: 'Shop fresh flowers for your loved one! Order & send beautiful flowers such as roses, lilies, carnations & more.', 
      image: 'banner-flowers' 
    },
    { 
      title: 'Birthday flowers', 
      desc: 'Order beautiful birthday flowers from House of Petals, crafted by our expert florists & delivered.', 
      image: 'banner-birthday' 
    },
    { 
      title: 'Romantic flowers', 
      desc: 'House of Petals offers stunning flower bouquets for love & romance to gift your special someone.', 
      image: 'banner-romance' 
    }
  ];

  const featuredProducts = Array.from({ length: 12 }).map((_, i) => {
    const images = ['hp-hero-1', 'hp-hero-2', 'hp-hero-3', 'hp-hero-4', 'cat-birthday', 'cat-flowers'];
    return {
      name: `House of Petals Signature ${i + 1}`,
      price: `KSh ${ (5000 + (i * 500)).toLocaleString() }`,
      image: images[i % images.length],
      badge: i % 4 === 0 ? 'SOLD OUT' : null
    };
  });

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Floating Sidebar Elements */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col shadow-xl">
          {['KES', 'USD', 'EUR', 'GBP'].map((curr) => (
            <div key={curr} className="currency-tag w-10 text-center py-2 transition-colors">
              {curr}
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="bg-white py-10 md:py-16 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 text-center lg:text-left space-y-6">
                <span className="text-[#be1e2d] font-bold text-sm tracking-wide uppercase">House of Petals Nairobi</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#333] leading-[1.1]">
                  Premium Flower Delivery Shop in Kenya
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Hand-crafted bouquets and luxury gifts delivered to your doorstep with boutique elegance.
                </p>
                <Link href="/catalog">
                  <Button className="bg-[#be1e2d] hover:bg-[#a51a27] text-white font-bold h-14 px-10 rounded-full text-sm uppercase tracking-widest shadow-xl flex items-center gap-2 mx-auto lg:mx-0 transition-transform hover:scale-105 active:scale-95">
                    SHOP NOW <ShoppingCart className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="lg:w-1/3 relative aspect-square w-full max-w-md">
                {getImg('hp-hero-main') ? (
                  <Image 
                    src={getImg('hp-hero-main')!.imageUrl} 
                    alt="House of Petals Signature Bouquet" 
                    fill 
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded-lg" />
                )}
              </div>

              <div className="lg:w-1/3 grid grid-cols-2 gap-4 w-full">
                {heroGridProducts.map((prod, idx) => {
                  const imgData = getImg(prod.image);
                  return (
                    <Link href="/catalog" key={idx} className="bg-white p-2 text-center group">
                      <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3 border border-gray-100">
                        {imgData && (
                          <Image 
                            src={imgData.imageUrl} 
                            alt={prod.name} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <h3 className="text-[11px] font-bold text-gray-800 line-clamp-1 mb-1">{prod.name}</h3>
                      <p className="text-[#be1e2d] font-black text-xs">{prod.price}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Category Circles Row */}
        <section className="py-12 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center overflow-x-auto gap-8 pb-4 scrollbar-hide">
              {categories.map((cat, idx) => {
                const img = getImg(cat.image);
                return (
                  <Link href={`/catalog?category=${cat.name.toLowerCase()}`} key={idx} className="flex flex-col items-center shrink-0 group">
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#be1e2d] transition-all shadow-lg bg-white">
                      {img && (
                        <Image 
                          src={img.imageUrl} 
                          alt={cat.name} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform"
                        />
                      )}
                    </div>
                    <span className="mt-4 text-xs md:text-sm font-bold text-gray-700 group-hover:text-[#be1e2d] uppercase tracking-wide">{cat.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent Flowers & Gifts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-10 border-b-2 border-gray-100 pb-4">
              <div className="relative">
                <h2 className="text-2xl font-bold text-[#333]">Recent Flowers & Gifts</h2>
                <div className="absolute -bottom-[18px] left-0 w-full h-1 bg-[#be1e2d]"></div>
              </div>
              <Link href="/catalog" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#be1e2d] flex items-center gap-1">
                VIEW MORE <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {recentProducts.map((prod, idx) => {
                const imgData = getImg(prod.image);
                return (
                  <div key={idx} className="group flex flex-col items-center text-center">
                    <div className="relative w-full aspect-square bg-gray-50 mb-4 overflow-hidden border border-gray-100 rounded-lg shadow-sm">
                      {imgData && (
                        <Image 
                          src={imgData.imageUrl} 
                          alt={prod.name} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      )}
                      {prod.badge && (
                        <div className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold text-white uppercase rounded-sm ${prod.badge === 'SOLD OUT' ? 'bg-[#333]' : 'bg-[#be1e2d]'}`}>
                          {prod.badge}
                        </div>
                      )}
                    </div>
                    <h3 className="text-xs font-bold text-gray-800 line-clamp-1 mb-2 hover:text-[#be1e2d] transition-colors px-1">
                      <Link href={`/catalog`}>{prod.name}</Link>
                    </h3>
                    <div className="flex items-center gap-2">
                      {prod.oldPrice && <span className="text-[10px] text-gray-400 line-through">{prod.oldPrice}</span>}
                      <span className="text-[#be1e2d] font-black text-sm">{prod.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Banners */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bannerCards.map((card, idx) => {
                const imgData = getImg(card.image);
                return (
                  <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
                    {imgData && (
                      <Image 
                        src={imgData.imageUrl} 
                        alt={card.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                      <h2 className="text-2xl md:text-3xl font-black mb-3">{card.title}</h2>
                      <p className="text-sm leading-relaxed mb-6 opacity-90 max-w-[260px] line-clamp-2">
                        {card.desc}
                      </p>
                      <Link href="/catalog">
                        <Button className="w-fit bg-[#be1e2d] hover:bg-[#a51a27] text-white rounded-full font-bold px-8 h-11 text-xs uppercase tracking-widest shadow-lg">
                          SHOP NOW
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12 border-b-2 border-gray-100 pb-4">
              <div className="relative">
                <h2 className="text-2xl font-bold text-[#333]">Featured Gifts & Flowers</h2>
                <div className="absolute -bottom-[18px] left-0 w-full h-1 bg-[#be1e2d]"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-16">
              {featuredProducts.map((prod, idx) => {
                const imgData = getImg(prod.image);
                return (
                  <div key={idx} className="group flex flex-col items-center text-center relative">
                    <div className="relative w-full aspect-square bg-gray-50 mb-5 overflow-hidden border border-gray-100 rounded-sm shadow-sm">
                      {imgData && (
                        <Image 
                          src={imgData.imageUrl} 
                          alt={prod.name} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      )}
                      {prod.badge && (
                        <div className={`absolute top-2 left-2 px-2.5 py-1 text-[9px] font-bold text-white uppercase rounded-sm ${prod.badge === 'SOLD OUT' ? 'bg-[#333]' : 'bg-[#be1e2d]'}`}>
                          {prod.badge}
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Link href="/catalog" className="bg-[#be1e2d] text-white text-[10px] font-black uppercase py-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#a51a27]">
                          <ShoppingCart className="w-3.5 h-3.5" /> Add To Cart
                        </Link>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/95 p-2 rounded-sm shadow-md cursor-pointer hover:bg-white text-gray-700">
                          <Search className="w-4.5 h-4.5" />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-[13px] font-bold text-gray-800 line-clamp-2 mb-2 hover:text-[#be1e2d] transition-colors h-10 flex items-center justify-center px-1">
                      <Link href={`/catalog`}>{prod.name}</Link>
                    </h3>
                    
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-[#be1e2d] font-black text-sm leading-none">{prod.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center mt-16">
              <Link href="/catalog" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#be1e2d] flex items-center gap-2 border-b-2 border-gray-200 pb-2 transition-all hover:border-[#be1e2d]">
                EXPLORE ALL COLLECTIONS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
