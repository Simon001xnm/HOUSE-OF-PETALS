
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Loader2, Gift, Send, RefreshCw, ChevronRight } from 'lucide-react';
import { aiGiftAdvisorRecommendation, type AiGiftAdvisorRecommendationOutput } from '@/ai/flows/ai-gift-advisor-recommendation-flow';

export default function GiftAdvisor() {
  const [occasion, setOccasion] = useState('');
  const [recipient, setRecipient] = useState('');
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<AiGiftAdvisorRecommendationOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await aiGiftAdvisorRecommendation({ occasion, recipient, preferences });
      setRecommendations(result);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setRecommendations(null);
    setOccasion('');
    setRecipient('');
    setPreferences('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 gold-border mb-6 rounded-sm">
              <Sparkles className="w-4 h-4 gold-text" />
              <span className="text-xs uppercase tracking-widest font-bold">House of Petals AI Concierge</span>
            </div>
            <h1 className="text-5xl font-headline mb-4">Find the Perfect Expression</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell our AI advisor about the special person and occasion, and we'll curate the perfect recommendation from our collection.
            </p>
          </header>

          {!recommendations ? (
            <Card className="border-white/5 bg-secondary/10 overflow-hidden">
              <CardHeader className="border-b border-white/5 p-8">
                <CardTitle className="font-headline text-2xl">Gift Consultation</CardTitle>
                <CardDescription>Fill out the details below to receive personalized suggestions.</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor="occasion" className="uppercase tracking-widest text-xs font-bold text-muted-foreground">What's the occasion?</Label>
                      <Input 
                        id="occasion"
                        placeholder="e.g. 10th Anniversary, Birthday, Graduation"
                        required
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="rounded-none border-white/10 bg-background/50 h-12 focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="recipient" className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Who are we celebrating?</Label>
                      <Input 
                        id="recipient"
                        placeholder="e.g. My Mother, Partner, Best Friend"
                        required
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="rounded-none border-white/10 bg-background/50 h-12 focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferences" className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Preferences & Personality</Label>
                    <Textarea 
                      id="preferences"
                      placeholder="e.g. Loves minimalist design, prefers white flowers over colorful ones, enjoys aromatic scents..."
                      rows={4}
                      value={preferences}
                      onChange={(e) => setPreferences(e.target.value)}
                      className="rounded-none border-white/10 bg-background/50 focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-16 text-lg uppercase tracking-[0.2em] font-bold rounded-none gold-border shadow-lg"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Consulting Advisor...</span>
                    ) : (
                      <span className="flex items-center gap-2">Get Recommendations <ChevronRight className="w-5 h-5" /></span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center pb-6 border-b border-white/5">
                <h3 className="font-headline text-3xl">Our Recommendations</h3>
                <Button onClick={reset} variant="ghost" className="text-gold hover:bg-gold/10">
                  <RefreshCw className="w-4 h-4 mr-2" /> Start Over
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {recommendations.recommendations.map((rec, idx) => (
                  <Card key={idx} className="border-white/5 bg-secondary/10 hover:border-gold/30 transition-all">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-16 h-16 rounded-sm border border-gold flex items-center justify-center shrink-0">
                        <Gift className="w-8 h-8 gold-text" />
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1 block">{rec.category}</span>
                          <h4 className="font-headline text-2xl">{rec.productName}</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{rec.description}</p>
                        <div className="bg-primary/5 p-4 border-l-2 border-gold italic text-sm">
                          <span className="font-bold text-xs uppercase tracking-tighter not-italic text-gold block mb-1">Advisor's Note:</span>
                          "{rec.reason}"
                        </div>
                        <Button className="bg-primary text-white rounded-none uppercase text-xs tracking-widest px-8">
                          Select This Gift
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
