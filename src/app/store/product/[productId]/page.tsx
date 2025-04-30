
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Droplet, Tag, Palette, ShoppingCart, Plus, Minus } from 'lucide-react'; // Add icons
import Link from 'next/link';
import type { Product } from '@/types/product';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils'; // Import cn
// TODO: Import state management for cart if needed (e.g., Zustand, Context)
// import { useCartStore } from '@/store/cart';
import { ProductQuantityInput } from '@/components/store/ProductQuantityInput'; // Import Quantity Component

// Simulate fetching a single product (replace with actual API call)
async function getProductById(productId: string): Promise<Product | null> {
  // In a real app, fetch this from your database or API based on productId
   // Using updated example data
  const allProducts: Product[] = [
    { id: '1', name: 'Molten Amber', price: 1299, scent: 'Resinous Amber', color: 'Deep Amber', imageUrl: 'https://picsum.photos/seed/molten-amber/800/1000', description: 'Envelope your senses in the rich, resinous warmth of amber, subtly sweetened with vanilla and a whisper of spice. Like golden hour captured in wax, radiating comfort and ancient allure.', burnTime: 45 },
    { id: '2', name: 'Velvet Orange Blossom', price: 1199, scent: 'Floral Spice', color: 'Burnt Orange', imageUrl: 'https://picsum.photos/seed/velvet-orange/800/1000', description: 'An uplifting burst of bright neroli and orange zest, perfectly balanced with the comforting warmth of cinnamon and clove. Invigorating yet cozy, like a sunlit Mediterranean grove.', burnTime: 45 },
    { id: '3', name: 'Hearthside Embers', price: 1349, scent: 'Smoky Vanilla', color: 'Warm Grey', imageUrl: 'https://picsum.photos/seed/hearthside/800/1000', description: 'Curl up by the fire with notes of crackling birchwood, a hint of pipe smoke, smooth vanilla bean, and worn leather. The very essence of sophisticated comfort.', burnTime: 50 },
    { id: '4', name: 'Sandalwood Cashmere', price: 1399, scent: 'Woody Musk', color: 'Cream', imageUrl: 'https://picsum.photos/seed/sandalwood-cashmere/800/1000', description: 'Smooth, velvety sandalwood meets the subtle sweetness of tonka bean wrapped in a soft cashmere musk. A calming, sophisticated, and utterly luxurious aroma.', burnTime: 48 },
    { id: '5', name: 'Gilded Rosewood', price: 1249, scent: 'Floral Woody', color: 'Rose Gold', imageUrl: 'https://picsum.photos/seed/gilded-rosewood/800/1000', description: 'Warm rays of sunshine captured with notes of elegant rosewood, bright citrus accord, and a soft, golden musk base. Radiant, refined, and effortlessly chic.', burnTime: 45 },
    { id: '6', name: 'Terracotta Sun', price: 1199, scent: 'Earthy Citrus', color: 'Terracotta', imageUrl: 'https://picsum.photos/seed/terracotta-sun/800/1000', description: 'The classic beauty of rose petals grounded with the sun-baked warmth of terracotta clay, brightened by bergamot and earthy vetiver. Unique and romantic.', burnTime: 40 },
    { id: '7', name: 'Spiced Pear Crumble', price: 1279, scent: 'Fruity Gourmand', color: 'Golden Brown', imageUrl: 'https://picsum.photos/seed/pear-crumble/800/1000', description: 'The scent of autumn comfort: warm baked pear, caramelized brown sugar, dusted with cinnamon, nutmeg, and a hint of clove. Deliciously inviting.', burnTime: 42 },
    { id: '8', name: 'Midnight Fig', price: 1329, scent: 'Sweet Earthy', color: 'Deep Plum', imageUrl: 'https://picsum.photos/seed/midnight-fig/800/1000', description: 'Indulgent jammy fig nectar meets dark, mysterious oud and earthy patchouli, balanced with a touch of warm amber. Intoxicating and sophisticated.', burnTime: 50 },
   ];
  const product = allProducts.find(p => p.id === productId);
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate slight delay
  return product || null;
}


