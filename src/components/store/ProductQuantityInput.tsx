"use client"; // This needs to be a client component for state

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Minus } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProductQuantityInputProps {
  initialQuantity?: number;
  maxQuantity?: number;
  onQuantityChange?: (quantity: number) => void; // Optional callback
}

export function ProductQuantityInput({
  initialQuantity = 1,
  maxQuantity = 10, // Example max
  onQuantityChange,
}: ProductQuantityInputProps) {
  const [quantity, setQuantity] = React.useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = Math.min(quantity + 1, maxQuantity);
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(quantity - 1, 1); // Minimum quantity is 1
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      const newQuantity = Math.max(1, Math.min(value, maxQuantity));
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    } else if (event.target.value === '') {
        // Allow clearing the input, maybe reset to 1 or handle as needed
        // For simplicity, let's keep it at the current state or reset to 1 if preferred
         setQuantity(1); // Or keep current state: setQuantity(quantity)
         onQuantityChange?.(1);
    }
  };

   const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
     // If input is empty on blur, reset to 1
     if (event.target.value === '') {
        setQuantity(1);
        onQuantityChange?.(1);
     }
   };


  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="quantity" className="text-sm font-medium text-muted-foreground mr-2">Quantity:</Label>
      <div className="flex items-center border border-border rounded-md overflow-hidden">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-none border-0 border-r"
          onClick={handleDecrement}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          id="quantity"
          type="number"
          min="1"
          max={maxQuantity}
          value={quantity}
          onChange={handleChange}
          onBlur={handleBlur} // Reset if empty on blur
          className="h-10 w-16 text-center border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none bg-transparent"
          aria-label="Product quantity"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-none border-0 border-l"
          onClick={handleIncrement}
          disabled={quantity >= maxQuantity}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
