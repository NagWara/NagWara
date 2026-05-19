"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-[#111]/30 uppercase tracking-widest mb-4">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#111] mb-5">
              Ready to become<br />
              <span className="gradient-text">AI-first?</span>
            </h2>
            <p className="text-[#111]/45 leading-relaxed max-w-sm mb-8">
              No boilerplate decks. No one-size-fits-all proposals. Tell us where you are and we&apos;ll scope an engagement that actually fits.
            </p>
            <div className="space-y-3 text-sm text-[#111]/40">
              {["Reply within one business day", "No sales call required to start", "Scoped engagement, clear deliverables"].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D42B2B] flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="rounded-xl border border-black/[0.07] bg-white p-12 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full border border-black/[0.1] bg-[#f5f5f5] flex items-center justify-center mx-auto mb-4 text-[#111] text-lg">✓</div>
                <h3 className="text-[#111] font-semibold text-lg mb-1">Message received</h3>
                <p className="text-[#111]/40 text-sm">We&apos;ll reach out within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="rounded-xl border border-black/[0.07] bg-white p-8 flex flex-col gap-4 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Name", type: "text", placeholder: "Jane Smith" },
                    { label: "Email", type: "email", placeholder: "jane@company.com" },
                  ].map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#111]/40 font-medium uppercase tracking-wider">{f.label}</label>
                      <input type={f.type} required placeholder={f.placeholder}
                        className="bg-[#f7f7f7] border border-black/[0.08] rounded-lg px-3.5 py-2.5 text-[#111] placeholder-black/20 text-sm focus:outline-none focus:border-[#D42B2B]/30 focus:bg-white transition-all" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#111]/40 font-medium uppercase tracking-wider">Company</label>
                  <input type="text" placeholder="Your company name"
                    className="bg-[#f7f7f7] border border-black/[0.08] rounded-lg px-3.5 py-2.5 text-[#111] placeholder-black/20 text-sm focus:outline-none focus:border-[#D42B2B]/30 focus:bg-white transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#111]/40 font-medium uppercase tracking-wider">What are you trying to achieve?</label>
                  <textarea required rows={4} placeholder="Describe your current situation and what transformation you're looking for..."
                    className="bg-[#f7f7f7] border border-black/[0.08] rounded-lg px-3.5 py-2.5 text-[#111] placeholder-black/20 text-sm focus:outline-none focus:border-[#D42B2B]/30 focus:bg-white transition-all resize-none" />
                </div>
                <button type="submit"
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] hover:bg-[#333] text-white font-semibold text-sm transition-all shadow-sm">
                  Send message
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
