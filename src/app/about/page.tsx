
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Truck, ShieldCheck, MapPin, Flower2, Heart, Sparkles, Wind } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-[#fdf2f3] overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Image src="/logo.jpeg" alt="Watermark" fill className="object-contain" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-black text-[#1e1e24] leading-none mb-8">
                The Journey of <br /><span className="text-[#be1e2d]">Excellence.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From the fertile volcanic soils of Naivasha to the vibrant heart of Nairobi, House of Petals has redefined luxury gifting in Kenya since its inception.
              </p>
            </div>
          </div>
        </section>

        {/* Sourcing Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1591586121041-394998781977?q=80&w=1200" 
                  alt="Naivasha Flower Farm" 
                  fill 
                  className="object-cover"
                  data-ai-hint="flower farm"
                />
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#be1e2d] w-6 h-6" />
                  <h2 className="text-3xl font-black text-[#1e1e24]">Sourced from Naivasha</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every House of Petals stem begins its life in the premium high-altitude farms of <strong>Naivasha</strong>. The unique climate and nutrient-rich soil provide the perfect environment for roses with larger heads, stronger stems, and more vibrant colors than anywhere else on earth.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#6db33f]/10 flex items-center justify-center shrink-0 mt-1">
                      <Wind className="w-3.5 h-3.5 text-[#6db33f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e1e24]">Climate Controlled Logistics</h4>
                      <p className="text-sm text-gray-500">Transported at exactly 4°C from farm to our Nairobi hub to preserve freshness.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#6db33f]/10 flex items-center justify-center shrink-0 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#6db33f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e1e24]">Ethical Sourcing</h4>
                      <p className="text-sm text-gray-500">We partner exclusively with Fairtrade-certified farms that prioritize worker welfare.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Packaging */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-[#1e1e24]">The Art of Preparation</h2>
              <div className="w-24 h-1 bg-[#be1e2d] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
                <Flower2 className="w-12 h-12 text-[#be1e2d] mb-6" />
                <h3 className="text-xl font-bold mb-4">Master Craftsmanship</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Located at Stall 16A, City Market, our master florists hand-tie every arrangement using centuries-old spiraling techniques to ensure volume and structural integrity.
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
                <Heart className="w-12 h-12 text-[#be1e2d] mb-6" />
                <h3 className="text-xl font-bold mb-4">Luxury Packaging</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We don't just wrap; we protect. Our signature heavy-weight luxury paper and hydration gel-packs ensure your blooms arrive looking just as they did at the farm.
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
                <Truck className="w-12 h-12 text-[#be1e2d] mb-6" />
                <h3 className="text-xl font-bold mb-4">Timely Delivery</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Operating our own dedicated delivery fleet across Nairobi allows us to guarantee same-day delivery windows with 100% precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#be1e2d] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Experience <br />the House of Petals Standard?</h2>
            <Link href="/catalog">
              <Button className="bg-white text-[#be1e2d] hover:bg-gray-100 h-16 px-12 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">
                SHOP THE COLLECTION
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
