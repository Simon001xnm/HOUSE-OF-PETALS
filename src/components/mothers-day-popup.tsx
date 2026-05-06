
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Sparkles } from 'lucide-react';

export function MothersDayPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 1.5 seconds delay
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('mothers-day-popup-seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('mothers-day-popup-seen', 'true');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[95vw] md:max-w-lg p-0 overflow-hidden border-none bg-transparent shadow-none focus:outline-none">
        <div className="relative group animate-in fade-in zoom-in duration-300">
          {/* Close Button Above Modal */}
          <button 
            onClick={handleClose}
            className="absolute -top-12 right-0 p-2 bg-white rounded-full text-[#be1e2d] hover:bg-gray-100 transition-all z-50 shadow-2xl"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative aspect-[4/5] w-full bg-white rounded-[2rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white">
            {/* The Poster Image */}
            <Image 
              src="/mothers-day-poster.png" 
              alt="Mother's Day Special Offer" 
              fill 
              className="object-cover"
              priority
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full mb-4">
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Limited Time Offer</span>
              </div>
              
              <h3 className="text-white font-black text-3xl mb-3 tracking-tighter uppercase leading-none">
                Celebrate Mom <br /> In Luxury
              </h3>
              
              <p className="text-white/80 text-xs mb-8 max-w-[240px] font-medium leading-relaxed">
                Discover our exclusive Mother's Day blooms and boutique gifts. Hand-crafted with absolute love.
              </p>
              
              <Link href="/catalog" className="w-full" onClick={handleClose}>
                <Button 
                  className="w-full bg-[#be1e2d] hover:bg-[#a51a27] text-white font-black h-16 rounded-full uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all hover:scale-[1.03] active:scale-95"
                >
                  START SHOPPING NOW
                </Button>
              </Link>
              
              <p className="text-white/40 text-[9px] mt-4 uppercase tracking-widest font-bold">
                House of Petals Signature Collection
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
