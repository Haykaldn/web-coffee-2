"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { arrowKeys, usePrefersReducedMotion, useSwipe } from "@/lib/hooks";
import { initials } from "@/lib/utils";

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=85`;

const atmosphere = [
  {
    id: "ruang-diskusi",
    name: "Ruang diskusi dosen",
    text: "Ruang untuk menyusun ide sebelum rapat berikutnya.",
    image: unsplash("1497366754035-f200968a6e72"),
  },
  {
    id: "sudut-nugas",
    name: "Sudut nugas",
    text: "Colokan, koneksi, dan meja yang siap menemani fokus.",
    image: unsplash("1497366811353-6870744d04b2"),
  },
  {
    id: "teras-ub",
    name: "Teras luar",
    text: "Udara Malang dan obrolan ringan di sela jadwal.",
    image: unsplash("1445116572660-236099ec97a0"),
  },
  {
    id: "bar-kopi",
    name: "Bar kopi",
    text: "Lihat minumanmu diracik dengan pelan dan teliti.",
    image: unsplash("1442512595331-e89e73853f31"),
  },
  {
    id: "diskusi-kampus",
    name: "Kegiatan kampus",
    text: "Tempat bertemu, berdiskusi, dan berbagi cerita.",
    image: unsplash("1511632765486-a01980e01a18"),
  },
  {
    id: "meja-komunal",
    name: "Meja komunal",
    text: "Satu meja untuk banyak ide yang sedang tumbuh.",
    image: unsplash("1521737711867-e3b97375f902"),
  },
];

const count = atmosphere.length;
const wrap = (index) => (index + count) % count;

// Jarak kartu dari kartu aktif, dipilih lewat arah terpendek (misal -1, bukan +5).
const offsetFrom = (index, active) => {
  let offset = index - active;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
};

export default function MenuCoverflow() {
  const [active, setActive] = useState(2);
  const [failedImages, setFailedImages] = useState({});
  const reducedMotion = usePrefersReducedMotion();
  const current = atmosphere[active];

  const move = (step) => setActive((value) => wrap(value + step));
  const swipe = useSwipe(move, 35);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = window.setInterval(() => setActive((value) => wrap(value + 1)), 2600);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <section
      className="coverflow-section"
      role="region"
      aria-label="Galeri suasana dan kegiatan UB Coffee"
      onKeyDown={arrowKeys(move)}
    >
      <div className="coverflow-heading">
        <div>
          <p className="eyebrow">Suasana UB COFFEE</p>
          <h3>
            Tempat untuk
            <br />
            <i>bertemu.</i>
          </h3>
        </div>
        <p className="coverflow-status" aria-live="polite">
          {current.name}
        </p>
      </div>

      <div className="coverflow-stage" {...swipe}>
        {atmosphere.map((item, index) => {
          const offset = offsetFrom(index, active);
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          const showImage = distance <= 3 && !failedImages[item.id];

          return (
            <button
              key={item.id}
              className={`cover-card ${isActive ? "is-active" : ""}`}
              style={{
                "--offset": offset,
                "--distance": Math.min(distance, 3),
                "--direction": Math.sign(offset),
              }}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => {
                if (!isActive) setActive(index);
              }}
              onKeyDown={(event) => {
                if (isActive && (event.key === "Enter" || event.key === " "))
                  event.preventDefault();
              }}
            >
              <span className="cover-card-media">
                {showImage ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    sizes="(max-width: 600px) 45vw, 250px"
                    onError={() => setFailedImages((images) => ({ ...images, [item.id]: true }))}
                  />
                ) : (
                  <span className="cover-card-placeholder" aria-hidden="true">
                    {initials(item.name)}
                  </span>
                )}
              </span>
              {isActive && (
                <span className="cover-card-caption">
                  <strong>{item.name}</strong>
                  <b>UB COFFEE</b>
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="coverflow-detail">
        <p>{current.text}</p>
      </div>
    </section>
  );
}
