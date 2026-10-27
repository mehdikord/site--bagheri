"use client";

import { useNav } from "@/components/layout";
import { Reveal, SectionHead } from "@/components/ui";
import { POSTS } from "@/data/store";
import { ArrowLeft, Calendar, ChevronLeft, Clock3, Phone, Share2, Tag } from "lucide-react";

export default function BlogList() {
  const { go, setConsultOpen } = useNav();
  const [f, ...rest] = POSTS;
  return (
    <div className="bg-asphalt asphalt-noise min-h-screen">
      <div className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 carbon-fiber" />
        <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-8">
          <div className="text-[11px] font-bold tracking-[0.35em] text-blood-400">RIDER'S JOURNAL — مجله باقری</div>
          <h1 className="text-3xl md:text-5xl font-black mt-2">حرف‌های <span className="text-blood-500">گاراژی</span>، نه تبلیغاتی</h1>
          <p className="text-steel-300 text-sm md:text-base mt-3 max-w-2xl leading-7">راهنمای خرید، نگهداری و مقایسه‌های صادقانه از دل تعمیرگاه — چیزی که فروشنده‌ها معمولاً نمی‌گن.</p>
        </div>
        <div className="hazard h-1.5 relative" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* featured */}
        <Reveal>
          <article onClick={() => go({ page: "article", slug: f.slug })} className="group cursor-pointer grid md:grid-cols-2 bg-pit-900 border border-white/10 hover:border-blood-500/60 cut-corner overflow-hidden transition-all mb-6">
            <div className="relative h-60 md:h-auto overflow-hidden">
              <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-3 right-3 bg-blood-500 text-[11px] font-black px-2.5 py-1 cut-tag">منتخب سردبیر</span>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[11px] font-bold text-steel-400"><span className="text-blood-400">{f.cat}</span><span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{f.date}</span><span className="inline-flex items-center gap-1"><Clock3 className="w-3.5 h-3.5" />{f.read}</span></div>
              <h2 className="font-black text-xl md:text-2xl leading-9 mt-2 group-hover:text-blood-300 transition-colors">{f.title}</h2>
              <p className="text-sm text-steel-300 leading-7 mt-2">{f.ex}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-black text-sm text-blood-300">خواندن مقاله <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /></span>
            </div>
          </article>
        </Reveal>

        <Reveal><SectionHead no="02" en="LATEST DROPS" title="تازه‌های گاراژ" /></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <article onClick={() => go({ page: "article", slug: p.slug })} className="group cursor-pointer bg-pit-800 border border-white/10 hover:border-blood-500/60 cut-corner overflow-hidden transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-44 overflow-hidden shrink-0">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pit-800 to-transparent" />
                  <span className="absolute top-2.5 right-2.5 bg-black/65 backdrop-blur text-[11px] font-bold px-2 py-1 border border-white/15">{p.cat}</span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 text-[11px] text-steel-500 font-bold"><span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span><span className="inline-flex items-center gap-1"><Clock3 className="w-3 h-3" />{p.read}</span></div>
                  <h3 className="font-black leading-7 mt-1.5 group-hover:text-blood-300 transition-colors">{p.title}</h3>
                  <p className="text-[13px] text-steel-400 leading-6 mt-1.5 line-clamp-2">{p.ex}</p>
                  <span className="mt-auto pt-3 text-[13px] font-black text-blood-300">ادامه ←</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* newsletter */}
        <div className="mt-10 bg-navy-900 border border-white/10 cut-corner p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-5 items-center">
          <div>
            <h3 className="font-black text-lg">هر پنجشنبه، یک ترفند گاراژی تو پیامک 📩</h3>
            <p className="text-sm text-steel-300 mt-1">بدون اسپم. فقط چیزهایی که پولت را نجات می‌دهد. (دمو — فقط state محلی)</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full md:w-auto">
            <input placeholder="شماره موبایل" inputMode="tel" className="flex-1 md:w-56 bg-black/40 border border-white/15 focus:border-blood-500 outline-none px-4 py-3 cut-corner-sm num-mono text-center" dir="ltr" />
            <button onClick={() => setConsultOpen(true)} className="bg-blood-500 hover:bg-blood-400 font-black px-6 py-3 cut-corner-sm transition-colors shrink-0">عضویت</button>
          </form>
        </div>
      </div>
    </div>
  );
}
