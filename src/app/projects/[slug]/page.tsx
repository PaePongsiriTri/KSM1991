import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "ไม่พบโครงการ" };
  return {
    title: `${project.name} | K.S.Manufactory (1991)`,
    description: project.descriptionTh.slice(0, 160),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject =
    projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const metaItems = [
    { label: "ปีที่แล้วเสร็จ", labelEn: "Year", value: project.year },
    { label: "จังหวัด", labelEn: "Province", value: project.provinceTh },
    { label: "ประเภท", labelEn: "Type", value: project.typeTh },
    { label: "ผู้พัฒนา", labelEn: "Developer", value: project.developer },
  ];

  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="relative bg-brand-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-brand-950/60" />
        </div>

        <div className="container-x relative pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            <Link href="/projects/" className="hover:text-white transition-colors">
              Projects
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">{project.provinceTh}</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-4xl">
            {project.name}
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            {project.locationTh}
          </p>
        </div>
      </section>

      {/* Main image */}
      <section className="bg-white">
        <div className="container-x -mt-12 md:-mt-20 relative z-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/30 ring-1 ring-brand-100">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meta grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-4 gap-6 border-y border-brand-100 divide-brand-100 md:divide-x">
            {metaItems.map((m) => (
              <div key={m.label} className="py-6 md:px-6 first:md:pl-0 last:md:pr-0">
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent-dark font-semibold">
                  {m.labelEn}
                </div>
                <div className="mt-2 text-xs text-brand-500">{m.label}</div>
                <div className="mt-1 text-lg font-bold text-brand-950">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
                Project Overview
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-950 leading-tight">
                รายละเอียดโครงการ
              </h2>
              <p className="mt-6 text-brand-700 leading-relaxed text-base md:text-lg">
                {project.descriptionTh}
              </p>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
                  Project Highlights
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.highlightsTh.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 flex-none rounded-full bg-brand-700 flex items-center justify-center">
                        <svg
                          width="12"
                          height="12"
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
                      <span className="text-brand-800">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside>
              <div className="sticky top-28 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
                  Scope of Work
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.scope.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-sm text-brand-900 font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-brand-200/70">
                  <div className="text-xs uppercase tracking-wider text-brand-500 font-semibold">
                    สนใจโครงการลักษณะนี้?
                  </div>
                  <Link
                    href="/contact/"
                    className="mt-4 block rounded-lg bg-brand-900 text-white text-center text-sm font-semibold py-3 hover:bg-brand-800 transition-colors"
                  >
                    ขอใบเสนอราคา →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-brand-50/50 py-14 border-t border-brand-100">
        <div className="container-x grid md:grid-cols-2 gap-5">
          <Link
            href={`/projects/${prevProject.slug}/`}
            className="group block rounded-2xl bg-white border border-brand-100 p-6 hover:border-accent transition-colors"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
              ← โครงการก่อนหน้า
            </div>
            <div className="mt-2 text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
              {prevProject.name}
            </div>
            <div className="text-sm text-brand-500">
              {prevProject.provinceTh} · {prevProject.year}
            </div>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}/`}
            className="group block rounded-2xl bg-white border border-brand-100 p-6 hover:border-accent transition-colors text-right"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
              โครงการถัดไป →
            </div>
            <div className="mt-2 text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
              {nextProject.name}
            </div>
            <div className="text-sm text-brand-500">
              {nextProject.provinceTh} · {nextProject.year}
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
