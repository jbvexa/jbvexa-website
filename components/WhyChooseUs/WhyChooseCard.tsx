"use client";

import { LucideIcon, ArrowRight } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WhyChooseCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-100
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#19D3B4]
        hover:shadow-[0_25px_60px_rgba(25,211,180,0.18)]
      "
    >
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10 transition-all duration-300 group-hover:bg-[#19D3B4]">
        <Icon
          size={30}
          className="text-[#19D3B4] transition-all duration-300 group-hover:scale-110 group-hover:text-white"
        />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-2xl font-bold text-[#071B4D]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 leading-7 text-slate-600">
        {description}
      </p>

      {/* CTA */}
      <button className="mt-8 flex items-center gap-2 font-semibold text-[#19D3B4] transition-all group-hover:gap-3">
        Learn More
        <ArrowRight size={18} />
      </button>
    </div>
  );
}