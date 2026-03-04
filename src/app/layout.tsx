import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gifts & Flowers Kenya | Same Day Flower Delivery Nairobi',
  description: 'Order & Send Gifts and Flowers online in Kenya. We offer reliable flower delivery services in Nairobi and across Kenya. Same day delivery available.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}