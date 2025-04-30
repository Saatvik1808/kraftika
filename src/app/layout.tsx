
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Playfair_Display } from 'next/font/google'; // Keep for headings
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider'; // Import ThemeProvider


const playfairDisplay = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Kraftika - Luxury Handcrafted Candles', // Updated title
  description: 'Experience the warmth and artistry of Kraftika. Premium scented candles, handcrafted with passion.', // Updated description
  icons: {
    // Replace with actual favicon link
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, playfairDisplay.variable)} suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen bg-background">
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {/* Consider removing 'container' class if a full-width design is desired */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              {children}
            </main>
            <Footer />
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
