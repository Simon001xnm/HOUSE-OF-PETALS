
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/hooks/use-cart';
import { ShieldCheck, Truck, ChevronRight } from 'lucide-react';

export default function CheckoutPage() {
  const { subtotal } = useCart();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-grow space-y-12">
              <header>
                <h1 className="text-4xl font-headline mb-4">Checkout</h1>
                <div className="flex gap-4 items-center">
                  <div className={`text-xs uppercase tracking-widest pb-1 border-b-2 ${step >= 1 ? 'border-gold text-gold' : 'border-transparent text-muted-foreground'}`}>Information</div>
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  <div className={`text-xs uppercase tracking-widest pb-1 border-b-2 ${step >= 2 ? 'border-gold text-gold' : 'border-transparent text-muted-foreground'}`}>Shipping</div>
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  <div className={`text-xs uppercase tracking-widest pb-1 border-b-2 ${step >= 3 ? 'border-gold text-gold' : 'border-transparent text-muted-foreground'}`}>Payment</div>
                </div>
              </header>

              <div className="space-y-10">
                <section className="space-y-6">
                  <h3 className="text-xl font-headline border-l-2 border-gold pl-4">Shipping Address</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">First Name</Label>
                      <Input className="rounded-none border-white/10 bg-secondary/10 h-12 focus:border-gold" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Last Name</Label>
                      <Input className="rounded-none border-white/10 bg-secondary/10 h-12 focus:border-gold" />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Address</Label>
                      <Input className="rounded-none border-white/10 bg-secondary/10 h-12 focus:border-gold" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">City</Label>
                      <Input className="rounded-none border-white/10 bg-secondary/10 h-12 focus:border-gold" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Postal Code</Label>
                      <Input className="rounded-none border-white/10 bg-secondary/10 h-12 focus:border-gold" />
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-headline border-l-2 border-gold pl-4">Delivery Method</h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-6 bg-secondary/10 border border-gold/30 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <input type="radio" checked className="accent-gold w-4 h-4" />
                        <div>
                          <p className="font-bold text-sm tracking-wide">Signature Express Delivery</p>
                          <p className="text-xs text-muted-foreground">Arrives within 2-4 hours with hand-delivery</p>
                        </div>
                      </div>
                      <span className="font-bold gold-text">FREE</span>
                    </label>
                  </div>
                </section>

                <Button className="w-full h-16 bg-primary text-white rounded-none font-bold uppercase tracking-[0.2em] shadow-lg">
                  Continue to Payment
                </Button>
              </div>
            </div>

            <aside className="w-full lg:w-[350px]">
              <div className="bg-secondary/10 border border-white/10 p-6 space-y-6">
                <h4 className="font-headline text-xl border-b border-white/5 pb-4">In Your Bag</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm tracking-wide">
                    <span className="text-muted-foreground uppercase text-xs">Items Subtotal</span>
                    <span className="font-medium">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm tracking-wide">
                    <span className="text-muted-foreground uppercase text-xs">Shipping</span>
                    <span className="text-gold font-bold">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-xl font-headline pt-4 border-t border-white/5">
                    <span>Total Due</span>
                    <span>${subtotal}</span>
                  </div>
                </div>
                
                <div className="pt-6 space-y-4">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 gold-text" /> 256-bit Secure Encryption
                  </div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Truck className="w-4 h-4 gold-text" /> Hand-Delivered Excellence
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
