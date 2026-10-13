"use client";

import Logo from "@/components/Logo";
import { whatsappUrl } from "@/lib/config";
import { navLinks } from "@/lib/content";
import { useScrolledPast } from "@/lib/hooks";

export default function SiteHeader() {
  const isScrolled = useScrolledPast(24);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <Logo aria-label="UB Coffee beranda" />
      <nav aria-label="Navigasi utama">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-order" href={whatsappUrl()} target="_blank" rel="noreferrer">
        Pesan <span>↗</span>
      </a>
    </header>
  );
}
