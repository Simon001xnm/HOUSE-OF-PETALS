
"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown, ShoppingBag, SearchX } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { ALL_PRODUCTS } from '@/lib/products';

const CATEGORIES = ['All', 'Flowers', 'Plants', 'Gifts'];

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (categoryParam) {
      const found = CATEGORIES.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      if (found) {
        setActiveCategory(found);
      }
    } else {
      setActiveCategory('All');
    }
  }, [categoryParam]);

  const filteredProducts = ALL_PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    
    const searchTerms = searchParam?.toLowerCase() || '';
    const matchesSearch = !searchTerms || 
      p.name.toLowerCase().includes(searchTerms) ||
      p.category.toLowerCase().includes(searchTerms) ||
      (p.description && p.description.toLowerCase().includes(searchTerms));
    
    return matchesCategory && matchesSearch;
  });

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
          <h1 className="text-4xl font-headline mb-4 text-[#1e1e24]">
            {searchParam ? `Results for "${searchParam}"` : 'House of Petals Collection'}
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl">
            {searchParam 
              ? `We found ${filteredProducts.length} items matching your search.`
              : 'Explore our curated selection of premium Kenyan blooms and luxury gift sets, hand-crafted to celebrate life\'s most precious moments.'}
          </p>
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
                Sort by: <span className="text-[#be1e2d] cursor-pointer flex items-center gap-1 text-xs uppercase tracking-widest font-bold">Default <ChevronDown className="w-4 h-4" /></span>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => {
                  const img = PlaceHolderImages.find(i => i.id === product.image) || PlaceHolderImages[0];
                  return (
                    <div key={product.id} className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="block overflow-hidden relative aspect-square bg-gray-50">
                        <Image 
                          src={img?.imageUrl || fallbackImage} 
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <Link href={`/products/${product.id}`}>
                            <Button className="opacity-0 group-hover:opacity-100 bg-[#be1e2d] text-white hover:bg-[#a51a27] transition-all transform translate-y-4 group-hover:translate-y-0 rounded-full px-8 uppercase text-[10px] tracking-[0.2em] font-black shadow-2xl">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] uppercase tracking-[0.3em] text-[#be1e2d] font-black">{product.category}</span>
                          <span className="text-sm font-black text-[#be1e2d]">KES {product.price.toLocaleString()}</span>
                        </div>
                        <h3 className="text-[15px] font-bold text-[#1e1e24] group-hover:text-[#be1e2d] transition-colors leading-snug line-clamp-1">
                          <Link href={`/products/${product.id}`}>{product.name}</Link>
                        </h3>
                        {product.description && (
                          <p className="text-[11px] text-gray-400 line-clamp-2 italic mb-2 leading-relaxed">
                            {product.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-auto">
                          <Button 
                            onClick={() => handleAddToCart(product)}
                            className="flex-1 bg-[#be1e2d] hover:bg-[#a51a27] text-white rounded-full h-10 uppercase text-[9px] tracking-widest font-black shadow-lg"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 mr-2" /> Add to Bag
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <SearchX className="w-16 h-16 text-gray-200 mb-6" />
                <h3 className="text-2xl font-headline mb-2">No results found</h3>
                <p className="text-muted-foreground mb-8">We couldn't find anything matching your search. Try different keywords or browse our categories.</p>
                <Button 
                  onClick={() => setActiveCategory('All')}
                  variant="outline"
                  className="rounded-full px-8 border-gray-200"
                >
                  View All Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default function Catalog() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Collection...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
