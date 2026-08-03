"use client";

import ServicesHeader from "./ServiceHeader";
import ServiceCard from "./ServiceCard";

import {
  BrainCircuit,
  Cloud,
  Database,
  Code2,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFC] py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-[#19D3B4]/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#0F5DBB]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* <ServiceHeader/> */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <ServiceCard
            icon={BrainCircuit}
            title="Artificial Intelligence"
            description="Generative AI, intelligent automation and enterprise AI solutions."
          />

          <ServiceCard
            icon={Cloud}
            title="Cloud Engineering"
            description="AWS, Azure and OCI cloud migration, modernization and DevOps."
          />

          <ServiceCard
            icon={Database}
            title="Data Engineering"
            description="ETL pipelines, Data Warehousing, Data Lakes and enterprise platforms."
          />

          <ServiceCard
            icon={Code2}
            title="Software Development"
            description="Modern web applications, APIs, enterprise software and microservices."
          />

          <ServiceCard
            icon={BarChart3}
            title="Business Intelligence"
            description="Tableau, Power BI, executive dashboards and business analytics."
          />

          <ServiceCard
            icon={ShieldCheck}
            title="Cyber Security"
            description="VAPT, IAM, Governance, Risk, Compliance and enterprise security."
          />

        </div>

      </div>

    </section>
  );
}