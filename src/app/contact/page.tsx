
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-20 md:space-y-28"> {/* Increased spacing */}
      <section className="text-center pt-12 pb-8 fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-5 text-primary drop-shadow-md">Connect With Kraftika</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We're here to help. Whether you have questions, feedback, or just want to share your Kraftika moment, reach out!
        </p>
      </section>

      <section className="grid md:grid-cols-5 gap-12 lg:gap-16 fade-in fade-in-delay-1 items-start">
        {/* Contact Form - Takes more space */}
        <div className="md:col-span-3 p-8 md:p-10 rounded-xl shadow-xl card-glass"> {/* Span 3 cols, added glass */}
           <h2 className="text-2xl lg:text-3xl font-serif font-semibold mb-8 text-primary">Send Us a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Information - Takes less space */}
        <div className="md:col-span-2 space-y-10 bg-secondary/40 dark:bg-secondary/20 p-8 rounded-xl shadow-lg card-glass"> {/* Span 2 cols, added glass */}
           <h2 className="text-2xl font-serif font-semibold mb-8 text-primary">Contact Details</h2>
          <div className="flex items-start gap-5"> {/* Increased gap */}
            <Mail className="h-7 w-7 text-accent mt-1 shrink-0" /> {/* Larger icon */}
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">Email Us</h3>
              <a href="mailto:saatvik.shrivastava08@gmail.com" className="text-muted-foreground hover:text-accent transition-colors block break-all">
                saatvik.shrivastava08@gmail.com
              </a>
              <p className="text-sm text-muted-foreground/80 mt-1.5">Response within 1-2 business days.</p>
            </div>
          </div>
           <hr className="border-border/50" /> {/* Separator */}
          <div className="flex items-start gap-5">
            <Phone className="h-7 w-7 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">Call Us</h3>
              <p className="text-muted-foreground">
                +91 987 654 3210 {/* Placeholder */}
              </p>
               <p className="text-sm text-muted-foreground/80 mt-1.5">Mon - Fri, 10 AM - 6 PM IST</p> {/* Adjusted hours */}
            </div>
          </div>
            <hr className="border-border/50" /> {/* Separator */}
           <div className="flex items-start gap-5">
            <MapPin className="h-7 w-7 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">Studio Address</h3>
              <p className="text-muted-foreground">
                Artisan Lane, Craftsville, India {/* Placeholder */}
              </p>
              <p className="text-sm text-muted-foreground/80 mt-1.5">Note: This is our creative space, not a retail store. Visits by appointment only.</p>
            </div>
          </div>
        </div>
      </section>

       {/* TODO: Add FAQ Link Section or Map if needed */}
        {/* <section className="text-center fade-in fade-in-delay-2 mt-16">
           <p className="text-muted-foreground mb-4">Have common questions? Check out our FAQ page!</p>
           <Button asChild variant="outline">
             <Link href="/faq">Visit FAQ</Link>
           </Button>
         </section> */}
    </div>
  );
}
