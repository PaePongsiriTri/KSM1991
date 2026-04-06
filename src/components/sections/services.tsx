const services = [
  {
    title: "Door & Window",
    titleTh: "ประตู และ หน้าต่าง",
    desc: "ระบบประตูและหน้าต่างอลูมิเนียมที่ได้มาตรฐาน ออกแบบให้เหมาะกับทุกโครงการ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <circle cx="9" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Stickwall System",
    titleTh: "ระบบสติ๊กวอลล์",
    desc: "ระบบผนังกระจกประกอบหน้างาน เหมาะกับอาคารสำนักงานและพาณิชย์ขนาดใหญ่",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    title: "Unitized System",
    titleTh: "ระบบยูนิไทซ์",
    desc: "ผนังกระจกสำเร็จรูปประกอบจากโรงงาน ติดตั้งรวดเร็วและคุณภาพสูง",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </svg>
    ),
  },
  {
    title: "Glass Wall",
    titleTh: "ผนังกระจก",
    desc: "ผนังกระจกเต็มบาน เพิ่มแสงธรรมชาติและความหรูหราให้กับอาคาร",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" />
        <line x1="7" y1="3" x2="7" y2="21" opacity="0.4" />
        <line x1="12" y1="3" x2="12" y2="21" opacity="0.4" />
        <line x1="17" y1="3" x2="17" y2="21" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Skylight & Skywalk",
    titleTh: "หลังคาโปร่ง และ ทางเดิน",
    desc: "ออกแบบและติดตั้งโครงสร้างหลังคากระจกและทางเดินเชื่อมระหว่างอาคาร",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20" />
        <path d="M5 20l7-14 7 14" />
        <path d="M9 20l3-6 3 6" />
      </svg>
    ),
  },
  {
    title: "Railing",
    titleTh: "ราวกันตก",
    desc: "ราวกันตกอลูมิเนียมและกระจก ให้ทั้งความปลอดภัยและความสวยงาม",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
        <line x1="6" y1="6" x2="6" y2="18" />
        <line x1="12" y1="6" x2="12" y2="18" />
        <line x1="18" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-50/60">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-950 leading-tight">
            บริการครบวงจร
            <br />
            <span className="text-brand-600">งานอลูมิเนียมและกระจก</span>
          </h2>
          <p className="mt-5 text-brand-700">
            เราให้บริการตั้งแต่ออกแบบ ผลิต ติดตั้ง
            จนถึงบริการหลังการขายอย่างครอบคลุมทุกขั้นตอน
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-white rounded-2xl p-8 border border-brand-100 hover:border-accent/40 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-5xl font-bold text-brand-100 group-hover:text-accent/30 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="h-14 w-14 rounded-xl bg-brand-900 text-white flex items-center justify-center group-hover:bg-accent group-hover:text-brand-950 transition-colors">
                {s.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-950">{s.title}</h3>
              <div className="text-sm text-accent-dark font-medium mt-1">
                {s.titleTh}
              </div>
              <p className="mt-4 text-brand-600 text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
