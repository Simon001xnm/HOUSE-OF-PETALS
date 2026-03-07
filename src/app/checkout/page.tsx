
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart, type CartItem } from '@/hooks/use-cart';
import { ShieldCheck, Truck, MessageCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, subtotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: 'Nairobi'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppCheckout = () => {
    if (!formData.firstName || !formData.phone || !formData.address) {
      alert("Please fill in your delivery details first.");
      return;
    }

    const whatsappNumber = "254704524070";
    const itemsList = cart.map((item: CartItem) => `- ${item.name} (${item.quantity}) @ KES ${item.price.toLocaleString()}`).join('\n');
    const totalAmount = subtotal.toLocaleString();
    
    const message = encodeURIComponent(
      `*NEW ORDER - HOUSE OF PETALS*\n\n` +
      `*Customer:* ${formData.firstName} ${formData.lastName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Delivery Address:* ${formData.address}, ${formData.city}\n\n` +
      `*Order Details:*\n${itemsList}\n\n` +
      `*Total Amount:* KES ${totalAmount}\n\n` +
      `Please confirm my order and send the payment instructions.`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-3xl font-headline mb-4">Your Bag is Empty</h2>
          <Link href="/catalog">
            <Button className="bg-[#be1e2d] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs">Return to Shop</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-grow space-y-10">
              <header className="space-y-4">
                <Link href="/cart" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#be1e2d] flex items-center gap-2 mb-6">
                  <ArrowLeft className="w-4 h-4" /> Back to Cart
                </Link>
                <h1 className="text-4xl font-headline text-[#1e1e24]">Complete Your Order</h1>
                <p className="text-gray-500">Provide your delivery details below to finalize your acquisition via WhatsApp.</p>
              </header>

              <section className="space-y-8 bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-headline text-[#1e1e24] border-l-4 border-[#6db33f] pl-4">Delivery Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-black text-gray-400">First Name</Label>
                    <Input name="firstName" value={formData.firstName} onChange={handleInputChange} className="rounded-xl border-gray-200 bg-white h-14 focus:border-[#be1e2d] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Last Name</Label>
                    <Input name="lastName" value={formData.lastName} onChange={handleInputChange} className="rounded-xl border-gray-200 bg-white h-14 focus:border-[#be1e2d] transition-all" />
                  </div>
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Phone Number (Required)</Label>
                    <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="07XX XXX XXX" className="rounded-xl border-gray-200 bg-white h-14 focus:border-[#be1e2d] transition-all" />
                  </div>
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Delivery Address / Apartment / Estate</Label>
                    <Input name="address" value={formData.address} onChange={handleInputChange} className="rounded-xl border-gray-200 bg-white h-14 focus:border-[#be1e2d] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-black text-gray-400">City</Label>
                    <Input name="city" value={formData.city} onChange={handleInputChange} className="rounded-xl border-gray-200 bg-white h-14 focus:border-[#be1e2d] transition-all" />
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button 
                    onClick={handleWhatsAppCheckout}
                    className="w-full h-16 bg-[#25d366] hover:bg-[#1ebe57] text-white rounded-full font-black uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 text-sm transition-all hover:scale-[1.02]"
                  >
                    Send Order to WhatsApp <MessageCircle className="w-6 h-6" />
                  </Button>
                  <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-4 font-bold">
                    One-click confirmation with our concierge
                  </p>
                </div>
              </section>
            </div>

            <aside className="w-full lg:w-[350px]">
              <div className="bg-white border-2 border-gray-100 p-8 space-y-8 sticky top-32 rounded-2xl shadow-lg">
                <h4 className="font-headline text-2xl text-[#1e1e24] border-b border-gray-100 pb-4">Order Review</h4>
                <div className="space-y-4 max-h-[300px] overflow-auto pr-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center gap-4 text-sm">
                      <div className="flex-1">
                        <p className="font-bold text-[#1e1e24] line-clamp-1">{item.name}</p>
                        <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-black text-[#be1e2d]">KES {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-xl font-headline">
                    <span className="text-[#1e1e24]">Total</span>
                    <span className="text-[#be1e2d] font-black">KES {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="bg-[#6db33f]/10 p-3 rounded-lg flex items-center gap-2 text-[#6db33f] text-[11px] font-black uppercase tracking-tight">
                    <Truck className="w-4 h-4" /> Complimentary Delivery Included
                  </div>
                </div>
                
                <div className="pt-6 space-y-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <ShieldCheck className="w-5 h-5 text-[#6db33f]" /> SSL Secure Checkout
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
