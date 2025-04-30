
'use client';

import { ProductCard } from './ProductCard';
import type { Product } from '@/types/product';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from 'lucide-react';

interface ProductGridProps {
  allProducts: Product[];
   searchParams?: { [key: string]: string | string[] | undefined }; // Accept searchParams directly
}

export function ProductGrid({ allProducts, searchParams }: ProductGridProps) {
  const params = useSearchParams(); // Can also get params this way if needed, but prop is more direct for Server Comp

  const filteredProducts = useMemo(() => {
     // Use the passed searchParams prop for filtering
    const currentParams = searchParams || {}; // Fallback if undefined
    const selectedScents = typeof currentParams.scent === 'string' ? [currentParams.scent] : Array.isArray(currentParams.scent) ? currentParams.scent : [];
    const selectedColors = typeof currentParams.color === 'string' ? [currentParams.color] : Array.isArray(currentParams.color) ? currentParams.color : [];
    const minPrice = currentParams.minPrice ? parseFloat(currentParams.minPrice as string) : undefined;
    const maxPrice = currentParams.maxPrice ? parseFloat(currentParams.maxPrice as string) : undefined;

    return allProducts.filter(product => {
      const scentMatch = selectedScents.length === 0 || selectedScents.includes(product.scent);
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      const minPriceMatch = minPrice === undefined || product.price >= minPrice;
      const maxPriceMatch = maxPrice === undefined || product.price <= maxPrice;
      return scentMatch && colorMatch && minPriceMatch && maxPriceMatch;
    });
  }, [allProducts, searchParams]);


  if (filteredProducts.length === 0) {
    return (
       <Alert className="mt-8 bg-secondary">
         <Info className="h-4 w-4" />
         <AlertTitle>No Candles Found</AlertTitle>
         <AlertDescription>
           No candles match your current filter selections. Try adjusting your filters or viewing the full collection.
         </AlertDescription>
       </Alert>
    )
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product, index) => (
        <ProductCard key={product.id} product={product} className={`fade-in fade-in-delay-${(index % 9) + 1}`} /> // Stagger animation
      ))}
    </div>
  );
}
