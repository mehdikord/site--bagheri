"use client";

import { useState } from "react";
import { useNav } from "@/components/layout";
import { PRODUCTS, faNum } from "@/data/store";
import { BadgeCheck, Phone } from "lucide-react";

export default function Consult() {
  const { go } = useNav();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [prod, setProd] = useState("");
  const [time, setTime] = useState("امروز عصر");
  const [done, setDone] = useState(false);
  const ok = name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 10;

  if (done)
    return (
      <div className="bg-asphalt min-h-[80vh] grid place-items-center px-4 py-14">
        <div className="max-w-md w-full bg-pit-900 border border-emerald-500/30 cut-corner overflow-hidden rise text-center">
          <div className="h-1.5 bg-emerald-500" />
          <div className="p-8">
            <div className="w-16 h-16 mx-auto grid place-items-center rounded-full bg-emerald-500/15 border border-emerald-500/40 text-3xl mb-4">✓</div>
            <h1 className="font-black text-xl">درخواستت ثبت شد {name}!</h1>
            <p className="text-sm text-steel-300 leading-7 mt-2">کارشناس فروش <span className="text-white font-bold">{time}</span> با شماره <span className="num-mono font-bold text-white" dir="ltr">{phone}</span> تماس می‌گیرد.</p>
            {prod && <p className="text-[12px] text-blood-300 font-bold mt-2">موضوع: {PRODUCTS.find((p) => p.id === prod)?.fa}</p>}
            <div className="bg-black/40 border border-white/10 cut-corner-sm p-3 mt-4 text-[12px] text-steel-400 num-mono" dir="ltr">TICKET #BQ-{Math.floor(1000 + Math.random() * 9000)} — QUEUE: 2</div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <button onClick={() => go({ page: "catalog" })} className="border border-white/15 hover:border-blood-500 font-bold py-3 cut-corner-sm text-sm transition-colors">گشتن در کاتالوگ</button>
              <button onClick={() => { setDone(false); setName(""); setPhone(""); }} className="bg-blood-500 hover:bg-blood-400 font-black py-3 cut-corner-sm text-sm transition-colors">ثبت درخواست جدید</button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-asphalt asphalt-noise min-h-screen">
      <div className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 carbon-fiber" />
        <div className="relative max-w-5xl mx-auto px-4 pt-10 pb-8">
          <div className="text-[11px] font-bold tracking-[0.35em] text-blood-400">PIT-CREW CALLBACK</div>
          <h1 className="text-3xl md:text-4xl font-black mt-2">فرم درخواست مشاوره <span className="text-blood-500">رایگان</span></h1>
          <p className="text-steel-300 text-sm mt-2">فقط state محلی — بدون بک‌اند. در دمو نهایی به CRM وصل می‌شود.</p>
        </div>
        <div className="hazard h-1.5 relative" />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-[1fr_320px] gap-5 items-start">
        <form onSubmit={(e) => { e.preventDefault(); ok && setDone(true); }} className="bg-pit-900 border border-white/10 cut-corner p-5 md:p-7 space-y-4 rise">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-[12px] font-black text-steel-300">نام و نام خانوادگی *</span>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="مثلاً علی رضایی" className="mt-1.5 w-full bg-black/40 border border-white/15 focus:border-blood-500 outline-none px-4 py-3 cut-corner-sm text-sm" />
            </label>
            <label className="block">
              <span className="text-[12px] font-black text-steel-300">شماره موبایل *</span>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="۰۹۱۲ ـــ ــــ ـــ" className="mt-1.5 w-full bg-black/40 border border-white/15 focus:border-blood-500 outline-none px-4 py-3 cut-corner-sm num-mono text-center" dir="ltr" />
            </label>
          </div>
          <label className="block">
            <span className="text-[12px] font-black text-steel-300">درباره کدام محصول؟ (اختیاری)</span>
            <select value={prod} onChange={(e) => setProd(e.target.value)} className="mt-1.5 w-full bg-black/40 border border-white/15 focus:border-blood-500 outline-none px-4 py-3 cut-corner-sm text-sm [&>option]:text-black">
              <option value="">مشاوره عمومی — هنوز انتخاب نکردم</option>
              {PRODUCTS.map((p) => <option key={p.id} value={p.id}>{p.fa} — {faNum(p.price)} ت</option>)}
            </select>
          </label>
          <div>
            <span className="text-[12px] font-black text-steel-300">کی زنگ بزنیم؟</span>
            <div className="grid grid-cols-3 gap-2 mt-1.5">
              {["امروز عصر", "فردا صبح", "فردا عصر"].map((t) => (
                <button type="button" key={t} onClick={() => setTime(t)} className={`text-[13px] font-bold py-3 cut-corner-sm border transition-all ${time === t ? "bg-blood-500 border-blood-500 text-white" : "border-white/15 text-steel-300 hover:border-white/40"}`}>{t}</button>
              ))}
            </div>
          </div>
          <button disabled={!ok} className={`w-full font-black py-4 cut-corner-sm transition-all flex items-center justify-center gap-2 ${ok ? "bg-blood-500 hover:bg-blood-400 shadow-[0_12px_36px_rgba(229,35,27,0.4)]" : "bg-white/10 text-steel-500 cursor-not-allowed"}`}>
            <Phone className="w-4 h-4" /> ثبت درخواست تماس
          </button>
          <p className="text-[11px] text-steel-500 text-center font-bold">با ثبت، قوانین حریم خصوصی نمایندگی را می‌پذیرید.</p>
        </form>
        <aside className="space-y-4">
          <div className="bg-navy-900 border border-white/10 cut-corner p-5">
            <h3 className="font-black text-sm mb-3">چرا مشاوره باقری؟</h3>
            {["قیمت و موجودی لحظه‌ای انبار", "معرفی تعمیرکار + هزینه سرویس واقعی", "شرایط اقساط شفاف بدون هزینه پنهان"].map((t, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[13px] leading-6 py-2 border-b border-white/5 last:border-0"><BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />{t}</div>
            ))}
          </div>
          <div className="bg-bone-100 text-navy-950 cut-corner p-5 text-center">
            <Phone className="w-6 h-6 mx-auto text-blood-600" />
            <div className="text-[12px] font-bold mt-1">ترجیح می‌دی خودت زنگ بزنی؟</div>
            <div className="num-mono font-black text-2xl mt-1" dir="ltr">021-55530000</div>
            <div className="text-[11px] font-bold text-navy-700">شنبه تا پنجشنبه ۹ تا ۲۱</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
