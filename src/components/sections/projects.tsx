import Image from "next/image";

const projects = [
  {
    name: "KAVE BANGSAEN",
    type: "Condominium",
    location: "Bangsaen, Chonburi",
    image: "/images/project-kave-bangsaen.png",
  },
  {
    name: "MONTE RANGSIT CAMPUS",
    type: "Mixed-use",
    location: "Rangsit",
    image: "/images/project-monte-rangsit.png",
  },
  {
    name: "THE ORIGIN Sukhumvit E22",
    type: "High-rise",
    location: "Sukhumvit, Bangkok",
    image: "/images/project-the-origin.png",
  },
  {
    name: "VAY AMATA",
    type: "Residential",
    location: "Amata, Chonburi",
    image: "/images/project-vay-amata.png",
  },
  {
    name: "SO KASET",
    type: "Condominium",
    location: "Kaset, Bangkok",
    image: "/images/project-so-kaset.png",
  },
  {
    name: "ATMOZ SRIRACHA",
    type: "Condominium",
    location: "Sriracha, Chonburi",
    image: "/images/project-atmoz-sriracha.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-brand-950 text-white relative overflow-hidden">
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Selected Projects
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              ผลงานที่น่าภาคภูมิใจ
            </h2>
            <p className="mt-5 text-white/70">
              ความเชื่อมั่นจากผู้พัฒนาอสังหาริมทรัพย์ชั้นนำของประเทศไทย
              ตลอดระยะเวลากว่า 30 ปี
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
          >
            ดูผลงานทั้งหมด →
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />

              <div className="absolute top-5 left-5 text-xs font-semibold tracking-widest text-accent drop-shadow">
                / {String(i + 1).padStart(2, "0")}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent">
                  {p.type}
                </div>
                <h3 className="mt-2 text-xl font-bold text-white leading-tight">
                  {p.name}
                </h3>
                <div className="mt-1 text-sm text-white/75">{p.location}</div>
                <div className="mt-4 h-px w-12 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
