import { useEffect, useState, useRef, useCallback } from "react";

/**
 * Returns a 0→1 progress value based on how far a section
 * has scrolled through the viewport.
 */
export function useScrollProgress(offset = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // start = element top hits bottom of viewport
    // end   = element bottom hits top of viewport
    const start = vh * (1 - offset);
    const end = -rect.height * offset;
    const raw = (start - rect.top) / (start - end);
    setProgress(Math.min(1, Math.max(0, raw)));
  }, [offset]);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return { ref, progress };
}

/**
 * Returns normalized scroll velocity (0→1) for speed-reactive animations.
 */
export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let lastT = performance.now();
    let raf: number;

    const tick = () => {
      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) {
        const dy = Math.abs(window.scrollY - lastY);
        const v = dy / dt; // px/ms
        // Smooth towards target, clamp to 0-1
        setVelocity((prev) => {
          const target = Math.min(1, v / 3); // normalize: 3px/ms = max
          return prev + (target - prev) * 0.15;
        });
        lastY = window.scrollY;
        lastT = now;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return velocity;
}
