"use client";

import { ArrowRight } from "lucide-react";

interface Props {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#19D3B4]/60 hover:shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#19D3B4] to-[#0F5DBB] transition-transform duration-500 group-hover:scale-x-100" />
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#19D3B4]">
        <Icon size={32} className="text-[#19D3B4] transition duration-500 group-hover:text-white" />
      </div>
      <h3 className="mt-8 text-2xl font-bold text-[#071B4D]">{title}</h3>
      <p className="mt-5 leading-8 text-slate-600">{description}</p>
      <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#19D3B4] transition-all group-hover:gap-4">
        Learn More <ArrowRight size={18} />
      </a>
    </article>
  );
}
