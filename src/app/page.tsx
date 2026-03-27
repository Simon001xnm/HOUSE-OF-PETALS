
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart, ArrowRight, Sparkles, Heart, Gift, Truck } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { ALL_PRODUCTS } from '@/lib/products';

export default function Home() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  // Get the latest 4 products for the featured section
  const FEATURED_PRODUCTS = [...ALL_PRODUCTS].slice(-4).reverse();
  
  // Get all products for the marquee (shuffled or sliced for variety)
  const MARQUEE_PRODUCTS = [...ALL_PRODUCTS];

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
        <section className="bg-white py-10 md:py-24 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 text-center lg:text-left space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#be1e2d]/10 text-[#be1e2d] rounded-full">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">House of Petals Kenya</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-[#1e1e24] leading-[0.9] tracking-tighter">
                  Luxury <br />
                  <span className="text-[#be1e2d]">Blooms</span> <br />
                  In Nairobi.
                </h1>
                <p className="text-gray-500 text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Experience the pinnacle of Kenyan floral artistry. Hand-crafted bouquets and boutique gifts delivered with absolute elegance and speed.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                  <Link href="/catalog">
                    <Button className="bg-[#be1e2d] hover:bg-[#a51a27] text-white font-black h-16 px-12 rounded-full text-xs uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95">
                      SHOP COLLECTION <ShoppingCart className="w-5 h-5" />
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
                <div className="absolute inset-0 bg-gradient-to-tr from-[#be1e2d]/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
                <Image 
                  src={fallbackImage} 
                  alt="House of Petals Signature Arrangement" 
                  fill 
                  className="object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Gifts & Flowers Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-2">
                <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.3em]">Signature Collection</span>
                <h2 className="text-4xl font-black text-[#1e1e24] tracking-tight">Featured Gifts & Flowers</h2>
                <div className="w-24 h-1.5 bg-[#6db33f] rounded-full"></div>
              </div>
              <Link href="/catalog" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#be1e2d] flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-[#be1e2d] pb-1">
                EXPLORE FULL CATALOG <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {FEATURED_PRODUCTS.map((product) => {
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

        {/* Product Marquee Section */}
        <section className="py-12 bg-[#1e1e24] overflow-hidden">
          <div className="mb-10 text-center">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.4em] opacity-50">Continuous Inspiration</h3>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="py-6 animate-marquee whitespace-nowrap flex gap-8">
              {[...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS].map((product, index) => {
                const imgData = getImg(product.image);
                return (
                  <Link key={`${product.id}-${index}`} href={`/products/${product.id}`}>
                    <div className="inline-block w-48 h-64 relative rounded-xl overflow-hidden group shadow-xl">
                      <Image 
                        src={imgData?.imageUrl || fallbackImage} 
                        alt={product.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <p className="text-white text-[10px] font-bold uppercase truncate">{product.name}</p>
                        <p className="text-[#6db33f] text-xs font-black">KSh {product.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action: AI Advisor */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-[#fdf2f3] rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#be1e2d]/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex-1 space-y-8 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#be1e2d] text-white rounded-full">
                  <Sparkles className="w-3 h-3" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Exclusively for You</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[#1e1e24] leading-none">
                  Not sure <br /> what to choose?
                </h2>
                <p className="text-gray-500 text-lg max-w-md">
                  Let our AI Concierge help you find the perfect expression for any occasion, recipient, or personality.
                </p>
                <Link href="/gift-advisor" className="inline-block">
                  <Button className="bg-[#1e1e24] hover:bg-black text-white h-16 px-12 rounded-full text-xs uppercase tracking-[0.2em] font-black shadow-xl">
                    CONSULT AI ADVISOR <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative z-10 w-full md:w-1/3 aspect-square bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8 border border-[#be1e2d]/10">
                <div className="text-center space-y-6">
                  <Gift className="w-20 h-20 text-[#be1e2d] mx-auto animate-bounce" />
                  <p className="text-[#1e1e24] font-black uppercase tracking-[0.2em] text-xs">Personalized Perfection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Promise Section */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto text-[#6db33f]">
                  <Heart className="w-10 h-10" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em]">Artisan Crafted</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Each arrangement is a unique piece of art, designed by our master florists in our Nairobi shop.</p>
              </div>
              <div className="space-y-6">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto text-[#6db33f]">
                  <Sparkles className="w-10 h-10" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em]">Freshness Guaranteed</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Sourced directly from premium Kenyan growers to ensure maximum vase life and vibrancy.</p>
              </div>
              <div className="space-y-6">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto text-[#6db33f]">
                  <Truck className="w-10 h-10" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em]">Nairobi Delivery</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Same-day delivery available for those spontaneous moments of celebration and love.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA: Join the Community */}
        <section className="py-24 bg-[#be1e2d] text-white">
          <div className="container mx-auto px-6 text-center space-y-10">
            <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
              READY TO <br /> MAKE THEM SMILE?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto uppercase tracking-widest font-bold">
              Join thousands of happy customers celebrating life's milestones with House of Petals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/catalog">
                <Button className="bg-white text-[#be1e2d] hover:bg-gray-100 h-16 px-14 rounded-full text-xs uppercase tracking-[0.2em] font-black shadow-2xl">
                  SHOP ALL PRODUCTS
                </Button>
              </Link>
              <Link href="https://wa.me/254704524070">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#be1e2d] h-16 px-14 rounded-full text-xs uppercase tracking-[0.2em] font-black">
                  WHATSAPP CONCIERGE
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
