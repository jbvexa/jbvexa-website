"use client";

import {
  BrainCircuit,
  Cloud,
  Database,
  BarChart3,
  Code2,
  ShieldCheck,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  technologies: string[];
}

const iconMap = {
  "Artificial Intelligence": BrainCircuit,
  "Cloud Engineering": Cloud,
  "Data Engineering": Database,
  "Business Intelligence": BarChart3,
  "Software Development": Code2,
  "Cyber Security": ShieldCheck,
};

export default function TechnologyCard({
  title,
  description,
  technologies,
}: Props) {

  const Icon =
    iconMap[title as keyof typeof iconMap];

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10">

        {Icon && (
          <Icon
            size={32}
            className="text-[#19D3B4]"
          />
        )}

      </div>

      <h3 className="text-2xl font-bold text-[#071B4D]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition group-hover:bg-[#19D3B4]/10 group-hover:text-[#071B4D]"
          >
            {tech}
          </span>
        ))}

      </div>

    </div>
  );
}