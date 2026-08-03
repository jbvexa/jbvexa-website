export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071B4D] via-[#0F5DBB] to-[#071B4D] py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#19D3B4]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#19D3B4]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

        <span className="inline-flex rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">
          Our Services
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Engineering Digital Excellence
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-300">
          We deliver secure, scalable and intelligent technology solutions
          that accelerate digital transformation and help organizations
          innovate with confidence.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
            Artificial Intelligence
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
            Cloud Engineering
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
            Data Engineering
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
            Software Development
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
            Business Intelligence
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
            Cyber Security
          </span>

        </div>

      </div>

    </section>
  );
}