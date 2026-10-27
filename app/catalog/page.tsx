"use client";

import { useMemo, useState } from "react";
import { useNav } from "@/components/layout";
import { Reveal, StockBadge, Price, Stars } from "@/components/ui";
import { CATS, PRODUCTS, faNum } from "@/data/store";
import { ArrowUpDown, Search, SlidersHorizontal, Weight, Zap, X } from "lucide-react";

const BUDGETS = [
  { id: "all", fa: "هر بودجه‌ای" },
  { id: "low", fa: "تا ۱۰۰ میلیون" },
  { id: "mid", fa: "۱۰۰ تا ۲۵۰ میلیون" },
  { id: "high", fa: "بالای ۲۵۰ میلیون" },
];
const USAGES = [
  { id: "all", fa: "هر کاربردی" },
  { id: "city", fa: "شهری روزانه" },
  { id: "work", fa: "کاری / پیک" },
  { id: "trip", fa: "سفر" },
  { id: "offroad", fa: "آفرود" },
  { id: "race", fa: "پیست و هیجان" },
  { id: "style", fa: "استایل" },
];

export default function Catalog() {
  const { go } = useNav();
  const [cat, setCat] = useState("all");
  const [budget, setBudget] = useState("all");
  const [usage, setUsage] = useState("all");
  const [stock, setStock] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("pop");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const list = useMemo(() => {
    let r = [...PRODUCTS];
    if (cat !== "all") r = r.filter((p) => p.cat === cat);
    if (budget !== "all") r = r.filter((p) => p.budget === budget);
    if (usage !== "all") r = r.filter((p) => p.usages.includes(usage));
    if (stock === "in") r = r.filter((p) => p.stock !== "out");
    if (q.trim()) r = r.filter((p) => (p.fa + p.en + p.catFa).includes(q.trim()));
    if (sort === "cheap") r.sort((a, b) => a.price - b.price);
    else if (sort === "exp") r.sort((a, b) => b.price - a.price);
    else if (sort === "rate") r.sort((a, b) => b.rating - a.rating);
    else r.sort((a, b) => b.sold - a.sold);
    return r;
  }, [cat, budget, usage, stock, q, sort]);

  const activeCount = [cat, budget, usage, stock].filter((v) => v !== "all").length + (q ? 1 : 0);

  const panel = (
    <div className="space-y-5">
      <div>
        <div className="text-[11px] font-black tracking-[0.25em] text-steel-400 mb-2">دسته‌بندی</div>
        <div className="flex flex-wrap gap-1.5">
          {CATS.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)}
              className={`text-[12px] font-bold px-3 py-2 cut-corner-sm border transition-all ${cat === c.id ? "bg-blood-500 border-blood-500 text-white" : "bg-white/[0.04] border-white/12 text-steel-300 hover:border-white/40"}`}>
              {c.fa}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] font-black tracking-[0.25em] text-steel-400 mb-2">بودجه</div>
        <div className="grid grid-cols-2 gap-1.5">
          {BUDGETS.map((b) => (
            <button key={b.id} onClick={() => setBudget(b.id)}
              className={`text-[12px] font-bold px-3 py-2.5 cut-corner-sm border transition-all ${budget === b.id ? "bg-white text-navy-950 border-white" : "bg-white/[0.04] border-white/12 text-steel-300 hover:border-white/40"}`}>
              {b.fa}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] font-black tracking-[0.25em] text-steel-400 mb-2">کاربرد</div>
        <div className="flex flex-wrap gap-1.5">
          {USAGES.map((u) => (
            <button key={u.id} onClick={() => setUsage(u.id)}
              className={`text-[12px] font-bold px-3 py-2 cut-corner-sm border transition-all ${usage === u.id ? "bg-navy-600 border-navy-600 text-white" : "bg-white/[0.04] border-white/12 text-steel-300 hover:border-white/40"}`}>
              {u.fa}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 cut-corner-sm px-3.5 py-3">
        <span className="text-[12px] font-bold">فقط موجودها</span>
        <button onClick={() => setStock(stock === "in" ? "all" : "in")}
          className={`w-11 h-6 relative transition-colors ${stock === "in" ? "bg-emerald-500" : "bg-white/15"}`} style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}>
          <span className={`absolute top-0.5 h-5 w-5 bg-white transition-all ${stock === "in" ? "left-0.5" : "right-0.5"}`} style={{ clipPath: "inherit" }} />
        </button>
      </div>
      {(activeCount > 0) && (
        <button onClick={() => { setCat("all"); setBudget("all"); setUsage("all"); setStock("all"); setQ(""); }} className="w-full text-[12px] font-bold text-blood-300 hover:text-white border border-blood-500/40 hover:bg-blood-500 py-2.5 cut-corner-sm transition-all">
          پاک‌کردن همه فیلترها ({faNum(activeCount)})
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-asphalt asphalt-noise min-h-screen">
      {/* head */}
      <div className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 carbon-fiber" />
        <div className="absolute bottom-0 inset-x-0 hazard h-1.5" />
        <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-8">
          <div className="text-[11px] font-bold tracking-[0.35em] text-blood-400">FULL CATALOG — ۱۴۰۵</div>
          <h1 className="text-3xl md:text-5xl font-black mt-2">کل نمایشگاه، <span className="text-blood-500">یک‌جا</span> جلوت</h1>
          <p className="text-steel-300 text-sm md:text-base mt-3 max-w-2xl leading-7">نه چند نمونه؛ کل موجودی واقعی انبار با قیمت به‌روز. هر چی ناموجوده هم شفاف گفتیم تا وقتت تلف نشه.</p>
          <div className="flex flex-col sm:flex-row gap-2.5 mt-6">
            <label className="flex-1 flex items-center gap-2 bg-black/40 border border-white/15 focus-within:border-blood-500 px-4 py-3 cut-corner-sm transition-colors">
              <Search className="w-4.5 h-4.5 w-5 h-5 text-steel-400 shrink-0" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="جست‌وجو: آپاچی، NMAX، کلاه کربن…" className="bg-transparent outline-none w-full text-sm placeholder:text-steel-500" />
              {q && <button onClick={() => setQ("")}><X className="w-4 h-4 text-steel-400" /></button>}
            </label>
            <label className="flex items-center gap-2 bg-black/40 border border-white/15 px-4 py-3 cut-corner-sm text-sm font-bold">
              <ArrowUpDown className="w-4 h-4 text-blood-400" />
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent outline-none text-sm font-bold [&>option]:text-black">
                <option value="pop">پرفروش‌ترین</option>
                <option value="cheap">ارزان‌ترین</option>
                <option value="exp">گران‌ترین</option>
                <option value="rate">بالاترین امتیاز</option>
              </select>
            </label>
            <button onClick={() => setFiltersOpen(!filtersOpen)} className="lg:hidden flex items-center justify-center gap-2 bg-blood-500 font-black px-5 py-3 cut-corner-sm text-sm">
              <SlidersHorizontal className="w-4 h-4" /> فیلترها {activeCount > 0 && <span className="bg-white text-blood-600 text-[11px] font-black w-5 h-5 grid place-items-center rounded-full num-mono">{faNum(activeCount)}</span>}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-[280px_1fr] gap-6 items-start">
        <aside className="hidden lg:block sticky top-28 bg-pit-900/80 backdrop-blur border border-white/10 cut-corner p-5">{panel}</aside>
        {filtersOpen && <div className="lg:hidden bg-pit-900 border border-white/10 cut-corner p-5 rise">{panel}</div>}

        <div>
          <div className="flex items-center justify-between mb-4 text-[12px] font-bold text-steel-400">
            <span><span className="text-white num-mono text-base font-black">{faNum(list.length)}</span> محصول پیدا شد</span>
            <span className="hidden sm:inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" /> قیمت‌ها امروز به‌روز شده</span>
          </div>
          {list.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/15 cut-corner">
              <div className="text-5xl mb-3">🏜️</div>
              <div className="font-black text-lg">چیزی پیدا نشد!</div>
              <p className="text-sm text-steel-400 mt-1">فیلترها رو شل‌تر کن یا از دستیار کمک بگیر.</p>
              <button onClick={() => go({ page: "assistant" })} className="mt-4 bg-blood-500 font-black px-6 py-3 cut-corner-sm">رفتن به دستیار هوشمند</button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3.5 md:gap-4">
              {list.map((p, i) => (
                <Reveal key={p.id} delay={Math.min(i, 6) * 60}>
                  <article onClick={() => go({ page: "product", id: p.id })} className="group cursor-pointer bg-pit-800 border border-white/10 hover:border-blood-500/60 cut-corner overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-full flex flex-col">
                    <div className="relative h-44 overflow-hidden shrink-0">
                      <img src={p.images[0]} alt={p.fa} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-pit-800 via-transparent to-transparent" />
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-black bg-black/65 backdrop-blur px-2 py-1 border border-white/15">{p.catFa}</span>
                      {p.oldPrice && <span className="absolute top-2.5 left-2.5 text-[10px] font-black bg-amber-400 text-black px-2 py-1 cut-tag">٪{faNum(Math.round((1 - p.price / p.oldPrice) * 100))} تخفیف</span>}
                    </div>
                    <div className="p-3.5 flex flex-col flex-1">
                      <div className="flex items-center justify-between"><span className="text-[10px] font-bold tracking-[0.2em] text-steel-500" dir="ltr">{p.en}</span><Stars v={p.rating} /></div>
                      <h3 className="font-black text-[15px] leading-7 mt-0.5 group-hover:text-blood-300 transition-colors">{p.fa}</h3>
                      <div className="flex items-center gap-2.5 text-[11px] text-steel-400 font-bold mt-1.5">
                        <span className="inline-flex items-center gap-1"><Zap className="w-3 h-3 text-blood-400" />{p.power}</span>
                        <span className="inline-flex items-center gap-1"><Weight className="w-3 h-3" />{p.weight}</span>
                      </div>
                      <div className="flex items-end justify-between mt-auto pt-3 border-t border-dashed border-white/10 mt-3">
                        <Price value={p.price} old={p.oldPrice} />
                      </div>
                      <div className="mt-2"><StockBadge stock={p.stock} count={p.count} /></div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
          {/* bottom assistant nudge */}
          <button onClick={() => go({ page: "assistant" })} className="mt-8 w-full group relative overflow-hidden bg-navy-900 border border-blood-500/40 hover:border-blood-500 cut-corner p-5 flex items-center gap-4 text-right transition-colors">
            <span className="grid place-items-center w-12 h-12 bg-blood-500 cut-corner shrink-0 font-black text-xl">؟</span>
            <span className="flex-1"><span className="block font-black">بین این همه مدل گیج شدی؟</span><span className="block text-[12px] text-steel-300 mt-0.5">بذار دستیار در ۶۰ ثانیه ۳ گزینه دقیق بدهد</span></span>
            <span className="shrink-0 text-sm font-black text-blood-300 group-hover:-translate-x-1 transition-transform">شروع ←</span>
          </button>
        </div>
      </div>
    </div>
  );
}
