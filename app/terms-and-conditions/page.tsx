import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for JBVEXA Technologies Private Limited.",
};

export default function TermsAndConditionsPage() {
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
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              These Terms & Conditions govern your use of the JBVEXA
              Technologies website and our services. By accessing this
              website, you agree to comply with these terms.
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
                  1. Acceptance of Terms
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  By accessing or using this website, you agree to be bound by
                  these Terms & Conditions and all applicable laws and
                  regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  2. Use of Website
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  You agree to use this website only for lawful purposes and
                  not to engage in any activity that may damage, disable or
                  interfere with the operation of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  3. Intellectual Property
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  All content, graphics, branding, text, logos, software and
                  other materials on this website are the intellectual property
                  of JBVEXA Technologies Private Limited unless otherwise
                  stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  4. Limitation of Liability
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  JBVEXA Technologies shall not be liable for any direct,
                  indirect, incidental or consequential damages arising from
                  the use of this website or reliance on its content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  5. Changes to Terms
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We reserve the right to modify these Terms & Conditions at
                  any time. Updated versions will be published on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  6. Governing Law
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  These Terms & Conditions shall be governed by the laws of
                  India. Any disputes shall be subject to the jurisdiction of
                  the courts in Maharashtra.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  7. Contact Information
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