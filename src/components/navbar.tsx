
"use client";

import Link from 'next/link';
import { ShoppingBag, User, Search, Flower, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';

export function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 border border-gold flex items-center justify-center rounded-sm">
              <span className="font-headline text-2xl gold-text">H</span>
            </div>
            <span className="font-headline text-2xl tracking-tight hidden md:block">House of Petals</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest font-medium text-muted-foreground">
            <Link href="/catalog" className="hover:text-gold transition-colors">Catalog</Link>
            <Link href="/catalog?category=flowers" className="hover:text-gold transition-colors">Flowers</Link>
            <Link href="/catalog?category=gifts" className="hover:text-gold transition-colors">Gifts</Link>
            <Link href="/gift-advisor" className="hover:text-gold transition-colors flex items-center gap-1">
              <Sparkles className="w-3 h-3 gold-text" /> AI Advisor
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold">
            <Search className="w-5 h-5" />
          </Button>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold">
              <User className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-gold">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
