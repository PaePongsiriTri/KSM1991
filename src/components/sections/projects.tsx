const projects = [
  { name: "VAY AMATA", type: "Residential", location: "Amata, Chonburi" },
  { name: "KAVE BANGSAEN", type: "Condominium", location: "Bangsaen" },
  { name: "MONTE RANGSIT CAMPUS", type: "Mixed-use", location: "Rangsit" },
  { name: "MIRA MONTE HUAHIN", type: "Residential", location: "Hua Hin" },
  { name: "SO KASET", type: "Condominium", location: "Kaset, Bangkok" },
  { name: "Modiz Rhyme Ramkhamhaeng", type: "Condominium", location: "Ramkhamhaeng" },
  { name: "THE ORIGIN Sukhumvit E22", type: "High-rise", location: "Sukhumvit" },
  { name: "SOHO Bangkok Ratchada", type: "Mixed-use", location: "Ratchada" },
  { name: "ATMOZ SRIRACHA", type: "Condominium", location: "Sriracha" },
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
            <p className="mt-5 text-brand-200">
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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-brand-800 to-brand-900 hover:border-accent/50 transition-all"
            >
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(${
                      [120, 45, 90, 60, 135, 75, 30, 105, 150][i % 9]
                    }deg, rgba(201,169,106,0.3), rgba(70,99,138,0.5), rgba(28,41,66,0.8))`,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>

              <div className="absolute top-5 left-5 text-xs font-semibold tracking-widest text-accent">
                / {String(i + 1).padStart(2, "0")}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent">
                  {p.type}
                </div>
                <h3 className="mt-2 text-xl font-bold text-white leading-tight">
                  {p.name}
                </h3>
                <div className="mt-1 text-sm text-brand-200">{p.location}</div>
                <div className="mt-4 h-px w-12 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
