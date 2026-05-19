export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium text-[#111]/30 uppercase tracking-widest mb-4">The destination</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#111] mb-5">
            The AI Operating System<br />
            <span className="gradient-text">for your company</span>
          </h2>
          <p className="text-[#111]/45 text-lg leading-relaxed">
            Every meeting recorded. Every ticket tracked. Every customer interaction legible
            to an intelligence layer that learns. A company that runs as a closed loop.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {[
            { icon: "📥", title: "Everything Captured", body: "Every Slack message, meeting, ticket, commit, and customer call — automatically captured and structured." },
            { icon: "🧠", title: "One Intelligence Layer", body: "A unified context layer. No siloed tools, no brittle glue code, no knowledge living only in someone's head." },
            { icon: "🔄", title: "Closed-Loop Improvement", body: "Sprint velocity, satisfaction, delivery quality — all feed back and improve the next cycle automatically." },
          ].map((item) => (
            <div key={item.title}
              className="rounded-xl border border-black/[0.07] bg-white p-7 hover:shadow-md hover:shadow-black/[0.05] transition-all duration-200">
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-[#111] font-semibold mb-2 tracking-tight">{item.title}</h3>
              <p className="text-[#111]/40 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-black/[0.07] bg-white p-6 mt-3">
          <p className="text-center text-[#111]/30 text-[11px] font-medium uppercase tracking-widest mb-5">
            Integrates with your entire stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Slack", "Linear", "GitHub", "Notion", "Jira", "Confluence", "HubSpot", "Zendesk", "Loom", "Zoom", "Google Workspace", "& more"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-md bg-[#f5f5f5] border border-black/[0.06] text-[#111]/40 text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
