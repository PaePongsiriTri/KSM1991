import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "ติดต่อเรา | K.S.Manufactory (1991)",
  description:
    "ติดต่อ K.S.Manufactory (1991) Limited · โทร 038-241137, 038-241536 · 153/1 หมู่ 1 ต.บางละมุง อ.บางละมุง จ.ชลบุรี 20150",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        titleTh="ติดต่อเรา"
        subtitleTh="ยินดีให้คำปรึกษา สำรวจหน้างาน และจัดทำใบเสนอราคาฟรี สำหรับทุกขนาดโครงการ"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
                Head Office
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-950 leading-tight">
                K.S.Manufactory (1991) Limited
              </h2>
              <p className="mt-3 text-brand-600 text-sm leading-relaxed">
                บริษัท เค.เอส.แมนนูแฟคทอรี่ (1991) จำกัด
              </p>
            </div>

            <div className="space-y-6">
              <ContactItem
                label="Telephone"
                sublabel="โทรศัพท์"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
                  </svg>
                }
              >
                <a href="tel:038241137" className="block font-bold text-brand-950 hover:text-brand-700">
                  038-241137
                </a>
                <a href="tel:038241536" className="block font-bold text-brand-950 hover:text-brand-700">
                  038-241536
                </a>
              </ContactItem>

              <ContactItem
                label="Email"
                sublabel="อีเมล"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
              >
                <a
                  href="mailto:admin@ksm1991.co.th"
                  className="font-bold text-brand-950 hover:text-brand-700 break-all"
                >
                  admin@ksm1991.co.th
                </a>
              </ContactItem>

              <ContactItem
                label="Address"
                sublabel="ที่อยู่"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
              >
                <div className="font-bold text-brand-950 leading-relaxed">
                  153/1 หมู่ 1 ต.บางละมุง
                  <br />
                  อ.บางละมุง จ.ชลบุรี 20150
                </div>
                <Link
                  href="https://maps.app.goo.gl/qNqZK1BLRmW4v2meA"
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-dark hover:text-brand-900"
                >
                  เปิดใน Google Maps →
                </Link>
              </ContactItem>

              <ContactItem
                label="Business Hours"
                sublabel="เวลาทำการ"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
              >
                <div className="font-bold text-brand-950">
                  จันทร์ – เสาร์
                </div>
                <div className="text-sm text-brand-600">08:00 – 17:00 น.</div>
              </ContactItem>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-brand-900/10 ring-1 ring-brand-100 aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] bg-brand-50">
              <iframe
                title="K.S.Manufactory (1991) location"
                src="https://www.google.com/maps?q=153%2F1%20หมู่%201%20ต.บางละมุง%20อ.บางละมุง%20ชลบุรี%2020150&hl=th&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://maps.app.goo.gl/qNqZK1BLRmW4v2meA"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
              >
                เปิดแผนที่ขนาดใหญ่
              </Link>
              <a
                href="tel:038241137"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-900 hover:border-accent hover:text-accent-dark transition-colors"
              >
                โทรเลย 038-241137
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  sublabel,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 flex-none rounded-full bg-brand-900 text-white flex items-center justify-center">
        <div className="h-5 w-5">{icon}</div>
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-accent-dark font-semibold">
          {label}
        </div>
        <div className="text-xs text-brand-500">{sublabel}</div>
        <div className="mt-1.5">{children}</div>
      </div>
    </div>
  );
}
