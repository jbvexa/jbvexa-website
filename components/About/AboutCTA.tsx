"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#071B4D] via-[#0F5DBB] to-[#071B4D] py-24">

      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#19D3B4]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#19D3B4]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <span className="inline-flex rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">
          Let's Build Together
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
          Ready to Accelerate
          <br />
          Your Digital Transformation?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Whether you're planning a new digital initiative, modernizing
          existing systems or exploring AI-driven innovation, JBVEXA is
          ready to help you build secure, scalable and future-ready
          technology solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#19D3B4] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#15c4a8]"
          >
            <PhoneCall size={18} />
            Contact Us
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
          >
            Explore Services
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}