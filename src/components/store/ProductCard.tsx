
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Product } from '@/types/product';
import { ArrowRight } from 'lucide-react'; // Import icon
import * as React from 'react'; // Import React

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn(
        "overflow-hidden transition-all duration-300 ease-out flex flex-col h-full group card-glass", // Base glassmorphism and group
        "hover:shadow-2xl hover:border-white/20", // Enhanced hover shadow
        className // Allow external classes
    )}>
      <CardHeader className="p-0 relative overflow-hidden">
        <Link href={`/store/product/${product.id}`} className="block aspect-[3/4] relative group/image"> {/* Taller aspect ratio, added group/image */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw" // Adjusted sizes
            className="object-cover transition-transform duration-500 ease-out group-hover/image:scale-105" // Smoother, slower scale
            priority={false} // Consider setting priority true for above-the-fold cards if needed
          />
           {/* Optional: Subtle gradient overlay on image hover */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-400"></div>
        </Link>
      </CardHeader>
      <CardContent className="p-5 md:p-6 flex-grow flex flex-col"> {/* Increased padding */}
        <Link href={`/store/product/${product.id}`} className="block mb-auto">
          <CardTitle className="text-xl lg:text-2xl font-serif mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight">{product.name}</CardTitle>
           {/* Ensure description has a consistent height */}
          <CardDescription className="text-muted-foreground text-sm mb-4 h-12 line-clamp-2 overflow-hidden leading-relaxed">{product.description}</CardDescription>
        </Link>
         <p className="text-lg font-semibold text-primary mt-2">₹ {product.price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="p-5 md:p-6 pt-0 mt-auto"> {/* Consistent padding */}
         <Button asChild variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/button">
          {/* Let Button pass props to Link, and Link render children directly */}
          <Link href={`/store/product/${product.id}`} className="flex items-center justify-center w-full">
            View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
