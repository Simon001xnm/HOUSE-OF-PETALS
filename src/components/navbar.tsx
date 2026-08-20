'use client';

import { useState } from 'react';
import Link from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Menu, Search, Heart, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const { cart } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
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
      {/* Utility Bar */}
      <div className="bg-[#be1e2d] text-white py-2 px-4 text-[9px] font-black uppercase tracking-widest flex justify-center items-center gap-4">
        <span className="flex items-center gap-1.5"><Heart className="w-3 h-3 fill-white" /> GIRLFRIEND'S DAY - AUGUST 1ST</span>
        <span className="hidden md:inline text-white/40">|</span>
        <span className="hidden md:flex items-center gap-1.5"><Sparkles className="w-3 h-3" /> PRE-ORDER NAIROBI'S FRESHEST BLOOMS</span>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NextLink href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0 border border-gray-100 rounded-lg overflow-hidden">
            <Link src="/logo.jpeg" alt="Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-black text-[#be1e2d] tracking-tighter uppercase">HOUSE OF PETALS</span>
            <span className="text-[7px] md:text-[8px] font-bold text-gray-400 tracking-[0.4em] uppercase">SINCE 2023</span>
          </div>
        </NextLink>

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-sm mx-8 relative">
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search roses, gifts..." 
            className="w-full h-10 pl-4 pr-10 rounded-full border-gray-200 bg-gray-50/50 text-xs"
          />
          <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-[#be1e2d]">
            <Search className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <NextLink key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-[#be1e2d] transition-colors">
                {link.name}
              </NextLink>
            ))}
          </nav>
          
          <NextLink href="/cart" className="relative p-2">
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-gray-700 hover:text-[#be1e2d] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#be1e2d] text-white text-[8px] font-bold px-1 rounded-full min-w-[14px] h-3.5 flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </NextLink>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden">
                <Menu className="w-6 h-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l border-gray-100">
              <SheetHeader className="p-6 border-b border-gray-100 bg-gray-50/50">
                <SheetTitle className="text-left text-xs font-black uppercase tracking-widest text-[#be1e2d]">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full bg-white">
                <div className="p-6">
                  <form onSubmit={handleSearch} className="relative mb-8">
                    <Input 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search roses..." 
                      className="w-full h-12 pl-4 pr-10 rounded-xl border-gray-100 bg-gray-50"
                    />
                    <button type="submit" className="absolute right-4 top-3.5 text-gray-400">
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <NextLink 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-black uppercase tracking-tighter text-[#1e1e24] hover:text-[#be1e2d] transition-colors"
                      >
                        {link.name}
                      </NextLink>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
                  <div className="flex flex-col gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Customer Support</p>
                    <NextLink href="https://wa.me/254704524070" className="text-sm font-bold text-[#25d366]">+254 704 524 070</NextLink>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
