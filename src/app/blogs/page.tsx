import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogs } from "@/lib/blogs";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "บทความ | K.S.Manufactory (1991)",
  description:
    "บทความและคำแนะนำเกี่ยวกับงานประตู–หน้าต่างอลูมิเนียม กระจก Curtain Wall และการดูแลรักษาอาคารจากทีมผู้เชี่ยวชาญ KSM1991",
};

export default function BlogsPage() {
  const sorted = [...blogs].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHeader
        eyebrow="Insights & Knowledge"
        titleTh="บทความและคำแนะนำ"
        subtitleTh="รวมบทความจากทีมวิศวกรและช่างของ KSM1991 ที่แบ่งปันความรู้เกี่ยวกับงานอลูมิเนียม กระจก และเปลือกอาคาร"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          {/* Featured */}
          <Link
            href={`/blogs/${featured.slug}/`}
            className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border border-brand-100 bg-brand-50/40 p-6 md:p-10 hover:border-accent transition-colors"
          >
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden ring-1 ring-brand-100">
              <Image
                src={featured.cover}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-brand-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                Featured
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-accent-dark font-semibold uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="text-brand-300">·</span>
                <span className="text-brand-500">{featured.dateTh}</span>
                <span className="text-brand-300">·</span>
                <span className="text-brand-500">
                  {featured.readMinutes} นาที
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-4xl font-bold text-brand-950 leading-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-brand-700 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-dark group-hover:text-brand-700 transition-colors">
                อ่านบทความ →
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((b) => (
              <Link
                key={b.slug}
                href={`/blogs/${b.slug}/`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-brand-100 bg-white hover:border-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={b.cover}
                    alt={b.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-accent-dark font-semibold uppercase tracking-wider">
                      {b.category}
                    </span>
                    <span className="text-brand-300">·</span>
                    <span className="text-brand-500">{b.readMinutes} นาที</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-brand-950 leading-tight line-clamp-2">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-600 line-clamp-3 flex-1">
                    {b.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between pt-5 border-t border-brand-100">
                    <span className="text-xs text-brand-500">{b.dateTh}</span>
                    <span className="text-xs font-semibold text-accent-dark group-hover:text-brand-700 transition-colors">
                      อ่านต่อ →
                    </span>
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
