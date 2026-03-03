
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  
  const categories = [
    { id: 'bouquets', name: 'Handcrafted Bouquets', image: 'cat-bouquets', href: '/catalog?category=flowers' },
    { id: 'indoor', name: 'Indoor Plants', image: 'cat-indoor', href: '/catalog?category=plants' },
    { id: 'gifts', name: 'Signature Gifts', image: 'cat-gifts', href: '/catalog?category=gifts' }
  ];

  const featured = [
    { id: '1', name: 'Crimson Velvet Roses', price: 120, image: 'prod-crimson-velvet', category: 'Flowers' },
    { id: '2', name: 'Emerald Fern', price: 85, image: 'prod-emerald-fern', category: 'Plants' },
    { id: '3', name: 'Midnight Orchid', price: 150, image: 'prod-midnight-orchid', category: 'Flowers' },
    { id: '4', name: 'Golden Scent Candle', price: 45, image: 'prod-golden-scent', category: 'Gifts' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <Image 
            src={heroImg?.imageUrl || ''}
            alt={heroImg?.description || 'Hero'}
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint="luxurious flowers"
          />
          <div className="absolute inset-0 luxury-gradient" />
          <div className="relative z-10 text-center container mx-auto px-6 max-w-4xl">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block animate-fade-in">Experience Luxury in Every Bloom</span>
            <h1 className="text-5xl md:text-7xl font-headline mb-8 leading-tight animate-slide-up">House of Petals</h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Discover a world where elegance meets nature. Our artisanal floral arrangements and curated gift collections are designed to elevate every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog">
                <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg rounded-none gold-border">
                  Shop Collection
                </Button>
              </Link>
              <Link href="/gift-advisor">
                <Button variant="outline" className="border-white/20 hover:border-gold hover:bg-transparent text-white px-10 py-7 text-lg rounded-none group">
                  <Sparkles className="mr-2 h-5 w-5 gold-text" /> AI Gift Advisor
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-headline mb-4">Curated Collections</h2>
                <div className="w-20 h-1 bg-gold"></div>
              </div>
              <Link href="/catalog" className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-gold flex items-center gap-2 transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((cat) => {
                const img = PlaceHolderImages.find(i => i.id === cat.image);
                return (
                  <Link href={cat.href} key={cat.id} className="group relative h-[500px] overflow-hidden">
                    <Image 
                      src={img?.imageUrl || ''}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={img?.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-headline mb-2">{cat.name}</h3>
                      <span className="text-xs uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">Discover More</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-headline mb-4">Seasonal Highlights</h2>
            <p className="text-muted-foreground mb-16 max-w-xl mx-auto">Our florist's handpicked favorites, perfect for gifting or elevating your home sanctuary.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featured.map((product) => {
                const img = PlaceHolderImages.find(i => i.id === product.image);
                return (
                  <Link href={`/products/${product.id}`} key={product.id} className="group text-left">
                    <div className="relative aspect-square overflow-hidden mb-6 bg-secondary/20 border border-white/5">
                      <Image 
                        src={img?.imageUrl || ''}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={img?.imageHint}
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent px-3 py-1 text-[10px] uppercase font-bold tracking-tighter">Bestseller</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 block">{product.category}</span>
                        <h3 className="text-lg font-headline group-hover:text-gold transition-colors">{product.name}</h3>
                      </div>
                      <span className="text-lg font-medium">${product.price}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-20">
              <Link href="/catalog">
                <Button className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-white px-12 py-6 rounded-none transition-all">
                  Browse All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* AI Advisor CTA */}
        <section className="py-24 relative overflow-hidden bg-primary/20">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <Sparkles className="w-12 h-12 gold-text mb-6" />
            <h2 className="text-4xl font-headline mb-6">Need the Perfect Gift Recommendation?</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl text-lg">
              Let our AI Gift Advisor help you find the most thoughtful arrangement or gift based on the recipient and occasion.
            </p>
            <Link href="/gift-advisor">
              <Button className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-lg rounded-none uppercase tracking-widest font-semibold shadow-xl">
                Start AI Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
