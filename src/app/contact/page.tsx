
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 fade-in fade-in-delay-1">
        {/* Contact Form */}
        <div className="p-8 bg-card rounded-lg shadow-md">
           <h2 className="text-2xl font-serif font-semibold mb-6 text-primary">Send us a message</h2>
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
           <h2 className="text-2xl font-serif font-semibold mb-6 text-primary">Contact Information</h2>
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a href="mailto:saatvik.shrivastava08@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                saatvik.shrivastava08@gmail.com
              </a>
              <p className="text-sm text-muted-foreground/70 mt-1">We typically respond within 24 hours.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-muted-foreground">
                +91 123 456 7890 (Placeholder)
              </p>
               <p className="text-sm text-muted-foreground/70 mt-1">Mon - Fri, 9 AM - 6 PM IST</p>
            </div>
          </div>
           <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-muted-foreground">
                123 Candle Lane, Fragrance City, India (Placeholder)
              </p>
              <p className="text-sm text-muted-foreground/70 mt-1">We are an online-only store, but this is our workshop base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Map Section - Add if physical location is relevant */}
      {/*
      <section className="fade-in fade-in-delay-2">
         <h2 className="text-3xl font-serif font-semibold text-center mb-8 text-primary">Find Us</h2>
         <div className="aspect-video rounded-lg overflow-hidden shadow-md">
           {/* Placeholder for map component or embed */}
           {/* <div className="bg-muted w-full h-full flex items-center justify-center text-muted-foreground">
             Map Placeholder
           </div>
         </div>
      </section>
      */}
    </div>
  );
}
