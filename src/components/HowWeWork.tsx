const steps = [
  { num: "01", title: "Deep Diagnosis", body: "We map every process, workflow, and knowledge dependency in your company — finding where the real work happens and where it gets stuck." },
  { num: "02", title: "Architecture Design", body: "We design your AI-first operating model: a full redesign of how work flows through your organization, not a chatbot strategy." },
  { num: "03", title: "Build the Brain", body: "We extract and structure your company's domain knowledge into an executable layer that AI agents can actually use." },
  { num: "04", title: "Deploy & Automate", body: "We build and ship the AI pipelines, agents, and integrations that replace manual processes — with human oversight where it matters." },
  { num: "05", title: "Close the Loop", body: "We connect your intelligence layer so every interaction, outcome, and metric feeds back into improvement. Your company starts learning." },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="divider mb-16" />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-medium text-[#111]/30 uppercase tracking-widest mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#111] mb-6">
              From the heart,<br />not the surface
            </h2>
            <p className="text-[#111]/45 leading-relaxed text-base mb-8 max-w-sm">
              Most consultancies bolt tools onto existing processes. We redesign the processes themselves — the result isn&apos;t a company that uses AI, it&apos;s a company that runs on AI.
            </p>
            <blockquote className="pl-4 border-l-2 border-[#D42B2B]/25">
              <p className="text-[#111]/40 text-sm leading-relaxed italic">
                &ldquo;Teams that build a true AI operating layer cut sprint time in half and ship twice as much. The bottleneck was never the tools.&rdquo;
              </p>
            </blockquote>
          </div>

          <div>
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-5 pb-8 relative group">
                {i < steps.length - 1 && (
                  <div className="absolute left-[17px] top-10 bottom-0 w-px bg-gradient-to-b from-black/[0.08] to-transparent" />
                )}
                <div className="flex-shrink-0 w-9 h-9 rounded-full border border-black/[0.1] bg-[#f7f7f7] flex items-center justify-center text-[11px] font-mono text-[#111]/30 z-10 group-hover:border-[#D42B2B]/30 group-hover:text-[#D42B2B]/60 group-hover:bg-[#D42B2B]/[0.04] transition-all">
                  {step.num}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-[#111] font-semibold mb-1.5 tracking-tight">{step.title}</h3>
                  <p className="text-[#111]/40 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mt-16" />
      </div>
    </section>
  );
}
