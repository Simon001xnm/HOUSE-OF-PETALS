
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-data';
import { 
  ShoppingCart, 
  ArrowRight, 
  Heart, 
  ShoppingCart as ShoppingCartIcon,
} from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { ALL_PRODUCTS } from '@/lib/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Home() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [api, setApi] = useState<CarouselApi>();
  
  const FEATURED_PRODUCTS = [...ALL_PRODUCTS].slice(0, 4);

  const getImg = (id: string) => PlaceHolderImages.find(i => i.id === id);
  const fallbackImage = '/WhatsApp Image 2026-03-04 at 7.02.27 PM.jpeg';

  useEffect(() => {
    if (!api) return;
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [api]);

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
      description: `${product.name} added to bag.`,
    });
  };

  const FAQS = [
    { q: "Where do you source your flowers?", a: "Direct from premium high-altitude farms in Naivasha. Larger heads, stronger stems." },
    { q: "Do you offer same-day delivery?", a: "Yes! Order by 2:00 PM for same-day delivery across Nairobi." },
    { q: "How do flowers stay fresh?", a: "We use a 4°C Cold Chain and hydration gel-packs in our luxury wrapping." },
    { q: "Can you handle large weddings?", a: "Yes. We manage events for up to 1,000+ guests with expert floral architecture." },
    { q: "What is special about your packaging?", a: "Signature heavy-weight luxury paper with built-in hydration for lasting freshness." },
    { q: "Is a note card included?", a: "Yes. Every order includes a complimentary premium handwritten note card." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Immersive Auto-Slide */}
        <section className="relative h-[90vh] bg-white overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
            <div className="relative w-[60vw] h-[60vw] max-w-[800px]">
              <Image src="/logo.jpeg" alt="Watermark" fill className="object-contain" />
            </div>
          </div>

          <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {BLOG_POSTS.map((post, idx) => {
                const imgData = getImg(post.image);
                return (
                  <CarouselItem key={idx} className="h-full">
                    <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
                      <div className="lg:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#be1e2d]/10 text-[#be1e2d] rounded-full">
                          <Heart className="w-3.5 h-3.5 fill-[#be1e2d]" />
                          <span className="text-[9px] font-black uppercase tracking-widest">GIRLFRIEND'S DAY - AUG 1ST</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-[#1e1e24] leading-[0.9] tracking-tighter">
                          {post.slogan.split(' ').slice(0, -1).join(' ')}<br />
                          <span className="text-[#be1e2d]">{post.slogan.split(' ').slice(-1)}</span>
                        </h1>
                        <p className="text-lg text-gray-500 font-medium max-w-md">
                          {post.excerpt} Shop Nairobi's freshest roses online today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                          <Link href="/catalog">
                            <Button className="w-full sm:w-auto bg-[#be1e2d] hover:bg-[#a51a27] text-white h-14 px-12 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                              SHOP NOW
                            </Button>
                          </Link>
                          <Link href={`/blog/${post.slug}`} className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#be1e2d] flex items-center gap-2">
                            WHY WE ARE THE BEST <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="lg:w-1/2 relative aspect-square w-full max-w-xl">
                        <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white">
                          <Image src={imgData?.imageUrl || fallbackImage} alt={post.title} fill className="object-cover" priority />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </section>

        {/* Product Marquee - High Impact */}
        <section className="py-10 bg-gray-50 border-y border-gray-100 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {[...ALL_PRODUCTS, ...ALL_PRODUCTS].map((product, idx) => {
              const imgData = getImg(product.image);
              return (
                <Link key={idx} href={`/products/${product.id}`} className="flex items-center gap-4 group">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-[#be1e2d] transition-all">
                    <Image src={imgData?.imageUrl || fallbackImage} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#be1e2d]">{product.name}</span>
                    <span className="text-xs font-bold text-gray-400">KES {product.price.toLocaleString()}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Category Shortcuts */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/catalog?category=flowers" className="group relative h-80 rounded-[2rem] overflow-hidden shadow-xl">
              <Image src={getImg('category-flowers')?.imageUrl || 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800'} alt="Flowers" fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint="bouquet" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-widest">Fresh Roses</h3>
              </div>
            </Link>
            <Link href="/blog/luxury-weddings-nairobi" className="group relative h-80 rounded-[2rem] overflow-hidden shadow-xl">
              <Image src={getImg('category-weddings')?.imageUrl || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800'} alt="Weddings" fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint="wedding" />
              <div className="absolute inset-0 bg-[#be1e2d]/60 flex items-center justify-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-widest">Weddings</h3>
              </div>
            </Link>
            <Link href="/catalog?category=gifts" className="group relative h-80 rounded-[2rem] overflow-hidden shadow-xl">
              <Image src={getImg('category-gifts')?.imageUrl || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800'} alt="Gifts" fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint="gift box" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-widest">Gifts</h3>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-black text-[#1e1e24] tracking-tight">Best Sellers</h2>
              <Link href="/catalog" className="text-[10px] font-black uppercase tracking-widest text-[#be1e2d] hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURED_PRODUCTS.map((product) => {
                const imgData = getImg(product.image);
                return (
                  <div key={product.id} className="group space-y-4">
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-xl transition-all">
                      <Image src={imgData?.imageUrl || fallbackImage} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="absolute bottom-4 left-4 right-4 bg-[#be1e2d] text-white text-[9px] font-black uppercase h-12 rounded-xl translate-y-20 group-hover:translate-y-0 transition-transform"
                      >
                        <ShoppingCartIcon className="w-3.5 h-3.5 mr-2" /> ADD TO BAG
                      </Button>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 leading-tight">{product.name}</h3>
                      <p className="text-lg font-black text-[#be1e2d]">KES {product.price.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Simple FAQ */}
        <section className="py-24 bg-[#1e1e24] text-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
                  <AccordionTrigger className="text-lg font-bold hover:text-[#be1e2d]">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
