import type { Metadata } from "next";
import { Zilla_Slab, Space_Mono } from "next/font/google";
import "./globals.css";
import LotteryWidget from "./components/LotteryWidget";
import WelcomeGate from "./components/WelcomeGate";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "阿里山導覽 | 日出・雲海・森林鐵路全攻略",
  description:
    "阿里山五奇、森林遊樂區看點與森林鐵路沿線五站，一頁認識阿里山國家森林遊樂區的景點導覽網站。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${zillaSlab.variable} ${spaceMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700;900&family=Noto+Serif+TC:wght@400;600&display=swap"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <LotteryWidget />
        <WelcomeGate />
      </body>
    </html>
  );
}
