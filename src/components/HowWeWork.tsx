const steps = [
  {
    num: "01",
    title: "Deep Diagnosis",
    body: "We map every process, workflow, and knowledge dependency in your company. We find where the real work happens — and where it gets stuck.",
  },
  {
    num: "02",
    title: "Architecture Design",
    body: "We design your AI-first operating model — a full redesign of how work flows through your organization, not a chatbot strategy.",
  },
  {
    num: "03",
    title: "Build the Brain",
    body: "We extract and structure your company's domain knowledge into an executable layer that AI agents can actually use.",
  },
  {
    num: "04",
    title: "Deploy & Automate",
    body: "We build and ship the AI pipelines, agents, and integrations that replace manual processes — with human oversight where it matters.",
  },
  {
    num: "05",
    title: "Close the Loop",
    body: "We connect your intelligence layer so every interaction, outcome, and metric feeds back into improvement. Your company starts learning.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-28 px-6 lg:px-8 border-y border-white/[0.06] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
              Our process
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight tracking-tight mb-8">
              From the heart,
              <br />
              not the surface
            </h2>
            <p className="text-white/40 leading-relaxed text-lg mb-10 max-w-md">
              Most consultancies bolt tools onto existing processes. We redesign
              the processes themselves. The result isn&apos;t a company that uses AI
              — it&apos;s a company that runs on AI.
            </p>
            <blockquote className="p-6 rounded-2xl border border-[#D42B2B]/15 bg-[#D42B2B]/[0.04]">
              <p className="text-[#E84444]/70 text-[15px] leading-relaxed italic">
                &ldquo;Teams that build a true AI operating layer cut sprint time in
                half and ship twice as much. The bottleneck was never the tools
                — it was the missing intelligence layer.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right — Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 pb-10 relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-[22px] top-12 bottom-0 w-px bg-gradient-to-b from-[#D42B2B]/20 to-transparent" />
                )}
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-[#D42B2B]/20 bg-[#D42B2B]/[0.05] flex items-center justify-center text-xs font-mono font-bold text-[#D42B2B]/40 z-10">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-white font-bold mb-2 text-[17px]">{step.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
