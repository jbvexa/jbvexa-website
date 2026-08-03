"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessCard({
  number,
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="group rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#19D3B4] hover:shadow-[0_25px_60px_rgba(25,211,180,0.18)]">
      <div className="mb-5 text-sm font-bold tracking-widest text-[#19D3B4]">
        {number}
      </div>

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10">
        <Icon size={30} className="text-[#19D3B4]" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#071B4D]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}