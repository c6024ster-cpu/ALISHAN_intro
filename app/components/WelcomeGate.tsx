"use client";

import { useEffect, useRef, useState } from "react";
import { VISITOR_NAME_EVENT, VISITOR_NAME_STORAGE_KEY } from "./visitor-name";

const FALLBACK_NAME = "旅人";

type Phase = "loading" | "ask" | "greeted";

export default function WelcomeGate() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [name, setName] = useState("");
  const [draft, setDraft] = useState("");
  const draftRef = useRef("");
  const inputRef = useRef<HTMLInputElement>(null);

  draftRef.current = draft;

  useEffect(() => {
    const init = () => {
      let saved = "";
      try {
        saved = window.localStorage.getItem(VISITOR_NAME_STORAGE_KEY) ?? "";
      } catch {
        saved = "";
      }
      if (saved) {
        setName(saved);
        setPhase("greeted");
      } else {
        setPhase("ask");
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (phase !== "ask") return;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [phase]);

  function finish() {
    const finalName = draftRef.current.trim().slice(0, 20) || FALLBACK_NAME;
    try {
      window.localStorage.setItem(VISITOR_NAME_STORAGE_KEY, finalName);
    } catch {
      // ignore storage failures (private mode, quota, etc.)
    }
    setName(finalName);
    setPhase("greeted");
    window.dispatchEvent(new Event(VISITOR_NAME_EVENT));
  }

  function startEdit() {
    setDraft(name === FALLBACK_NAME ? "" : name);
    setPhase("ask");
  }

  if (phase === "loading") return null;

  return (
    <>
      {phase === "greeted" && (
        <button
          type="button"
          onClick={startEdit}
          className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full border border-line bg-surface py-2 pr-3 pl-4 font-sans-tc text-[0.85rem] text-ink no-underline shadow-lg shadow-black/10 hover:border-signal"
        >
          嗨，{name}
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.8] text-ink-soft"
          >
            <path d="M4 20h4l10.5-10.5a2 2 0 0 0 0-2.8l-1.2-1.2a2 2 0 0 0-2.8 0L4 16v4Z" />
          </svg>
        </button>
      )}

      {phase === "ask" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            className="modal-in relative w-full max-w-sm rounded-md border border-line bg-bg px-6.5 pt-6.5 pb-6 text-ink"
          >
            <p className="font-slab mb-1.5 text-[0.7rem] font-bold tracking-[0.2em] text-signal uppercase italic">
              Welcome
            </p>
            <h2 id="welcome-title" className="mb-2 font-sans-tc text-[1.35rem] font-black text-ink">
              歡迎來到阿里山
            </h2>
            <p className="mb-5 text-[0.88rem] leading-[1.8] text-ink-soft">
              開始探索之前，怎麼稱呼您？
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                finish();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                maxLength={20}
                placeholder="例如：小明"
                className="mb-4 w-full rounded-md border border-line bg-surface px-4 py-2.5 font-sans-tc text-[0.98rem] text-ink outline-none placeholder:text-ink-soft/70 focus:border-signal"
              />
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-signal py-2.5 font-sans-tc text-[0.95rem] font-bold text-hero-ink hover:opacity-90"
                >
                  開始探索
                </button>
                <button
                  type="button"
                  onClick={finish}
                  className="font-mono-ticket text-[0.78rem] text-ink-soft hover:text-signal"
                >
                  略過
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
