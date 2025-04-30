
export interface Product {
  id: string;
  name: string;
  price: number; // Use number for calculations
  scent: string; // Consider more specific scent categories or tags
  color: string; // Descriptive color name
  imageUrl: string; // Main product image URL
  // galleryImages?: string[]; // Optional: URLs for additional images/renders
  description: string; // Detailed product description
  burnTime: number; // In hours
  weight?: string; // e.g., "250g"
  dimensions?: string; // e.g., "8cm x 10cm"
  ingredients?: string[]; // e.g., ['Natural Soy Wax', 'Cotton Wick', 'Fragrance Oil Blend']
  // scentProfile?: { // More detailed scent breakdown
  //   topNotes?: string[];
  //   middleNotes?: string[];
  //   baseNotes?: string[];
  // };
  // isFeatured?: boolean;
  // isNew?: boolean;
}
