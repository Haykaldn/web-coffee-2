"use client";

import { useSyncExternalStore } from "react";
import { isOpenAt } from "@/lib/config";

// Cek ulang tiap menit supaya status ikut berubah saat jam buka/tutup.
const subscribe = (onChange) => {
  const timer = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(timer);
};

export default function OpenStatus() {
  const open = useSyncExternalStore(
    subscribe,
    () => isOpenAt(),
    () => false,
  );

  return (
    <span className="status">
      <i className={open ? "is-open" : ""} /> {open ? "Sedang buka" : "Tutup sementara"}
    </span>
  );
}
