import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Main Card */}
      <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-2xl">

        <Image
          src="/images/logo.png"
          alt="JBVEXA"
          width={320}
          height={320}
        />

      </div>

      {/* Floating Card 1 */}
      <div className="absolute -left-8 top-10 rounded-2xl bg-white p-5 shadow-xl">
        <h3 className="text-3xl font-bold text-[#19D3B4]">
          6+
        </h3>

        <p className="text-sm text-slate-500">
          Technologies
        </p>
      </div>

      {/* Floating Card 2 */}
      <div className="absolute -right-10 bottom-10 rounded-2xl bg-white p-5 shadow-xl">
        <h3 className="text-3xl font-bold text-[#071B4D]">
          100%
        </h3>

        <p className="text-sm text-slate-500">
          Enterprise Solutions
        </p>
      </div>

    </div>
  );
}