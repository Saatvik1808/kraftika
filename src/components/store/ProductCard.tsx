
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group transform hover:-translate-y-1", className)}> {/* Enhanced hover */}
      <CardHeader className="p-0 relative overflow-hidden"> {/* Added relative and overflow hidden for image zoom */}
        <Link href={`/store/product/${product.id}`} className="block aspect-[4/3]"> {/* Changed aspect ratio */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill // Use fill for responsive images within aspect ratio container
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105" // Image zoom on hover
            priority={false}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/store/product/${product.id}`}>
          <CardTitle className="text-lg font-serif mb-1 hover:text-accent transition-colors line-clamp-1">{product.name}</CardTitle> {/* Added line-clamp */}
        </Link>
        {/* Ensure description has a consistent height */}
        <CardDescription className="text-muted-foreground text-sm mb-3 h-10 line-clamp-2 overflow-hidden">{product.description}</CardDescription>
        <p className="text-base font-semibold text-primary">₹ {product.price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Link href={`/store/product/${product.id}`} className="w-full">
           <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"> {/* Adjusted button style */}
             View Details
           </Button>
        </Link>
        {/* Add to Cart Button (Optional - requires cart logic) */}
        {/*
        <Button className="w-full btn-cta-secondary mt-2"> // Example Add to Cart
          Add to Cart
        </Button>
        */}
      </CardFooter>
    </Card>
  );
}
```