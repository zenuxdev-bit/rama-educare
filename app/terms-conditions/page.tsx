import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - RAMA Educare",
  description: "Read our terms and conditions for admission counseling services. Understand the terms of service, refund policy, and user responsibilities at RAMA Educare.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
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
            Terms & Conditions
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
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#64748B] leading-relaxed">
                By accessing and using RAMA Educare's services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">2. Services Description</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                RAMA Educare provides educational counseling services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-4">
                <li>Post-entrance exam admission counseling</li>
                <li>University and course selection guidance</li>
                <li>Application and documentation assistance</li>
                <li>Career counseling and profile building</li>
                <li>Admission process support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">3. Client Responsibilities</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Submit all required documents in a timely manner</li>
                <li>Respond promptly to communications from our team</li>
                <li>Follow the guidance and recommendations provided</li>
                <li>Meet all deadlines set by universities and our team</li>
                <li>Pay all applicable fees as agreed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">4. Fees and Payments</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                Our counseling fees are clearly communicated before service commencement. Payment terms include:
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-4">
                <li>Fees must be paid as per the agreed payment schedule</li>
                <li>All payments are non-refundable unless otherwise specified</li>
                <li>University application fees and other third-party charges are separate</li>
                <li>Late payment may result in suspension of services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">5. Refund Policy</h2>
              <p className="text-[#64748B] leading-relaxed">
                Refunds are considered on a case-by-case basis and are subject to the specific service agreement. Generally, fees paid for services already rendered are non-refundable. Any refund requests must be submitted in writing within the timeframe specified in your service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">6. Confidentiality</h2>
              <p className="text-[#64748B] leading-relaxed">
                We maintain strict confidentiality of all client information. Your personal and academic information will only be shared with universities and relevant parties for the purpose of admission processing, with your consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">7. Limitation of Liability</h2>
              <p className="text-[#64748B] leading-relaxed">
                RAMA Educare shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">8. Intellectual Property</h2>
              <p className="text-[#64748B] leading-relaxed">
                All content, materials, and resources provided by RAMA Educare are our intellectual property. Clients may not reproduce, distribute, or share our proprietary materials without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">9. Termination of Services</h2>
              <p className="text-[#64748B] leading-relaxed">
                Either party may terminate the service agreement with written notice. RAMA Educare reserves the right to terminate services immediately if the client provides false information, fails to comply with terms, or engages in misconduct.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">10. Modifications to Terms</h2>
              <p className="text-[#64748B] leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">11. Governing Law</h2>
              <p className="text-[#64748B] leading-relaxed">
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Jamshedpur, Jharkhand.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1B4F8C] mb-4">12. Contact Information</h2>
              <p className="text-[#64748B] leading-relaxed mb-3">
                For questions about these Terms and Conditions, please contact us:
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
