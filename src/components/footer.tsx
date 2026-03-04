
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Headphones, 
  Smartphone 
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full">
      {/* SEO Content Section */}
      <div className="bg-white text-black py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <h2 className="text-xl font-bold">Flower Delivery in Nairobi Kenya – Send Flowers Across Kenya</h2>
          <p className="text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Order & Send Gifts and Flowers online in Kenya. We offer reliable flower delivery services in Nairobi and across Kenya. Buy beautiful gifts & flower bouquets for same day delivery within Nairobi and next day delivery across Kenya. If you need to buy flowers online, you can count on us to deliver expertly crafted bouquets by our florists and delivered to the door.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto italic">
            We have stunning gifts and floral arrangements for all occasion including Anniversary, Birthday, Love & Romance, Get Well Soon, Apology, Sympathy, Funeral, Mother's Day, Wedding, New Baby, Valentines Day, Thank You and more.
          </p>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gray-100 border-y border-gray-200 py-4 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center justify-center gap-3 text-gray-700">
            <Truck className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-tight">Fresh Flowers Delivered</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-700 md:border-l border-gray-300">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-tight">Easy Checkout Process</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-700 md:border-l border-gray-300">
            <Headphones className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-tight">Dedicated Customer Support</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-700 md:border-l border-gray-300">
            <Smartphone className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-tight">+254711907546</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#1e1e24] text-white py-16 px-6 relative">
        {/* Floating Currency Sidebar (Visual only for replication) */}
        <div className="hidden lg:flex flex-col absolute right-0 top-1/4 z-10">
          <div className="bg-[#6db33f] text-white px-2 py-1 text-[10px] font-bold cursor-pointer hover:bg-opacity-90">KES</div>
          <div className="bg-[#a2d182] text-white px-2 py-1 text-[10px] font-bold cursor-pointer hover:bg-opacity-90">USD</div>
          <div className="bg-[#6db33f] text-white px-2 py-1 text-[10px] font-bold cursor-pointer hover:bg-opacity-90">EUR</div>
          <div className="bg-[#a2d182] text-white px-2 py-1 text-[10px] font-bold cursor-pointer hover:bg-opacity-90">GBP</div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider">About Gifts and Flowers Kenya</h4>
              <p className="text-xs text-gray-400 leading-relaxed text-justify">
                Gifts and Flowers Kenya is a top rated online florist in Nairobi offering same day gifts and flower delivery in Nairobi. We help you turn everyday moments into memorable occasions full of joy. If you need to order & send flowers in Nairobi and across Kenya, you can count on us to deliver beautiful gifts & flower bouquets.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-4 text-xs text-gray-400">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 text-gray-500" />
                  <span>Gifts & Flowers<br />Koinange Street, Kenya House Complex, Nairobi, Kenya</span>
                </li>
                <li className="flex gap-3">
                  <Smartphone className="w-4 h-4 shrink-0 text-gray-500" />
                  <span>Phone: +254711 907 546</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0 text-gray-500" />
                  <span>Email: info@giftsandflowers.co.ke</span>
                </li>
              </ul>
            </div>

            {/* Useful Links Section */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider">Useful Links</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
                <li><Link href="/checkout" className="hover:text-white transition-colors">Checkout</Link></li>
                <li><Link href="/orders" className="hover:text-white transition-colors">Track order</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Return & refund policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact us</Link></li>
              </ul>
            </div>

            {/* Social Section */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider">We are Social</h4>
              <div className="flex gap-3">
                <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1e1e24] transition-all">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1e1e24] transition-all">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1e1e24] transition-all text-xs font-bold">
                  <span className="scale-75">Tik</span>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1e1e24] transition-all">
                  <MessageCircle className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Chat/WhatsApp Buttons */}
        <div className="fixed bottom-6 left-6 z-50">
          <div className="w-12 h-12 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50">
          <div className="w-12 h-12 bg-[#d32f2f] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="bg-[#121216] py-6 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            Copyright © 2025 Gifts & Flowers Kenya. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {/* Mock Payment Icons */}
            <div className="bg-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-green-400 border border-green-500/20">M-PESA</div>
            <div className="bg-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-blue-400 border border-blue-500/20">VISA</div>
            <div className="bg-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-red-400 border border-red-500/20">MasterCard</div>
            <div className="bg-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-blue-300 border border-blue-300/20">AMEX</div>
            <div className="bg-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-red-500 border border-red-500/20">Airtel</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
