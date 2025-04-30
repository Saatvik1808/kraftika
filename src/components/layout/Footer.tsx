import Link from 'next/link';
import { Flame, Instagram, Facebook, Twitter } from 'lucide-react'; // Added social icons

export function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 border-t border-border/50 mt-24 md:mt-32"> {/* Increased margin-top */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary group">
              <Flame className="h-6 w-6 text-accent transition-transform duration-300 group-hover:rotate-[15deg]" />
              <span className="font-serif">Kraftika</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Artisanal scented candles, handcrafted with warmth and passion in India. Elevate your moments with Kraftika.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-3 font-serif">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/store" className="text-muted-foreground hover:text-accent transition-colors">Shop All</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-accent transition-colors">FAQ</Link></li> {/* Added FAQ */}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-3 font-serif">Connect</h4>
             <div className="flex gap-4 mb-4">
                {/* Replace # with actual social links */}
                <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors"><Instagram size={20}/></Link>
                <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-accent transition-colors"><Facebook size={20}/></Link>
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-accent transition-colors"><Twitter size={20}/></Link>
             </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link></li>
               <li><Link href="/shipping-returns" className="text-muted-foreground hover:text-accent transition-colors">Shipping & Returns</Link></li> {/* Added Shipping */}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kraftika. All rights reserved. Designed with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
}

// TODO: Create pages for /faq and /shipping-returns if they don't exist.
