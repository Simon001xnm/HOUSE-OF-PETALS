
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, Phone, MapPin, Edit3 } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <header className="mb-12 flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-headline mb-4">My Account</h1>
              <p className="text-muted-foreground uppercase tracking-widest text-xs">Premium Member since 2023</p>
            </div>
            <Button variant="outline" className="rounded-none border-gold text-gold hover:bg-gold hover:text-white">
              <Edit3 className="w-4 h-4 mr-2" /> Edit Profile
            </Button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-1 border-white/10 bg-secondary/10 rounded-none overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-6 gold-border">
                  <span className="text-4xl font-headline text-white">E</span>
                </div>
                <h3 className="text-xl font-headline">Eleanor Sterling</h3>
                <p className="text-sm text-gold mt-1 uppercase tracking-tighter">Gold Tier Member</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 border-white/10 bg-secondary/10 rounded-none overflow-hidden">
              <CardHeader className="border-b border-white/5 p-8">
                <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-6">
                  <Mail className="w-5 h-5 gold-text" />
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Email Address</p>
                    <p className="text-sm">eleanor.sterling@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="w-5 h-5 gold-text" />
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Phone Number</p>
                    <p className="text-sm">+1 (555) 012-3456</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <MapPin className="w-5 h-5 gold-text" />
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Primary Address</p>
                    <p className="text-sm leading-relaxed">72 Park Avenue, Penthouse B<br />New York, NY 10016</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
