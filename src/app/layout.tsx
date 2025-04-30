import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Playfair_Display } from 'next/font/google'; // Elegant serif font
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const geistSans = GeistSans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: 'Aromatic Flames - Handcrafted Scented Candles',
  description: 'Discover artisanal scented candles, handmade in India with natural soy wax.',
  icons: {
    // Add a placeholder icon or link to your actual favicon
    icon: '/favicon.ico', // Make sure you have a favicon.ico in your public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geistSans.variable, playfairDisplay.variable)}>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
