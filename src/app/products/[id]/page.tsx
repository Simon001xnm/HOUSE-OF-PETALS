
"use client";

import { useState, use } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Truck, ShieldCheck, Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const fallbackImage = 'https://picsum.photos/seed/fallback/600/600';

  // Find a relevant image from the library based on the product ID or use a default
  const getProductImage = () => {
    const images = ['hp-hero-1', 'hp-hero-2', 'hp-hero-3', 'hp-hero-4', 'cat-birthday', 'cat-flowers'];
    const index = parseInt(id) % images.length || 0;
    const imgId = images[index];
    return PlaceHolderImages.find(i => i.id === imgId) || PlaceHolderImages[0];
  };

  const product = {
    id: id,
    name: id === '1' ? 'Crimson Velvet Roses' : 'House of Petals Signature Collection',
    price: id === '1' ? 7300 : 6500,
    category: 'Premium Flowers',
    rating: 4.9,
    reviews: 124,
    description: "An opulent arrangement from House of Petals, featuring premium hand-selected blooms, meticulously tied and wrapped in our signature packaging. Designed to evoke timeless luxury and passion.",
    features: [
      "Premium Long-Stem Flowers",
      "Sustainably Sourced Luxury Blooms",
      "Signature House of Petals Wrapping",
      "Hand-written note card included"
    ]
  };

  const img = getProductImage();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: img?.imageUrl || fallbackImage
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your shopping bag.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="aspect-square relative bg-gray-50 overflow-hidden border border-gray-100 rounded-xl">
              <Image 
                src={img?.imageUrl || fallbackImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {['hp-hero-1', 'hp-hero-2', 'hp-hero-3', 'hp-hero-4'].map(imgId => {
                const thumbImg = PlaceHolderImages.find(i => i.id === imgId);
                return (
                  <div key={imgId} className="aspect-square relative bg-gray-50 border border-gray-100 rounded-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer overflow-hidden">
                    <Image src={thumbImg?.imageUrl || fallbackImage} alt="preview" fill className="object-cover" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-[#be1e2d] text-xs uppercase tracking-[0.3em] font-black mb-2 block">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-black text-[#1e1e24] mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} Reviews)</span>
              </div>
              <p className="text-3xl font-black text-[#be1e2d]">KES {product.price.toLocaleString()}</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="space-y-4 mb-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#1e1e24]">Product Highlights</h4>
              <ul className="grid grid-cols-1 gap-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6db33f]" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center border-2 border-gray-100 bg-white rounded-full h-14 px-2">
                <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-3 text-gray-500 hover:text-[#be1e2d]"><Minus className="w-4 h-4" /></button>
                <span className="w-8 text-center font-bold text-[#1e1e24]">{quantity}</span>
                <button onClick={() => setQuantity(q => q+1)} className="p-3 text-gray-500 hover:text-[#be1e2d]"><Plus className="w-4 h-4" /></button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#be1e2d] hover:bg-[#a51a27] text-white h-14 rounded-full uppercase tracking-widest font-black text-sm shadow-lg"
              >
                <ShoppingBag className="mr-2 w-5 h-5" /> Add to Shopping Bag
              </Button>
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-100">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-10 border-t border-gray-100">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Truck className="w-6 h-6 text-[#6db33f]" />
                <div className="text-[10px] uppercase tracking-widest leading-none">
                  <span className="block font-black text-[#1e1e24] mb-1">Elite Delivery</span>
                  <span className="text-gray-500">Same Day Available</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-[#6db33f]" />
                <div className="text-[10px] uppercase tracking-widest leading-none">
                  <span className="block font-black text-[#1e1e24] mb-1">Guaranteed Fresh</span>
                  <span className="text-gray-500">Boutique Standards</span>
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
