
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BLOG_POSTS } from '@/lib/blog-data';
import { 
  ShoppingCart, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Truck, 
  Gem,
  CheckCircle2,
  Zap,
  Star,
  ChevronLeft,
  ChevronRight
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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const FEATURED_PRODUCTS = [...ALL_PRODUCTS].slice(0, 4);
  const HERO_BLOGS = BLOG_POSTS.slice(0, 3); // Top 3 blogs for hero

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

  const FAQS = [
    { q: "Where do you source your flowers?", a: "We source our premium roses and lilies directly from the fertile volcanic soils of Naivasha, Kenya. This ensures they arrive at your door fresher and last significantly longer than store-bought flowers." },
    { q: "How fast is your delivery?", a: "We provide lightning-fast Same-Day Delivery within Nairobi for all orders placed before 2:00 PM. We know timing is everything when it comes to love!" },
    { q: "Can I handle large wedding decor?", a: "Absolutely. House of Petals has the capacity to manage weddings of up to 1,000 guests, covering everything from floral arches to intimate bridal bouquets." },
    { q: "What makes House of Petals 'Luxury'?", a: "It's in the details: premium large-head roses from Naivasha, signature heavy-weight wrapping, hydration gel-packs for transit, and our dedicated delivery concierge fleet." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Blog Slider & Logo Background */}
        <section className="relative h-[85vh] bg-white overflow-hidden border-b border-gray-100">
          {/* Logo Watermark Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <div className="relative w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]">
              <Image src="/logo.jpeg" alt="Watermark" fill className="object-contain" />
            </div>
          </div>

          <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {BLOG_POSTS.map((post, idx) => {
                  const imgData = getImg(post.image);
                  return (
                    <CarouselItem key={idx}>
                      <div className="flex flex-col lg:flex-row items-center gap-16 py-12">
                        <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-700">
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#be1e2d]/10 text-[#be1e2d] rounded-full">
                            <Star className="w-3.5 h-3.5 fill-[#be1e2d]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">{post.category} EXCELLENCE</span>
                          </div>
                          <h1 className="text-6xl md:text-8xl font-black text-[#1e1e24] leading-[0.85] tracking-tighter">
                            Beyond <br />
                            <span className="text-[#be1e2d] italic">Floral</span> <br />
                            Artistry.
                          </h1>
                          <div className="space-y-4 max-w-lg">
                            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">{post.title}</h2>
                            <p className="text-gray-500 text-lg leading-relaxed font-medium">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center gap-6 pt-4">
                            <Link href={`/blog/${post.slug}`}>
                              <Button className="bg-[#be1e2d] hover:bg-[#a51a27] text-white font-black h-16 px-14 rounded-full text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105">
                                WHY WE ARE THE BEST IN {post.category.toUpperCase()}
                              </Button>
                            </Link>
                          </div>
                        </div>

                        <div className="lg:w-1/2 relative aspect-square w-full max-w-xl animate-in fade-in zoom-in duration-1000">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#be1e2d]/10 to-transparent rounded-[3rem] blur-[80px]"></div>
                          <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white">
                            <Image 
                              src={imgData?.imageUrl || fallbackImage} 
                              alt={post.title} 
                              fill 
                              className="object-cover"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="hidden lg:flex absolute bottom-0 left-0 gap-4 p-6">
                <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border-2 border-gray-100 bg-white hover:bg-[#be1e2d] hover:text-white transition-all shadow-xl" />
                <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border-2 border-gray-100 bg-white hover:bg-[#be1e2d] hover:text-white transition-all shadow-xl" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Why We Are The Best */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center mb-16">
             <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Our Values</span>
             <h2 className="text-4xl font-black text-[#1e1e24]">Luxury Redefined in Every Bloom.</h2>
          </div>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-4 text-center md:text-left group">
                <div className="w-16 h-16 bg-[#be1e2d]/10 rounded-3xl flex items-center justify-center group-hover:bg-[#be1e2d] transition-colors group-hover:text-white mx-auto md:mx-0">
                  <Gem className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black uppercase">Naivasha Sourced</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Direct from high-altitude volcanic soil for bigger, brighter, and longer-lasting blooms.</p>
              </div>
              <div className="space-y-4 text-center md:text-left group">
                <div className="w-16 h-16 bg-[#6db33f]/10 rounded-3xl flex items-center justify-center group-hover:bg-[#6db33f] transition-colors group-hover:text-white mx-auto md:mx-0">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black uppercase">Same-Day Speed</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Ordered by 2PM in Nairobi? Delivered today. We never miss a life milestone.</p>
              </div>
              <div className="space-y-4 text-center md:text-left group">
                <div className="w-16 h-16 bg-[#be1e2d]/10 rounded-3xl flex items-center justify-center group-hover:bg-[#be1e2d] transition-colors group-hover:text-white mx-auto md:mx-0">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black uppercase">Hand-Tied Love</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Every bouquet is a unique masterpiece, tied by our master florists at City Market hub.</p>
              </div>
              <div className="space-y-4 text-center md:text-left group">
                <div className="w-16 h-16 bg-[#6db33f]/10 rounded-3xl flex items-center justify-center group-hover:bg-[#6db33f] transition-colors group-hover:text-white mx-auto md:mx-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black uppercase">Master Capacity</h3>
                <p className="text-sm text-gray-500 leading-relaxed">From single blooms to 2,000-guest weddings, we handle the volume with grace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories / Intent */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#1e1e24]">What Are You Looking For?</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">From intimate gifts to grand celebrations, we handle it all with elegance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1522673607200-164883eecd0c?q=80&w=800" alt="Flowers" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="beautiful bouquet" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-black text-white mb-2">I Want Flowers</h3>
                  <p className="text-white/70 text-sm mb-6">Explore our curated collection of Naivasha's finest roses and lilies.</p>
                  <Link href="/catalog?category=flowers">
                    <Button className="bg-white text-black hover:bg-[#be1e2d] hover:text-white rounded-full uppercase text-[10px] font-black tracking-widest h-12 px-8">VIEW COLLECTION</Button>
                  </Link>
                </div>
              </div>
              
              <div className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800" alt="Weddings" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="wedding flowers" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-black text-white mb-2">Plan An Event</h3>
                  <p className="text-white/70 text-sm mb-6">Weddings, Birthdays, and Corporate Galas designed to perfection.</p>
                  <Link href="/blog/luxury-weddings-nairobi">
                    <Button className="bg-[#be1e2d] text-white hover:bg-[#a51a27] rounded-full uppercase text-[10px] font-black tracking-widest h-12 px-8">BOOK CONSULTATION</Button>
                  </Link>
                </div>
              </div>

              <div className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-xl md:col-span-2 lg:col-span-1">
                <Image src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800" alt="Gifts" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="luxury gift box" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-black text-white mb-2">Luxury Gifts</h3>
                  <p className="text-white/70 text-sm mb-6">Premium gift sets, chocolates, and fruits for that perfect impression.</p>
                  <Link href="/catalog?category=gifts">
                    <Button className="bg-white text-black hover:bg-[#be1e2d] hover:text-white rounded-full uppercase text-[10px] font-black tracking-widest h-12 px-8">SHOP GIFTS</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.3em]">Nairobi's Best Sellers</span>
                <h2 className="text-5xl font-black text-[#1e1e24] tracking-tight">V2 Signature Collection</h2>
              </div>
              <Link href="/catalog" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#be1e2d] flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-[#be1e2d] pb-1">
                EXPLORE ALL BLOOMS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {FEATURED_PRODUCTS.map((product) => {
                const imgData = getImg(product.image);
                return (
                  <div key={product.id} className="group flex flex-col relative animate-in fade-in duration-700">
                    <div className="relative w-full aspect-square bg-gray-50 mb-6 overflow-hidden rounded-[2.5rem] shadow-sm transition-all duration-500 group-hover:shadow-2xl border border-gray-100">
                      <Image 
                        src={imgData?.imageUrl || fallbackImage} 
                        alt={product.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-6 left-6 right-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-[#be1e2d] text-white text-[10px] font-black uppercase h-14 rounded-2xl shadow-2xl hover:bg-[#a51a27]"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" /> QUICK ADD
                        </Button>
                      </div>
                    </div>
                    <div className="px-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#be1e2d]">{product.category}</span>
                      <h3 className="text-xl font-bold text-[#1e1e24] group-hover:text-[#be1e2d] transition-colors line-clamp-1 mt-1">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p className="text-2xl font-black text-[#1e1e24] mt-1">KSh {product.price.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#1e1e24]">Frequently Asked</h2>
              <p className="text-gray-500 mt-2">Everything you need to know about our luxury delivery in Nairobi.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-100 py-4">
                  <AccordionTrigger className="text-lg font-bold text-[#1e1e24] hover:text-[#be1e2d] transition-colors">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-500 leading-relaxed text-base pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Brand Promise Banner */}
        <section className="py-16 bg-[#be1e2d]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { label: 'NAIVASHA FRESH', icon: Gem },
                { label: 'NAIROBI CRAFTED', icon: Heart },
                { label: 'LUXURY PACKAGING', icon: Sparkles },
                { label: 'SAMEDAY DELIVERY', icon: Truck }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 text-white">
                  <item.icon className="w-10 h-10 opacity-80" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
