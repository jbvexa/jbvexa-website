import Image from "next/image";

export default function FooterBrand() {
  return (
    <div>

      <Image
        src="/images/White-Logo--.png"
        alt="JBVEXA Technologies"
        width={300}
        height={90}
        priority
      />

      <h3 className="mt-6 text-xl font-semibold text-[#19D3B4]">
        Engineering Digital Excellence
      </h3>

      <p className="mt-6 max-w-md leading-8 text-slate-400">
        JBVEXA Technologies Private Limited delivers
        Artificial Intelligence, Cloud Engineering,
        Data Platforms, Business Intelligence and
        Enterprise Software solutions that help
        organizations accelerate digital transformation.
      </p>

    </div>
  );
}