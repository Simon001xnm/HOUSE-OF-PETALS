"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Truck, ShieldCheck, MapPin, Flower2, Heart, Sparkles, Wind, Package, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-[#fdf2f3] overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <Image src="/logo.jpeg" alt="Watermark" fill className="object-contain" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl space-y-6">
              <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em] mb-4 block">The Journey of Excellence</span>
              <h1 className="text-6xl md:text-8xl font-black text-[#1e1e24] leading-[0.9] tracking-tighter">
                Naivasha <br /><span className="text-[#be1e2d]">Born.</span> <br />Nairobi <br /><span className="text-[#6db33f]">Tied.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                House of Petals isn't just a florist; we are the guardians of Kenya's floral prestige. Since 2023, we've redefined luxury gifting from the volcanic soil to your vase.
              </p>
            </div>
          </div>
        </section>

        {/* Sourcing Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1591586121041-394998781977?q=80&w=1200" 
                  alt="Naivasha Flower Farm" 
                  fill 
                  className="object-cover"
                  data-ai-hint="flower farm"
                />
              </div>
              <div className="lg:w-1/2 space-y-10">
                <div className="flex items-center gap-4">
                  <MapPin className="text-[#be1e2d] w-8 h-8" />
                  <h2 className="text-4xl font-black text-[#1e1e24] tracking-tight uppercase">High-Altitude Sourcing</h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Every House of Petals stem begins its life in the premium high-altitude farms of <strong>Naivasha</strong>. The unique high-UV sunlight and nutrient-rich volcanic soil provide the perfect environment for roses with larger heads and stronger stems.
                  </p>
                  <p>
                    We bypass traditional market auctions, partnering directly with Fairtrade-certified growers. This direct relationship means our flowers are harvested specifically for your order, cutting out days of storage time.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-2xl bg-[#be1e2d]/10 flex items-center justify-center shrink-0 mt-1">
                      <Wind className="w-5 h-5 text-[#be1e2d]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e1e24] uppercase text-sm">4°C Cold Logistics</h4>
                      <p className="text-xs text-gray-500">Strict temperature monitoring from farm to hub to stop the aging process.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-2xl bg-[#6db33f]/10 flex items-center justify-center shrink-0 mt-1">
                      <ShieldCheck className="w-5 h-5 text-[#6db33f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e1e24] uppercase text-sm">Fairtrade Certified</h4>
                      <p className="text-xs text-gray-500">Supporting farms that prioritize ethical labor and sustainable water management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Distribution Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em]">The Hub of Artistry</span>
              <h2 className="text-5xl font-black text-[#1e1e24] tracking-tight">Stall 16A, City Market Hub</h2>
              <div className="w-24 h-1.5 bg-[#be1e2d] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-12 rounded-[3rem] shadow-xl hover:-translate-y-3 transition-all duration-500 border border-gray-100">
                <Flower2 className="w-14 h-14 text-[#be1e2d] mb-8" />
                <h3 className="text-2xl font-black uppercase mb-4 leading-tight">Hand-Tied <br />Architecture</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Located in the heart of Nairobi, our master florists use centuries-old spiraling techniques. We don't just bunch flowers; we architect arrangements that have structural integrity and volume.
                </p>
              </div>
              <div className="bg-white p-12 rounded-[3rem] shadow-xl hover:-translate-y-3 transition-all duration-500 border border-gray-100">
                <Package className="w-14 h-14 text-[#be1e2d] mb-8" />
                <h3 className="text-2xl font-black uppercase mb-4 leading-tight">Hydration <br />Packaging</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our signature wrap isn't just beautiful. We integrate hydration gel-packs at the stem base, ensuring your flowers arrive drinking and stay fresh even if you're not home to receive them.
                </p>
              </div>
              <div className="bg-white p-12 rounded-[3rem] shadow-xl hover:-translate-y-3 transition-all duration-500 border border-gray-100">
                <Truck className="w-14 h-14 text-[#6db33f] mb-8" />
                <h3 className="text-2xl font-black uppercase mb-4 leading-tight">Dedicated <br />Concierge Fleet</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We don't outsource our prestige. House of Petals operates its own climate-controlled delivery fleet across Nairobi, ensuring 100% precision and elite presentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeliness & Capacity */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="lg:w-1/2 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200" 
                  alt="Wedding Event" 
                  fill 
                  className="object-cover"
                  data-ai-hint="luxury event setup"
                />
              </div>
              <div className="lg:w-1/2 space-y-10">
                <div className="flex items-center gap-4">
                  <Zap className="text-[#6db33f] w-8 h-8" />
                  <h2 className="text-4xl font-black text-[#1e1e24] tracking-tight uppercase">Scale & Timeliness</h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Whether it's a single "Just for You" bouquet or a wedding gala for 1,000 guests, House of Petals has the capacity to deliver absolute perfection. Our infrastructure allows us to process over 5,000 stems daily without compromising on detail.
                  </p>
                  <p>
                    We know that timing is everything when it comes to love and celebrations. Our lightning-fast Same-Day delivery system is built for the Nairobi lifestyle—order by 2:00 PM and have beauty at your door before sunset.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 border border-gray-100">Same-Day Guarantee</div>
                  <div className="px-6 py-3 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 border border-gray-100">Weddings of 1,000+</div>
                  <div className="px-6 py-3 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 border border-gray-100">Corporate Galas</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-[#be1e2d] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none scale-150 rotate-12">
            <Image src="/logo.jpeg" alt="Watermark" fill className="object-contain" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10 space-y-10">
            <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-tighter">Ready to Experience <br />the House of Petals Standard?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/catalog">
                <Button className="bg-white text-[#be1e2d] hover:bg-gray-100 h-16 px-14 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105">
                  SHOP THE COLLECTION
                </Button>
              </Link>
              <Link href="/blog/luxury-weddings-nairobi">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#be1e2d] h-16 px-14 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105">
                  PLAN AN EVENT
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
