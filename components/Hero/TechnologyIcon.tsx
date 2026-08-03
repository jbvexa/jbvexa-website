import { LucideIcon } from "lucide-react";

interface TechnologyIconProps {
  icon: LucideIcon;
  label: string;
  top: string;
  left: string;
}

export default function TechnologyIcon({
  icon: Icon,
  label,
  top,
  left,
}: TechnologyIconProps) {
  return (
    <div
      className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100 transition duration-300 hover:scale-110 hover:shadow-2xl">
        <Icon
          size={34}
          className="text-[#0F5DBB]"
        />
      </div>

      <span className="mt-3 text-sm font-semibold text-[#071B4D]">
        {label}
      </span>
    </div>
  );
}