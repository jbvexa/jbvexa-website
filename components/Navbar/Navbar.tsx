"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Industries", href: "#industries", id: "industries" },
  { label: "Contact", href: "#contact-form", id: "contact-form"},
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavigation = () => {
      setIsScrolled(window.scrollY > 12);
      const current = [...links].reverse().find(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 150;
      });
      if (current) setActiveId(current.id);
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? "border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl" : "border-transparent bg-white"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center" aria-label="JBVEXA home">
          <Image src="/images/logo.png" alt="JBVEXA Technologies" width={260} height={75} className="h-24 w-auto" priority />
        </a>

        <nav className="hidden gap-7 text-sm font-semibold text-[#071B4D] md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.id} href={link.href} className={`relative py-2 transition hover:text-[#19D3B4] ${activeId === link.id ? "text-[#19D3B4] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#19D3B4]" : ""}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact-form" className="rounded-lg bg-[#071B4D] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0F5DBB] hover:shadow-lg">
          Get Started
        </a>
      </div>
    </header>
  );
}
