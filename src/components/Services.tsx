import { Brain, Cpu, Network, Layers } from "lucide-react";

const services = [
  {
    icon: Layers,
    tag: "01",
    title: "AI-Native Service Delivery",
    body: "We redesign your service operations so AI executes — not assists. Reliable, scalable AI pipelines replace human intermediaries and deliver the same quality at a fraction of the cost.",
    points: ["End-to-end AI workflows", "Manual bottleneck elimination", "Built-in quality loops"],
  },
  {
    icon: Brain,
    tag: "02",
    title: "Company Brain",
    body: "The biggest blocker to AI automation isn't model quality — it's domain knowledge. We extract critical know-how from heads, emails, Slack, and tickets into an executable skills layer for your agents.",
    points: ["Knowledge extraction & structuring", "Living documentation systems", "Executable AI skills files"],
  },
  {
    icon: Network,
    tag: "03",
    title: "Software for Agents",
    body: "The next trillion internet users are AI agents. They need machine-readable software. We rebuild your tools with proper APIs, MCPs, CLIs, and docs agents can discover programmatically.",
    points: ["Agent-ready API design", "MCP & CLI interfaces", "Programmatic onboarding"],
  },
  {
    icon: Cpu,
    tag: "04",
    title: "AI Operating System",
    body: "The best AI-native companies are entirely queryable. Every meeting, ticket, and customer interaction feeds an intelligence layer that learns. We build that layer — the one product that doesn't exist yet.",
    points: ["Full-stack context integration", "Unified intelligence layer", "Closed-loop feedback"],
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <p className="text-xs font-medium text-[#111]/30 uppercase tracking-widest mb-4">What we do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-lg text-[#111]">
            Four pillars of <span className="gradient-text">transformation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title}
                className={`group rounded-xl border p-8 flex flex-col gap-5 transition-all duration-200 hover:shadow-md ${
                  s.highlight
                    ? "border-[#D42B2B]/20 bg-[#D42B2B]/[0.03] hover:shadow-[#D42B2B]/10"
                    : "border-black/[0.07] bg-white hover:shadow-black/[0.06]"
                }`}>
                <div className="flex items-start justify-between">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    s.highlight ? "bg-[#D42B2B]/10 text-[#D42B2B]" : "bg-[#f0f0f0] text-[#111]/50"
                  }`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-[11px] font-medium text-[#111]/25 tracking-widest uppercase tabular-nums">
                    {s.tag}{s.highlight ? " — The big one" : ""}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#111] mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-[#111]/45 text-sm leading-relaxed">{s.body}</p>
                </div>
                <ul className="space-y-1.5 mt-auto pt-4 border-t border-black/[0.06]">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-[#111]/40">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${s.highlight ? "bg-[#D42B2B]" : "bg-[#111]/30"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
