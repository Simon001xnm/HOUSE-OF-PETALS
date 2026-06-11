
'use client';

import { use, useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Package, Truck, ShieldCheck } from 'lucide-react';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
        <Link href="/blog">
          <Button className="bg-[#be1e2d] rounded-full uppercase text-xs tracking-widest px-8">Return to Blog</Button>
        </Link>
      </div>
    );
  }

  const imgData = PlaceHolderImages.find(i => i.id === post.image);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image 
            src={imgData?.imageUrl || '/WhatsApp Image 2026-03-04 at 7.02.27 PM.jpeg'} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-6 relative z-10 text-center text-white space-y-4">
            <span className="bg-[#be1e2d] text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl mx-auto">
              {post.title}
            </h1>
          </div>
        </header>

        <article className="py-24 container mx-auto px-6 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#be1e2d] mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12 italic border-l-4 border-[#be1e2d] pl-6">
                  {post.excerpt}
                </p>
                <div className="text-gray-700 leading-loose space-y-8">
                  {post.content}
                </div>
              </div>

              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 space-y-8">
                <h3 className="text-2xl font-black text-[#1e1e24] uppercase tracking-tight">How we handle {post.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#be1e2d]">
                      <Package className="w-6 h-6" />
                      <h4 className="font-bold text-xs uppercase tracking-widest">Our Capacity</h4>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{post.capacity}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#6db33f]">
                      <CheckCircle2 className="w-6 h-6" />
                      <h4 className="font-bold text-xs uppercase tracking-widest">The Preparation</h4>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{post.process}</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1 space-y-12">
              <div className="bg-[#1e1e24] text-white p-8 rounded-[2rem] space-y-6">
                <h3 className="text-lg font-black uppercase tracking-widest border-b border-white/10 pb-4">Why We Are The Best</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Truck className="w-6 h-6 text-[#be1e2d] shrink-0" />
                    <div>
                      <h4 className="font-bold text-xs uppercase mb-1">Timely Execution</h4>
                      <p className="text-[11px] text-gray-400">Absolute precision in delivery for every event.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-[#6db33f] shrink-0" />
                    <div>
                      <h4 className="font-bold text-xs uppercase mb-1">Quality Assurance</h4>
                      <p className="text-[11px] text-gray-400">Every stem inspected by our master florists.</p>
                    </div>
                  </div>
                </div>
                <Link href="/catalog" className="block">
                  <Button className="w-full bg-[#be1e2d] hover:bg-[#a51a27] text-white rounded-full uppercase text-[10px] font-black tracking-widest h-12">
                    SHOP THIS STYLE
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
