"use client";

import { useState } from "react";
import {
  Send,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

type FormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "Artificial Intelligence",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{type:"success"|"error"|null;text:string}>({
    type:null,
    text:"",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>
  ) => {
    setFormData(prev => ({...prev,[e.target.name]:e.target.value}));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.message){
      setStatus({
      type: "error",
      text: "Please complete all required fields (Full Name, Email, Phone Number and Project Requirement).",
      });
      return;
    }

    try{
      setLoading(true);
      setStatus({type:null,text:""});

      const res = await fetch("/api/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData),
      });

      const data = await res.json();

      if(!res.ok || !data.success){
        throw new Error();
      }

      setStatus({
        type:"success",
        text: "✅ Thank you! Your enquiry has been received successfully. Our team will review your requirement and contact you within 1 business day.",
      });

      setFormData(initialState);

    }catch{
      setStatus({
        type:"error",
        text: "❌ We couldn't send your enquiry at the moment. Please try again in a few minutes or email us directly at info@jbvexa.com.",
      });
    }finally{
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="bg-[#F8FCFC] pt-36 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">
              Start Your Project
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-[#071B4D]">
              Tell Us About
              <br />
              Your Business
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Whether you're looking for AI solutions, Business Intelligence,
              Cloud Engineering, Data Platforms or Enterprise Software,
              we'd love to understand your business challenges.
            </p>

            <div className="mt-12 space-y-8">

  <div className="flex items-start gap-4">
    <Mail className="mt-1 text-[#19D3B4]" size={22} />
    <div>
      <h3 className="font-semibold text-[#071B4D]">
        Business Email
      </h3>

      <a
  href="mailto:info@jbvexa.com"
  className="mt-2 inline-block text-slate-600 hover:text-[#19D3B4] transition-colors"
>
  info@jbvexa.com
</a>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Phone className="mt-1 text-[#19D3B4]" size={22} />

    <div>
      <h3 className="font-semibold text-[#071B4D]">
        Phone
      </h3>

      <a
  href="tel:+919619523623"
  className="mt-2 inline-block text-slate-600 hover:text-[#19D3B4] transition-colors"
>
  +91 96195 23623
</a>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <MapPin className="mt-1 text-[#19D3B4]" size={22} />

    <div>
      <h3 className="font-semibold text-[#071B4D]">
        Office
      </h3>

      <p className="mt-2 text-slate-600">
        JBVEXA Technologies Pvt. Ltd.
<br />
Thane, Maharashtra, India
        <br />
        India
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Clock className="mt-1 text-[#19D3B4]" size={22} />

    <div>
      <h3 className="font-semibold text-[#071B4D]">
        Business Hours
      </h3>

      <p className="mt-2 text-slate-600">
        Mon – Fri
        <br />
        9:30 AM – 6:30 PM IST
      </p>
    </div>
  </div>

</div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="mb-2 block font-medium text-[#071B4D]">Full Name *</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Rohit Sharma"
                  className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-[#19D3B4]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#071B4D]">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="Acme Manufacturing Pvt. Ltd."
                  className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-[#19D3B4]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-[#071B4D]">Email *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-[#19D3B4]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-[#071B4D]">Phone *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-[#19D3B4]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#071B4D]">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-[#19D3B4]"
                >
                  <option>Artificial Intelligence</option>
                  <option>Cloud Engineering</option>
                  <option>Data Engineering</option>
                  <option>Business Intelligence</option>
                  <option>Software Development</option>
                  <option>Cyber Security</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#071B4D]">Project Requirement *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-[#19D3B4]"
                />
              </div>

              {status.type && (
                <div
  className={`rounded-xl border p-4 text-sm leading-6 ${
    status.type === "success"
      ? "border-green-200 bg-green-50 text-green-700"
      : "border-red-200 bg-red-50 text-red-700"
  }`}
>
  {status.text}
</div>
              )}

              <button
  type="submit"
  disabled={loading}
  className="inline-flex items-center gap-3 rounded-full bg-[#071B4D] px-8 py-4 font-semibold text-white transition hover:bg-[#0F5DBB] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
>
  {loading ? (
    <>
      <Loader2 className="animate-spin" size={18} />
      Sending Inquiry...
    </>
  ) : (
    <>
      Send Inquiry
      <Send size={18} />
    </>
  )}
</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
