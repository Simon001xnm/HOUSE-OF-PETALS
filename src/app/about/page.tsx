"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { MapPin, ShieldCheck, Wind, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Simplified Hero */}
        <section className="py-24 bg-[#fdf2f3]">
          <div className="container mx-auto px-6 text-center space-y-6">
            <span className="text-[#be1e2d] text-xs font-black uppercase tracking-widest">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#1e1e24] leading-[0.9] tracking-tighter">
              Naivasha Born.<br /><span className="text-[#be1e2d]">Nairobi Tied.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-xl mx-auto font-medium">
              We are the guardians of Kenya's floral prestige. Luxury blooms from volcanic soil to your vase.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1591586121041-394998781977?q=80&w=1200" alt="Naivasha Farm" fill className="object-cover" data-ai-hint="flower farm" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1e1e24]">High-Altitude Sourcing</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every stem is hand-picked from premium farms in <strong>Naivasha</strong>. High-UV sunlight and volcanic soil create larger heads and stronger stems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Wind className="text-[#be1e2d] w-6 h-6 shrink-0" />
                  <p className="text-sm font-bold uppercase tracking-widest">4°C Cold Chain Logistics</p>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="text-[#be1e2d] w-6 h-6 shrink-0" />
                  <p className="text-sm font-bold uppercase tracking-widest">Fairtrade Certified Farms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nairobi Hub */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center space-y-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Stall 16A, City Market Hub</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-[2rem] shadow-sm space-y-4">
                <h4 className="font-black text-lg uppercase">Hand-Tied</h4>
                <p className="text-sm text-gray-500">Expert spiraling techniques for volume and style.</p>
              </div>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm space-y-4">
                <h4 className="font-black text-lg uppercase">Hydration Wrap</h4>
                <p className="text-sm text-gray-500">Integrated gel-packs to keep stems drinking in transit.</p>
              </div>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm space-y-4">
                <h4 className="font-black text-lg uppercase">Nairobi Fleet</h4>
                <p className="text-sm text-gray-500">Dedicated climate-controlled delivery concierge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#be1e2d] text-white text-center">
          <div className="container mx-auto px-6 space-y-8">
            <h2 className="text-5xl font-black tracking-tighter">Ready for the House of Petals Standard?</h2>
            <Link href="/catalog">
              <Button className="bg-white text-[#be1e2d] hover:bg-gray-100 h-16 px-16 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">
                SHOP NOW
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
