
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 border border-white/10 flex items-center justify-center mb-6">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-headline mb-4">Your Bag is Empty</h2>
          <p className="text-muted-foreground mb-8 max-w-sm">It looks like you haven't added any luxury blooms or gifts to your collection yet.</p>
          <Link href="/catalog">
            <Button className="bg-primary px-10 py-6 rounded-none uppercase tracking-widest text-xs font-bold">Start Shopping</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart List */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
              <h1 className="text-4xl font-headline">Shopping Bag</h1>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">{cart.length} items</span>
            </div>

            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-white/5 relative">
                  <div className="w-full sm:w-40 aspect-square relative bg-secondary/10 overflow-hidden border border-white/5">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-headline mb-1">{item.name}</h3>
                        <p className="text-xs uppercase tracking-widest text-gold mb-2">Signature Item</p>
                      </div>
                      <p className="text-xl font-medium">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center border border-white/10 bg-secondary/10">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:text-gold"><Minus className="w-3 h-3" /></button>
                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:text-gold"><Plus className="w-3 h-3" /></button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent flex items-center gap-1 transition-colors"
                      >
                        <X className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/catalog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold mt-10 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </Link>
          </div>

          {/* Summary Sidebar */}
          <aside className="w-full lg:w-[400px]">
            <div className="bg-secondary/10 border border-white/10 p-8 space-y-8 sticky top-32">
              <h2 className="text-2xl font-headline border-b border-white/5 pb-4">Order Summary</h2>
              
              <div className="space-y-4 text-sm tracking-wide">
                <div className="flex justify-between">
                  <span className="text-muted-foreground uppercase text-xs">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground uppercase text-xs">Shipping</span>
                  <span className="font-medium text-gold">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground uppercase text-xs">Est. Taxes</span>
                  <span className="font-medium">$0.00</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-lg font-headline">Total</span>
                <span className="text-2xl font-bold">${subtotal}</span>
              </div>

              <div className="space-y-4">
                <Link href="/checkout">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white h-14 rounded-none uppercase tracking-widest font-bold text-sm shadow-xl">
                    Proceed to Checkout
                  </Button>
                </Link>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                  Secure Checkout with Encryption
                </p>
              </div>

              <div className="pt-8 space-y-6 border-t border-white/5">
                <div className="flex items-center gap-3 grayscale opacity-40">
                  <div className="w-12 h-8 bg-white/10 rounded-sm"></div>
                  <div className="w-12 h-8 bg-white/10 rounded-sm"></div>
                  <div className="w-12 h-8 bg-white/10 rounded-sm"></div>
                  <div className="w-12 h-8 bg-white/10 rounded-sm"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
