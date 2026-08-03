"use client";

import Link from "next/link";
import { PhoneCall, ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071B4D] via-[#0F5DBB] to-[#071B4D] py-32">

      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#19D3B4]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#19D3B4]/10 blur-3xl" />

      {/* Grid */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">
            Contact JBVEXA
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Let's Build Something
            <br />
            Extraordinary Together
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Whether you're planning a digital transformation,
            exploring Artificial Intelligence, modernizing your
            applications or looking for enterprise technology
            consulting, our experts are here to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-full bg-[#19D3B4] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#15c4a8]"
            >
              <PhoneCall size={18} />
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore Services
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}