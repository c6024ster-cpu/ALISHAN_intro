import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ParallaxImage from "../../components/ParallaxImage";
import Reveal from "../../components/Reveal";
import { getPost, posts } from "../data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | 阿里山導覽`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[(currentIndex + 1) % posts.length];

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
              href="/blog"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              文章列表
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
        <article className="py-16">
          <Reveal className="mb-7.5 max-w-[42em]">
            <Link
              href="/blog"
              className="mb-4 inline-block font-mono-ticket text-[0.72rem] text-ink-soft no-underline hover:text-signal"
            >
              ← 回文章列表
            </Link>
            <p className="font-slab text-[0.72rem] font-bold tracking-[0.22em] text-signal uppercase italic">
              {post.tag} · {post.readTime}
            </p>
            <h1 className="mt-2.5 mb-2.5 font-sans-tc text-[clamp(1.8rem,4.5vw,2.4rem)] font-black text-ink">
              {post.title}
            </h1>
            <p className="font-slab text-[0.85rem] text-ink-soft italic">{post.en}</p>
          </Reveal>

          <Reveal delay={60}>
            <ParallaxImage
              src={post.cover}
              alt={post.title}
              speed={0.06}
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              wrapperClassName="relative mb-9 aspect-[16/9] w-full overflow-hidden rounded-md border border-line"
            />
          </Reveal>

          <div className="max-w-[42em]">
            {post.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 70} className="mb-9">
                <h2 className="mb-3 font-sans-tc text-[1.3rem] font-black text-ink">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="m-0 mb-3.5 text-[0.98rem] leading-[1.95] text-ink-soft last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-11 border-t border-dashed border-line pt-7">
            <span className="font-slab block mb-2 text-[0.72rem] font-bold tracking-[0.14em] text-signal uppercase italic">
              Next Up
            </span>
            <Link
              href={`/blog/${nextPost.slug}`}
              className="font-sans-tc text-[1.05rem] font-bold text-ink no-underline hover:text-signal"
            >
              {nextPost.title} →
            </Link>
          </Reveal>
        </article>
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
