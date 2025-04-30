
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Droplet, Tag, Palette } from 'lucide-react';
import Link from 'next/link';
import type { Product } from '@/types/product';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Simulate fetching a single product (replace with actual API call)
async function getProductById(productId: string): Promise<Product | null> {
  // In a real app, fetch this from your database or API based on productId
  const allProducts = [
    { id: '1', name: 'Vanilla Bean Dream', price: 799, scent: 'Sweet', color: 'Cream', imageUrl: 'https://picsum.photos/seed/vanilla/800/600', description: 'Indulge in the classic, comforting aroma of rich vanilla bean. Perfect for creating a cozy and inviting atmosphere.', burnTime: 40 },
    { id: '2', name: 'Lavender Fields', price: 849, scent: 'Floral', color: 'Purple', imageUrl: 'https://picsum.photos/seed/lavender/800/600', description: 'Unwind with the soothing scent of fresh lavender, known for its calming and relaxing properties. Ideal for bedrooms and relaxation spaces.', burnTime: 40 },
    { id: '3', name: 'Sandalwood Serenity', price: 899, scent: 'Woody', color: 'Brown', imageUrl: 'https://picsum.photos/seed/sandalwood/800/600', description: 'Find your center with the warm, earthy notes of sandalwood. A grounding fragrance perfect for meditation or quiet evenings.', burnTime: 40 },
    { id: '4', name: 'Citrus Burst', price: 799, scent: 'Citrus', color: 'Yellow', imageUrl: 'https://picsum.photos/seed/citrus/800/600', description: 'Energize your space with a vibrant blend of zesty lemon and sweet orange. An uplifting scent to brighten any room.', burnTime: 35 },
    { id: '5', name: 'Ocean Breeze', price: 829, scent: 'Fresh', color: 'Blue', imageUrl: 'https://picsum.photos/seed/ocean/800/600', description: 'Capture the crisp, clean scent of a seaside morning. A refreshing aroma that brings a breath of fresh air indoors.', burnTime: 40 },
    { id: '6', name: 'Rose Garden', price: 849, scent: 'Floral', color: 'Pink', imageUrl: 'https://picsum.photos/seed/rose/800/600', description: 'Immerse yourself in the timeless romance of a blooming rose garden. A delicate and elegant floral fragrance.', burnTime: 40 },
    { id: '7', name: 'Spiced Apple', price: 879, scent: 'Spicy', color: 'Red', imageUrl: 'https://picsum.photos/seed/apple/800/600', description: 'Cozy up with the comforting scent of warm apple cider infused with cinnamon and spice. Perfect for autumn evenings.', burnTime: 38 },
    { id: '8', name: 'Eucalyptus Mint', price: 829, scent: 'Fresh', color: 'Green', imageUrl: 'https://picsum.photos/seed/eucalyptus/800/600', description: 'Invigorate your senses with the cool, clarifying blend of eucalyptus and mint. Ideal for focus and revitalization.', burnTime: 40 },
  ];
  const product = allProducts.find(p => p.id === productId);
  return product || null;
}

// Generate static paths for products if using SSG
// export async function generateStaticParams() {
//   const products = await getProducts(); // Fetch all product IDs
//   return products.map((product) => ({
//     productId: product.id,
//   }));
// }

export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = await getProductById(params.productId);

  if (!product) {
     return (
        <div className="container mx-auto px-4 py-8">
            <Alert variant="destructive">
                <AlertTitle>Product Not Found</AlertTitle>
                <AlertDescription>
                The candle you are looking for does not exist or may have been removed.
                </AlertDescription>
            </Alert>
             <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/90">
                <Link href="/store">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Store
                </Link>
             </Button>
        </div>
     )
  }

  return (
    <div className="container mx-auto px-4 py-8">
       <Button asChild variant="outline" className="mb-6 border-muted text-muted-foreground hover:bg-secondary">
         <Link href="/store">
           <ArrowLeft className="mr-2 h-4 w-4" /> Back to Store
         </Link>
       </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="fade-in">
          <Card className="overflow-hidden shadow-lg">
             <div className="aspect-square relative"> {/* Maintain square aspect ratio */}
                 <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority // Prioritize loading the main product image
                 />
             </div>
          </Card>
        </div>

        {/* Product Details */}
        <div className="space-y-6 fade-in fade-in-delay-1">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary">₹ {product.price.toLocaleString()}</p>
           <Separator />
          <p className="text-foreground/90 leading-relaxed">{product.description}</p>

           <div className="space-y-3 text-sm">
             <div className="flex items-center gap-2 text-muted-foreground">
                <Droplet className="h-4 w-4 text-accent"/>
                <span>Scent Profile: <span className="font-medium text-foreground">{product.scent}</span></span>
             </div>
             <div className="flex items-center gap-2 text-muted-foreground">
                 <Palette className="h-4 w-4 text-accent"/>
                 <span>Wax Color: <span className="font-medium text-foreground">{product.color}</span></span>
             </div>
             <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-accent"/>
                <span>Burn Time: Approx. <span className="font-medium text-foreground">{product.burnTime} hours</span></span>
             </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Tag className="h-4 w-4 text-accent"/>
                 <span>Materials: <span className="font-medium text-foreground">100% Natural Soy Wax, Eco Wick</span></span>
              </div>
           </div>

           <Separator />

          {/* Add to Cart Button (Requires cart logic) */}
          <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Add to Cart (Functionality TBD)
          </Button>

          <div className="text-xs text-muted-foreground text-center">
            Note: As each candle is handmade, slight variations in appearance may occur.
          </div>
        </div>
      </div>

       {/* Related Products Section (Optional) */}
       {/*
       <section className="mt-16 fade-in fade-in-delay-2">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-primary">You Might Also Like</h2>
          {/* Placeholder for related products component */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Map through related products */}
          {/* </div>
       </section>
       */}
    </div>
  );
}
