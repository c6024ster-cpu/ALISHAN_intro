"use client";

type Entry = { el: HTMLElement; speed: number };

const entries = new Set<Entry>();
let ticking = false;

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function update() {
  ticking = false;
  const vh = window.innerHeight;
  entries.forEach(({ el, speed }) => {
    const parent = el.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2 - vh / 2;
    const translate = (-centerOffset * speed).toFixed(2);
    el.style.transform = `translate3d(0, ${translate}px, 0)`;
  });
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

export function registerParallax(el: HTMLElement, speed: number) {
  if (reducedMotion()) return () => {};

  if (entries.size === 0) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }
  const entry: Entry = { el, speed };
  entries.add(entry);
  update();

  return () => {
    entries.delete(entry);
    el.style.transform = "";
    if (entries.size === 0) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
  };
}
