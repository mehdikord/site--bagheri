"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Clock3, Flame, Camera, MapPin, Menu, Phone, Send, User, X, Wrench, ChevronLeft } from "lucide-react";

export type Route =
  | { page: "home" }
  | { page: "catalog" }
  | { page: "product"; id: string }
  | { page: "assistant" }
  | { page: "blog" }
  | { page: "article"; slug: string }
  | { page: "consult" }
  | { page: "auth" }
  | { page: "profile" }
  | { page: "about" };

/** maps the internal route state to a real URL path */
function pathFor(r: Route): string {
  switch (r.page) {
    case "home":
      return "/";
    case "catalog":
      return "/catalog";
    case "product":
      return `/product/${r.id}`;
    case "assistant":
      return "/assistant";
    case "blog":
      return "/blog";
    case "article":
      return `/blog/${r.slug}`;
    case "consult":
      return "/consult";
    case "auth":
      return "/auth";
    case "profile":
      return "/profile";
    case "about":
      return "/about";
  }
}

const Ctx = createContext<{ go: (r: Route) => void; consultOpen: boolean; setConsultOpen: (v: boolean) => void }>(
  { go: () => {}, consultOpen: false, setConsultOpen: () => {} }
);
export const useNav = () => useContext(Ctx);

export function useClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    f();
    const i = setInterval(f, 1000);
    return () => clearInterval(i);
  }, []);
  return t;
}

const NAV: { label: string; r: Route }[] = [
  { label: "نمایشگاه", r: { page: "home" } },
  { label: "کاتالوگ", r: { page: "catalog" } },
  { label: "دستیار انتخاب", r: { page: "assistant" } },
  { label: "بلاگ", r: { page: "blog" } },
  { label: "درباره ما", r: { page: "about" } },
];

