
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Sparkles, Feather, Package, Star } from 'lucide-react'; // Added Star icon
import { ProductCard } from '@/components/store/ProductCard'; // Use ProductCard component
import type { Product } from '@/types/product'; // Import Product type

// Example featured products (replace with actual data)
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Molten Amber', // Renamed for luxury feel
    description: 'A deep, resinous warmth with whispers of ancient forests.',
    imageUrl: 'https://picsum.photos/seed/molten-amber/600/800', // Taller image
    price: 1299, // Adjusted price for luxury
    scent: 'Resinous Amber',
    color: 'Deep Amber',
    burnTime: 45,
  },
  {
    id: '2',
    name: 'Velvet Orange Blossom', // Renamed
    description: 'Sweet neroli enveloped in smooth, velvety spice notes.',
    imageUrl: 'https://picsum.photos/seed/velvet-orange/600/800', // Taller image
    price: 1199, // Adjusted price
    scent: 'Floral Spice',
    color: 'Burnt Orange',
    burnTime: 45,
  },
    {
    id: '3',
    name: 'Hearthside Embers', // Renamed
    description: 'Smoky birchwood crackling alongside warm vanilla bean.',
    imageUrl: 'https://picsum.photos/seed/hearthside/600/800', // Taller image
    price: 1349, // Adjusted price
    scent: 'Smoky Vanilla',
    color: 'Warm Grey',
    burnTime: 50,
  },
];

