import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";

import ServicesHero from "@/components/Services/Services";
import Services from "@/components/Services/Services";
import TechnologyStack from "@/components/TechnologyStack/TechnologyStack";
import Process from "@/components/Process/Process";

import ServiceSection from "@/components/Services/ServiceSection";
import { servicesData } from "@/components/Services/servicesData";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <ServicesHero />

        {/* Overview Cards */}
        <Services />

        {/* Artificial Intelligence */}
        <ServiceSection
          data={servicesData.ai}
        />

        {/* Technology */}
        <TechnologyStack />

        {/* Process */}
        <Process />

        {/* Contact */}
        <Contact />

      </main>
    </>
  );
}