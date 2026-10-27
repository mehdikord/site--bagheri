import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Shell } from "@/components/layout";

export const metadata: Metadata = {
  title: "نمایندگی موتورسیکلت باقری | فروش، قطعات و مشاوره تخصصی",
  description:
    "نمایندگی فروش موتورسیکلت باقری — فروش موتورسیکلت، ابزار، لوازم، قطعات و لوازم جانبی با مشاوره تخصصی",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
