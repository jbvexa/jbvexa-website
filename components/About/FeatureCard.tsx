import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
}: Props) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19D3B4]/10">
        <Icon
          size={24}
          className="text-[#19D3B4]"
        />
      </div>

      <p className="text-lg font-semibold text-[#071B4D]">
        {title}
      </p>

    </div>
  );
}