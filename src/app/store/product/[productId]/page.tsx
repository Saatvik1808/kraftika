
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'; // Removed CardContent as it's not directly used here for wrapping
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Droplet, Tag, Palette } from 'lucide-react';
import Link from 'next/link';
import type { Product } from '@/types/product';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Simulate fetching a single product (replace with actual API call)
async function getProductById(productId: string): Promise<Product | null> {
  // In a real app, fetch this from your database or API based on productId
   // Updated candle names and descriptions to fit Kraftika's warm/artisanal theme
  const allProducts = [
     { id: '1', name: 'Amber Glow', price: 899, scent: 'Warm Amber', color: 'Amber', imageUrl: 'https://picsum.photos/seed/amber/800/600', description: 'Envelope your senses in the rich, resinous warmth of amber, subtly sweetened with vanilla and a whisper of spice. Like golden hour captured in wax.', burnTime: 40 },
     { id: '2', name: 'Spiced Orange Zest', price: 849, scent: 'Citrus & Spice', color: 'Orange', imageUrl: 'https://picsum.photos/seed/orange/800/600', description: 'An uplifting burst of bright orange zest, perfectly balanced with the comforting warmth of cinnamon and clove. Invigorating and cozy.', burnTime: 40 },
     { id: '3', name: 'Cozy Hearth', price: 949, scent: 'Woody & Smoky', color: 'Brown', imageUrl: 'https://picsum.photos/seed/cozy/800/600', description: 'Curl up by the fire with notes of crackling cedarwood, a hint of pipe smoke, and worn leather. The essence of comfort.', burnTime: 40 },
     { id: '4', name: 'Creamy Sandalwood', price: 929, scent: 'Woody & Sweet', color: 'Cream', imageUrl: 'https://picsum.photos/seed/sandalwood-cream/800/600', description: 'Smooth, velvety sandalwood meets the subtle sweetness of cream and tonka bean. A sophisticated and calming aroma.', burnTime: 35 },
     { id: '5', name: 'Golden Hour', price: 879, scent: 'Floral & Musk', color: 'Gold', imageUrl: 'https://picsum.photos/seed/golden/800/600', description: 'Warm rays of sunshine captured with notes of neroli, jasmine, and a soft, golden musk base. Radiant and elegant.', burnTime: 40 },
     { id: '6', name: 'Terracotta Rose', price: 899, scent: 'Earthy Floral', color: 'Terracotta', imageUrl: 'https://picsum.photos/seed/terracotta/800/600', description: 'The classic beauty of rose petals grounded with the sun-baked warmth of terracotta clay and patchouli. Unique and romantic.', burnTime: 40 },
     { id: '7', name: 'Autumn Orchard', price: 879, scent: 'Fruity & Spicy', color: 'Red', imageUrl: 'https://picsum.photos/seed/orchard/800/600', description: 'The scent of a crisp autumn day: baked apples warm from the oven, dusted with cinnamon, nutmeg, and a drizzle of maple.', burnTime: 38 },
     { id: '8', name: 'Burnt Sugar Fig', price: 919, scent: 'Sweet & Earthy', color: 'Deep Purple', imageUrl: 'https://picsum.photos/seed/fig/800/600', description: 'Indulgent caramelized brown sugar meets the jammy sweetness of ripe figs, balanced with a touch of earthy vetiver.', burnTime: 40 },
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
        <div className="container mx-auto px-4 py-12 text-center"> {/* Adjusted padding */}
            <Alert variant="destructive" className="max-w-lg mx-auto"> {/* Centered Alert */}
                <AlertTitle>Product Not Found</AlertTitle>
                <AlertDescription>
                The candle you are looking for cannot be found. It might be resting or dreaming up new scents.
                </AlertDescription>
            </Alert>
             <Button asChild variant="link" className="mt-6 text-accent hover:text-accent/90">
                <Link href="/store">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection
                </Link>
             </Button>
        </div>
     )
  }

  return (
    <div className="container mx-auto px-4 py-10"> {/* Adjusted padding */}
       <Button asChild variant="outline" className="mb-8 border-muted text-muted-foreground hover:bg-secondary hover:border-secondary transition-colors">
         <Link href="/store">
           <ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection
         </Link>
       </Button>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16"> {/* Increased gap */}
        {/* Product Image */}
        <div className="fade-in">
          <Card className="overflow-hidden shadow-xl rounded-lg"> {/* Enhanced shadow and rounded */}
             <div className="aspect-square relative group"> {/* Maintain square aspect ratio, added group for zoom */}
                 <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105" // Zoom effect on hover
                    priority // Prioritize loading the main product image
                 />
             </div>
          </Card>
        </div>

        {/* Product Details */}
        <div className="space-y-6 fade-in fade-in-delay-1 flex flex-col"> {/* Added flex-col for button positioning */}
          <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary mb-5">₹ {product.price.toLocaleString()}</p>
              <Separator />
              <p className="text-foreground/90 leading-relaxed mt-5">{product.description}</p>
          </div>

           <div className="space-y-4 text-sm pt-4"> {/* Added padding-top */}
             <div className="flex items-center gap-3 text-muted-foreground"> {/* Increased gap */}
                <Droplet className="h-5 w-5 text-accent shrink-0"/> {/* Increased icon size */}
                <span>Scent Profile: <span className="font-medium text-foreground">{product.scent}</span></span>
             </div>
             <div className="flex items-center gap-3 text-muted-foreground">
                 <Palette className="h-5 w-5 text-accent shrink-0"/>
                 <span>Wax Color: <span className="font-medium text-foreground">{product.color}</span></span>
             </div>
             <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-accent shrink-0"/>
                <span>Burn Time: Approx. <span className="font-medium text-foreground">{product.burnTime} hours</span></span>
             </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Tag className="h-5 w-5 text-accent shrink-0"/>
                 <span>Materials: <span className="font-medium text-foreground">100% Natural Soy Wax, Eco Cotton Wick</span></span> {/* More specific wick */}
              </div>
           </div>

           <Separator className="mt-auto"/> {/* Pushes button to bottom */}

          {/* Add to Cart Button (Requires cart logic) */}
          <div className="pt-4"> {/* Added padding top for button */}
             <Button size="lg" className="w-full btn-cta-secondary"> {/* Used prominent secondary CTA class */}
                Add to Cart (Functionality TBD)
             </Button>

             <div className="text-xs text-muted-foreground text-center mt-4">
                Note: As each candle is lovingly handmade, slight variations in appearance may occur, adding to its unique charm.
             </div>
           </div>
        </div>
      </div>

       {/* Related Products Section (Optional) */}
       {/*
       <section className="mt-20 fade-in fade-in-delay-2">
          <h2 className="text-2xl font-serif font-semibold mb-8 text-center text-primary">You Might Also Like</h2>
          {/* Placeholder for related products component - Needs actual logic */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Example Related Product Card Structure */}
              {/* <ProductCard product={relatedProduct1} /> */}
              {/* <ProductCard product={relatedProduct2} /> */}
              {/* ... */}
          {/* </div>
       </section>
       */}
    </div>
  );
}
```