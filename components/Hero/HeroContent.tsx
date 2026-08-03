"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function HeroContent() {
  return (
    <div>
      {/* Badge */}

      <span className="inline-flex rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold text-[#19D3B4]">
        Engineering Digital Excellence
      </span>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-extrabold leading-[1.08] text-[#071B4D] sm:text-6xl xl:text-7xl">
        Empowering
        <br />
        Tomorrow's
        <br />
        Digital Enterprises
      </h1>

      {/* Divider */}

      <div className="mt-6 flex items-center gap-3">
        <div className="h-1 w-16 rounded-full bg-[#19D3B4]" />

        <p className="text-xl font-semibold text-[#0F9E9A]">
          Trusted Technology Partner
        </p>
      </div>

      {/* Description */}

      <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl">
        JBVEXA Technologies helps businesses accelerate digital
        transformation through Artificial Intelligence, Cloud
        Engineering, Data Platforms, Business Intelligence and
        modern Software Development—building scalable, secure and
        future-ready enterprise solutions.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap items-center gap-4">

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#071B4D] px-7 py-4 font-semibold text-white shadow-lg shadow-[#071B4D]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5DBB]"
        >
          Start Your Project

          <ArrowRight size={18} />
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-[#071B4D] transition-all duration-300 hover:border-[#19D3B4] hover:text-[#19D3B4]"
        >
          <PlayCircle
            size={20}
            className="text-[#19D3B4]"
          />

          Explore Services
        </Link>

      </div>

      {/* Trust Indicators */}

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">

        <div>

          <h3 className="text-3xl font-bold text-[#071B4D]">
            Enterprise
          </h3>

          <p className="mt-2 text-slate-500">
            Technology Solutions
          </p>

        </div>

        <div>

          <h3 className="text-3xl font-bold text-[#071B4D]">
            AI
          </h3>

          <p className="mt-2 text-slate-500">
            Ready Architecture
          </p>

        </div>

        <div>

          <h3 className="text-3xl font-bold text-[#071B4D]">
            Cloud
          </h3>

          <p className="mt-2 text-slate-500">
            Native Engineering
          </p>

        </div>

      </div>
    </div>
  );
}