
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
  { id: '5', name: 'Serene Lily White', price: 95, image: 'prod-crimson-velvet', category: 'Flowers' },
  { id: '6', name: 'Rustic Succulent Trio', price: 55, image: 'prod-emerald-fern', category: 'Plants' },
  { id: '7', name: 'Dark Chocolate Truffles', price: 35, image: 'cat-gifts', category: 'Gifts' },
  { id: '8', name: 'Eternal Spring Bouquet', price: 110, image: 'cat-bouquets', category: 'Flowers' }
];

const CATEGORIES = ['All', 'Flowers', 'Plants', 'Gifts'];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-headline mb-4">Our Collection</h1>
          <p className="text-muted-foreground">Hand-curated excellence for every milestone.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Sidebar */}
          <aside className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Categories
              </h3>
              <ul className="space-y-4">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`text-sm tracking-wide transition-colors ${activeCategory === cat ? 'text-gold font-semibold' : 'text-muted-foreground hover:text-white'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-6">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="accent-gold" /> Under $50
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="accent-gold" /> $50 - $100
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="accent-gold" /> $100+
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <p className="text-sm text-muted-foreground">{filteredProducts.length} items found</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Sort by: <span className="text-gold cursor-pointer flex items-center gap-1">Default <ChevronDown className="w-4 h-4" /></span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const img = PlaceHolderImages.find(i => i.id === product.image) || PlaceHolderImages[0];
                return (
                  <div key={product.id} className="group relative">
                    <Link href={`/products/${product.id}`} className="block overflow-hidden bg-secondary/20 border border-white/5 relative aspect-square mb-4">
                      <Image 
                        src={img.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={img.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <Button className="opacity-0 group-hover:opacity-100 bg-white text-black hover:bg-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 rounded-none px-6 uppercase text-xs tracking-widest">
                          Quick View
                        </Button>
                      </div>
                    </Link>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{product.category}</span>
                      <h3 className="text-lg font-headline transition-colors group-hover:text-gold">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-medium">${product.price}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gold/20 hover:text-gold">
                          <ShoppingBag className="w-4 h-4" />
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
