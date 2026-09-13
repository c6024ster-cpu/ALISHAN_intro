import Link from "next/link";
import type { Metadata } from "next";
import ParallaxImage from "../components/ParallaxImage";
import Reveal from "../components/Reveal";
import { posts } from "./data";

export const metadata: Metadata = {
  title: "文章 | 阿里山導覽",
  description: "阿里山日出、森林鐵路歷史與森林遊樂區健行路線，三篇認識阿里山的深度文章。",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-line bg-bg">
        <div className="bg-hero-bg py-1.5 text-center font-mono-ticket text-[0.66rem] tracking-[0.14em] text-hero-brass uppercase">
          阿里山國家森林遊樂區 · 日出・雲海・森林鐵路 · 海拔 2,216 公尺
        </div>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-3.5 backdrop-blur-sm">
          <Link
            href="/"
            className="flex items-baseline gap-2 font-sans-tc text-[1.05rem] font-black text-ink no-underline"
          >
            阿里山導覽
            <small className="font-slab text-[0.7rem] font-normal tracking-[0.08em] text-ink-soft italic">
              ALISHAN
            </small>
          </Link>
          <nav className="flex flex-wrap gap-5 text-sm">
            <Link
              href="/gallery"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              景點相簿
            </Link>
            <Link
              href="/"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              回首頁
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        <section className="py-16">
          <Reveal className="mb-7.5 max-w-[38em]">
            <p className="font-slab text-[0.72rem] font-bold tracking-[0.22em] text-signal uppercase italic">
              Journal
            </p>
            <h1 className="mt-2.5 mb-2.5 font-sans-tc text-[clamp(1.8rem,4.5vw,2.6rem)] font-black text-ink">
              阿里山文章
            </h1>
            <p className="text-[0.98rem] leading-[1.9] text-ink-soft">
              三篇深度文章，從日出攻略、森林鐵路的百年身世，到森林遊樂區的健行路線，帶你更認識這座山。
            </p>
          </Reveal>

          <div className="flex flex-col gap-6.5">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-[minmax(0,220px)_1fr] gap-6 overflow-hidden rounded-md border border-line bg-surface no-underline max-[640px]:grid-cols-1"
                >
                  <ParallaxImage
                    src={post.cover}
                    alt={post.title}
                    speed={0.05}
                    sizes="(min-width: 768px) 220px, 100vw"
                    wrapperClassName="relative aspect-[4/3] w-full overflow-hidden max-[640px]:aspect-[16/9]"
                  />
                  <div className="flex flex-col justify-center py-5 pr-6 max-[640px]:px-5 max-[640px]:pt-0 max-[640px]:pb-5">
                    <span className="mb-2 block font-mono-ticket text-[0.68rem] tracking-[0.06em] text-brass uppercase">
                      {post.tag} · {post.readTime}
                    </span>
                    <h2 className="mb-1.5 font-sans-tc text-[1.15rem] font-bold text-ink group-hover:text-signal">
                      {post.title}
                    </h2>
                    <p className="m-0 mb-2.5 text-[0.9rem] leading-[1.8] text-ink-soft">
                      {post.excerpt}
                    </p>
                    <span className="font-slab text-[0.78rem] font-bold text-signal italic">
                      閱讀全文 →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-dashed border-line">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-4 font-mono-ticket text-[0.7rem] text-ink-soft">
          <span>© 阿里山導覽・非官方旅遊指南</span>
          <Link href="/" className="text-signal no-underline hover:underline">
            回到首頁 ↑
          </Link>
        </div>
      </footer>
    </div>
  );
}
