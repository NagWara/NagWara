export default function ShiftSection() {
  return (
    <section className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25 mb-14 text-center">
          The Era Shift
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Before */}
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/30 text-xs font-semibold tracking-wide uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              2023 – 2025
            </div>
            <h3 className="text-3xl font-bold text-white/40 mb-4 leading-tight">
              AI copilots
            </h3>
            <p className="text-white/30 leading-relaxed mb-8 text-[15px]">
              Tools that assist humans. Useful, but fundamentally additive.
              The same processes. The same cost structures. The same ceiling.
            </p>
            <ul className="space-y-3">
              {["Copilot for writing", "AI search in your docs", "ChatGPT in your workflow"].map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/20">
                  <span className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-3xl border border-[#D42B2B]/25 bg-[#D42B2B]/[0.04] p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#D42B2B]/[0.08] rounded-full blur-[80px] pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D42B2B]/10 border border-[#D42B2B]/25 text-[#E84444] text-xs font-semibold tracking-wide uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D42B2B] animate-pulse" />
              Now
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
              AI-native companies
            </h3>
            <p className="text-white/55 leading-relaxed mb-8 text-[15px]">
              Companies that skip the human and just do the work.
              AI doesn&apos;t assist — it operates. New cost structures.
              New scale ceilings. New moats.
            </p>
            <ul className="space-y-3">
              {[
                "Services delivered end-to-end by AI",
                "Processes that self-improve",
                "Company knowledge that stays current",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D42B2B] flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-white/25 text-sm mt-12 max-w-lg mx-auto leading-relaxed">
          The total spend on services is many times larger than software. Most of it is already outsourced — making it structurally ready to be replaced by AI-native delivery.
        </p>
      </div>
    </section>
  );
}
