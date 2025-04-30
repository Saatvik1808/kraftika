
"use client";

import Link from 'next/link';
import { Flame, ShoppingCart, Sun, Moon } from 'lucide-react'; // Add icons
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import * as React from 'react';
import { useTheme } from "next-themes"; // Import useTheme

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Store', href: '/store' },
  // { name: 'Customize', href: '/customize' }, // Potential future link
  // { name: 'Gifts', href: '/gifts' }, // Potential future link
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const closeSheet = () => setIsSheetOpen(false);

   const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b border-border/50 shadow-sm transition-all duration-300"> {/* Added transparency and blur */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"> {/* Increased height */}
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-primary hover:text-primary/80 transition-colors group">
          <Flame className="h-7 w-7 text-accent transition-transform duration-300 group-hover:rotate-[15deg]" /> {/* Added hover effect */}
          <span className="font-serif tracking-tight">Kraftika</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8"> {/* Increased gap */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-base font-medium transition-all duration-200 hover:text-accent relative py-2 group", // Adjusted padding and added group
                pathname === item.href ? "text-accent font-semibold" : "text-foreground/70"
              )}
            >
              {item.name}
               {/* Underline animation */}
               <span className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-out",
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
         <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                 {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
             <Button variant="ghost" size="icon" aria-label="Shopping Cart">
                <ShoppingCart className="h-5 w-5" />
                 {/* Optional: Add cart count badge */}
                 {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">3</span> */}
            </Button>
            {/* Add User/Account Icon if needed */}
         </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle & Cart */}
             <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                 {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
                <ShoppingCart className="h-5 w-5" />
            </Button>
           <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background p-0">
             <div className="flex flex-col h-full">
                 {/* Sheet Header */}
                <div className="p-6 border-b border-border/50">
                    <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary" onClick={closeSheet}>
                        <Flame className="h-6 w-6 text-accent" />
                        <span className="font-serif">Kraftika</span>
                     </Link>
                </div>
                 {/* Mobile Nav Links */}
                 <nav className="flex flex-col gap-4 p-6 flex-grow overflow-y-auto">
                    {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeSheet}
                        className={cn(
                        "text-lg font-medium transition-colors hover:text-accent py-2 px-2 rounded-md", // Larger text, padding
                        pathname === item.href ? "text-accent bg-accent/10 font-semibold" : "text-foreground/80"
                        )}
                    >
                        {item.name}
                    </Link>
                    ))}
                 </nav>
                  {/* Sheet Footer (optional) */}
                 {/* <div className="p-6 border-t border-border/50"> ... </div> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
