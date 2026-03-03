
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Truck, Package, CheckCircle, Clock } from 'lucide-react';

const MOCK_ORDERS = [
  { id: 'HP-9281', date: 'May 15, 2024', status: 'Delivered', total: 120, items: 1 },
  { id: 'HP-8812', date: 'April 02, 2024', status: 'Shipped', total: 240, items: 3 },
  { id: 'HP-7104', date: 'March 22, 2024', status: 'Cancelled', total: 85, items: 1 },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl font-headline mb-4">Order History</h1>
            <p className="text-muted-foreground">Track and manage your House of Petals acquisitions.</p>
          </header>

          <div className="bg-secondary/10 border border-white/10 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="uppercase text-[10px] tracking-widest py-6">Order ID</TableHead>
                  <TableHead className="uppercase text-[10px] tracking-widest py-6">Date</TableHead>
                  <TableHead className="uppercase text-[10px] tracking-widest py-6">Status</TableHead>
                  <TableHead className="uppercase text-[10px] tracking-widest py-6">Total</TableHead>
                  <TableHead className="text-right uppercase text-[10px] tracking-widest py-6">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_ORDERS.map((order) => (
                  <TableRow key={order.id} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="font-medium py-6">{order.id}</TableCell>
                    <TableCell className="text-muted-foreground">{order.date}</TableCell>
                    <TableCell>
                      <Badge className={`rounded-none px-3 py-1 uppercase text-[9px] tracking-tighter ${
                        order.status === 'Delivered' ? 'bg-primary/20 text-primary border border-primary/30' : 
                        order.status === 'Shipped' ? 'bg-gold/20 text-gold border border-gold/30' : 
                        'bg-destructive/20 text-destructive border border-destructive/30'
                      }`}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-bold">${order.total}</TableCell>
                    <TableCell className="text-right">
                      <button className="text-[10px] uppercase tracking-widest text-gold hover:underline">View Details</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <section className="mt-20">
            <h3 className="text-2xl font-headline mb-8">Active Delivery Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-4 p-8 bg-secondary/10 border border-white/5 text-center">
                <Clock className="w-8 h-8 gold-text opacity-50" />
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Order Placed</div>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-secondary/10 border border-white/5 text-center">
                <Package className="w-8 h-8 gold-text opacity-50" />
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Preparing</div>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-primary/20 gold-border text-center">
                <Truck className="w-8 h-8 gold-text animate-pulse" />
                <div className="text-[10px] uppercase tracking-widest gold-text font-bold">In Transit</div>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-secondary/10 border border-white/5 text-center grayscale opacity-40">
                <CheckCircle className="w-8 h-8" />
                <div className="text-[10px] uppercase tracking-widest">Delivered</div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
