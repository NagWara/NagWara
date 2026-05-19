export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 overflow-hidden bg-[#fafafa]">
      {/* Very faint red at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,43,43,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[860px] mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/[0.08] bg-white text-[#111]/50 text-xs mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D42B2B]" />
          AI-First Business Transformation
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-[#111] mb-6">
          <span className="gradient-text">Your company,</span>
          <br />
          rebuilt for AI.
        </h1>

        <p className="text-[clamp(1rem,2vw,1.2rem)] text-[#111]/45 max-w-[560px] mx-auto leading-relaxed mb-10">
          NagWara transforms businesses from the inside out — rebuilding the
          processes that power your company so AI does the work, not just assists it.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#111] hover:bg-[#333] text-white font-semibold text-sm transition-all shadow-sm">
            Start your transformation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-black/[0.12] hover:border-black/[0.2] hover:bg-black/[0.03] text-[#111]/60 hover:text-[#111] text-sm font-medium transition-all">
            See how it works
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 flex items-center justify-center divide-x divide-black/[0.08]">
          {[
            { n: "10×", label: "faster delivery" },
            { n: "−60%", label: "operational cost" },
            { n: "∞", label: "scale ceiling" },
          ].map((s) => (
            <div key={s.label} className="px-10 flex flex-col items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-[#111]">{s.n}</span>
              <span className="text-xs text-[#111]/35 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 divider" />
    </section>
  );
}
