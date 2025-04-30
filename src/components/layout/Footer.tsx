import Link from 'next/link';
import { Flame } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Flame className="h-5 w-5 text-accent" />
          <span className="font-semibold text-foreground">Aromatic Flames</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          Handcrafted with love in India. © {new Date().getFullYear()} Aromatic Flames. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

// Placeholder pages - these should be created if needed
// You can create these files in src/app/privacy-policy/page.tsx and src/app/terms-of-service/page.tsx
// For now, they are just links.