export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = await getProductById(params.productId);
  // const addToCart = useCartStore((state) => state.addToCart); // Example cart hook
  // const [quantity, setQuantity] = React.useState(1); // State for quantity (move to client component if needed)

  if (!product) {
     return (
        <div className="container mx-auto px-4 py-16 text-center">
            <Alert variant="destructive" className="max-w-lg mx-auto card-glass p-6"> {/* Centered, Glassmorphism */}
                <AlertTitle className="text-xl font-serif">Flame Not Found</AlertTitle>
                <AlertDescription className="mt-2">
                The candle you seek seems to have flickered out of existence. Perhaps it's finding its way back?
                </AlertDescription>
            </Alert>
             <Button asChild variant="link" className="mt-8 text-accent hover:text-accent/90 text-lg group">
                <Link href="/store">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" /> Back to the Collections
                </Link>
             </Button>
        </div>
     )
  }

  // const handleAddToCart = () => {
  //   // TODO: Implement actual add to cart logic
  //   // addToCart(product, quantity);
  //   console.log(`Adding ${quantity} of ${product.name} to cart.`);
  //   // Show toast notification
  // };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
       {/* Back Button - Positioned better */}
        <div className="mb-8 md:mb-12">
           <Button asChild variant="outline" className="border-border/50 text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors group">
             <Link href="/store">
               <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" /> Back to Collection
             </Link>
           </Button>
        </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
        {/* Product Image & 3D View Placeholder */}
        <div className="fade-in space-y-6">
          {/* Main Image with 3D-like shadow */}
           <div className="aspect-[4/5] relative group overflow-hidden rounded-xl shadow-2xl interactive-card bg-gradient-to-br from-secondary/20 to-transparent"> {/* Taller aspect ratio */}
               <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105" // Zoom effect
                  priority
               />
               {/* Placeholder text for 3D view */}
               <div className="absolute bottom-4 right-4 bg-black/50 text-white/80 text-xs px-2 py-1 rounded">
                    [3D View Placeholder]
               </div>
           </div>
           {/* Optional Thumbnail Gallery for different angles/views */}
           {/* <div className="grid grid-cols-4 gap-2"> ... Thumbnails ... </div> */}
        </div>

        {/* Product Details */}
        <div className="space-y-8 fade-in fade-in-delay-1 flex flex-col"> {/* Increased spacing */}
          <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">{product.name}</h1>
              <p className="text-3xl font-semibold text-primary mb-6">₹ {product.price.toLocaleString()}</p>
              <Separator className="bg-border/50" />
              <p className="text-foreground/90 leading-relaxed mt-6 text-base">{product.description}</p>
          </div>

           {/* Specifications Section with Glassmorphism */}
           <div className="space-y-5 text-sm p-6 rounded-lg card-glass">
             <h3 className="text-lg font-semibold font-serif mb-4 text-primary">Specifications</h3>
             <div className="flex items-center gap-4 text-muted-foreground">
                <Droplet className="h-5 w-5 text-accent shrink-0"/>
                <span>Scent Profile: <span className="font-medium text-foreground">{product.scent}</span></span>
             </div>
             <div className="flex items-center gap-4 text-muted-foreground">
                 <Palette className="h-5 w-5 text-accent shrink-0"/>
                 <span>Wax Color: <span className="font-medium text-foreground">{product.color}</span></span>
             </div>
             <div className="flex items-center gap-4 text-muted-foreground">
                <Clock className="h-5 w-5 text-accent shrink-0"/>
                <span>Burn Time: Approx. <span className="font-medium text-foreground">{product.burnTime} hours</span></span>
             </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Tag className="h-5 w-5 text-accent shrink-0"/>
                 <span>Materials: <span className="font-medium text-foreground">100% Natural Soy Wax, Eco Cotton Wick, Premium Fragrance Oils</span></span>
              </div>
           </div>

           {/* Add to Cart Section */}
          <div className="mt-auto pt-6 space-y-4"> {/* Pushes button towards bottom */}
             <Separator className="bg-border/50 mb-6" />

             {/* Quantity Selector - TODO: Make this a Client Component if state needed */}
             <ProductQuantityInput />

             {/* Add to Cart Button */}
             <Button size="lg" className="w-full btn-cta-secondary py-4 text-lg" /* onClick={handleAddToCart} */>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
             </Button>

             <div className="text-xs text-muted-foreground text-center mt-4">
                Note: As each Kraftika candle is meticulously handcrafted, slight variations enhance its unique character and beauty.
             </div>
           </div>
        </div>
      </div>

       {/* TODO: Implement Related Products Section with Carousel */}
       {/* <section className="mt-24 md:mt-32 fade-in fade-in-delay-2">
          <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-primary">You Might Also Adore</h2>
          [ Interactive Carousel of Product Cards ]
       </section> */}

        {/* TODO: Implement Live Preview Section */}
        {/* <section className="mt-24 md:mt-32 fade-in fade-in-delay-3">
          <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-primary">Visualize in Your Space</h2>
           [ Animated Room Previews ]
         </section> */}
    </div>
  );
}
