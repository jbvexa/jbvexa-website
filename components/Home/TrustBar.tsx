"use client";

import {
  BrainCircuit,
  Cloud,
  Database,
  BarChart3,
  ShieldCheck,
  Code2,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
  },
  {
    icon: Database,
    title: "Data Engineering",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
  },
  {
    icon: Code2,
    title: "Software Development",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="mb-8 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#19D3B4]">
            Enterprise Technology Expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#071B4D]">
            End-to-End Digital Transformation Services
          </h2>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#19D3B4] hover:shadow-xl"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19D3B4]/10">

                    <Icon
                      size={24}
                      className="text-[#19D3B4]"
                    />

                  </div>

                  <CheckCircle2
                    size={18}
                    className="ml-auto text-[#19D3B4]"
                  />

                </div>

                <h3 className="mt-5 text-base font-semibold leading-6 text-[#071B4D]">
                  {service.title}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}