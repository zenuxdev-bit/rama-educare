import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - RAMA Educare",
  description: "Read our privacy policy to understand how RAMA Educare collects, uses, and protects your personal information during the admission counseling process.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-20">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 px-4 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#FAFAFA] border border-[#E2E8F0] rounded-lg mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B4F8C] mt-3 mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#64748B] text-base md:text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-10 shadow-sm space-y-8">
            
            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">1. Information We Collect</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                We collect information that you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-4">
                <li>Personal information (name, email address, phone number)</li>
                <li>Academic information (entrance exam scores, 12th percentage, school details)</li>
                <li>Preferences (preferred courses, universities, career goals)</li>
                <li>Communication records (emails, phone calls, counseling sessions)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">2. How We Use Your Information</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-4">
                <li>Provide personalized admission counseling and guidance</li>
                <li>Match you with suitable universities and courses based on your profile</li>
                <li>Communicate with you about our services and your applications</li>
                <li>Process and track your university applications</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-4">
                <li>Universities and educational institutions for admission processing</li>
                <li>Service providers who assist us in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">4. Data Security</h2>
              <p className="text-[#64748B] leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">5. Data Retention</h2>
              <p className="text-[#64748B] leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">6. Your Rights</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-[#64748B] leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and improve our services. You can control cookie settings through your browser.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">8. Changes to This Policy</h2>
              <p className="text-[#64748B] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">9. Contact Us</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-lg p-4 space-y-1">
                <p className="text-[#64748B]">
                  <span className="font-semibold text-[#334155]">Email:</span> info@ramaeducare.com
                </p>
                <p className="text-[#64748B]">
                  <span className="font-semibold text-[#334155]">Phone:</span> +91 12345 67890
                </p>
                <p className="text-[#64748B]">
                  <span className="font-semibold text-[#334155]">Address:</span> Jamshedpur, Jharkhand, India
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
