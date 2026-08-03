"use client";

import IndustriesHeader from "./IndustriesHeader";
import IndustryCard from "./IndustryCard";

import {
  Factory,
  CarFront,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
} from "lucide-react";

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-[#19D3B4]/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#0F5DBB]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <IndustriesHeader />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <IndustryCard
            icon={Factory}
            title="Manufacturing"
            description="Smart manufacturing, production analytics and industrial automation."
          />

          <IndustryCard
            icon={CarFront}
            title="Automotive"
            description="Dealer analytics, connected mobility and digital automotive platforms."
          />

          <IndustryCard
            icon={Landmark}
            title="Banking & Finance"
            description="Secure digital banking, analytics, governance and compliance."
          />

          <IndustryCard
            icon={HeartPulse}
            title="Healthcare"
            description="Healthcare platforms, patient analytics and secure digital systems."
          />

          <IndustryCard
            icon={ShoppingCart}
            title="Retail & Commerce"
            description="Customer analytics, inventory optimization and digital commerce."
          />

          <IndustryCard
            icon={Truck}
            title="Logistics"
            description="Supply chain visibility, fleet management and warehouse analytics."
          />

        </div>

      </div>

    </section>
  );
}