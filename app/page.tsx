"use client";

import { useNav } from "@/components/layout";
import { Reveal, SectionHead, StockBadge, Ticker, Price, Stars } from "@/components/ui";
import { CATS, PRODUCTS } from "@/data/store";
import { ArrowLeft, BadgeCheck, Bot, ChevronLeft, Gauge, MapPin, Phone, ShieldCheck, Wrench, Zap, Fuel, Weight } from "lucide-react";

const HERO = "/images/pexels-34421457.jpg";

export default function Home() {
  const { go, setConsultOpen } = useNav();
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img src={HERO} alt="موتور اسپرت" className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-950 via-navy-950/72 to-navy-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-navy-950/60" />
          <div className="absolute inset-y-0 left-0 w-2/5 speed-lines opacity-60 hidden md:block" />
          {/* red diagonal slash */}
          <div className="absolute top-0 bottom-0 left-[8%] w-24 md:w-40 bg-blood-500/90 -skew-x-[14deg] opacity-90 hidden sm:block" style={{ clipPath: "polygon(0 0,100% 0,78% 100%,0 100%)" }} />
          <div className="absolute top-0 bottom-0 left-[calc(8%+6.5rem)] md:left-[calc(8%+11rem)] w-2 bg-white/70 -skew-x-[14deg] hidden sm:block" />
        </div>

        {/* vertical side label */}
        <div className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
          <span className="text-[10px] tracking-[0.5em] font-bold text-steel-400" style={{ writingMode: "vertical-rl" }}>SHOWROOM — TEHRAN 1378</span>
          <span className="w-px h-24 bg-gradient-to-b from-blood-500 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center min-h-[86vh]">
          <div className="rise">
            <div className="inline-flex items-center gap-2 bg-black/50 border border-white/15 backdrop-blur px-3 py-1.5 cut-corner-sm text-[11px] md:text-xs font-bold mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              نمایشگاه باز است — امروز ۹ تا ۲۱
              <span className="text-steel-400">|</span>
              <span className="text-blood-300">+۱۴۰ دستگاه آماده تحویل</span>
            </div>
            <h1 className="font-black leading-[1.08] text-[2.1rem] sm:text-5xl lg:text-[3.6rem]">
              موتوری که
              <span className="relative inline-block text-blood-500 mx-2">بهت میاد
                <svg className="absolute -bottom-2 right-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none"><path d="M2 8 Q100 -2 198 6" stroke="#e5231b" strokeWidth="4" fill="none" /></svg>
              </span>
              رو <br /> همین‌جا پیدا کن،
              <span className="block text-stroke mt-1 text-[1.6rem] sm:text-4xl lg:text-5xl tracking-tight">نه فقط ببین — سوارش شو</span>
            </h1>
            <p className="text-steel-300 text-sm md:text-base leading-7 md:leading-8 mt-5 max-w-lg">
              نمایندگی باقری؛ از اسکوتر شهری تا اسپرت پیست، با قیمت به‌روز، موجودی واقعی و مشاوره‌ای که مجبورت به خرید نمی‌کند. بیا قدم بزن، لمس کن، تست بگیر.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <button onClick={() => go({ page: "assistant" })} className="group flex items-center justify-center gap-2.5 bg-blood-500 hover:bg-blood-400 font-black text-base px-7 py-4 cut-corner shadow-[0_14px_40px_rgba(229,35,27,0.45)] transition-all hover:-translate-y-1">
                <Bot className="w-5 h-5" /> دستیار انتخاب موتور
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              </button>
              <button onClick={() => go({ page: "catalog" })} className="flex items-center justify-center gap-2 border border-white/25 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur font-black px-7 py-4 cut-corner transition-all">
                <Gauge className="w-5 h-5 text-blood-400" /> ورود به نمایشگاه
              </button>
            </div>
            {/* live stats */}
            <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 cut-corner-sm overflow-hidden mt-8 max-w-lg">
              {[
                ["۱۴۰+", "موتور آماده تحویل"],
                ["۲۷", "سال سابقه"],
                ["۹۶٪", "رضایت خریداران"],
              ].map(([n, l], i) => (
                <div key={i} className="bg-navy-950/90 backdrop-blur px-2 py-3.5 text-center">
                  <div className="font-black text-xl md:text-2xl num-mono text-white">{n}</div>
                  <div className="text-[11px] text-steel-400 font-bold mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* spec HUD card */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 border border-blood-500/30 cut-corner translate-x-3 translate-y-3" />
            <div className="relative bg-navy-950/85 backdrop-blur-xl border border-white/12 cut-corner overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/30">
                <span className="text-[11px] font-black tracking-[0.25em] text-blood-400">● LIVE — BR250R روی استند</span>
                <span className="text-[11px] num-mono text-steel-400">UNIT 07</span>
              </div>
              <div className="p-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["۲۸", "اسب‌بخار"],
                  ["۲۴۹", "سی‌سی"],
                  ["۱۹۸", "km/h تاپ"],
                ].map(([n, l], i) => (
                  <div key={i} className="bg-black/40 border border-white/10 py-3 cut-corner-sm">
                    <div className="font-black text-2xl num-mono">{n}</div>
                    <div className="text-[11px] text-steel-400 font-bold">{l}</div>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between text-xs font-bold mb-2"><span className="text-steel-300">دور موتور نمایشی</span><span className="num-mono text-blood-400">9,500 RPM</span></div>
                <div className="h-2 bg-black/60 border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-y-0 right-0 w-[78%] bg-gradient-to-l from-blood-500 via-blood-400 to-amber-400" />
                </div>
                <button onClick={() => go({ page: "product", id: "br250r" })} className="mt-4 w-full bg-white text-navy-950 hover:bg-blood-500 hover:text-white font-black py-3 cut-corner-sm transition-colors flex items-center justify-center gap-2">
                  دیدن این موتور <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker items={["تست سواری رایگان", "سند و پلاک همان روز", "۵ سرویس دوره‌ای هدیه", "ضمانت ۱۸ ماهه", "خرید اقساطی بدون ضامن", "تأمین قطعات تا ۱۰ سال"]} />

      {/* ============ CATEGORIES — diagonal pit-lane ============ */}
      <section className="relative bg-asphalt asphalt-noise py-14 md:py-20 overflow-hidden">
        <div className="absolute -top-6 -left-10 text-[9rem] md:text-[13rem] font-black text-white/[0.03] leading-none select-none num-mono" dir="ltr">01</div>
        <div className="max-w-7xl mx-auto px-4">
          <Reveal><SectionHead no="01" en="PIT-LANE CATEGORIES" title="اول خط‌کشی کن؛ دنبال چی اومدی؟" desc="مثل راهروهای نمایشگاه — هر لاین یک دنیاست. بزن تو لاین خودت." onMore={() => go({ page: "catalog" })} /></Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { t: "خیابانی و نیکد", e: "STREET", n: "۳۲ مدل", img: "/images/pexels-12125503.jpg", cat: "street" },
              { t: "اسپرت و مسابقه", e: "SPORT", n: "۱۸ مدل", img: "/images/pexels-34421457.jpg", cat: "sport" },
              { t: "اسکوتر شهری", e: "SCOOTER", n: "۲۴ مدل", img: "/images/pexels-10207634.jpg", cat: "scooter" },
              { t: "آفرود و ادونچر", e: "ADVENTURE", n: "۱۵ مدل", img: "/images/pexels-32808516.jpg", cat: "adventure" },
              { t: "قطعات اصلی", e: "PARTS", n: "۱۲۰۰+ قلم", img: "/images/pexels-11890956.jpg", cat: "parts" },
              { t: "ابزار تعمیرگاهی", e: "TOOLS", n: "۳۴۰+ قلم", img: "/images/pexels-9606734.jpg", cat: "tools" },
              { t: "کلاه و پوشاک", e: "GEAR", n: "۲۱۰+ مدل", img: "/images/pexels-12993739.jpg", cat: "gear" },
              { t: "دستیار هوشمند", e: "AI GUIDE", n: "۶۰ ثانیه", img: "/images/pexels-33153044.jpg", cat: "__assistant" },
            ].map((c, i) => (
              <Reveal key={i} delay={(i % 4) * 90}>
                <button onClick={() => c.cat === "__assistant" ? go({ page: "assistant" }) : go({ page: "catalog" })}
                  className="group relative w-full text-right overflow-hidden cut-corner border border-white/10 hover:border-blood-500/70 transition-colors bg-navy-900">
                  <div className="relative h-36 sm:h-44 md:h-52 overflow-hidden">
                    <img src={c.img} alt={c.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-black tracking-[0.25em] bg-black/60 backdrop-blur px-2 py-1 border border-white/15" dir="ltr">{c.e}</span>
                  </div>
                  <div className="relative px-3.5 py-3 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-black text-sm md:text-base">{c.t}</div>
                      <div className="text-[11px] text-steel-400 font-bold num-mono mt-0.5">{c.n}</div>
                    </div>
                    <span className="grid place-items-center w-9 h-9 bg-blood-500/15 border border-blood-500/40 text-blood-400 group-hover:bg-blood-500 group-hover:text-white transition-all cut-corner-sm shrink-0"><ChevronLeft className="w-4 h-4" /></span>
                  </div>
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-blood-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
                </button>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar thin-scroll pb-1">
            {CATS.slice(1).map((c) => (
              <button key={c.id} onClick={() => go({ page: "catalog" })} className="shrink-0 text-xs font-bold border border-white/12 hover:border-blood-500 px-4 py-2 cut-corner-sm bg-white/[0.03]">#{c.fa}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SHOWROOM WALK — featured strip ============ */}
      <section className="relative bg-navy-950 clip-both py-16 md:py-24 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 carbon-fiber opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal><SectionHead no="02" en="TONIGHT ON THE FLOOR" title="امشب روی استند نمایشگاه" desc="ویترین امشب؛ موجودی و قیمت دقیقاً همین لحظه. فردا ممکن است یکی‌شان رفته باشد." onMore={() => go({ page: "catalog" })} moreLabel="کل کاتالوگ" /></Reveal>
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible md:mx-0 md:px-0">
            {featured.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 80} className="snap-start shrink-0 w-[82vw] sm:w-[46vw] md:w-auto">
                <article onClick={() => go({ page: "product", id: p.id })} className="group cursor-pointer bg-pit-800 border border-white/10 hover:border-blood-500/60 cut-corner overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                  <div className="relative h-52 md:h-56 overflow-hidden">
                    <img src={p.images[0]} alt={p.fa} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pit-800 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-start">
                      {p.badge ? <span className="bg-blood-500 text-white text-[11px] font-black px-2.5 py-1 cut-tag">{p.badge}</span> : null}
                      {p.oldPrice ? <span className="bg-amber-400 text-black text-[11px] font-black px-2.5 py-1 cut-tag">تخفیف جشنواره</span> : null}
                    </div>
                    <span className="absolute bottom-2.5 left-3 num-mono text-[10px] font-bold tracking-[0.2em] text-white/60" dir="ltr">{String(i + 1).padStart(2, "0")} / 06</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-black tracking-[0.25em] text-blood-400" dir="ltr">{p.en}</span>
                      <Stars v={p.rating} />
                    </div>
                    <h3 className="font-black text-base md:text-lg leading-7 group-hover:text-blood-300 transition-colors">{p.fa}</h3>
                    <div className="flex items-center gap-3 text-[11px] text-steel-400 font-bold mt-2">
                      <span className="inline-flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-blood-400" />{p.power}</span>
                      <span className="inline-flex items-center gap-1"><Weight className="w-3.5 h-3.5" />{p.weight}</span>
                      <span className="inline-flex items-center gap-1"><Fuel className="w-3.5 h-3.5" />{p.fuel}</span>
                    </div>
                    <div className="flex items-end justify-between mt-3 pt-3 border-t border-dashed border-white/12">
                      <Price value={p.price} old={p.oldPrice} />
                      <StockBadge stock={p.stock} count={p.count} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="md:hidden text-center text-[11px] text-steel-500 font-bold mt-1">← بکش تا همه استندها را ببینی →</p>
        </div>
      </section>

      {/* ============ ASSISTANT TEASER — diagnostic console ============ */}
      <section className="relative bg-asphalt py-14 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -right-8 text-[10rem] md:text-[16rem] font-black text-white/[0.025] leading-none select-none">؟</div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="text-[11px] font-bold tracking-[0.35em] text-blood-400 mb-2">03 — SMART FIT ASSISTANT</div>
            <h2 className="text-2xl md:text-[2.6rem] font-black leading-[1.25]">۶۰ ثانیه جواب بده،<br />موتورِ <span className="text-blood-500">اندازه‌ی خودت</span> رو تحویل بگیر</h2>
            <p className="text-steel-300 text-sm md:text-base leading-7 mt-4 max-w-lg">بودجه، مسیر روزانه، سابقه سواری و سلیقه‌ات را می‌گیریم و از بین کل کاتالوگ ۳ پیشنهاد دقیق می‌دهیم — با دلیل، نه شانسی. آخرش هم مستقیم وصلت می‌کنیم به کارشناس.</p>
            <ul className="mt-5 space-y-2.5 text-sm font-bold">
              {[["قدم ۱", "بودجه‌ات چقدره؟"], ["قدم ۲", "کجا و چطور سوار می‌شی؟"], ["قدم ۳", "سابقه و سلیقه‌ات چیه؟"]].map(([s, t], i) => (
                <li key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/10 cut-corner-sm px-4 py-3">
                  <span className="bg-blood-500 text-white text-[11px] font-black px-2 py-1 cut-corner-sm shrink-0">{s}</span> {t}
                </li>
              ))}
            </ul>
            <button onClick={() => go({ page: "assistant" })} className="mt-6 inline-flex items-center gap-2 bg-blood-500 hover:bg-blood-400 font-black px-8 py-4 cut-corner shadow-[0_14px_40px_rgba(229,35,27,0.45)] transition-all hover:-translate-y-1">
              <Bot className="w-5 h-5" /> شروع دستیار هوشمند <ArrowLeft className="w-4 h-4" />
            </button>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-3 border border-white/10 cut-corner -translate-x-2 translate-y-2" />
              <div className="relative bg-pit-900 border border-white/12 cut-corner overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
                  <span className="w-2.5 h-2.5 rounded-full bg-blood-500" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="mr-auto text-[11px] num-mono text-steel-400" dir="ltr">BAGHERI-ECU v2.4</span>
                </div>
                <div className="p-4 md:p-5 space-y-3 text-sm">
                  <div className="flex justify-start"><div className="bg-navy-800 border border-white/10 cut-corner-sm px-4 py-2.5 max-w-[85%]">سلام رفیق! 🏍️ من دستیار باقری‌ام. بگو روزانه چقدر راه میری؟</div></div>
                  <div className="flex justify-end"><div className="bg-blood-500 text-white cut-corner-sm px-4 py-2.5 font-bold max-w-[85%]">روزی ۳۰ کیلومتر، ترافیک اتوبان</div></div>
                  <div className="flex justify-start"><div className="bg-navy-800 border border-white/10 cut-corner-sm px-4 py-2.5 max-w-[85%]">فهمیدم. بودجت حدوداً؟</div></div>
                  <div className="flex justify-end"><div className="bg-blood-500 text-white cut-corner-sm px-4 py-2.5 font-bold max-w-[85%]">تا ۱۷۰ میلیون</div></div>
                  <div className="flex justify-start"><div className="bg-emerald-500/10 border border-emerald-500/30 cut-corner-sm px-4 py-2.5 max-w-[90%] text-emerald-200 font-bold">✓ تحلیل شد: آپاچی RTR 200 — تطابق ۹۴٪<br /><span className="text-[12px] font-normal text-emerald-200/80">کم‌مصرف برای ترافیک + قدرت کافی اتوبان + داخل بودجت</span></div></div>
                  <div className="flex items-center gap-1.5 pt-1"><span className="w-1.5 h-1.5 rounded-full bg-steel-400 typing-dot" /><span className="w-1.5 h-1.5 rounded-full bg-steel-400 typing-dot" style={{ animationDelay: "0.2s" }} /><span className="w-1.5 h-1.5 rounded-full bg-steel-400 typing-dot" style={{ animationDelay: "0.4s" }} /><span className="text-[11px] text-steel-500 font-bold mr-1">در حال نوشتن پیشنهاد دوم…</span></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES strip ============ */}
      <section className="bg-blood-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          {[
            [ShieldCheck, "ضمانت واقعی", "تا ۱۸ ماه + سرویس رایگان"],
            [Wrench, "تعمیرگاه تخصصی", "۱۰ خط سرویس + قطعه اصلی"],
            [BadgeCheck, "سند همان‌روز", "پلاک و بیمه در نمایندگی"],
            [MapPin, "تست سواری", "پیست اختصاصی پشت نمایشگاه"],
          ].map(([I, t, d]: any, i) => (
            <Reveal key={i} delay={i * 70} className="flex items-start gap-3">
              <span className="grid place-items-center w-11 h-11 bg-black/25 cut-corner shrink-0"><I className="w-5 h-5" /></span>
              <span><span className="block font-black text-sm md:text-base">{t}</span><span className="block text-[12px] text-white/75 mt-0.5">{d}</span></span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CONSULT CTA — garage door ============ */}
      <section className="relative overflow-hidden">
        <img src="/images/pexels-5803274.jpg" alt="مشاوره" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/82 bg-gradient-to-l from-navy-950 via-navy-950/70 to-blood-700/40" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <Reveal>
            <div className="text-[11px] font-bold tracking-[0.35em] text-blood-300 mb-2">04 — FREE PIT-CREW CALL</div>
            <h2 className="text-2xl md:text-4xl font-black leading-snug">هنوز دو‌دلی؟ بذار یه آدم واقعی<br className="hidden md:block" /> راهنماییت کنه — <span className="text-blood-400">رایگان.</span></h2>
            <p className="text-steel-200 text-sm md:text-base mt-3 leading-7 max-w-xl">شماره‌تو بذار، کارشناس فروش (نه ربات!) زنگ می‌زنه؛ قیمت روز، موجودی انبار و شرایط اقساط رو شفاف میگه.</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-navy-950/85 backdrop-blur border border-white/12 cut-corner p-5 md:p-6 w-full lg:w-[380px]">
              <div className="font-black mb-1 flex items-center gap-2"><Phone className="w-4 h-4 text-blood-400" /> همین حالا درخواست بده</div>
              <p className="text-[12px] text-steel-400 mb-4">میانگین زمان تماس: ۲۷ دقیقه</p>
              <button onClick={() => setConsultOpen(true)} className="w-full bg-blood-500 hover:bg-blood-400 font-black py-4 cut-corner-sm transition-colors">ثبت شماره تماس</button>
              <button onClick={() => go({ page: "consult" })} className="w-full mt-2 border border-white/15 hover:border-blood-500 font-bold py-3 cut-corner-sm text-sm transition-colors">فرم کامل مشاوره</button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


