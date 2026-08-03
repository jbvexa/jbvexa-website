"use client";

import {
  ArrowRight,
  Building2,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#19D3B4]/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#0F5DBB]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">
              Who We Are
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-[#071B4D]">
              Technology Built Around
              <br />
              Business Outcomes
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              JBVEXA Technologies Private Limited is a technology consulting
              and digital engineering company focused on delivering secure,
              scalable and intelligent solutions for modern enterprises.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              We combine deep technical expertise with business understanding
              to help organizations modernize operations, unlock data-driven
              insights and accelerate digital transformation through
              Artificial Intelligence, Cloud Engineering, Data Engineering,
              Business Intelligence, Cyber Security and Custom Software
              Development.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Our philosophy is simple:
              <span className="font-semibold text-[#071B4D]">
                {" "}
                build technology that creates measurable business value.
              </span>
            </p>

            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#071B4D] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#0F5DBB]">
              Learn More
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-[#19D3B4]/10 p-4">
                  <Building2 className="text-[#19D3B4]" size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#071B4D]">
                    Enterprise Mindset
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Solutions designed for scalability,
                    governance and long-term growth.
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-[#19D3B4]/10 p-4">
                  <Lightbulb className="text-[#19D3B4]" size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#071B4D]">
                    Innovation First
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Leveraging modern technologies to
                    solve complex business challenges.
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-[#19D3B4]/10 p-4">
                  <ShieldCheck className="text-[#19D3B4]" size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#071B4D]">
                    Trusted Delivery
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Security, quality and customer success
                    are at the heart of every engagement.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}