"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D42B2B]/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
            Get in touch
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight tracking-tight mb-5">
            Ready to become
            <br />
            <span className="gradient-text">AI-first?</span>
          </h2>
          <p className="text-white/35 text-lg max-w-md mx-auto leading-relaxed font-light">
            No boilerplate decks. No one-size-fits-all proposals. Tell us
            where you are — we&apos;ll scope an engagement that actually fits.
          </p>
        </div>

        {sent ? (
          <div className="rounded-3xl border border-[#D42B2B]/20 bg-[#D42B2B]/[0.05] p-14 text-center">
            <div className="w-14 h-14 rounded-full border border-[#D42B2B]/30 bg-[#D42B2B]/10 flex items-center justify-center mx-auto mb-5 text-[#E84444] text-xl font-bold">
              ✓
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Message received</h3>
            <p className="text-white/35 text-sm">We&apos;ll reach out within one business day.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-10 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/35 font-bold uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-[#D42B2B]/35 focus:bg-white/[0.06] transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/35 font-bold uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-[#D42B2B]/35 focus:bg-white/[0.06] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-white/35 font-bold uppercase tracking-wider">Company</label>
              <input
                type="text"
                placeholder="Your company name"
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-[#D42B2B]/35 focus:bg-white/[0.06] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-white/35 font-bold uppercase tracking-wider">
                What are you trying to achieve?
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your current situation and what transformation you're looking for..."
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-[#D42B2B]/35 focus:bg-white/[0.06] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="group mt-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#D42B2B] hover:bg-[#E03535] text-white font-bold text-sm transition-all shadow-xl shadow-[#D42B2B]/20 hover:shadow-[#D42B2B]/30 hover:-translate-y-0.5"
            >
              <Send size={15} />
              Send message
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
