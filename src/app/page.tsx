
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ShoppingCart, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Gift, 
  Truck, 
  ChevronDown, 
  Users, 
  Gem,
  CheckCircle2
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

export default function Home() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const FEATURED_PRODUCTS = [...ALL_PRODUCTS].slice(0, 4);
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

  const FAQS = [
    { q: "Where do you source your flowers?", a: "We source all our flowers from premium high-altitude farms in Naivasha, Kenya, ensuring maximum vase life and vibrancy." },
    { q: "Do you offer same-day delivery?", a: "Yes! We offer same-day delivery across Nairobi for orders placed before 2:00 PM." },
    { q: "How are the flowers packaged?", a: "Every arrangement is hand-wrapped in our signature luxury eco-paper with hydration gel-packs to keep them fresh during transit." },
    { q: "Can I customize an order?", a: "Absolutely. Contact our WhatsApp concierge for bespoke arrangements tailored to your vision." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-32 border-b border-gray-100 overflow-hidden relative">
          <div className="absolute -left-24 top-0 w-96 h-96 bg-[#be1e2d]/5 rounded-full blur-[100px] animate-pulse"></div>
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 text-center lg:text-left space-y-12 animate-in fade-in slide-in-from-left duration-1000">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#be1e2d]/10 text-[#be1e2d] rounded-full border border-[#be1e2d]/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">VERSION 2.0 • LUXURY REDEFINED</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-[#1e1e24] leading-[0.85] tracking-tighter">
                  Beyond <br />
                  <span className="text-[#be1e2d]">Floral</span> <br />
                  Artistry.
                </h1>
                <p className="text-gray-500 text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                  The House of Petals standard: Naivasha-sourced elegance, hand-tied in Nairobi, and delivered with precision to your doorstep.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
                  <Link href="/catalog">
                    <Button className="bg-[#be1e2d] hover:bg-[#a51a27] text-white font-black h-16 px-14 rounded-full text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-110">
                      EXPLORE CATALOG
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" className="border-2 border-gray-200 hover:border-[#be1e2d] text-gray-700 h-16 px-10 rounded-full text-xs uppercase tracking-[0.2em] font-black group transition-all">
                      OUR STORY <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 relative aspect-square w-full max-w-2xl animate-in fade-in zoom-in duration-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#be1e2d]/10 to-transparent rounded-full blur-[120px]"></div>
                <Image 
                  src={fallbackImage} 
                  alt="House of Petals Masterpiece" 
                  fill 
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-1000"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services: Events & Occasions */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1e1e24]">Luxury Event Management</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">From intimate weddings to grand corporate galas, we bring your vision to life with bespoke floral architecture.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Weddings', icon: Heart, desc: 'Bespoke floral design for your most sacred day.' },
                { title: 'Birthdays', icon: Gift, desc: 'Make every milestone unforgettable with luxury décor.' },
                { title: 'Corporate', icon: Users, desc: 'Elegant arrangements for Nairobi\'s leading brands.' }
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
                  <service.icon className="w-12 h-12 text-[#be1e2d] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <Link href="/catalog" className="text-[10px] font-black uppercase tracking-widest text-[#be1e2d] flex items-center gap-2 group-hover:gap-4 transition-all">
                    VIEW PORTFOLIO <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-2">
                <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.3em]">Signature Selection</span>
                <h2 className="text-5xl font-black text-[#1e1e24] tracking-tight">V2 Collection</h2>
              </div>
              <Link href="/catalog" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#be1e2d] flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-[#be1e2d] pb-1">
                SEE EVERYTHING <ArrowRight className="w-4 h-4" />
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

        {/* Marquee Section */}
        <section className="py-20 bg-[#1e1e24] overflow-hidden">
          <div className="py-6 animate-marquee whitespace-nowrap flex gap-12">
            {[...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS].map((product, index) => {
              const imgData = getImg(product.image);
              return (
                <Link key={`${product.id}-${index}`} href={`/products/${product.id}`}>
                  <div className="inline-block w-64 h-80 relative rounded-3xl overflow-hidden group border border-white/10">
                    <Image src={imgData?.imageUrl || fallbackImage} alt={product.name} fill className="object-cover grayscale-0 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <p className="text-white text-xs font-black uppercase">{product.name}</p>
                      <p className="text-[#6db33f] text-sm font-black">KSh {product.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#1e1e24]">Frequently Asked</h2>
              <p className="text-gray-500 mt-2">Everything you need to know about our luxury delivery.</p>
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
                { label: 'NAIVASHA GROWN', icon: Gem },
                { label: 'HAND-TIED IN NAIROBI', icon: Heart },
                { label: 'LUXURY PACKAGING', icon: Sparkles },
                { label: 'SAME-DAY DELIVERY', icon: Truck }
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
