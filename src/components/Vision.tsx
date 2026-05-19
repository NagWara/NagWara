export default function Vision() {
  return (
    <section id="vision" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D42B2B]/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
            The destination
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight tracking-tight mb-6">
            The AI Operating System
            <br />
            <span className="gradient-text">for your company</span>
          </h2>
          <p className="text-white/40 text-xl leading-relaxed max-w-2xl font-light">
            Every meeting recorded. Every ticket tracked. Every customer
            interaction captured and legible to an intelligence layer that learns.
            A company that runs as a closed loop.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            {
              icon: "📥",
              title: "Everything Captured",
              body: "Every Slack message, meeting, support ticket, GitHub commit, and customer call — automatically captured and structured.",
            },
            {
              icon: "🧠",
              title: "One Intelligence Layer",
              body: "A unified context layer connects all sources. No siloed tools. No brittle glue code. No knowledge that only lives in someone's head.",
            },
            {
              icon: "🔄",
              title: "Closed-Loop Improvement",
              body: "Sprint velocity, customer satisfaction, delivery quality — all feed back and improve the next cycle automatically.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-9 hover:border-[#D42B2B]/20 hover:bg-[#D42B2B]/[0.03] transition-all duration-300"
            >
              <div className="text-3xl mb-6">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-white/35 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Tools strip */}
        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-8">
          <p className="text-center text-white/25 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            We integrate your entire stack
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Slack", "Linear", "GitHub", "Notion", "Jira",
              "Confluence", "HubSpot", "Zendesk", "Loom", "Zoom",
              "Google Workspace", "& more",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/35 text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
