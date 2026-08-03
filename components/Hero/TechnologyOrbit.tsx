"use client";

import Image from "next/image";
import {
  BrainCircuit,
  Cloud,
  Database,
  ShieldCheck,
  BarChart3,
  Code2,
} from "lucide-react";

import OrbitConnections from "./OrbitConnections";
import TechnologyCard from "./TechnologyCard";

export default function TechnologyOrbit() {
  return (
    <div className="relative h-[700px] w-[700px]">

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-[#18C7A5]/5 blur-[140px]" />

      {/* Outer Orbit */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#18C7A5]/10" />

      {/* Inner Orbit */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#18C7A5]/8" />

      {/* Connection Lines */}
      <OrbitConnections />

      {/* Center Logo */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        z-20
        flex
        h-56
        w-56
        -translate-x-1/2
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-[#18C7A5]/10
        bg-white
        shadow-[0_20px_80px_rgba(24,199,165,0.18)]
      "
      >
        <Image
          src="/images/Icon.jpg"
          alt="JBVEXA Technologies"
          width={145}
          height={145}
          priority
        />
      </div>

      {/* Cloud */}
      <TechnologyCard
        icon={Cloud}
        title="Cloud Engineering"
        subtitle="AWS • Azure • OCI"
        className="left-1/2 top-0 -translate-x-1/2"
      />

      {/* AI */}
      <TechnologyCard
        icon={BrainCircuit}
        title="AI Solutions"
        subtitle="Automation • GenAI"
        className="left-0 top-28"
      />

      {/* Software */}
      <TechnologyCard
        icon={Code2}
        title="Software Development"
        subtitle="Web • Mobile • Enterprise"
        className="bottom-24 left-0"
      />

      {/* Data */}
      <TechnologyCard
        icon={Database}
        title="Data Engineering"
        subtitle="ETL • Warehousing"
        className="right-0 top-28"
      />

      {/* Analytics */}
      <TechnologyCard
        icon={BarChart3}
        title="Business Intelligence"
        subtitle="Tableau • Power BI"
        className="bottom-24 right-0"
      />

      {/* Security */}
      <TechnologyCard
        icon={ShieldCheck}
        title="Cyber Security"
        subtitle="VAPT • IAM • Compliance"
        className="bottom-0 left-1/2 -translate-x-1/2"
      />

    </div>
  );
}