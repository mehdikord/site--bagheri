"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useNav } from "@/components/layout";
import { StockBadge, Price } from "@/components/ui";
import { recommend, type Answers } from "@/data/store";
import { ArrowLeft, ArrowRight, Bot, Check, ChevronLeft, Cpu, Gauge, Phone, RotateCcw, Sparkles, User } from "lucide-react";

const STEPS = [
  { id: "budget", q: "بودجه‌ات چقدره؟", sub: "رک بگو؛ خجالت نداره. گزینه درست از همین‌جا شروع می‌شه.", opts: [
    { id: "low", t: "اقتصادی", d: "تا ~۱۰۰ میلیون", e: "💰" },
    { id: "mid", t: "میانی", d: "۱۰۰ تا ۲۵۰ میلیون", e: "⚖️" },
    { id: "high", t: "حرفه‌ای", d: "بالای ۲۵۰ میلیون", e: "🔥" },
    { id: "any", t: "هنوز نمی‌دونم", d: "راهنماییم کن", e: "🤔" },
  ]},
  { id: "usage", q: "بیشتر کجا سوار می‌شی؟", sub: "مسیر اصلی روزانه‌ات را انتخاب کن.", opts: [
    { id: "city", t: "شهر و ترافیک", d: "رفت‌وآمد روزانه", e: "🏙️" },
    { id: "work", t: "کاری و پیک", d: "کارکرد بالا، استهلاک کم", e: "📦" },
    { id: "trip", t: "سفر جاده‌ای", d: "راحتی + باک بزرگ", e: "🛣️" },
    { id: "offroad", t: "خاکی و آفرود", d: "جنگل، کویر، کوه", e: "⛰️" },
    { id: "race", t: "هیجان و پیست", d: "سرعت و شتاب", e: "🏁" },
    { id: "style", t: "استایل و دورهمی", d: "نگاه‌ها دنبالت باشه", e: "😎" },
  ]},
  { id: "level", q: "سابقه سواریت چقدره؟", sub: "صادق باش؛ امنیتت مهم‌تر از غرورته.", opts: [
    { id: "new", t: "تازه‌کارم", d: "کمتر از ۱ سال", e: "🌱" },
    { id: "mid", t: "متوسط", d: "۱ تا ۳ سال", e: "🔧" },
    { id: "pro", t: "حرفه‌ای", d: "۳ سال به بالا", e: "🏆" },
  ]},
  { id: "style", q: "دنده‌ای یا اتومات؟", sub: "آخرین قطعه پازل.", opts: [
    { id: "manual", t: "دنده‌ای", d: "کنترل و هیجان", e: "⚙️" },
    { id: "auto", t: "اتومات", d: "راحت و بی‌دردسر", e: "🛵" },
    { id: "nosure", t: "فرقی نداره", d: "بهترین را بده", e: "✨" },
  ]},
] as const;

type Msg = { from: "bot" | "user"; text: string };

