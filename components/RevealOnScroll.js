"use client";

import { useEffect } from "react";

// Menambahkan class "is-visible" pada setiap elemen [data-reveal] saat masuk layar.
// Jenis animasinya diatur lewat nilai atributnya (lihat bagian "Scroll reveal" di globals.css):
//   data-reveal="up" | "left" | "right" | "zoom" | "text"
// Untuk efek bergiliran, beri style={{ "--i": index }} pada tiap item.
export default function RevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
