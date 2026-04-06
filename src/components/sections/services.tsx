import Image from "next/image";

const services = [
  {
    title: "DOOR AND WINDOW",
    titleTh: "ประตู และ หน้าต่าง",
    desc: "ระบบประตูและหน้าต่างอลูมิเนียมที่ได้มาตรฐาน ออกแบบให้เหมาะกับทุกโครงการ",
    image: "/images/service-door-window.jpg",
  },
  {
    title: "STICKWALL SYSTEM",
    titleTh: "ระบบสติ๊กวอลล์",
    desc: "ระบบผนังกระจกประกอบหน้างาน เหมาะกับอาคารสำนักงานและพาณิชย์ขนาดใหญ่",
    image: "/images/service-stickwall.jpg",
  },
  {
    title: "UNITIZED SYSTEM",
    titleTh: "ระบบยูนิไทซ์",
    desc: "ผนังกระจกสำเร็จรูปประกอบจากโรงงาน ติดตั้งรวดเร็วและคุณภาพสูง",
    image: "/images/service-unitized.png",
  },
  {
    title: "GLASS WALL",
    titleTh: "ผนังกระจก",
    desc: "ผนังกระจกเต็มบาน เพิ่มแสงธรรมชาติและความหรูหราให้กับอาคาร",
    image: "/images/service-glass-wall.jpg",
  },
  {
    title: "SKYLIGHT AND SKYWALK",
    titleTh: "หลังคาโปร่ง และ ทางเดิน",
    desc: "ออกแบบและติดตั้งโครงสร้างหลังคากระจกและทางเดินเชื่อมระหว่างอาคาร",
    image: "/images/service-skylight.jpg",
  },
  {
    title: "RAILING",
    titleTh: "ราวกันตก",
    desc: "ราวกันตกอลูมิเนียมและกระจก ให้ทั้งความปลอดภัยและความสวยงาม",
    image: "/images/service-railing.png",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            บริการครบวงจร
            <br />
            <span className="text-white/85">งานอลูมิเนียมและกระจก</span>
          </h2>
          <p className="mt-5 text-white/75 max-w-xl">
            เราให้บริการตั้งแต่ออกแบบ ผลิต ติดตั้ง
            จนถึงบริการหลังการขายอย่างครอบคลุมทุกขั้นตอน
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl overflow-hidden bg-brand-800/40 ring-1 ring-white/15 hover:ring-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold tracking-wide text-white">
                  {s.title}
                </h3>
                <div className="text-xs text-accent font-medium mt-1">
                  {s.titleTh}
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
