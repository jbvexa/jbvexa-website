"use client";

import {
  AlertTriangle,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

import { ServiceData } from "./servicesData";

interface ServiceSectionProps {
  data: ServiceData;
}

export default function ServiceSection({
  data,
}: ServiceSectionProps) {
  return (
    <section
      id={data.id}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background */}
      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-[#19D3B4]/5 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#0F5DBB]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full bg-[#19D3B4]/10 px-4 py-2 text-sm font-semibold text-[#19D3B4]">
            {data.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#071B4D] md:text-5xl">
            {data.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            {data.description}
          </p>

        </div>

        {/* Three Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* Challenges */}

          <div className="rounded-3xl border border-red-100 bg-red-50 p-8">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-red-100 p-3">
                <AlertTriangle className="text-red-600" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-[#071B4D]">
                Challenges
              </h3>

            </div>

            <ul className="mt-8 space-y-5">

              {data.challenges.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />

                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Capabilities */}

          <div className="rounded-3xl border border-[#19D3B4]/20 bg-[#19D3B4]/5 p-8">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-[#19D3B4]/10 p-3">

                <Sparkles
                  className="text-[#19D3B4]"
                  size={24}
                />

              </div>

              <h3 className="text-2xl font-bold text-[#071B4D]">
                Our Capabilities
              </h3>

            </div>

            <ul className="mt-8 space-y-5">

              {data.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <CheckCircle2
                    className="mt-1 text-[#19D3B4]"
                    size={18}
                  />

                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Benefits */}

          <div className="rounded-3xl border border-[#0F5DBB]/10 bg-[#0F5DBB]/5 p-8">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-[#0F5DBB]/10 p-3">

                <TrendingUp
                  className="text-[#0F5DBB]"
                  size={24}
                />

              </div>

              <h3 className="text-2xl font-bold text-[#071B4D]">
                Business Benefits
              </h3>

            </div>

            <ul className="mt-8 space-y-5">

              {data.benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <CheckCircle2
                    className="mt-1 text-[#0F5DBB]"
                    size={18}
                  />

                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Technology Stack */}

        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">

          <h3 className="text-3xl font-bold text-[#071B4D]">
            Technology Stack
          </h3>

          <div className="mt-8 flex flex-wrap gap-4">

            {data.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#19D3B4]/20 bg-white px-5 py-3 text-sm font-medium text-[#071B4D] shadow-sm"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-[#071B4D] to-[#0F5DBB] p-12 text-center">

          <h3 className="text-4xl font-bold text-white">
            {data.ctaTitle}
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {data.ctaDescription}
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#19D3B4] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#12b89d]"
          >
            {data.buttonText}
          </a>

        </div>

      </div>
    </section>
  );
}