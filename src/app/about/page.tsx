
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Feather, Leaf, Heart } from 'lucide-react'; // Updated Icons

export default function AboutPage() {
  return (
    <div className="space-y-16"> {/* Increased spacing */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Our Story</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the heart and craft behind Kraftika. {/* Updated Brand Name */}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center fade-in fade-in-delay-1">
        <div className="rounded-lg overflow-hidden shadow-lg"> {/* Added container for better shadow */}
          <Image
            src="https://picsum.photos/seed/kraftika-workshop/800/600" // Placeholder image for the owner/workshop
            alt="Kraftika Workshop Placeholder" // Updated Alt Text
            width={800}
            height={600}
            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105" // Added hover effect
          />
        </div>
        <div className="space-y-6"> {/* Increased spacing */}
          <h2 className="text-3xl font-serif font-semibold text-primary">From Passion to Creation</h2>
          <p className="text-foreground/90 leading-relaxed">
            Kraftika started not just as a business, but as a personal journey into the world of scent and light. My name is [Placeholder Owner Name - e.g., Ananya Roy], and my fascination with the comforting glow of candles and the power of fragrance began in my family home in India, filled with the rich aromas of local spices and blooms.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            I dreamt of capturing these evocative scents and sharing the sense of peace and warmth they brought. Central to this dream was a commitment to purity and sustainability. That's why Kraftika is built on the foundation of 100% natural soy wax and eco-friendly cotton wicks. Each candle is meticulously hand-poured in small, dedicated batches, ensuring unparalleled quality and attention to detail. {/* Updated Brand Name */}
          </p>
           <p className="text-foreground/90 leading-relaxed">
            Our mission is simple: to craft beautiful, high-quality scented candles that fill your space with delightful fragrance, foster well-being and mindfulness, and honor our planet through conscious creation.
          </p>
        </div>
      </section>

      <section className="fade-in fade-in-delay-2">
         <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-primary">Our Values</h2> {/* Increased margin-bottom */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Increased gap */}
           <Card className="text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> {/* Enhanced hover effect */}
             <CardHeader>
                <Leaf className="h-10 w-10 mx-auto mb-3 text-accent" /> {/* Updated Icon */}
               <CardTitle className="font-serif text-xl">Natural & Sustainable</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground px-4">Using only eco-friendly soy wax and responsibly sourced materials.</p> {/* Added padding */}
             </CardContent>
           </Card>
            <Card className="text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> {/* Enhanced hover effect */}
             <CardHeader>
                <Feather className="h-10 w-10 mx-auto mb-3 text-accent" /> {/* Updated Icon */}
               <CardTitle className="font-serif text-xl">Handcrafted Quality</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground px-4">Every candle poured by hand with meticulous care and artisan skill.</p> {/* Added padding */}
             </CardContent>
           </Card>
            <Card className="text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> {/* Enhanced hover effect */}
             <CardHeader>
                <Heart className="h-10 w-10 mx-auto mb-3 text-accent" /> {/* Updated Icon */}
               <CardTitle className="font-serif text-xl">Sensory Experience</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground px-4">Creating unique scents that evoke warmth, comfort, and joy.</p> {/* Added padding */}
             </CardContent>
           </Card>
         </div>
      </section>
    </div>
  );
}
```