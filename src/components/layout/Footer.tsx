import Link from 'next/link';
import { Flame } from 'lucide-react'; // Keeping Flame icon

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-16"> {/* Increased margin-top */}
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-4"> {/* Added gap */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Flame className="h-5 w-5 text-accent" />
          <span className="font-semibold text-foreground">Kraftika</span> {/* Updated Brand Name */}
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0"> {/* Centered text on small screens */}
          Handcrafted with warmth in India. © {new Date().getFullYear()} Kraftika. All rights reserved. {/* Updated Brand Name */}
        </p>
        <div className="flex gap-6 text-sm"> {/* Increased gap */}
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-muted-foreground hover:text-accent transition-colors">
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
```