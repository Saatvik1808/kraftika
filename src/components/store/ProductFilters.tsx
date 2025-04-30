
'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
   const debouncedUpdateUrlParams = useCallback(debounce(updateUrlParams, 500), [updateUrlParams]);


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
  }, [selectedScents, selectedColors, searchParams, updateUrlParams]);

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
     // Immediate update for checkboxes
     // The useEffect above will handle the debounced URL update
  };

  const resetFilters = () => {
    setSelectedScents([]);
    setSelectedColors([]);
    setPriceRange([minPrice, maxPrice]);
    router.push(pathname, { scroll: false }); // Clear all query params
  };

   const hasActiveFilters = selectedScents.length > 0 || selectedColors.length > 0 || priceRange[0] > minPrice || priceRange[1] < maxPrice;

  return (
    <Card className="sticky top-20"> {/* Make filters sticky */}
       <CardHeader className="flex flex-row items-center justify-between pb-2">
         <CardTitle className="text-lg font-serif">Filters</CardTitle>
          {hasActiveFilters && (
             <Button variant="ghost" size="sm" onClick={resetFilters} className="text-xs text-muted-foreground hover:text-accent">
               <X className="h-3 w-3 mr-1" /> Clear All
             </Button>
          )}
       </CardHeader>
       <CardContent>
        <Accordion type="multiple" defaultValue={['scent', 'color', 'price']} className="w-full">
          {/* Scent Filter */}
          <AccordionItem value="scent">
            <AccordionTrigger className="text-base font-semibold">Scent</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pl-1">
                {scents.map(scent => (
                  <div key={scent} className="flex items-center space-x-2">
                    <Checkbox
                      id={`scent-${scent}`}
                      checked={selectedScents.includes(scent)}
                      onCheckedChange={(checked) => handleCheckboxChange('scent', scent, checked)}
                    />
                    <Label htmlFor={`scent-${scent}`} className="font-normal text-sm cursor-pointer">
                      {scent}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Color Filter */}
          <AccordionItem value="color">
            <AccordionTrigger className="text-base font-semibold">Color</AccordionTrigger>
            <AccordionContent>
               <div className="space-y-2 pl-1">
                {colors.map(color => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={`color-${color}`}
                       checked={selectedColors.includes(color)}
                       onCheckedChange={(checked) => handleCheckboxChange('color', color, checked)}
                       style={{ backgroundColor: selectedColors.includes(color) ? `var(--color-${color.toLowerCase()})` : undefined }} // Visual color cue (optional)
                    />
                     <Label htmlFor={`color-${color}`} className="font-normal text-sm cursor-pointer flex items-center gap-2">
                       {/* Optional: Color swatch */}
                       {/* <span className="inline-block w-3 h-3 rounded-sm border" style={{ backgroundColor: `var(--color-${color.toLowerCase()})` }}></span> */}
                       {color}
                     </Label>
                  </div>
                ))}
               </div>
            </AccordionContent>
          </AccordionItem>

          {/* Price Filter */}
          <AccordionItem value="price">
            <AccordionTrigger className="text-base font-semibold">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="px-1 pt-2">
                <Slider
                  min={minPrice}
                  max={maxPrice}
                  step={10} // Adjust step as needed
                  value={priceRange}
                   onValueChange={handlePriceChange} // Use the debounced handler
                  minStepsBetweenThumbs={1} // Optional: prevent thumbs from overlapping completely
                   className="[&>span:first-child]:h-1 [&>span:last-child]:bg-accent [&>span:last-child>span]:bg-background [&>span:last-child>span]:border-accent [&>span:last-child>span]:h-4 [&>span:last-child>span]:w-4" // Style the slider track and thumbs
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-3">
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

// Helper function to create CSS variables for colors dynamically if needed, or ensure they exist in globals.css
// Example: Define --color-cream, --color-purple etc. in globals.css or generate them dynamically.
