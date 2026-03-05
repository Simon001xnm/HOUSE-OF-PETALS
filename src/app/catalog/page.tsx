
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

export const ALL_PRODUCTS = [
  { id: '1', name: 'Deluxe pink boquet', price: 4500, image: 'deluxe-pink-bouquet', category: 'Flowers' },
  { id: '2', name: 'Forever yours', price: 4000, image: 'forever-yours', category: 'Flowers' }
];

const CATEGORIES = ['All', 'Flowers', 'Plants', 'Gifts'];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredProducts = activeCategory === 'All' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  const fallbackImage = '/WhatsApp Image 2026-03-04 at 7.02.27 PM.jpeg';

  const handleAddToCart = (product: any) => {
    const img = PlaceHolderImages.find(i => i.id === product.image) || PlaceHolderImages[0];
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: img?.imageUrl || fallbackImage
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your shopping bag.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-headline mb-4 text-[#1e1e24]">House of Petals Collection</h1>
          <p className="text-muted-foreground">Exquisite floral arrangements and premium gifts for every occasion in Nairobi.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
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
                      className={`text-sm tracking-wide transition-colors ${activeCategory === cat ? 'text-[#be1e2d] font-bold' : 'text-gray-500 hover:text-[#be1e2d]'}`}
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
                  <input type="checkbox" className="accent-[#be1e2d]" /> Under KES 5,000
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-500">
                  <input type="checkbox" className="accent-[#be1e2d]" /> KES 5,000 - KES 10,000
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-500">
                  <input type="checkbox" className="accent-[#be1e2d]" /> KES 10,000+
                </label>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <p className="text-sm text-gray-500">{filteredProducts.length} masterpieces found</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Sort by: <span className="text-[#be1e2d] cursor-pointer flex items-center gap-1">Default <ChevronDown className="w-4 h-4" /></span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const img = PlaceHolderImages.find(i => i.id === product.image) || PlaceHolderImages[0];
                return (
                  <div key={product.id} className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="block overflow-hidden relative aspect-square">
                      <Image 
                        src={img?.imageUrl || fallbackImage}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                        <Link href={`/products/${product.id}`}>
                          <Button className="opacity-0 group-hover:opacity-100 bg-[#be1e2d] text-white hover:bg-[#a51a27] transition-all transform translate-y-4 group-hover:translate-y-0 rounded-full px-6 uppercase text-xs tracking-widest font-bold">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#be1e2d] font-bold">{product.category}</span>
                      <h3 className="text-sm font-bold text-[#1e1e24] group-hover:text-[#be1e2d] transition-colors leading-tight min-h-[2.5rem] line-clamp-2">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-extrabold text-[#be1e2d]">KES {product.price.toLocaleString()}</span>
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          size="icon" 
                          className="h-9 w-9 bg-[#be1e2d] hover:bg-[#a51a27] rounded-full"
                        >
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
