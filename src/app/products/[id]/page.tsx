
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Truck, ShieldCheck, Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Mock product lookup
  const product = {
    id: params.id,
    name: params.id === '1' ? 'Crimson Velvet Roses' : 'Signature Collection',
    price: params.id === '1' ? 120 : 150,
    category: 'Premium Bouquets',
    rating: 4.9,
    reviews: 124,
    description: "An opulent arrangement of deep, velvet crimson roses, meticulously hand-tied and wrapped in signature forest green silk paper. This bouquet is designed to evoke passion and timeless luxury.",
    features: [
      "24-36 Premium Long-Stem Roses",
      "Sustainably Sourced from Ecuadorian Highlands",
      "Signature House of Petals Gold-Embossed Vase Included",
      "Hand-written note card with gold foil edges"
    ],
    image: 'prod-crimson-velvet'
  };

  const img = PlaceHolderImages.find(i => i.id === product.image) || PlaceHolderImages[0];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: img.imageUrl
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your bag.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] relative bg-secondary/10 overflow-hidden border border-white/5">
              <Image 
                src={img.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint={img.imageHint}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square relative bg-secondary/10 border border-white/5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  <Image src={img.imageUrl} alt="preview" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-2 block">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-headline mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} Customer Reviews)</span>
              </div>
              <p className="text-3xl font-medium">${product.price}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-light">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              <h4 className="text-xs uppercase tracking-widest font-bold text-white">Includes</h4>
              <ul className="grid grid-cols-1 gap-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-center border border-white/10 bg-secondary/20 h-14">
                <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="px-4 hover:text-gold"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity(q => q+1)} className="px-4 hover:text-gold"><Plus className="w-4 h-4" /></button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-accent hover:bg-accent/90 text-white h-14 rounded-none uppercase tracking-widest font-bold text-sm shadow-xl"
              >
                <ShoppingBag className="mr-2 w-5 h-5" /> Add to Shopping Bag
              </Button>
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-none border-white/10">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-10 border-t border-white/5">
              <div className="flex items-center gap-3 p-4 bg-secondary/10 border border-white/5">
                <Truck className="w-5 h-5 gold-text" />
                <div className="text-[10px] uppercase tracking-widest leading-none">
                  <span className="block font-bold mb-1">Express Delivery</span>
                  <span className="text-muted-foreground">Arrives Today</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/10 border border-white/5">
                <ShieldCheck className="w-5 h-5 gold-text" />
                <div className="text-[10px] uppercase tracking-widest leading-none">
                  <span className="block font-bold mb-1">Quality Guaranteed</span>
                  <span className="text-muted-foreground">Fresh or Replace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
