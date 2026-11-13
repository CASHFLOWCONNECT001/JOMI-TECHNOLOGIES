import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Bloom Path",
  description: "Privacy Policy for Bloom Path by TechSwiftTrix Agency.",
};

export default function BloomPathPrivacy() {
  return (
    <main className="min-h-screen bg-[#FFF8FB] text-[#4A3A45] py-10 px-4 font-sans">
      <div className="max-w-[800px] mx-auto bg-white rounded-[20px] border border-[#F3E5F0] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 md:p-10">
        
        {/* Header */}
        <header className="text-center mb-10 pb-5 border-b-2 border-[#F3E5F0]">
          <div className="text-5xl mb-2.5">🌸</div>
          <h1 className="text-[#4A3A45] text-3xl md:text-4xl font-extrabold m-0 mb-2.5">Privacy Policy</h1>
          <div className="text-[#9A8A93] text-sm font-medium">Last Updated: May 2024</div>
        </header>

        <p className="mb-4 text-base">
          Welcome to <strong>Bloom Path</strong>, operated by <strong>TechSwiftTrix Agency</strong>. We are deeply committed to protecting your personal health information. This Privacy Policy explains how your data is handled when you use the Bloom Path mobile application.
        </p>

        {/* Highlight Box */}
        <div className="bg-[#FFF8FB] border-l-4 border-[#F48FB1] p-5 rounded-r-lg my-6">
          <p className="m-0 font-semibold text-[#4A3A45]">
            🔒 Core Principle: Your data belongs to you. Bloom Path is designed as a 100% local-first application. We do not have servers, we cannot access your health records, and your data is never uploaded to the cloud or shared with third parties.
          </p>
        </div>

        {/* Sections */}
        <h2 className="text-[#4A3A45] text-xl md:text-2xl font-bold mt-8 mb-4 flex items-center gap-2.5">1. Data Collection and Storage</h2>
        <p className="mb-4 text-base">
          All information you enter into Bloom Path—including cycle dates, symptoms, pregnancy details, and medication schedules—is stored <strong>exclusively on your mobile device</strong> using secure local storage.
        </p>
        <ul className="list-disc pl-5 mb-5 space-y-2.5 text-base">
          <li><strong>No Account Required:</strong> We do not ask for your email, phone number, or password to use the app.</li>
          <li><strong>No Cloud Sync:</strong> Your data does not leave your device. We do not use remote servers to store your health information.</li>
          <li><strong>No Analytics or Tracking:</strong> We do not use third-party trackers to monitor your behavior within the app.</li>
        </ul>

        <h2 className="text-[#4A3A45] text-xl md:text-2xl font-bold mt-8 mb-4">2. Data Backup and Recovery</h2>
        <p className="mb-4 text-base">
          Because your data is stored entirely on your device for maximum privacy, <strong>it is not backed up by us</strong>. If you delete the app, clear your device storage, or lose your phone, your health records cannot be recovered by Bloom Path or TechSwiftTrix Agency.
        </p>

        <h2 className="text-[#4A3A45] text-xl md:text-2xl font-bold mt-8 mb-4">3. Device Permissions</h2>
        <p className="mb-4 text-base">To provide specific features, the app may request the following permissions:</p>
        <ul className="list-disc pl-5 mb-5 space-y-2.5 text-base">
          <li><strong>Notifications:</strong> Used to send you local medicine reminders and appointment alerts. These are scheduled directly by your device's operating system.</li>
          <li><strong>Biometric Data (Fingerprint/Face ID):</strong> If you enable the App Lock feature, the app uses your device's native biometric authentication. We do not collect, store, or have access to your fingerprint or facial data. This verification is handled entirely by your phone's operating system.</li>
        </ul>

        <h2 className="text-[#4A3A45] text-xl md:text-2xl font-bold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
        <p className="mb-4 text-base">
          We do not sell, trade, or rent your personal information. Since your data is stored locally on your device, we have no technical means to access or share your information. You only share your data if you explicitly choose to do so (e.g., by exporting a report or showing your screen to a doctor).
        </p>

        <h2 className="text-[#4A3A45] text-xl md:text-2xl font-bold mt-8 mb-4">5. Data Deletion</h2>
        <p className="mb-4 text-base">
          You have complete control over your data. You can permanently delete all your records at any time by navigating to the <strong>Profile tab</strong> within the app and selecting <strong>"Clear All Data."</strong> Alternatively, uninstalling the app from your device will permanently delete all associated data.
        </p>

        <h2 className="text-[#4A3A45] text-xl md:text-2xl font-bold mt-8 mb-4">6. Children's Privacy</h2>
        <p className="mb-4 text-base">
          Bloom Path is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. Because the app operates entirely locally, no data is transmitted to us regardless of the user's age.
        </p>

        <h2 className="text-[#4A3A45] text-xl md:text-2xl font-bold mt-8 mb-4">7. Changes to This Policy</h2>
        <p className="mb-4 text-base">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        {/* Contact Box */}
        <div className="bg-[#E1BEE7] p-6 rounded-xl mt-10 text-center">
          <p className="mb-2.5 text-[#4A3A45]">If you have any questions or concerns about this Privacy Policy or your data, please contact us at:</p>
          <p className="mb-2.5 text-[#4A3A45]"><strong>TechSwiftTrix Agency</strong></p>
          <p className="mb-2.5"><a href="https://techswifttrix.com" target="_blank" rel="noreferrer" className="text-[#4A3A45] font-extrabold underline">www.techswifttrix.com</a></p>
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 pt-5 border-t border-[#F3E5F0] text-[#9A8A93] text-sm">
          &copy; 2024 TechSwiftTrix Agency. All rights reserved.<br />
          Bloom Path v1.0.0
        </footer>
        
      </div>
    </main>
  );
}