import { CheckCircle2, Mail } from "lucide-react";

const services = ["AI Solutions", "Cloud Engineering", "Data & BI", "Software Development"];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#071B4D] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <span className="rounded-full border border-[#19D3B4]/40 bg-[#19D3B4]/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#54E0C8]">LET&apos;S BUILD TOGETHER</span>
          <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">Ready to transform your business?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">From a focused digital initiative to enterprise-wide transformation, our team helps you move forward with confidence.</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((service) => <li key={service} className="flex items-center gap-3 font-medium text-slate-100"><CheckCircle2 size={19} className="text-[#19D3B4]" />{service}</li>)}
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-8 text-[#071B4D] shadow-2xl sm:p-10">
          <h3 className="text-2xl font-bold">Start a conversation</h3>
          <p className="mt-3 leading-7 text-slate-600">Tell us about your goals and we&apos;ll help identify the right next step.</p>
          <a href="mailto:info@jbvexa.com" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#19D3B4] px-5 py-4 font-semibold text-[#071B4D] transition hover:-translate-y-0.5 hover:bg-[#54E0C8] hover:shadow-lg">
            <Mail size={18} /> Schedule consultation
          </a>
          <a href="mailto:info@jbvexa.com" className="mt-5 block text-center font-semibold text-[#0F9E9A] hover:underline">info@jbvexa.com</a>
        </div>
      </div>
    </section>
  );
}
