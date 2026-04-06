"use client";

import Image from "next/image";
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
          ? "bg-brand-700/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="K.S.Manufactory 1991">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-sm p-1.5">
            <Image src="/images/logo.png" alt="KSM logo" width={40} height={40} className="object-contain" />
          </div>
          <div className="leading-tight text-white">
            <div className="font-extrabold tracking-tight text-base">
              K.S.MANUFACTORY
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
              (1991) Limited
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/90 hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-brand-900 shadow hover:bg-accent-dark hover:text-brand-950 transition-colors"
          >
            ขอใบเสนอราคา
          </Link>
        </nav>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-md text-white"
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
        <div className="md:hidden border-t border-white/15 bg-brand-700">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-2 py-3 text-white font-medium border-b border-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
                <span className="text-white/50 text-xs ml-2">{l.labelEn}</span>
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-3 rounded-md bg-accent px-5 py-3 text-center text-sm font-bold text-brand-900"
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
