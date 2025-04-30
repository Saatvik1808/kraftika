
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Feather, Leaf, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-28"> {/* Increased spacing */}
      <section className="text-center pt-12 pb-8 fade-in"> {/* Adjusted padding */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-5 text-primary drop-shadow-md">The Soul of Kraftika</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover the passion, process, and purpose woven into every handcrafted candle.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center fade-in fade-in-delay-1">
        {/* Image with subtle interaction */}
        <div className="rounded-lg overflow-hidden shadow-xl interactive-card group"> {/* Added interactive card styles */}
          <Image
            src="https://picsum.photos/seed/kraftika-artisan/800/600" // Placeholder image for artisan/workshop
            alt="Kraftika Artisan Workshop"
            width={800}
            height={600}
            className="object-cover w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105" // Smoother scale effect
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary">From Spark to Flame</h2>
          <p className="text-foreground/90 leading-relaxed">
            Kraftika wasn't born in a boardroom, but from a quiet love for the simple magic of candlelight. My name is [Placeholder Owner Name - e.g., Ananya Sharma], and my journey began amidst the rich, evocative scents of my childhood home in India – spices simmering, monsoon rains on earth, temple blossoms in the air.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            I yearned to capture these fleeting moments, these sensory memories, and translate them into tangible warmth and light. But it had to be done right – with respect for nature and a dedication to craft. That's why Kraftika candles are meticulously hand-poured using only 100% natural soy wax, premium fragrance oils, and clean-burning eco-wicks. Each candle is a small batch creation, infused with intention and care.
          </p>
           <p className="text-foreground/90 leading-relaxed">
            Our mission extends beyond beautiful fragrance. We aim to create moments of pause, of comfort, of connection – illuminating your space while treading lightly on our planet.
          </p>
        </div>
      </section>

      <section className="fade-in fade-in-delay-2 pt-12">
         <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-16 text-primary">Our Core Principles</h2> {/* Increased margin-bottom */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
           {/* Glassmorphism Value Cards */}
           <Card className="text-center card-glass p-6 interactive-card"> {/* Added glass + interactive */}
             <CardHeader className="p-0 mb-4">
                <Leaf className="h-12 w-12 mx-auto text-accent drop-shadow-md" />
             </CardHeader>
             <CardContent className="p-0">
                <CardTitle className="font-serif text-xl mb-2">Natural & Sustainable</CardTitle>
                <p className="text-muted-foreground text-sm px-2">Ethically sourced soy wax, eco-friendly wicks, and mindful packaging.</p>
             </CardContent>
           </Card>
            <Card className="text-center card-glass p-6 interactive-card"> {/* Added glass + interactive */}
             <CardHeader className="p-0 mb-4">
                <Feather className="h-12 w-12 mx-auto text-accent drop-shadow-md" />
             </CardHeader>
             <CardContent className="p-0">
               <CardTitle className="font-serif text-xl mb-2">Handcrafted Quality</CardTitle>
               <p className="text-muted-foreground text-sm px-2">Poured by hand in small batches, ensuring meticulous attention to detail.</p>
             </CardContent>
           </Card>
            <Card className="text-center card-glass p-6 interactive-card"> {/* Added glass + interactive */}
             <CardHeader className="p-0 mb-4">
                <Heart className="h-12 w-12 mx-auto text-accent drop-shadow-md" />
             </CardHeader>
             <CardContent className="p-0">
               <CardTitle className="font-serif text-xl mb-2">Sensory Artistry</CardTitle>
               <p className="text-muted-foreground text-sm px-2">Unique, complex fragrance blends designed to evoke emotion and memory.</p>
             </CardContent>
           </Card>
         </div>
      </section>

       {/* TODO: Add Crafting Story Section */}
       {/* <section className="fade-in fade-in-delay-3 pt-20">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-16 text-primary">The Art of Creation</h2>
          [ Visually rich timeline with scroll-based animations showing the candle making process ]
       </section> */}
    </div>
  );
}
