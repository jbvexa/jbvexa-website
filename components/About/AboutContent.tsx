import {
  Sparkles,
  ShieldCheck,
  Cloud,
  BrainCircuit,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function AboutContent() {
  return (
    <div>

      <span className="rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold text-[#19D3B4]">
        ABOUT JBVEXA
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#071B4D]">
        Engineering Tomorrow&apos;s
        <br />
        Digital Enterprises
      </h2>

      <p className="mt-8 text-lg leading-9 text-slate-600">
  At JBVEXA Technologies, we help businesses modernize,
  automate, and scale through intelligent digital solutions.
  Our expertise spans Artificial Intelligence, Cloud Engineering,
  Data Platforms, Business Intelligence, Enterprise Software,
  and Cyber Security—enabling organizations to innovate faster,
  improve operational efficiency, and achieve sustainable growth.
</p>

      <div className="mt-10 grid gap-5">

        <FeatureCard
          icon={Sparkles}
          title="Innovation First"
        />

        <FeatureCard
          icon={BrainCircuit}
          title="AI Driven Solutions"
        />

        <FeatureCard
          icon={Cloud}
          title="Cloud Native Architecture"
        />

        <FeatureCard
          icon={ShieldCheck}
          title="Enterprise Grade Security"
        />

      </div>

      <button className="mt-10 rounded-xl bg-[#071B4D] px-8 py-4 font-semibold text-white transition hover:bg-[#19D3B4]">
        Explore Our Services →
      </button>

    </div>
  );
}
