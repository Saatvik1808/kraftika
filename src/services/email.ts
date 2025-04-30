/**
 * Represents the structure of an email message.
 */
export interface EmailMessage {
  /**
   * The recipient's email address.
   */
  to: string;
  /**
   * The subject of the email.
   */
  subject: string;
  /**
   * The body of the email message.
   */
  body: string;
}

/**
 * Asynchronously sends an email message.
 *
 * @param message The email message to send.
 * @returns A promise that resolves when the email is sent successfully.
 */
export async function sendEmail(message: EmailMessage): Promise<void> {
  // TODO: Implement this by calling an email API.
  console.log(`Sending email to ${message.to} with subject ${message.subject}`);

  return;
}
