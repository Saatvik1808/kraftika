
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "./actions"; // Server action import
import * as React from "react";
import { Loader2 } from "lucide-react"; // Import loader icon

// Regex allows optional '+' and spaces/hyphens, standard international formats
const phoneRegex = new RegExp(
  /^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(100, { message: "Name cannot exceed 100 characters."}),
  phone: z.string()
        .regex(phoneRegex, { message: "Please enter a valid phone number." })
        .optional()
        .or(z.literal('')), // Optional and allows empty string
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, { // Increased max length
    message: "Message must not exceed 1000 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

 async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(values);

      if (result.success) {
        toast({
          title: "Message Received!",
          description: "Thank you for reaching out. We'll connect with you shortly.",
           // Use a success variant if defined, otherwise default
           // variant: 'success'
        });
        form.reset(); // Reset form fields
      } else {
         throw new Error(result.error || "An unknown error occurred while sending.");
      }
    } catch (error: any) {
       console.error("Contact form submission failed:", error);
      toast({
        title: "Oops! Sending Failed",
        description: error.message || "Could not send your message at this time. Please try again later or email us directly.",
        variant: "destructive",
      });
    } finally {
       setIsSubmitting(false);
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} className="bg-input border-border/70 focus:border-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Phone Number <span className="text-xs text-muted-foreground">(Optional)</span></FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Your contact number" {...field} className="bg-input border-border/70 focus:border-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} className="bg-input border-border/70 focus:border-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your thoughts, questions, or inquiries here..."
                  className="min-h-[150px] bg-input border-border/70 focus:border-primary resize-none" // Increased height, disabled resize
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full btn-cta py-3" disabled={isSubmitting}> {/* Used btn-cta class, increased padding */}
           {isSubmitting ? (
             <>
               <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
             </>
            ) : (
              'Send Your Message'
            )}
        </Button>
      </form>
    </Form>
  );
}
