
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { Minus, Plus, X, ArrowLeft, ShoppingBag, MessageCircle } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  const handleQuickWhatsApp = () => {
    const whatsappNumber = "254704524070";
    const itemsList = cart.map((item) => `- ${item.name} (${item.quantity}) @ KES ${item.price.toLocaleString()}`).join('\n');
    const totalAmount = subtotal.toLocaleString();
    
    const message = encodeURIComponent(
      `*Quick Order from House of Petals*\n\n` +
      `*Items:*\n${itemsList}\n\n` +
      `*Total:* KES ${totalAmount}\n\n` +
      `I'd like to order these. Please let me know the delivery details.`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 border border-gray-100 flex items-center justify-center mb-6 rounded-full bg-gray-50">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-headline mb-4 text-[#1e1e24]">Your Bag is Empty</h2>
          <p className="text-muted-foreground mb-8 max-w-sm">It looks like you haven't added any luxury blooms or gifts to your collection yet.</p>
          <Link href="/catalog">
            <Button className="bg-[#be1e2d] px-10 py-6 rounded-full uppercase tracking-widest text-xs font-bold shadow-lg hover:bg-[#a51a27]">Start Shopping</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart List */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
              <h1 className="text-4xl font-headline text-[#1e1e24]">Shopping Bag</h1>
              <span className="text-xs uppercase tracking-widest font-bold text-[#be1e2d]">{cart.length} items</span>
            </div>

            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-gray-100 relative">
                  <div className="w-full sm:w-40 aspect-square relative bg-gray-50 overflow-hidden border border-gray-100 rounded-lg">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-[#1e1e24] mb-1">{item.name}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-[#be1e2d] font-bold mb-2">Signature Item</p>
                      </div>
                      <p className="text-xl font-black text-[#be1e2d]">KES {item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center border-2 border-gray-100 bg-white rounded-full">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-2.5 hover:text-[#be1e2d]"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-10 text-center text-sm font-bold text-[#1e1e24]">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-2.5 hover:text-[#be1e2d]"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-[#be1e2d] flex items-center gap-1 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/catalog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-[#be1e2d] mt-10 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </Link>
          </div>

          {/* Summary Sidebar */}
          <aside className="w-full lg:w-[400px]">
            <div className="bg-gray-50 border border-gray-100 p-8 space-y-8 sticky top-32 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-headline border-b border-gray-200 pb-4 text-[#1e1e24]">Order Summary</h2>
              
              <div className="space-y-4 text-sm tracking-wide">
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Subtotal</span>
                  <span className="font-bold text-[#1e1e24]">KES {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Delivery</span>
                  <span className="font-bold text-[#6db33f]">COMPLIMENTARY</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
                <span className="text-lg font-headline text-[#1e1e24]">Total</span>
                <span className="text-3xl font-black text-[#be1e2d]">KES {subtotal.toLocaleString()}</span>
              </div>

              <div className="space-y-4 pt-4">
                <Link href="/checkout">
                  <Button className="w-full bg-[#be1e2d] hover:bg-[#a51a27] text-white h-14 rounded-full uppercase tracking-widest font-bold text-sm shadow-xl transition-transform hover:scale-[1.02]">
                    Checkout Now
                  </Button>
                </Link>
                <Button 
                  onClick={handleQuickWhatsApp}
                  variant="outline"
                  className="w-full border-2 border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white h-14 rounded-full uppercase tracking-widest font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> Quick WhatsApp Order
                </Button>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-medium">
                  Secure Delivery Coordination
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
