"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#071B4D] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full border border-[#19D3B4] px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#19D3B4]">
              Let's Build Together
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
              Ready to transform your business?
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
              From a focused digital initiative to enterprise-wide
              transformation, our team helps you move forward
              with confidence.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2
                  size={18}
                  className="text-[#19D3B4]"
                />
                AI Solutions
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2
                  size={18}
                  className="text-[#19D3B4]"
                />
                Cloud Engineering
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2
                  size={18}
                  className="text-[#19D3B4]"
                />
                Data & BI
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2
                  size={18}
                  className="text-[#19D3B4]"
                />
                Software Development
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-[28px] bg-white p-10 shadow-2xl">

            <h3 className="text-3xl font-bold text-[#071B4D]">
              Start a conversation
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Tell us about your goals and we'll help identify
              the right next step.
            </p>

            <div className="mt-10 space-y-5">

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#19D3B4] px-8 py-4 font-semibold text-[#071B4D] transition-all duration-300 hover:scale-105 hover:bg-[#16c4a8]"
              >
                <ArrowRight size={18} />
                Start Your Project
              </Link>

              <a
                href="mailto:info@jbvexa.com"
                className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 px-8 py-4 font-semibold text-[#071B4D] transition-all duration-300 hover:border-[#19D3B4]"
              >
                <CalendarDays size={18} />
                Schedule Consultation
              </a>

            </div>

            <div className="mt-8 rounded-xl bg-[#F8FCFC] p-5">

              <p className="text-sm text-slate-500">
                Business Enquiries
              </p>

              <p className="mt-1 font-semibold text-[#071B4D]">
                info@jbvexa.com
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}