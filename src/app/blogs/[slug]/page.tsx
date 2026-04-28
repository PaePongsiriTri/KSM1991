import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs, getBlog } from "@/lib/blogs";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return { title: "ไม่พบบทความ" };
  return {
    title: `${blog.title} | K.S.Manufactory (1991)`,
    description: blog.excerpt,
    alternates: { canonical: `/blogs/${blog.slug}/` },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  const related = blogs
    .filter((b) => b.slug !== blog.slug)
    .filter((b) => b.category === blog.category || b.tags.some((t) => blog.tags.includes(t)))
    .slice(0, 3);
  const relatedFallback = related.length >= 3
    ? related
    : [
        ...related,
        ...blogs.filter(
          (b) => b.slug !== blog.slug && !related.includes(b)
        ),
      ].slice(0, 3);

  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="relative bg-brand-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={blog.cover}
            alt={blog.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/85 to-brand-900/80" />
        </div>

        <div className="container-x relative pt-40 pb-20 md:pt-48 md:pb-24 max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            <Link href="/blogs/" className="hover:text-white transition-colors">
              Insights
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">{blog.category}</span>
          </div>
          <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
            {blog.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
            <span>{blog.dateTh}</span>
            <span className="text-white/30">·</span>
            <span>{blog.readMinutes} นาทีในการอ่าน</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <p className="text-lg md:text-xl text-brand-700 leading-relaxed font-medium border-l-4 border-accent pl-5">
            {blog.excerpt}
          </p>

          <div className="mt-14 space-y-12">
            {blog.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl md:text-2xl font-bold text-brand-950 leading-tight">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-brand-700 leading-relaxed text-base md:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        <span className="text-brand-800">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-14 pt-10 border-t border-brand-100">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-700 border border-brand-100"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl bg-brand-900 text-white p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              K.S.Manufactory (1991)
            </div>
            <h3 className="mt-3 text-xl md:text-2xl font-bold">
              มีคำถามเกี่ยวกับงานอลูมิเนียม–กระจก?
            </h3>
            <p className="mt-3 text-sm text-white/75 max-w-xl">
              ทีมวิศวกรของเรายินดีให้คำปรึกษาและจัดทำใบเสนอราคาฟรี ด้วยประสบการณ์กว่า 30 ปีในงานเปลือกอาคาร
            </p>
            <Link
              href="/contact/"
              className="mt-5 inline-flex items-center rounded-full bg-accent text-brand-900 px-6 py-3 text-sm font-bold hover:bg-accent-dark transition-colors"
            >
              ติดต่อเรา →
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedFallback.length > 0 && (
        <section className="bg-brand-50/50 py-20 border-t border-brand-100">
          <div className="container-x">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-950">
              บทความที่เกี่ยวข้อง
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {relatedFallback.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}/`}
                  className="group block rounded-2xl overflow-hidden border border-brand-100 bg-white hover:border-accent hover:-translate-y-1 transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.cover}
                      alt={r.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-accent-dark">
                      {r.category}
                    </div>
                    <h3 className="mt-2 text-base font-bold text-brand-950 leading-snug line-clamp-2">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
