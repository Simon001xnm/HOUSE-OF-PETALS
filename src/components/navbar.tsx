"use client";

import Link from 'next/link';
import { ShoppingBag, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';

export function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Birthday Flowers', href: '/catalog?category=birthday' },
    { name: 'Occasions', href: '#', hasDropdown: true },
    { name: 'Arrangements', href: '#', hasDropdown: true },
    { name: 'Flowers', href: '/catalog?category=flowers' },
    { name: 'Combos', href: '/catalog?category=combos' },
    { name: 'Cakes, Drinks & More', href: '#', hasDropdown: true },
    { name: 'Gifts', href: '#', hasDropdown: true },
    { name: 'Shop', href: '/catalog' },
    { name: 'Contacts', href: '#' },
  ];

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-md">
      {/* Main Red Nav Bar */}
      <nav className="bg-[#be1e2d] text-white">
        <div className="container mx-auto px-4 flex items-center justify-between lg:justify-center">
          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
            <Menu className="w-6 h-6" />
          </Button>

          <ul className="hidden lg:flex items-center gap-1 xl:gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide py-3">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  className="flex items-center gap-1 text-[13px] font-medium px-2 py-1 hover:bg-white/10 rounded transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-70" />}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/cart" className="lg:hidden">
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#be1e2d] text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] h-4.5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}