const reasons = [
  { title: "We go all the way in", body: "We don't sell workshops. We engage deeply, get our hands dirty in your actual systems, and don't leave until the transformation is real." },
  { title: "AI-first, not AI-added", body: "We redesign processes from first principles — not retrofitting AI onto legacy thinking." },
  { title: "We build the Company Brain", body: "No other consultancy systematically extracts and structures the domain knowledge that makes AI agents work inside your company." },
  { title: "We close the loop", body: "We build the feedback layer that makes your company smarter over time — a self-improving system, not just a set of tools." },
  { title: "We know the full stack", body: "From agent architecture to knowledge graphs to agent-ready API design — engineering depth, not just strategic advice." },
  { title: "We stay honest", body: "We tell you exactly where AI delivers a step-change, where it helps at the margins, and where humans still win." },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="divider mb-16" />

        <div className="mb-14">
          <p className="text-xs font-medium text-[#111]/30 uppercase tracking-widest mb-4">Why NagWara</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#111]">
            Different <span className="gradient-text">by design</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reasons.map((r) => (
            <div key={r.title}
              className="rounded-xl border border-black/[0.07] bg-[#fafafa] p-7 hover:bg-white hover:shadow-md hover:shadow-black/[0.05] transition-all duration-200 group cursor-default">
              <h3 className="text-[#111] font-semibold mb-2 tracking-tight group-hover:text-[#D42B2B] transition-colors">{r.title}</h3>
              <p className="text-[#111]/40 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="divider mt-16" />
      </div>
    </section>
  );
}
