import Image from "next/image";
import {
  Mail,
  Headphones,
  Briefcase,
  Globe,
  MapPin,
} from "lucide-react";

export default function FooterMain() {
  return (
    <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">

      {/* Company */}

      <div>

        <Image
          src="/images/logo.png"
          alt="JBVEXA"
          width={230}
          height={60}
        />

        <h3 className="mt-8 text-3xl font-bold text-[#19D3B4]">
          Engineering Digital Excellence
        </h3>

        <p className="mt-6 leading-8 text-slate-300">
          We help enterprises accelerate digital transformation
          through Artificial Intelligence, Cloud Engineering,
          Data Engineering, Business Intelligence and modern
          Software Development.
        </p>

      </div>

      {/* Company */}

      <div>

        <h4 className="text-xl font-semibold text-white">
          Company
        </h4>

        <ul className="mt-6 space-y-4 text-slate-300">

          <li>
            <a href="#about" className="hover:text-[#19D3B4]">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-[#19D3B4]">
              Services
            </a>
          </li>

          <li>
            <a href="#industries" className="hover:text-[#19D3B4]">
              Industries
            </a>
          </li>

          <li>
            <a href="#process" className="hover:text-[#19D3B4]">
              Our Process
            </a>
          </li>

        </ul>

      </div>

      {/* Services */}

      <div>

        <h4 className="text-xl font-semibold text-white">
          Services
        </h4>

        <ul className="mt-6 space-y-4 text-slate-300">

          <li>AI Solutions</li>
          <li>Cloud Engineering</li>
          <li>Data Engineering</li>
          <li>Business Intelligence</li>
          <li>Software Development</li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h4 className="text-xl font-semibold text-white">
          Contact
        </h4>

        <div className="mt-6 space-y-5">

          <div className="flex gap-3">

            <Mail className="mt-1 text-[#19D3B4]" size={18} />

            <div>

              <p className="text-sm text-slate-400">
                General Enquiries
              </p>

              <a
                href="mailto:info@jbvexa.com"
                className="font-semibold hover:text-[#19D3B4]"
              >
                info@jbvexa.com
              </a>

            </div>

          </div>

          <div className="flex gap-3">

            <Headphones
              className="mt-1 text-[#19D3B4]"
              size={18}
            />

            <div>

              <p className="text-sm text-slate-400">
                Technical Support
              </p>

              <a
                href="mailto:support@jbvexa.com"
                className="font-semibold hover:text-[#19D3B4]"
              >
                support@jbvexa.com
              </a>

            </div>

          </div>

          <div className="flex gap-3">

            <Briefcase
              className="mt-1 text-[#19D3B4]"
              size={18}
            />

            <div>

              <p className="text-sm text-slate-400">
                Careers
              </p>

              <a
                href="mailto:careers@jbvexa.com"
                className="font-semibold hover:text-[#19D3B4]"
              >
                careers@jbvexa.com
              </a>

            </div>

          </div>

          <div className="flex gap-3">

            <Globe
              className="mt-1 text-[#19D3B4]"
              size={18}
            />

            <a
              href="https://www.jbvexa.com"
              className="font-semibold hover:text-[#19D3B4]"
            >
              www.jbvexa.com
            </a>

          </div>

          <div className="flex gap-3">

            <MapPin
              className="mt-1 text-[#19D3B4]"
              size={18}
            />

            <p className="leading-7 text-slate-300">

              Kopri, Thane, <br />

              Maharashtra 400603

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}