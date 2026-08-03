import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#19D3B4]/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0F5DBB]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <AboutImage />

        <AboutContent />

      </div>

    </section>
  );
}