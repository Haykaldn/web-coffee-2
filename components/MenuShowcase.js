"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/lib/config";
import { arrowKeys, useHorizontalWheel, useSwipe } from "@/lib/hooks";
import { menu } from "@/lib/menu";
import { initials, slugify } from "@/lib/utils";

const groups = {
  Semua: menu,
  Makanan: menu.filter((item) => item.category === "Makanan"),
  Minuman: menu.filter((item) => item.category !== "Makanan"),
};

const localImage = (item) => `/menu/${slugify(item.name)}.png`;

function Dots({ label, value }) {
  return (
    <span>
      {label}{" "}
      <b>
        {"●".repeat(value)}
        <em>{"●".repeat(5 - value)}</em>
      </b>
    </span>
  );
}

function FlavorMeter({ item }) {
  if (!item.caffeine) return <p className="showcase-caffeine">Tanpa kafein</p>;

  return (
    <div
      className="showcase-meter"
      aria-label={`Pahit ${item.bitter} dari 5, manis ${item.sweet} dari 5, asam ${item.sour} dari 5`}
    >
      <Dots label="Pahit" value={item.bitter} />
      <Dots label="Manis" value={item.sweet} />
      <Dots label="Asam" value={item.sour} />
      <small>Kafein {item.caffeine}</small>
    </div>
  );
}

// Coba foto lokal di /public/menu dulu, lalu foto online, lalu inisial nama.
// Di-remount (lewat key) setiap menu berganti, jadi state-nya otomatis reset.
function ShowcaseImage({ item, priority }) {
  const sources = [localImage(item), item.image];
  const [attempt, setAttempt] = useState(0);

  if (attempt >= sources.length) {
    return (
      <div className="showcase-placeholder" aria-hidden="true">
        {initials(item.name)}
      </div>
    );
  }

  return (
    <Image
      key={sources[attempt]}
      src={sources[attempt]}
      alt={item.name}
      fill
      unoptimized
      priority={priority}
      sizes="(max-width: 700px) 86vw, 52vw"
      onError={() => setAttempt((value) => value + 1)}
    />
  );
}

export default function MenuShowcase() {
  const [category, setCategory] = useState("Semua");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const regionRef = useRef(null);

  const items = groups[category];
  const item = items[index] ?? items[0];

  const goTo = (nextIndex, nextDirection) => {
    setDirection(nextDirection);
    setIndex((nextIndex + items.length) % items.length);
  };
  const step = (amount) => goTo(index + amount, amount >= 0 ? 1 : -1);
  const selectCategory = (name) => {
    setCategory(name);
    setIndex(0);
    setDirection(1);
  };

  const [dragX, setDragX] = useState(0);
  const swipe = useSwipe(step, 60, setDragX);
  useHorizontalWheel(regionRef, step, 14);

  // Muat lebih dulu foto menu berikutnya.
  useEffect(() => {
    const preload = new window.Image();
    preload.src = localImage(items[(index + 1) % items.length]);
  }, [index, items]);

  return (
    <div
      className={`menu-showcase ${dragX ? "is-dragging" : ""}`}
      ref={regionRef}
      role="region"
      aria-label="Menu UB Coffee"
      style={{ "--direction": direction, "--drag": dragX }}
      onKeyDown={arrowKeys(step)}
      {...swipe}
    >
      <div className="showcase-main" data-reveal="left">
        <div className="showcase-tabs" role="tablist" aria-label="Kategori menu">
          {Object.keys(groups).map((name) => (
            <button
              key={name}
              role="tab"
              aria-selected={category === name}
              className={category === name ? "active" : ""}
              onClick={() => selectCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* key membuat elemen dipasang ulang tiap menu berganti, jadi animasi masuk diputar lagi */}
        <div className="showcase-copy" aria-live="polite" key={`copy-${category}-${item.name}`}>
          <p className="showcase-category">{item.category}</p>
          <h3 className="showcase-title">{item.name}</h3>
          <p className="showcase-lead">{item.description}</p>
          <FlavorMeter item={item} />
          <div className="showcase-buy">
            <strong className="showcase-price">{item.price}</strong>
            <a
              className="showcase-order"
              href={whatsappUrl(item.name)}
              target="_blank"
              rel="noreferrer"
            >
              Pesan lewat WhatsApp <span>↗</span>
            </a>
          </div>
        </div>

        <div className="showcase-navigation">
          <button onClick={() => step(-1)}>← Sebelumnya</button>
          <span>
            Menu {index + 1} dari {items.length}
          </span>
          <button onClick={() => step(1)}>Berikutnya →</button>
          <div className="showcase-dots">
            {items.map((entry, entryIndex) => (
              <button
                key={entry.name}
                className={entryIndex === index ? "active" : ""}
                aria-label={`Pilih ${entry.name}`}
                onClick={() => goTo(entryIndex, entryIndex >= index ? 1 : -1)}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="showcase-visual"
        aria-label={`Foto ${item.name}`}
        data-reveal="zoom"
        style={{ "--delay": "150ms" }}
      >
        <div className="showcase-blob" />
        <div className="showcase-decoration decoration-one" aria-hidden="true" />
        <div className="showcase-decoration decoration-two" aria-hidden="true" />
        <div className="showcase-drag">
          <div
            className="showcase-image-frame"
            key={`image-${category}-${item.name}`}
            style={{ backgroundImage: `url("${item.image}")` }}
          >
            <ShowcaseImage item={item} priority={index === 0 && category === "Semua"} />
          </div>
        </div>
      </div>
    </div>
  );
}
