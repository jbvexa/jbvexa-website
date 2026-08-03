import {
  Mail,
  Phone,
  Briefcase,
  LifeBuoy,
  Globe,
  MapPin,
} from "lucide-react";

export default function FooterContact() {
  return (
    <div>

      <h3 className="text-lg font-semibold text-white">
        Contact
      </h3>

      <div className="mt-6 space-y-5">

        <div className="flex items-start gap-3">
          <Mail size={18} className="mt-1 text-[#19D3B4]" />
          <div>
            <p className="text-sm text-slate-500">
              General Enquiries
            </p>
            <a
              href="mailto:info@jbvexa.com"
              className="transition hover:text-[#19D3B4]"
            >
              info@jbvexa.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <LifeBuoy size={18} className="mt-1 text-[#19D3B4]" />
          <div>
            <p className="text-sm text-slate-500">
              Technical Support
            </p>
            <a
              href="mailto:support@jbvexa.com"
              className="transition hover:text-[#19D3B4]"
            >
              support@jbvexa.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
  <Phone size={18} className="mt-1 text-[#19D3B4]" />
  <div>
    <p className="text-sm text-slate-500">
      Business Enquiries
    </p>
    <a
      href="tel:+919619523623"
      className="transition hover:text-[#19D3B4]"
    >
      +91 96195 23623
    </a>
  </div>
</div>

        <div className="flex items-start gap-3">
          <Briefcase size={18} className="mt-1 text-[#19D3B4]" />
          <div>
            <p className="text-sm text-slate-500">
              Careers
            </p>
            <a
              href="mailto:careers@jbvexa.com"
              className="transition hover:text-[#19D3B4]"
            >
              careers@jbvexa.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Globe size={18} className="mt-1 text-[#19D3B4]" />
          <a
            href="https://www.jbvexa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#19D3B4]"
          >
            www.jbvexa.com
          </a>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-1 text-[#19D3B4]" />
          <p className="leading-7 text-slate-400">
            Thane, Maharashtra
          </p>
        </div>

      </div>

    </div>
  );
}