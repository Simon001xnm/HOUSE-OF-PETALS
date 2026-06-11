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
  Sparkles, 
  Heart, 
  Truck, 
  Gem,
  CheckCircle2,
  Zap,
  Star,
  Wind,
  ShieldCheck,
  Package,
  MapPin,
  Flower2
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
      description: `${product.name} has been added to your bag.`,
    });
  };

  const getHeroTitle = (post: BlogPost) => {
    switch (post.category) {
      case 'Weddings': return { top: 'Arusi', middle: 'Safi', bottom: 'Online' };
      case 'Surprises': return { top: 'Zawadi', middle: 'Tamu', bottom: 'Online' };
      case 'Anniversaries': return { top: 'Mapenzi', middle: 'Bora', bottom: 'Online' };
      case 'Events': return { top: 'Kazi', middle: 'Safi', bottom: 'Online' };
      case 'Flowers': return { top: 'Maua', middle: 'Bora', bottom: 'Online' };
      default: return { top: 'Shop', middle: 'Flowers', bottom: 'Online' };
    }
  };

  const FAQS = [
    { q: "Where do you source your flowers?", a: "Every House of Petals stem is hand-picked from premium high-altitude farms in Naivasha. The volcanic soil and unique climate result in larger heads and stronger stems than standard florist flowers." },
    { q: "How do you ensure they stay fresh in Nairobi heat?", a: "We operate a strict 'Cold Chain' process. Flowers are transported from Naivasha at exactly 4°C and stored in our climate-controlled hub at City Market until the moment they leave for delivery." },
    { q: "What is your 'Signature Packaging'?", a: "We don't just use paper. Our arrangements are wrapped in heavy-weight luxury paper and include hydration gel-packs at the base to keep the stems drinking during transit." },
    { q: "Can you handle a wedding of 500+ guests?", a: "Absolutely. We are one of the few florists in Nairobi with the infrastructure to manage large-scale events. From floral arches to table landscapes, our capacity is built for excellence." },
    { q: "Is delivery really 'Same-Day'?", a: "Yes. For orders placed before 2:00 PM within Nairobi, we guarantee delivery the same day. We use our own dedicated delivery concierge fleet to ensure your gifts arrive perfectly." },
    { q: "Do you offer personalized messages?", a: "Every order includes a complimentary, premium House of Petals note card where we hand-write your personal message for that extra touch of class." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[750px] bg-white overflow-hidden border-b border-gray-100 flex items-center">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
            <div className="relative w-[70vw] h-[70vw] max-w-[900px] max-h-[900px]">
              <Image src="/logo.jpeg" alt="Watermark" fill className="object-contain" />
            </div>
          </div>

          <div className="w-full h-full relative z-10">
            <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
              <CarouselContent className="h-full">
                {BLOG_POSTS.map((post, idx) => {
                  const imgData = getImg(post.image);
                  const title = getHeroTitle(post);
                  return (
                    <CarouselItem key={idx} className="h-full">
                      <div className="container mx-auto px-6 h-full">
                        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-12 lg:gap-24 py-12">
                          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#be1e2d]/10 text-[#be1e2d] rounded-full">
                              <Star className="w-3.5 h-3.5 fill-[#be1e2d]" />
                              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{post.category} EXCELLENCE</span>
                            </div>
                            <div className="space-y-4">
                              <h1 className="text-6xl md:text-9xl font-black text-[#1e1e24] leading-[0.8] tracking-tighter">
                                {title.top}<br />
                                <span className="text-[#be1e2d] italic">{title.middle}</span> <br />
                                {title.bottom}.
                              </h1>
                              <p className="text-xl md:text-2xl font-bold text-[#be1e2d] uppercase tracking-wide">
                                {post.slogan}
                              </p>
                            </div>
                            <div className="space-y-4 max-w-xl">
                              <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">{post.title}</h2>
                              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                {post.excerpt}
                              </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                              <Link href={`/blog/${post.slug}`}>
                                <Button className="w-full sm:w-auto bg-[#be1e2d] hover:bg-[#a51a27] text-white font-black h-16 px-14 rounded-full text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105">
                                  OUR {post.category.toUpperCase()} JOURNEY
                                </Button>
                              </Link>
                              <Link href="/catalog" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#be1e2d] flex items-center gap-2">
                                SHOP COLLECTION <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>

                          <div className="lg:w-1/2 relative aspect-square w-full max-w-2xl animate-in fade-in zoom-in duration-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#be1e2d]/15 to-transparent rounded-[4rem] blur-[100px]"></div>
                            <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] border-[12px] border-white">
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
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="hidden lg:flex container mx-auto px-6 absolute bottom-12 left-0 right-0 justify-between items-center pointer-events-none">
                <div className="flex gap-4 pointer-events-auto">
                  <CarouselPrevious className="static translate-y-0 h-16 w-16 rounded-full border-2 border-gray-100 bg-white hover:bg-[#be1e2d] hover:text-white transition-all shadow-2xl" />
                  <CarouselNext className="static translate-y-0 h-16 w-16 rounded-full border-2 border-gray-100 bg-white hover:bg-[#be1e2d] hover:text-white transition-all shadow-2xl" />
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* Product Marquee */}
        <section className="py-12 bg-gray-50 border-b border-gray-100 overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {[...ALL_PRODUCTS, ...ALL_PRODUCTS].map((product, idx) => {
              const imgData = getImg(product.image);
              return (
                <Link key={`${product.id}-${idx}`} href={`/products/${product.id}`} className="flex items-center gap-6 group min-w-max">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#be1e2d] transition-all">
                    <Image src={imgData?.imageUrl || fallbackImage} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#be1e2d]">{product.category}</span>
                    <span className="text-sm font-black text-[#1e1e24] group-hover:text-[#be1e2d] transition-colors">{product.name}</span>
                    <span className="text-[11px] font-bold text-gray-400">KSh {product.price.toLocaleString()}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* The House of Petals Standard - Journey Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 space-y-10">
                <div className="space-y-4">
                  <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em] block">The House of Petals Standard</span>
                  <h2 className="text-5xl font-black text-[#1e1e24] leading-[1.1] tracking-tight">From Naivasha’s Soil to Your Doorstep.</h2>
                  <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
                    Experience the journey of excellence. We don't just sell flowers; we curate a high-altitude masterpiece.
                  </p>
                </div>
                
                <div className="space-y-12">
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 bg-[#fdf2f3] rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-[#be1e2d] group-hover:text-white transition-all shadow-sm">
                      <Gem className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-base mb-2">01. Naivasha Sourcing</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Direct from high-altitude volcanic farms. Larger heads, stronger stems, and colors that glow.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 bg-[#fdf2f3] rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-[#be1e2d] group-hover:text-white transition-all shadow-sm">
                      <Wind className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-base mb-2">02. 4°C Cold Logistics</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Kutoka farm mpaka Nairobi. Our unique 4-degree transport stops the clock on aging.</p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 bg-[#fdf2f3] rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-[#be1e2d] group-hover:text-white transition-all shadow-sm">
                      <Flower2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-base mb-2">03. Master Craftsmanship</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Every arrangement is hand-tied at Stall 16A, City Market hub, by artisans with decades of skill.</p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 bg-[#fdf2f3] rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-[#be1e2d] group-hover:text-white transition-all shadow-sm">
                      <Package className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-base mb-2">04. Luxury Hydration Wrap</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Signature heavy wrapping with integrated hydration gel-packs to ensure freshness in transit.</p>
                    </div>
                  </div>
                </div>

                <Link href="/about">
                  <Button className="bg-[#be1e2d] text-white hover:bg-[#a51a27] rounded-full px-12 h-16 uppercase text-xs font-black tracking-widest mt-4 shadow-2xl transition-all hover:scale-105">
                    KNOW MORE ABOUT US
                  </Button>
                </Link>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[20px] border-white transform rotate-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1591586121041-394998781977?q=80&w=1200" 
                    alt="Naivasha Farm" 
                    fill 
                    className="object-cover"
                    data-ai-hint="flower farm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 text-white">
                    <p className="text-6xl font-black mb-2 leading-none tracking-tighter">100%</p>
                    <p className="text-xs font-black uppercase tracking-[0.4em] opacity-80">Kenyan Excellence</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#6db33f] text-white p-10 rounded-[2.5rem] shadow-2xl transform -rotate-6 hidden xl:block">
                  <Truck className="w-10 h-10 mb-4" />
                  <p className="text-xl font-black uppercase leading-tight">Same-Day <br />Nairobi <br />Fleet</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories / Intent */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#1e1e24] tracking-tight">What Are You Looking For?</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">Mawazo mapya kwa kila tukio. From intimate gifts to grand celebrations.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1522673607200-164883eecd0c?q=80&w=800" alt="Flowers" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="beautiful bouquet" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-4xl font-black text-white mb-3">Unataka Maua?</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">Explore our curated collection of Naivasha's finest roses and lilies.</p>
                  <Link href="/catalog?category=flowers">
                    <Button className="bg-white text-black hover:bg-[#be1e2d] hover:text-white rounded-full uppercase text-[10px] font-black tracking-[0.2em] h-14 px-10">VIEW COLLECTION</Button>
                  </Link>
                </div>
              </div>
              
              <div className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800" alt="Weddings" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="wedding flowers" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#be1e2d]/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-4xl font-black text-white mb-3">Arusi & Sherehe</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">Weddings, Birthdays, and Corporate Galas designed to perfection.</p>
                  <Link href="/blog/luxury-weddings-nairobi">
                    <Button className="bg-white text-[#be1e2d] hover:bg-black hover:text-white rounded-full uppercase text-[10px] font-black tracking-[0.2em] h-14 px-10">OUR CAPACITY</Button>
                  </Link>
                </div>
              </div>

              <div className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800" alt="Gifts" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="luxury gift box" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-4xl font-black text-white mb-3">Zawadi za Kifahari</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">Premium gift sets, chocolates, and fruits for that perfect impression.</p>
                  <Link href="/catalog?category=gifts">
                    <Button className="bg-[#be1e2d] text-white hover:bg-white hover:text-black rounded-full uppercase text-[10px] font-black tracking-[0.2em] h-14 px-10">SHOP GIFTS</Button>
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
                <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em]">Nairobi's Best Sellers</span>
                <h2 className="text-5xl font-black text-[#1e1e24] tracking-tighter">V2 Signature Collection</h2>
              </div>
              <Link href="/catalog" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#be1e2d] flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-[#be1e2d] pb-1">
                EXPLORE ALL BLOOMS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {FEATURED_PRODUCTS.map((product) => {
                const imgData = getImg(product.image);
                return (
                  <div key={product.id} className="group flex flex-col relative">
                    <div className="relative w-full aspect-square bg-gray-50 mb-6 overflow-hidden rounded-[2.5rem] shadow-sm transition-all duration-500 group-hover:shadow-2xl border border-gray-100">
                      <Image 
                        src={imgData?.imageUrl || fallbackImage} 
                        alt={product.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
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

        {/* Mastering the Bloom FAQ Section */}
        <section className="py-32 bg-[#1e1e24] text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16 space-y-4">
              <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em]">Knowledge is Luxury</span>
              <h2 className="text-5xl font-black tracking-tight">Mastering the Bloom</h2>
              <p className="text-gray-400 font-medium">Everything a flower connoisseur should know about the House of Petals experience.</p>
            </div>
            <Accordion type="single" collapsible className="w-full border-t border-white/10">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10 py-6">
                  <AccordionTrigger className="text-xl font-bold hover:text-[#be1e2d] transition-colors text-left leading-tight">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed text-lg pt-4 max-w-3xl">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-16 text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] mb-6">Have more questions? Our concierge is ready.</p>
              <Link href="https://wa.me/254704524070">
                <Button className="bg-[#6db33f] hover:bg-[#5a9b34] text-white h-16 px-12 rounded-full font-black uppercase text-xs tracking-widest shadow-2xl">
                  WHATSAPP OUR TEAM
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
