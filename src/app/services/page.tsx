import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "บริการของเรา | K.S.Manufactory (1991)",
  description:
    "บริการครบวงจรด้านประตู–หน้าต่างอลูมิเนียม Stickwall, Unitized, ผนังกระจก, Skylight และราวกันตก โดย K.S.Manufactory (1991) Limited",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        titleTh="บริการครบวงจรงานอลูมิเนียมและกระจก"
        subtitleTh="ตั้งแต่ออกแบบ ผลิต ติดตั้ง จนถึงบริการหลังการขาย เราดูแลงานเปลือกอาคารให้คุณได้อย่างมืออาชีพ ด้วยประสบการณ์ที่สั่งสมกว่า 30 ปี"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group relative flex flex-col md:flex-row items-stretch gap-6 rounded-2xl border border-brand-100 bg-white p-5 md:p-6 hover:border-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300"
              >
                <div className="relative md:w-56 md:flex-none aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden ring-1 ring-brand-100">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 35vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold tracking-widest text-accent-dark">
                    / {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-lg md:text-xl font-bold text-brand-950 leading-tight">
                    {s.title}
                  </h3>
                  <div className="text-sm text-brand-600 font-medium mt-1">
                    {s.titleTh}
                  </div>
                  <p className="mt-3 text-sm text-brand-600 leading-relaxed line-clamp-3">
                    {s.shortTh}
                  </p>
                  <div className="mt-4 text-xs font-semibold text-accent-dark group-hover:text-brand-700 transition-colors">
                    ดูรายละเอียด →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-x grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
              Ready to start?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-950 leading-tight">
              ปรึกษาทีมวิศวกรของเรา
            </h2>
            <p className="mt-4 text-brand-700 max-w-xl">
              ไม่ว่าคุณจะกำลังวางแผนโครงการใหม่ หรือมองหาผู้รับเหมางานเปลือกอาคาร
              ทีมงาน KSM1991 พร้อมให้คำปรึกษาและจัดทำใบเสนอราคาฟรี
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/contact/"
              className="rounded-full bg-brand-900 text-white text-center px-7 py-3.5 text-sm font-semibold hover:bg-brand-800 transition-colors"
            >
              ติดต่อเรา →
            </Link>
            <Link
              href="/projects/"
              className="rounded-full border-2 border-brand-900 text-brand-900 text-center px-7 py-3.5 text-sm font-semibold hover:bg-brand-900 hover:text-white transition-colors"
            >
              ดูผลงานของเรา
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
