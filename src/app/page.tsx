
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Sparkles, Feather, Package } from 'lucide-react'; // Added relevant icons

const featuredCandles = [
  {
    id: '1',
    name: 'Amber Glow', // Updated name example
    description: 'A warm, inviting blend of amber and vanilla.',
    imageUrl: 'https://picsum.photos/seed/amber/600/400',
    price: '₹ 899', // Example price
  },
  {
    id: '2',
    name: 'Spiced Orange Zest', // Updated name example
    description: 'Uplifting orange notes with a hint of spice.',
    imageUrl: 'https://picsum.photos/seed/orange/600/400',
    price: '₹ 849', // Example price
  },
    {
    id: '3',
    name: 'Cozy Hearth', // Updated name example
    description: 'Smoky woods and warm spices for ultimate comfort.',
    imageUrl: 'https://picsum.photos/seed/cozy/600/400',
    price: '₹ 949', // Example price
  },
];

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-24"> {/* Increased spacing */}
      {/* Hero Section */}
      <section className="text-center py-20 md:py-28 relative overflow-hidden rounded-lg shadow-lg fade-in wax-background"> {/* Added potential background pattern class */}
         {/* Optional overlay for better text readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/30 to-transparent z-0"></div>
         <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-5 text-primary drop-shadow-sm">
             Ignite Your Senses with Kraftika {/* Updated Brand Name */}
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
             Experience the artisanal warmth of handcrafted scented candles, made with 100% natural soy wax and eco-friendly wicks.
            </p>
            <Link href="/store">
             <Button size="lg" className="btn-cta"> {/* Use prominent CTA class */}
                Explore Our Collection <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
            </Link>
         </div>
      </section>

       {/* Why Choose Us Section */}
      <section className="grid md:grid-cols-3 gap-10 text-center fade-in fade-in-delay-1">
        <div className="p-6 rounded-lg transition-transform transform hover:scale-105"> {/* Added hover effect */}
           <Package className="h-12 w-12 mx-auto mb-4 text-accent" /> {/* Changed icon */}
          <h3 className="text-xl font-semibold mb-2 font-serif">Natural Ingredients</h3>
          <p className="text-muted-foreground">Pure soy wax & eco-wicks for a clean, healthy burn.</p>
        </div>
         <div className="p-6 rounded-lg transition-transform transform hover:scale-105"> {/* Added hover effect */}
           <Feather className="h-12 w-12 mx-auto mb-4 text-accent" /> {/* Changed icon */}
          <h3 className="text-xl font-semibold mb-2 font-serif">Artisan Crafted</h3>
          <p className="text-muted-foreground">Hand-poured with passion and precision in India.</p>
        </div>
         <div className="p-6 rounded-lg transition-transform transform hover:scale-105"> {/* Added hover effect */}
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-accent" /> {/* Changed icon */}
          <h3 className="text-xl font-semibold mb-2 font-serif">Lasting Fragrance</h3>
          <p className="text-muted-foreground">Enjoy rich aromas for up to 40 hours per candle.</p>
        </div>
      </section>

      {/* Featured Candles Section */}
      <section className="fade-in fade-in-delay-2">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-primary">
          Featured Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
          {featuredCandles.map((candle, index) => (
            <Card key={candle.id} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"> {/* Enhanced hover effect */}
              <CardHeader className="p-0 relative">
                 <div className="aspect-[4/3] overflow-hidden"> {/* Ensure consistent aspect ratio */}
                    <Image
                      src={candle.imageUrl}
                      alt={candle.name}
                      width={600}
                      height={450} // Adjusted height for 4:3
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Image zoom on hover
                    />
                 </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-serif mb-2 group-hover:text-accent transition-colors">{candle.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 h-10 overflow-hidden">{candle.description}</CardDescription> {/* Fixed height for description */}
                <p className="text-lg font-semibold text-primary">{candle.price}</p>
              </CardContent>
               <CardFooter className="p-6 pt-0">
                 <Link href={`/store/product/${candle.id}`} className="w-full">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    View Details
                    </Button>
                 </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
           <Link href="/store">
             <Button variant="link" className="text-accent hover:text-accent/90 text-lg group">
               Discover All Candles <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
             </Button>
           </Link>
         </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-secondary to-accent/20 rounded-lg p-10 md:p-16 text-center fade-in fade-in-delay-3 glow-effect"> {/* Added gradient and glow placeholder */}
         <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-5 text-primary">Find Your Perfect Ambiance</h2>
         <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Browse our curated collection and let Kraftika candles transform your space.</p>
         <Link href="/store">
           <Button size="lg" className="btn-cta-secondary"> {/* Use prominent secondary CTA class */}
             Visit Our Store
           </Button>
         </Link>
       </section>
    </div>
  );
}
