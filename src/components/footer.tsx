
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-gold flex items-center justify-center rounded-sm">
                <span className="font-headline text-xl gold-text">H</span>
              </div>
              <span className="font-headline text-xl">House of Petals</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating beauty and elegance through nature's finest blooms and handpicked gifts for the moments that matter.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-gold"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-gold"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-gold"><Twitter className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/catalog" className="hover:text-gold transition-colors">New Arrivals</Link></li>
              <li><Link href="/catalog" className="hover:text-gold transition-colors">Best Sellers</Link></li>
              <li><Link href="/catalog" className="hover:text-gold transition-colors">Gift Sets</Link></li>
              <li><Link href="/gift-advisor" className="hover:text-gold transition-colors">AI Advisor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg mb-6">Customer Care</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/orders" className="hover:text-gold transition-colors">Order Tracking</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Join our community for floral inspiration and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-background border border-border px-4 py-2 text-sm w-full focus:outline-none focus:border-gold transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2024 House of Petals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
