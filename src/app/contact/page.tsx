
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-16"> {/* Increased spacing */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about Kraftika candles, feedback, or just want to say hello, feel free to reach out. {/* Updated Brand Name */}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 lg:gap-16 fade-in fade-in-delay-1"> {/* Increased gap */}
        {/* Contact Form */}
        <div className="p-8 bg-card rounded-lg shadow-lg"> {/* Enhanced shadow */}
           <h2 className="text-2xl font-serif font-semibold mb-6 text-primary">Send us a message</h2>
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="space-y-10 bg-secondary/30 p-8 rounded-lg shadow-md"> {/* Added background, padding, rounded corners, shadow */}
           <h2 className="text-2xl font-serif font-semibold mb-6 text-primary">Contact Information</h2>
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-foreground">Email</h3> {/* Adjusted text color */}
              <a href="mailto:saatvik.shrivastava08@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                saatvik.shrivastava08@gmail.com
              </a>
              <p className="text-sm text-muted-foreground/80 mt-1">We typically respond within 24-48 hours.</p> {/* Updated response time */}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-foreground">Phone</h3> {/* Adjusted text color */}
              <p className="text-muted-foreground">
                +91 987 654 3210 (Customer Support) {/* Placeholder */}
              </p>
               <p className="text-sm text-muted-foreground/80 mt-1">Mon - Fri, 10 AM - 5 PM IST</p> {/* Adjusted hours */}
            </div>
          </div>
           <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-foreground">Workshop Address</h3> {/* Adjusted text color */}
              <p className="text-muted-foreground">
                45 Artisan Alley, Craftsville, India (Not a Retail Location) {/* Placeholder */}
              </p>
              <p className="text-sm text-muted-foreground/80 mt-1">We are an online-only store. Visits by appointment only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Map Section - Placeholder */}
      {/*
      <section className="fade-in fade-in-delay-2 mt-16">
         <h2 className="text-3xl font-serif font-semibold text-center mb-8 text-primary">Our Workshop Location</h2>
         <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-border">
           <div className="bg-muted w-full h-full flex items-center justify-center text-muted-foreground">
             [Embedded Map Placeholder - e.g., Google Maps iframe]
           </div>
         </div>
      </section>
      */}
    </div>
  );
}
```