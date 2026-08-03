import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="mt-16 border-t border-white/10 pt-8">

      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

        <div>

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              JBVEXA Technologies Private Limited
            </span>
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Engineering Digital Excellence
          </p>

        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

          <Link
            href="/privacy-policy"
            className="text-slate-400 transition hover:text-[#19D3B4]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="text-slate-400 transition hover:text-[#19D3B4]"
          >
            Terms & Conditions
          </Link>

          <Link
            href="/cookie-policy"
            className="text-slate-400 transition hover:text-[#19D3B4]"
          >
            Cookie Policy
          </Link>

        </div>

      </div>

    </div>
  );
}