"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        {/* =========================
            LOGO
        ========================= */}

        <Link
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 transition-all duration-300 group-hover:border-[#D4AF37]/70 group-hover:bg-[#D4AF37]/15 sm:h-10 sm:w-10">
            <span className="text-base font-bold text-[#D4AF37] sm:text-lg">
              L
            </span>
          </div>

          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Life<span className="text-[#D4AF37]">OS</span>
          </span>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <div className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 md:flex">

          <NavLink href="/#features">
            Features
          </NavLink>

          <NavLink href="/dashboard">
            Dashboard
          </NavLink>

          <NavLink href="/goals">
            Goals
          </NavLink>

          <NavLink href="/about">
            About
          </NavLink>

        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-200 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-black transition-all duration-300 md:hidden ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">

          <div className="flex flex-col gap-1">

            <MobileNavLink
              href="/#features"
              onClick={closeMenu}
            >
              Features
            </MobileNavLink>

            <MobileNavLink
              href="/dashboard"
              onClick={closeMenu}
              highlight
            >
              Dashboard
            </MobileNavLink>

            <MobileNavLink
              href="/goals"
              onClick={closeMenu}
            >
              Goals
            </MobileNavLink>

            <MobileNavLink
              href="/about"
              onClick={closeMenu}
            >
              About
            </MobileNavLink>

          </div>

        </div>
      </div>
    </header>
  );
}


/* =========================================
   DESKTOP NAV LINK
========================================= */

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
    >
      {children}
    </Link>
  );
}


/* =========================================
   MOBILE NAV LINK
========================================= */

function MobileNavLink({
  href,
  children,
  onClick,
  highlight = false,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
        highlight
          ? "bg-[#D4AF37]/[0.08] text-[#D4AF37] hover:bg-[#D4AF37]/[0.12]"
          : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
