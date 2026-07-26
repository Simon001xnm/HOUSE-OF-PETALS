'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Menu, Search, Heart, Sparkles } from 'lucide-react';
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
    { name: 'Gifts', href: '/catalog?category=gifts' },
    { name: 'Journal', href: '/blog' },
  ];

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Short Utility Bar */}
      <div className="bg-[#be1e2d] text-white py-2 px-4 text-[9px] font-black uppercase tracking-widest flex justify-center items-center gap-4">
        <span className="flex items-center gap-1.5"><Heart className="w-3 h-3 fill-white" /> GIRLFRIEND'S DAY - AUGUST 1ST</span>
        <span className="hidden md:inline text-white/40">|</span>
        <span className="hidden md:flex items-center gap-1.5"><Sparkles className="w-3 h-3" /> PRE-ORDER NAIROBI'S FRESHEST BLOOMS</span>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 shrink-0 border border-gray-100 rounded-lg overflow-hidden">
            <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-[#be1e2d] tracking-tighter uppercase">HOUSE OF PETALS</span>
            <span className="text-[8px] font-bold text-gray-400 tracking-[0.4em] uppercase">SINCE 2023</span>
          </div>
        </Link>

        <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-sm mx-8 relative">
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search roses, gifts..." 
            className="w-full h-10 pl-4 pr-10 rounded-full border-gray-200 bg-gray-50/50"
          />
          <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-[#be1e2d]">
            <Search className="w-5 h-5" />
          </button>
        </form>

        <div className="flex items-center gap-6">
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-[#be1e2d]">
                {link.name}
              </Link>
            ))}
          </nav>
          <Link href="/cart" className="relative p-2">
            <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-[#be1e2d] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#be1e2d] text-white text-[8px] font-bold px-1 rounded-full min-w-[14px] h-3.5 flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
