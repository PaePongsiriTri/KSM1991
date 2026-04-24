import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const GTM_ID = "GTM-MMQZG334";
const GA4_ID = "G-4LZY0XSWK2";

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
  title: {
    default:
      "K.S.Manufactory (1991) — ผู้เชี่ยวชาญงานประตู หน้าต่างอลูมิเนียม",
    template: "%s",
  },
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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "K.S.Manufactory (1991)",
    description:
      "Over 30 years of expertise in aluminium and glass façade systems across Thailand.",
    type: "website",
    locale: "th_TH",
    images: ["/images/hero-worker.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${inter.variable} ${prompt.variable}`}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
        </Script>
      </head>
      <body className="font-display bg-white text-brand-950 antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
