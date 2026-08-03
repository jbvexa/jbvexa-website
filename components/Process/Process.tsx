import ProcessHeader from "./ProcessHeader";
import ProcessGrid from "./ProcessGrid";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-[#19D3B4]/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#0F5DBB]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ProcessHeader />

        <ProcessGrid />
      </div>
    </section>
  );
}