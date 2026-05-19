import { NagWaraIcon } from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <NagWaraIcon className="h-6 w-auto text-[#D42B2B]" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-white/60 text-sm">NagWara</span>
            <span className="text-[#D42B2B]/50 text-[7.5px] font-bold tracking-[0.18em] uppercase mt-0.5">
              AI‑First Business
            </span>
          </div>
        </div>

        <p className="text-white/20 text-xs">
          © {year} NagWara SL. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {[
            { label: "Services", href: "#services" },
            { label: "How We Work", href: "#how-we-work" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/25 hover:text-white/55 text-xs transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
