import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";

import {
  IndustriesHero,
  IndustriesGrid,
} from "@/components/Industries";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main>
        <IndustriesHero />
        <IndustriesGrid />
        <Contact />
      </main>
    </>
  );
}