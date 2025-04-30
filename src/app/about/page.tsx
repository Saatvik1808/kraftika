
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Our Story</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the passion and craft behind Aromatic Flames.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center fade-in fade-in-delay-1">
        <div>
          <Image
            src="https://picsum.photos/seed/owner/800/600" // Placeholder image for the owner/workshop
            alt="Aromatic Flames Owner Placeholder"
            width={800}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-serif font-semibold text-primary">From Passion to Flame</h2>
          <p className="text-foreground/90 leading-relaxed">
            Aromatic Flames started not just as a business, but as a personal journey. My name is [Placeholder Owner Name - e.g., Priya Sharma], and my love for scents and the calming ambiance of candlelight began in my childhood home in India. The rich aromas of spices, flowers, and incense were a constant backdrop to life.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            I wanted to capture these evocative scents and share the tranquility they brought me. However, I was conscious of creating something pure and sustainable. That's why Aromatic Flames is built on the foundation of 100% natural soy wax and eco-friendly cotton wicks. Each candle is meticulously hand-poured in small batches, ensuring quality and attention to detail.
          </p>
           <p className="text-foreground/90 leading-relaxed">
            Our mission is simple: to create beautiful, high-quality scented candles that not only fill your space with delightful fragrance but also contribute to a sense of well-being and mindfulness, all while being kind to our planet.
          </p>
        </div>
      </section>

      <section className="fade-in fade-in-delay-2">
         <h2 className="text-3xl font-serif font-semibold text-center mb-8 text-primary">Our Values</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
             <CardHeader>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5-2.986-7C10.73 2.36 17.657 6.343 17.657 18.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.014 15.121 3 3 0 009.879 16.121z" />
                </svg>
               <CardTitle className="font-serif text-xl">Natural & Sustainable</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">Using only eco-friendly soy wax and sustainable materials.</p>
             </CardContent>
           </Card>
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
             <CardHeader>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                 </svg>
               <CardTitle className="font-serif text-xl">Handcrafted Quality</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">Every candle poured by hand with meticulous care and attention.</p>
             </CardContent>
           </Card>
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
             <CardHeader>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
               <CardTitle className="font-serif text-xl">Sensory Experience</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">Creating unique scents that evoke memories and soothe the soul.</p>
             </CardContent>
           </Card>
         </div>
      </section>
    </div>
  );
}
