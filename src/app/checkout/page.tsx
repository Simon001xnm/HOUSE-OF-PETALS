
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart, type CartItem } from '@/hooks/use-cart';
import { ShieldCheck, Truck, ChevronRight, Smartphone, CreditCard, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage() {
  const { cart, subtotal } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppCheckout = () => {
    const whatsappNumber = "254704524070";
    const itemsList = cart.map((item: CartItem) => `- ${item.name} (${item.quantity})`).join('\n');
    const totalAmount = (subtotal * 100).toLocaleString();
    
    const message = encodeURIComponent(
      `*New Order from House of Petals*\n\n` +
      `*Customer:* ${formData.firstName} ${formData.lastName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Address:* ${formData.address}, ${formData.city}\n\n` +
      `*Items:*\n${itemsList}\n\n` +
      `*Total:* KES ${totalAmount}\n` +
      `*Payment Method:* ${paymentMethod.toUpperCase()}\n\n` +
      `Please confirm my order.`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

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
                  <div className={`text-xs uppercase tracking-widest pb-1 border-b-2 ${step >= 2 ? 'border-[#6db33f] text-[#6db33f]' : 'border-transparent text-muted-foreground'}`}>Payment</div>
                </div>
              </header>

              <div className="space-y-10">
                {step === 1 ? (
                  <section className="space-y-6">
                    <h3 className="text-xl font-headline border-l-2 border-[#6db33f] pl-4">Delivery Address</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">First Name</Label>
                        <Input name="firstName" value={formData.firstName} onChange={handleInputChange} className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Last Name</Label>
                        <Input name="lastName" value={formData.lastName} onChange={handleInputChange} className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Phone Number (For Delivery Coordination)</Label>
                        <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="07XX XXX XXX" className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Detailed Address / Apartment / Office</Label>
                        <Input name="address" value={formData.address} onChange={handleInputChange} className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">City (e.g. Nairobi, Kisumu, Mombasa)</Label>
                        <Input name="city" value={formData.city} onChange={handleInputChange} className="rounded-none border-gray-200 bg-gray-50 h-12 focus:border-[#6db33f]" />
                      </div>
                    </div>
                    <Button onClick={() => setStep(2)} className="w-full h-16 bg-[#be1e2d] hover:bg-[#a51a27] text-white rounded-none font-bold uppercase tracking-[0.2em] shadow-lg">
                      Continue to Payment
                    </Button>
                  </section>
                ) : (
                  <section className="space-y-6">
                    <h3 className="text-xl font-headline border-l-2 border-[#6db33f] pl-4">Payment Method</h3>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                      <div className={`flex items-center justify-between p-6 border transition-all cursor-pointer ${paymentMethod === 'mpesa' ? 'border-[#6db33f] bg-green-50/30' : 'border-gray-100'}`} onClick={() => setPaymentMethod('mpesa')}>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="mpesa" id="mpesa" />
                          <div className="space-y-1">
                            <Label htmlFor="mpesa" className="font-bold cursor-pointer">M-PESA Express</Label>
                            <p className="text-xs text-muted-foreground">Pay via STK Push on your phone</p>
                          </div>
                        </div>
                        <Smartphone className="w-6 h-6 text-[#6db33f]" />
                      </div>
                      <div className={`flex items-center justify-between p-6 border transition-all cursor-pointer ${paymentMethod === 'whatsapp' ? 'border-[#6db33f] bg-green-50/30' : 'border-gray-100'}`} onClick={() => setPaymentMethod('whatsapp')}>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="whatsapp" id="whatsapp" />
                          <div className="space-y-1">
                            <Label htmlFor="whatsapp" className="font-bold cursor-pointer">Order via WhatsApp</Label>
                            <p className="text-xs text-muted-foreground">Chat with us to complete your purchase</p>
                          </div>
                        </div>
                        <MessageCircle className="w-6 h-6 text-[#25d366]" />
                      </div>
                    </RadioGroup>

                    {paymentMethod === 'mpesa' && (
                      <div className="p-6 bg-gray-50 border border-gray-100 space-y-4 animate-in fade-in duration-300">
                        <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">M-Pesa Phone Number</Label>
                        <Input placeholder="07XX XXX XXX" className="rounded-none border-gray-200 bg-white h-12 focus:border-[#6db33f]" />
                        <p className="text-[10px] text-gray-400 italic">You will receive a prompt on your phone to enter your M-Pesa PIN.</p>
                      </div>
                    )}

                    <Button 
                      onClick={paymentMethod === 'whatsapp' ? handleWhatsAppCheckout : undefined}
                      className="w-full h-16 bg-[#6db33f] hover:bg-[#5a9b34] text-white rounded-none font-bold uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2"
                    >
                      {paymentMethod === 'whatsapp' ? (
                        <>Complete Order via WhatsApp <MessageCircle className="w-5 h-5" /></>
                      ) : (
                        'Complete Order'
                      )}
                    </Button>
                    <button onClick={() => setStep(1)} className="text-xs text-muted-foreground hover:text-[#be1e2d] transition-colors w-full text-center uppercase tracking-widest">
                      Go Back to Information
                    </button>
                  </section>
                )}
              </div>
            </div>

            <aside className="w-full lg:w-[350px]">
              <div className="bg-gray-50 border border-gray-100 p-6 space-y-6 sticky top-32">
                <h4 className="font-headline text-xl border-b border-gray-200 pb-4">Order Summary</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm tracking-wide">
                    <span className="text-muted-foreground uppercase text-xs">Subtotal</span>
                    <span className="font-medium">KES {(subtotal * 100).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm tracking-wide">
                    <span className="text-muted-foreground uppercase text-xs">Delivery Fee</span>
                    <span className="text-[#6db33f] font-bold">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-xl font-headline pt-4 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-[#6db33f]">KES {(subtotal * 100).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="pt-6 space-y-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-[#6db33f]" /> Secure SSL Encryption
                  </div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Truck className="w-4 h-4 text-[#6db33f]" /> Professional Hand-Delivery
                  </div>
                </div>

                <div className="pt-4 flex gap-2 opacity-50 grayscale justify-center">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
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
