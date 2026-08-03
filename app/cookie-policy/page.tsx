import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for JBVEXA Technologies Private Limited.",
};

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              This Cookie Policy explains how JBVEXA Technologies Private
              Limited uses cookies and similar technologies to improve your
              browsing experience and enhance the performance of our website.
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
                  1. What Are Cookies?
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Cookies are small text files stored on your device when you
                  visit a website. They help websites remember your preferences,
                  improve functionality and provide a better browsing
                  experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  2. How We Use Cookies
                </h2>

                <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-600">
                  <li>Remember user preferences.</li>
                  <li>Improve website performance.</li>
                  <li>Analyze visitor traffic.</li>
                  <li>Enhance security.</li>
                  <li>Support future analytics tools.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  3. Third-Party Cookies
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We may use trusted third-party services such as Google
                  Analytics or similar tools to understand website usage. These
                  services may place cookies on your device in accordance with
                  their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  4. Managing Cookies
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Most web browsers allow you to manage or disable cookies
                  through browser settings. Please note that disabling cookies
                  may affect certain website features and functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  5. Updates to This Policy
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We may update this Cookie Policy from time to time. Any
                  changes will be published on this page with the revised
                  "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#071B4D]">
                  6. Contact Us
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