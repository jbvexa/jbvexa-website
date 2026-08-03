"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071B4D] via-[#0F5DBB] to-[#071B4D] py-32">

      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#19D3B4]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#19D3B4]/5 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <span className="inline-flex items-center gap-2 rounded-full border border-[#19D3B4]/30 bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">

          <Sparkles size={16} />

          About JBVEXA

        </span>

        {/* Heading */}

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl">

          Engineering
          <br />

          Digital Excellence

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">

          We help enterprises accelerate digital transformation through
          Artificial Intelligence, Cloud Engineering, Data Platforms,
          Business Intelligence, Cyber Security and Modern Software
          Development.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#19D3B4] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#15c4a8]"
          >
            Let's Build Together

            <ArrowRight size={18} />

          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#19D3B4] hover:bg-white/10"
          >
            Explore Services
          </Link>

        </div>

        {/* Highlights */}

        <div className="mt-20 grid w-full gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h3 className="text-4xl font-bold text-[#19D3B4]">
              6+
            </h3>

            <p className="mt-3 text-slate-300">
              Enterprise Technology Services
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h3 className="text-4xl font-bold text-[#19D3B4]">
              100%
            </h3>

            <p className="mt-3 text-slate-300">
              Client-Focused Delivery
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h3 className="text-4xl font-bold text-[#19D3B4]">
              Secure
            </h3>

            <p className="mt-3 text-slate-300">
              Scalable & Future-Ready Solutions
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}