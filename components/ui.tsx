import { useEffect, useRef, type ReactNode } from "react";
import { STOCK_META, faNum, type Product } from "@/data/store";
import { ArrowLeft, Flame, Star } from "lucide-react";

/* scroll reveal hook wrapper */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function StockBadge({ stock, count, big = false }: { stock: Product["stock"]; count?: number; big?: boolean }) {
  const m = STOCK_META[stock];
  return (
    <div className={`inline-flex items-center gap-2 ${big ? "text-sm" : "text-[11px]"} font-bold`}>
      <span className={`h-2 w-2 rounded-full ${m.dot} ${stock !== "out" ? "pulse-dot" : ""}`} />
      <span className={m.text}>{m.fa}</span>
      {stock === "low" && count ? (
        <span className="bg-amber-400/15 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 leading-none rounded-sm num-mono">
          فقط {faNum(count)} دستگاه
        </span>
      ) : null}
      {stock === "out" ? (
        <span className="bg-red-500/10 text-red-300 border border-red-500/30 px-1.5 py-0.5 leading-none rounded-sm">پیش‌ثبت‌نام</span>
      ) : null}
    </div>
  );
}

export function SectionHead({
  no, en, title, desc, onMore, moreLabel,
}: { no: string; en: string; title: string; desc?: string; onMore?: () => void; moreLabel?: string }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6 md:mb-10">
      <div className="flex gap-3 md:gap-5 items-start">
        <div className="hidden sm:flex flex-col items-center">
          <span className="text-[11px] font-black tracking-[0.3em] text-blood-500 num-mono">{no}</span>
          <span className="w-px flex-1 bg-gradient-to-b from-blood-500 to-transparent min-h-10 mt-2" />
        </div>
        <div>
          <div className="text-[11px] font-bold tracking-[0.35em] text-steel-400 mb-1">{en}</div>
          <h2 className="text-2xl md:text-4xl font-black leading-tight text-bone-50">{title}</h2>
          {desc ? <p className="text-steel-300 text-sm md:text-[15px] mt-2 max-w-xl leading-7">{desc}</p> : null}
        </div>
      </div>
      {onMore ? (
        <button onClick={onMore} className="group shrink-0 hidden sm:inline-flex items-center gap-2 border border-white/15 hover:border-blood-500 hover:bg-blood-500/10 transition-all px-4 py-2.5 cut-corner-sm text-sm font-bold">
          {moreLabel ?? "مشاهده همه"}
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      ) : null}
    </div>
  );
}

export function Ticker({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-pit-900/80 py-2.5 relative" dir="ltr">
      <div className={`flex gap-8 w-max whitespace-nowrap ${reverse ? "animate-marquee-rev" : "animate-marquee"}`} style={{ animationDuration: reverse ? "24s" : "30s" }}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-[12px] font-bold tracking-widest text-steel-300" dir="rtl">
            <span>{t}</span>
            <Flame className="w-3.5 h-3.5 text-blood-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stars({ v }: { v: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      <span className="text-[12px] font-bold text-bone-100 num-mono">{faNum(v.toFixed(1))}</span>
    </span>
  );
}

export function Price({ value, old, dark = false }: { value: number; old?: number; dark?: boolean }) {
  return (
    <div>
      {old ? (
        <div className={`text-[12px] line-through num-mono ${dark ? "text-steel-500" : "text-steel-400"}`}>{faNum(old)} ت</div>
      ) : null}
      <div className={`font-black num-mono leading-none ${dark ? "text-navy-950" : "text-bone-50"}`}>
        {faNum(value)} <span className="text-[12px] font-bold">تومان</span>
      </div>
      <div className="text-[10px] text-emerald-400 font-bold mt-1">● قیمت به‌روز نمایندگی</div>
    </div>
  );
}
