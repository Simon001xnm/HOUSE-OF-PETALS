
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MothersDayPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/mothersday.png");

  useEffect(() => {
    const posterData = PlaceHolderImages.find(img => img.id === 'mothers-day-poster');
    if (posterData) {
      setImageSrc(posterData.imageUrl);
    }

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
        <DialogTitle className="sr-only">Mother's Day Special Offer</DialogTitle>
        <DialogDescription className="sr-only">
          Exclusive Mother's Day blooms and boutique gifts.
        </DialogDescription>
        
        <div className="relative group animate-in fade-in zoom-in duration-300">
          <button 
            onClick={handleClose}
            className="absolute -top-12 right-0 p-2 bg-white rounded-full text-[#be1e2d] hover:bg-gray-100 transition-all z-50 shadow-2xl"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative aspect-[4/5] w-full bg-white rounded-[2rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white">
            <Image 
              src={imageSrc} 
              alt="Mother's Day Special Offer" 
              fill 
              className="object-cover"
              priority
              onError={() => {
                setImageSrc("https://picsum.photos/seed/mothersday/600/800");
              }}
            />
            
            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center">
              <Link href="/catalog" className="w-full" onClick={handleClose}>
                <Button 
                  className="w-full bg-[#be1e2d] hover:bg-[#a51a27] text-white font-black h-16 rounded-full uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all hover:scale-[1.03] active:scale-95"
                >
                  START SHOPPING NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
