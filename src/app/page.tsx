
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredCandles = [
  {
    id: '1',
    name: 'Vanilla Bean Dream',
    description: 'A warm and comforting classic vanilla scent.',
    imageUrl: 'https://picsum.photos/seed/vanilla/600/400',
    price: '₹ 799',
  },
  {
    id: '2',
    name: 'Lavender Fields',
    description: 'Calming lavender to soothe your senses.',
    imageUrl: 'https://picsum.photos/seed/lavender/600/400',
    price: '₹ 849',
  },
    {
    id: '3',
    name: 'Sandalwood Serenity',
    description: 'Earthy and grounding sandalwood notes.',
    imageUrl: 'https://picsum.photos/seed/sandalwood/600/400',
    price: '₹ 899',
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30 rounded-lg shadow-sm fade-in">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-primary">
          Light Up Your Moments
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Experience the warmth of handcrafted scented candles, made with 100% natural soy wax and eco-friendly wicks.
        </p>
        <Link href="/store">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

       {/* Why Choose Us Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center fade-in fade-in-delay-1">
        <div className="p-6 rounded-lg">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5-2.986-7C10.73 2.36 17.657 6.343 17.657 18.657z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.014 15.121 3 3 0 009.879 16.121z" />
           </svg>
          <h3 className="text-xl font-semibold mb-2 font-serif">Natural Soy Wax</h3>
          <p className="text-muted-foreground">100% natural, clean-burning soy wax for a healthier home.</p>
        </div>
         <div className="p-6 rounded-lg">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
           </svg>
          <h3 className="text-xl font-semibold mb-2 font-serif">Handmade in India</h3>
          <p className="text-muted-foreground">Artisanal candles crafted with care and traditional techniques.</p>
        </div>
         <div className="p-6 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          <h3 className="text-xl font-semibold mb-2 font-serif">Long Burn Time</h3>
          <p className="text-muted-foreground">Enjoy up to 40 hours of delightful fragrance per candle.</p>
        </div>
      </section>

      {/* Featured Candles Section */}
      <section className="fade-in fade-in-delay-2">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-10 text-primary">
          Featured Scents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCandles.map((candle, index) => (
            <Card key={candle.id} className={cn("overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 fade-in", `fade-in-delay-${index + 1}`)}>
              <CardHeader className="p-0">
                <Image
                  src={candle.imageUrl}
                  alt={candle.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-serif mb-2">{candle.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{candle.description}</CardDescription>
                <p className="text-lg font-semibold text-primary">{candle.price}</p>
              </CardContent>
               <CardFooter>
                 <Link href={`/store/product/${candle.id}`} className="w-full">
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    View Details
                    </Button>
                 </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
           <Link href="/store">
             <Button variant="link" className="text-accent hover:text-accent/90 text-lg">
               Explore All Candles <ArrowRight className="ml-1 h-5 w-5" />
             </Button>
           </Link>
         </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-secondary/50 rounded-lg p-8 md:p-12 text-center fade-in fade-in-delay-3">
         <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-primary">Find Your Perfect Scent</h2>
         <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Browse our collection and bring the soothing aroma of Aromatic Flames into your home.</p>
         <Link href="/store">
           <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
             Visit Our Store
           </Button>
         </Link>
       </section>
    </div>
  );
}
