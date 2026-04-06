import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K.S.Manufactory (1991) — ผู้เชี่ยวชาญงานประตู หน้าต่างอลูมิเนียม",
  description:
    "K.S.Manufactory (1991) Limited — over 30 years of experience in aluminium doors, windows, curtain walls, and glass installation for condominiums, residences, hospitals, and commercial buildings.",
  keywords: [
    "อลูมิเนียม",
    "ประตูหน้าต่าง",
    "curtain wall",
    "stickwall",
    "unitized",
    "glass wall",
    "skylight",
    "railing",
    "KSM 1991",
    "K.S.Manufactory",
    "ชลบุรี",
  ],
  openGraph: {
    title: "K.S.Manufactory (1991)",
    description:
      "Over 30 years of expertise in aluminium and glass façade systems across Thailand.",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${inter.variable} ${prompt.variable}`}>
      <body className="font-display bg-white text-brand-950 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
