import FooterBrand from "./FooterBrand";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

import {
  companyLinks,
  serviceLinks,
  technologyLinks,
} from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-[#071B4D] text-white">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]">

          <FooterBrand />

          <FooterColumn
            title="Company"
            items={companyLinks}
          />

          <FooterColumn
            title="Services"
            items={serviceLinks}
          />

          <FooterColumn
            title="Technology"
            items={technologyLinks}
          />

          <FooterContact />

        </div>

        <FooterBottom />

      </div>

    </footer>
  );
}