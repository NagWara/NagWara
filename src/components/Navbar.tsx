"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NagWaraIcon } from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050508]/85 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <NagWaraIcon className="h-7 w-auto text-[#D42B2B]" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-white text-[17px] tracking-[-0.01em]">
              NagWara
            </span>
            <span className="text-[#D42B2B] text-[8.5px] font-bold tracking-[0.2em] uppercase mt-0.5">
              AI‑First Business
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#D42B2B] hover:bg-[#E03535] text-white text-sm font-semibold transition-all shadow-lg shadow-[#D42B2B]/20"
        >
          Let's talk
        </a>

        <button
          className="md:hidden text-white/60 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#050508]/98 backdrop-blur-2xl border-b border-white/[0.06] px-6 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors py-2.5 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#D42B2B] text-white text-sm font-semibold"
          >
            Let's talk
          </a>
        </div>
      )}
    </header>
  );
}
