"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';

const ALL_PRODUCTS = [
  { id: '1', name: 'Crimson Velvet Roses', price: 120, image: 'prod-crimson-velvet', category: 'Flowers' },
  { id: '2', name: 'Emerald Fern', price: 85, image: 'prod-emerald-fern', category: 'Plants' },
  { id: '3', name: 'Midnight Orchid', price: 150, image: 'prod-midnight-orchid', category: 'Flowers' },
  { id: '4', name: 'Golden Scent Candle', price: 45, image: 'prod-golden-scent', category: 'Gifts' },
  { id: '5', name: 'Serene Lily White', price: 95, image: 'prod-roses', category: 'Flowers' },
  { id: '6', name: 'Rustic Succulent Trio', price: 55, image: 'prod-emerald-fern', category: 'Plants' },
  { id: '7', name: 'Dark Chocolate Truffles', price: 35, image: 'cat-personalized', category: 'Gifts' },
  { id: '8', name: 'Eternal Spring Bouquet', price: 110, image: 'cat-flowers', category: 'Flowers' }
];

const CATEGORIES = ['All', 'Flowers', 'Plants', 'Gifts'];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  const fallbackImage = 'https://picsum.photos/seed/fallback/400/400';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-headline mb-4 text-[#1e1e24]">Our Collection</h1>
          <p className="text-muted-foreground">Hand-curated excellence for every milestone.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Sidebar */}
          <aside className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2 text-[#1e1e24]">
                <Filter className="w-4 h-4" /> Categories
              </h3>
              <ul className="space-y-4">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`text-sm tracking-wide transition-colors ${activeCategory === cat ? 'text-[#6db33f] font-bold' : 'text-gray-500 hover:text-[#6db33f]'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-[#1e1e24]">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-500">
                  <input type="checkbox" className="accent-[#6db33f]" /> Under KES 5,000
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-500">
                  <input type="checkbox" className="accent-[#6db33f]" /> KES 5,000 - KES 10,000
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-500">
                  <input type="checkbox" className="accent-[#6db33f]" /> KES 10,000+
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <p className="text-sm text-gray-500">{filteredProducts.length} items found</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Sort by: <span className="text-[#6db33f] cursor-pointer flex items-center gap-1">Default <ChevronDown className="w-4 h-4" /></span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const img = PlaceHolderImages.find(i => i.id === product.image) || PlaceHolderImages[0];
                return (
                  <div key={product.id} className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <Link href={`/products/${product.id}`} className="block overflow-hidden relative aspect-square">
                      <Image 
                        src={img?.imageUrl || fallbackImage}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={img?.imageHint || 'gift'}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                        <Button className="opacity-0 group-hover:opacity-100 bg-[#6db33f] text-white hover:bg-[#5a9b34] transition-all transform translate-y-4 group-hover:translate-y-0 rounded-full px-6 uppercase text-xs tracking-widest font-bold">
                          Quick View
                        </Button>
                      </div>
                    </Link>
                    <div className="p-4 flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#6db33f] font-bold">{product.category}</span>
                      <h3 className="text-sm font-bold text-[#1e1e24] group-hover:text-[#6db33f] transition-colors leading-tight min-h-[2.5rem] line-clamp-2">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-extrabold text-[#6db33f]">KES {(product.price * 100).toLocaleString()}</span>
                        <Button size="icon" className="h-9 w-9 bg-[#6db33f] hover:bg-[#5a9b34] rounded-full">
                          <ShoppingBag className="w-4 h-4 text-white" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
