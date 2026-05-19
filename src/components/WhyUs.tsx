const reasons = [
  {
    title: "We go all the way in",
    body: "We don't sell workshops. We engage deeply, get our hands dirty in your actual systems, and don't leave until the transformation is real.",
  },
  {
    title: "AI-first, not AI-added",
    body: "We redesign processes from first principles for an AI world — not retrofitting AI onto legacy thinking.",
  },
  {
    title: "We build the Company Brain",
    body: "No other consultancy systematically extracts and structures the domain knowledge that makes AI agents actually work inside your company.",
  },
  {
    title: "We close the loop",
    body: "We build the feedback layer that makes your company smarter over time. Not just tools — a self-improving system.",
  },
  {
    title: "We know the full stack",
    body: "From agent architecture to knowledge graphs to API design for agents — engineering depth, not just strategic advice.",
  },
  {
    title: "We stay honest",
    body: "We tell you exactly where AI delivers a step-change, where it helps at the margins, and where humans still win.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 px-6 lg:px-8 border-t border-white/[0.06] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
            Why NagWara
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight tracking-tight">
            Different
            <br />
            <span className="gradient-text">by design</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-3xl overflow-hidden">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-[#050508] px-9 py-10 hover:bg-[#D42B2B]/[0.04] transition-colors duration-300 group cursor-default"
            >
              <h3 className="text-white font-bold mb-3 text-[17px] group-hover:text-[#E84444] transition-colors">
                {r.title}
              </h3>
              <p className="text-white/30 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
