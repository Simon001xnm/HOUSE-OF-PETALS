"use client";

import Link from 'next/link';
import { ShoppingBag, User, Search, Phone, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';

export function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#1e1e24] text-white py-2 px-6">
        <div className="container mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#6db33f]" /> Call Us: +254711907546</span>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline">FREE SAME DAY DELIVERY IN NAIROBI</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/orders" className="hover:text-[#6db33f] transition-colors">Track Your Order</Link>
            <Link href="/profile" className="hover:text-[#6db33f] transition-colors flex items-center gap-1"><User className="w-3 h-3" /> Account</Link>
          </div>
        </div>
      </div>

      {/* Main Brand & Search Bar */}
      <div className="py-5 px-6">
        <div className="container mx-auto flex items-center justify-between gap-10">
          {/* Mobile Menu Trigger */}
          <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10">
            <Menu className="w-7 h-7" />
          </Button>

          {/* Centered Logo on Mobile, Left on Large */}
          <Link href="/" className="flex flex-col items-center lg:items-start shrink-0">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#1e1e24] leading-none">GIFTS & FLOWERS</span>
            <span className="text-[10px] md:text-[11px] font-black text-[#6db33f] tracking-[0.4em] uppercase -mt-0.5">KENYA</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative group">
            <Input 
              placeholder="Search for flowers, cakes, chocolates, gift baskets..." 
              className="rounded-full border-2 border-gray-100 focus:border-[#6db33f] h-12 pl-7 pr-14 text-sm transition-all focus:ring-0"
            />
            <Button size="icon" className="absolute right-1 top-1 rounded-full w-10 h-10 bg-[#6db33f] hover:bg-[#5a9b34] shadow-md transition-transform group-focus-within:scale-105">
              <Search className="w-4.5 h-4.5 text-white" />
            </Button>
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:text-[#6db33f] h-11 w-11 hover:bg-[#6db33f]/5">
              <Heart className="w-6 h-6" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative hover:text-[#6db33f] h-11 w-11 hover:bg-[#6db33f]/5">
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#6db33f] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Navigation Bar */}
      <nav className="hidden lg:block bg-white border-t border-gray-50">
        <div className="container mx-auto px-6">
          <ul className="flex items-center justify-center gap-10 py-4 text-[13px] font-black uppercase text-[#1e1e24] tracking-wide">
            <li className="relative group">
              <Link href="/catalog?category=anniversary" className="hover:text-[#6db33f] transition-colors py-2">Anniversary</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6db33f] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/catalog?category=birthday" className="hover:text-[#6db33f] transition-colors py-2">Birthday</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6db33f] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/catalog?category=love-romance" className="hover:text-[#6db33f] transition-colors py-2">Love & Romance</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6db33f] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/catalog?category=flowers" className="hover:text-[#6db33f] transition-colors py-2">Flowers</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6db33f] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/catalog?category=cakes" className="hover:text-[#6db33f] transition-colors py-2">Cakes</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6db33f] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/catalog?category=personalized" className="hover:text-[#6db33f] transition-colors py-2">Personalized Gifts</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6db33f] transition-all group-hover:w-full"></span>
            </li>
            <li>
              <Link href="/gift-advisor" className="text-[#6db33f] font-black border-2 border-[#6db33f] px-4 py-1.5 rounded-full hover:bg-[#6db33f] hover:text-white transition-all text-xs">
                AI GIFT ADVISOR
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}