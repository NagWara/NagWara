export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#D42B2B]/[0.07] blur-[160px]" />
        <div className="absolute top-[60%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#D42B2B]/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D42B2B]/20 bg-[#D42B2B]/[0.07] text-[#E84444] text-xs font-semibold mb-10 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D42B2B] animate-pulse" />
          AI-First Transformation
        </div>

        {/* Headline — onyx-style: short, massive, punchy */}
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight text-white leading-[1.0] mb-6">
          Your company,
          <br />
          rebuilt for AI.
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light mb-12">
          NagWara transforms businesses from the inside out — not with chatbots
          bolted on top, but by rebuilding the processes that power your company.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#D42B2B] hover:bg-[#E03535] text-white font-bold text-base transition-all shadow-2xl shadow-[#D42B2B]/30 hover:shadow-[#D42B2B]/40 hover:-translate-y-0.5"
          >
            Start your transformation
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-white/[0.10] hover:border-white/[0.18] text-white/60 hover:text-white font-medium text-base transition-all hover:-translate-y-0.5"
          >
            See how it works
          </a>
        </div>

        {/* Stat strip */}
        <div className="mt-20 grid grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden max-w-lg mx-auto">
          {[
            { n: "2×", label: "faster delivery" },
            { n: "−60%", label: "operational cost" },
            { n: "∞", label: "scale ceiling" },
          ].map((s) => (
            <div key={s.label} className="bg-[#050508] py-5 flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white">{s.n}</span>
              <span className="text-xs text-white/30">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/15" />
        scroll
      </div>
    </section>
  );
}
