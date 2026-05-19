export default function ShiftSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-medium text-[#111]/30 uppercase tracking-widest mb-4">The shift</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#111]">
            From copilot to<br />
            <span className="gradient-text">operating system</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Before */}
          <div className="rounded-xl border border-black/[0.07] bg-[#f7f7f7] p-8">
            <span className="inline-flex items-center gap-2 text-xs text-[#111]/35 font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
              2023 – 2025 era
            </span>
            <h3 className="text-2xl font-semibold text-[#111]/40 mb-3 tracking-tight">AI copilots</h3>
            <p className="text-[#111]/35 text-sm leading-relaxed mb-6">
              Tools that assist humans. Useful, but additive. Same processes, same cost structures, same ceiling.
            </p>
            <ul className="space-y-2">
              {["Copilot for writing", "AI search in your docs", "ChatGPT in your workflow"].map((i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-[#111]/30">
                  <span className="w-1 h-1 rounded-full bg-black/20 flex-shrink-0" />{i}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-xl border border-[#D42B2B]/20 bg-[#D42B2B]/[0.03] p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(212,43,43,0.08) 0%, transparent 70%)" }} />
            <span className="inline-flex items-center gap-2 text-xs text-[#D42B2B] font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D42B2B] animate-pulse" />
              Now
            </span>
            <h3 className="text-2xl font-semibold text-[#111] mb-3 tracking-tight">AI-native companies</h3>
            <p className="text-[#111]/55 text-sm leading-relaxed mb-6">
              Companies that skip the human and just do the work. AI operates, doesn&apos;t assist. New cost structures, new scale ceilings, new moats.
            </p>
            <ul className="space-y-2">
              {["Services delivered end-to-end by AI", "Processes that self-improve", "Company knowledge that stays current"].map((i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-[#111]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D42B2B] flex-shrink-0" />{i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-[#111]/30 text-sm mt-10 text-center max-w-lg mx-auto leading-relaxed">
          The total spend on services is many times larger than software. Most is already outsourced — structurally ready for AI-native replacement.
        </p>
      </div>
    </section>
  );
}
