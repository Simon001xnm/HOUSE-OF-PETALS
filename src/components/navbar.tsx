
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Menu, Search, Phone, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';

export function Navbar() {
  const { cart } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/about' },
    { name: 'Flowers', href: '/catalog?category=flowers' },
    { name: 'Gift Sets', href: '/catalog?category=gifts' },
    { name: 'Events', href: '/catalog' },
    { name: 'AI Concierge', href: '/gift-advisor' },
    { name: 'Account', href: '/profile' },
  ];

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-sm bg-white border-b border-gray-50">
      {/* Utility Bar */}
      <div className="bg-[#1e1e24] text-white py-2 px-4 text-[9px] font-black uppercase tracking-[0.3em] flex justify-center items-center gap-6">
        <span className="flex items-center gap-2 animate-pulse"><Sparkles className="w-3 h-3 text-[#be1e2d]" /> Nairobi's #1 Luxury Florist</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:flex items-center gap-2"><Phone className="w-3 h-3" /> +254 704 524 070</span>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 overflow-hidden border border-gray-100 rounded-lg">
              <Image 
                src="/logo.jpeg" 
                alt="House of Petals Logo" 
                fill 
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xl font-black text-[#be1e2d] tracking-tighter uppercase">HOUSE OF PETALS</span>
              <span className="text-[8px] font-bold text-gray-400 tracking-[0.4em] uppercase ml-0.5">EXCELLENCE SINCE 2023</span>
            </div>
          </Link>
        </div>

        <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md relative group">
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our luxury collection..." 
            className="w-full h-11 pl-4 pr-12 rounded-full border-gray-100 focus:border-[#be1e2d] transition-all bg-gray-50/50"
          />
          <Button type="submit" size="icon" className="absolute right-1 top-1 h-9 w-9 rounded-full bg-[#be1e2d] hover:bg-[#a51a27] border-none shadow-lg">
            <Search className="w-4 h-4 text-white" />
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <Link href="https://wa.me/254704524070" target="_blank" className="hidden xl:flex">
            <Button variant="outline" className="rounded-full border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white h-11 px-6 text-[10px] font-black uppercase tracking-widest gap-2">
              <MessageCircle className="w-4 h-4" /> CONCIERGE
            </Button>
          </Link>
          <Link href="/cart" className="relative group p-2">
            <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-[#be1e2d] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#be1e2d] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] h-4 flex items-center justify-center border-2 border-white shadow-xl">
                {cartCount}
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden text-gray-700">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden lg:block border-t border-gray-100">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <ul className="flex items-center gap-8 py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-[#be1e2d] transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#be1e2d] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
