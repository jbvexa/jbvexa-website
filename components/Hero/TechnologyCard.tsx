"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type TechnologyCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className: string;
};

export default function TechnologyCard({
  icon: Icon,
  title,
  subtitle,
  className,
}: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`absolute ${className}`}
    >
      <div className="w-44 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl">

        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EEF6FF]">
          <Icon
            size={28}
            className="text-[#0F5DBB]"
          />
        </div>

        <h3 className="text-lg font-bold text-[#071B4D]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {subtitle}
        </p>

      </div>
    </motion.div>
  );
}