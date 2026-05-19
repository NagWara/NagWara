import { Brain, Cpu, Network, Layers } from "lucide-react";

const services = [
  {
    icon: Layers,
    accent: "#D42B2B",
    tag: "01",
    title: "AI-Native Service Delivery",
    body: "We redesign your service operations so AI executes — not assists. Human intermediaries replaced with reliable, scalable AI pipelines that deliver the same quality at a fraction of the cost.",
    points: ["End-to-end AI workflows", "Manual bottleneck elimination", "Built-in quality loops"],
  },
  {
    icon: Brain,
    accent: "#e05a1a",
    tag: "02",
    title: "Company Brain",
    body: "The biggest blocker to AI automation isn't model quality — it's domain knowledge. We pull critical know-how from heads, emails, Slack, and tickets into an executable skills layer for your agents.",
    points: ["Knowledge extraction & structuring", "Living documentation systems", "Executable AI skills files"],
  },
  {
    icon: Network,
    accent: "#c0392b",
    tag: "03",
    title: "Software for Agents",
    body: "The next trillion internet users are AI agents. They need different software. We rebuild your tools to be machine-readable: proper APIs, MCPs, CLIs, and docs agents can discover programmatically.",
    points: ["Agent-ready API design", "MCP & CLI interfaces", "Programmatic onboarding"],
  },
  {
    icon: Cpu,
    accent: "#a93226",
    tag: "04 — The Big One",
    title: "AI Operating System",
    body: "The best AI-native companies are entirely queryable. Every meeting, ticket, and customer interaction feeds an intelligence layer that learns from it. We build that layer for you.",
    points: ["Full-stack context integration", "Unified intelligence layer", "Closed-loop feedback"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
            What we do
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight tracking-tight max-w-xl">
            Four pillars of
            <br />
            <span className="gradient-text">AI transformation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-9 flex flex-col gap-6 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ background: `${s.accent}18`, color: s.accent }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-white/20 tracking-widest uppercase">
                    {s.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-[15px]">{s.body}</p>
                </div>

                <ul className="space-y-2 pt-5 border-t border-white/[0.06] mt-auto">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-white/35">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: s.accent }}
                      />
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
