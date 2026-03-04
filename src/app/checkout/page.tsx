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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-grow space-y-12">
              <header>
                <h1 className="text-4xl font-headline mb-4 text-[#1e1e24]">House of Petals Checkout</h1>
                <div className="flex gap-4 items-center">
                  <div className={`text-xs uppercase tracking-widest pb-1 border-b-2 ${step >= 1 ? 'border-[#6db33f] text-[#6db33f]' : 'border-transparent text-muted-foreground'}`}>Information</div>
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  <div className={`text-xs uppercase tracking-widest pb-1 border-b-2 ${step >= 2 ? 'border-[#6db33f] text-[#6db33f]' : 'border-transparent text-muted-foreground'}`}>Shipping</div>
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  <div className={`text-xs uppercase tracking-widest pb-1 border-b-2 ${step >= 3 ? 'border-[#6db33f] text-[#6db33f]' : 'border-transparent text-muted-foreground'}`}>Payment</div>
                </div>
              </header>

              <div className="space-y-10">
                <section className="space-y-6">
                  <h3 className="text-xl font-headline border-l-2 border-[#6db33f] pl-4">Delivery Address</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">First Name</Label>
                      <Input className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Last Name</Label>
                      <Input className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Address</Label>
                      <Input className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">City</Label>
                      <Input className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Postal Code</Label>
                      <Input className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                    </div>
                  </div>
                </section>

                <Button className="w-full h-16 bg-[#be1e2d] hover:bg-[#a51a27] text-white rounded-none font-bold uppercase tracking-[0.2em] shadow-lg">
                  Continue to Payment
                </Button>
              </div>
            </div>

            <aside className="w-full lg:w-[350px]">
              <div className="bg-gray-50 border border-gray-100 p-6 space-y-6">
                <h4 className="font-headline text-xl border-b border-gray-200 pb-4">Order Summary</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm tracking-wide">
                    <span className="text-muted-foreground uppercase text-xs">Subtotal</span>
                    <span className="font-medium">KES {(subtotal * 100).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm tracking-wide">
                    <span className="text-muted-foreground uppercase text-xs">Shipping</span>
                    <span className="text-[#6db33f] font-bold">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-xl font-headline pt-4 border-t border-gray-200">
                    <span>Total</span>
                    <span>KES {(subtotal * 100).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="pt-6 space-y-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-[#6db33f]" /> Secure Encryption
                  </div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Truck className="w-4 h-4 text-[#6db33f]" /> Elite Delivery Hand-Delivered
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
