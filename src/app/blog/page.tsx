
'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BLOG_POSTS } from '@/lib/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export default function BlogListing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gray-50 py-24 border-b border-gray-100">
          <div className="container mx-auto px-6 text-center">
            <span className="text-[#be1e2d] text-xs font-black uppercase tracking-[0.4em] mb-4 block">The House of Petals Journal</span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e1e24] leading-none mb-8">
              Luxury <span className="text-[#be1e2d]">Stories.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              Explore our world of floral artistry, event mastery, and the journey of excellence from Naivasha to your home.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {BLOG_POSTS.map((post) => {
                const imgData = PlaceHolderImages.find(i => i.id === post.image);
                return (
                  <article key={post.id} className="group flex flex-col">
                    <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-[2rem] shadow-sm group-hover:shadow-2xl transition-all duration-500">
                      <Image 
                        src={imgData?.imageUrl || '/WhatsApp Image 2026-03-04 at 7.02.27 PM.jpeg'} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#be1e2d] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> May 2024</span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> Editor</span>
                      </div>
                      <h2 className="text-2xl font-black text-[#1e1e24] group-hover:text-[#be1e2d] transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="link" className="p-0 text-[#be1e2d] font-black uppercase text-[10px] tracking-widest hover:no-underline group/btn">
                          Read More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
