"use client";

import HeroContent from "./HeroContent";
import TechnologyOrbit from "./TechnologyOrbit";

export default function Hero() {
  return (
    <section id="home"
  className="
  relative overflow-hidden
  bg-gradient-to-br
  from-white
  via-[#F9FFFD]
  to-[#F3FFFC]
"
>

      {/* Background Blur */}
      {/* Left Glow */}
<div className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-[#18C7A5]/10 blur-[140px]" />

{/* Right Glow */}
<div className="absolute -right-32 top-24 h-[520px] w-[520px] rounded-full bg-[#18C7A5]/15 blur-[180px]" />
      {/* Brand Grid Pattern */}
<div
  className="absolute inset-0 opacity-[0.35]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(24,199,165,.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(24,199,165,.06) 1px, transparent 1px)
    `,
    backgroundSize: "42px 42px",
  }}
/>

      <div className="relative z-10 mx-auto grid max-w-[1450px] items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* Left */}
        <HeroContent />

        {/* Right */}
        <div className="relative flex items-center justify-center">

  <div className="absolute h-[650px] w-[650px] rounded-full bg-[#18C7A5]/10 blur-[150px]" />

  <TechnologyOrbit />

</div>

      </div>
    </section>
  );
}
