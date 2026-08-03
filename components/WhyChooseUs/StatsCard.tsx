"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  number: string;
  title: string;
}

export default function StatsCard({ number, title }: Props) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const match = number.match(/^(\d+)(.*)$/);
  const target = Number(match?.[1] ?? 0);
  const suffix = match?.[2] ?? "";

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.45 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 900;
    const startedAt = performance.now();
    let frame = 0;
    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <div ref={cardRef} className="rounded-3xl border border-white bg-white p-8 text-center shadow-xl transition duration-500 hover:-translate-y-2 hover:border-[#19D3B4]/30 hover:shadow-2xl">
      <h2 className="text-5xl font-bold text-[#19D3B4]">{value}{suffix}</h2>
      <p className="mt-3 text-lg font-semibold text-[#071B4D]">{title}</p>
    </div>
  );
}