export function Shell({ children }: { children: ReactNode }) {
  const [consultOpen, setConsultOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const clock = useClock();
  const router = useRouter();
  const pathname = usePathname();

  const go = useCallback(
    (r: Route) => {
      router.push(pathFor(r));
    },
    [router]
  );
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  const isActive = (r: Route) => {
    const target = pathFor(r);
    const cur = pathname ?? "/";
    if (target === "/") return cur === "/";
    if (target === "/catalog") return cur === "/catalog" || cur.startsWith("/product/");
    if (target === "/blog") return cur === "/blog" || cur.startsWith("/blog/");
    return cur === target;
  };

  return (
    <Ctx.Provider value={{ go, consultOpen, setConsultOpen }}>
      <div className="min-h-screen bg-asphalt text-bone-100">
        {/* top utility strip */}
        <div className="bg-blood-600 text-white text-[11px] md:text-xs font-bold relative z-[60]">
          <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/25 px-2 py-0.5 cut-corner-sm"><Clock3 className="w-3 h-3" /> {clock}</span>
              <span className="inline-flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 animate-blink" /> جشنواره فروش پاییزه — تا ۱۵٪ تخفیف + ۵ سرویس رایگان</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden md:inline">شنبه تا پنجشنبه ۹ تا ۲۱</span>
              <button onClick={() => go({ page: "consult" })} className="bg-black/30 hover:bg-black/50 px-2.5 py-1 cut-corner-sm transition-colors">رزرو مشاوره</button>
            </div>
          </div>
        </div>

        {/* header */}
        <header className={`sticky top-0 z-50 transition-all border-b ${scrolled ? "bg-navy-950/92 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "bg-navy-950/70 backdrop-blur-md border-white/5"}`}>
          <div className="max-w-7xl mx-auto px-4 h-16 md:h-[72px] flex items-center justify-between gap-3">
            <button onClick={() => go({ page: "home" })} className="flex items-center gap-3 group">
              <span className="relative grid place-items-center w-11 h-11 md:w-12 md:h-12 bg-blood-500 cut-corner font-black text-2xl text-white shadow-[4px_4px_0_rgba(229,35,27,0.3)] group-hover:rotate-[-4deg] transition-transform">ب</span>
              <span className="text-right leading-none">
                <span className="block font-black text-lg md:text-xl">باقری <span className="text-blood-400">موتو</span></span>
                <span className="block text-[10px] tracking-[0.3em] text-steel-400 font-bold mt-1">BAGHERI MOTO • EST 1378</span>
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-1 text-sm font-bold">
              {NAV.map((n, i) => {
                const active = isActive(n.r);
                return (
                  <button key={i} onClick={() => go(n.r)}
                    className={`relative px-4 py-2.5 transition-colors ${active ? "text-white" : "text-steel-300 hover:text-white"}`}>
                    {n.label}
                    {active && <span className="absolute bottom-0 right-4 left-4 h-0.5 bg-blood-500" />}
                    {i < NAV.length - 1 && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-4 bg-white/10 -skew-x-12" />}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a href="tel:02155530000" className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2.5 cut-corner-sm transition-all num-mono text-sm font-bold" dir="ltr">
                <Phone className="w-4 h-4 text-blood-400" /> 021-55530000
              </a>
              <button onClick={() => setConsultOpen(true)} className="hidden sm:inline-flex items-center gap-2 bg-blood-500 hover:bg-blood-400 text-white font-black text-sm px-4 md:px-5 py-2.5 cut-corner shadow-[0_8px_24px_rgba(229,35,27,0.4)] transition-all hover:-translate-y-0.5">
                <Phone className="w-4 h-4" /> درخواست مشاوره
              </button>
              <button onClick={() => go({ page: "profile" })} className="grid place-items-center w-10 h-10 border border-white/15 hover:border-blood-500 cut-corner-sm transition-colors" title="حساب کاربری">
                <User className="w-4.5 h-4.5 w-5 h-5 text-steel-300" />
              </button>
              <button onClick={() => setMenu(!menu)} className="lg:hidden grid place-items-center w-10 h-10 border border-white/15 cut-corner-sm">
                {menu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {/* mobile drawer */}
          {menu && (
            <div className="lg:hidden border-t border-white/10 bg-navy-950/98 backdrop-blur-xl px-4 py-4 space-y-1 rise">
              {NAV.map((n, i) => (
                <button key={i} onClick={() => go(n.r)} className="w-full flex items-center justify-between px-3 py-3 font-bold border-b border-white/5 hover:bg-white/5">
                  {n.label} <ChevronLeft className="w-4 h-4 text-steel-500" />
                </button>
              ))}
              <div className="flex gap-2 pt-3">
                <button onClick={() => { setConsultOpen(true); setMenu(false); }} className="flex-1 bg-blood-500 font-black py-3 cut-corner-sm">درخواست مشاوره</button>
                <button onClick={() => go({ page: "auth" })} className="flex-1 border border-white/15 font-bold py-3 cut-corner-sm">ورود / ثبت‌نام</button>
              </div>
            </div>
          )}
        </header>

        <main>{children}</main>

        <Footer go={go} />
        <ConsultSheet open={consultOpen} close={() => setConsultOpen(false)} go={go} />

        {/* sticky mobile CTA */}
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-gradient-to-t from-black via-black/85 to-transparent pt-8">
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => go({ page: "assistant" })} className="bg-navy-800 border border-white/15 font-black py-3.5 cut-corner-sm text-sm flex items-center justify-center gap-2">
              <Wrench className="w-4 h-4 text-blood-400" /> دستیار انتخاب
            </button>
            <button onClick={() => setConsultOpen(true)} className="bg-blood-500 font-black py-3.5 cut-corner-sm text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(229,35,27,0.5)]">
              <Phone className="w-4 h-4" /> مشاوره رایگان
            </button>
          </div>
        </div>
        <div className="lg:hidden h-[86px]" />
      </div>
    </Ctx.Provider>
  );
}

function Footer({ go }: { go: (r: Route) => void }) {
  return (
    <footer className="relative mt-0">
      <div className="hazard h-2" />
      <div className="bg-pit-900 carbon-fiber border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center w-11 h-11 bg-blood-500 cut-corner font-black text-2xl">ب</span>
              <div><div className="font-black text-lg">باقری موتو</div><div className="text-[10px] tracking-[0.3em] text-steel-500 font-bold">SINCE 1378 — TEHRAN</div></div>
            </div>
            <p className="text-sm text-steel-300 leading-7">بزرگ‌ترین نمایشگاه تخصصی موتورسیکلت غرب تهران؛ فروش، تعمیرگاه، تأمین قطعات و باشگاه سوارکاران باقری.</p>
            <div className="flex gap-2 mt-4">
              {[Camera, Send, Phone].map((I, i) => (
                <span key={i} className="grid place-items-center w-10 h-10 border border-white/10 hover:border-blood-500 hover:text-blood-400 cut-corner-sm cursor-pointer transition-colors"><I className="w-4 h-4" /></span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black mb-4 text-sm tracking-wide flex items-center gap-2"><span className="w-6 h-1 bg-blood-500 inline-block" /> دسترسی سریع</h4>
            <ul className="space-y-2.5 text-sm text-steel-300">
              {[["کاتالوگ کامل", { page: "catalog" } as Route], ["دستیار هوشمند انتخاب", { page: "assistant" } as Route], ["مجله موتورسواری", { page: "blog" } as Route], ["درخواست مشاوره", { page: "consult" } as Route], ["درباره نمایندگی", { page: "about" } as Route]].map(([l, r], i) => (
                <li key={i}><button onClick={() => go(r as Route)} className="hover:text-white hover:pr-1 transition-all">{l as string}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-4 text-sm tracking-wide flex items-center gap-2"><span className="w-6 h-1 bg-blood-500 inline-block" /> دسته‌بندی‌ها</h4>
            <ul className="space-y-2.5 text-sm text-steel-300">
              {["موتور خیابانی", "اسپرت و مسابقه‌ای", "اسکوتر شهری", "آفرود و ادونچر", "قطعات و ابزار", "کلاه و پوشاک"].map((t, i) => (
                <li key={i}><button onClick={() => go({ page: "catalog" })} className="hover:text-white hover:pr-1 transition-all">{t}</button></li>
              ))}
            </ul>
          </div>
          <div className="bg-navy-900/60 border border-white/10 cut-corner p-5">
            <h4 className="font-black mb-1">مشاوره تلفنی رایگان</h4>
            <p className="text-xs text-steel-400 leading-6 mb-3">کارشناس‌های ما شنبه تا پنجشنبه جواب می‌دن.</p>
            <div className="num-mono font-black text-xl text-center bg-black/40 border border-white/10 py-3 cut-corner-sm mb-3" dir="ltr">021-55530000</div>
            <button onClick={() => go({ page: "consult" })} className="w-full bg-blood-500 hover:bg-blood-400 font-black py-3 cut-corner-sm transition-colors">ثبت شماره تماس</button>
            <div className="flex items-center gap-2 mt-3 text-[11px] text-steel-400"><MapPin className="w-3.5 h-3.5 text-blood-400" /> تهران، کیلومتر ۱۲ جاده مخصوص، پاساژ موتور</div>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-steel-500">
            <span>© ۱۴۰۵ نمایندگی موتورسیکلت باقری — نسخه دمو جهت نمایش visual direction</span>
            <span className="num-mono tracking-[0.25em]">BAGHERI MOTO // RIDE HARD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ConsultSheet({ open, close, go }: { open: boolean; close: () => void; go: (r: Route) => void }) {
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-end sm:place-items-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full sm:max-w-md bg-navy-900 border border-white/10 cut-corner overflow-hidden rise">
        <div className="hazard h-1.5" />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-[11px] font-bold tracking-[0.3em] text-blood-400">PIT-CREW CALLBACK</div>
              <h3 className="font-black text-xl mt-1">درخواست مشاوره رایگان</h3>
              <p className="text-xs text-steel-300 mt-1 leading-6">شماره‌تو بذار، کمتر از ۳۰ دقیقه زنگ می‌زنیم.</p>
            </div>
            <button onClick={close} className="grid place-items-center w-9 h-9 border border-white/15 hover:border-blood-500"><X className="w-4 h-4" /></button>
          </div>
          {!done ? (
            <form onSubmit={(e) => { e.preventDefault(); if (phone.replace(/\D/g, "").length >= 10) setDone(true); }} className="space-y-3">
              <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="۰۹۱۲ ـــ ــــ ـــ" className="w-full bg-black/40 border border-white/15 focus:border-blood-500 outline-none px-4 py-3.5 cut-corner-sm num-mono text-lg text-center placeholder:text-steel-600" dir="ltr" />
              <button className="w-full bg-blood-500 hover:bg-blood-400 font-black py-3.5 cut-corner-sm transition-colors">تماس بگیرید — رایگان</button>
              <button type="button" onClick={() => { close(); go({ page: "consult" }); }} className="w-full text-xs text-steel-400 hover:text-white font-bold py-1">فرم کامل با انتخاب محصول ←</button>
            </form>
          ) : (
            <div className="text-center py-4 rise">
              <div className="w-14 h-14 mx-auto grid place-items-center rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-black text-2xl mb-3">✓</div>
              <div className="font-black">ثبت شد، رفیق!</div>
              <p className="text-xs text-steel-300 mt-1 num-mono" dir="ltr">{phone}</p>
              <p className="text-xs text-steel-400 mt-2">کارشناس فروش تا ۳۰ دقیقه آینده تماس می‌گیرد.</p>
              <button onClick={close} className="mt-4 border border-white/15 px-6 py-2.5 cut-corner-sm font-bold text-sm hover:border-blood-500">باشه، ببند</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
