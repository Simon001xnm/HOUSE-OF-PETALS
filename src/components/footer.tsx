"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle, MapPin, Smartphone, Mail, Heart } from 'lucide-react';

export function Footer() {
  const whatsappUrl = `https://wa.me/254704524070`;

  return (
    <footer className="bg-[#1e1e24] text-white pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
              </div>
              <h4 className="text-[13px] font-black uppercase tracking-widest border-b-2 border-[#be1e2d] pb-1">House of Petals</h4>
            </div>
            <p className="text-[12px] text-gray-400 leading-relaxed">
              Premium flower delivery in Nairobi. We specialize in luxury floral design and Naivasha-sourced roses.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#be1e2d]"><Instagram className="w-5 h-5" /></Link>
              <Link href={whatsappUrl} className="text-gray-400 hover:text-[#be1e2d]"><MessageCircle className="w-5 h-5" /></Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white">Contact</h4>
            <ul className="space-y-4 text-[12px] text-gray-400">
              <li className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 text-[#be1e2d]" /> Stall 16A, City Market, Nairobi</li>
              <li className="flex gap-3"><Smartphone className="w-4 h-4 shrink-0 text-[#be1e2d]" /> +254 704 524 070</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 shrink-0 text-[#be1e2d]" /> info@houseofpetals.co.ke</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-3 text-[12px] text-gray-400">
              <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link href="/catalog" className="hover:text-white">Shop Collection</Link></li>
              <li><Link href="/blog" className="hover:text-white">Event Services</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white">Newsletter</h4>
            <form className="flex flex-col gap-3">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-lg h-10 px-4 text-xs" />
              <button className="bg-[#be1e2d] hover:bg-[#a51a27] text-white font-black h-10 rounded-lg text-[10px] uppercase tracking-widest transition-all">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col items-center gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
            <p>© 2025 House of Petals. All rights reserved.</p>
            <div className="flex gap-4">
              <span>M-PESA</span>
              <span>VISA</span>
              <span>MasterCard</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2 mt-4">
            <Link 
              href="https://simonstyles.co.ke" 
              target="_blank" 
              className="text-[11px] text-white font-black uppercase tracking-[0.5em] mb-1 hover:text-[#be1e2d] transition-colors"
            >
              SIMON STYLES
            </Link>
            <div className="flex items-center gap-2 text-[9px] text-gray-500 uppercase tracking-[0.2em] font-medium">
              <span>DESIGNED AND DEVELOPED BY</span>
              <Heart className="w-3 h-3 text-[#be1e2d] fill-[#be1e2d] animate-heart-pump" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
