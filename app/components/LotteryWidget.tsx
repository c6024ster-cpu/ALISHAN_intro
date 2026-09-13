"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "spinning" | "win" | "lose";

const WIN_RATE = 0.1;
const SPIN_MS = 1400;

function randomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `ALISHAN-${code}`;
}

export default function LotteryWidget() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [code, setCode] = useState("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function openModal() {
    setPhase("idle");
    setOpen(true);
  }

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function draw() {
    setPhase("spinning");
    window.setTimeout(() => {
      const win = Math.random() < WIN_RATE;
      if (win) setCode(randomCode());
      setPhase(win ? "win" : "lose");
    }, SPIN_MS);
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openModal}
        aria-haspopup="dialog"
        className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-signal px-5 py-3 font-sans-tc text-[0.92rem] font-bold text-hero-ink no-underline shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current stroke-[1.8]"
        >
          <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" />
          <path d="M12 6v12" strokeDasharray="2.2 2.2" />
        </svg>
        阿里山抽獎
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lottery-title"
            className="modal-in relative w-full max-w-sm rounded-md border border-line bg-bg px-6.5 pt-6.5 pb-6 text-ink"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="關閉"
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-soft hover:border-signal hover:text-signal"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
                <path d="M5 5l14 14M19 5 5 19" />
              </svg>
            </button>

            <p className="font-slab mb-1.5 text-[0.7rem] font-bold tracking-[0.2em] text-signal uppercase italic">
              Lucky Draw
            </p>
            <h2 id="lottery-title" className="mb-2 font-sans-tc text-[1.35rem] font-black text-ink">
              阿里山住宿抽獎
            </h2>
            <p className="mb-6 text-[0.88rem] leading-[1.8] text-ink-soft">
              每次抽獎有 10% 機率獲得阿里山住宿券 9 折，祝你手氣不錯。
            </p>

            <div className="lottery-ticket flex min-h-45 flex-col items-center justify-center gap-3.5 bg-surface px-6 py-8 text-center">
              {phase === "idle" && (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10 fill-none stroke-brass stroke-[1.4]"
                  >
                    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" />
                    <path d="M12 6v12" strokeDasharray="2.2 2.2" />
                  </svg>
                  <button
                    type="button"
                    onClick={draw}
                    className="rounded-full bg-signal px-6 py-2.5 font-sans-tc text-[0.95rem] font-bold text-hero-ink hover:opacity-90"
                  >
                    立即抽獎
                  </button>
                </>
              )}

              {phase === "spinning" && (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="lottery-spin h-10 w-10 fill-none stroke-brass stroke-[1.4]"
                  >
                    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" />
                    <path d="M12 6v12" strokeDasharray="2.2 2.2" />
                  </svg>
                  <p className="font-mono-ticket text-[0.8rem] tracking-[0.1em] text-ink-soft uppercase">
                    抽獎中...
                  </p>
                </>
              )}

              {phase === "win" && (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10 fill-none stroke-signal stroke-[1.5]"
                  >
                    <path d="M12 2 14.4 8.6 21 9.3l-5 4.4 1.5 6.6L12 17l-5.5 3.3L8 13.7l-5-4.4 6.6-.7Z" />
                  </svg>
                  <p className="font-sans-tc text-[1.05rem] font-bold text-signal">
                    恭喜中獎！
                  </p>
                  <p className="text-[0.88rem] text-ink-soft">阿里山住宿券 9 折</p>
                  <p className="font-mono-ticket text-[1rem] font-bold tracking-[0.08em] text-ink [font-variant-numeric:tabular-nums]">
                    {code}
                  </p>
                </>
              )}

              {phase === "lose" && (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10 fill-none stroke-ink-soft stroke-[1.4]"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 10h.01M15 10h.01M8.5 15c1-1 2.2-1.5 3.5-1.5s2.5.5 3.5 1.5" />
                  </svg>
                  <p className="font-sans-tc text-[1.05rem] font-bold text-ink">
                    銘謝惠顧
                  </p>
                  <p className="text-[0.88rem] text-ink-soft">
                    這次沒中，再抽一次試試手氣！
                  </p>
                </>
              )}
            </div>

            {(phase === "win" || phase === "lose") && (
              <button
                type="button"
                onClick={draw}
                className="mt-4 w-full rounded-md border border-line py-2.5 font-sans-tc text-[0.9rem] font-bold text-ink hover:border-signal hover:text-signal"
              >
                再抽一次
              </button>
            )}

            <p className="mt-5 font-mono-ticket text-[0.66rem] leading-[1.7] text-ink-soft">
              本活動僅為網站示範功能，優惠券不具實際兌換效力，中獎機率固定為 10%。
            </p>
          </div>
        </div>
      )}
    </>
  );
}
