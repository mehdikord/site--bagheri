"use client";

import { useNav } from "@/components/layout";
import { POSTS } from "@/data/store";
import { Calendar, ChevronLeft, Clock3, Phone, Share2, Tag } from "lucide-react";

export default function Article({ slug }: { slug: string }) {
  const { go, setConsultOpen } = useNav();
  const p = POSTS.find((x) => x.slug === slug) ?? POSTS[0];
  const others = POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  return (
    <div className="bg-asphalt min-h-screen">
      <div className="relative h-[42vh] md:h-[52vh] overflow-hidden">
        <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/55 to-navy-950/40" />
        <div className="absolute bottom-0 inset-x-0">
          <div className="max-w-3xl mx-auto px-4 pb-6">
            <button onClick={() => go({ page: "blog" })} className="inline-flex items-center gap-1.5 text-[12px] font-bold text-steel-300 hover:text-white bg-black/50 backdrop-blur px-3 py-1.5 cut-corner-sm border border-white/15 mb-3">مجله <ChevronLeft className="w-3.5 h-3.5 rotate-180" /> {p.cat}</button>
            <h1 className="font-black text-xl sm:text-2xl md:text-4xl leading-[1.5]">{p.title}</h1>
            <div className="flex flex-wrap items-center gap-3 mt-3 text-[12px] font-bold text-steel-300">
              <span className="inline-flex items-center gap-1.5"><span className="w-8 h-8 grid place-items-center bg-blood-500 cut-corner-sm font-black text-white">ب</span> تیم فنی باقری</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{p.date}</span>
              <span className="inline-flex items-center gap-1"><Clock3 className="w-3.5 h-3.5" />{p.read} مطالعه</span>
              <button className="mr-auto inline-flex items-center gap-1.5 border border-white/20 hover:border-blood-500 px-3 py-1.5 cut-corner-sm transition-colors"><Share2 className="w-3.5 h-3.5" /> اشتراک</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 grid lg:grid-cols-1 gap-8">
        <article className="rise">
          <p className="text-base md:text-lg leading-9 text-bone-100 font-medium border-r-2 border-blood-500 pr-4">{p.ex}</p>
          {p.body.map((t, i) => (
            <p key={i} className="text-[15px] leading-8.5 leading-9 text-steel-200 mt-5">{t}</p>
          ))}
          {/* pull quote */}
          <blockquote className="my-7 bg-blood-500/10 border border-blood-500/30 cut-corner p-5 relative">
            <span className="absolute -top-4 right-4 bg-blood-500 text-white font-black text-xl w-8 h-8 grid place-items-center cut-corner-sm">”</span>
            <p className="font-black leading-8">۱۰ دقیقه تست سواری واقعی، از ۱۰ ساعت دیدن ویدیو در اینستاگرام ارزشمندتر است. تعارف نکن؛ موتور را بخواه و سوار شو.</p>
          </blockquote>
          <h3 className="font-black text-lg mt-6 mb-3 flex items-center gap-2"><Tag className="w-4 h-4 text-blood-400" /> چک‌لیست سریع</h3>
          <ul className="space-y-2.5">
            {p.points.map((t, i) => (
              <li key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/10 cut-corner-sm px-4 py-3 text-sm leading-7">
                <span className="grid place-items-center w-6 h-6 bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[12px] font-black shrink-0 num-mono">{i + 1}</span>{t}
              </li>
            ))}
          </ul>
          {/* inline consult */}
          <div className="mt-8 bg-navy-900 border border-blood-500/40 cut-corner p-5 flex flex-col sm:flex-row items-center gap-4">
            <span className="grid place-items-center w-12 h-12 bg-blood-500 cut-corner shrink-0"><Phone className="w-5 h-5 text-white" /></span>
            <div className="flex-1 text-center sm:text-right">
              <div className="font-black">درباره همین موضوع سؤال داری؟</div>
              <div className="text-[13px] text-steel-300">کارشناس باقری رایگان جواب می‌دهد.</div>
            </div>
            <button onClick={() => setConsultOpen(true)} className="bg-blood-500 hover:bg-blood-400 font-black px-6 py-3 cut-corner-sm transition-colors shrink-0">گرفتن مشاوره</button>
          </div>
        </article>

        <div>
          <h3 className="font-black text-lg mb-4">بعدی بخوان ←</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {others.map((o) => (
              <button key={o.slug} onClick={() => go({ page: "article", slug: o.slug })} className="text-right bg-pit-800 border border-white/10 hover:border-blood-500/60 cut-corner overflow-hidden transition-all group">
                <div className="h-28 overflow-hidden"><img src={o.img} alt={o.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="p-3"><div className="text-[11px] font-bold text-blood-400">{o.cat}</div><div className="font-black text-[13px] leading-6 mt-1 line-clamp-2">{o.title}</div></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
