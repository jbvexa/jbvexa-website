"use client";

import ServiceSection from "./ServiceSection";
import { servicesData } from "./servicesData";

export default function ServicesDetails() {
  return (
    <section className="relative bg-[#F8FCFC]">

      {Object.values(servicesData).map((service, index) => (
        <div
          key={service.id}
          className={index !== 0 ? "border-t border-slate-200/70" : ""}
        >
          <ServiceSection data={service} />
        </div>
      ))}

    </section>
  );
}