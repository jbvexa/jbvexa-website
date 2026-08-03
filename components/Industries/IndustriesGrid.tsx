import IndustryCard from "./IndustryCard";
import { industries } from "./industriesData";

export default function IndustriesGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {industries.map((industry) => (
        <IndustryCard
          key={industry.title}
          {...industry}
        />
      ))}
    </div>
  );
}