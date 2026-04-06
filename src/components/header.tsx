"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#services", label: "บริการ", labelEn: "Services" },
  { href: "/#projects", label: "ผลงาน", labelEn: "Projects" },
  { href: "/#about", label: "เกี่ยวกับเรา", labelEn: "About" },
  { href: "/#contact", label: "ติดต่อ", labelEn: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="K.S.Manufactory 1991">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-900 text-white font-bold text-lg shadow-sm">
            KS
          </div>
          <div className="leading-tight">
            <div className={`font-bold tracking-tight ${scrolled ? "text-brand-900" : "text-brand-900"}`}>
              K.S.Manufactory
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-brand-500">
              Since 1991
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-800 hover:text-accent-dark transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-800 transition-colors"
          >
            ขอใบเสนอราคา
          </Link>
        </nav>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-md text-brand-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h18" strokeLinecap="round" />
                <path d="M3 12h18" strokeLinecap="round" />
                <path d="M3 18h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-100 bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-2 py-3 text-brand-800 font-medium border-b border-brand-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
                <span className="text-brand-400 text-xs ml-2">{l.labelEn}</span>
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-3 rounded-full bg-brand-900 px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              ขอใบเสนอราคา
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
