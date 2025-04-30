
export interface Product {
  id: string;
  name: string;
  price: number;
  scent: string; // e.g., 'Sweet', 'Floral', 'Woody', 'Fresh', 'Spicy', 'Citrus'
  color: string; // e.g., 'Cream', 'Purple', 'Brown', 'Yellow', 'Blue', 'Pink', 'Red', 'Green'
  imageUrl: string;
  description: string;
  burnTime: number; // e.g., 40 hours
  // Add other relevant fields like weight, dimensions, ingredients, etc.
  // weight?: string;
  // dimensions?: string;
  // ingredients?: string[];
}
