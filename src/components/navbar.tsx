
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingBag, ChevronDown, Menu, Search, Phone, Mail } from 'lucide-react';
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
    { name: 'Birthday Flowers', href: '/catalog?category=flowers' },
    { name: 'Occasions', href: '/catalog' },
    { name: 'Arrangements', href: '/catalog' },
    { name: 'Flowers', href: '/catalog?category=flowers' },
    { name: 'Combos', href: '/catalog?category=gifts' },
    { name: 'Cakes, Drinks & More', href: '/catalog' },
    { name: 'Gifts', href: '/catalog?category=gifts' },
    { name: 'Shop', href: '/catalog' },
    { name: 'Contacts', href: '#' },
  ];

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-md bg-white">
      {/* Top Header with Logo and Search */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 overflow-hidden">
              <Image 
                src="/logo.jpeg" 
                alt="House of Petals Logo" 
                fill 
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xl md:text-2xl font-black text-[#be1e2d] tracking-tighter uppercase group-hover:opacity-80 transition-opacity">HOUSE OF PETALS</span>
              <span className="text-[9px] font-bold text-gray-400 tracking-[0.3em] uppercase ml-0.5">Premium Delivery Nairobi</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex flex-col text-[10px] font-bold text-gray-400 border-l border-gray-200 pl-6 gap-0.5">
            <span className="flex items-center gap-1 hover:text-[#be1e2d] cursor-default transition-colors">
              <Phone className="w-3 h-3 text-[#be1e2d]" /> +254 704 524 070
            </span>
            <span className="flex items-center gap-1 hover:text-[#be1e2d] cursor-default transition-colors">
              <Mail className="w-3 h-3 text-[#be1e2d]" /> info@houseofpetals.co.ke
            </span>
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex-1 max-w-xl w-full relative group px-2">
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for flowers, cakes or gifts..." 
            className="w-full h-11 pl-4 pr-12 rounded-full border-2 border-gray-100 focus:border-[#be1e2d] transition-all bg-gray-50/50"
          />
          <Button type="submit" size="icon" className="absolute right-3 top-1 h-9 w-9 rounded-full bg-[#be1e2d] hover:bg-[#a51a27] border-none">
            <Search className="w-4 h-4 text-white" />
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative group p-2">
            <ShoppingBag className="w-7 h-7 text-gray-700 group-hover:text-[#be1e2d] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#be1e2d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] h-4.5 flex items-center justify-center border-2 border-white shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden text-gray-700">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Main Red Nav Bar */}
      <nav className="bg-[#be1e2d] text-white hidden lg:block shadow-inner">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <ul className="flex items-center gap-1 xl:gap-5 py-2">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  className="flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 hover:bg-white/10 rounded-sm transition-colors uppercase tracking-wide"
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
