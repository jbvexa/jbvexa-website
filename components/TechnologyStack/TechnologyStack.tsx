import TechnologyHeader from "./TechnologyHeader";
import TechnologyNode from "./TechnologyNode";
import { technologies } from "./technologyData";

export default function TechnologyStack() {
  return (
    <section id="technology" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#19D3B4]/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#0F5DBB]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <TechnologyHeader />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyNode
              key={technology.id}
              icon={technology.icon}
              title={technology.title}
              description={technology.description}
              items={technology.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
