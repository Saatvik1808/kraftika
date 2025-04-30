

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 prose prose-orange dark:prose-invert max-w-3xl"> {/* Updated prose class if applicable */}
      <h1 className="text-3xl font-serif font-semibold mb-6 text-primary">Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        Welcome to Kraftika! We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site. {/* Updated Brand Name */}
      </p>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Collection of Your Information</h2>
      <p>
        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
      </p>
      <ul>
        <li>
          <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site, place an order, or when you choose to participate in various activities related to the Site, such as contacting us via our contact form.
        </li>
        <li>
          <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
        </li>
        {/* Add more sections as needed: Financial Data, Mobile Device Data, Third-Party Data, etc. */}
      </ul>

        <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Use of Your Information</h2>
        <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
            <li>Create and manage your account.</li>
            <li>Process your orders and payments.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
            <li>Respond to your inquiries via the contact form or other communication channels.</li>
            <li>Improve the efficiency and operation of the Site.</li>
            {/* Add more uses as needed */}
        </ul>

      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Disclosure of Your Information</h2>
      <p>
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </p>
      <ul>
        <li>
          <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
        </li>
        <li>
          <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. (e.g., Email Provider for contact form).
        </li>
         {/* Add more disclosures as needed */}
      </ul>

      {/* Add sections on Security, Policy for Children, Contact Us, etc. */}
       <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Security of Your Information</h2>
        <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>


      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3">Contact Us</h2>
      <p>
        If you have questions or comments about this Privacy Policy, please contact us at: [Your Contact Email - e.g., privacy@kraftika.com or saatvik.shrivastava08@gmail.com] {/* Updated Placeholder Email */}
      </p>
       <p className="mt-8 text-sm text-muted-foreground">
           Please note: This is a template privacy policy. You should consult with a legal professional to ensure it meets all legal requirements for your specific business and location.
       </p>
    </div>
  );
}

```