// Example reviews
const reviews = [
  { id: 'r1', name: 'Priya K.', rating: 5, comment: "Absolutely divine! The Molten Amber candle fills my home with such a luxurious warmth." },
  { id: 'r2', name: 'Rohan S.', rating: 4, comment: "Beautifully crafted and the scent lasts for ages. Hearthside Embers is my favorite." },
  { id: 'r3', name: 'Aisha M.', rating: 5, comment: "The packaging itself felt like a gift. Kraftika candles are truly special." },
]

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32"> {/* Increased spacing significantly */}

      {/* Hero Section - Conceptual Parallax Example */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden parallax-container">
         {/* Background Layer (Moves slower) */}
         <div
           className="absolute inset-0 z-0 parallax-layer parallax-layer-back bg-gradient-to-br from-amber-100 via-orange-200 to-amber-200 dark:from-amber-900 dark:via-orange-950 dark:to-amber-950 opacity-50 blur-xl"
           // style={{ backgroundImage: "url('/path/to/subtle-texture.png')" }} // Optional subtle texture
           ></div>
           {/* Optional: Floating particles effect (requires JS/CSS animation library) */}
           {/* <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"> [Floating Particles Here] </div> */}

         {/* Content Layer (Base) */}
         <div className="relative z-10 p-4 parallax-content text-foreground">
             {/* Placeholder for 3D Candle Visual */}
             <div className="mb-8 mx-auto w-48 h-64 md:w-64 md:h-80 bg-gradient-to-br from-amber-300 to-orange-500 rounded-lg shadow-2xl flex items-center justify-center flicker-effect glow-effect">
                <span className="text-background/70 text-sm">[3D Candle Render/Video]</span>
                {/* Or use an Image component: */}
                {/* <Image src="/path/to/hero-candle.png" alt="Kraftika Hero Candle" width={256} height={320} priority className="object-contain"/> */}
             </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 text-primary drop-shadow-lg fade-in">
             Ignite Your Atmosphere.
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed fade-in fade-in-delay-1">
             Discover Kraftika: Where artistry meets aroma in luxury handcrafted candles.
            </p>
            <Link href="/store" className="fade-in fade-in-delay-2">
             <Button size="lg" className="btn-cta"> {/* Use prominent CTA class */}
                Explore the Collections <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
            </Link>
         </div>
      </section>

       {/* Why Choose Kraftika Section - Glassmorphism Cards */}
      <section className="grid md:grid-cols-3 gap-8 md:gap-12 text-center fade-in fade-in-delay-1">
        <div className="p-8 rounded-xl card-glass interactive-card"> {/* Glassmorphism + interactive */}
           <Package className="h-12 w-12 mx-auto mb-5 text-accent drop-shadow-md" />
          <h3 className="text-xl font-semibold mb-3 font-serif text-primary">Exquisite Ingredients</h3>
          <p className="text-muted-foreground">Pure, natural soy wax & premium eco-wicks for a flawless burn.</p>
        </div>
         <div className="p-8 rounded-xl card-glass interactive-card"> {/* Glassmorphism + interactive */}
           <Feather className="h-12 w-12 mx-auto mb-5 text-accent drop-shadow-md" />
          <h3 className="text-xl font-semibold mb-3 font-serif text-primary">Artisan Crafted</h3>
          <p className="text-muted-foreground">Meticulously hand-poured with passion in India.</p>
        </div>
         <div className="p-8 rounded-xl card-glass interactive-card"> {/* Glassmorphism + interactive */}
            <Sparkles className="h-12 w-12 mx-auto mb-5 text-accent drop-shadow-md" />
          <h3 className="text-xl font-semibold mb-3 font-serif text-primary">Enchanting Fragrance</h3>
          <p className="text-muted-foreground">Complex, long-lasting scents that transform your space.</p>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="fade-in fade-in-delay-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center mb-16 text-primary">
          Signature Collection
        </h2>
        {/* TODO: Replace with interactive carousel component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {featuredProducts.map((product, index) => (
            <ProductCard
               key={product.id}
               product={product}
               className={`fade-in fade-in-delay-${(index % 3) + 3} interactive-card`} // Apply animation + interactive class
             />
          ))}
        </div>
        <div className="text-center mt-20">
           <Link href="/store">
             <Button variant="link" className="text-accent hover:text-accent/90 text-xl group font-medium">
               View All Creations <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
             </Button>
           </Link>
         </div>
      </section>

      {/* Customer Reviews Section - Placeholder for Interactive Carousel */}
       <section className="fade-in fade-in-delay-3 bg-secondary/30 dark:bg-secondary/10 py-16 md:py-20 rounded-xl overflow-hidden">
         <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-primary">
           Kind Words From Our Collectors
         </h2>
         {/* TODO: Implement an interactive carousel (e.g., using Swiper.js or similar) */}
         <div className="flex space-x-8 px-8 overflow-x-auto pb-4 snap-x snap-mandatory">
            {reviews.map((review, index) => (
             <div key={review.id} className={`snap-center shrink-0 w-80 md:w-96 p-6 rounded-lg card-glass fade-in fade-in-delay-${(index % 3) + 4}`}>
                <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("h-5 w-5", i < review.rating ? "text-accent fill-accent" : "text-muted-foreground/50")}/>
                    ))}
                </div>
                 <p className="text-foreground/90 italic mb-4">"{review.comment}"</p>
                 <p className="text-sm font-semibold text-primary">- {review.name}</p>
             </div>
           ))}
         </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">[Interactive Carousel Placeholder]</p>
       </section>


      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-300 dark:from-amber-900 dark:via-orange-950 dark:to-amber-950 rounded-xl p-12 md:p-20 text-center fade-in fade-in-delay-4 relative overflow-hidden">
         {/* Subtle glow effect */}
          <div className="absolute -inset-10 bg-accent/10 blur-3xl rounded-full animate-pulse duration-[5s]"></div>
          <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-primary">Craft Your Perfect Moment</h2>
             <p className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto">Find the Kraftika candle that speaks to your soul and elevates your everyday.</p>
             <Link href="/store">
               <Button size="lg" className="btn-cta-secondary"> {/* Use prominent secondary CTA class */}
                 Shop Now & Indulge
               </Button>
             </Link>
          </div>
       </section>

        {/* TODO: Implement other sections */}
        {/* - Scent Customizer */}
        {/* - Gift Builder */}
        {/* - Crafting Story Section */}
        {/* - Subscription Section */}
    </div>
  );
}
