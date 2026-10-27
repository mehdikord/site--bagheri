"use client";

import { useState } from "react";
import { useNav } from "@/components/layout";
import { PRODUCTS, faNum } from "@/data/store";
import { Bell, FileText, Heart, History, LogOut, Settings, ShoppingBag, Wrench } from "lucide-react";

export default function Profile() {
  const { go } = useNav();
  const [tab, setTab] = useState(0);
  return (
    <div className="bg-asphalt asphalt-noise min-h-screen">
      <div className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 carbon-fiber" />
        <div className="relative max-w-5xl mx-auto px-4 pt-8 pb-0 flex flex-col sm:flex-row items-center gap-5">
          <div className="relative">
            <span className="grid place-items-center w-20 h-20 bg-gradient-to-br from-blood-500 to-blood-700 cut-corner font-black text-4xl">ع</span>
            <span className="absolute -bottom-1.5 -left-1.5 bg-emerald-500 text-[10px] font-black px-2 py-0.5 cut-corner-sm text-black">سطح نقره‌ای</span>
          </div>
          <div className="flex-1 text-center sm:text-right">
            <h1 className="font-black text-2xl">علی رضایی</h1>
            <div className="text-[12px] text-steel-400 num-mono mt-1" dir="ltr">0912 ••• 4521 — عضو از ۱۴۰۳</div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3 text-[11px] font-bold">
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 cut-corner-sm">🏍️ آپاچی RTR 200</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 cut-corner-sm">⭐ {faNum(340)} امتیاز باشگاه</span>
            </div>
          </div>
          <button onClick={() => go({ page: "home" })} className="flex items-center gap-1.5 text-[12px] font-bold text-steel-400 hover:text-red-300 border border-white/10 hover:border-red-500/50 px-3.5 py-2 cut-corner-sm transition-colors"><LogOut className="w-3.5 h-3.5" /> خروج (دمو)</button>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 mt-6 flex gap-1 overflow-x-auto no-scrollbar">
          {[["سفارش‌ها", ShoppingBag], ["علاقه‌مندی‌ها", Heart], ["نوبت سرویس", Wrench], ["پیام‌ها", Bell]].map(([t, I]: any, i) => (
            <button key={i} onClick={() => setTab(i)} className={`flex items-center gap-2 px-5 py-3 text-sm font-black whitespace-nowrap border-b-2 transition-all ${tab === i ? "border-blood-500 text-white bg-white/5" : "border-transparent text-steel-400 hover:text-white"}`}>
              <I className="w-4 h-4" /> {t}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6">
        {tab === 0 && (
          <div className="space-y-3 rise">
            {[
              ["آپاچی RTR 200 — سند قطعی", "۱۲ مرداد ۱۴۰۵", "تحویل شده", "emerald"],
              ["کلاه کربن AGV سایز L", "۳ مهر ۱۴۰۵", "در راه — تیپاکس", "amber"],
              ["سرویس دوره‌ای ۶٬۰۰۰", "رزرو: ۵ آبان", "نوبت ثبت شد", "sky"],
            ].map(([t, d, s, c]: any, i) => (
              <div key={i} className="bg-pit-900 border border-white/10 cut-corner p-4 flex items-center gap-4">
                <span className="grid place-items-center w-11 h-11 bg-navy-800 cut-corner-sm shrink-0"><ShoppingBag className="w-5 h-5 text-blood-400" /></span>
                <div className="flex-1"><div className="font-black text-sm">{t}</div><div className="text-[12px] text-steel-500 mt-0.5">{d}</div></div>
                <span className={`text-[11px] font-black px-2.5 py-1 cut-corner-sm border shrink-0 ${c === "emerald" ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" : c === "amber" ? "bg-amber-500/10 text-amber-300 border-amber-500/30" : "bg-sky-500/10 text-sky-300 border-sky-500/30"}`}>{s}</span>
              </div>
            ))}
          </div>
        )}
        {tab === 1 && (
          <div className="grid sm:grid-cols-2 gap-3 rise">
            {PRODUCTS.slice(0, 4).map((p) => (
              <button key={p.id} onClick={() => go({ page: "product", id: p.id })} className="text-right bg-pit-900 border border-white/10 hover:border-blood-500/60 cut-corner overflow-hidden flex gap-3 p-3 transition-colors">
                <img src={p.images[0]} alt={p.fa} className="w-24 h-20 object-cover cut-corner-sm shrink-0" />
                <span><span className="block font-black text-sm">{p.fa}</span><span className="block num-mono text-[13px] font-black text-blood-300 mt-1">{faNum(p.price)} ت</span></span>
              </button>
            ))}
          </div>
        )}
        {tab === 2 && (
          <div className="bg-pit-900 border border-white/10 cut-corner p-6 rise text-center">
            <Wrench className="w-10 h-10 mx-auto text-blood-400" />
            <h3 className="font-black text-lg mt-2">نوبت بعدی سرویس: ۵ آبان — ساعت ۱۰</h3>
            <p className="text-sm text-steel-400 mt-1">خط ۳ تعمیرگاه، سرویس ۶٬۰۰۰ + تعویض لنت جلو</p>
            <div className="flex gap-2 justify-center mt-4">
              <button className="bg-blood-500 font-black px-6 py-2.5 cut-corner-sm text-sm">جابه‌جایی نوبت</button>
              <button className="border border-white/15 font-bold px-6 py-2.5 cut-corner-sm text-sm">لغو</button>
            </div>
          </div>
        )}
        {tab === 3 && (
          <div className="space-y-2.5 rise">
            {[["سرویس ۶٬۰۰۰ نزدیکه!", "موتورت ۵٬۴۰۰ تا کار کرده؛ وقتشه نوبت بگیری.", "۲ ساعت پیش"], ["تخفیف جشنواره پاییزه", "تا ۱۵٪ روی کلاه و پوشاک — فقط تا آخر هفته.", "دیروز"]].map(([t, d, w], i) => (
              <div key={i} className="bg-pit-900 border border-white/10 cut-corner p-4 flex gap-3"><Bell className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><div><div className="font-black text-sm">{t}</div><div className="text-[13px] text-steel-400 mt-0.5">{d}</div><div className="text-[11px] text-steel-600 mt-1">{w}</div></div></div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-3 gap-2 mt-6">
          {[["سوابق خرید", History, 0], ["گارانتی‌ها", FileText, 0], ["تنظیمات", Settings, 0]].map(([t, I, ti]: any, i) => (
            <button key={i} onClick={() => setTab(ti)} className="bg-white/[0.03] border border-white/10 hover:border-blood-500/50 cut-corner-sm py-4 text-[12px] font-bold text-steel-300 hover:text-white transition-colors"><I className="w-5 h-5 mx-auto mb-1.5 text-steel-400" />{t}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
