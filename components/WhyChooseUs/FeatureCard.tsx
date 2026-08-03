"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10">
        <Icon size={30} className="text-[#19D3B4]" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#071B4D]">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-slate-600">
          {description}
        </p>
      </div>

    </div>
  );
}