import Link from "next/link";
import ParallaxImage from "./components/ParallaxImage";
import Reveal from "./components/Reveal";
import WelcomeBanner from "./components/WelcomeBanner";

const wonders = [
  {
    no: "01",
    name: "日出",
    en: "Sunrise",
    img: "/images/chiayi-01-alishan-sunrise.jpg",
    desc: "祝山觀日平台看金光刺破山稜，是多數人上山的第一個理由，記得提前預約小火車或接駁車席位。",
  },
  {
    no: "02",
    name: "雲海",
    en: "Sea of Clouds",
    img: "/images/chiayi-02-alishan-sea-of-clouds.jpg",
    desc: "午後雲層自山谷湧起，將群峰化為海上孤島，對高岳、玉山方向是最佳的觀海角度。",
  },
  {
    no: "03",
    name: "森林",
    en: "Ancient Forest",
    img: "/images/chiayi-11-alishan-misty-path.jpg",
    desc: "紅檜與扁柏的千年巨木群，棧道穿行霧氣與石拱之間，是園區裡最安靜的一段路。",
  },
  {
    no: "04",
    name: "鐵路",
    en: "Forest Railway",
    img: "/images/chiayi-14-alishan-forest-train.jpg",
    desc: "1912 年通車的高山森林鐵路，之字形爬升穿越熱、暖、溫三種林相，本身就是一段活的鐵道史。",
  },
  {
    no: "05",
    name: "晚霞",
    en: "Sunset Glow",
    icon: (
      <>
        <circle cx="12" cy="16" r="4.2" />
        <path d="M3 20h18" />
        <path d="M5 16H3M21 16h-2M12 9V7M7.5 10.5 6 9M16.5 10.5 18 9" />
      </>
    ),
    desc: "傍晚山色由金轉紫，對高岳雲海平台是欣賞晚霞最開闊的觀景點，也是攝影愛好者的收工時刻。",
  },
];

const parkHighlights = [
  {
    img: "/images/chiayi-03-alishan-forest-trees.jpg",
    name: "森林遊樂區巨木群",
    en: "Giant Trees",
    desc: "紅檜、扁柏環抱步道，樹齡動輒數百年，抬頭是遮天的樹冠，是全區最具代表性的森林景觀。",
  },
  {
    img: "/images/chiayi-12-alishan-forest-bridge.jpg",
    name: "森林棧道拱橋",
    en: "Forest Boardwalk",
    desc: "木棧道與拱橋串起林間高低地形，全程平緩好走，適合帶著長輩與小孩慢慢散步。",
  },
  {
    img: "/images/chiayi-13-alishan-forest-stairs.jpg",
    name: "石階山徑",
    en: "Stone Steps Trail",
    desc: "沿等高線鋪設的石階步道，穿梭在蕨類與巨木之間，是眺望林相層次最好的角度之一。",
  },
  {
    img: "/images/chiayi-15-alishan-treetops-clouds.jpg",
    name: "樹梢雲霧",
    en: "Misty Treetops",
    desc: "午後水氣漫上林梢，陽光穿雲灑落，這片森林總在同一個地方，天天都是不同的風景。",
  },
];

