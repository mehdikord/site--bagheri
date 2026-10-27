"use client";

import { useNav } from "@/components/layout";
import { Reveal } from "@/components/ui";
import { POSTS } from "@/data/store";
import { CalendarCheck, ChevronLeft, Clock3, MapPin, Phone } from "lucide-react";

export default function About() {
  const { go, setConsultOpen } = useNav();
  return (
    <div className="bg-asphalt min-h-screen">
      <div className="relative overflow-hidden">
        <img src="/images/pexels-32678623.jpg" alt="نمایشگاه باقری" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-navy-950/70 to-navy-950/50" />
        <div className="relative max-w-5xl mx-auto px-4 pt-14 pb-10">
          <div className="text-[11px] font-bold tracking-[0.35em] text-blood-400">SINCE 1378 — ۲۷ سال گاز دادن</div>
          <h1 className="text-3xl md:text-5xl font-black mt-2 leading-tight">ما موتور نمی‌فروشیم؛<br />هم‌رکاب <span className="text-blood-500">انتخاب</span> می‌کنیم</h1>
          <p className="text-steel-200 text-sm md:text-base leading-8 mt-4 max-w-2xl">از یه مغازه ۴۰ متری در جاده مخصوص شروع کردیم؛ امروز ۲٬۰۰۰ متر نمایشگاه + تعمیرگاه ۱۰ خطه + باشگاه ۸۰۰ نفره سوارکاران. هنوز هم حاج‌آقا باقری خودش شنبه‌ها تو نمایشگاهه.</p>
        </div>
        <div className="hazard h-1.5 relative" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 cut-corner overflow-hidden">
          {[["۲۷", "سال سابقه"], ["۱۴هزار+", "موتور تحویلی"], ["۱۰", "خط تعمیرگاه"], ["۴.۸", "امتیاز گوگل"]].map(([n, l], i) => (
            <Reveal key={i} delay={i * 70} className="bg-pit-900 p-5 md:p-7 text-center">
              <div className="font-black text-2xl md:text-4xl num-mono text-white">{n}</div>
              <div className="text-[12px] text-steel-400 font-bold mt-1">{l}</div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["CELL 01", "نمایشگاه ۲٬۰۰۰ متری", "۱۴۰ موتور آماده تحویل زیر یک سقف؛ از اقتصادی تا اسپرت. نور، صدا و بوی بنزین — همون حس نمایشگاه واقعی.", "/images/pexels-30629772.jpg"],
            ["CELL 02", "تعمیرگاه تخصصی", "۱۰ خط سرویس، دینامومتر و انبار ۱۲۰۰ قلم قطعه اصلی. هر موتوری از ما می‌خری تا ۱۰ سال قطعه‌اش هست.", "/images/pexels-8550664.jpg"],
            ["CELL 03", "باشگاه سوارکاران", "تورهای جمعه، کلاس آموزشی آفرود و پیست. موتورسواری تنهایی حال نمی‌ده — بیا تو جمع.", "/images/pexels-5803274.jpg"],
          ].map(([e, t, d, img], i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="bg-pit-900 border border-white/10 cut-corner overflow-hidden group">
                <div className="h-44 overflow-hidden relative"><img src={img} alt={t} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /><span className="absolute bottom-2 left-2 text-[10px] font-black tracking-[0.25em] bg-black/65 px-2 py-1 border border-white/15" dir="ltr">{e}</span></div>
                <div className="p-5"><h3 className="font-black">{t}</h3><p className="text-[13px] text-steel-300 leading-7 mt-1.5">{d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* timeline */}
        <div>
          <h2 className="font-black text-xl md:text-2xl mb-5">خط زمان باقری <span className="text-[11px] tracking-[0.3em] text-steel-500 font-bold" dir="ltr">TIMELINE</span></h2>
          <div className="relative pr-6 space-y-5 before:absolute before:right-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-blood-500 before:to-transparent">
            {[["۱۳۷۸", "مغازه ۴۰ متری جاده مخصوص — فروش و تعمیر دوچرخه و موتور گازی"], ["۱۳۸۸", "اخذ نمایندگی رسمی ۳ برند + افتتاح تعمیرگاه"], ["۱۳۹۶", "نمایشگاه ۲٬۰۰۰ متری فعلی + باشگاه سوارکاران"], ["۱۴۰۴", "رکورد ۱٬۹۰۰ تحویل سالانه + راه‌اندازی دستیار هوشمند"]].map(([y, t], i) => (
              <Reveal key={i} delay={i * 70} className="relative">
                <span className="absolute -right-6 top-1 w-4 h-4 bg-blood-500 rotate-45 border-2 border-asphalt" />
                <div className="bg-pit-900 border border-white/10 cut-corner-sm px-4 py-3.5 flex gap-4 items-center">
                  <span className="num-mono font-black text-blood-400 text-lg shrink-0">{y}</span>
                  <span className="text-sm font-bold">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* visit */}
        <div className="bg-navy-900 border border-white/10 cut-corner p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-black text-lg flex items-center gap-2"><MapPin className="w-5 h-5 text-blood-400" /> بیا نمایشگاه را بو کن</h3>
            <p className="text-sm text-steel-300 leading-7 mt-2">تهران، کیلومتر ۱۲ جاده مخصوص کرج، پاساژ موتور باقری — شنبه تا پنجشنبه ۹ تا ۲۱، جمعه‌ها ۱۰ تا ۱۴ (فقط باشگاه).</p>
            <div className="flex items-center gap-4 mt-3 text-[12px] font-bold text-steel-300"><span className="inline-flex items-center gap-1.5"><Clock3 className="w-4 h-4 text-blood-400" /> امروز باز است تا ۲۱</span><span className="inline-flex items-center gap-1.5"><Phone className="w-4 h-4 text-blood-400 num-mono" /> <span dir="ltr">021-55530000</span></span></div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-2">
            <button onClick={() => setConsultOpen(true)} className="bg-blood-500 hover:bg-blood-400 font-black px-8 py-3.5 cut-corner-sm transition-colors">رزرو بازدید + تست سواری</button>
            <button onClick={() => go({ page: "blog" })} className="border border-white/15 hover:border-blood-500 font-bold px-8 py-3 cut-corner-sm text-sm transition-colors inline-flex items-center justify-center gap-1.5"><CalendarCheck className="w-4 h-4" /> خواندن مجله باقری</button>
          </div>
        </div>

        {/* latest posts mini */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-black text-lg">از مجله باقری</h3>
            <button onClick={() => go({ page: "blog" })} className="text-[13px] font-black text-blood-300">همه مقالات <ChevronLeft className="w-3.5 h-3.5 inline" /></button>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {POSTS.slice(0, 3).map((o) => (
              <button key={o.slug} onClick={() => go({ page: "article", slug: o.slug })} className="text-right bg-pit-800 border border-white/10 hover:border-blood-500/60 cut-corner overflow-hidden transition-all group">
                <div className="h-28 overflow-hidden"><img src={o.img} alt={o.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="p-3"><div className="font-black text-[13px] leading-6 line-clamp-2">{o.title}</div></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
