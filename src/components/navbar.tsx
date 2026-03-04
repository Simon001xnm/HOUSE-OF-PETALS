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
    <header className="w-full flex flex-col sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-[#1e1e24] text-white py-2 px-6">
        <div className="container mx-auto flex justify-between items-center text-[11px] font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3 brand-text-green" /> +254711907546</span>
            <span className="hidden sm:inline">Free same day delivery in Nairobi</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/orders" className="hover:text-[#6db33f]">Track Order</Link>
            <Link href="/profile" className="hover:text-[#6db33f]">My Account</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-6 border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between gap-8">
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="text-2xl font-bold tracking-tighter text-[#1e1e24] leading-none">GIFTS & FLOWERS</span>
            <span className="text-[10px] font-bold text-[#6db33f] tracking-[0.3em] uppercase">KENYA</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-xl relative">
            <Input 
              placeholder="Search for flowers, cakes, chocolates..." 
              className="rounded-full border-2 border-gray-100 focus:border-[#6db33f] h-11 pl-6 pr-12"
            />
            <Button size="icon" className="absolute right-1 top-1 rounded-full w-9 h-9 bg-[#6db33f] hover:bg-[#5a9b34]">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:text-[#6db33f]">
              <Heart className="w-6 h-6" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative hover:text-[#6db33f]">
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#6db33f] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <nav className="hidden lg:block bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <ul className="flex items-center justify-center gap-8 py-3 text-[13px] font-bold uppercase text-[#1e1e24]">
            <li><Link href="/catalog?category=anniversary" className="hover:text-[#6db33f] transition-colors">Anniversary</Link></li>
            <li><Link href="/catalog?category=birthday" className="hover:text-[#6db33f] transition-colors">Birthday</Link></li>
            <li><Link href="/catalog?category=love-romance" className="hover:text-[#6db33f] transition-colors">Love & Romance</Link></li>
            <li><Link href="/catalog?category=flowers" className="hover:text-[#6db33f] transition-colors">Flowers</Link></li>
            <li><Link href="/catalog?category=cakes" className="hover:text-[#6db33f] transition-colors">Cakes</Link></li>
            <li><Link href="/catalog?category=personalized" className="hover:text-[#6db33f] transition-colors">Personalized Gifts</Link></li>
            <li><Link href="/gift-advisor" className="text-[#6db33f] flex items-center gap-1">AI Advisor</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}