"use client";

import { useState } from "react";
import { useNav } from "@/components/layout";
import { Eye, EyeOff } from "lucide-react";

export default function Auth() {
  const { go } = useNav();
  const [mode, setMode] = useState<"login" | "otp">("login");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("");
  return (
    <div className="bg-asphalt min-h-[85vh] grid place-items-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 carbon-fiber opacity-50" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[7rem] font-black text-white/[0.04] select-none leading-none">BQ</div>
      <div className="relative w-full max-w-md rise">
        <div className="bg-pit-900 border border-white/10 cut-corner overflow-hidden">
          <div className="hazard h-1.5" />
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <span className="inline-grid place-items-center w-14 h-14 bg-blood-500 cut-corner font-black text-3xl mb-3">ب</span>
              <h1 className="font-black text-xl">ورود به گاراژ شخصی</h1>
              <p className="text-[12px] text-steel-400 mt-1">دمو — بدون احراز واقعی، فقط برای نمایش UI</p>
            </div>
            <div className="grid grid-cols-2 gap-1 bg-black/40 border border-white/10 p-1 mb-5 cut-corner-sm">
              {(["login", "otp"] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)} className={`text-[13px] font-black py-2.5 cut-corner-sm transition-all ${mode === m ? "bg-blood-500 text-white" : "text-steel-400 hover:text-white"}`}>
                  {m === "login" ? "رمز عبور" : "کد پیامکی"}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              <label className="block">
                <span className="text-[12px] font-black text-steel-300">شماره موبایل</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="۰۹۱۲ ـــ ــــ ـــ" className="mt-1.5 w-full bg-black/40 border border-white/15 focus:border-blood-500 outline-none px-4 py-3.5 cut-corner-sm num-mono text-center text-lg" dir="ltr" />
              </label>
              {mode === "login" ? (
                <label className="block">
                  <span className="text-[12px] font-black text-steel-300">رمز عبور</span>
                  <span className="relative block mt-1.5">
                    <input type={show ? "text" : "password"} value={pass} onChange={(e) => setPass(e.target.value)} placeholder="••••••••" className="w-full bg-black/40 border border-white/15 focus:border-blood-500 outline-none px-4 py-3.5 cut-corner-sm text-center" dir="ltr" />
                    <button type="button" onClick={() => setShow(!show)} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel-400">{show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                  </span>
                </label>
              ) : (
                <label className="block">
                  <span className="text-[12px] font-black text-steel-300">کد ۴ رقمی (دمو: هر کدی قبول است)</span>
                  <input value={code} onChange={(e) => setCode(e.target.value)} inputMode="numeric" maxLength={4} placeholder="ـ ـ ـ ـ" className="mt-1.5 w-full bg-black/40 border border-white/15 focus:border-blood-500 outline-none px-4 py-3.5 cut-corner-sm num-mono text-center text-2xl tracking-[0.5em]" dir="ltr" />
                </label>
              )}
              <button onClick={() => go({ page: "profile" })} className="w-full bg-blood-500 hover:bg-blood-400 font-black py-4 cut-corner-sm transition-colors">ورود به حساب →</button>
              <button onClick={() => go({ page: "profile" })} className="w-full text-[12px] font-bold text-steel-400 hover:text-white">حساب نداری؟ ثبت‌نام با همین شماره (دمو)</button>
            </div>
          </div>
        </div>
        <p className="text-center text-[11px] text-steel-600 font-bold mt-4">نسخه نهایی: OTP واقعی + احراز پیامکی کاوه‌نگار</p>
      </div>
    </div>
  );
}
