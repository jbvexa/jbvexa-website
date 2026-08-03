import { ArrowRight, LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function IndustryCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10">
        <Icon size={30} className="text-[#19D3B4]" />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-2xl font-bold text-[#071B4D]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 leading-7 text-slate-600">
        {description}
      </p>

      {/* Button */}
      <button className="mt-8 flex items-center gap-2 font-semibold text-[#19D3B4] transition-all duration-300 group-hover:gap-3">
        Explore
        <ArrowRight size={18} />
      </button>
    </div>
  );
}