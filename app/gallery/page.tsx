import Link from "next/link";
import type { Metadata } from "next";
import ParallaxImage from "../components/ParallaxImage";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "景點相簿 | 阿里山導覽",
  description: "十五張阿里山與嘉義周邊景點風景照，從日出雲海到森林鐵路，一次收藏。",
};

const photos = [
  {
    src: "/images/chiayi-01-alishan-sunrise.jpg",
    name: "阿里山日出",
    en: "Alishan Sunrise",
    tag: "阿里山五奇 · 日出",
  },
  {
    src: "/images/chiayi-02-alishan-sea-of-clouds.jpg",
    name: "阿里山雲海",
    en: "Sea of Clouds",
    tag: "阿里山五奇 · 雲海",
  },
  {
    src: "/images/chiayi-03-alishan-forest-trees.jpg",
    name: "阿里山森林巨木",
    en: "Forest Recreation Area",
    tag: "阿里山五奇 · 森林",
  },
  {
    src: "/images/chiayi-11-alishan-misty-path.jpg",
    name: "石拱迷霧山徑",
    en: "Misty Mountain Path",
    tag: "森林遊樂區 · 步道",
  },
  {
    src: "/images/chiayi-12-alishan-forest-bridge.jpg",
    name: "森林棧道拱橋",
    en: "Forest Boardwalk",
    tag: "森林遊樂區 · 步道",
  },
  {
    src: "/images/chiayi-13-alishan-forest-stairs.jpg",
    name: "森林石階步道",
    en: "Stone Steps Trail",
    tag: "森林遊樂區 · 步道",
  },
  {
    src: "/images/chiayi-14-alishan-forest-train.jpg",
    name: "林間小火車",
    en: "Forest Railway Train",
    tag: "阿里山五奇 · 鐵路",
  },
  {
    src: "/images/chiayi-15-alishan-treetops-clouds.jpg",
    name: "樹梢與雲霧",
    en: "Misty Treetops",
    tag: "森林遊樂區 · 森林",
  },
  {
    src: "/images/chiayi-09-beimen-station.jpg",
    name: "北門驛",
    en: "Beimen Station",
    tag: "KM 1.5 · 森林鐵路",
  },
  {
    src: "/images/chiayi-06-fenqihu-old-street.jpg",
    name: "奮起湖老街",
    en: "Fenqihu Old Street",
    tag: "KM 49.9 · 森林鐵路",
  },
  {
    src: "/images/chiayi-04-chiayi-park.jpg",
    name: "嘉義公園",
    en: "Chiayi Park",
    tag: "步行 5 分鐘 · 嘉義市",
  },
  {
    src: "/images/chiayi-05-hinoki-village.jpg",
    name: "檜意森活村",
    en: "Hinoki Village",
    tag: "步行 10 分鐘 · 嘉義市",
  },
  {
    src: "/images/chiayi-07-lantan-reservoir.jpg",
    name: "蘭潭風景區",
    en: "Lantan Reservoir",
    tag: "車程 15 分鐘 · 嘉義市",
  },
  {
    src: "/images/chiayi-08-dongshi-fishing-harbor.jpg",
    name: "東石漁港",
    en: "Dongshi Fishing Harbor",
    tag: "車程 50 分鐘 · 東石鄉",
  },
  {
    src: "/images/chiayi-10-budai-port.jpg",
    name: "布袋港旅客服務中心",
    en: "Budai Port",
    tag: "車程 40 分鐘 · 布袋鎮",
  },
];

export default function GalleryPage() {
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
              文章
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
              Photo Album
            </p>
            <h1 className="mt-2.5 mb-2.5 font-sans-tc text-[clamp(1.8rem,4.5vw,2.6rem)] font-black text-ink">
              景點相簿
            </h1>
            <p className="text-[0.98rem] leading-[1.9] text-ink-soft">
              十五張風景照，收錄阿里山五奇、森林遊樂區步道、森林鐵路沿線車站，以及山下的順遊景點。
            </p>
          </Reveal>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6.5">
            {photos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 70}>
                <figure className="overflow-hidden rounded-md border border-line bg-surface">
                  <ParallaxImage
                    src={p.src}
                    alt={p.name}
                    speed={0.05}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={i < 2}
                    wrapperClassName="relative aspect-[4/3] w-full overflow-hidden"
                  />
                  <figcaption className="px-4.5 py-4">
                    <span className="mb-1.5 block font-mono-ticket text-[0.68rem] tracking-[0.06em] text-brass uppercase">
                      {p.tag}
                    </span>
                    <span className="block font-sans-tc text-[1.02rem] font-bold text-ink">
                      {p.name}
                    </span>
                    <span className="font-slab block text-[0.78rem] text-ink-soft italic">
                      {p.en}
                    </span>
                  </figcaption>
                </figure>
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
