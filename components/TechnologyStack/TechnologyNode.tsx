import { LucideIcon } from "lucide-react";

interface TechnologyNodeProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export default function TechnologyNode({
  icon: Icon,
  title,
  description,
  items,
}: TechnologyNodeProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#19D3B4]
        hover:shadow-[0_30px_70px_rgba(25,211,180,0.15)]
      "
    >
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#19D3B4]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3B4]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#19D3B4]">
        <Icon
          size={34}
          className="text-[#19D3B4] transition duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mt-7 text-2xl font-bold text-[#071B4D]">
        {title}
      </h3>

      <p className="mt-3 text-[15px] leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:bg-[#19D3B4]/10 group-hover:text-[#19D3B4]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
