"use client";

import { Compass, Rocket, Target } from "lucide-react";

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFC] py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#19D3B4]/5 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#0F5DBB]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">
            Our Story
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#071B4D]">
            Every Great Transformation
            <br />
            Begins With A Purpose
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Technology should empower businesses—not create complexity.
            JBVEXA was founded with the belief that organizations deserve
            solutions that are intelligent, secure and built around measurable
            business outcomes.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Purpose */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10">

              <Compass
                className="text-[#19D3B4]"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold text-[#071B4D]">
              Our Purpose
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To simplify digital transformation through practical,
              enterprise-grade technology solutions that create real value.
            </p>

          </div>

          {/* Journey */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10">

              <Rocket
                className="text-[#19D3B4]"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold text-[#071B4D]">
              Our Journey
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              We continuously embrace emerging technologies including
              Artificial Intelligence, Cloud Engineering, Data Platforms
              and Cyber Security to help organizations stay future-ready.
            </p>

          </div>

          {/* Vision */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10">

              <Target
                className="text-[#19D3B4]"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold text-[#071B4D]">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To become a trusted technology partner recognized for innovation,
              engineering excellence and long-term customer success.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}