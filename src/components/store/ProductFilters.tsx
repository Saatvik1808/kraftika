
'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from '@/components/ui/button';
import { X, Filter } from 'lucide-react'; // Added Filter icon
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // Import cn

interface ProductFiltersProps {
  scents: string[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
   currentParams: { [key: string]: string | string[] | undefined }; // Receive current params
}

export function ProductFilters({ scents, colors, minPrice, maxPrice, currentParams }: ProductFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // Get current search params for building new URL

   // Initialize state from currentParams prop
   const getInitialArray = (key: string): string[] => {
     const param = currentParams[key];
     if (typeof param === 'string') return [param];
     if (Array.isArray(param)) return param;
     return [];
   };

   const getInitialPrice = (key: string, defaultValue: number): number => {
        const param = currentParams[key];
        const value = typeof param === 'string' ? parseFloat(param) : defaultValue;
        // Ensure value is within bounds, necessary if URL is manually edited
        if (key === 'minPrice') return Math.max(minPrice, Math.min(maxPrice, value));
        if (key === 'maxPrice') return Math.min(maxPrice, Math.max(minPrice, value));
        return defaultValue;
   };

  const [selectedScents, setSelectedScents] = useState<string[]>(getInitialArray('scent'));
  const [selectedColors, setSelectedColors] = useState<string[]>(getInitialArray('color'));
  const [priceRange, setPriceRange] = useState<[number, number]>([
       getInitialPrice('minPrice', minPrice),
       getInitialPrice('maxPrice', maxPrice)
   ]);

   // Debounce helper
    const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        return (...args: Parameters<F>): void => {
            if (timeoutId !== null) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => func(...args), waitFor);
        };
    };


  // Function to update URL parameters
   const updateUrlParams = useCallback(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // Create mutable copy

    // Remove old params first
    current.delete('scent');
    current.delete('color');
    current.delete('minPrice');
    current.delete('maxPrice');

    // Add selected scents
    selectedScents.forEach(scent => current.append('scent', scent));

    // Add selected colors
    selectedColors.forEach(color => current.append('color', color));

    // Add price range only if different from default min/max
    if (priceRange[0] > minPrice) {
        current.set('minPrice', priceRange[0].toString());
    }
    if (priceRange[1] < maxPrice) {
        current.set('maxPrice', priceRange[1].toString());
    }


    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false }); // Use push for history, scroll: false prevents jumping to top
   }, [selectedScents, selectedColors, priceRange, pathname, router, searchParams, minPrice, maxPrice]);

    // Debounced version for slider
   const debouncedUpdateUrlParams = useCallback(debounce(updateUrlParams, 300), [updateUrlParams]); // Slightly faster debounce


  // Effect to update URL when filters change (except slider which uses debounce)
  useEffect(() => {
      // Check if current state differs significantly from URL state before updating
      // This prevents infinite loops if multiple effects trigger updates
      const urlScents = searchParams.getAll('scent');
      const urlColors = searchParams.getAll('color');
      const urlMinPrice = searchParams.get('minPrice');
      const urlMaxPrice = searchParams.get('maxPrice');

      const scentsChanged = JSON.stringify(selectedScents.sort()) !== JSON.stringify(urlScents.sort());
      const colorsChanged = JSON.stringify(selectedColors.sort()) !== JSON.stringify(urlColors.sort());

     if(scentsChanged || colorsChanged) {
        updateUrlParams();
     }
     // Price range update is handled by the debounced handler below
  }, [selectedScents, selectedColors, searchParams, updateUrlParams]); // Removed priceRange dependency

    // Handle slider changes with debounce
   const handlePriceChange = (newRange: [number, number]) => {
      setPriceRange(newRange);
      debouncedUpdateUrlParams();
   };

  const handleCheckboxChange = (
    type: 'scent' | 'color',
    value: string,
    checked: boolean | string // Checkbox returns 'indeterminate' as string type sometimes
  ) => {
    const isChecked = checked === true;
    const setSelected = type === 'scent' ? setSelectedScents : setSelectedColors;
    setSelected(prev =>
      isChecked ? [...prev, value] : prev.filter(item => item !== value)
    );
     // The useEffect above will handle the URL update for checkboxes
  };

  const resetFilters = () => {
    setSelectedScents([]);
    setSelectedColors([]);
    setPriceRange([minPrice, maxPrice]);
    router.push(pathname, { scroll: false }); // Clear all query params
  };

   const hasActiveFilters = selectedScents.length > 0 || selectedColors.length > 0 || priceRange[0] > minPrice || priceRange[1] < maxPrice;

  return (
    // Added glassmorphism class and sticky positioning
    <Card className="sticky top-24 card-glass p-4 md:p-0"> {/* Adjust top offset as needed */}
       <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-border/50 md:px-6 md:pt-6">
         <CardTitle className="text-lg font-serif flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" /> Refine Your Search
         </CardTitle>
          {hasActiveFilters && (
             <Button variant="ghost" size="sm" onClick={resetFilters} className="text-xs text-muted-foreground hover:text-accent">
               <X className="h-3 w-3 mr-1" /> Clear All
             </Button>
          )}
       </CardHeader>
       <CardContent className="pt-4 md:px-6 md:pb-6">
        <Accordion type="multiple" defaultValue={['scent', 'color', 'price']} className="w-full">
          {/* Scent Filter */}
          <AccordionItem value="scent" className="border-b-0">
            <AccordionTrigger className="text-base font-semibold hover:no-underline py-3">Scent Profile</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2 pl-1 max-h-60 overflow-y-auto"> {/* Added max-height and scroll */}
                {scents.map(scent => (
                  <div key={scent} className="flex items-center space-x-2">
                    <Checkbox
                      id={`scent-${scent}`}
                      checked={selectedScents.includes(scent)}
                      onCheckedChange={(checked) => handleCheckboxChange('scent', scent, checked)}
                      aria-label={`Filter by scent: ${scent}`}
                    />
                    <Label htmlFor={`scent-${scent}`} className="font-normal text-sm cursor-pointer hover:text-accent transition-colors">
                      {scent}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Color Filter */}
          <AccordionItem value="color" className="border-b-0">
            <AccordionTrigger className="text-base font-semibold hover:no-underline py-3">Wax Color</AccordionTrigger>
            <AccordionContent>
               <div className="space-y-3 pt-2 pl-1 max-h-60 overflow-y-auto"> {/* Added max-height and scroll */}
                {colors.map(color => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={`color-${color}`}
                       checked={selectedColors.includes(color)}
                       onCheckedChange={(checked) => handleCheckboxChange('color', color, checked)}
                       aria-label={`Filter by color: ${color}`}
                       // Removed inline style - prefer Tailwind or CSS variables if needed
                    />
                     <Label htmlFor={`color-${color}`} className="font-normal text-sm cursor-pointer hover:text-accent transition-colors flex items-center gap-2">
                       {/* Example: Add a color swatch using background color */}
                       {/* <span className={cn("inline-block w-3 h-3 rounded-sm border", `bg-${color.toLowerCase()}-400`)}></span> */}
                       {color}
                     </Label>
                  </div>
                ))}
               </div>
            </AccordionContent>
          </AccordionItem>

          {/* Price Filter */}
          <AccordionItem value="price" className="border-b-0">
            <AccordionTrigger className="text-base font-semibold hover:no-underline py-3">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="px-1 pt-4">
                <Slider
                  aria-label="Price range slider"
                  min={minPrice}
                  max={maxPrice}
                  step={50} // Adjust step for luxury pricing
                  value={priceRange}
                   onValueChange={handlePriceChange} // Use the correct handler
                  minStepsBetweenThumbs={1}
                   // Updated slider styles for better visibility
                  className="[&>span:first-child]:h-1 [&>span:last-child]:bg-primary [&>span:last-child>span]:bg-background [&>span:last-child>span]:border-primary [&>span:last-child>span]:h-4 [&>span:last-child>span]:w-4 [&>span:last-child>span]:shadow-md"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-4">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
       </CardContent>
    </Card>
  );
}
