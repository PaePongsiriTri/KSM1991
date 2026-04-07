import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "ไม่พบบริการ" };
  return {
    title: `${s.titleTh} (${s.title}) | K.S.Manufactory (1991)`,
    description: s.shortTh,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const next = services[(currentIndex + 1) % services.length];
  const prev =
    services[(currentIndex - 1 + services.length) % services.length];

  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="relative bg-brand-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-brand-900/70" />
        </div>

        <div className="container-x relative pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            <Link href="/services/" className="hover:text-white transition-colors">
              Services
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">{service.title}</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-4xl">
            {service.titleTh}
          </h1>
          <div className="mt-3 text-sm font-semibold tracking-widest text-accent uppercase">
            {service.title}
          </div>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            {service.shortTh}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
              Overview
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-950 leading-tight">
              รู้จักบริการนี้
            </h2>
            <p className="mt-6 text-brand-700 leading-relaxed text-base md:text-lg">
              {service.overviewTh}
            </p>

            <div className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
                Benefits · จุดเด่น
              </h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {service.benefitsTh.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/50 p-4"
                  >
                    <div className="mt-0.5 h-5 w-5 flex-none rounded-full bg-brand-700 flex items-center justify-center">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-brand-800 leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
                Applications · การใช้งาน
              </h3>
              <ul className="mt-4 space-y-3">
                {service.applicationsTh.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 text-sm text-brand-900"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-900 text-white p-6">
              <div className="text-xs uppercase tracking-wider text-accent font-semibold">
                Next step
              </div>
              <div className="mt-2 text-lg font-bold">
                ขอใบเสนอราคาสำหรับโครงการ
              </div>
              <p className="mt-2 text-sm text-white/70">
                ทีมวิศวกรของเราพร้อมให้คำปรึกษาฟรี
              </p>
              <Link
                href="/contact/"
                className="mt-5 block rounded-lg bg-accent text-brand-900 text-center text-sm font-bold py-3 hover:bg-accent-dark transition-colors"
              >
                ติดต่อเรา →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-50/50 py-20 md:py-24 border-y border-brand-100">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
              Our Process
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-950 leading-tight">
              ขั้นตอนการทำงาน
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.processTh.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl bg-white border border-brand-100 p-6 hover:border-accent hover:shadow-xl hover:shadow-brand-900/5 transition-all"
              >
                <div className="text-3xl font-extrabold text-accent">
                  {p.step}
                </div>
                <div className="mt-3 h-px w-10 bg-brand-200" />
                <h3 className="mt-4 text-base font-bold text-brand-950">
                  {p.titleTh}
                </h3>
                <p className="mt-2 text-sm text-brand-600 leading-relaxed">
                  {p.descTh}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-white py-14">
        <div className="container-x grid md:grid-cols-2 gap-5">
          <Link
            href={`/services/${prev.slug}/`}
            className="group block rounded-2xl bg-brand-50/60 border border-brand-100 p-6 hover:border-accent transition-colors"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
              ← บริการก่อนหน้า
            </div>
            <div className="mt-2 text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
              {prev.titleTh}
            </div>
            <div className="text-sm text-brand-500">{prev.title}</div>
          </Link>
          <Link
            href={`/services/${next.slug}/`}
            className="group block rounded-2xl bg-brand-50/60 border border-brand-100 p-6 hover:border-accent transition-colors text-right"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
              บริการถัดไป →
            </div>
            <div className="mt-2 text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
              {next.titleTh}
            </div>
            <div className="text-sm text-brand-500">{next.title}</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
