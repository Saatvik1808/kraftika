
export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8 prose prose-stone dark:prose-invert max-w-3xl">
      <h1 className="text-3xl font-serif font-semibold mb-6">Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Aromatic Flames website (the "Service") operated by Aromatic Flames ("us", "we", or "our").
      </p>
      <p>
        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
      </p>
      <p>
        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
      </p>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Purchases</h2>
      <p>
        If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your name, email, shipping address, and payment information.
      </p>
      <p>
        You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct, and complete.
      </p>
       <p>
           We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
       </p>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Content</h2>
      <p>
        Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
        {/* This section may not be relevant if users can't post content */}
      </p>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Intellectual Property</h2>
      <p>
        The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Aromatic Flames and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Aromatic Flames.
      </p>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Links To Other Web Sites</h2>
      <p>
        Our Service may contain links to third-party web sites or services that are not owned or controlled by Aromatic Flames.
      </p>
      <p>
        Aromatic Flames has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Aromatic Flames shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>

        <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Limitation Of Liability</h2>
        <p>
            In no event shall Aromatic Flames, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
        </p>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
      </p>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Changes</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </p>
      <p>
        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
      </p>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at: [Your Contact Email - e.g., terms@aromaticflames.com or saatvik.shrivastava08@gmail.com]
      </p>
        <p className="mt-8 text-sm text-muted-foreground">
            Please note: This is a template Terms of Service. You should consult with a legal professional to ensure it meets all legal requirements for your specific business and location.
        </p>
    </div>
  );
}

