import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TST Calculator",
  description: "Privacy Policy for TST Calculator, a 100% offline utility app by TechSwiftTrix Agency.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-display font-bold mb-4">Privacy Policy for TST Calculator</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 13, 2026</p>

        <p className="mb-4">
          TechSwiftTrix Agency ("we," "our," or "us") operates the <strong>TST Calculator</strong> mobile application (the "App").
        </p>
        <p className="mb-8">
          This Privacy Policy explains how we handle information when you use our App. We have built the TST Calculator to be a 100% offline, privacy-first utility.
        </p>

        <h2 className="text-2xl font-display font-semibold mt-8 mb-4">1. Information Collection and Use</h2>
        <p className="mb-4">
          <strong>We do not collect, store, or share any personal information.</strong><br />
          TST Calculator is designed to function entirely on your device. We do not require you to create an account, sign in, or provide any personal details (such as your name, email address, or phone number) to use the App.
        </p>

        <h2 className="text-2xl font-display font-semibold mt-8 mb-4">2. Device Permissions</h2>
        <p className="mb-4">
          The App does not request or require access to sensitive device features. We do not access your Camera, Microphone, Location (GPS), Contacts, or Personal Files.
        </p>

        <h2 className="text-2xl font-display font-semibold mt-8 mb-4">3. Local Data Storage</h2>
        <p className="mb-4">
          To provide you with a better user experience, the App saves your calculation history and user preferences (such as dark/light mode) locally on your device.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>This data never leaves your device.</strong></li>
          <li>We do not have access to your calculation history.</li>
          <li>You can delete this data at any time by clearing the app's cache or using the "Clear History" button within the App.</li>
        </ul>

        <h2 className="text-2xl font-display font-semibold mt-8 mb-4">4. Third-Party Services and APIs</h2>
        <p className="mb-4">
          TST Calculator does not include any third-party advertising networks, analytics trackers, or tracking SDKs.
        </p>
        <p className="mb-4">
          However, to provide specific features, the App may securely connect to the following public APIs:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>ExchangeRate-API:</strong> To fetch live currency exchange rates. (No personal data is transmitted).</li>
          <li><strong>Nager.Date API:</strong> To fetch public holidays. (No personal data is transmitted).</li>
        </ul>

        <h2 className="text-2xl font-display font-semibold mt-8 mb-4">5. Children’s Privacy</h2>
        <p className="mb-4">
          TST Calculator does not collect any personal data from anyone, including children under the age of 13. Because the App does not collect any information, it is fully compliant with COPPA and Google Play's Families Policy.
        </p>

        <h2 className="text-2xl font-display font-semibold mt-8 mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Privacy Policy, contact us at:<br />
          <strong>TechSwiftTrix Agency</strong><br />
          Website: <a href="https://techswifttrix.com" className="text-primary hover:underline">techswifttrix.com</a>
        </p>
      </div>
    </main>
  );
}