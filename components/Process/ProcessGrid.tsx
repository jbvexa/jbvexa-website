"use client";

import ProcessCard from "./ProcessCard";
import { processSteps } from "./processData";

export default function ProcessGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {processSteps.map((step) => (
        <ProcessCard
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          icon={step.icon}
        />
      ))}
    </div>
  );
}