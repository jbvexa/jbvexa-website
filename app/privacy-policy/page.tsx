import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for JBVEXA Technologies Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8FCFC]">

        {/* Hero */}

        <section className="bg-[#071B4D] py-24">

          <div className="mx-auto max-w-5xl px-6">

            <span className="rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">
              Legal
            </span>

            <h1 className="mt-8 text-5xl font-bold text-white">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              Your privacy is important to us. This Privacy Policy explains
              how JBVEXA Technologies Private Limited collects, uses,
              stores and protects your information when you visit our
              website or interact with our services.
            </p>

          </div>

        </section>

        {/* Content */}

        <section className="py-24">

          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-lg lg:p-14">

            <p className="text-sm text-slate-500">
              Last Updated: August 2026
            </p>

            <div className="mt-10 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  1. Information We Collect
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We may collect information that you voluntarily provide,
                  including your name, company name, email address, phone
                  number, project requirements and any other information
                  submitted through our contact forms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  2. How We Use Your Information
                </h2>

                <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-600">
                  <li>Respond to enquiries and business requests.</li>
                  <li>Provide information about our services.</li>
                  <li>Improve our website and customer experience.</li>
                  <li>Communicate regarding ongoing or future projects.</li>
                  <li>Comply with applicable legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  3. Cookies
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Our website may use cookies and similar technologies to
                  improve user experience, analyze website traffic and
                  enhance performance. You may disable cookies through your
                  browser settings if preferred.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  4. Data Security
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We implement appropriate technical and organizational
                  measures to protect your information from unauthorized
                  access, disclosure, alteration or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  5. Third-Party Services
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We may use trusted third-party providers to operate our
                  website and communication services. These providers are
                  required to maintain the confidentiality and security of
                  your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  6. Your Rights
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  You may request access to, correction of or deletion of
                  your personal information by contacting us using the
                  details below, subject to applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  7. Contact Us
                </h2>

                <div className="mt-5 rounded-2xl bg-[#F8FCFC] p-6">

                  <p className="font-semibold text-[#071B4D]">
                    JBVEXA Technologies Private Limited
                  </p>

                  <p className="mt-2 text-slate-600">
                    Thane, Maharashtra, India
                  </p>

                  <p className="mt-2 text-slate-600">
                    Email: info@jbvexa.com
                  </p>

                  <p className="mt-2 text-slate-600">
                    Phone: +91 96195 23623
                  </p>

                </div>

              </section>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}