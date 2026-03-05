
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Deluxe pink boquet', price: 'KSh 4,500', image: 'deluxe-pink-bouquet' },
  { id: '3', name: 'Heart arrangement', price: 'KSh 5,700', image: 'heart-arrangement' },
  { id: '6', name: 'Sunkissed combo boquet', price: 'KSh 7,900', image: 'sunkissed-combo-boquet' },
  { id: '8', name: 'All white box boquet', price: 'KSh 4,500', image: 'all-white-box-boquet' }
];

export default function Home() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const getImg = (id: string) => PlaceHolderImages.find(i => i.id === id);
  const fallbackImage = '/WhatsApp Image 2026-03-04 at 7.02.27 PM.jpeg';

  const handleAddToCart = (product: any) => {
    const imgData = getImg(product.image);
    addToCart({
      id: product.id,
      name: product.name,
      price: typeof product.price === 'string' ? parseInt(product.price.replace(/[^\d]/g, '')) : product.price,
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
        <section className="bg-white py-10 md:py-16 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left space-y-6">
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

              <div className="lg:w-1/2 relative aspect-square w-full max-w-md">
                <Image 
                  src={fallbackImage} 
                  alt="Deluxe pink boquet" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12 border-b-2 border-gray-100 pb-4">
              <div className="relative">
                <h2 className="text-2xl font-bold text-[#333]">Featured Gifts & Flowers</h2>
                <div className="absolute -bottom-[18px] left-0 w-full h-1 bg-[#be1e2d]"></div>
              </div>
              <Link href="/catalog" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#be1e2d] flex items-center gap-1">
                VIEW ALL <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURED_PRODUCTS.map((product) => {
                const imgData = getImg(product.image);
                return (
                  <div key={product.id} className="group flex flex-col items-center text-center relative">
                    <div className="relative w-full aspect-square bg-gray-50 mb-5 overflow-hidden border border-gray-100 rounded-sm shadow-sm">
                      <Image 
                        src={imgData?.imageUrl || fallbackImage} 
                        alt={product.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      
                      <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div 
                          onClick={() => handleAddToCart(product)}
                          className="bg-[#be1e2d] text-white text-[10px] font-black uppercase py-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#a51a27]"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" /> Add To Cart
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-[13px] font-bold text-gray-800 line-clamp-2 mb-2 hover:text-[#be1e2d] transition-colors h-10 flex items-center justify-center px-1">
                      <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </h3>
                    
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-[#be1e2d] font-black text-sm leading-none">{product.price}</span>
                    </div>
                  </div>
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
