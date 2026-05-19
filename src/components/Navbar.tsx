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
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.06] shadow-sm" : ""
    }`}>
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <NagWaraIcon className="h-[26px] w-auto text-[#D42B2B]" />
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-[#111] text-[15px] tracking-tight">NagWara</span>
            <span className="text-[#D42B2B] text-[7.5px] font-bold tracking-[0.2em] uppercase mt-[2px]">AI‑First Business</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3.5 py-1.5 text-sm text-[#111]/50 hover:text-[#111] rounded-md hover:bg-black/[0.04] transition-all">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a href="#contact" className="text-sm text-[#111]/45 hover:text-[#111] transition-colors">
            Contact
          </a>
          <a href="#contact"
            className="px-4 py-1.5 rounded-lg bg-[#111] hover:bg-[#333] text-white text-sm font-semibold transition-all">
            Let&apos;s talk →
          </a>
        </div>

        <button className="md:hidden text-[#111]/50 hover:text-[#111]" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-b border-black/[0.06] px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[#111]/55 hover:text-[#111] py-2.5 text-sm transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center px-4 py-2 rounded-lg bg-[#111] text-white text-sm font-semibold">
            Let&apos;s talk →
          </a>
        </div>
      )}
    </header>
  );
}
