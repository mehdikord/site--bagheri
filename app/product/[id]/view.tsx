"use client";

import { useMemo, useState } from "react";
import { useNav } from "@/components/layout";
import { Reveal, StockBadge, Price, Stars, Ticker } from "@/components/ui";
import { PRODUCTS, faNum } from "@/data/store";
import { ArrowRight, BadgeCheck, Bell, Check, ChevronLeft, Fuel, Heart, Phone, Share2, ShieldCheck, Truck, Weight, Zap, Wrench } from "lucide-react";

export default function ProductPage({ id }: { id: string }) {
  const { go, setConsultOpen } = useNav();
  const p = PRODUCTS.find((x) => x.id === id) ?? PRODUCTS[0];
  const [imgI, setImgI] = useState(0);
  const [liked, setLiked] = useState(false);
  const [months, setMonths] = useState(12);
  const related = useMemo(() => PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).concat(PRODUCTS.filter((x) => x.cat !== p.cat)).slice(0, 3), [p]);
  const monthly = Math.round((p.price * 1.18) / months);

  return (
    <div className="bg-asphalt min-h-screen">
      {/* breadcrumb */}
      <div className="bg-navy-950 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-[12px] font-bold text-steel-400 overflow-x-auto no-scrollbar whitespace-nowrap">
          <button onClick={() => go({ page: "home" })} className="hover:text-white">نمایشگاه</button>
          <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
          <button onClick={() => go({ page: "catalog" })} className="hover:text-white">کاتالوگ</button>
          <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
          <span className="text-white">{p.fa}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 items-start">
        {/* gallery */}
        <div className="rise">
          <div className="relative bg-pit-900 border border-white/10 cut-corner overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img key={imgI} src={p.images[imgI]} alt={p.fa} className="w-full h-full object-cover rise" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 flex gap-1.5">
                {p.badge && <span className="bg-blood-500 text-[11px] font-black px-2.5 py-1 cut-tag">{p.badge}</span>}
                <span className="bg-black/60 backdrop-blur text-[11px] font-bold px-2.5 py-1 border border-white/15">{p.catFa}</span>
              </div>
              <div className="absolute top-3 left-3 flex gap-1.5">
                <button onClick={() => setLiked(!liked)} className={`grid place-items-center w-9 h-9 cut-corner-sm border backdrop-blur transition-all ${liked ? "bg-blood-500 border-blood-500 text-white" : "bg-black/50 border-white/20 text-white"}`}>
                  <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                </button>
                <button className="grid place-items-center w-9 h-9 cut-corner-sm border bg-black/50 border-white/20 backdrop-blur"><Share2 className="w-4 h-4" /></button>
              </div>
              <span className="absolute bottom-3 left-3 num-mono text-[11px] font-bold bg-black/60 px-2.5 py-1 border border-white/15" dir="ltr">{faNum(imgI + 1)} / {faNum(p.images.length)}</span>
            </div>
            <div className="grid grid-cols-4 gap-2 p-2.5 bg-black/30">
              {p.images.map((s, i) => (
                <button key={i} onClick={() => setImgI(i)} className={`relative aspect-[16/10] overflow-hidden border-2 transition-all ${i === imgI ? "border-blood-500" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={s} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[12px] font-bold text-steel-300 bg-navy-900/60 border border-white/10 cut-corner-sm px-4 py-3">
            <Wrench className="w-4 h-4 text-blood-400 shrink-0" />
            همه عکس‌ها واقعی و از همین واحد انبار گرفته شده — نه کاتالوگ خارجی.
          </div>
          {/* specs table */}
          <div className="mt-5 bg-pit-900 border border-white/10 cut-corner overflow-hidden">
            <div className="px-5 py-3.5 border-b border-white/10 bg-black/30 font-black flex items-center justify-between">
              مشخصات فنی <span className="text-[10px] tracking-[0.3em] text-steel-500 font-bold" dir="ltr">SPEC SHEET</span>
            </div>
            <dl>
              {p.specs.map((s, i) => (
                <div key={i} className={`flex items-center justify-between px-5 py-3 text-sm ${i % 2 ? "bg-white/[0.02]" : ""} border-b border-white/5 last:border-0`}>
                  <dt className="text-steel-400 font-bold">{s.k}</dt>
                  <dd className="font-black text-left">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* buy panel */}
        <div className="lg:sticky lg:top-28 space-y-4">
          <div>
            <div className="text-[11px] font-bold tracking-[0.3em] text-blood-400" dir="ltr">{p.en}</div>
            <h1 className="text-2xl md:text-[2rem] font-black leading-snug mt-1">{p.fa}</h1>
            <div className="flex items-center gap-3 mt-2 text-sm">
              <Stars v={p.rating} />
              <span className="text-steel-400 text-[12px] font-bold num-mono">{faNum(p.sold)} فروش موفق</span>
            </div>
            <div className="mt-3"><StockBadge stock={p.stock} count={p.count} big /></div>
          </div>

          <p className="text-sm md:text-[15px] leading-7.5 leading-8 text-steel-200 bg-white/[0.03] border-r-2 border-blood-500 pr-4 py-1">{p.desc}</p>

          <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 cut-corner-sm overflow-hidden text-center">
            {[[Zap, p.power, "قدرت"], [Weight, p.weight, "وزن"], [Fuel, p.fuel, "مصرف"]].map(([I, v, l]: any, i) => (
              <div key={i} className="bg-pit-900 px-2 py-3.5">
                <I className="w-4 h-4 mx-auto text-blood-400 mb-1.5" />
                <div className="font-black text-sm">{v}</div>
                <div className="text-[11px] text-steel-500 font-bold">{l}</div>
              </div>
            ))}
          </div>

          {/* price box */}
          <div className="relative bg-bone-100 text-navy-950 cut-corner overflow-hidden">
            <div className="hazard h-1.5" />
            <div className="p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[11px] font-black tracking-widest text-navy-600">قیمت قطعی نمایندگی</div>
                  <Price value={p.price} old={p.oldPrice} dark />
                </div>
                <div className="text-left text-[11px] font-bold text-emerald-700 leading-5">✓ سند + پلاک<br />✓ بیمه شخص ثالث</div>
              </div>
              {/* installment mini calc */}
              <div className="mt-4 bg-navy-950 text-white cut-corner-sm p-4">
                <div className="flex items-center justify-between text-[12px] font-bold mb-2.5">
                  <span>خرید اقساطی — پیش‌پرداخت ۴۰٪</span>
                  <span className="num-mono text-blood-300">{faNum(months)} ماهه</span>
                </div>
                <div className="flex gap-1.5 mb-3">
                  {[6, 12, 18, 24].map((m) => (
                    <button key={m} onClick={() => setMonths(m)} className={`flex-1 text-[12px] font-black py-2 cut-corner-sm border transition-all num-mono ${months === m ? "bg-blood-500 border-blood-500" : "border-white/15 text-steel-300 hover:border-white/40"}`}>{faNum(m)}</button>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm font-black">
                  <span className="text-steel-300 text-[12px]">قسط ماهانه حدودی:</span>
                  <span className="num-mono text-lg">{faNum(monthly)} <span className="text-[11px]">تومان</span></span>
                </div>
              </div>
              {p.stock !== "out" ? (
                <div className="grid grid-cols-[1fr_auto] gap-2 mt-4">
                  <button onClick={() => setConsultOpen(true)} className="bg-blood-500 hover:bg-blood-600 text-white font-black py-4 cut-corner-sm transition-all flex items-center justify-center gap-2 text-[15px]">
                    <Phone className="w-4.5 h-4.5 w-5 h-5" /> درخواست مشاوره خرید
                  </button>
                  <button onClick={() => go({ page: "consult" })} className="bg-navy-950 text-white font-bold px-5 cut-corner-sm text-sm hover:bg-navy-800">رزرو تست</button>
                </div>
              ) : (
                <div className="mt-4 space-y-2">
                  <button onClick={() => setConsultOpen(true)} className="w-full bg-navy-950 text-white font-black py-4 cut-corner-sm flex items-center justify-center gap-2">
                    <Bell className="w-4 h-4 text-amber-400" /> خبرم کن وقتی موجود شد
                  </button>
                  <p className="text-[12px] font-bold text-center text-navy-700">سری بعدی: اواخر پاییز — پیش‌ثبت‌نام بدون بیعانه</p>
                </div>
              )}
              <div className="flex items-center justify-center gap-4 mt-3 text-[11px] font-bold text-navy-700">
                <span className="inline-flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> ارسال به سراسر کشور</span>
                <span className="inline-flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> ضمانت اصالت</span>
                <span className="inline-flex items-center gap-1"><BadgeCheck className="w-3.5 h-3.5" /> تست قبل از سند</span>
              </div>
            </div>
          </div>

          <button onClick={() => go({ page: "assistant" })} className="w-full border border-white/15 hover:border-blood-500 bg-white/[0.03] font-bold text-sm py-3.5 cut-corner-sm transition-colors">
            مطمئن نیستی همین مدله؟ <span className="text-blood-400">بذار دستیار چک کنه ←</span>
          </button>
        </div>
      </div>

      <Ticker items={["تست سواری رایگان", "سند همان روز", "۵ سرویس هدیه", "ضمانت ۱۸ ماهه"]} reverse />

      {/* related */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Reveal>
          <div className="flex items-end justify-between mb-5">
            <div>
              <div className="text-[11px] font-bold tracking-[0.35em] text-blood-400">YOU MAY ALSO REV</div>
              <h2 className="text-xl md:text-3xl font-black mt-1">این‌ها هم به کارت میاد</h2>
            </div>
            <button onClick={() => go({ page: "catalog" })} className="hidden sm:inline-flex items-center gap-2 border border-white/15 hover:border-blood-500 px-4 py-2.5 cut-corner-sm text-sm font-bold transition-colors">کاتالوگ <ArrowRight className="w-4 h-4 rotate-180" /></button>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-3.5">
          {related.map((r) => (
            <article key={r.id} onClick={() => { go({ page: "product", id: r.id }); }} className="group cursor-pointer bg-pit-800 border border-white/10 hover:border-blood-500/60 cut-corner overflow-hidden transition-all hover:-translate-y-1">
              <div className="h-40 overflow-hidden relative">
                <img src={r.images[0]} alt={r.fa} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-pit-800 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-black text-[15px] group-hover:text-blood-300 transition-colors">{r.fa}</h3>
                <div className="flex items-end justify-between mt-2">
                  <Price value={r.price} />
                  <Check className="hidden" />
                </div>
                <div className="mt-2"><StockBadge stock={r.stock} count={r.count} /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
