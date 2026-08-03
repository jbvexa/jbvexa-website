"use client";

import WhyChooseCard from "./WhyChooseCard";
import { whyChooseData } from "./whyChooseData";

export default function WhyChooseGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {whyChooseData.map((item) => (
        <WhyChooseCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}