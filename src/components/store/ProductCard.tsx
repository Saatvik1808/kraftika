
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Product } from '@/types/product'; // Assuming types defined

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full", className)}>
      <CardHeader className="p-0">
        <Link href={`/store/product/${product.id}`} className="block aspect-[3/2] relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill // Use fill for responsive images within aspect ratio container
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes, adjust as needed
            className="object-cover"
            priority={false} // Set to true for above-the-fold images if needed
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/store/product/${product.id}`}>
          <CardTitle className="text-lg font-serif mb-1 hover:text-accent transition-colors">{product.name}</CardTitle>
        </Link>
        <CardDescription className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</CardDescription>
        <p className="text-base font-semibold text-primary">₹ {product.price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Link href={`/store/product/${product.id}`} className="w-full">
           <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
             View Details
           </Button>
        </Link>
        {/* Add to Cart Button (Optional - requires cart logic) */}
        {/*
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Add to Cart
        </Button>
        */}
      </CardFooter>
    </Card>
  );
}
