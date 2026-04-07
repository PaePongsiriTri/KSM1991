import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "ผลงานของเรา | K.S.Manufactory (1991)",
  description:
    "ผลงานการติดตั้งประตู–หน้าต่างอลูมิเนียม ผนังกระจก Curtain Wall และระบบกระจกอาคาร จากโครงการชั้นนำทั่วประเทศไทย",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        titleTh="ผลงาน"
        subtitleTh="ความเชื่อมั่นจากผู้พัฒนาอสังหาริมทรัพย์ชั้นนำของประเทศไทย ตลอดระยะเวลากว่า 30 ปี ในงานประตู–หน้าต่างอลูมิเนียม ผนังกระจก และระบบเปลือกอาคาร"
      />

      <section className="bg-brand-950 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container-x relative">
          <div className="flex items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                Selected Works
              </div>
              <h2 className="mt-3 text-2xl md:text-4xl font-bold">
                ตัวอย่างผลงานโครงการ
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                ต่อไปนี้คือบางส่วนของโครงการที่เราได้รับความไว้วางใจตลอด 30+ ปี
                ยังมีผลงานอีกจำนวนมากที่ไม่ได้แสดงไว้บนหน้านี้
              </p>
            </div>
            <div className="hidden md:block text-sm text-white/60">
              Scroll • Click • Explore
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}/`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-accent/60 hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />

                <div className="absolute top-5 left-5 text-xs font-semibold tracking-widest text-accent drop-shadow">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-5 right-5 text-[10px] font-semibold tracking-widest text-white/90 bg-brand-900/70 backdrop-blur px-2.5 py-1 rounded-full">
                  {p.year}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-accent">
                    {p.type}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white leading-tight">
                    {p.name}
                  </h3>
                  <div className="mt-1 text-sm text-white/75">
                    {p.province}
                  </div>
                  <div className="mt-4 h-px w-12 bg-accent group-hover:w-full transition-all duration-500" />
                  <div className="mt-4 text-xs font-semibold text-accent opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    ดูรายละเอียดโครงการ →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
