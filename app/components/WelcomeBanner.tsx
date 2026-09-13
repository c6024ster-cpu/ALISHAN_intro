"use client";

import { useEffect, useState } from "react";
import { VISITOR_NAME_EVENT, VISITOR_NAME_STORAGE_KEY } from "./visitor-name";

export default function WelcomeBanner() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const read = () => {
      try {
        setName(window.localStorage.getItem(VISITOR_NAME_STORAGE_KEY));
      } catch {
        setName(null);
      }
    };
    read();
    window.addEventListener(VISITOR_NAME_EVENT, read);
    return () => window.removeEventListener(VISITOR_NAME_EVENT, read);
  }, []);

  if (!name) return null;

  return (
    <p className="font-mono-ticket mb-3 text-[0.8rem] tracking-[0.04em] text-hero-brass">
      嗨，{name}，歡迎來到阿里山
    </p>
  );
}
