import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Industries from "@/components/Industries/Industries";
import Navbar from "@/components/Navbar/Navbar";
import Process from "@/components/Process/Process";
import Services from "@/components/Services/Services";
import TechnologyStack from "@/components/TechnologyStack/TechnologyStack";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="industries"><Industries /></div>
        <TechnologyStack />
        <div id="process"><Process /></div>
        <WhyChooseUs />
        <WhyChooseUs />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
