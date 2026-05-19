import { NagWaraIcon } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-10 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <NagWaraIcon className="h-[22px] w-auto text-[#D42B2B]" />
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-[#111]/50 text-[13px]">NagWara</span>
            <span className="text-[#D42B2B]/50 text-[7px] font-bold tracking-[0.2em] uppercase mt-[2px]">AI‑First Business</span>
          </div>
        </div>

        <p className="text-[#111]/25 text-xs">© {new Date().getFullYear()} NagWara SL</p>

        <div className="flex items-center gap-5">
          {[["Services", "#services"], ["How We Work", "#how-we-work"], ["Contact", "#contact"]].map(([l, h]) => (
            <a key={l} href={h} className="text-[#111]/30 hover:text-[#111]/60 text-xs transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