export default function Assistant() {
  const { go, setConsultOpen } = useNav();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: "سلام رفیق! 🏍️ من «باقری‌بات» هستم؛ مغز انتخاب موتور این نمایشگاه. چهار تا سؤال کوتاه می‌پرسم و از بین کل کاتالوگ، دقیق‌ترین‌ها را با دلیل بهت می‌دم. بریم؟" }]);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => done ? recommend(answers as Answers) : [], [done, answers]);

  useEffect(() => { chatRef.current?.scrollTo({ top: 99999, behavior: "smooth" }); }, [msgs, typing]);

  const pushBot = (text: string, delay = 750) => {
    setTyping(true);
    setTimeout(() => { setMsgs((m) => [...m, { from: "bot", text }]); setTyping(false); }, delay);
  };

  const choose = (optId: string, label: string) => {
    if (done || typing) return;
    const key = STEPS[step].id as keyof Answers;
    const na = { ...answers, [key]: optId };
    setAnswers(na);
    setMsgs((m) => [...m, { from: "user", text: label }]);
    if (step < STEPS.length - 1) {
      const ns = step + 1;
      setStep(ns);
      pushBot(STEPS[ns].q + " " + STEPS[ns].sub);
    } else {
      // analyze sequence
      setAnalyzing(true);
      setProgress(0);
      pushBot("باشه، دارم کل کاتالوگ را با نیازت تطبیق می‌دم… ⚙️", 600);
      const iv = setInterval(() => setProgress((p) => Math.min(p + Math.random() * 22, 100)), 320);
      setTimeout(() => {
        clearInterval(iv);
        setProgress(100);
        setAnalyzing(false);
        setDone(true);
        setMsgs((m) => [...m, { from: "bot", text: `تمومه! ✅ از بین ${"۱۴"} مدل، ۳ گزینه با بالاترین تطابق را پیدا کردم. اولی بهترین مچِ توئه — دلیل هر کدوم را زیرش نوشتم.` }]);
      }, 2600);
    }
  };

  const reset = () => { setStep(0); setAnswers({}); setDone(false); setMsgs([{ from: "bot", text: "باشه، از اول شروع می‌کنیم. " + STEPS[0].q }]); };

  const matchPct = [94, 87, 79];

  return (
    <div className="bg-asphalt asphalt-noise min-h-screen">
      <div className="bg-navy-950 border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 carbon-fiber" />
        <div className="relative max-w-5xl mx-auto px-4 pt-8 pb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blood-500/12 border border-blood-500/40 text-blood-300 text-[11px] font-black tracking-[0.25em] px-3.5 py-1.5 cut-corner-sm mb-3">
            <Cpu className="w-3.5 h-3.5" /> BAGHERI SMART-FIT • نسخه دمو
          </div>
          <h1 className="text-2xl md:text-4xl font-black">دستیار هوشمند انتخاب موتور</h1>
          <p className="text-steel-300 text-sm mt-2">۴ سؤال → ۳ پیشنهاد دقیق + اتصال به کارشناس</p>
          {/* fuel-gauge progress */}
          <div className="max-w-md mx-auto mt-5">
            <div className="flex justify-between text-[11px] font-black text-steel-400 mb-1.5 num-mono">
              <span>مرحله {done ? 4 : step + 1} از ۴</span><span>{done ? "۱۰۰٪" : `${Math.round(((step) / 4) * 100)}٪`}</span>
            </div>
            <div className="h-2.5 bg-black/60 border border-white/10 overflow-hidden flex gap-0.5 p-0.5" dir="ltr">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`flex-1 transition-all duration-500 ${done || i < step ? "bg-emerald-400" : i === step ? "bg-blood-500 animate-pulse" : "bg-white/10"}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="hazard h-1.5 relative" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 grid lg:grid-cols-[1fr_340px] gap-5 items-start">
        {/* chat console */}
        <div className="bg-pit-900 border border-white/10 cut-corner overflow-hidden">
          <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/10 bg-black/40">
            <span className="grid place-items-center w-9 h-9 bg-blood-500 cut-corner-sm"><Bot className="w-4.5 h-4.5 w-5 h-5 text-white" /></span>
            <div className="flex-1">
              <div className="font-black text-sm flex items-center gap-2">باقری‌بات <span className="text-[10px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 font-bold">● آنلاین</span></div>
              <div className="text-[11px] text-steel-500">معمولاً در چند ثانیه جواب می‌دهد</div>
            </div>
            <button onClick={reset} className="flex items-center gap-1.5 text-[11px] font-bold text-steel-400 hover:text-white border border-white/10 hover:border-blood-500 px-2.5 py-1.5 cut-corner-sm transition-colors"><RotateCcw className="w-3.5 h-3.5" /> شروع دوباره</button>
          </div>

          <div ref={chatRef} className="h-[300px] md:h-[340px] overflow-y-auto thin-scroll p-4 space-y-3 bg-gradient-to-b from-transparent to-black/20">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.from === "user" ? "justify-start flex-row-reverse" : "justify-start"}`}>
                <span className={`grid place-items-center w-7 h-7 cut-corner-sm shrink-0 ${m.from === "bot" ? "bg-blood-500" : "bg-navy-700"}`}>
                  {m.from === "bot" ? <Bot className="w-3.5 h-3.5 text-white" /> : <User className="w-3.5 h-3.5" />}
                </span>
                <div className={`max-w-[82%] px-3.5 py-2.5 text-[13px] leading-6 cut-corner-sm ${m.from === "bot" ? "bg-navy-800 border border-white/10" : "bg-blood-500 text-white font-bold"}`}>{m.text}</div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-2 items-center">
                <span className="grid place-items-center w-7 h-7 bg-blood-500 cut-corner-sm"><Bot className="w-3.5 h-3.5 text-white" /></span>
                <div className="bg-navy-800 border border-white/10 cut-corner-sm px-4 py-3 flex gap-1.5">
                  {[0, 1, 2].map((d) => <span key={d} className="w-1.5 h-1.5 rounded-full bg-steel-300 typing-dot" style={{ animationDelay: `${d * 0.2}s` }} />)}
                </div>
              </div>
            )}
            {analyzing && (
              <div className="bg-black/50 border border-blood-500/30 cut-corner-sm p-4">
                <div className="flex items-center gap-2 text-[12px] font-black mb-2"><Gauge className="w-4 h-4 text-blood-400 animate-spin" style={{ animationDuration: "2.5s" }} /> در حال اسکن کاتالوگ… <span className="num-mono text-blood-300 mr-auto">{Math.round(progress)}٪</span></div>
                <div className="h-2 bg-white/10 overflow-hidden" dir="ltr"><div className="h-full bg-gradient-to-r from-blood-600 via-blood-400 to-amber-400 transition-all duration-300" style={{ width: `${progress}%` }} /></div>
                <div className="text-[11px] text-steel-400 font-bold mt-2 num-mono" dir="ltr">SCANNING: engine ▸ budget ▸ usage ▸ stock…</div>
              </div>
            )}
          </div>

          {/* options / results */}
          <div className="border-t border-white/10 p-4 bg-black/30">
            {!done ? (
              <div>
                <div className="text-[12px] font-black text-steel-300 mb-2.5">— {STEPS[step].q}</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {STEPS[step].opts.map((o: any) => {
                    const selected = (answers as any)[STEPS[step].id] === o.id;
                    return (
                      <button key={o.id} onClick={() => choose(o.id, o.t)} disabled={typing || analyzing}
                        className={`text-right border p-3 cut-corner-sm transition-all hover:-translate-y-0.5 disabled:opacity-50 ${selected ? "bg-blood-500 border-blood-500 text-white" : "bg-navy-800/70 border-white/12 hover:border-blood-500/70"}`}>
                        <span className="text-xl">{o.e}</span>
                        <span className="block font-black text-[13px] mt-1">{o.t}</span>
                        <span className={`block text-[11px] mt-0.5 ${selected ? "text-white/80" : "text-steel-400"}`}>{o.d}</span>
                      </button>
                    );
                  })}
                </div>
                {step > 0 && !analyzing && (
                  <button onClick={() => { setStep(step - 1); setMsgs((m) => [...m, { from: "bot", text: "باشه، برگشتیم عقب. " + STEPS[step - 1].q }]); }} className="mt-3 text-[12px] font-bold text-steel-400 hover:text-white inline-flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5" /> برگشت به سؤال قبل</button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {results.map((p, i) => (
                  <div key={p.id} className={`relative border cut-corner overflow-hidden ${i === 0 ? "border-blood-500 bg-gradient-to-l from-blood-500/12 to-transparent" : "border-white/12 bg-navy-800/60"}`}>
                    {i === 0 && <div className="bg-blood-500 text-white text-[11px] font-black px-3 py-1 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> بهترین مچ تو — تطابق {matchPct[i]}٪</div>}
                    <div className="p-3.5 flex gap-3">
                      <img src={p.images[0]} alt={p.fa} className="w-24 h-20 md:w-32 md:h-24 object-cover cut-corner-sm shrink-0 cursor-pointer" onClick={() => go({ page: "product", id: p.id })} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-black text-sm md:text-base truncate cursor-pointer hover:text-blood-300" onClick={() => go({ page: "product", id: p.id })}>{p.fa}</h3>
                          {i > 0 && <span className="text-[11px] font-black text-steel-300 num-mono shrink-0">{matchPct[i]}٪ مچ</span>}
                        </div>
                        <p className="text-[12px] text-steel-300 leading-6 mt-1 line-clamp-2">{why(p, answers as Answers)}</p>
                        <div className="flex items-center justify-between mt-2 gap-2 flex-wrap">
                          <Price value={p.price} />
                          <StockBadge stock={p.stock} count={p.count} />
                        </div>
                        <div className="flex gap-2 mt-2.5">
                          <button onClick={() => go({ page: "product", id: p.id })} className="flex-1 text-[12px] font-black border border-white/20 hover:border-blood-500 py-2 cut-corner-sm transition-colors">دیدن صفحه موتور</button>
                          <button onClick={() => setConsultOpen(true)} className="flex-1 text-[12px] font-black bg-blood-500 hover:bg-blood-400 py-2 cut-corner-sm transition-colors">مشاوره درباره این</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="grid sm:grid-cols-2 gap-2 pt-1">
                  <button onClick={() => setConsultOpen(true)} className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 font-black py-3.5 cut-corner-sm text-sm transition-colors"><Phone className="w-4 h-4" /> تماس کارشناس درباره همین ۳ مدل</button>
                  <button onClick={reset} className="flex items-center justify-center gap-2 border border-white/20 hover:border-white font-bold py-3.5 cut-corner-sm text-sm transition-colors"><RotateCcw className="w-4 h-4" /> تلاش دوباره</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* side rail */}
        <aside className="space-y-4 lg:sticky lg:top-28">
          <div className="bg-navy-900 border border-white/10 cut-corner p-5">
            <div className="text-[11px] font-bold tracking-[0.3em] text-steel-400 mb-3">خلاصه نیاز تو</div>
            <ul className="space-y-2.5 text-[13px] font-bold">
              {STEPS.map((s) => {
                const v = (answers as any)[s.id];
                const opt = (s.opts as any).find((o: any) => o.id === v);
                return (
                  <li key={s.id} className={`flex items-center justify-between border px-3 py-2.5 cut-corner-sm ${opt ? "border-emerald-500/40 bg-emerald-500/8" : "border-white/10 bg-black/20"}`}>
                    <span className="text-steel-400 text-[12px]">{s.q}</span>
                    <span className={opt ? "text-emerald-300 flex items-center gap-1" : "text-steel-600 text-[11px]"}>
                      {opt ? <><Check className="w-3.5 h-3.5" />{opt.t}</> : "—"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-blood-600 cut-corner p-5 text-white relative overflow-hidden">
            <div className="absolute -left-6 -bottom-8 text-8xl opacity-15">📞</div>
            <div className="font-black">آخر مسیر اینجاست 👇</div>
            <p className="text-[13px] text-white/85 leading-6 mt-1.5">بعد از پیشنهاد، مهم‌ترین قدم یه تماس ۵ دقیقه‌ایه؛ موجودی انبار لحظه‌ای عوض می‌شه.</p>
            <button onClick={() => go({ page: "consult" })} className="mt-3 w-full bg-black/35 hover:bg-black/55 font-black py-3 cut-corner-sm transition-colors flex items-center justify-center gap-2">رفتن به فرم مشاوره <ArrowLeft className="w-4 h-4" /></button>
          </div>
          <button onClick={() => go({ page: "catalog" })} className="w-full border border-white/15 hover:border-blood-500 text-sm font-bold py-3 cut-corner-sm transition-colors">یا خودم کاتالوگ را می‌گردم <ChevronLeft className="w-4 h-4 inline" /> <span className="hidden">{""}</span></button>
        </aside>
      </div>
    </div>
  );
}

function why(p: any, a: Answers): string {
  const parts: string[] = [];
  if (p.usages.includes(a.usage)) parts.push("دقیقاً برای همین کاربرد ساخته شده");
  if (p.budget === a.budget) parts.push("کاملاً داخل بودجت");
  if (p.level.includes(a.level)) parts.push("سطحش اندازه سابقه‌ته");
  if (a.style === "auto" && p.cat === "scooter") parts.push("اتومات و بی‌دردسر");
  if (a.style === "manual" && (p.cat === "street" || p.cat === "sport")) parts.push("دنده‌ای و پرهیجان");
  if (p.stock === "low") parts.push("ولی عجله کن، ته انباره");
  return "چرا این؟ " + (parts.join(" + ") || "بالاترین امتیاز کلی کاتالوگ") + ".";
}