const stations = [
  {
    no: "01",
    name: "嘉義",
    km: "KM 0",
    elev: "30 M",
    desc: "森林鐵路的起點，市區裡藏著檜木老屋與百年雞肉飯店，上山前先把行囊與味蕾都準備好。",
    icon: (
      <>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
  },
  {
    no: "02",
    name: "北門驛",
    km: "KM 1.5",
    elev: "30 M",
    img: "/images/chiayi-09-beimen-station.jpg",
    desc: "林鐵修建之初的行政中心，日治時期木造車站與退役蒸汽車頭並列，是林業運送黃金年代的見證。",
    icon: (
      <>
        <path d="M4 21h16" />
        <path d="M6 21V9l6-5 6 5v12" />
        <path d="M10 21v-7h4v7" />
      </>
    ),
  },
  {
    no: "03",
    name: "竹崎",
    km: "KM 14.2",
    elev: "127 M",
    desc: "平地與山地的交界，過站後路線開始爬升，是林鐵著名「之字形」壓坡路段的起點。",
    icon: (
      <>
        <path d="M3 17l5-5 4 4 9-9" />
        <path d="M21 7v6h-6" />
      </>
    ),
  },
  {
    no: "04",
    name: "奮起湖",
    km: "KM 49.9",
    elev: "1,403 M",
    img: "/images/chiayi-06-fenqihu-old-street.jpg",
    desc: "昔日運補中繼的山城小站，石階老街飄著柴燒鐵路便當香氣，最適合中途下車小憩一晚。",
    icon: (
      <>
        <rect x="5" y="9" width="14" height="10" rx="1" />
        <path d="M5 9l7-5 7 5" />
        <path d="M9 19v-5h6v5" />
      </>
    ),
  },
  {
    no: "05",
    name: "阿里山",
    km: "KM 71.4",
    elev: "2,216 M",
    desc: "終點站。日出、雲海與千年神木在此交會，森林小火車蜿蜒七十一公里後，終於抵達雲端之上。",
    icon: (
      <>
        <path d="M2 19l6-10 4 6 3-4 7 8Z" />
        <circle cx="17" cy="6" r="2.2" />
      </>
    ),
  },
];

const nearby = [
  {
    loc: "步行 10 分鐘・嘉義市",
    name: "檜意森活村",
    img: "/images/chiayi-05-hinoki-village.jpg",
    desc: "日治林場宿舍群改建的木構聚落，巷弄間茶香與選物店交錯，離嘉義車站最近的一段老時光。",
  },
  {
    loc: "車程 15 分鐘・嘉義市",
    name: "蘭潭風景區",
    img: "/images/chiayi-07-lantan-reservoir.jpg",
    desc: "市郊水庫湖景，環潭步道近八公里，黃昏時分天光雲影交疊，是上山前後散步的口袋名單。",
  },
  {
    loc: "步行 5 分鐘・嘉義市",
    name: "嘉義公園",
    img: "/images/chiayi-04-chiayi-park.jpg",
    desc: "百年歷史的老公園，林木與神社遺構錯落其中，是市區裡最靜謐的一片綠地。",
  },
  {
    loc: "車程 50 分鐘・東石鄉",
    name: "東石漁人碼頭",
    img: "/images/chiayi-08-dongshi-fishing-harbor.jpg",
    desc: "濱海潟湖漁港，現撈鮮蚵與落日海景，是森林之外，嘉義最鹹香的一段風景。",
  },
  {
    loc: "車程 40 分鐘・布袋鎮",
    name: "布袋港旅客服務中心",
    img: "/images/chiayi-10-budai-port.jpg",
    desc: "曾是台灣重要鹽業與漁業港口，如今是通往澎湖的碼頭，也是欣賞海港夕照的好地方。",
  },
];

const tips = [
  { label: "最佳季節", value: "2 月–4 月賞櫻・秋冬乾爽最宜觀日賞雲海" },
  { label: "日出班次", value: "祝山線小火車與接駁車皆需提前預約，假日席位有限" },
  { label: "山區氣溫", value: "日夜溫差大，夏天也要備薄外套，冬季注意保暖" },
  { label: "在地美食", value: "高山茶・段木香菇・山葵料理・奮起湖鐵路便當" },
  { label: "交通轉乘", value: "高鐵嘉義站轉台灣好行巴士，或森林鐵路直達阿里山站" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-line bg-bg">
        <div className="bg-hero-bg py-1.5 text-center font-mono-ticket text-[0.66rem] tracking-[0.14em] text-hero-brass uppercase">
          阿里山國家森林遊樂區 · 日出・雲海・森林鐵路 · 海拔 2,216 公尺
        </div>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-3.5 backdrop-blur-sm">
          <a
            href="#top"
            className="flex items-baseline gap-2 font-sans-tc text-[1.05rem] font-black text-ink no-underline"
          >
            阿里山導覽
            <small className="font-slab text-[0.7rem] font-normal tracking-[0.08em] text-ink-soft italic">
              ALISHAN
            </small>
          </a>
          <nav className="flex flex-wrap gap-5 text-sm">
            <a
              href="#wonders"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              五大奇景
            </a>
            <a
              href="#park"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              園區看點
            </a>
            <a
              href="#railway"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              森林鐵路
            </a>
            <a
              href="#notes"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              旅行提醒
            </a>
            <Link
              href="/gallery"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              景點相簿
            </Link>
            <Link
              href="/blog"
              className="border-b border-transparent pb-0.5 text-ink-soft no-underline hover:border-signal hover:text-signal"
            >
              文章
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        {/* Hero */}
        <section
          id="top"
          className="relative mt-4.5 overflow-hidden rounded-md text-hero-ink before:pointer-events-none before:absolute before:inset-2 before:z-[2] before:rounded-sm before:border before:border-hero-brass/55"
        >
          <ParallaxImage
            src="/images/chiayi-01-alishan-sunrise.jpg"
            alt="阿里山日出雲海"
            priority
            speed={0.15}
            sizes="(min-width: 896px) 896px, 100vw"
            wrapperClassName="absolute inset-0 overflow-hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-hero-bg/75 to-hero-bg/35" />
          <div className="hero-in relative z-[1] px-7 pt-14 pb-10">
            <WelcomeBanner />
            <p className="font-slab mb-4.5 text-[0.72rem] font-bold tracking-[0.22em] text-hero-brass uppercase italic">
              Alishan National Scenic Area · Since 1912
            </p>
            <h1 className="mb-3.5 font-sans-tc text-[clamp(3.4rem,11vw,6.2rem)] leading-[0.95] font-black tracking-wide">
              阿里山
            </h1>
            <p className="mb-7.5 max-w-[34em] text-[1.05rem] leading-[1.9] text-hero-ink/90">
              日出、雲海、晚霞、森林與鐵路，「阿里山五奇」在海拔兩千兩百公尺的雲端交會。這頁導覽，帶你認識這座台灣人心中最熟悉的山。
            </p>
            <div className="flex flex-wrap items-center gap-3.5 border-y border-dashed border-hero-brass/60 py-3.5 font-mono-ticket text-[0.82rem] [font-variant-numeric:tabular-nums]">
              <div className="flex flex-col gap-1">
                <span className="text-[0.68rem] tracking-[0.1em] text-hero-ink/65 uppercase">
                  海拔
                </span>
                <b className="text-[1.05rem] tracking-wide">2,216 M</b>
              </div>
              <div
                className="h-px min-w-10 flex-1"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, var(--hero-brass) 0 6px, transparent 6px 11px)",
                }}
              />
              <div className="flex flex-col gap-1">
                <span className="text-[0.68rem] tracking-[0.1em] text-hero-ink/65 uppercase">
                  森林鐵路
                </span>
                <b className="text-[1.05rem] tracking-wide">71.4 KM</b>
              </div>
              <div
                className="h-px min-w-10 flex-1"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, var(--hero-brass) 0 6px, transparent 6px 11px)",
                }}
              />
              <div className="flex flex-col gap-1">
                <span className="text-[0.68rem] tracking-[0.1em] text-hero-ink/65 uppercase">
                  所在地
                </span>
                <b className="text-[1.05rem] tracking-wide">嘉義縣阿里山鄉</b>
              </div>
            </div>
          </div>
        </section>

        {/* Five wonders */}
        <section id="wonders" className="py-16">
          <Reveal className="mb-7.5 max-w-[38em]">
            <p className="font-slab text-[0.72rem] font-bold tracking-[0.22em] text-signal uppercase italic">
              The Five Wonders
            </p>
            <h2 className="mt-2.5 mb-2.5 font-sans-tc text-[clamp(1.6rem,4vw,2.1rem)] font-black text-ink">
              阿里山五奇
            </h2>
            <p className="text-[0.98rem] leading-[1.9] text-ink-soft">
              日出、雲海、晚霞、森林、鐵路，是百年來旅人公認阿里山最動人的五個瞬間。
            </p>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6.5">
            {wonders.map((w, i) => (
              <Reveal key={w.no} delay={i * 70}>
                <div className="overflow-hidden rounded-md border border-line bg-surface">
                  {w.img ? (
                    <ParallaxImage
                      src={w.img}
                      alt={w.name}
                      speed={0.05}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      wrapperClassName="relative aspect-[4/3] w-full overflow-hidden"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-hero-bg text-hero-brass">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-14 w-14 fill-none stroke-current stroke-[1.4]"
                      >
                        {w.icon}
                      </svg>
                    </div>
                  )}
                  <div className="px-4.5 py-4">
                    <div className="mb-1.5 flex items-baseline gap-2.5">
                      <span className="font-mono-ticket text-[0.72rem] tracking-wide text-brass">
                        {w.no}
                      </span>
                      <span className="font-sans-tc text-[1.05rem] font-bold text-ink">
                        {w.name}
                      </span>
                      <span className="font-slab text-[0.74rem] text-ink-soft italic">
                        {w.en}
                      </span>
                    </div>
                    <p className="m-0 text-[0.88rem] leading-[1.8] text-ink-soft">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Park highlights */}
        <section id="park" className="py-16">
          <Reveal className="mb-7.5 max-w-[38em]">
            <p className="font-slab text-[0.72rem] font-bold tracking-[0.22em] text-signal uppercase italic">
              Recreation Area
            </p>
            <h2 className="mt-2.5 mb-2.5 font-sans-tc text-[clamp(1.6rem,4vw,2.1rem)] font-black text-ink">
              森林遊樂區裡的四段風景
            </h2>
            <p className="text-[0.98rem] leading-[1.9] text-ink-soft">
              棧道、石階與拱橋，把整座森林遊樂區串成一條完整的健行路線，全程平緩，適合安排半天到一天的時間慢慢走完。
            </p>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6.5">
            {parkHighlights.map((h, i) => (
              <Reveal key={h.name} delay={i * 70}>
                <div className="overflow-hidden rounded-md border border-line bg-surface">
                  <ParallaxImage
                    src={h.img}
                    alt={h.name}
                    speed={0.05}
                    sizes="(min-width: 768px) 25vw, 50vw"
                    wrapperClassName="relative aspect-[4/3] w-full overflow-hidden"
                  />
                  <div className="px-4 py-3.5">
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="font-sans-tc text-[0.98rem] font-bold text-ink">
                        {h.name}
                      </span>
                      <span className="font-slab text-[0.7rem] text-ink-soft italic">
                        {h.en}
                      </span>
                    </div>
                    <p className="m-0 text-[0.84rem] leading-[1.75] text-ink-soft">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Forest railway */}
        <section id="railway" className="py-16">
          <Reveal className="mb-7.5 max-w-[38em]">
            <p className="font-slab text-[0.72rem] font-bold tracking-[0.22em] text-signal uppercase italic">
              How To Get There
            </p>
            <h2 className="mt-2.5 mb-2.5 font-sans-tc text-[clamp(1.6rem,4vw,2.1rem)] font-black text-ink">
              搭森林鐵路上山，沿線五站
            </h2>
            <p className="text-[0.98rem] leading-[1.9] text-ink-soft">
              阿里山森林鐵路從嘉義市區一路爬升，海拔在七十一公里間拉出近兩千兩百公尺的落差。下方剖面圖，是這段旅程真實的高度曲線。
            </p>
          </Reveal>

          <Reveal className="mb-8.5 rounded-md border border-line bg-surface px-4.5 pt-4.5 pb-2">
            <svg
              viewBox="0 0 720 220"
              role="img"
              aria-label="阿里山森林鐵路高度剖面圖，自嘉義0公尺爬升至阿里山2216公尺"
              className="block h-auto w-full font-mono-ticket [font-variant-numeric:tabular-nums]"
            >
              <defs>
                <linearGradient id="profileFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--rail)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--rail)" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g stroke="var(--line)" strokeWidth="1" opacity="0.6">
                <line x1="48" y1="190" x2="700" y2="190" />
                <line x1="48" y1="150.9" x2="700" y2="150.9" />
                <line x1="48" y1="111.7" x2="700" y2="111.7" />
                <line x1="48" y1="72.6" x2="700" y2="72.6" />
                <line x1="48" y1="33.5" x2="700" y2="33.5" />
              </g>
              <g fill="var(--ink-soft)" fontSize="10" textAnchor="end">
                <text x="42" y="193">0</text>
                <text x="42" y="154">500</text>
                <text x="42" y="115">1000</text>
                <text x="42" y="76">1500</text>
                <text x="42" y="37">2000 M</text>
              </g>

              <path
                d="M48,188 L62,188 L178,180 L504,80 L700,17 L700,190 L48,190 Z"
                fill="url(#profileFill)"
              />
              <polyline
                points="48,188 62,188 178,180 504,80 700,17"
                fill="none"
                stroke="var(--rail)"
                strokeWidth="2.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              <g fill="var(--bg)" stroke="var(--signal)" strokeWidth="2">
                <circle cx="48" cy="188" r="4.5" />
                <circle cx="62" cy="188" r="4.5" />
                <circle cx="178" cy="180" r="4.5" />
                <circle cx="504" cy="80" r="4.5" />
                <circle cx="700" cy="17" r="4.5" />
              </g>
              <g fill="var(--ink)" fontSize="10.5" fontWeight="700">
                <text x="48" y="207">嘉義</text>
                <text x="76" y="150">北門驛</text>
                <text x="150" y="164">竹崎</text>
                <text x="470" y="65">奮起湖</text>
                <text x="655" y="14">阿里山</text>
              </g>
            </svg>
            <div className="flex justify-between px-1 pt-2 pb-1 font-mono-ticket text-[0.68rem] tracking-[0.08em] text-ink-soft uppercase">
              <span>KM 0</span>
              <span>KM 71.4</span>
            </div>
          </Reveal>

          <ol className="m-0 flex list-none flex-col p-0">
            {stations.map((s, i) => (
              <li key={s.no} className="station grid grid-cols-[56px_1fr] gap-4.5 max-[640px]:grid-cols-[44px_1fr] max-[640px]:gap-3">
                <div className="relative z-[1] flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-rail max-[640px]:h-11 max-[640px]:w-11">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6.5 w-6.5 fill-none stroke-current stroke-[1.6] max-[640px]:h-5 max-[640px]:w-5"
                  >
                    {s.icon}
                  </svg>
                </div>
                <Reveal delay={i * 60} className="overflow-hidden rounded-md border border-line bg-surface">
                  {s.img && (
                    <ParallaxImage
                      src={s.img}
                      alt={s.name}
                      speed={0.04}
                      sizes="(min-width: 768px) 700px, 100vw"
                      wrapperClassName="relative aspect-[16/7] w-full overflow-hidden"
                    />
                  )}
                  <div className="px-4.5 py-4">
                    <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <span className="font-mono-ticket text-[0.78rem] tracking-wide text-brass">
                        {s.no}
                      </span>
                      <span className="font-sans-tc text-[1.15rem] font-bold text-ink">
                        {s.name}
                      </span>
                      <span className="flex gap-3.5 font-mono-ticket text-[0.78rem] text-ink-soft [font-variant-numeric:tabular-nums] max-[640px]:ml-0 max-[640px]:w-full sm:ml-auto">
                        <span>{s.km}</span>
                        <span>{s.elev}</span>
                      </span>
                    </div>
                    <p className="m-0 text-[0.94rem] leading-[1.85] text-ink-soft">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Nearby */}
        <section id="nearby" className="py-16">
          <Reveal className="mb-7.5 max-w-[38em]">
            <p className="font-slab text-[0.72rem] font-bold tracking-[0.22em] text-signal uppercase italic">
              Before & After
            </p>
            <h2 className="mt-2.5 mb-2.5 font-sans-tc text-[clamp(1.6rem,4vw,2.1rem)] font-black text-ink">
              上山前後，山下順遊
            </h2>
            <p className="text-[0.98rem] leading-[1.9] text-ink-soft">
              從嘉義市區出發前，或是下山之後，還有幾處值得繞路的風景，各自掛著一張屬於自己的行李吊牌。
            </p>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6.5">
            {nearby.map((e, i) => (
              <Reveal key={e.name} delay={i * 70}>
                <div
                  className={`tag ${i % 2 === 0 ? "tag-odd" : "tag-even"} overflow-hidden border border-line bg-surface`}
                >
                  <ParallaxImage
                    src={e.img}
                    alt={e.name}
                    speed={0.05}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    wrapperClassName="relative aspect-[4/3] w-full overflow-hidden"
                  />
                  <div className="py-5 pr-5 pl-6.5">
                    <span className="mb-2.5 block font-mono-ticket text-[0.68rem] tracking-[0.06em] text-brass uppercase">
                      {e.loc}
                    </span>
                    <h3 className="mb-1 font-sans-tc text-[1.02rem] font-bold text-ink">
                      {e.name}
                    </h3>
                    <p className="m-0 text-[0.9rem] leading-[1.8] text-ink-soft">
                      {e.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Travel notes */}
        <section id="notes" className="py-16">
          <Reveal className="mb-7.5 max-w-[38em]">
            <p className="font-slab text-[0.72rem] font-bold tracking-[0.22em] text-signal uppercase italic">
              Before You Go
            </p>
            <h2 className="mt-2.5 font-sans-tc text-[clamp(1.6rem,4vw,2.1rem)] font-black text-ink">
              旅行小提醒
            </h2>
          </Reveal>
          <Reveal delay={80} className="relative max-w-160 rounded-md border border-line bg-surface px-6.5 pt-6.5 pb-5.5">
            <p className="font-slab mb-4.5 text-[0.72rem] font-bold tracking-[0.14em] text-signal uppercase italic">
              Travel Notes · 隨票附贈
            </p>
            <dl className="m-0 flex flex-col gap-3.5">
              {tips.map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2.5"
                >
                  <dt className="font-sans-tc text-[0.9rem] font-bold text-ink sm:whitespace-nowrap">
                    {t.label}
                  </dt>
                  <span className="hidden h-0 flex-1 -translate-y-1 border-b border-dotted border-ink-soft sm:block" />
                  <dd className="m-0 text-[0.86rem] text-ink-soft sm:text-right sm:whitespace-nowrap">
                    {t.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5.5 pt-4 font-mono-ticket text-[0.7rem] leading-[1.7] text-ink-soft">
              內容僅供旅遊參考，班次、開放時間與票價請以林務局阿里山林鐵及文化資產管理處官方公告為準。
            </p>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-dashed border-line">
        <div className="mx-auto grid max-w-4xl grid-cols-[1.3fr_1fr_1.3fr] gap-8.5 px-6 pt-11 pb-7.5 max-[640px]:grid-cols-1 max-[640px]:gap-6.5 max-[640px]:pt-8.5 max-[640px]:pb-5">
          <div>
            <div className="mb-2.5 flex items-baseline gap-2 font-sans-tc text-[0.98rem] font-black text-ink">
              阿里山導覽
              <small className="font-slab text-[0.7rem] font-normal tracking-[0.08em] text-ink-soft italic">
                ALISHAN
              </small>
            </div>
            <p className="m-0 text-[0.86rem] leading-[1.85] text-ink-soft">
              日出、雲海、晚霞、森林與鐵路，阿里山五奇與上山沿線風景，一頁認識這座台灣人心中最熟悉的山。
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-sans-tc text-[0.8rem] font-bold tracking-[0.08em] text-ink">
              快速連結
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#wonders" className="w-fit border-b border-transparent pb-px text-[0.86rem] text-ink-soft no-underline hover:border-signal hover:text-signal">五大奇景</a>
              <a href="#park" className="w-fit border-b border-transparent pb-px text-[0.86rem] text-ink-soft no-underline hover:border-signal hover:text-signal">園區看點</a>
              <a href="#railway" className="w-fit border-b border-transparent pb-px text-[0.86rem] text-ink-soft no-underline hover:border-signal hover:text-signal">森林鐵路</a>
              <a href="#notes" className="w-fit border-b border-transparent pb-px text-[0.86rem] text-ink-soft no-underline hover:border-signal hover:text-signal">旅行提醒</a>
              <Link href="/gallery" className="w-fit border-b border-transparent pb-px text-[0.86rem] text-ink-soft no-underline hover:border-signal hover:text-signal">景點相簿</Link>
              <Link href="/blog" className="w-fit border-b border-transparent pb-px text-[0.86rem] text-ink-soft no-underline hover:border-signal hover:text-signal">阿里山文章</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-sans-tc text-[0.8rem] font-bold tracking-[0.08em] text-ink">
              資料說明
            </h4>
            <p className="m-0 text-[0.86rem] leading-[1.85] text-ink-soft">
              內容為非官方旅遊整理，實際班次、開放時間與票價請以阿里山國家風景區管理處及阿里山林業鐵路公告為準。
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 border-t border-line px-6 py-4 font-mono-ticket text-[0.7rem] text-ink-soft">
          <span>© 阿里山導覽・非官方旅遊指南</span>
          <a href="#top" className="text-signal no-underline hover:underline">回到頂端 ↑</a>
        </div>
      </footer>
    </div>
  );
}
