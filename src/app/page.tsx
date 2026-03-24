
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { ALL_PRODUCTS } from '@/lib/products';

export default function Home() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  // Get the latest 4 products added to the collection
  const LATEST_PRODUCTS = [...ALL_PRODUCTS].slice(-4).reverse();
  
  const getImg = (id: string) => PlaceHolderImages.find(i => i.id === id);
  const fallbackImage = '/WhatsApp Image 2026-03-04 at 7.02.27 PM.jpeg';

  const handleAddToCart = (product: any) => {
    const imgData = getImg(product.image);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: imgData?.imageUrl || fallbackImage
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your bag.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-10 md:py-20 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#be1e2d]/10 text-[#be1e2d] rounded-full">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Nairobi's Premier Florist</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-[#1e1e24] leading-[0.95] tracking-tighter">
                  Luxury <br />
                  <span className="text-[#be1e2d]">Blooms</span> <br />
                  Delivered.
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                  Experience the pinnacle of Kenyan floral artistry. Hand-crafted bouquets and boutique gifts delivered with absolute elegance.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link href="/catalog">
                    <Button className="bg-[#be1e2d] hover:bg-[#a51a27] text-white font-black h-16 px-12 rounded-full text-xs uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95">
                      SHOP THE COLLECTION <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/gift-advisor">
                    <Button variant="outline" className="border-2 border-gray-200 hover:border-[#be1e2d] text-gray-700 h-16 px-10 rounded-full text-xs uppercase tracking-[0.2em] font-black transition-all">
                      AI GIFT ADVISOR
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 relative aspect-square w-full max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#be1e2d]/5 to-transparent rounded-full blur-3xl -z-10"></div>
                <Image 
                  src={fallbackImage} 
                  alt="House of Petals Signature Arrangement" 
                  fill 
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Arrivals Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-2">
                <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.3em]">New Masterpieces</span>
                <h2 className="text-4xl font-black text-[#1e1e24] tracking-tight">The Latest Arrivals</h2>
                <div className="w-20 h-1.5 bg-[#6db33f] rounded-full"></div>
              </div>
              <Link href="/catalog" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#be1e2d] flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-[#be1e2d] pb-1">
                EXPLORE FULL CATALOG <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {LATEST_PRODUCTS.map((product) => {
                const imgData = getImg(product.image);
                return (
                  <div key={product.id} className="group flex flex-col relative">
                    <div className="relative w-full aspect-square bg-gray-50 mb-6 overflow-hidden border border-gray-100 rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                      <Image 
                        src={imgData?.imageUrl || fallbackImage} 
                        alt={product.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-[#be1e2d] text-white text-[10px] font-black uppercase py-6 rounded-xl flex items-center justify-center gap-2 shadow-2xl hover:bg-[#a51a27] transition-all"
                        >
                          <ShoppingCart className="w-4 h-4" /> Add To Bag
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#be1e2d]">{product.category}</span>
                      <h3 className="text-lg font-bold text-[#1e1e24] group-hover:text-[#be1e2d] transition-colors line-clamp-1">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p className="text-xl font-black text-[#1e1e24]">KSh {product.price.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Brand Promise Section */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto text-[#6db33f]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest">Artisan Crafted</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Each arrangement is a unique piece of art, designed by our master florists in Westlands.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto text-[#6db33f]">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest">Freshness Guaranteed</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Sourced directly from premium Kenyan growers to ensure maximum vase life and vibrancy.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto text-[#6db33f]">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest">Nairobi Delivery</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Same-day delivery available for those spontaneous moments of celebration and love.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
