
"use server";

import { z } from "zod";
import { sendEmail } from "@/services/email"; // Assuming email service exists

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// Re-define schema on the server for validation consistency
const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(phoneRegex).optional().or(z.literal('')),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate the data on the server side
    const validatedData = formSchema.parse(formData);

    const { name, email, phone, message } = validatedData;
    const recipientEmail = "saatvik.shrivastava08@gmail.com"; // Target email

    const subject = `New Kraftika Contact Form Submission from ${name}`; // Updated Brand Name
    const body = `
      You received a new message from the Kraftika contact form: // Updated Brand Name

      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Message:
      ${message}
    `;

    // Simulate sending email - replace with actual implementation
    // await sendEmail({
    //   to: recipientEmail,
    //   subject: subject,
    //   body: body,
    // });
    console.log("Simulating email send to:", recipientEmail);
    console.log("Subject:", subject);
    console.log("Body:", body);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay


    console.log("Contact email sent successfully to:", recipientEmail);
    return { success: true };

  } catch (error) {
     console.error("Error processing contact form:", error);
     if (error instanceof z.ZodError) {
       return { success: false, error: "Invalid form data provided." };
     }
     // Log the detailed error on the server for debugging
     console.error('Detailed error sending email:', error);
    return { success: false, error: "Failed to send message due to a server error." };
  }
}
```