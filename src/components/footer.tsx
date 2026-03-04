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
  Smartphone,
  ChevronRight
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full">
      {/* SEO Description Section */}
      <div className="bg-white py-14 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1e1e24] uppercase tracking-wide">Flower Delivery in Nairobi Kenya – Send Flowers Across Kenya</h2>
          <div className="w-16 h-1 bg-[#6db33f] mx-auto rounded-full"></div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Order & Send Gifts and Flowers online in Kenya. We offer reliable flower delivery services in Nairobi and across Kenya. 
            Buy beautiful gifts & flower bouquets for same day delivery within Nairobi and next day delivery across Kenya. 
            If you need to buy flowers online, you can count on us to deliver expertly crafted bouquets by our florists and delivered to the door.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-4xl mx-auto italic">
            We have stunning gifts and floral arrangements for all occasions including Anniversary, Birthday, Love & Romance, 
            Get Well Soon, Apology, Sympathy, Funeral, Mother's Day, Wedding, New Baby, Valentine's Day, Thank You and more.
          </p>
        </div>
      </div>

      {/* High-Level Features Bar */}
      <div className="bg-gray-50 border-y border-gray-200 py-6 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center justify-center gap-4 text-gray-700">
            <div className="bg-white p-2.5 rounded-full shadow-sm">
              <Truck className="w-6 h-6 text-[#6db33f]" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-tight">Fresh Flowers Delivered</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-700 lg:border-l border-gray-300">
            <div className="bg-white p-2.5 rounded-full shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#6db33f]" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-tight">Easy Secure Checkout</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-700 lg:border-l border-gray-300">
            <div className="bg-white p-2.5 rounded-full shadow-sm">
              <Headphones className="w-6 h-6 text-[#6db33f]" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-tight">Dedicated Support</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-700 lg:border-l border-gray-300">
            <div className="bg-white p-2.5 rounded-full shadow-sm">
              <Smartphone className="w-6 h-6 text-[#6db33f]" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-tight">+254 711 907 546</span>
          </div>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#1e1e24] text-white py-16 px-6 relative overflow-hidden">
        {/* Floating Currency Sidebar (Visual indicator only) */}
        <div className="hidden xl:flex flex-col absolute right-0 top-1/4 z-10 shadow-2xl">
          {['KES', 'USD', 'EUR', 'GBP'].map((curr, idx) => (
            <div key={curr} className={`${idx % 2 === 0 ? 'bg-[#6db33f]' : 'bg-[#5a9b34]'} text-white px-3 py-2 text-[10px] font-black cursor-pointer hover:bg-[#1e1e24] transition-colors border-b border-white/5 last:border-0`}>
              {curr}
            </div>
          ))}
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {/* About Column */}
            <div className="space-y-6">
              <h4 className="text-[13px] font-black uppercase tracking-widest text-white border-b-2 border-[#6db33f] pb-2 inline-block">About Us</h4>
              <p className="text-[13px] text-gray-400 leading-relaxed text-justify">
                Gifts and Flowers Kenya is a top rated online florist in Nairobi offering same day gifts and flower delivery in Nairobi. 
                We help you turn everyday moments into memorable occasions full of joy. If you need to order & send flowers in Nairobi 
                and across Kenya, you can count on us to deliver beautiful gifts & flower bouquets.
              </p>
              <div className="flex gap-4 pt-2">
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6db33f] hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6db33f] hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6db33f] hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="text-[13px] font-black uppercase tracking-widest text-white border-b-2 border-[#6db33f] pb-2 inline-block">Contact Info</h4>
              <ul className="space-y-5 text-[13px] text-gray-400">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 shrink-0 text-[#6db33f]" />
                  <span className="leading-snug">Kenya House Complex,<br />Koinange Street, Nairobi, Kenya</span>
                </li>
                <li className="flex items-center gap-4">
                  <Smartphone className="w-5 h-5 shrink-0 text-[#6db33f]" />
                  <span>Call: +254 711 907 546</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 shrink-0 text-[#6db33f]" />
                  <span>info@giftsandflowers.co.ke</span>
                </li>
              </ul>
            </div>

            {/* Links Column */}
            <div className="space-y-6">
              <h4 className="text-[13px] font-black uppercase tracking-widest text-white border-b-2 border-[#6db33f] pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3.5 text-[13px] text-gray-400">
                {['Cart', 'Checkout', 'Track Order', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map(link => (
                  <li key={link}>
                    <Link href="#" className="hover:text-white flex items-center gap-2 group transition-colors">
                      <ChevronRight className="w-3 h-3 text-[#6db33f] group-hover:translate-x-1 transition-transform" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="space-y-6">
              <h4 className="text-[13px] font-black uppercase tracking-widest text-white border-b-2 border-[#6db33f] pb-2 inline-block">Stay Updated</h4>
              <p className="text-[13px] text-gray-400">Join our mailing list for exclusive offers and gift inspiration.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-white/5 border border-white/10 rounded-lg h-11 px-4 text-sm focus:outline-none focus:border-[#6db33f]"
                />
                <button className="bg-[#6db33f] hover:bg-[#5a9b34] text-white font-black h-11 rounded-lg text-xs uppercase tracking-widest transition-all">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Buttons (Visual replication) */}
        <div className="fixed bottom-8 left-8 z-50 animate-bounce">
          <Link href="https://wa.me/254711907546" target="_blank" className="w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8 text-white fill-current" />
          </Link>
        </div>
      </div>

      {/* Deep Footer / Copyright */}
      <div className="bg-[#121216] py-8 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium text-center md:text-left">
            Copyright © 2025 Gifts & Flowers Kenya. Designed for Excellence.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Payment Method Badges */}
            {['M-PESA', 'VISA', 'MasterCard', 'AMEX', 'Airtel'].map(pm => (
              <div key={pm} className="bg-white/10 px-3 py-1 rounded text-[9px] font-black text-gray-300 border border-white/5 hover:bg-white/20 transition-colors">
                {pm}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}