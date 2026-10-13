"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// Nilai server selalu false supaya tidak ada hydration mismatch.
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(REDUCED_MOTION);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

export function useScrolledPast(offset) {
  return useSyncExternalStore(
    (onChange) => {
      window.addEventListener("scroll", onChange, { passive: true });
      return () => window.removeEventListener("scroll", onChange);
    },
    () => window.scrollY > offset,
    () => false,
  );
}

// Geser (drag/swipe) horizontal: panggil onSwipe(1) ke kiri, onSwipe(-1) ke kanan.
// onDrag (opsional) menerima jarak geser saat ini dalam px, dan 0 saat dilepas.
export function useSwipe(onSwipe, threshold, onDrag) {
  const start = useRef(null);

  const reset = () => {
    start.current = null;
    onDrag?.(0);
  };

  const end = (event) => {
    if (start.current === null) return;
    const distance = event.clientX - start.current;
    reset();
    if (Math.abs(distance) > threshold) onSwipe(distance < 0 ? 1 : -1);
  };

  return {
    onPointerDown: (event) => {
      if (event.button !== 0) return;
      start.current = event.clientX;
    },
    onPointerMove: (event) => {
      if (start.current === null) return;
      const distance = event.clientX - start.current;
      // Tangkap pointer hanya setelah benar-benar menggeser, supaya klik tombol/link tetap jalan.
      if (Math.abs(distance) > 8 && !event.currentTarget.hasPointerCapture?.(event.pointerId)) {
        event.currentTarget.setPointerCapture?.(event.pointerId);
      }
      onDrag?.(distance);
    },
    onPointerUp: end,
    onPointerLeave: end,
    onPointerCancel: reset,
  };
}

// Panah kiri/kanan untuk berpindah slide.
export const arrowKeys = (onStep) => (event) => {
  const step = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
  if (!step) return;
  event.preventDefault();
  onStep(step);
};

// Scroll horizontal (trackpad) untuk berpindah slide. Listener dipasang manual
// dengan passive: false agar preventDefault() berfungsi.
export function useHorizontalWheel(ref, onStep, threshold) {
  const handler = useRef(onStep);
  useEffect(() => {
    handler.current = onStep;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const onWheel = (event) => {
      if (Math.abs(event.deltaX) <= threshold) return;
      event.preventDefault();
      handler.current(event.deltaX > 0 ? 1 : -1);
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [ref, threshold]);
}
