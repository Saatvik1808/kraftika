
"use client";

import Link from 'next/link';
import { Flame } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import * as React from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Store', href: '/store' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/80 transition-colors">
          <Flame className="h-6 w-6 text-accent" />
          <span className="font-serif">Aromatic Flames</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === item.href ? "text-accent font-semibold" : "text-foreground/70"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
           <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background">
              <div className="flex flex-col gap-6 p-6 pt-16">
                 {/* Logo inside sheet */}
                 <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary mb-4" onClick={closeSheet}>
                    <Flame className="h-5 w-5 text-accent" />
                    <span className="font-serif">Aromatic Flames</span>
                 </Link>
                 {/* Mobile Nav Links */}
                 {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeSheet}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-accent",
                      pathname === item.href ? "text-accent font-semibold" : "text-foreground/80"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
