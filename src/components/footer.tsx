
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Headphones, 
  Smartphone,
  ChevronRight
} from 'lucide-react';

export function Footer() {
  const whatsappNumber = "254704524070";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const tiktokUrl = "https://www.tiktok.com/@houseofpetals254?_r=1&_t=ZS-94q35XLISsT";
  const instagramUrl = "https://www.instagram.com/houseofpetal254?igsh=MThieWRna2doM2p1eQ%3D%3D";

  return (
    <footer className="w-full">
      {/* SEO Description Section */}
      <div className="bg-white py-14 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1e1e24] uppercase tracking-wide">House of Petals Kenya – Luxury Flower Delivery</h2>
          <div className="w-16 h-1 bg-[#6db33f] mx-auto rounded-full"></div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Order & Send Luxury Gifts and Flowers online in Kenya. House of Petals offers elite flower delivery services in Nairobi and across Kenya. 
            Experience the finest floral arrangements crafted for excellence and delivered with care.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-4xl mx-auto italic">
            Celebrating life's milestones with premium blooms for Anniversaries, Birthdays, Romance, and more.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] bg-gray-100 relative overflow-hidden group">
        <div className="absolute inset-0 z-10 pointer-events-none bg-[#1e1e24]/5 group-hover:bg-transparent transition-colors duration-500"></div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8189874836696!2d36.81896897593259!3d-1.2824641987053592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d680327f11%3A0x7d8a6e84d4167e4e!2sCity%20Market!5e0!3m2!1sen!2ske!4v1710927000000!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1)' }} 
          className="group-hover:grayscale-0 transition-all duration-700"
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-8 left-8 z-20 bg-white p-6 shadow-2xl rounded-2xl border border-gray-100 hidden md:block max-w-xs transition-transform group-hover:-translate-y-1">
          <h4 className="font-black text-[#1e1e24] text-xs uppercase tracking-[0.2em] mb-2">Visit Our Boutique</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed">
            City Market, Koinange Street<br />
            Nairobi, Kenya
          </p>
          <div className="mt-4 flex items-center gap-2 text-[#be1e2d] text-[10px] font-black uppercase tracking-widest">
            <MapPin className="w-4 h-4" /> Get Directions
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gray-50 border-y border-gray-200 py-6 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center justify-center gap-4 text-gray-700">
            <div className="bg-white p-2.5 rounded-full shadow-sm">
              <Truck className="w-6 h-6 text-[#6db33f]" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-tight">Express Delivery Available</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-700 lg:border-l border-gray-300">
            <div className="bg-white p-2.5 rounded-full shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#6db33f]" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-tight">Premium Quality Guaranteed</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-700 lg:border-l border-gray-300">
            <div className="bg-white p-2.5 rounded-full shadow-sm">
              <Headphones className="w-6 h-6 text-[#6db33f]" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-tight">Concierge Support</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-700 lg:border-l border-gray-300">
            <Link href={`tel:+254704524070`} className="flex items-center gap-4">
              <div className="bg-white p-2.5 rounded-full shadow-sm">
                <Smartphone className="w-6 h-6 text-[#6db33f]" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-tight">+254 704 524 070</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#1e1e24] text-white py-16 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {/* About Column */}
            <div className="space-y-6">
              <h4 className="text-[13px] font-black uppercase tracking-widest text-white border-b-2 border-[#6db33f] pb-2 inline-block">House of Petals</h4>
              <p className="text-[13px] text-gray-400 leading-relaxed text-justify">
                House of Petals is a premium boutique florist in Nairobi. We specialize in luxury floral design and high-end gifting, 
                ensuring every delivery is an unforgettable experience of beauty and sophistication.
              </p>
              <div className="flex gap-4 pt-2">
                <Link href={instagramUrl} target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6db33f] transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href={tiktokUrl} target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6db33f] transition-all">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6db33f] transition-all">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6db33f] transition-all">
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
                  <span className="leading-snug">The Flower House, City Market<br />Koinange Street, Nairobi, Kenya</span>
                </li>
                <li className="flex items-center gap-4">
                  <Smartphone className="w-5 h-5 shrink-0 text-[#6db33f]" />
                  <span>Call: +254 704 524 070</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 shrink-0 text-[#6db33f]" />
                  <span>concierge@houseofpetals.co.ke</span>
                </li>
              </ul>
            </div>

            {/* Links Column */}
            <div className="space-y-6">
              <h4 className="text-[13px] font-black uppercase tracking-widest text-white border-b-2 border-[#6db33f] pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3.5 text-[13px] text-gray-400">
                {['About Us', 'Boutique Locations', 'Track Order', 'Gifting Guide', 'Privacy Policy'].map(link => (
                  <li key={link}>
                    <Link href="#" className="hover:text-white flex items-center gap-2 group transition-colors">
                      <ChevronRight className="w-3 h-3 text-[#6db33f] group-hover:translate-x-1 transition-transform" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-[13px] font-black uppercase tracking-widest text-white border-b-2 border-[#6db33f] pb-2 inline-block">Newsletter</h4>
              <p className="text-[13px] text-gray-400">Subscribe for exclusive floral collections and offers.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/5 border border-white/10 rounded-lg h-11 px-4 text-sm focus:outline-none focus:border-[#6db33f]"
                />
                <button className="bg-[#6db33f] hover:bg-[#5a9b34] text-white font-black h-11 rounded-lg text-xs uppercase tracking-widest transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#121216] py-8 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
            Copyright © 2025 House of Petals. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['M-PESA', 'VISA', 'MasterCard'].map(pm => (
              <div key={pm} className="bg-white/10 px-3 py-1 rounded text-[9px] font-black text-gray-300">
                {pm}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link href={whatsappUrl} target="_blank" className="w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <MessageCircle className="w-8 h-8 text-white fill-current" />
        </Link>
      </div>
    </footer>
  );
}
